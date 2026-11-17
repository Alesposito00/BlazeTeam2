import React, { useMemo, useState } from 'react';
import { AlertTriangle, ArrowLeftRight, Check, ChevronDown, Search, ShieldAlert, Sparkles, Trash2, X } from 'lucide-react';
import { BB2_POKEMON_BY_ID, ROTOM_FORM_IDS, ROTOM_FORM_META } from '../data/bb2Pokemon';
import { MOVES_BY_ID, MOVES_LIST } from '../data/moves';
import { ITEMS, NATURES, NATURES_BY_NAME } from '../data/naturesAndItems';
import {
  ALL_TYPES,
  analyzeMemberWeaknessCounters,
  calculateHiddenPower,
  calculateStat,
  getBST,
  getOptimalHiddenPowerIvs,
  getPokemonDefenseBreakdown,
  HIDDEN_POWER_TYPES,
  TYPE_STYLES,
} from '../data/typeChart';
import { PokemonType, StatKey, TeamMember } from '../types/pokemon';
import { PokemonArtwork } from './PokemonArtwork';
import { PokemonStatsChart } from './PokemonStatsChart';
import { TypeBadge } from './TypeBadge';

interface MemberEditorModalProps {
  member: TeamMember;
  slotIndex: number;
  onSave: (updated: TeamMember) => void;
  onRemove: () => void;
  onSwapSpecies: () => void;
  onClose: () => void;
}

const STAT_META: { key: StatKey; label: string; short: string; barColor: string }[] = [
  { key: 'hp', label: 'PS', short: 'PS', barColor: 'bg-emerald-500' },
  { key: 'atk', label: 'Attacco', short: 'Atk', barColor: 'bg-orange-500' },
  { key: 'def', label: 'Difesa', short: 'Dif', barColor: 'bg-amber-500' },
  { key: 'spa', label: 'Att. Sp.', short: 'SpA', barColor: 'bg-sky-500' },
  { key: 'spd', label: 'Dif. Sp.', short: 'SpD', barColor: 'bg-teal-500' },
  { key: 'spe', label: 'Velocità', short: 'Vel', barColor: 'bg-pink-500' },
];

export const MemberEditorModal: React.FC<MemberEditorModalProps> = ({
  member,
  slotIndex,
  onSave,
  onRemove,
  onSwapSpecies,
  onClose,
}) => {
  const [draft, setDraft] = useState<TeamMember>(() => structuredClone(member));
  const species = BB2_POKEMON_BY_ID[draft.speciesId];
  const [activeTab, setActiveTab] = useState<'stats' | 'moves' | 'details'>('stats');
  const [editingMoveSlot, setEditingMoveSlot] = useState<number>(0);
  const [moveSearch, setMoveSearch] = useState('');
  const [moveTypeFilter, setMoveTypeFilter] = useState<PokemonType | 'Tutti'>('Tutti');
  const [showAllMoves, setShowAllMoves] = useState(false);
  const [showWeaknessPopup, setShowWeaknessPopup] = useState(false);

  const primaryType = species?.types[0] ?? 'Normale';
  const typeStyle = TYPE_STYLES[primaryType];
  const currentNature = NATURES_BY_NAME[draft.nature];

  const totalEvs = (Object.values(draft.evs) as number[]).reduce((a, b) => a + b, 0);

  const updateEv = (key: StatKey, rawValue: number) => {
    const clamped = Math.max(0, Math.min(252, rawValue));
    const otherEvs = totalEvs - draft.evs[key];
    const allowed = Math.min(clamped, 510 - otherEvs);
    setDraft((prev) => ({
      ...prev,
      evs: { ...prev.evs, [key]: allowed },
    }));
  };

  const updateIv = (key: StatKey, rawValue: number) => {
    const clamped = Math.max(0, Math.min(31, Math.round(rawValue)));
    setDraft((prev) => ({
      ...prev,
      ivs: { ...prev.ivs, [key]: clamped },
    }));
  };

  const hiddenPower = useMemo(() => calculateHiddenPower(draft.ivs), [draft.ivs]);
  const defenseBreakdown = useMemo(
    () => (species ? getPokemonDefenseBreakdown(species.types, draft.ability) : null),
    [species, draft.ability]
  );
  const weaknessCounters = useMemo(
    () => (species ? analyzeMemberWeaknessCounters(draft, species) : []),
    [draft, species]
  );

  const applyAll31Ivs = () => {
    setDraft((prev) => ({
      ...prev,
      ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    }));
  };

  const applyHiddenPowerType = (hpType: PokemonType) => {
    const optimal = getOptimalHiddenPowerIvs(hpType);
    if (!optimal) return;
    setDraft((prev) => ({
      ...prev,
      ivs: optimal,
    }));
  };

  const applyEvPreset = (preset: 'physical' | 'special' | 'bulky' | 'reset') => {
    if (preset === 'reset') {
      setDraft((prev) => ({ ...prev, evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 } }));
    } else if (preset === 'physical') {
      setDraft((prev) => ({ ...prev, evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 } }));
    } else if (preset === 'special') {
      setDraft((prev) => ({ ...prev, evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 } }));
    } else {
      setDraft((prev) => ({ ...prev, evs: { hp: 252, atk: 0, def: 128, spa: 0, spd: 128, spe: 0 } }));
    }
  };

  const filteredMoves = useMemo(() => {
    const learnsetIds = new Set(species?.learnset ?? []);
    const baseList = showAllMoves
      ? MOVES_LIST
      : MOVES_LIST.filter((m) => learnsetIds.has(m.id));

    return baseList.filter((m) => {
      if (moveTypeFilter !== 'Tutti' && m.type !== moveTypeFilter) return false;
      if (moveSearch.trim()) {
        const q = moveSearch.toLowerCase();
        return (
          m.name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.type.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [species, showAllMoves, moveSearch, moveTypeFilter]);

  const selectMove = (moveId: string) => {
    setDraft((prev) => {
      const nextMoves: [string | null, string | null, string | null, string | null] = [...prev.moves];
      nextMoves[editingMoveSlot] = moveId;
      return { ...prev, moves: nextMoves };
    });
    if (editingMoveSlot < 3) {
      setEditingMoveSlot(editingMoveSlot + 1);
    }
  };

  const switchRotomForm = (nextFormId: number) => {
    const nextSpecies = BB2_POKEMON_BY_ID[nextFormId];
    if (!nextSpecies || nextFormId === draft.speciesId) return;

    const oldSig = ROTOM_FORM_META[draft.speciesId]?.signatureMoveId ?? null;
    const newSig = ROTOM_FORM_META[nextFormId]?.signatureMoveId ?? null;

    setDraft((prev) => {
      const nextMoves: [string | null, string | null, string | null, string | null] = [...prev.moves];
      if (oldSig && newSig) {
        const idx = nextMoves.indexOf(oldSig);
        if (idx !== -1) {
          nextMoves[idx] = newSig;
        } else if (!nextMoves.includes(newSig)) {
          const emptyIdx = nextMoves.indexOf(null);
          if (emptyIdx !== -1) nextMoves[emptyIdx] = newSig;
        }
      } else if (oldSig && !newSig) {
        const idx = nextMoves.indexOf(oldSig);
        if (idx !== -1) {
          nextMoves[idx] = 'shadow-ball';
        }
      } else if (!oldSig && newSig && !nextMoves.includes(newSig)) {
        const emptyIdx = nextMoves.indexOf(null);
        if (emptyIdx !== -1) {
          nextMoves[emptyIdx] = newSig;
        } else {
          nextMoves[0] = newSig;
        }
      }

      return {
        ...prev,
        speciesId: nextFormId,
        ability: nextSpecies.abilities[0]?.name ?? prev.ability,
        moves: nextMoves,
      };
    });
  };

  if (!species) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-3xl max-h-[92dvh] flex flex-col rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* dataDex Type-Colored Header */}
        <div
          className={`relative px-5 pt-3 pb-4 bg-gradient-to-br ${typeStyle.softBg} border-b border-slate-200 dark:border-slate-800`}
        >
          <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3 sm:hidden" />

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <PokemonArtwork
                speciesId={species.id}
                spriteId={species.spriteId}
                name={species.name}
                primaryType={primaryType}
                shiny={draft.shiny}
                size="md"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-mono font-semibold">Slot {slotIndex + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">#{String(species.dexNumber ?? species.id).padStart(3, '0')}</span>
                  {species.bb2Modified && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">Modificato BB2</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                  {draft.nickname ? `${draft.nickname} (${species.name})` : species.name}
                </h2>
                <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                  {species.types.map((t) => (
                    <TypeBadge key={t} type={t} size="xs" />
                  ))}
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-1 truncate">
                    {species.roleHint}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={onSwapSpecies}
                className="min-h-[44px] px-3 inline-flex items-center gap-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800 transition"
                title="Cambia Pokémon in questo slot"
              >
                <ArrowLeftRight className="w-4 h-4" />
                <span className="hidden sm:inline">Cambia</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800 transition"
                aria-label="Chiudi editor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {(ROTOM_FORM_IDS as readonly number[]).includes(draft.speciesId) && (
            <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-700/60 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                <span>Forma di Rotom (6 scelte)</span>
                <span className="text-slate-500 dark:text-slate-400">
                  {ROTOM_FORM_META[draft.speciesId]?.appliance}
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {ROTOM_FORM_IDS.map((formId) => {
                  const formSp = BB2_POKEMON_BY_ID[formId];
                  const meta = ROTOM_FORM_META[formId];
                  if (!formSp || !meta) return null;
                  const active = draft.speciesId === formId;
                  return (
                    <button
                      key={formId}
                      type="button"
                      onClick={() => switchRotomForm(formId)}
                      className={`min-h-[34px] px-2 py-1 rounded-lg text-[11px] font-semibold border transition flex items-center justify-center gap-1 ${
                        active
                          ? 'bg-red-600 text-white border-red-600 shadow-sm'
                          : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-red-400'
                      }`}
                    >
                      <span className="truncate">{meta.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Segmented Editor Tabs */}
          <div className="mt-4 grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80">
            {[
              { id: 'stats', label: 'Statistiche' },
              { id: 'moves', label: 'Mosse (4)' },
              { id: 'details', label: 'Abilità & Strumento' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as 'stats' | 'moves' | 'details')}
                className={`min-h-[40px] px-3 rounded-lg text-xs font-semibold transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {activeTab === 'stats' && (
            <>
              {species.bb2Modified && species.bb2Changes && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-slate-800 dark:text-slate-200">
                  <span className="font-semibold text-red-700 dark:text-red-400">
                    Bilanciamento Blaze Black 2:{' '}
                  </span>
                  {species.bb2Changes}
                </div>
              )}

              {/* Interactive Radar / Bar Chart comparing IVs, EVs & Max Potential */}
              <PokemonStatsChart
                baseStats={species.baseStats}
                ivs={draft.ivs}
                evs={draft.evs}
                level={draft.level}
                nature={currentNature}
                accentHex={typeStyle.hex}
                mode="member"
              />

              {/* Level & Nature Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Livello
                    </label>
                    <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                      Lv. {draft.level}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={draft.level}
                    onChange={(e) => setDraft({ ...draft, level: Number(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-10"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Natura
                  </label>
                  <select
                    value={draft.nature}
                    onChange={(e) => setDraft({ ...draft, nature: e.target.value })}
                    className="w-full min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {NATURES.map((n) => {
                      const mod =
                        n.plus && n.minus
                          ? ` (+${STAT_META.find((s) => s.key === n.plus)?.short}, -${STAT_META.find((s) => s.key === n.minus)?.short})`
                          : ' (Neutra)';
                      return (
                        <option key={n.name} value={n.name}>
                          {n.italianName} / {n.name}
                          {mod}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Quick EV & IV Presets */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  EVs Totali:{' '}
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    {totalEvs}/510
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={applyAll31Ivs}
                    className="min-h-[36px] px-2.5 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-[11px] font-semibold text-sky-700 dark:text-sky-300 transition"
                  >
                    31 IV ovunque
                  </button>
                  {[
                    { id: 'physical', label: '252 Atk / 252 Vel' },
                    { id: 'special', label: '252 SpA / 252 Vel' },
                    { id: 'bulky', label: '252 PS / 128 Dif / 128 DifSp' },
                    { id: 'reset', label: 'Azzera EV' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => applyEvPreset(p.id as 'physical' | 'special' | 'bulky' | 'reset')}
                      className="min-h-[36px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300 transition"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Introforza (Hidden Power) Readout + Quick 70 BP IV Preset */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Introforza (dagli IV):
                  </span>
                  <TypeBadge type={hiddenPower.type} size="xs" />
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200">
                    Pot. {hiddenPower.power}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="hp-type-preset"
                    className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap"
                  >
                    Preset IV (70 BP):
                  </label>
                  <select
                    id="hp-type-preset"
                    value={hiddenPower.type}
                    onChange={(e) => applyHiddenPowerType(e.target.value as PokemonType)}
                    className="min-h-[38px] px-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {HIDDEN_POWER_TYPES.map((hpT) => (
                      <option key={hpT} value={hpT}>
                        Introforza {hpT}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Base Stats + Calculated Stats + IV + EV Sliders */}
              <div className="space-y-3">
                <div className="hidden sm:grid grid-cols-12 gap-2 text-[11px] font-semibold text-slate-400 px-0.5">
                  <span className="col-span-2">Stat</span>
                  <span className="col-span-1 text-right">Base</span>
                  <span className="col-span-2">Barra</span>
                  <span className="col-span-2 text-center">IV (0-31)</span>
                  <span className="col-span-3">EV (0-252)</span>
                  <span className="col-span-2 text-right">Finale</span>
                </div>
                {STAT_META.map((s) => {
                  const base = species.baseStats[s.key];
                  const ev = draft.evs[s.key];
                  const iv = draft.ivs[s.key];
                  const calc = calculateStat(s.key, base, iv, ev, draft.level, currentNature);
                  const isPlus = currentNature?.plus === s.key;
                  const isMinus = currentNature?.minus === s.key;
                  const barPct = Math.min(100, Math.round((base / 160) * 100));

                  return (
                    <div
                      key={s.key}
                      className="grid grid-cols-12 items-center gap-2 py-1.5 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0"
                    >
                      <div className="col-span-3 sm:col-span-2 flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <span>{s.short}</span>
                        {isPlus && <span className="text-emerald-600 dark:text-emerald-400">+</span>}
                        {isMinus && <span className="text-red-500">-</span>}
                      </div>

                      <div className="col-span-2 sm:col-span-1 font-mono text-xs text-slate-500 dark:text-slate-400 text-right">
                        {base}
                      </div>

                      <div className="hidden sm:block sm:col-span-2">
                        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${s.barColor}`}
                            style={{ width: `${barPct}%` }}
                          />
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-2 flex items-center justify-center gap-1">
                        <span className="text-[10px] text-slate-400 sm:hidden">IV</span>
                        <input
                          type="number"
                          min={0}
                          max={31}
                          value={iv}
                          onChange={(e) => updateIv(s.key, Number(e.target.value) || 0)}
                          className="w-12 min-h-[34px] px-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/15 text-center font-mono text-xs text-sky-800 dark:text-sky-200"
                          aria-label={`Valore IV ${s.label}`}
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
                        <input
                          type="range"
                          min={0}
                          max={252}
                          step={4}
                          value={ev}
                          onChange={(e) => updateEv(s.key, Number(e.target.value))}
                          className="w-full accent-red-600 hidden sm:block"
                          aria-label={`EV ${s.label}`}
                        />
                        <span className="text-[10px] text-slate-400 sm:hidden">EV</span>
                        <input
                          type="number"
                          min={0}
                          max={252}
                          value={ev}
                          onChange={(e) => updateEv(s.key, Number(e.target.value) || 0)}
                          className="w-14 min-h-[34px] px-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-center font-mono text-xs text-slate-900 dark:text-white"
                          aria-label={`Valore EV ${s.label}`}
                        />
                      </div>

                      <div className="col-span-12 sm:col-span-2 flex items-center justify-end gap-2">
                        <span className="text-[10px] text-slate-400 sm:hidden">Stat finale:</span>
                        <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                          {calc}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-center justify-between pt-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>Totale Statistiche Base (BST)</span>
                  <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                    {getBST(species.baseStats)}
                  </span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'moves' && (
            <div className="space-y-4">
              {/* Highlighted Pokémon Weaknesses Strip + Expandable Drawer / Finestra a comparsa */}
              {defenseBreakdown && (
                <div
                  className={`rounded-xl border overflow-hidden transition ${
                    defenseBreakdown.quadWeak.length > 0
                      ? 'border-red-500/40 bg-red-500/[0.04] dark:bg-red-500/[0.07]'
                      : 'border-amber-500/30 bg-amber-500/[0.04] dark:bg-slate-800/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setShowWeaknessPopup((v) => !v)}
                    aria-expanded={showWeaknessPopup}
                    className="w-full min-h-[48px] px-3.5 py-2.5 flex items-center justify-between gap-3 text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition"
                  >
                    <div className="flex items-center gap-2 flex-wrap min-w-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white shrink-0">
                        <ShieldAlert
                          className={`w-4 h-4 ${
                            defenseBreakdown.quadWeak.length > 0
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-amber-600 dark:text-amber-400'
                          }`}
                        />
                        Debolezze del Pokémon:
                      </span>
                      {defenseBreakdown.quadWeak.length === 0 &&
                      defenseBreakdown.doubleWeak.length === 0 ? (
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          Nessuna debolezza
                        </span>
                      ) : (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {defenseBreakdown.quadWeak.map((w) => (
                            <span
                              key={`q-${w.type}`}
                              className="inline-flex items-center gap-1 pr-1.5 rounded-md bg-red-600/15 border border-red-500/40"
                            >
                              <TypeBadge type={w.type} size="xs" compact />
                              <span className="font-mono text-[10px] font-extrabold text-red-700 dark:text-red-300">
                                {w.multiplier}×
                              </span>
                            </span>
                          ))}
                          {defenseBreakdown.doubleWeak.map((w) => (
                            <span
                              key={`d-${w.type}`}
                              className="inline-flex items-center gap-1 pr-1.5 rounded-md bg-amber-500/15 border border-amber-500/35"
                            >
                              <TypeBadge type={w.type} size="xs" compact />
                              <span className="font-mono text-[10px] font-bold text-amber-800 dark:text-amber-300">
                                {w.multiplier}×
                              </span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300 shrink-0">
                      <span className="hidden sm:inline">
                        {showWeaknessPopup ? 'Chiudi dettagli' : 'Apri finestra'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          showWeaknessPopup ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {showWeaknessPopup && (
                    <div className="border-t border-slate-200/80 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/90 p-3.5 space-y-3">
                      {defenseBreakdown.quadWeak.length > 0 && (
                        <div className="space-y-1.5">
                          <div className="text-[11px] font-bold text-red-700 dark:text-red-300 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            Debolezze Critiche (4×)
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {defenseBreakdown.quadWeak.map((w) => (
                              <span
                                key={w.type}
                                className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-red-500/10 border border-red-500/30"
                              >
                                <TypeBadge type={w.type} size="xs" />
                                <span className="font-mono text-xs font-extrabold text-red-600 dark:text-red-400">
                                  {w.multiplier}×
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-bold text-amber-800 dark:text-amber-300">
                          Debolezze (2×)
                        </div>
                        {defenseBreakdown.doubleWeak.length === 0 ? (
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Nessuna debolezza 2×.
                          </p>
                        ) : (
                          <div className="flex flex-wrap gap-1.5">
                            {defenseBreakdown.doubleWeak.map((w) => (
                              <span
                                key={w.type}
                                className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-amber-500/10 border border-amber-500/30"
                              >
                                <TypeBadge type={w.type} size="xs" />
                                <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-300">
                                  {w.multiplier}×
                                </span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {defenseBreakdown.immune.length > 0 && (
                        <div className="space-y-1.5">
                          <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300">
                            Immunità (0×{draft.ability ? ` · Abilità ${draft.ability}` : ''})
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {defenseBreakdown.immune.map((w) => (
                              <TypeBadge key={w.type} type={w.type} size="xs" />
                            ))}
                          </div>
                        </div>
                      )}

                      {(defenseBreakdown.quarterResist.length > 0 ||
                        defenseBreakdown.halfResist.length > 0) && (
                        <div className="space-y-1.5">
                          <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                            Resistenze (¼× / ½×)
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {defenseBreakdown.quarterResist.map((w) => (
                              <span
                                key={w.type}
                                className="inline-flex items-center gap-1 pr-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30"
                              >
                                <TypeBadge type={w.type} size="xs" />
                                <span className="font-mono text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
                                  ¼×
                                </span>
                              </span>
                            ))}
                            {defenseBreakdown.halfResist.map((w) => (
                              <span
                                key={w.type}
                                className="inline-flex items-center gap-1 pr-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                              >
                                <TypeBadge type={w.type} size="xs" />
                                <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                  ½×
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {weaknessCounters.length > 0 && (
                        <div className="pt-2 border-t border-slate-200/80 dark:border-slate-700/70 space-y-2">
                          <div className="text-[11px] font-bold text-slate-800 dark:text-slate-100">
                            Contromosse con il moveset attuale
                          </div>
                          <div className="space-y-1.5">
                            {weaknessCounters.map((wc) => (
                              <div
                                key={wc.weaknessType}
                                className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70 flex flex-wrap items-center justify-between gap-2 text-xs"
                              >
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                    Debole {wc.incomingMultiplier}× a
                                  </span>
                                  <TypeBadge type={wc.weaknessType} size="xs" />
                                </div>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {wc.status === 'super-effective' ? (
                                    wc.superEffectiveMoves.slice(0, 2).map((mv) => (
                                      <span
                                        key={mv.moveId}
                                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]"
                                      >
                                        <TypeBadge type={mv.moveType} size="xs" compact />
                                        <span>{mv.name}</span>
                                        <span className="font-mono font-bold">({mv.effectiveness}×)</span>
                                      </span>
                                    ))
                                  ) : wc.status === 'neutral-only' ? (
                                    <span className="text-[11px] font-medium text-sky-700 dark:text-sky-300">
                                      Solo neutro 1×: <strong>{wc.neutralMoves[0].name}</strong>
                                      {wc.neutralMoves[0].isStab ? ' (STAB)' : ''}
                                    </span>
                                  ) : (
                                    <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                                      Nessuna mossa efficace
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 4 Current Move Slots */}
              <div className="grid grid-cols-2 gap-2.5">
                {draft.moves.map((moveId, idx) => {
                  const move = moveId ? MOVES_BY_ID[moveId] : null;
                  const isEditing = editingMoveSlot === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setEditingMoveSlot(idx)}
                      className={`min-h-[56px] p-3 rounded-xl text-left border transition flex flex-col justify-between ${
                        isEditing
                          ? 'border-red-600 bg-red-500/5 ring-2 ring-red-500/30'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 w-full">
                        <span className="text-[11px] font-mono text-slate-400">
                          Mossa {idx + 1}
                        </span>
                        {move && <TypeBadge type={move.type} size="xs" compact />}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {move ? move.name : '— Seleziona mossa —'}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Search & Filter Moves */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={moveSearch}
                    onChange={(e) => setMoveSearch(e.target.value)}
                    placeholder="Cerca mossa o effetto..."
                    className="w-full min-h-[44px] pl-10 pr-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <select
                  value={moveTypeFilter}
                  onChange={(e) => setMoveTypeFilter(e.target.value as PokemonType | 'Tutti')}
                  className="min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white"
                >
                  <option value="Tutti">Tutti i Tipi</option>
                  {ALL_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowAllMoves(!showAllMoves)}
                  className={`min-h-[44px] px-3.5 rounded-xl text-xs font-semibold border transition whitespace-nowrap ${
                    showAllMoves
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {showAllMoves ? 'Tutte le Mosse' : 'Learnset BB2'}
                </button>
              </div>

              {/* Move List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                {filteredMoves.length === 0 ? (
                  <div className="p-6 text-center text-sm text-slate-500">
                    Nessuna mossa trovata. Prova ad attivare “Tutte le Mosse”.
                  </div>
                ) : (
                  filteredMoves.map((m) => {
                    const isSelected = draft.moves.includes(m.id);
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => selectMove(m.id)}
                        className="w-full min-h-[56px] px-4 py-2.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {m.name}
                            </span>
                            <TypeBadge type={m.type} size="xs" />
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">
                              {m.category}
                            </span>
                            {m.bb2Buffed && (
                              <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                                · Buff BB2
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {m.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right font-mono text-xs">
                            <div className="font-bold text-slate-900 dark:text-white">
                              {m.power > 0 ? m.power : '—'}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {m.accuracy ? `${m.accuracy}%` : '∞'}
                            </div>
                          </div>
                          {isSelected && (
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-5">
              {/* Nickname & Shiny */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Soprannome (opzionale)
                  </label>
                  <input
                    type="text"
                    maxLength={16}
                    value={draft.nickname}
                    onChange={(e) => setDraft({ ...draft, nickname: e.target.value })}
                    placeholder={species.name}
                    className="w-full min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Variante Cromatica
                  </label>
                  <button
                    type="button"
                    onClick={() => setDraft({ ...draft, shiny: !draft.shiny })}
                    className={`w-full min-h-[44px] px-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition ${
                      draft.shiny
                        ? 'bg-amber-500/15 border-amber-500 text-amber-700 dark:text-amber-300'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{draft.shiny ? 'Shiny Attivo' : 'Normale'}</span>
                  </button>
                </div>
              </div>

              {/* Abilities */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Abilità
                </label>
                <div className="space-y-2">
                  {species.abilities.map((ab) => {
                    const active = draft.ability === ab.name;
                    return (
                      <button
                        key={ab.name}
                        type="button"
                        onClick={() => setDraft({ ...draft, ability: ab.name })}
                        className={`w-full p-3.5 rounded-xl border text-left transition ${
                          active
                            ? 'border-red-600 bg-red-500/5 ring-2 ring-red-500/20'
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {ab.name}
                          </span>
                          {ab.isHidden && (
                            <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                              Abilità Nascosta (BB2)
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {ab.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Held Item */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Strumento Assegnato
                </label>
                <select
                  value={draft.item}
                  onChange={(e) => setDraft({ ...draft, item: e.target.value })}
                  className="w-full min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                >
                  <option value="">Nessuno strumento</option>
                  {ITEMS.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.italianName} ({item.name}) — {item.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tactical Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Note Tattiche per la Run
                </label>
                <textarea
                  rows={3}
                  value={draft.notes}
                  onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                  placeholder="Es: Entra su Haxorus di Aristide e usa Ice Shard, oppure tieni per Ghecis..."
                  className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}
        </div>

        {/* Sticky Modal Footer */}
        <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onRemove}
            className="min-h-[44px] px-3.5 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/10 inline-flex items-center gap-1.5 transition"
          >
            <Trash2 className="w-4 h-4" />
            <span>Rimuovi</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            >
              Annulla
            </button>
            <button
              type="button"
              onClick={() => onSave(draft)}
              className="min-h-[44px] px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition"
            >
              Salva Modifiche
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
