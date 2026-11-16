import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronUp,
  Compass,
  Copy,
  PlusCircle,
  Trophy,
} from 'lucide-react';
import { BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import {
  buildSavedTeamFromCompetitiveSuggestion,
  COMPETITIVE_CATEGORIES,
  COMPETITIVE_TEAMS,
  CompetitiveCategory,
  CompetitiveTeamSuggestion,
} from '../data/competitiveTeams';
import { MOVES_BY_ID } from '../data/moves';
import { NATURES_BY_NAME } from '../data/naturesAndItems';
import { TYPE_STYLES } from '../data/typeChart';
import { StatKey } from '../types/pokemon';
import { exportTeamToShowdown } from '../utils/showdown';
import { PokemonArtwork } from './PokemonArtwork';
import { TypeBadge } from './TypeBadge';

interface CompetitiveTeamsPanelProps {
  onImportTeam: (team: CompetitiveTeamSuggestion) => void;
  onShowToast: (msg: string) => void;
}

const STAT_SHORT_IT: Record<StatKey, string> = {
  hp: 'PS',
  atk: 'Atk',
  def: 'Dif',
  spa: 'SpA',
  spd: 'DifSp',
  spe: 'Vel',
};

const COMPETITION_ACCENT: Record<CompetitiveCategory, string> = {
  'Metro Singolo': 'text-red-600 dark:text-red-400',
  'Metro Doppio': 'text-sky-600 dark:text-sky-400',
  'Metro Multi': 'text-emerald-600 dark:text-emerald-400',
  PWT: 'text-amber-600 dark:text-amber-400',
};

function formatEvSummary(evs: Record<StatKey, number>, ivs?: Partial<Record<StatKey, number>>): string {
  const parts = (Object.keys(evs) as StatKey[])
    .filter((k) => evs[k] > 0)
    .map((k) => `${evs[k]} ${STAT_SHORT_IT[k]}`);
  if (ivs?.spe === 0) {
    parts.push('0 IV Vel');
  }
  return parts.join(' / ');
}

export const CompetitiveTeamsPanel: React.FC<CompetitiveTeamsPanelProps> = ({
  onImportTeam,
  onShowToast,
}) => {
  const [categoryFilter, setCategoryFilter] = useState<CompetitiveCategory | 'Tutti'>('Tutti');
  const [expandedTips, setExpandedTips] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeCategoryMeta = useMemo(
    () =>
      COMPETITIVE_CATEGORIES.find((c) => c.id === categoryFilter) ??
      COMPETITIVE_CATEGORIES[0],
    [categoryFilter]
  );

  const visibleTeams = useMemo(() => {
    if (categoryFilter === 'Tutti') return COMPETITIVE_TEAMS;
    return COMPETITIVE_TEAMS.filter((t) => t.competition === categoryFilter);
  }, [categoryFilter]);

  const handleCopyShowdown = async (team: CompetitiveTeamSuggestion) => {
    const saved = buildSavedTeamFromCompetitiveSuggestion(team);
    const showdownText = exportTeamToShowdown(saved);
    try {
      await navigator.clipboard.writeText(showdownText);
      setCopiedId(team.id);
      onShowToast(`Testo Showdown di "${team.title}" copiato!`);
      setTimeout(() => {
        setCopiedId((curr) => (curr === team.id ? null : curr));
      }, 2200);
    } catch {
      onShowToast('Impossibile accedere agli appunti: usa "Usa nel Costruttore".');
    }
  };

  const toggleTips = (id: string) => {
    setExpandedTips((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      {/* Intro & Competition Filter Strip */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
              <span>Team Famosi: Metropolitana Lotta &amp; PWT</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Archetipi storici da record adattati alle meccaniche di Blaze Black 2 Redux (tipo Folletto, Contrary Serperior, Lv. 50).
            </p>
          </div>
          <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            {visibleTeams.length} team mostrati
          </span>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {COMPETITIVE_CATEGORIES.map((cat) => {
            const count =
              cat.id === 'Tutti'
                ? COMPETITIVE_TEAMS.length
                : COMPETITIVE_TEAMS.filter((t) => t.competition === cat.id).length;
            const active = categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.id)}
                className={`min-h-[38px] px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition border ${
                  active
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        <div className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between gap-2 flex-wrap">
          <span>
            <strong className="text-slate-900 dark:text-white">{activeCategoryMeta.label}:</strong>{' '}
            {activeCategoryMeta.subtitle}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Clicca “Usa nel Costruttore” per testare subito la sinergia!
          </span>
        </div>
      </div>

      {/* Team Suggestion Cards */}
      <div className="space-y-4">
        {visibleTeams.map((team) => {
          const isTipsOpen = Boolean(expandedTips[team.id]);
          const isCopied = copiedId === team.id;

          return (
            <div
              key={team.id}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs flex-wrap">
                      <span className={`font-bold ${COMPETITION_ACCENT[team.competition]}`}>
                        {team.competition}
                      </span>
                      <span aria-hidden="true" className="text-slate-400">
                        ·
                      </span>
                      <span className="font-semibold text-slate-600 dark:text-slate-300">
                        {team.formatLabel}
                      </span>
                      <span aria-hidden="true" className="text-slate-400">
                        ·
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                        {team.streakRating}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {team.title}
                    </h4>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    <button
                      type="button"
                      onClick={() => handleCopyShowdown(team)}
                      className="min-h-[40px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{isCopied ? 'Copiato' : 'Showdown'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onImportTeam(team)}
                      className="min-h-[40px] px-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm transition"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Usa nel Costruttore</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {team.strategySummary}
                </p>

                <div className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                  <Compass className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Lead consigliato:</strong> {team.leadAdvice}
                  </span>
                </div>
              </div>

              {/* Members Roster Grid */}
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {team.members.map((mem, idx) => {
                  const sp = BB2_POKEMON_BY_ID[mem.speciesId];
                  if (!sp) return null;
                  const natureInfo = NATURES_BY_NAME[mem.nature];
                  const evText = formatEvSummary(mem.evs, mem.ivs);

                  return (
                    <div
                      key={`${team.id}-${mem.speciesId}-${idx}`}
                      className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 space-y-2.5"
                    >
                      <div className="flex items-start gap-3">
                        <PokemonArtwork
                          speciesId={sp.id}
                          spriteId={sp.spriteId}
                          name={sp.name}
                          primaryType={sp.types[0]}
                          size="sm"
                        />
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
                              {sp.name}
                            </span>
                            <div className="flex items-center gap-1 shrink-0">
                              {sp.types.map((t) => (
                                <TypeBadge key={t} type={t} size="xs" />
                              ))}
                            </div>
                          </div>

                          <div className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                            {mem.role} · @ {mem.item}
                          </div>

                          <div className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                            <span className="font-semibold">{mem.ability}</span>
                            {' · '}
                            <span>
                              {natureInfo ? `${natureInfo.italianName} (${mem.nature})` : mem.nature}
                            </span>
                            <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                              EV: {evText}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4 Moves Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {mem.moves.map((moveId) => {
                          const mv = MOVES_BY_ID[moveId];
                          const mvName = mv?.name ?? moveId;
                          const typeHex = mv ? TYPE_STYLES[mv.type].hex : '#94a3b8';
                          return (
                            <div
                              key={moveId}
                              className="px-2 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-[11px] font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 min-w-0"
                            >
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: typeHex }}
                                aria-hidden="true"
                              />
                              <span className="truncate">{mvName}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Expandable Playbook & Threats */}
              <div className="px-4 sm:px-5 pb-3.5">
                <button
                  type="button"
                  onClick={() => toggleTips(team.id)}
                  className="w-full min-h-[38px] px-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between transition"
                >
                  <span>Piano di gioco, turni chiave e minacce da evitare</span>
                  {isTipsOpen ? (
                    <ChevronUp className="w-4 h-4 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 shrink-0" />
                  )}
                </button>

                {isTipsOpen && (
                  <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/70 dark:border-slate-800 space-y-2.5 text-xs">
                    <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 list-disc pl-4">
                      {team.tacticalTips.map((tip, i) => (
                        <li key={i} className="leading-relaxed">
                          {tip}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 flex items-start gap-2 text-amber-700 dark:text-amber-400">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>
                        <strong>Attenzione a:</strong> {team.threatsToWatch}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
