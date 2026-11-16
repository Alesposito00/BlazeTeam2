import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowUpDown,
  ChevronDown,
  Plus,
  Search,
  Shield,
  ShieldAlert,
  Sparkles,
  Swords,
  X,
} from 'lucide-react';
import { BB2_POKEMON } from '../data/bb2Pokemon';
import { MOVES_BY_ID } from '../data/moves';
import {
  ALL_TYPES,
  getBST,
  getPokemonDefenseBreakdown,
  getTypeEffectiveness,
  TYPE_STYLES,
} from '../data/typeChart';
import { MoveCategory, MoveData, PokemonSpecies, PokemonType } from '../types/pokemon';
import { PokemonArtwork } from './PokemonArtwork';
import { PokemonStatsChart } from './PokemonStatsChart';
import { TypeBadge } from './TypeBadge';

interface PokedexViewProps {
  targetSlot: number | null;
  onCancelTargetSlot: () => void;
  onSelectSpecies: (species: PokemonSpecies) => void;
  teamSpeciesIds: number[];
}

type SortKey = 'id' | 'bst' | 'spe' | 'atk' | 'spa';

const PAGE_SIZE = 48;

export const PokedexView: React.FC<PokedexViewProps> = ({
  targetSlot,
  onCancelTargetSlot,
  onSelectSpecies,
  teamSpeciesIds,
}) => {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<PokemonType | 'Tutti'>('Tutti');
  const [onlyModified, setOnlyModified] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>('id');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [inspected, setInspected] = useState<PokemonSpecies | null>(null);
  const [previewAbility, setPreviewAbility] = useState<string>('');
  const [showResistances, setShowResistances] = useState(false);
  const [moveFilter, setMoveFilter] = useState<'Tutti' | 'STAB' | MoveCategory>('Tutti');

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, typeFilter, onlyModified, sortBy]);

  useEffect(() => {
    setPreviewAbility('');
    setShowResistances(false);
    setMoveFilter('Tutti');
  }, [inspected?.id]);

  const inspectedDefense = useMemo(() => {
    if (!inspected) return null;
    return getPokemonDefenseBreakdown(inspected.types, previewAbility || undefined);
  }, [inspected, previewAbility]);

  const inspectedWeaknessSet = useMemo(() => {
    if (!inspectedDefense) return [] as PokemonType[];
    return [...inspectedDefense.quadWeak, ...inspectedDefense.doubleWeak].map((w) => w.type);
  }, [inspectedDefense]);

  const inspectedMoves = useMemo(() => {
    if (!inspected) return [] as MoveData[];
    const list = inspected.learnset
      .map((mId) => MOVES_BY_ID[mId])
      .filter((mv): mv is MoveData => Boolean(mv));
    return list;
  }, [inspected]);

  const filteredInspectedMoves = useMemo(() => {
    if (!inspected) return [] as MoveData[];
    return inspectedMoves.filter((mv) => {
      if (moveFilter === 'Tutti') return true;
      if (moveFilter === 'STAB') return inspected.types.includes(mv.type);
      return mv.category === moveFilter;
    });
  }, [inspected, inspectedMoves, moveFilter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BB2_POKEMON.filter((p) => {
      if (onlyModified && !p.bb2Modified) return false;
      if (typeFilter !== 'Tutti' && !p.types.includes(typeFilter)) return false;
      if (q) {
        const idStr = String(p.id).padStart(3, '0');
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesId = idStr.includes(q) || String(p.id) === q;
        const matchesAbility = p.abilities.some((a) => a.name.toLowerCase().includes(q));
        const matchesRole = p.roleHint.toLowerCase().includes(q);
        if (!matchesName && !matchesId && !matchesAbility && !matchesRole) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'bst') return getBST(b.baseStats) - getBST(a.baseStats);
      if (sortBy === 'spe') return b.baseStats.spe - a.baseStats.spe;
      if (sortBy === 'atk') return b.baseStats.atk - a.baseStats.atk;
      if (sortBy === 'spa') return b.baseStats.spa - a.baseStats.spa;
      return a.id - b.id;
    });
  }, [query, typeFilter, onlyModified, sortBy]);

  const visiblePokemon = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );
  const remainingCount = Math.max(0, filtered.length - visiblePokemon.length);

  return (
    <div className="space-y-5">
      {/* Slot selection context banner if picking for a specific slot */}
      {targetSlot !== null && (
        <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-red-600 text-white shadow-sm">
          <div className="text-sm font-semibold">
            Seleziona un Pokémon per lo Slot {targetSlot + 1} della squadra
          </div>
          <button
            type="button"
            onClick={onCancelTargetSlot}
            className="min-h-[36px] px-3 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-semibold transition whitespace-nowrap"
          >
            Annulla
          </button>
        </div>
      )}

      {/* Search & Controls */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca per nome, #Pokédex, abilità o ruolo..."
              className="w-full min-h-[44px] pl-10 pr-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[32px] min-h-[32px] flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white"
                aria-label="Cancella ricerca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOnlyModified(!onlyModified)}
              className={`min-h-[44px] px-3.5 rounded-xl border text-xs font-semibold inline-flex items-center gap-1.5 transition whitespace-nowrap ${
                onlyModified
                  ? 'bg-red-600 text-white border-red-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Solo Modificati BB2</span>
            </button>

            <div className="relative flex items-center">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="min-h-[44px] pl-8 pr-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200"
                aria-label="Ordina Pokémon"
              >
                <option value="id"># Pokédex</option>
                <option value="bst">Totale Stat (BST)</option>
                <option value="spe">Velocità</option>
                <option value="atk">Attacco</option>
                <option value="spa">Att. Speciale</option>
              </select>
            </div>
          </div>
        </div>

        {/* Horizontal Type Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          <button
            type="button"
            onClick={() => setTypeFilter('Tutti')}
            className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition ${
              typeFilter === 'Tutti'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Tutti ({BB2_POKEMON.length})
          </button>
          {ALL_TYPES.map((t) => {
            const active = typeFilter === t;
            const style = TYPE_STYLES[t];
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTypeFilter(active ? 'Tutti' : t)}
                className={`min-h-[36px] px-3 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition border ${
                  active
                    ? `${style.bg} ${style.text} border-transparent shadow-sm`
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          <strong className="font-mono text-slate-900 dark:text-white">{filtered.length}</strong> Pokémon mostrati
        </span>
        <span>Tocca una scheda per i dettagli BB2 o premi + per aggiungere</span>
      </div>

      {/* dataDex Cards Grid */}
      {filtered.length === 0 ? (
        <div className="p-10 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Nessun Pokémon corrisponde ai filtri attuali
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Prova a resettare la ricerca o il filtro per tipo.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {visiblePokemon.map((p) => {
            const primary = p.types[0];
            const style = TYPE_STYLES[primary];
            const bst = getBST(p.baseStats);
            const inTeam = teamSpeciesIds.includes(p.id);

            return (
              <div
                key={p.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition flex flex-col"
              >
                {/* Thin top type accent bar (dataDex signature) */}
                <div className="h-1 w-full" style={{ backgroundColor: style.hex }} />

                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setInspected(p)}
                      className="flex items-center gap-3 text-left min-w-0 flex-1"
                    >
                      <PokemonArtwork
                        speciesId={p.id}
                        spriteId={p.spriteId}
                        name={p.name}
                        primaryType={primary}
                        size="md"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                          <span className="font-mono font-semibold">
                            #{String(p.id).padStart(3, '0')}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{p.region}</span>
                          {p.bb2Modified && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="font-semibold text-red-600 dark:text-red-400">
                                Buff BB2
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {p.name}
                        </h3>
                        <div className="mt-1 flex items-center gap-1.5">
                          {p.types.map((t) => (
                            <TypeBadge key={t} type={t} size="xs" />
                          ))}
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectSpecies(p)}
                      className={`min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center transition shrink-0 ${
                        inTeam
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-red-600 hover:text-white'
                      }`}
                      title={targetSlot !== null ? `Metti nello Slot ${targetSlot + 1}` : 'Aggiungi al Team'}
                      aria-label={`Aggiungi ${p.name} alla squadra`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mini Stat Bar Summary */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2.5 font-mono text-slate-600 dark:text-slate-400">
                      <span>PS {p.baseStats.hp}</span>
                      <span>Atk {p.baseStats.atk}</span>
                      <span>SpA {p.baseStats.spa}</span>
                      <span>Vel {p.baseStats.spe}</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      BST {bst}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          </div>

          {remainingCount > 0 && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="min-h-[48px] px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-100 hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition shadow-sm"
              >
                Mostra altri {Math.min(PAGE_SIZE, remainingCount)} Pokémon (rimanenti: {remainingCount})
              </button>
            </div>
          )}
        </>
      )}

      {/* Quick dataDex Detail Sheet */}
      {inspected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
          onClick={() => setInspected(null)}
        >
          <div
            className="w-full sm:max-w-xl max-h-[88dvh] flex flex-col rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`px-5 pt-3 pb-4 bg-gradient-to-br ${TYPE_STYLES[inspected.types[0]].softBg} border-b border-slate-200 dark:border-slate-800`}
            >
              <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3 sm:hidden" />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <PokemonArtwork
                    speciesId={inspected.id}
                    spriteId={inspected.spriteId}
                    name={inspected.name}
                    primaryType={inspected.types[0]}
                    size="md"
                  />
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      #{String(inspected.id).padStart(3, '0')} · {inspected.region} · {inspected.roleHint}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {inspected.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5">
                      {inspected.types.map((t) => (
                        <TypeBadge key={t} type={t} size="xs" />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setInspected(null)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-white/60 dark:hover:bg-slate-800"
                  aria-label="Chiudi scheda"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {inspected.bb2Modified && inspected.bb2Changes && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-slate-800 dark:text-slate-200">
                  <span className="font-bold text-red-700 dark:text-red-400">
                    Modifiche Blaze Black 2:{' '}
                  </span>
                  {inspected.bb2Changes}
                </div>
              )}

              {/* Weaknesses & Defensive Profile */}
              {inspectedDefense && (
                <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-3.5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5">
                      <ShieldAlert
                        className={`w-4 h-4 ${
                          inspectedDefense.quadWeak.length > 0
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-amber-600 dark:text-amber-400'
                        }`}
                      />
                      Debolezze &amp; Profilo Difensivo
                    </h4>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {inspectedDefense.quadWeak.length + inspectedDefense.doubleWeak.length} debolezze ·{' '}
                      {inspectedDefense.halfResist.length +
                        inspectedDefense.quarterResist.length +
                        inspectedDefense.immune.length}{' '}
                      resistenze/immunità
                    </span>
                  </div>

                  {/* Ability selector to preview ability-based immunities/reductions */}
                  {inspected.abilities.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mr-0.5">
                        Abilità:
                      </span>
                      <button
                        type="button"
                        onClick={() => setPreviewAbility('')}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition border ${
                          previewAbility === ''
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent'
                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                        }`}
                      >
                        Solo Tipi
                      </button>
                      {inspected.abilities.map((a) => {
                        const active = previewAbility === a.name;
                        return (
                          <button
                            key={a.name}
                            type="button"
                            onClick={() => setPreviewAbility(active ? '' : a.name)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition border ${
                              active
                                ? 'bg-red-600 text-white border-red-600 shadow-xs'
                                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                            }`}
                          >
                            {a.name}
                            {a.isHidden ? ' (N)' : ''}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* 4x & 2x Weaknesses */}
                  <div className="space-y-2">
                    {inspectedDefense.quadWeak.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-[11px] font-bold text-red-700 dark:text-red-300 inline-flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Debolezze Critiche (4×)
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {inspectedDefense.quadWeak.map((w) => (
                            <span
                              key={`q-${w.type}`}
                              className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-red-500/15 border border-red-500/35"
                            >
                              <TypeBadge type={w.type} size="xs" />
                              <span className="font-mono text-xs font-extrabold text-red-700 dark:text-red-300">
                                {w.multiplier}×
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-amber-800 dark:text-amber-300">
                        {inspectedDefense.quadWeak.length > 0 ? 'Debolezze (2×)' : 'Debolezze'}
                      </div>
                      {inspectedDefense.doubleWeak.length === 0 &&
                      inspectedDefense.quadWeak.length === 0 ? (
                        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          Nessuna debolezza con questa configurazione.
                        </div>
                      ) : inspectedDefense.doubleWeak.length === 0 ? (
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Nessuna debolezza 2× aggiuntiva.
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {inspectedDefense.doubleWeak.map((w) => (
                            <span
                              key={`d-${w.type}`}
                              className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-amber-500/15 border border-amber-500/35"
                            >
                              <TypeBadge type={w.type} size="xs" />
                              <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                                {w.multiplier}×
                              </span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Immunities (0x) */}
                    {inspectedDefense.immune.length > 0 && (
                      <div className="space-y-1 pt-1">
                        <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 inline-flex items-center gap-1">
                          <Shield className="w-3.5 h-3.5" />
                          Immunità (0×)
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {inspectedDefense.immune.map((w) => (
                            <span
                              key={`i-${w.type}`}
                              className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-indigo-500/15 border border-indigo-500/30"
                            >
                              <TypeBadge type={w.type} size="xs" />
                              <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300">
                                0×
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Collapsible Resistances (0.5x & 0.25x) */}
                    {(inspectedDefense.quarterResist.length > 0 ||
                      inspectedDefense.halfResist.length > 0) && (
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => setShowResistances((prev) => !prev)}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                        >
                          <span>
                            {showResistances ? 'Nascondi resistenze' : 'Mostra resistenze'} (
                            {inspectedDefense.quarterResist.length +
                              inspectedDefense.halfResist.length}
                            )
                          </span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              showResistances ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {showResistances && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {inspectedDefense.quarterResist.map((w) => (
                              <span
                                key={`qr-${w.type}`}
                                className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-emerald-500/15 border border-emerald-500/35"
                              >
                                <TypeBadge type={w.type} size="xs" />
                                <span className="font-mono text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
                                  0.25×
                                </span>
                              </span>
                            ))}
                            {inspectedDefense.halfResist.map((w) => (
                              <span
                                key={`hr-${w.type}`}
                                className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25"
                              >
                                <TypeBadge type={w.type} size="xs" />
                                <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
                                  0.5×
                                </span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Base Stats Radar/Bar Chart */}
              <PokemonStatsChart
                baseStats={inspected.baseStats}
                level={50}
                accentHex={TYPE_STYLES[inspected.types[0]].hex}
                mode="pokedex"
              />

              {/* Base Stats */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Statistiche Base
                  </h4>
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                    Totale: {getBST(inspected.baseStats)}
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'PS', val: inspected.baseStats.hp, color: 'bg-emerald-500' },
                    { label: 'Attacco', val: inspected.baseStats.atk, color: 'bg-orange-500' },
                    { label: 'Difesa', val: inspected.baseStats.def, color: 'bg-amber-500' },
                    { label: 'Att. Sp.', val: inspected.baseStats.spa, color: 'bg-sky-500' },
                    { label: 'Dif. Sp.', val: inspected.baseStats.spd, color: 'bg-teal-500' },
                    { label: 'Velocità', val: inspected.baseStats.spe, color: 'bg-pink-500' },
                  ].map((st) => (
                    <div key={st.label} className="grid grid-cols-12 items-center gap-2">
                      <span className="col-span-3 text-xs text-slate-600 dark:text-slate-400">
                        {st.label}
                      </span>
                      <span className="col-span-2 font-mono text-xs font-bold text-right text-slate-900 dark:text-white">
                        {st.val}
                      </span>
                      <div className="col-span-7 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${st.color}`}
                          style={{ width: `${Math.min(100, Math.round((st.val / 160) * 100))}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abilities */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Abilità Disponibili
                </h4>
                <div className="space-y-2">
                  {inspected.abilities.map((a) => (
                    <div
                      key={a.name}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                        <span>{a.name}</span>
                        {a.isHidden && (
                          <span className="text-red-600 dark:text-red-400">Nascosta (BB2)</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {a.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnable Moves (Detailed BB2 Learnset) */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 inline-flex items-center gap-1.5">
                    <Swords className="w-4 h-4 text-red-600 dark:text-red-400" />
                    Mosse che può imparare ({inspectedMoves.length})
                  </h4>
                  <div className="flex items-center gap-1 flex-wrap">
                    {(['Tutti', 'STAB', 'Fisico', 'Speciale', 'Stato'] as const).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setMoveFilter(cat)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition border ${
                          moveFilter === cat
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {filteredInspectedMoves.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 text-center">
                    Nessuna mossa trovata nella categoria selezionata.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredInspectedMoves.map((mv) => {
                      const isStab = inspected.types.includes(mv.type);
                      const counteredWeaknesses =
                        mv.category !== 'Stato' && mv.power > 0
                          ? inspectedWeaknessSet.filter(
                              (wt) => getTypeEffectiveness(mv.type, [wt]) > 1
                            )
                          : [];

                      return (
                        <div
                          key={mv.id}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1.5"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                              <TypeBadge type={mv.type} size="xs" compact />
                              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                {mv.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              {isStab && (
                                <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">
                                  STAB
                                </span>
                              )}
                              {mv.bb2Buffed && (
                                <span className="px-1.5 py-0.5 rounded-md bg-red-500/15 text-red-700 dark:text-red-300 text-[10px] font-bold">
                                  BB2
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                            <span className="font-sans font-semibold text-slate-700 dark:text-slate-300">
                              {mv.category}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>Pot. {mv.power > 0 ? mv.power : '—'}</span>
                            <span aria-hidden="true">·</span>
                            <span>Prec. {mv.accuracy !== null ? `${mv.accuracy}%` : '∞'}</span>
                            <span aria-hidden="true">·</span>
                            <span>PP {mv.pp}</span>
                          </div>

                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                            {mv.description}
                          </p>

                          {counteredWeaknesses.length > 0 && (
                            <div className="pt-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
                              Copre debolezza: {counteredWeaknesses.join(', ')}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
              <button
                type="button"
                onClick={() => {
                  onSelectSpecies(inspected);
                  setInspected(null);
                }}
                className="w-full min-h-[48px] rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-sm transition"
              >
                {targetSlot !== null
                  ? `Assegna allo Slot ${targetSlot + 1}`
                  : 'Aggiungi alla Squadra'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
