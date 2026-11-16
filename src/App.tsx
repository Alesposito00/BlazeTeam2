import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, Menu } from 'lucide-react';
import { AnalysisView } from './components/AnalysisView';
import { BossMatchupView } from './components/BossMatchupView';
import { GuideProgressView, GuideSubTab } from './components/GuideProgressView';
import { MemberEditorModal } from './components/MemberEditorModal';
import { NavigationDrawer } from './components/NavigationDrawer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PokedexView } from './components/PokedexView';
import { PWAInstallButton } from './components/PWAInstallButton';
import { ShareShowdownModal } from './components/ShareShowdownModal';
import { computeAutoSpoilerStage, SpoilerMode } from './components/SpoilerGuardBar';
import { TeamBuilderView } from './components/TeamBuilderView';
import { TeamsManagerView } from './components/TeamsManagerView';
import { TypeChartView } from './components/TypeChartView';
import { SpoilerStage } from './data/bb2ItemsAndTms';
import {
  buildSavedTeamFromCompetitiveSuggestion,
  CompetitiveTeamSuggestion,
} from './data/competitiveTeams';
import {
  AppTab,
  GameProgress,
  PokemonSpecies,
  PokemonType,
  SavedTeam,
  TeamCategory,
  TeamMember,
} from './types/pokemon';
import {
  createDefaultMember,
  createStarterTeam,
  DEFAULT_STARTER_TEAM_ID,
  TeamPresetType,
} from './utils/showdown';

const TEAMS_STORAGE_KEY = 'blazedex_teams_v1';
const ACTIVE_TEAM_KEY = 'blazedex_active_team_v1';
const THEME_STORAGE_KEY = 'blazedex_theme';
const PROGRESS_STORAGE_KEY = 'blazedex_progress_v1';
const SPOILER_STORAGE_KEY = 'blazedex_spoiler_v1';

interface SpoilerPrefs {
  enabled: boolean;
  mode: SpoilerMode;
}

function loadInitialSpoilerPrefs(): SpoilerPrefs {
  try {
    const raw = localStorage.getItem(SPOILER_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<SpoilerPrefs>;
      const validModes: SpoilerMode[] = ['auto', '0', '1', '2', '3', '4'];
      return {
        enabled: typeof parsed.enabled === 'boolean' ? parsed.enabled : true,
        mode: parsed.mode && validModes.includes(parsed.mode) ? parsed.mode : 'auto',
      };
    }
  } catch {
    // ignore storage parse error
  }
  return { enabled: true, mode: 'auto' };
}

const EMPTY_PROGRESS: GameProgress = {
  completedMilestones: [],
  collectedTms: [],
  collectedItems: [],
};

function loadInitialProgress(): GameProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<GameProgress>;
      return {
        completedMilestones: Array.isArray(parsed.completedMilestones)
          ? parsed.completedMilestones
          : [],
        collectedTms: Array.isArray(parsed.collectedTms) ? parsed.collectedTms : [],
        collectedItems: Array.isArray(parsed.collectedItems) ? parsed.collectedItems : [],
        savSummary: parsed.savSummary,
      };
    }
  } catch {
    // ignore storage parse error
  }
  return EMPTY_PROGRESS;
}

function loadInitialTeams(): SavedTeam[] {
  try {
    const raw = localStorage.getItem(TEAMS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((t: SavedTeam) => ({
          ...t,
          category: t.category || 'Run Principale',
        }));
      }
    }
  } catch {
    // ignore storage parse error
  }
  return [createStarterTeam('serperior', { fixedId: DEFAULT_STARTER_TEAM_ID })];
}

const TAB_TITLES: Record<AppTab, string> = {
  team: 'Costruttore Squadra',
  teams: 'Le Mie Squadre',
  pokedex: 'Pokédex BB2 Redux',
  analysis: 'Analisi & Copertura',
  bosses: 'Boss Unima Redux',
  guide: 'Guida MT/MN & Run',
  typechart: 'Tabella 18 Tipi',
};

export default function App() {
  const [teams, setTeams] = useState<SavedTeam[]>(loadInitialTeams);
  const [activeTeamId, setActiveTeamId] = useState<string>(() => {
    try {
      const savedId = localStorage.getItem(ACTIVE_TEAM_KEY);
      if (savedId) return savedId;
    } catch {
      // ignore
    }
    return '';
  });

  const [tabHistory, setTabHistory] = useState<AppTab[]>(['team']);
  const activeTab = tabHistory[tabHistory.length - 1] ?? 'team';

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<number | null>(null);
  const [targetSlotForPick, setTargetSlotForPick] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [sharingTeam, setSharingTeam] = useState<SavedTeam | null>(null);
  const [requestedGuideSubTab, setRequestedGuideSubTab] = useState<{
    tab: GuideSubTab;
    nonce: number;
  } | null>(null);

  const [progress, setProgress] = useState<GameProgress>(loadInitialProgress);
  const [spoilerPrefs, setSpoilerPrefs] = useState<SpoilerPrefs>(loadInitialSpoilerPrefs);

  const teamsRef = useRef<SavedTeam[]>(teams);
  teamsRef.current = teams;

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    try {
      localStorage.setItem(TEAMS_STORAGE_KEY, JSON.stringify(teams));
    } catch {
      // ignore quota error
    }
  }, [teams]);

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore quota error
    }
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(SPOILER_STORAGE_KEY, JSON.stringify(spoilerPrefs));
    } catch {
      // ignore quota error
    }
  }, [spoilerPrefs]);

  const effectiveSpoilerStage = useMemo<SpoilerStage>(() => {
    if (spoilerPrefs.mode === 'auto') {
      return computeAutoSpoilerStage(progress);
    }
    return Number(spoilerPrefs.mode) as SpoilerStage;
  }, [spoilerPrefs.mode, progress]);

  const activeTeam = useMemo(() => {
    return teams.find((t) => t.id === activeTeamId) ?? teams[0];
  }, [teams, activeTeamId]);

  useEffect(() => {
    if (activeTeam) {
      try {
        localStorage.setItem(ACTIVE_TEAM_KEY, activeTeam.id);
      } catch {
        // ignore
      }
    }
  }, [activeTeam]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2800);
  }, []);

  const tabHistoryRef = useRef<AppTab[]>(tabHistory);
  tabHistoryRef.current = tabHistory;

  // Navigation with back-stack + Android WebView hardware Back button support
  const navigateTo = useCallback((nextTab: AppTab) => {
    setTabHistory((prev) => {
      const current = prev[prev.length - 1];
      if (current === nextTab) return prev;
      try {
        window.history.pushState({ blazedexTab: nextTab }, '', window.location.href);
      } catch {
        // ignore restricted history environments
      }
      return [...prev.slice(-24), nextTab];
    });
  }, []);

  useEffect(() => {
    const onPopState = () => {
      if (tabHistoryRef.current.length > 1) {
        setTargetSlotForPick(null);
        setTabHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const canGoBack = tabHistory.length > 1 || activeTab !== 'team';
  const previousTabLabel =
    tabHistory.length > 1 ? TAB_TITLES[tabHistory[tabHistory.length - 2]] : TAB_TITLES.team;

  const handleGoBack = useCallback(() => {
    setTargetSlotForPick(null);
    setTabHistory((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return ['team'];
    });
  }, []);

  const handleUpdateProgress = useCallback((next: GameProgress) => {
    setProgress(next);
  }, []);

  const handleShareTeam = useCallback((teamId: string) => {
    const target = teamsRef.current.find((t) => t.id === teamId);
    if (!target) return;
    setSharingTeam(target);
  }, []);

  const handleSelectActiveTeam = (id: string) => {
    setActiveTeamId(id);
  };

  const updateActiveTeam = (updater: (prev: SavedTeam) => SavedTeam) => {
    const current = teamsRef.current.find((t) => t.id === activeTeam.id) ?? activeTeam;
    const nextUpdated: SavedTeam = { ...updater(current), updatedAt: Date.now() };
    setTeams((prevTeams) =>
      prevTeams.map((t) => (t.id === nextUpdated.id ? nextUpdated : t))
    );
  };

  const handleCreateTeam = (preset: TeamPresetType) => {
    const created = createStarterTeam(preset);
    setTeams((prev) => [created, ...prev]);
    handleSelectActiveTeam(created.id);
    showToast(`Creata "${created.name}"`);
  };

  const handleCreateCustomTeam = (options: {
    name: string;
    category: TeamCategory;
    monotype?: PokemonType;
    mode: 'Standard' | 'Challenge Mode';
    preset: TeamPresetType;
  }) => {
    const created = createStarterTeam(options.preset, {
      name: options.name,
      category: options.category,
      monotype: options.monotype,
      mode: options.mode,
    });
    setTeams((prev) => [created, ...prev]);
    handleSelectActiveTeam(created.id);
    navigateTo('team');
    showToast(`Creata "${created.name}"`);
  };

  const handleImportCompetitiveTeam = useCallback(
    (suggestion: CompetitiveTeamSuggestion) => {
      const created = buildSavedTeamFromCompetitiveSuggestion(suggestion);
      setTeams((prev) => [created, ...prev]);
      setActiveTeamId(created.id);
      navigateTo('team');
      showToast(`Squadra "${suggestion.title}" caricata nel Costruttore!`);
    },
    [navigateTo, showToast]
  );

  const handleOpenCompetitiveGuide = useCallback(() => {
    setRequestedGuideSubTab({ tab: 'competitive', nonce: Date.now() });
    navigateTo('guide');
  }, [navigateTo]);

  const handleDuplicateTeam = (id: string) => {
    const orig = teams.find((t) => t.id === id);
    if (!orig) return;
    const copy: SavedTeam = {
      ...structuredClone(orig),
      id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      name: `${orig.name} (Copia)`,
      updatedAt: Date.now(),
    };
    setTeams((prev) => [copy, ...prev]);
    handleSelectActiveTeam(copy.id);
    showToast(`Duplicata "${orig.name}"`);
  };

  const handleUpdateTeamCategory = (id: string, category: TeamCategory, monotype?: PokemonType) => {
    const target = teamsRef.current.find((t) => t.id === id);
    if (!target) return;
    const updatedTarget: SavedTeam = { ...target, category, monotype, updatedAt: Date.now() };
    setTeams((prev) => prev.map((t) => (t.id === id ? updatedTarget : t)));
  };

  const handleDeleteTeam = (id: string) => {
    if (teams.length <= 1) return;
    const remaining = teams.filter((t) => t.id !== id);
    setTeams(remaining);
    if (activeTeam.id === id) {
      handleSelectActiveTeam(remaining[0].id);
    }
    showToast('Squadra eliminata');
  };

  const handleSelectSpecies = (species: PokemonSpecies) => {
    const newMember = createDefaultMember(species, 55);
    let assignedSlot = targetSlotForPick;

    if (assignedSlot === null) {
      const firstEmpty = activeTeam.members.findIndex((m) => m === null);
      if (firstEmpty !== -1) {
        assignedSlot = firstEmpty;
      } else {
        showToast('Squadra piena (6/6). Scegli uno slot da sostituire.');
        navigateTo('team');
        return;
      }
    }

    updateActiveTeam((t) => {
      const next = [...t.members];
      next[assignedSlot!] = newMember;
      return { ...t, members: next };
    });

    setTargetSlotForPick(null);
    navigateTo('team');
    showToast(`${species.name} aggiunto nello Slot ${assignedSlot + 1}`);
  };

  const handleSaveMember = (updated: TeamMember) => {
    if (editingSlot === null) return;
    updateActiveTeam((t) => {
      const next = [...t.members];
      next[editingSlot] = updated;
      return { ...t, members: next };
    });
    setEditingSlot(null);
  };

  const handleRemoveMember = () => {
    if (editingSlot === null) return;
    updateActiveTeam((t) => {
      const next = [...t.members];
      next[editingSlot] = null;
      return { ...t, members: next };
    });
    setEditingSlot(null);
    showToast('Pokémon rimosso dallo slot');
  };

  const handleSwapSpecies = () => {
    if (editingSlot === null) return;
    const slot = editingSlot;
    setEditingSlot(null);
    setTargetSlotForPick(slot);
    navigateTo('pokedex');
  };

  const handleReplaceAllMembers = (imported: TeamMember[]) => {
    const padded: (TeamMember | null)[] = [null, null, null, null, null, null];
    imported.slice(0, 6).forEach((m, i) => {
      padded[i] = m;
    });
    updateActiveTeam((t) => ({ ...t, members: padded }));
    showToast(`Importati ${imported.length} Pokémon nel team`);
  };

  const teamSpeciesIds = useMemo(
    () =>
      activeTeam.members
        .filter((m): m is TeamMember => m !== null)
        .map((m) => m.speciesId),
    [activeTeam.members]
  );

  const editingMember = editingSlot !== null ? activeTeam.members[editingSlot] : null;

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* dataDex Lateral Navigation Drawer (Mobile slide-out + Desktop sidebar) */}
      <NavigationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab !== 'pokedex') setTargetSlotForPick(null);
          navigateTo(tab);
        }}
        activeTeam={activeTeam}
        teamsCount={teams.length}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
        spoilerEnabled={spoilerPrefs.enabled}
        onToggleSpoiler={() =>
          setSpoilerPrefs((prev) => ({ ...prev, enabled: !prev.enabled }))
        }
        onToggleTeamMode={(mode) => updateActiveTeam((t) => ({ ...t, mode }))}
      />

      {/* Main Column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Compact dataDex Top App Bar (56px + Android safe-area-inset-top) */}
        <header className="sticky top-0 z-30 pt-safe border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
          <div className="h-14 px-3 sm:px-6 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 min-w-0">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden min-w-[44px] min-h-[44px] -ml-1 flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition shrink-0"
                aria-label="Apri menu laterale"
              >
                <Menu className="w-6 h-6" />
              </button>

              {canGoBack && (
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="min-w-[44px] min-h-[44px] px-2 flex items-center justify-center gap-1 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition shrink-0"
                  aria-label={`Torna indietro a ${previousTabLabel}`}
                  title={`Torna a ${previousTabLabel}`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Indietro
                  </span>
                </button>
              )}

              <div className="min-w-0 pl-1">
                <h1 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                  {TAB_TITLES[activeTab]}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <PWAInstallButton />
            </div>
          </div>
        </header>

        {/* Scrollable Workspace Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 pb-12 pb-safe">

          {activeTab === 'team' && (
            <TeamBuilderView
              teams={teams}
              activeTeam={activeTeam}
              onSelectTeam={handleSelectActiveTeam}
              onCreateTeam={handleCreateTeam}
              onRenameTeam={(name) => updateActiveTeam((t) => ({ ...t, name }))}
              onUpdateCategory={(category, monotype) =>
                updateActiveTeam((t) => ({ ...t, category, monotype }))
              }
              onToggleMode={(mode) => updateActiveTeam((t) => ({ ...t, mode }))}
              onDeleteTeam={handleDeleteTeam}
              onOpenSlotEditor={(idx) => setEditingSlot(idx)}
              onOpenPokedexForSlot={(idx) => {
                setTargetSlotForPick(idx);
                navigateTo('pokedex');
              }}
              onReplaceAllMembers={handleReplaceAllMembers}
              onOpenAnalysis={() => navigateTo('analysis')}
              onOpenTeamsManager={() => navigateTo('teams')}
              onShareTeam={handleShareTeam}
              isDark={isDark}
              onToggleTheme={() => setIsDark((d) => !d)}
            />
          )}

          {activeTab === 'teams' && (
            <TeamsManagerView
              teams={teams}
              activeTeamId={activeTeam.id}
              onShareTeam={handleShareTeam}
              onSelectAndOpen={(id) => {
                handleSelectActiveTeam(id);
                navigateTo('team');
              }}
              onCreateCustomTeam={handleCreateCustomTeam}
              onDuplicateTeam={handleDuplicateTeam}
              onUpdateTeamCategory={handleUpdateTeamCategory}
              onDeleteTeam={handleDeleteTeam}
              onOpenCompetitiveGuide={handleOpenCompetitiveGuide}
            />
          )}

          {activeTab === 'pokedex' && (
            <PokedexView
              targetSlot={targetSlotForPick}
              onCancelTargetSlot={() => {
                setTargetSlotForPick(null);
                handleGoBack();
              }}
              onSelectSpecies={handleSelectSpecies}
              teamSpeciesIds={teamSpeciesIds}
            />
          )}

          {activeTab === 'analysis' && (
            <AnalysisView team={activeTeam} onGoToTeam={() => navigateTo('team')} />
          )}

          {activeTab === 'bosses' && (
            <BossMatchupView
              team={activeTeam}
              onGoToTeam={() => navigateTo('team')}
              spoilerEnabled={spoilerPrefs.enabled}
              spoilerMode={spoilerPrefs.mode}
              effectiveSpoilerStage={effectiveSpoilerStage}
              onToggleSpoiler={() =>
                setSpoilerPrefs((prev) => ({ ...prev, enabled: !prev.enabled }))
              }
              onChangeSpoilerMode={(mode) =>
                setSpoilerPrefs((prev) => ({ ...prev, mode }))
              }
            />
          )}

          {activeTab === 'guide' && (
            <GuideProgressView
              progress={progress}
              onUpdateProgress={handleUpdateProgress}
              onShowToast={showToast}
              onImportCompetitiveTeam={handleImportCompetitiveTeam}
              requestedSubTab={requestedGuideSubTab}
              spoilerEnabled={spoilerPrefs.enabled}
              spoilerMode={spoilerPrefs.mode}
              effectiveSpoilerStage={effectiveSpoilerStage}
              onToggleSpoiler={() =>
                setSpoilerPrefs((prev) => ({ ...prev, enabled: !prev.enabled }))
              }
              onChangeSpoilerMode={(mode) =>
                setSpoilerPrefs((prev) => ({ ...prev, mode }))
              }
            />
          )}

          {activeTab === 'typechart' && <TypeChartView />}
        </main>
      </div>

      {/* Member Editor Modal / Bottom Sheet */}
      {editingMember && editingSlot !== null && (
        <MemberEditorModal
          member={editingMember}
          slotIndex={editingSlot}
          onSave={handleSaveMember}
          onRemove={handleRemoveMember}
          onSwapSpecies={handleSwapSpecies}
          onClose={() => setEditingSlot(null)}
        />
      )}

      {/* Showdown Share Modal */}
      {sharingTeam && (
        <ShareShowdownModal
          team={sharingTeam}
          onClose={() => setSharingTeam(null)}
          onShowToast={showToast}
        />
      )}

      {/* Action Feedback Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-4 z-50 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold shadow-xl">
          {toastMessage}
        </div>
      )}

      <OfflineIndicator />
    </div>
  );
}
