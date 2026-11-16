import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { ArrowLeft, CheckCircle2, Cloud, Loader2, Menu } from 'lucide-react';
import { AnalysisView } from './components/AnalysisView';
import { BossMatchupView } from './components/BossMatchupView';
import { DriveActionModal, DriveModalState } from './components/DriveActionModal';
import { GuideProgressView } from './components/GuideProgressView';
import { MemberEditorModal } from './components/MemberEditorModal';
import { NavigationDrawer } from './components/NavigationDrawer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PokedexView } from './components/PokedexView';
import { PWAInstallButton } from './components/PWAInstallButton';
import { computeAutoSpoilerStage, SpoilerMode } from './components/SpoilerGuardBar';
import { TeamBuilderView } from './components/TeamBuilderView';
import { TeamsManagerView } from './components/TeamsManagerView';
import { TypeChartView } from './components/TypeChartView';
import { SpoilerStage } from './data/bb2ItemsAndTms';
import {
  auth,
  clearCachedDriveAccessToken,
  getCachedDriveAccessToken,
  signInWithGoogleDrive,
} from './firebase';
import {
  buildSavedTeamFromDriveShowdown,
  createDriveShowdownFile,
  deleteDriveShowdownFile,
  downloadDriveShowdownFileContent,
  DriveAuthError,
  DriveShowdownFile,
  enableDriveLinkSharing,
  findMatchingDriveFile,
  getDriveFileMetadata,
  listDriveShowdownFiles,
  resetDriveFolderCache,
  updateDriveShowdownFile,
} from './services/driveTeams';
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
  exportTeamToShowdown,
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

  // Google OAuth / Google Drive Showdown State (no Cloud Firestore DB)
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [driveAccessToken, setDriveAccessToken] = useState<string | null>(() =>
    getCachedDriveAccessToken()
  );
  const [driveFiles, setDriveFiles] = useState<DriveShowdownFile[]>([]);
  const [driveLoading, setDriveLoading] = useState(false);
  const [driveModal, setDriveModal] = useState<DriveModalState | null>(null);
  const [driveModalBusy, setDriveModalBusy] = useState(false);
  const [driveModalError, setDriveModalError] = useState<string | null>(null);
  const [pendingDriveImportId, setPendingDriveImportId] = useState<string | null>(null);

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

  // Navigation with back-stack support
  const navigateTo = useCallback((nextTab: AppTab) => {
    setTabHistory((prev) => {
      const current = prev[prev.length - 1];
      if (current === nextTab) return prev;
      return [...prev.slice(-24), nextTab];
    });
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

  // Import team from shared Google Drive Showdown link (?driveTeam=FILE_ID) if present
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const driveTeamId = params.get('driveTeam');
      if (!driveTeamId) return;

      params.delete('driveTeam');
      const cleanQuery = params.toString();
      const cleanUrl = `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ''}${window.location.hash}`;
      window.history.replaceState({}, '', cleanUrl);
      setPendingDriveImportId(driveTeamId);
      navigateTo('teams');
    } catch {
      // ignore invalid URL state
    }
  }, [navigateTo]);

  // Google OAuth session state (strictly client-side Drive access, no Cloud DB)
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      if (!nextUser) {
        clearCachedDriveAccessToken();
        resetDriveFolderCache();
        setDriveAccessToken(null);
        setDriveFiles([]);
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  const handleUpdateProgress = useCallback((next: GameProgress) => {
    setProgress(next);
  }, []);

  const refreshDriveFiles = useCallback(
    async (tokenOverride?: string | null): Promise<DriveShowdownFile[]> => {
      const token = tokenOverride ?? getCachedDriveAccessToken();
      if (!token) return [];
      setDriveLoading(true);
      try {
        const files = await listDriveShowdownFiles(token);
        setDriveFiles(files);
        return files;
      } catch (err) {
        if (err instanceof DriveAuthError) {
          setDriveAccessToken(null);
          setDriveFiles([]);
          showToast('Permesso Google Drive scaduto: autorizza di nuovo Google Drive.');
        } else {
          showToast('Impossibile aggiornare i file da Google Drive.');
        }
        return [];
      } finally {
        setDriveLoading(false);
      }
    },
    [showToast]
  );

  const ensureDriveToken = useCallback(async (): Promise<string | null> => {
    const existing = getCachedDriveAccessToken();
    if (existing) {
      setDriveAccessToken(existing);
      return existing;
    }

    setAuthLoading(true);
    try {
      const res = await signInWithGoogleDrive();
      if (!res.accessToken) {
        showToast('Connesso a Google, ma token Drive non ottenuto: riprova.');
        return null;
      }
      setDriveAccessToken(res.accessToken);
      await refreshDriveFiles(res.accessToken);
      return res.accessToken;
    } catch (error: unknown) {
      const code = (error as { code?: string })?.code;
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        showToast('Autorizzazione Google Drive annullata');
      } else if (code === 'auth/popup-blocked') {
        showToast('Popup bloccato dal browser: consenti i popup per collegare Drive.');
      } else {
        showToast('Accesso a Google Drive non riuscito. Riprova.');
      }
      return null;
    } finally {
      setAuthLoading(false);
    }
  }, [refreshDriveFiles, showToast]);

  const handleSignInGoogle = async () => {
    setAuthLoading(true);
    try {
      const res = await signInWithGoogleDrive();
      setDriveAccessToken(res.accessToken);
      if (res.accessToken) {
        await refreshDriveFiles(res.accessToken);
        showToast(`Google Drive collegato (${res.user.displayName || res.user.email})`);
      } else {
        showToast(`Connesso come ${res.user.displayName || res.user.email}`);
      }
    } catch (error: unknown) {
      const code = (error as { code?: string })?.code;
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        showToast('Accesso Google annullato');
      } else if (code === 'auth/popup-blocked') {
        showToast('Popup bloccato dal browser: consenti i popup per accedere.');
      } else {
        showToast('Accesso Google non riuscito. Riprova.');
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      clearCachedDriveAccessToken();
      resetDriveFolderCache();
      setDriveAccessToken(null);
      setDriveFiles([]);
      await signOut(auth);
      showToast('Disconnesso. Le squadre restano salvate sul dispositivo.');
    } catch {
      showToast('Errore durante la disconnessione.');
    }
  };

  const importShowdownFromDriveId = useCallback(
    async (fileId: string, providedFile?: DriveShowdownFile): Promise<boolean> => {
      const token = await ensureDriveToken();
      if (!token) return false;

      setDriveLoading(true);
      try {
        const meta = providedFile ?? (await getDriveFileMetadata(token, fileId));
        const text = await downloadDriveShowdownFileContent(token, fileId);
        const importedTeam = buildSavedTeamFromDriveShowdown(meta, text);
        if (!importedTeam) {
          showToast('Il file Showdown selezionato non contiene Pokémon validi.');
          return false;
        }

        setTeams((prev) => {
          const exists = prev.some((t) => t.id === importedTeam.id);
          if (exists) {
            return prev.map((t) => (t.id === importedTeam.id ? importedTeam : t));
          }
          return [importedTeam, ...prev];
        });
        setActiveTeamId(importedTeam.id);
        navigateTo('team');
        showToast(`Squadra "${importedTeam.name}" caricata da Google Drive!`);
        return true;
      } catch (err) {
        if (err instanceof DriveAuthError) {
          setDriveAccessToken(null);
          showToast('Sessione Drive scaduta: riautorizza Google Drive.');
        } else {
          showToast('Impossibile leggere il file Showdown da Google Drive.');
        }
        return false;
      } finally {
        setDriveLoading(false);
      }
    },
    [ensureDriveToken, navigateTo, showToast]
  );

  const handleImportAllFromDrive = useCallback(async () => {
    const token = await ensureDriveToken();
    if (!token) return;

    setDriveLoading(true);
    try {
      const files = await listDriveShowdownFiles(token);
      setDriveFiles(files);
      if (files.length === 0) {
        showToast('Nessun file Showdown trovato su Google Drive.');
        return;
      }

      const importedList: SavedTeam[] = [];
      for (const file of files) {
        try {
          const text = await downloadDriveShowdownFileContent(token, file.id);
          const parsed = buildSavedTeamFromDriveShowdown(file, text);
          if (parsed) importedList.push(parsed);
        } catch {
          // skip unreadable individual file
        }
      }

      if (importedList.length === 0) {
        showToast('Nessuna squadra valida trovata nei file Showdown su Drive.');
        return;
      }

      setTeams((prev) => {
        const mergedMap = new Map(prev.map((t) => [t.id, t]));
        for (const imp of importedList) {
          mergedMap.set(imp.id, imp);
        }
        return [...mergedMap.values()].sort((a, b) => b.updatedAt - a.updatedAt);
      });
      setActiveTeamId(importedList[0].id);
      showToast(`Caricate ${importedList.length} squadre Showdown da Google Drive!`);
    } catch (err) {
      if (err instanceof DriveAuthError) {
        setDriveAccessToken(null);
        showToast('Sessione Drive scaduta: autorizza di nuovo Google Drive.');
      } else {
        showToast('Errore durante il caricamento dei file da Google Drive.');
      }
    } finally {
      setDriveLoading(false);
    }
  }, [ensureDriveToken, showToast]);

  // Auto-import pending ?driveTeam=FILE_ID once Google Drive token is active
  useEffect(() => {
    if (!pendingDriveImportId || !driveAccessToken) return;
    const idToLoad = pendingDriveImportId;
    setPendingDriveImportId(null);
    void importShowdownFromDriveId(idToLoad);
  }, [pendingDriveImportId, driveAccessToken, importShowdownFromDriveId]);

  const handleSaveTeamToDrive = useCallback(
    async (teamId: string) => {
      const target = teamsRef.current.find((t) => t.id === teamId);
      if (!target) return;

      if (!exportTeamToShowdown(target).trim()) {
        showToast('Aggiungi almeno un Pokémon prima di salvare su Google Drive.');
        return;
      }

      const token = await ensureDriveToken();
      if (!token) return;

      setDriveLoading(true);
      try {
        const latestFiles = await listDriveShowdownFiles(token);
        setDriveFiles(latestFiles);
        const existing = findMatchingDriveFile(latestFiles, target);

        if (!existing) {
          await createDriveShowdownFile(token, target);
          await refreshDriveFiles(token);
          showToast(`Salvata "${target.name}" in formato Showdown su Google Drive!`);
        } else {
          setDriveModalError(null);
          setDriveModal({ kind: 'overwrite', team: target, existingFile: existing });
        }
      } catch (err) {
        if (err instanceof DriveAuthError) {
          setDriveAccessToken(null);
          showToast('Sessione Drive scaduta: autorizza di nuovo Google Drive.');
        } else {
          showToast('Errore durante il salvataggio Showdown su Google Drive.');
        }
      } finally {
        setDriveLoading(false);
      }
    },
    [ensureDriveToken, refreshDriveFiles, showToast]
  );

  const handleSaveAllTeamsToDrive = useCallback(async () => {
    const nonEmptyTeams = teamsRef.current.filter((t) => exportTeamToShowdown(t).trim().length > 0);
    if (nonEmptyTeams.length === 0) {
      showToast('Nessuna squadra con Pokémon da salvare su Google Drive.');
      return;
    }

    const token = await ensureDriveToken();
    if (!token) return;

    setDriveLoading(true);
    try {
      const latestFiles = await listDriveShowdownFiles(token);
      setDriveFiles(latestFiles);

      const newTeams: SavedTeam[] = [];
      const existingPairs: { team: SavedTeam; file: DriveShowdownFile }[] = [];

      for (const t of nonEmptyTeams) {
        const match = findMatchingDriveFile(latestFiles, t);
        if (match) {
          existingPairs.push({ team: t, file: match });
        } else {
          newTeams.push(t);
        }
      }

      if (existingPairs.length > 0) {
        setDriveModalError(null);
        setDriveModal({ kind: 'batch-save', newTeams, existingPairs });
        return;
      }

      for (const t of newTeams) {
        await createDriveShowdownFile(token, t);
      }
      await refreshDriveFiles(token);
      showToast(`${newTeams.length} file Showdown salvati su Google Drive!`);
    } catch (err) {
      if (err instanceof DriveAuthError) {
        setDriveAccessToken(null);
        showToast('Sessione Drive scaduta: autorizza di nuovo Google Drive.');
      } else {
        showToast('Errore nel salvataggio multiplo su Google Drive.');
      }
    } finally {
      setDriveLoading(false);
    }
  }, [ensureDriveToken, refreshDriveFiles, showToast]);

  const handleShareTeam = useCallback(
    async (teamId: string) => {
      const target = teamsRef.current.find((t) => t.id === teamId);
      if (!target) return;

      let existingFile: DriveShowdownFile | undefined;
      if (getCachedDriveAccessToken()) {
        existingFile = findMatchingDriveFile(driveFiles, target);
      }
      setDriveModalError(null);
      setDriveModal({ kind: 'share', team: target, existingFile });
    },
    [driveFiles]
  );

  const handleConfirmOverwriteDrive = async (team: SavedTeam, existingFileId: string) => {
    const token = await ensureDriveToken();
    if (!token) return;
    setDriveModalBusy(true);
    setDriveModalError(null);
    try {
      await updateDriveShowdownFile(token, existingFileId, team);
      await refreshDriveFiles(token);
      setDriveModal(null);
      showToast(`File Showdown "${team.name}" aggiornato su Google Drive!`);
    } catch (err) {
      setDriveModalError(
        err instanceof Error ? err.message : 'Impossibile aggiornare il file su Drive.'
      );
    } finally {
      setDriveModalBusy(false);
    }
  };

  const handleConfirmCreateNewCopyDrive = async (team: SavedTeam) => {
    const token = await ensureDriveToken();
    if (!token) return;
    setDriveModalBusy(true);
    setDriveModalError(null);
    try {
      const copyTeam: SavedTeam = {
        ...team,
        name: `${team.name} (${new Date().toLocaleTimeString('it-IT', {
          hour: '2-digit',
          minute: '2-digit',
        })})`,
      };
      await createDriveShowdownFile(token, copyTeam);
      await refreshDriveFiles(token);
      setDriveModal(null);
      showToast(`Creato nuovo file Showdown "${copyTeam.name}" su Google Drive!`);
    } catch (err) {
      setDriveModalError(
        err instanceof Error ? err.message : 'Impossibile creare il nuovo file su Drive.'
      );
    } finally {
      setDriveModalBusy(false);
    }
  };

  const handleConfirmBatchAllDrive = async (
    newTeams: SavedTeam[],
    existingPairs: { team: SavedTeam; file: DriveShowdownFile }[]
  ) => {
    const token = await ensureDriveToken();
    if (!token) return;
    setDriveModalBusy(true);
    setDriveModalError(null);
    try {
      for (const t of newTeams) {
        await createDriveShowdownFile(token, t);
      }
      for (const { team, file } of existingPairs) {
        await updateDriveShowdownFile(token, file.id, team);
      }
      await refreshDriveFiles(token);
      setDriveModal(null);
      showToast(
        `Sincronizzati ${newTeams.length + existingPairs.length} file Showdown su Google Drive!`
      );
    } catch (err) {
      setDriveModalError(
        err instanceof Error ? err.message : 'Errore durante il salvataggio multiplo su Drive.'
      );
    } finally {
      setDriveModalBusy(false);
    }
  };

  const handleConfirmBatchNewOnlyDrive = async (newTeams: SavedTeam[]) => {
    const token = await ensureDriveToken();
    if (!token) return;
    setDriveModalBusy(true);
    setDriveModalError(null);
    try {
      for (const t of newTeams) {
        await createDriveShowdownFile(token, t);
      }
      await refreshDriveFiles(token);
      setDriveModal(null);
      showToast(`Creati ${newTeams.length} nuovi file Showdown su Google Drive!`);
    } catch (err) {
      setDriveModalError(
        err instanceof Error ? err.message : 'Errore durante la creazione su Drive.'
      );
    } finally {
      setDriveModalBusy(false);
    }
  };

  const handleConfirmDeleteDrive = async (file: DriveShowdownFile) => {
    const token = await ensureDriveToken();
    if (!token) return;
    setDriveModalBusy(true);
    setDriveModalError(null);
    try {
      await deleteDriveShowdownFile(token, file.id);
      await refreshDriveFiles(token);
      setDriveModal(null);
      showToast(`Eliminato "${file.name}" da Google Drive.`);
    } catch (err) {
      setDriveModalError(
        err instanceof Error ? err.message : 'Impossibile eliminare il file da Google Drive.'
      );
    } finally {
      setDriveModalBusy(false);
    }
  };

  const handleConfirmShareDrive = async (team: SavedTeam, existingFileId?: string) => {
    const token = await ensureDriveToken();
    if (!token) return;
    setDriveModalBusy(true);
    setDriveModalError(null);
    try {
      let targetFileId = existingFileId;
      if (!targetFileId) {
        const latestFiles = await listDriveShowdownFiles(token);
        const match = findMatchingDriveFile(latestFiles, team);
        targetFileId = match?.id;
      }

      const savedFile = targetFileId
        ? await updateDriveShowdownFile(token, targetFileId, team)
        : await createDriveShowdownFile(token, team);

      const sharedFile = await enableDriveLinkSharing(token, savedFile.id);
      await refreshDriveFiles(token);
      setDriveModal({ kind: 'share', team, existingFile: sharedFile, sharedFile });
      showToast('Link Google Drive del file Showdown generato!');
    } catch (err) {
      setDriveModalError(
        err instanceof Error ? err.message : 'Errore nella generazione del link Google Drive.'
      );
    } finally {
      setDriveModalBusy(false);
    }
  };

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
        user={user}
        authLoading={authLoading}
        driveLoading={driveLoading}
        driveConnected={Boolean(user && driveAccessToken)}
        onSignInGoogle={handleSignInGoogle}
        onSignOut={handleSignOut}
      />

      {/* Main Column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Compact dataDex Top App Bar (56px, <= 7% mobile height) */}
        <header className="sticky top-0 z-30 h-14 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
          <div className="h-full px-3 sm:px-6 flex items-center justify-between gap-2">
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
              {user ? (
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="min-h-[38px] px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition"
                  title={`Connesso come ${user.displayName || user.email}`}
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Google'}
                      className="w-5 h-5 rounded-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {(user.displayName || user.email || 'A').charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="hidden sm:inline max-w-[110px] truncate">
                    {user.displayName?.split(' ')[0] || 'Account'}
                  </span>
                  {driveLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500 shrink-0" />
                  ) : driveAccessToken ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  ) : (
                    <Cloud className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={authLoading}
                  onClick={handleSignInGoogle}
                  className="min-h-[38px] px-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5 hover:border-red-500 disabled:opacity-60 transition"
                >
                  {authLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#EA4335"
                        d="M12 10.2v3.9h5.4c-.2 1.2-1.4 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.1 14.6 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12s4.4 9.8 9.8 9.8c5.7 0 9.4-4 9.4-9.6 0-.6-.1-1.1-.2-1.6H12z"
                      />
                    </svg>
                  )}
                  <span>Accedi</span>
                </button>
              )}

              <PWAInstallButton />
            </div>
          </div>
        </header>

        {/* Scrollable Workspace Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 pb-12">
          {pendingDriveImportId && !driveAccessToken && (
            <div className="mb-4 p-4 rounded-2xl bg-red-600/10 border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-900 dark:text-white">
                <Cloud className="w-4 h-4 text-red-600 shrink-0" />
                <span>Hai aperto un link squadra Google Drive: autorizza Google Drive per scaricare il file Showdown.</span>
              </div>
              <button
                type="button"
                disabled={authLoading}
                onClick={handleSignInGoogle}
                className="min-h-[40px] px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shrink-0"
              >
                Importa da Google Drive
              </button>
            </div>
          )}

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
              onSaveTeamToDrive={handleSaveTeamToDrive}
              onShareTeam={handleShareTeam}
              onImportFromDriveUrl={(fileId) => importShowdownFromDriveId(fileId)}
              driveLoading={driveLoading}
              isDark={isDark}
              onToggleTheme={() => setIsDark((d) => !d)}
            />
          )}

          {activeTab === 'teams' && (
            <TeamsManagerView
              teams={teams}
              activeTeamId={activeTeam.id}
              user={user}
              authLoading={authLoading}
              driveConnected={Boolean(user && driveAccessToken)}
              driveFiles={driveFiles}
              driveLoading={driveLoading}
              onSignInGoogle={handleSignInGoogle}
              onRefreshDriveFiles={() => void refreshDriveFiles()}
              onSaveTeamToDrive={handleSaveTeamToDrive}
              onSaveAllTeamsToDrive={() => void handleSaveAllTeamsToDrive()}
              onImportDriveFile={(file) => void importShowdownFromDriveId(file.id, file)}
              onImportAllFromDrive={() => void handleImportAllFromDrive()}
              onRequestDeleteDriveFile={(file) => {
                setDriveModalError(null);
                setDriveModal({ kind: 'delete', file });
              }}
              onShareTeam={handleShareTeam}
              onSelectAndOpen={(id) => {
                handleSelectActiveTeam(id);
                navigateTo('team');
              }}
              onCreateCustomTeam={handleCreateCustomTeam}
              onDuplicateTeam={handleDuplicateTeam}
              onUpdateTeamCategory={handleUpdateTeamCategory}
              onDeleteTeam={handleDeleteTeam}
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

      {/* Google Drive Showdown Confirmation & Share Modal */}
      {driveModal && (
        <DriveActionModal
          modal={driveModal}
          busy={driveModalBusy}
          error={driveModalError}
          onClose={() => {
            if (!driveModalBusy) {
              setDriveModal(null);
              setDriveModalError(null);
            }
          }}
          onConfirmOverwrite={(team, fileId) => void handleConfirmOverwriteDrive(team, fileId)}
          onConfirmCreateNewCopy={(team) => void handleConfirmCreateNewCopyDrive(team)}
          onConfirmBatchAll={(newTeams, pairs) =>
            void handleConfirmBatchAllDrive(newTeams, pairs)
          }
          onConfirmBatchNewOnly={(newTeams) => void handleConfirmBatchNewOnlyDrive(newTeams)}
          onConfirmDelete={(file) => void handleConfirmDeleteDrive(file)}
          onConfirmShareDrive={(team, fileId) => void handleConfirmShareDrive(team, fileId)}
          onCopyShowdownText={(txt) => {
            void navigator.clipboard.writeText(txt).catch(() => {});
            showToast('Testo Pokémon Showdown copiato negli appunti!');
          }}
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
