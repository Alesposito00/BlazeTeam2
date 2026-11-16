import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Backpack,
  CheckCircle2,
  Circle,
  Disc,
  Download,
  Eye,
  FileUp,
  Flag,
  Lock,
  MapPin,
  RotateCcw,
  Search,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react';
import {
  BB2_GAME_MILESTONES,
  BB2_GUIDE_ITEMS,
  BB2_GUIDE_TMS,
  GuideItemCategory,
  MilestonePhase,
  SpoilerStage,
} from '../data/bb2ItemsAndTms';
import { GameProgress } from '../types/pokemon';
import { parseGen5SaveFile } from '../utils/savParser';
import { getSpoilerUnlockHint, SpoilerGuardBar, SpoilerMode } from './SpoilerGuardBar';

interface GuideProgressViewProps {
  progress: GameProgress;
  onUpdateProgress: (next: GameProgress) => void;
  onShowToast: (msg: string) => void;
  spoilerEnabled: boolean;
  spoilerMode: SpoilerMode;
  effectiveSpoilerStage: SpoilerStage;
  onToggleSpoiler: () => void;
  onChangeSpoilerMode: (mode: SpoilerMode) => void;
}

const ITEM_CATEGORIES: (GuideItemCategory | 'Tutti')[] = [
  'Tutti',
  'Offensivi',
  'Difesa & Tattici',
  'Evoluzione',
  'Chiave & Utilità',
  'Bacche',
];

const MILESTONE_PHASES: MilestonePhase[] = [
  'Palestre',
  'Storia',
  'Lega & Post-Game',
  'Catture Leggendarie',
];

const PAGE_SIZE = 40;

export const GuideProgressView: React.FC<GuideProgressViewProps> = ({
  progress,
  onUpdateProgress,
  onShowToast,
  spoilerEnabled,
  spoilerMode,
  effectiveSpoilerStage,
  onToggleSpoiler,
  onChangeSpoilerMode,
}) => {
  const [subTab, setSubTab] = useState<'milestones' | 'tms' | 'items'>('milestones');
  const [phaseFilter, setPhaseFilter] = useState<MilestonePhase | 'Tutte'>('Tutte');
  const [revealedMilestoneIds, setRevealedMilestoneIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'missing' | 'owned'>('all');
  const [tmKindFilter, setTmKindFilter] = useState<'Tutti' | 'MT' | 'MN'>('Tutti');
  const [itemCatFilter, setItemCatFilter] = useState<GuideItemCategory | 'Tutti'>('Tutti');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [subTab, searchQuery, statusFilter, tmKindFilter, itemCatFilter]);

  const milestoneSet = useMemo(
    () => new Set(progress.completedMilestones),
    [progress.completedMilestones]
  );
  const tmSet = useMemo(() => new Set(progress.collectedTms), [progress.collectedTms]);
  const itemSet = useMemo(() => new Set(progress.collectedItems), [progress.collectedItems]);
  const revealedSet = useMemo(() => new Set(revealedMilestoneIds), [revealedMilestoneIds]);

  const hiddenMilestonesCount = useMemo(() => {
    if (!spoilerEnabled) return 0;
    return BB2_GAME_MILESTONES.filter(
      (ms) =>
        ms.spoilerStage > effectiveSpoilerStage &&
        !revealedSet.has(ms.id) &&
        !milestoneSet.has(ms.id)
    ).length;
  }, [spoilerEnabled, effectiveSpoilerStage, revealedSet, milestoneSet]);

  const toggleMilestone = (id: string) => {
    const next = new Set(milestoneSet);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onUpdateProgress({ ...progress, completedMilestones: [...next] });
  };

  const toggleTm = (id: string) => {
    const next = new Set(tmSet);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onUpdateProgress({ ...progress, collectedTms: [...next] });
  };

  const toggleItem = (id: string) => {
    const next = new Set(itemSet);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onUpdateProgress({ ...progress, collectedItems: [...next] });
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';

    setUploading(true);
    try {
      if (file.name.toLowerCase().endsWith('.json')) {
        const rawText = await file.text();
        const parsed = JSON.parse(rawText) as Partial<GameProgress>;
        if (!Array.isArray(parsed.completedMilestones)) {
          throw new Error('Backup JSON non valido.');
        }
        onUpdateProgress({
          completedMilestones: parsed.completedMilestones,
          collectedTms: Array.isArray(parsed.collectedTms) ? parsed.collectedTms : [],
          collectedItems: Array.isArray(parsed.collectedItems) ? parsed.collectedItems : [],
          savSummary: parsed.savSummary,
        });
        onShowToast('Avanzamento JSON ripristinato');
        return;
      }

      const result = await parseGen5SaveFile(file);
      const mergedMilestones = new Set([
        ...progress.completedMilestones,
        ...result.matchedMilestoneIds,
      ]);
      const mergedTms = new Set([...progress.collectedTms, ...result.matchedTmIds]);
      const mergedItems = new Set([...progress.collectedItems, ...result.matchedItemIds]);

      onUpdateProgress({
        completedMilestones: [...mergedMilestones],
        collectedTms: [...mergedTms],
        collectedItems: [...mergedItems],
        savSummary: result.summary,
      });

      const legendaryHits = result.matchedMilestoneIds.filter((id) => id.startsWith('leg-')).length;
      onShowToast(
        `Caricato ${result.summary.trainerName}: ${result.summary.badgesCount} medaglie, ${result.matchedTmIds.length} MT/MN${legendaryHits > 0 ? `, ${legendaryHits} leggendari` : ''}`
      );
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Errore durante la lettura del file di salvataggio.';
      onShowToast(msg);
    } finally {
      setUploading(false);
    }
  };

  const handleExportProgressJson = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blazedex2-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast('Backup avanzamento esportato');
  };

  const handleResetProgress = () => {
    onUpdateProgress({
      completedMilestones: [],
      collectedTms: [],
      collectedItems: [],
      savSummary: undefined,
    });
    onShowToast('Avanzamento azzerato');
  };

  const filteredTms = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BB2_GUIDE_TMS.filter((tm) => {
      if (tmKindFilter !== 'Tutti' && tm.kind !== tmKindFilter) return false;
      const owned = tmSet.has(tm.id);
      if (statusFilter === 'owned' && !owned) return false;
      if (statusFilter === 'missing' && owned) return false;
      if (q) {
        return (
          tm.code.toLowerCase().includes(q) ||
          tm.name.toLowerCase().includes(q) ||
          tm.locations.some((l) => l.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, statusFilter, tmKindFilter, tmSet]);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BB2_GUIDE_ITEMS.filter((it) => {
      if (itemCatFilter !== 'Tutti' && it.category !== itemCatFilter) return false;
      const owned = itemSet.has(it.id);
      if (statusFilter === 'owned' && !owned) return false;
      if (statusFilter === 'missing' && owned) return false;
      if (q) {
        return (
          it.name.toLowerCase().includes(q) ||
          it.category.toLowerCase().includes(q) ||
          it.locations.some((l) => l.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [searchQuery, statusFilter, itemCatFilter, itemSet]);

  const visibleTms = filteredTms.slice(0, visibleCount);
  const visibleItems = filteredItems.slice(0, visibleCount);

  const mainMilestones = useMemo(
    () => BB2_GAME_MILESTONES.filter((m) => m.phase === 'Palestre' || m.phase === 'Storia'),
    []
  );
  const postAndLegMilestones = useMemo(
    () =>
      BB2_GAME_MILESTONES.filter(
        (m) => m.phase === 'Lega & Post-Game' || m.phase === 'Catture Leggendarie'
      ),
    []
  );

  const mainDone = mainMilestones.filter((m) => milestoneSet.has(m.id)).length;
  const postDone = postAndLegMilestones.filter((m) => milestoneSet.has(m.id)).length;

  const mainPct = Math.round((mainDone / mainMilestones.length) * 100);
  const postPct = Math.round((postDone / postAndLegMilestones.length) * 100);
  const tmPct = Math.round((progress.collectedTms.length / BB2_GUIDE_TMS.length) * 100);
  const itemPct = Math.round((progress.collectedItems.length / BB2_GUIDE_ITEMS.length) * 100);

  const displayedPhases = phaseFilter === 'Tutte' ? MILESTONE_PHASES : [phaseFilter];

  return (
    <div className="space-y-5">
      {/* Save File Upload & Run Overview */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Diario Run &amp; Salvataggio (.sav / .dsv)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Carica il salvataggio del tuo emulatore (DraStic, MelonDS, DeSmuME) per spuntare automaticamente medaglie, leggendari catturati, MT/MN e oggetti dello zaino.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap shrink-0">
            <input
              ref={fileInputRef}
              type="file"
              accept=".sav,.dsv,.srm,.json"
              onChange={handleFileSelected}
              className="hidden"
            />
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
              className="min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold inline-flex items-center gap-2 shadow-sm transition disabled:opacity-60"
            >
              <FileUp className="w-4 h-4" />
              <span>{uploading ? 'Lettura...' : 'Carica Salvataggio (.sav)'}</span>
            </button>

            <button
              type="button"
              onClick={handleExportProgressJson}
              className="min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Esporta checklist avanzamento"
            >
              <Download className="w-4 h-4" />
              <span>Esporta</span>
            </button>

            {(progress.completedMilestones.length > 0 ||
              progress.collectedTms.length > 0 ||
              progress.collectedItems.length > 0 ||
              progress.savSummary) && (
              <button
                type="button"
                onClick={handleResetProgress}
                className="min-h-[44px] px-3 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/10 inline-flex items-center gap-1.5 transition"
                title="Azzera tutti gli obiettivi"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Azzera</span>
              </button>
            )}
          </div>
        </div>

        {/* Parsed .sav Summary Card */}
        {progress.savSummary && (
          <div className="p-3.5 rounded-xl bg-gradient-to-br from-red-600/10 via-slate-100 to-slate-50 dark:from-red-500/15 dark:via-slate-800/70 dark:to-slate-900 border border-red-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Allenatore</div>
              <div className="font-bold text-slate-900 dark:text-white truncate">
                {progress.savSummary.trainerName}{' '}
                <span className="font-mono text-[11px] text-slate-500">
                  #{String(progress.savSummary.tid).padStart(5, '0')}
                </span>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Tempo &amp; Soldi</div>
              <div className="font-mono font-bold text-slate-900 dark:text-white">
                {progress.savSummary.playtimeHours}h {String(progress.savSummary.playtimeMinutes).padStart(2, '0')}m · ${progress.savSummary.money.toLocaleString('it-IT')}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Medaglie Unima</div>
              <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {progress.savSummary.badgesCount} / 8
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Pokédex Catturati</div>
              <div className="font-mono font-bold text-slate-900 dark:text-white">
                {progress.savSummary.pokedexCaught} / 649
              </div>
            </div>
          </div>
        )}

        {/* Progress KPI Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              label: 'Palestre & Storia',
              done: mainDone,
              total: mainMilestones.length,
              pct: mainPct,
              barColor: 'bg-red-600',
            },
            {
              label: 'Post-Game & Leggendari',
              done: postDone,
              total: postAndLegMilestones.length,
              pct: postPct,
              barColor: 'bg-indigo-600',
            },
            {
              label: 'MT & MN Trovate',
              done: progress.collectedTms.length,
              total: BB2_GUIDE_TMS.length,
              pct: tmPct,
              barColor: 'bg-sky-500',
            },
            {
              label: 'Oggetti & Strumenti',
              done: progress.collectedItems.length,
              total: BB2_GUIDE_ITEMS.length,
              pct: itemPct,
              barColor: 'bg-emerald-500',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs gap-1">
                <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                  {stat.label}
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white shrink-0">
                  {stat.done}/{stat.total} ({stat.pct}%)
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${stat.barColor}`}
                  style={{ width: `${stat.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Spoiler Shield */}
      <SpoilerGuardBar
        spoilerEnabled={spoilerEnabled}
        spoilerMode={spoilerMode}
        effectiveStage={effectiveSpoilerStage}
        hiddenCount={hiddenMilestonesCount}
        revealedCount={revealedMilestoneIds.length}
        onToggleEnabled={onToggleSpoiler}
        onChangeMode={onChangeSpoilerMode}
        onResetRevealed={() => setRevealedMilestoneIds([])}
      />

      {/* Sub-Tabs */}
      <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 max-w-xl">
        {[
          { id: 'milestones', label: 'Obiettivi Run', icon: Flag },
          { id: 'tms', label: 'Guida MT / MN', icon: Disc },
          { id: 'items', label: 'Oggetti & Pietre', icon: Backpack },
        ].map((t) => {
          const Icon = t.icon;
          const active = subTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSubTab(t.id as 'milestones' | 'tms' | 'items')}
              className={`min-h-[42px] px-2.5 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition whitespace-nowrap ${
                active
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* MILESTONES TAB */}
      {subTab === 'milestones' && (
        <div className="space-y-4">
          {/* Phase Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {(['Tutte', ...MILESTONE_PHASES] as const).map((phase) => {
              const active = phaseFilter === phase;
              return (
                <button
                  key={phase}
                  type="button"
                  onClick={() => setPhaseFilter(phase)}
                  className={`min-h-[38px] px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                    active
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {phase}
                </button>
              );
            })}
          </div>

          {/* Lotta Metro & Pokémon World Tournament (PWT) Reference */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Sfide Competitive: Metropolitana Lotta &amp; Pokémon World Tournament (PWT)
                </h3>
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                Livello scalato a 50 · Farm PL
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between gap-2">
                  <span>Metropolitana Lotta (Battle Subway)</span>
                  <span className="text-[11px] font-mono text-red-600 dark:text-red-400">
                    Sciroccopoli
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Accessibile alla <strong>Stazione Ruota</strong>. I Treni Singolo, Doppio e Multi affrontano i Capometró <strong>Andy &amp; Torn</strong> alla <strong>21ª lotta</strong>; dopo la Lega si sbloccano i <strong>Treni Super</strong> (49ª lotta consecutiva per Trofei e Bacche rare).
                </p>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <strong>Negozio PL Stazione:</strong> Bendascelta, Lentiscelta, Stolascelta, Assorbisfera, Focalnastro, Palloncino e Vigorstrumenti EV.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between gap-2">
                  <span>Pokémon World Tournament (PWT)</span>
                  <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400">
                    Libecciopoli
                  </span>
                </div>
                {spoilerEnabled && effectiveSpoilerStage < 4 ? (
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    A sud di <strong>Libecciopoli</strong> si tiene il torneo di storia dopo la 5ª Palestra, oltre ai Tornei Noleggio e Tipo per guadagnare rapidamente <strong>Punti Lotta (PL)</strong> e insegnare mosse Tutor. I tornei avanzati si sbloccano dopo la Lega.
                  </p>
                ) : (
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Dopo la Lega sblocca i tornei regionali dei <strong>Capipalestra</strong> (Unima, Kanto, Johto, Hoenn, Sinnoh), il <strong>Torneo Mondiale Capipalestra</strong> e, con 10 vittorie, il <strong>Torneo dei Campioni Mondiali</strong> (Rosso, Blu, Camilla, Lance, Rocco, Adriano).
                  </p>
                )}
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <strong>Servizi PWT:</strong> Esperto Mosse (Fratelli Gemelli con Cocci), Esperto Introforza &amp; Giudice IV.
                </div>
              </div>
            </div>
          </div>

          {displayedPhases.map((phase) => {
            const list = BB2_GAME_MILESTONES.filter((m) => m.phase === phase);
            const PhaseIcon = phase === 'Catture Leggendarie' ? Sparkles : Trophy;
            return (
              <div
                key={phase}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <PhaseIcon
                      className={`w-4 h-4 ${
                        phase === 'Catture Leggendarie'
                          ? 'text-amber-500'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    />
                    <span>{phase}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {list.filter((m) => milestoneSet.has(m.id)).length}/{list.length}
                  </span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {list.map((ms) => {
                    const done = milestoneSet.has(ms.id);
                    const isSpoilerLocked =
                      spoilerEnabled &&
                      !done &&
                      !revealedSet.has(ms.id) &&
                      ms.spoilerStage > effectiveSpoilerStage;

                    if (isSpoilerLocked) {
                      return (
                        <div
                          key={ms.id}
                          className="min-h-[60px] px-4 py-3 flex items-center justify-between gap-3 bg-slate-50/60 dark:bg-slate-950/30"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                              <Lock className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                                Contenuto Storia Protetto ({ms.phase})
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                Sbloccato automaticamente {getSpoilerUnlockHint(ms.spoilerStage)}.
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              setRevealedMilestoneIds((prev) =>
                                prev.includes(ms.id) ? prev : [...prev, ms.id]
                              )
                            }
                            className="min-h-[36px] px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1.5 hover:border-indigo-500 transition shrink-0"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Rivela</span>
                          </button>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={ms.id}
                        type="button"
                        onClick={() => toggleMilestone(ms.id)}
                        className="w-full min-h-[60px] px-4 py-3 flex items-start justify-between gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          {done ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
                          )}
                          <div className="min-w-0">
                            <div
                              className={`text-sm font-bold ${
                                done
                                  ? 'line-through text-slate-400 dark:text-slate-500'
                                  : 'text-slate-900 dark:text-white'
                              }`}
                            >
                              {ms.title}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              <span className="font-medium text-slate-700 dark:text-slate-300">
                                {ms.location}
                              </span>
                              {ms.levelCap ? ` · Level Cap ${ms.levelCap}` : ''}
                              {` · ${ms.reward}`}
                            </div>
                            {ms.notes && (
                              <div className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5">
                                {ms.notes}
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TMs/HMs & ITEMS SHARED SEARCH/FILTERS */}
      {(subTab === 'tms' || subTab === 'items') && (
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  subTab === 'tms'
                    ? 'Cerca MT/MN, mossa o luogo (es. Aspertia, Earthquake)...'
                    : 'Cerca oggetto o luogo (es. Choice Scarf, Leftovers, Route 19)...'
                }
                className="w-full min-h-[44px] pl-10 pr-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-400"
                  aria-label="Cancella ricerca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'missing' | 'owned')}
                className="min-h-[44px] px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200"
                aria-label="Filtra stato raccolta"
              >
                <option value="all">Tutti</option>
                <option value="missing">Da raccogliere</option>
                <option value="owned">Già ottenuti</option>
              </select>

              {subTab === 'tms' && (
                <select
                  value={tmKindFilter}
                  onChange={(e) => setTmKindFilter(e.target.value as 'Tutti' | 'MT' | 'MN')}
                  className="min-h-[44px] px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200"
                  aria-label="Filtra MT o MN"
                >
                  <option value="Tutti">MT + MN</option>
                  <option value="MT">Solo MT</option>
                  <option value="MN">Solo MN</option>
                </select>
              )}
            </div>
          </div>

          {subTab === 'items' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {ITEM_CATEGORIES.map((cat) => {
                const active = itemCatFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setItemCatFilter(cat)}
                    className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                      active
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}

          {/* TM/HM List */}
          {subTab === 'tms' && (
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
              {filteredTms.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-500">
                  Nessuna MT/MN corrisponde ai filtri.
                </div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {visibleTms.map((tm) => {
                    const owned = tmSet.has(tm.id);
                    return (
                      <button
                        key={tm.id}
                        type="button"
                        onClick={() => toggleTm(tm.id)}
                        className="w-full min-h-[56px] px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          {owned ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400">
                                {tm.code}
                              </span>
                              <span
                                className={`text-sm font-bold ${
                                  owned
                                    ? 'line-through text-slate-400 dark:text-slate-500'
                                    : 'text-slate-900 dark:text-white'
                                }`}
                              >
                                {tm.name}
                              </span>
                            </div>
                            <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{tm.locations.join(' · ')}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Items List */}
          {subTab === 'items' && (
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-500">
                  Nessun oggetto corrisponde ai filtri.
                </div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {visibleItems.map((it) => {
                    const owned = itemSet.has(it.id);
                    return (
                      <button
                        key={it.id}
                        type="button"
                        onClick={() => toggleItem(it.id)}
                        className="w-full min-h-[56px] px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          {owned ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={`text-sm font-bold ${
                                  owned
                                    ? 'line-through text-slate-400 dark:text-slate-500'
                                    : 'text-slate-900 dark:text-white'
                                }`}
                              >
                                {it.name}
                              </span>
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                · {it.category}
                              </span>
                            </div>
                            <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{it.locations.join(' · ')}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Load More Button */}
          {((subTab === 'tms' && visibleCount < filteredTms.length) ||
            (subTab === 'items' && visibleCount < filteredItems.length)) && (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="min-h-[44px] px-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-100 hover:border-red-500 transition"
              >
                Mostra altri {PAGE_SIZE} (rimanenti:{' '}
                {(subTab === 'tms' ? filteredTms.length : filteredItems.length) - visibleCount})
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
