import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeftRight,
  ArrowRight,
  Check,
  Compass,
  Copy,
  Edit3,
  FileCode2,
  Moon,
  Plus,
  Share2,
  ShieldAlert,
  Sparkles,
  Sun,
  Swords,
  Trash2,
  Upload,
  Users,
  X,
} from 'lucide-react';
import { BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import { MOVES_BY_ID } from '../data/moves';
import { ITEMS_BY_NAME, NATURES_BY_NAME } from '../data/naturesAndItems';
import { analyzeBattleTactics } from '../data/teamAdvisor';
import { ALL_TYPES, analyzeTeamDefense, getBST, TYPE_STYLES } from '../data/typeChart';
import { BattleFormat, PokemonType, SavedTeam, TeamCategory, TeamMember } from '../types/pokemon';
import {
  exportTeamToShowdown,
  importTeamFromShowdown,
  TEAM_CATEGORIES,
  TeamPresetType,
} from '../utils/showdown';
import { PokemonArtwork } from './PokemonArtwork';
import { TypeBadge } from './TypeBadge';

interface TeamBuilderViewProps {
  teams: SavedTeam[];
  activeTeam: SavedTeam;
  onSelectTeam: (id: string) => void;
  onCreateTeam: (preset: TeamPresetType) => void;
  onRenameTeam: (name: string) => void;
  onUpdateCategory: (category: TeamCategory, monotype?: PokemonType) => void;
  onToggleBattleFormat: (format: BattleFormat) => void;
  onToggleMode: (mode: 'Standard' | 'Challenge Mode') => void;
  onDeleteTeam: (id: string) => void;
  onOpenSlotEditor: (slotIndex: number) => void;
  onOpenPokedexForSlot: (slotIndex: number) => void;
  onReplaceAllMembers: (members: TeamMember[]) => void;
  onOpenAnalysis: () => void;
  onOpenTeamsManager: () => void;
  onShareTeam: (id: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const TeamBuilderView: React.FC<TeamBuilderViewProps> = ({
  teams,
  activeTeam,
  onSelectTeam,
  onCreateTeam,
  onRenameTeam,
  onUpdateCategory,
  onToggleBattleFormat,
  onToggleMode,
  onDeleteTeam,
  onOpenSlotEditor,
  onOpenPokedexForSlot,
  onReplaceAllMembers,
  onOpenAnalysis,
  onOpenTeamsManager,
  onShareTeam,
  isDark,
  onToggleTheme,
}) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [nameDraft, setNameDraft] = useState(activeTeam.name);
  const [showShowdownModal, setShowShowdownModal] = useState(false);
  const [showdownMode, setShowdownMode] = useState<'export' | 'import'>('export');
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState('');
  const [copied, setCopied] = useState(false);
  const [tacticsTab, setTacticsTab] = useState<'switches' | 'moves'>('switches');

  const filledMembers = useMemo(
    () => activeTeam.members.filter((m): m is TeamMember => m !== null),
    [activeTeam.members]
  );

  const avgBst = useMemo(() => {
    if (filledMembers.length === 0) return 0;
    const sum = filledMembers.reduce((acc, m) => {
      const sp = BB2_POKEMON_BY_ID[m.speciesId];
      return acc + (sp ? getBST(sp.baseStats) : 0);
    }, 0);
    return Math.round(sum / filledMembers.length);
  }, [filledMembers]);

  const topWeaknesses = useMemo(() => {
    if (filledMembers.length === 0) return [];
    const def = analyzeTeamDefense(filledMembers, BB2_POKEMON_BY_ID);
    return def
      .filter((d) => d.weak2x + d.weak4x > 0 && d.score < 0)
      .sort((a, b) => a.score - b.score)
      .slice(0, 4);
  }, [filledMembers]);

  const battleFormat: BattleFormat = activeTeam.battleFormat || 'Singolo';

  const battleTactics = useMemo(
    () => analyzeBattleTactics(filledMembers, BB2_POKEMON_BY_ID, battleFormat),
    [filledMembers, battleFormat]
  );

  const exportedText = useMemo(() => exportTeamToShowdown(activeTeam), [activeTeam]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const handleImportSubmit = () => {
    const trimmed = importText.trim();
    if (!trimmed) {
      setImportError('Incolla il testo Pokémon Showdown della squadra da importare.');
      return;
    }

    const parsed = importTeamFromShowdown(importText);
    if (parsed.length === 0) {
      setImportError('Nessun Pokémon riconosciuto. Verifica che il testo sia in formato Showdown.');
      return;
    }
    setImportError('');
    onReplaceAllMembers(parsed);
    setShowShowdownModal(false);
    setImportText('');
  };

  return (
    <div className="space-y-5">
      {/* Workspace Toolbar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Team Switcher & Rename */}
          <div className="flex items-center gap-2 flex-wrap">
            {isRenaming ? (
              <form
                className="flex items-center gap-1.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (nameDraft.trim()) onRenameTeam(nameDraft.trim());
                  setIsRenaming(false);
                }}
              >
                <input
                  type="text"
                  value={nameDraft}
                  onChange={(e) => setNameDraft(e.target.value)}
                  maxLength={32}
                  autoFocus
                  className="min-h-[40px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="min-w-[40px] min-h-[40px] rounded-xl bg-red-600 text-white flex items-center justify-center"
                  aria-label="Conferma nome"
                >
                  <Check className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <>
                <select
                  value={activeTeam.id}
                  onChange={(e) => onSelectTeam(e.target.value)}
                  className="min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white"
                  aria-label="Seleziona squadra salvata"
                >
                  {teams.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.members.filter(Boolean).length}/6)
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => {
                    setNameDraft(activeTeam.name);
                    setIsRenaming(true);
                  }}
                  className="min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition"
                  title="Rinomina squadra"
                  aria-label="Rinomina squadra"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={onOpenTeamsManager}
              className="min-h-[44px] px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 inline-flex items-center gap-1.5 transition whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>Gestisci Squadre</span>
            </button>

            <select
              value={activeTeam.category}
              onChange={(e) =>
                onUpdateCategory(
                  e.target.value as TeamCategory,
                  e.target.value === 'Monotype' ? activeTeam.monotype || 'Folletto' : undefined
                )
              }
              className="min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200"
              aria-label="Tipologia squadra"
            >
              {TEAM_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {activeTeam.category === 'Monotype' && (
              <select
                value={activeTeam.monotype || 'Folletto'}
                onChange={(e) => onUpdateCategory('Monotype', e.target.value as PokemonType)}
                className="min-h-[44px] px-3 rounded-xl bg-pink-500/10 border border-pink-400/40 text-xs font-semibold text-pink-700 dark:text-pink-300"
                aria-label="Tipo Monotype"
              >
                {ALL_TYPES.map((tp) => (
                  <option key={tp} value={tp}>
                    Mono {tp}
                  </option>
                ))}
              </select>
            )}

            {teams.length > 1 && (
              <button
                type="button"
                onClick={() => onDeleteTeam(activeTeam.id)}
                className="min-w-[44px] min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-800 text-red-600 dark:text-red-400 hover:bg-red-500/10 flex items-center justify-center transition"
                title="Elimina questa squadra"
                aria-label="Elimina squadra"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Toolbar Actions: Format, Mode, Showdown, Theme */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Battle Format Preference: Singolo vs Doppio */}
            <div
              className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800"
              role="group"
              aria-label="Preferenza formato lotta"
            >
              {(
                [
                  { id: 'Singolo' as BattleFormat, label: 'Lotta in Singolo' },
                  { id: 'Doppio' as BattleFormat, label: 'Lotta in Doppio' },
                ] as const
              ).map((fmt) => (
                <button
                  key={fmt.id}
                  type="button"
                  onClick={() => onToggleBattleFormat(fmt.id)}
                  className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold transition whitespace-nowrap shrink-0 ${
                    battleFormat === fmt.id
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>

            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
              {(['Standard', 'Challenge Mode'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => onToggleMode(m)}
                  className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                    activeTeam.mode === m
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onShareTeam(activeTeam.id)}
              className="min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5 transition whitespace-nowrap"
              title="Condividi squadra come testo Showdown"
            >
              <Share2 className="w-4 h-4" />
              <span>Condividi</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setShowdownMode('export');
                setShowShowdownModal(true);
              }}
              className="min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5 transition whitespace-nowrap"
            >
              <FileCode2 className="w-4 h-4" />
              <span>Showdown</span>
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              className="min-w-[44px] min-h-[44px] rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition"
              title={isDark ? 'Passa a tema chiaro' : 'Passa a tema scuro'}
              aria-label="Cambia tema chiaro/scuro"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main 2-Column Responsive Split */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* 6 Team Slots Grid */}
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {activeTeam.members.map((member, slotIdx) => {
            if (!member) {
              return (
                <button
                  key={`empty-${slotIdx}`}
                  type="button"
                  onClick={() => onOpenPokedexForSlot(slotIdx)}
                  className="min-h-[210px] rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-red-500/60 dark:hover:border-red-500/60 bg-white/50 dark:bg-slate-900/40 flex flex-col items-center justify-center gap-2.5 p-6 text-center group transition"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:bg-red-600 group-hover:text-white text-slate-500 dark:text-slate-400 flex items-center justify-center transition">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Slot {slotIdx + 1} Vuoto
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Scegli un Pokémon per Blaze Black 2
                    </div>
                  </div>
                </button>
              );
            }

            const sp = BB2_POKEMON_BY_ID[member.speciesId];
            if (!sp) return null;
            const primary = sp.types[0];
            const style = TYPE_STYLES[primary];
            const itemInfo = ITEMS_BY_NAME[member.item];
            const natInfo = NATURES_BY_NAME[member.nature];

            return (
              <div
                key={member.uid}
                onClick={() => onOpenSlotEditor(slotIdx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenSlotEditor(slotIdx);
                  }
                }}
                className="min-h-[210px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm overflow-hidden flex flex-col justify-between cursor-pointer transition text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {/* Top dataDex Type Color Strip */}
                <div className="h-1.5 w-full" style={{ backgroundColor: style.hex }} />

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  {/* Top Info Row */}
                  <div className="flex items-start gap-3">
                    <PokemonArtwork
                      speciesId={sp.id}
                      spriteId={sp.spriteId}
                      name={sp.name}
                      primaryType={primary}
                      shiny={member.shiny}
                      size="md"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-mono font-semibold">
                          #{String(sp.dexNumber ?? sp.id).padStart(3, '0')} · Lv.{member.level}
                        </span>
                        {member.shiny && (
                          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                        {member.nickname || sp.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5">
                        {sp.types.map((t) => (
                          <TypeBadge key={t} type={t} size="xs" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Unboxed Metadata */}
                  <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {member.ability}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{itemInfo ? itemInfo.italianName : member.item || 'Nessuno strumento'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{natInfo ? natInfo.italianName : member.nature}</span>
                  </div>

                  {/* 2x2 Moves Grid */}
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {member.moves.map((mId, i) => {
                      const mv = mId ? MOVES_BY_ID[mId] : null;
                      return (
                        <div
                          key={i}
                          className="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/70 flex items-center gap-1.5 min-w-0"
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{
                              backgroundColor: mv ? TYPE_STYLES[mv.type].hex : '#94a3b8',
                            }}
                          />
                          <span className="text-[11px] font-medium text-slate-800 dark:text-slate-200 truncate">
                            {mv ? mv.name : '—'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky Desktop / Bottom Mobile Team Summary Panel */}
        <aside className="w-full lg:w-80 shrink-0 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-5 lg:sticky lg:top-20">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Riepilogo Squadra
            </h2>
            <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
              {filledMembers.length}/6
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Media BST</div>
              <div className="font-mono tabular-nums text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                {avgBst || '—'}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Formato Lotta</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 truncate">
                {battleFormat} · {activeTeam.mode === 'Challenge Mode' ? 'Challenge' : 'Std'}
              </div>
            </div>
          </div>

          {/* Quick Weaknesses Alert */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Debolezze Critiche
            </div>
            {filledMembers.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Aggiungi almeno un Pokémon per calcolare le debolezze difensive.
              </p>
            ) : topWeaknesses.length === 0 ? (
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                Ottimo equilibrio! Nessuna debolezza grave scoperta.
              </p>
            ) : (
              <div className="space-y-2">
                {topWeaknesses.map((w) => (
                  <div
                    key={w.type}
                    className="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0"
                  >
                    <TypeBadge type={w.type} size="xs" />
                    <span className="font-mono text-slate-600 dark:text-slate-300">
                      {w.weak4x > 0 ? `${w.weak4x}× (4x) ` : ''}
                      {w.weak2x > 0 ? `${w.weak2x}× (2x)` : ''}
                      {' · '}
                      {w.resist + w.immune} res.
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onOpenAnalysis}
            className="w-full min-h-[44px] px-4 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <span>Analisi Completa Tipi</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Preset Quick Loads */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Preset Rapidi Blaze Black 2 Redux
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onCreateTeam('fairy')}
                className="min-h-[38px] px-2.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 text-pink-700 dark:text-pink-300 text-[11px] font-semibold transition"
              >
                + Mono Folletto
              </button>
              <button
                type="button"
                onClick={() => onCreateTeam('serperior')}
                className="min-h-[38px] px-2.5 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold transition"
              >
                + Team Serperior
              </button>
              <button
                type="button"
                onClick={() => onCreateTeam('rain')}
                className="min-h-[38px] px-2.5 rounded-xl bg-sky-600/10 hover:bg-sky-600/20 text-sky-700 dark:text-sky-400 text-[11px] font-semibold transition"
              >
                + Team Pioggia
              </button>
              <button
                type="button"
                onClick={() => onCreateTeam('sun')}
                className="min-h-[38px] px-2.5 rounded-xl bg-orange-600/10 hover:bg-orange-600/20 text-orange-700 dark:text-orange-400 text-[11px] font-semibold transition"
              >
                + Team Sole
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Live Battle Tactical Advisor: Singolo vs Doppio */}
      {filledMembers.length > 0 && (
        <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-0.5">
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span className="font-semibold text-red-600 dark:text-red-400">
                  {battleFormat === 'Singolo' ? 'Squadra per Lotta in Singolo' : 'Squadra per Lotta in Doppio'}
                </span>
                <span aria-hidden="true">·</span>
                <span>{filledMembers.length} membri analizzati</span>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Suggerimenti Tattici in Lotta: Cambi &amp; Mosse Preferibili
              </h2>
            </div>

            {/* Sub-switch: Cambi vs Mosse Preferibili */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setTacticsTab('switches')}
                className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
                  tacticsTab === 'switches'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Cambi Anti-Debolezze</span>
              </button>
              <button
                type="button"
                onClick={() => setTacticsTab('moves')}
                className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
                  tacticsTab === 'moves'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span>Mosse Preferibili</span>
              </button>
            </div>
          </div>

          {/* Lead & Format Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                <span>Apertura &amp; Lead</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {battleTactics.leadSuggestion}
              </p>
            </div>

            <div className="lg:col-span-2 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Users className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>
                  {battleFormat === 'Doppio'
                    ? 'Sinergia Lotta in Doppio (2v2)'
                    : 'Gestione Turni & Pivot (Singolo 1v1)'}
                </span>
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                {battleTactics.formatHighlights.map((hl, idx) => (
                  <li key={idx} className="leading-snug">
                    • {hl}
                  </li>
                ))}
                {battleTactics.spreadWarnings.map((sw, idx) => (
                  <li key={`sw-${idx}`} className="leading-snug text-amber-700 dark:text-amber-300 font-medium">
                    • {sw}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Doubles Recommended Pairs */}
          {battleFormat === 'Doppio' && battleTactics.doublePairs.length > 0 && (
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                Coppie Consigliate in Campo (Doppio 2v2)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {battleTactics.doublePairs.map((pair, idx) => (
                  <div
                    key={`${pair.memberASpeciesId}-${pair.memberBSpeciesId}-${idx}`}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <PokemonArtwork
                        speciesId={pair.memberASpeciesId}
                        spriteId={pair.memberASpriteId}
                        name={pair.memberAName}
                        primaryType="Normale"
                        size="sm"
                      />
                      <span className="text-xs font-bold text-slate-400">+</span>
                      <PokemonArtwork
                        speciesId={pair.memberBSpeciesId}
                        spriteId={pair.memberBSpriteId}
                        name={pair.memberBName}
                        primaryType="Normale"
                        size="sm"
                      />
                      <div className="min-w-0 text-xs font-bold text-slate-900 dark:text-white truncate">
                        {pair.memberAName} + {pair.memberBName}
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                      {pair.synergyPoints.slice(0, 2).join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Per-Pokémon Switch & Preferred Moves Advice */}
          {tacticsTab === 'switches' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {battleTactics.memberTactics.map((mt) => (
                <div
                  key={`tactic-sw-${mt.memberUid}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <PokemonArtwork
                        speciesId={mt.speciesId}
                        spriteId={mt.spriteId}
                        name={mt.memberName}
                        primaryType={mt.types[0]}
                        size="sm"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {mt.memberName}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                          {mt.types.map((tp) => (
                            <TypeBadge key={tp} type={tp} size="xs" compact />
                          ))}
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{mt.roleLabel}</span>
                        </div>
                      </div>
                    </div>

                    {mt.uncoveredWeaknessesCount > 0 && (
                      <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-300 inline-flex items-center gap-1 shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>{mt.uncoveredWeaknessesCount} senza cambio</span>
                      </span>
                    )}
                  </div>

                  {mt.weaknessSwitches.length === 0 ? (
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      Nessuna debolezza difensiva: non necessita di cambi forzati per tipo.
                    </p>
                  ) : (
                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
                      {mt.weaknessSwitches.map((ws) => (
                        <div
                          key={`${mt.memberUid}-${ws.weaknessType}`}
                          className="py-2 first:pt-0 last:pb-0 space-y-1 text-xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                Contro
                              </span>
                              <TypeBadge type={ws.weaknessType} size="xs" />
                              <span
                                className={`font-mono tabular-nums text-[11px] font-bold ${
                                  ws.memberIncomingMult >= 3.5
                                    ? 'text-red-600 dark:text-red-400'
                                    : 'text-amber-700 dark:text-amber-300'
                                }`}
                              >
                                {ws.memberIncomingMult}×
                              </span>
                            </div>
                            {ws.bestSwitches.length > 0 && (
                              <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 truncate">
                                Cambio:{' '}
                                {ws.bestSwitches
                                  .map(
                                    (s) =>
                                      `${s.memberName} (${
                                        s.incomingMultiplier === 0
                                          ? '0×'
                                          : s.incomingMultiplier <= 0.3
                                            ? '¼×'
                                            : '½×'
                                      })`
                                  )
                                  .join(' / ')}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                            {ws.actionVerdict}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {battleTactics.memberTactics.map((mt) => (
                <div
                  key={`tactic-mv-${mt.memberUid}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <PokemonArtwork
                        speciesId={mt.speciesId}
                        spriteId={mt.spriteId}
                        name={mt.memberName}
                        primaryType={mt.types[0]}
                        size="sm"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {mt.memberName}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {mt.roleLabel} · Formato {battleFormat}
                        </div>
                      </div>
                    </div>
                  </div>

                  {mt.moveSuggestions.length === 0 ? (
                    <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>
                        Moveset già ben ottimizzato per la Lotta in {battleFormat}!
                      </span>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
                      {mt.moveSuggestions.map((ms, idx) => (
                        <div key={idx} className="py-2 first:pt-0 last:pb-0 space-y-1 text-xs">
                          <div className="flex items-center gap-1.5 flex-wrap font-semibold text-slate-900 dark:text-white">
                            {ms.priority === 'alta' && (
                              <ShieldAlert className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
                            )}
                            <span>Preferisci: {ms.preferredMoveName}</span>
                            {ms.currentMoveName && (
                              <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                                (al posto di {ms.currentMoveName})
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                            {ms.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Showdown Import/Export Modal */}
      {showShowdownModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
          onClick={() => setShowShowdownModal(false)}
        >
          <div
            className="w-full sm:max-w-xl rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Formato Pokémon Showdown / Poképaste
              </h3>
              <button
                type="button"
                onClick={() => setShowShowdownModal(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setShowdownMode('export')}
                className={`min-h-[40px] rounded-lg text-xs font-semibold transition ${
                  showdownMode === 'export'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Esporta Squadra
              </button>
              <button
                type="button"
                onClick={() => setShowdownMode('import')}
                className={`min-h-[40px] rounded-lg text-xs font-semibold transition ${
                  showdownMode === 'import'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                Importa Testo
              </button>
            </div>

            {showdownMode === 'export' ? (
              <div className="space-y-3">
                <textarea
                  readOnly
                  rows={10}
                  value={exportedText || 'Squadra vuota: aggiungi almeno un Pokémon per esportare.'}
                  className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={!exportedText}
                    onClick={handleCopy}
                    className="min-h-[44px] px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 disabled:opacity-40 text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiato negli appunti!' : 'Copia Testo Showdown'}</span>
                  </button>
                  <button
                    type="button"
                    disabled={!exportedText}
                    onClick={() => {
                      setShowShowdownModal(false);
                      onShareTeam(activeTeam.id);
                    }}
                    className="min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Condividi Squadra</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Incolla qui il testo Pokémon Showdown / Poképaste della squadra da caricare:
                </p>
                <textarea
                  rows={9}
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder={`Serperior @ Life Orb\nAbility: Contrary\nLevel: 55\nTimid Nature\n- Leaf Storm\n- Dragon Pulse\n- Giga Drain\n- Glare`}
                  className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200"
                />
                {importError && (
                  <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                    {importError}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleImportSubmit}
                  className="w-full min-h-[44px] rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition"
                >
                  <Upload className="w-4 h-4" />
                  <span>Importa nella Squadra Attuale</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
