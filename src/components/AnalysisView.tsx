import React, { useMemo, useState } from 'react';
import { AlertTriangle, BarChart3, CheckCircle2, ChevronDown, Layers, Shield, ShieldAlert, Swords, X, Zap } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import { NATURES_BY_NAME } from '../data/naturesAndItems';
import {
  ALL_TYPES,
  analyzeMemberWeaknessCounters,
  analyzeTeamDefense,
  analyzeTeamOffense,
  analyzeTeamSynergy,
  calculateHiddenPower,
  calculateStat,
  getBST,
  getPokemonDefenseBreakdown,
  getTypeEffectiveness,
  TYPE_STYLES,
} from '../data/typeChart';
import { PokemonSpecies, PokemonType, SavedTeam, StatKey, TeamMember } from '../types/pokemon';
import { PokemonArtwork } from './PokemonArtwork';
import { TypeBadge } from './TypeBadge';

const STAT_META: {
  key: StatKey;
  label: string;
  short: string;
  barClass: string;
  accentText: string;
}[] = [
  { key: 'hp', label: 'PS (Punti Salute)', short: 'PS', barClass: 'bg-emerald-500', accentText: 'text-emerald-600 dark:text-emerald-400' },
  { key: 'atk', label: 'Attacco', short: 'Atk', barClass: 'bg-orange-500', accentText: 'text-orange-600 dark:text-orange-400' },
  { key: 'def', label: 'Difesa', short: 'Dif', barClass: 'bg-amber-500', accentText: 'text-amber-600 dark:text-amber-400' },
  { key: 'spa', label: 'Attacco Speciale', short: 'SpA', barClass: 'bg-sky-500', accentText: 'text-sky-600 dark:text-sky-400' },
  { key: 'spd', label: 'Difesa Speciale', short: 'SpD', barClass: 'bg-teal-500', accentText: 'text-teal-600 dark:text-teal-400' },
  { key: 'spe', label: 'Velocità', short: 'Vel', barClass: 'bg-pink-500', accentText: 'text-pink-600 dark:text-pink-400' },
];

interface AnalysisViewProps {
  team: SavedTeam;
  onGoToTeam: () => void;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ team, onGoToTeam }) => {
  const [subTab, setSubTab] = useState<'defense' | 'offense' | 'synergy' | 'stats'>('defense');
  const [selectedStat, setSelectedStat] = useState<'all' | StatKey>('all');
  const [synergyFilter, setSynergyFilter] = useState<'all' | 'double' | 'gaps'>('all');
  const [expandedOffenseTypes, setExpandedOffenseTypes] = useState<Record<string, boolean>>({});
  const [weaknessModalUid, setWeaknessModalUid] = useState<string | null>(null);

  const toggleOffenseType = (type: PokemonType) => {
    setExpandedOffenseTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const setAllOffenseExpanded = (open: boolean) => {
    const next: Record<string, boolean> = {};
    for (const t of ALL_TYPES) {
      next[t] = open;
    }
    setExpandedOffenseTypes(next);
  };

  const members = useMemo(
    () => team.members.filter((m): m is TeamMember => m !== null),
    [team.members]
  );

  const defenseSummary = useMemo(
    () => analyzeTeamDefense(members, BB2_POKEMON_BY_ID),
    [members]
  );

  const offenseSummary = useMemo(
    () => analyzeTeamOffense(members, BB2_POKEMON_BY_ID),
    [members]
  );

  const synergy = useMemo(
    () => analyzeTeamSynergy(members, BB2_POKEMON_BY_ID),
    [members]
  );

  const memberStatProfiles = useMemo(() => {
    return members
      .map((m) => {
        const sp: PokemonSpecies | undefined = BB2_POKEMON_BY_ID[m.speciesId];
        if (!sp) return null;
        const nature = NATURES_BY_NAME[m.nature];

        const raw = {
          hp: calculateStat('hp', sp.baseStats.hp, m.ivs.hp, m.evs.hp, m.level, nature),
          atk: calculateStat('atk', sp.baseStats.atk, m.ivs.atk, m.evs.atk, m.level, nature),
          def: calculateStat('def', sp.baseStats.def, m.ivs.def, m.evs.def, m.level, nature),
          spa: calculateStat('spa', sp.baseStats.spa, m.ivs.spa, m.evs.spa, m.level, nature),
          spd: calculateStat('spd', sp.baseStats.spd, m.ivs.spd, m.evs.spd, m.level, nature),
          spe: calculateStat('spe', sp.baseStats.spe, m.ivs.spe, m.evs.spe, m.level, nature),
        };

        const hasHugePower = m.ability === 'Huge Power' || m.ability === 'Pure Power';
        const hasBand = m.item === 'Choice Band';
        const hasSpecs = m.item === 'Choice Specs';
        const hasScarf = m.item === 'Choice Scarf';

        const effective = {
          hp: raw.hp,
          atk: Math.floor(raw.atk * (hasHugePower ? 2 : 1) * (hasBand ? 1.5 : 1)),
          def: raw.def,
          spa: Math.floor(raw.spa * (hasSpecs ? 1.5 : 1)),
          spd: raw.spd,
          spe: Math.floor(raw.spe * (hasScarf ? 1.5 : 1)),
        };

        const modifiers: Partial<Record<StatKey, string>> = {};
        if (hasHugePower && hasBand) modifiers.atk = `${m.ability} ×2 · Bendascelta +50%`;
        else if (hasHugePower) modifiers.atk = `${m.ability} ×2`;
        else if (hasBand) modifiers.atk = 'Bendascelta +50%';
        if (hasSpecs) modifiers.spa = 'Lentiscelta +50%';
        if (hasScarf) modifiers.spe = 'Stolascelta +50%';

        return {
          member: m,
          species: sp,
          nature,
          bst: getBST(sp.baseStats),
          hiddenPower: calculateHiddenPower(m.ivs),
          defenseBreakdown: getPokemonDefenseBreakdown(sp.types, m.ability),
          weaknessCounters: analyzeMemberWeaknessCounters(m, sp, members, BB2_POKEMON_BY_ID),
          raw,
          effective,
          modifiers,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }, [members]);

  const statAnalytics = useMemo(() => {
    const count = memberStatProfiles.length;
    if (count === 0) return null;

    const perStat = STAT_META.map((meta) => {
      const ranked = [...memberStatProfiles].sort(
        (a, b) => b.effective[meta.key] - a.effective[meta.key]
      );
      const total = ranked.reduce((acc, item) => acc + item.effective[meta.key], 0);
      const avg = Math.round(total / count);
      const leader = ranked[0];
      const lowest = ranked[ranked.length - 1];
      return {
        ...meta,
        avg,
        leader,
        lowest,
        ranked,
      };
    });

    const physicalCount = memberStatProfiles.filter(
      (p) => p.effective.atk >= p.effective.spa * 1.1
    ).length;
    const specialCount = memberStatProfiles.filter(
      (p) => p.effective.spa >= p.effective.atk * 1.1
    ).length;
    const mixedCount = count - physicalCount - specialCount;
    const avgBst = Math.round(
      memberStatProfiles.reduce((acc, p) => acc + p.bst, 0) / count
    );

    const speedRank = perStat.find((s) => s.key === 'spe')?.ranked ?? [];

    return {
      perStat,
      physicalCount,
      specialCount,
      mixedCount,
      avgBst,
      fastest: speedRank[0],
    };
  }, [memberStatProfiles]);

  if (members.length === 0) {
    return (
      <div className="p-10 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <Shield className="w-10 h-10 text-slate-400 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Squadra vuota
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Aggiungi almeno un Pokémon nella scheda Squadra per analizzare debolezze Redux (18 tipi incluso Folletto), immunità da abilità e copertura offensiva.
        </p>
        <button
          type="button"
          onClick={onGoToTeam}
          className="min-h-[44px] px-5 rounded-xl bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition"
        >
          Vai alla Squadra
        </button>
      </div>
    );
  }

  const criticalAlerts = defenseSummary.filter((d) => d.weak2x + d.weak4x >= 3 && d.resist + d.immune === 0);
  const uncoveredOffense = offenseSummary.filter((o) => o.superEffectiveCount === 0);

  return (
    <div className="space-y-5">
      {/* Top Diagnostic Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Allerte Difensive (BB2 Redux)
          </div>
          <div className="mt-1 flex items-center gap-2">
            {criticalAlerts.length > 0 ? (
              <>
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                  {criticalAlerts.length} tipi critici
                </span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  Buona tenuta
                </span>
              </>
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {criticalAlerts.length > 0
              ? `Scoperto contro: ${criticalAlerts.map((c) => c.type).join(', ')}`
              : 'Include Immunità da abilità e tabella tipi Redux.'}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Copertura Offensiva (18 Tipi)
          </div>
          <div className="mt-1 font-mono text-lg font-bold text-slate-900 dark:text-white">
            {18 - uncoveredOffense.length}/18 tipi colpiti x2+
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {uncoveredOffense.length > 0
              ? `Non colpiti x2: ${uncoveredOffense.map((u) => u.type).join(', ')}`
              : 'Copertura superefficace completa su tutti i 18 tipi!'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setSubTab('synergy')}
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500/60 text-left transition"
        >
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Sinergia Team (≥2 membri)</span>
            <span className="text-[10px] font-bold text-red-600 dark:text-red-400">Apri →</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-mono text-lg font-bold text-slate-900 dark:text-white">
              {synergy.synergyScore}/100
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Difesa 2+: <strong className="font-mono text-slate-800 dark:text-slate-200">{synergy.defensiveDoubleCount}/18</strong> · Attacco 2+: <strong className="font-mono text-slate-800 dark:text-slate-200">{synergy.offensiveDoubleCount}/18</strong>
          </p>
        </button>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Pokémon più Veloce &amp; BST Medio
          </div>
          <div className="mt-1 flex items-center gap-2">
            <Zap className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
            <span className="text-lg font-bold text-slate-900 dark:text-white truncate">
              {statAnalytics?.fastest
                ? `${statAnalytics.fastest.member.nickname || statAnalytics.fastest.species.name} (${statAnalytics.fastest.effective.spe})`
                : '—'}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            BST medio squadra: <strong className="font-mono text-slate-800 dark:text-slate-200">{statAnalytics?.avgBst ?? 0}</strong>
            {statAnalytics?.fastest?.modifiers.spe ? ` · ${statAnalytics.fastest.modifiers.spe}` : ''}
          </p>
        </div>
      </div>

      {/* Sub-navigation Segmented Control */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 max-w-2xl">
        {[
          { id: 'defense', label: 'Difesa (Debolezze)', icon: Shield },
          { id: 'offense', label: 'Attacco (Mosse)', icon: Swords },
          { id: 'synergy', label: 'Sinergia (2+)', icon: Layers },
          { id: 'stats', label: 'Statistiche (6)', icon: BarChart3 },
        ].map((t) => {
          const Icon = t.icon;
          const active = subTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSubTab(t.id as 'defense' | 'offense' | 'synergy' | 'stats')}
              className={`min-h-[40px] px-3 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition whitespace-nowrap ${
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

      {/* Sub-view Content */}
      {subTab === 'defense' && (
        <div className="space-y-4">
          {/* Mobile-Friendly Defense Chart (Weaknesses vs Resistances & Immunities) */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Grafico Debolezze vs Resistenze (18 Tipi)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Visualizzazione ottimizzata per telefono: tipi ordinati dai più pericolosi ai più coperti.
                </p>
              </div>
            </div>

            <div className="w-full h-[430px] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[...defenseSummary]
                    .map((d) => ({
                      type: d.type,
                      debolezze: d.weak2x + d.weak4x,
                      resistenze: d.resist + d.immune,
                      bilancio: d.score,
                    }))
                    .sort((a, b) => b.debolezze - a.debolezze || a.bilancio - b.bilancio)}
                  layout="vertical"
                  margin={{ top: 4, right: 14, left: 10, bottom: 4 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.22} />
                  <XAxis
                    type="number"
                    allowDecimals={false}
                    domain={[0, Math.max(3, members.length)]}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="type"
                    width={78}
                    tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.94)',
                      border: '1px solid rgba(148, 163, 184, 0.25)',
                      borderRadius: '12px',
                      fontSize: '12px',
                      color: '#f8fafc',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar
                    dataKey="debolezze"
                    name="Debolezze (2× / 4×)"
                    fill="#ef4444"
                    radius={[0, 4, 4, 0]}
                    barSize={9}
                  />
                  <Bar
                    dataKey="resistenze"
                    name="Resistenze / Immunità"
                    fill="#10b981"
                    radius={[0, 4, 4, 0]}
                    barSize={9}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                <th className="py-3 px-4">Tipo Attaccante</th>
                {members.map((m) => {
                  const sp = BB2_POKEMON_BY_ID[m.speciesId];
                  return (
                    <th key={m.uid} className="py-3 px-2 text-center">
                      <span className="block truncate max-w-[84px] mx-auto text-slate-800 dark:text-slate-200">
                        {m.nickname || sp?.name}
                      </span>
                    </th>
                  );
                })}
                <th className="py-3 px-4 text-right">Bilancio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
              {defenseSummary.map((row) => {
                const isDanger = row.weak2x + row.weak4x >= 3 && row.resist + row.immune === 0;
                return (
                  <tr
                    key={row.type}
                    className={isDanger ? 'bg-red-500/5' : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'}
                  >
                    <td className="py-2.5 px-4">
                      <TypeBadge type={row.type} size="xs" />
                    </td>
                    {members.map((m) => {
                      const sp = BB2_POKEMON_BY_ID[m.speciesId];
                      if (!sp) return <td key={m.uid} />;
                      const mult = getTypeEffectiveness(row.type, sp.types, m.ability);
                      let label = '1×';
                      let cls = 'text-slate-400 dark:text-slate-500';
                      if (mult === 0) {
                        label = '0×';
                        cls = 'font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 rounded-md px-1.5 py-0.5';
                      } else if (mult >= 3.5) {
                        label = '4×';
                        cls = 'font-bold text-red-700 dark:text-red-400 bg-red-500/15 rounded-md px-1.5 py-0.5';
                      } else if (mult > 1) {
                        label = '2×';
                        cls = 'font-semibold text-orange-700 dark:text-orange-400 bg-orange-500/10 rounded-md px-1.5 py-0.5';
                      } else if (mult <= 0.3) {
                        label = '¼×';
                        cls = 'font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 rounded-md px-1.5 py-0.5';
                      } else if (mult < 1) {
                        label = '½×';
                        cls = 'font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 rounded-md px-1.5 py-0.5';
                      }

                      return (
                        <td key={m.uid} className="py-2.5 px-2 text-center font-mono">
                          <span className={cls}>{label}</span>
                        </td>
                      );
                    })}
                    <td className="py-2.5 px-4 text-right font-mono font-semibold">
                      <span
                        className={
                          row.score > 0
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : row.score < 0
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-slate-500'
                        }
                      >
                        {row.score > 0 ? `+${row.score}` : row.score}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      )}

      {subTab === 'offense' && (
        <div className="space-y-4">
          {/* Highlighted Pokémon Weaknesses Strip + Popup Window Trigger at Top of Moves Page */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400" />
                  Debolezze dei Pokémon della Squadra
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Controlla le debolezze di ciascun membro per scegliere le mosse di copertura. Tocca Debolezze per la finestra a comparsa.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {memberStatProfiles.map((profile) => {
                const { quadWeak, doubleWeak } = profile.defenseBreakdown;
                const totalWeak = quadWeak.length + doubleWeak.length;

                return (
                  <div
                    key={profile.member.uid}
                    className={`p-3 rounded-xl border flex flex-col justify-between gap-2.5 ${
                      quadWeak.length > 0
                        ? 'bg-red-500/[0.04] dark:bg-red-500/[0.06] border-red-500/35'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <PokemonArtwork
                          speciesId={profile.species.id}
                          spriteId={profile.species.spriteId}
                          name={profile.species.name}
                          primaryType={profile.species.types[0]}
                          shiny={profile.member.shiny}
                          size="sm"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {profile.member.nickname || profile.species.name}
                          </div>
                          <div className="mt-0.5 flex items-center gap-1 flex-wrap">
                            {profile.species.types.map((t) => (
                              <TypeBadge key={t} type={t} size="xs" compact />
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setWeaknessModalUid(profile.member.uid)}
                        className={`min-h-[34px] px-2.5 rounded-lg text-[11px] font-semibold inline-flex items-center gap-1 shrink-0 transition ${
                          quadWeak.length > 0
                            ? 'bg-red-600 text-white hover:bg-red-700 shadow-sm'
                            : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-red-400 dark:hover:border-red-500/60'
                        }`}
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Debolezze ({totalWeak})</span>
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1 flex-wrap">
                        {totalWeak === 0 ? (
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            Nessuna debolezza
                          </span>
                        ) : (
                          <>
                            {quadWeak.map((w) => (
                              <span
                                key={`4x-${w.type}`}
                                className="inline-flex items-center gap-1 pr-1.5 rounded-md bg-red-600/15 border border-red-500/40"
                                title={`Debolezza ${w.multiplier}× a ${w.type}`}
                              >
                                <TypeBadge type={w.type} size="xs" compact />
                                <span className="font-mono text-[10px] font-extrabold text-red-700 dark:text-red-300">
                                  {w.multiplier}×
                                </span>
                              </span>
                            ))}
                            {doubleWeak.slice(0, quadWeak.length > 0 ? 3 : 4).map((w) => (
                              <span
                                key={`2x-${w.type}`}
                                className="inline-flex items-center gap-1 pr-1.5 rounded-md bg-amber-500/15 border border-amber-500/35"
                                title={`Debolezza ${w.multiplier}× a ${w.type}`}
                              >
                                <TypeBadge type={w.type} size="xs" compact />
                                <span className="font-mono text-[10px] font-bold text-amber-800 dark:text-amber-300">
                                  {w.multiplier}×
                                </span>
                              </span>
                            ))}
                            {doubleWeak.length > (quadWeak.length > 0 ? 3 : 4) && (
                              <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 px-1">
                                +{doubleWeak.length - (quadWeak.length > 0 ? 3 : 4)}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      {totalWeak > 0 && (() => {
                        const seCounters = profile.weaknessCounters.filter(
                          (wc) => wc.status === 'super-effective'
                        );
                        return (
                          <div className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                            {seCounters.length > 0 ? (
                              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                                Contrasta {seCounters.length}/{totalWeak} con:{' '}
                                {seCounters.map((c) => c.superEffectiveMoves[0].name).join(', ')}
                              </span>
                            ) : (
                              <span className="text-amber-700 dark:text-amber-400">
                                Nessuna mossa 2× contro le sue debolezze
                              </span>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tocca un tipo per aprire la tendina e vedere Pokémon e mosse superefficaci (2×) della squadra.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setAllOffenseExpanded(true)}
                className="min-h-[36px] px-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition"
              >
                Espandi tutti
              </button>
              <button
                type="button"
                onClick={() => setAllOffenseExpanded(false)}
                className="min-h-[36px] px-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition"
              >
                Chiudi tutti
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
            {offenseSummary.map((item) => {
              const covered = item.superEffectiveCount > 0;
              const isExpanded = Boolean(expandedOffenseTypes[item.type]);
              const weaknessHintTypes = ALL_TYPES.filter(
                (atk) => getTypeEffectiveness(atk, [item.type]) > 1
              );

              return (
                <div
                  key={item.type}
                  className={`rounded-2xl border overflow-hidden transition ${
                    covered
                      ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                      : 'bg-red-500/5 border-red-500/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleOffenseType(item.type)}
                    aria-expanded={isExpanded}
                    className="w-full min-h-[60px] p-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                  >
                    <div className="min-w-0 space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <TypeBadge type={item.type} size="xs" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {covered
                            ? `${item.superEffectiveCount} Pokémon · ${item.totalSeMoves} ${
                                item.totalSeMoves === 1 ? 'mossa' : 'mosse'
                              } x2`
                            : 'Nessuna mossa superefficace'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {covered
                          ? `${item.coveringMembers.join(', ')}${
                              item.stabCount > 0 ? ` · ${item.stabCount} con STAB` : ''
                            }`
                          : `Tipi efficaci: ${weaknessHintTypes.join(', ')}`}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`font-mono text-xs font-bold ${
                          covered
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {covered ? `${item.totalSeMoves}× SE` : '0'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-slate-700 dark:text-slate-200' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 p-3.5 space-y-3">
                      {!covered ? (
                        <div className="space-y-2">
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            Nessun Pokémon della squadra ha una mossa offensiva superefficace contro il tipo{' '}
                            <strong className="text-slate-900 dark:text-white">{item.type}</strong>.
                          </p>
                          <div className="flex items-center flex-wrap gap-1.5">
                            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mr-1">
                              Mosse consigliate di tipo:
                            </span>
                            {weaknessHintTypes.map((wt) => (
                              <TypeBadge key={wt} type={wt} size="xs" />
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          {item.matches.map((match) => (
                            <div
                              key={match.memberUid}
                              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 space-y-2"
                            >
                              <div className="flex items-center gap-2.5">
                                <PokemonArtwork
                                  speciesId={match.speciesId}
                                  spriteId={match.spriteId}
                                  name={match.memberName}
                                  primaryType={match.types[0]}
                                  size="sm"
                                />
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                    {match.memberName}
                                  </div>
                                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                    {match.moves.length}{' '}
                                    {match.moves.length === 1 ? 'mossa superefficace' : 'mosse superefficaci'}
                                  </div>
                                </div>
                              </div>

                              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                                {match.moves.map((mv) => (
                                  <div
                                    key={mv.moveId}
                                    className="py-1.5 first:pt-0.5 last:pb-0 flex items-center justify-between gap-2 text-xs"
                                  >
                                    <div className="flex items-center gap-2 min-w-0">
                                      <TypeBadge type={mv.moveType} size="xs" />
                                      <div className="min-w-0">
                                        <div className="font-semibold text-slate-900 dark:text-white truncate">
                                          {mv.name}
                                        </div>
                                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                          {mv.category} · Pot. {mv.power}
                                          {mv.isStab ? ' · STAB (×1.5)' : ''}
                                        </div>
                                      </div>
                                    </div>
                                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                                      {mv.multiplier}×
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {subTab === 'synergy' && (
        <div className="space-y-5">
          {/* Team Synergy Overview KPIs */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Calcolo Sinergia Difensiva &amp; Offensiva del Team
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Evidenzia i tipi coperti da almeno <strong>2 membri del team</strong> sia in ingresso (resistenze/immunità) che in attacco (mosse 2×).
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'all', label: 'Tutti (18)' },
                  { id: 'double', label: 'Coperti 2+' },
                  { id: 'gaps', label: '1 solo / Scoperti' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSynergyFilter(f.id as 'all' | 'double' | 'gaps')}
                    className={`min-h-[34px] px-2.5 rounded-lg text-[11px] font-semibold transition ${
                      synergyFilter === f.id
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-300">
                    Sinergia Difensiva (≥2 Resistenze)
                  </span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {synergy.defensiveDoubleCount}/18
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${Math.round((synergy.defensiveDoubleCount / 18) * 100)}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Coperti da almeno 1 Pokémon: {synergy.defensiveCoveredCount}/18 tipi
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-300">
                    Sinergia Offensiva (≥2 Mosse 2×)
                  </span>
                  <span className="font-mono font-bold text-sky-600 dark:text-sky-400">
                    {synergy.offensiveDoubleCount}/18
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-sky-500 transition-all"
                    style={{ width: `${Math.round((synergy.offensiveDoubleCount / 18) * 100)}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Colpiti da almeno 1 Pokémon: {synergy.offensiveCoveredCount}/18 tipi
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-300">
                    Switch-In su Debolezze
                  </span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {synergy.weaknessesWithSwitchIn}/{synergy.totalTeamWeaknessSlots}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all"
                    style={{
                      width: `${
                        synergy.totalTeamWeaknessSlots > 0
                          ? Math.round(
                              (synergy.weaknessesWithSwitchIn / synergy.totalTeamWeaknessSlots) * 100
                            )
                          : 100
                      }%`,
                    }}
                  />
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Debolezze del team coperte da almeno un cambio sicuro.
                </div>
              </div>
            </div>
          </div>

          {/* Defensive 2+ Synergy Grid */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Sinergia Difensiva — Tipi Coperti da ≥ 2 Membri
              </h3>
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {synergy.defensiveDoubleCount}/18 con 2+ difensori
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {synergy.defensiveTypes
                .filter((d) =>
                  synergyFilter === 'all'
                    ? true
                    : synergyFilter === 'double'
                      ? d.isDoubleCovered
                      : !d.isDoubleCovered
                )
                .map((entry) => (
                  <div
                    key={`def-${entry.type}`}
                    className={`p-3 rounded-xl border space-y-2 ${
                      entry.isDoubleCovered
                        ? 'bg-emerald-500/[0.05] border-emerald-500/35'
                        : entry.isSingleCovered
                          ? 'bg-amber-500/[0.04] border-amber-500/30'
                          : 'bg-red-500/[0.05] border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <TypeBadge type={entry.type} size="xs" />
                      <span
                        className={`font-mono text-[11px] font-bold ${
                          entry.isDoubleCovered
                            ? 'text-emerald-700 dark:text-emerald-300'
                            : entry.isSingleCovered
                              ? 'text-amber-700 dark:text-amber-300'
                              : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {entry.isDoubleCovered
                          ? `${entry.defenders.length} membri ✓`
                          : entry.isSingleCovered
                            ? 'Solo 1 membro'
                            : '0 difensori'}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                      {entry.defenders.length > 0 ? (
                        <div>
                          <span className="font-semibold">Resiste: </span>
                          {entry.defenders
                            .map((d) => {
                              const tag = d.mult === 0 ? '0×' : d.mult <= 0.3 ? '¼×' : '½×';
                              return `${d.memberName} (${tag})`;
                            })
                            .join(', ')}
                        </div>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">
                          Nessun Pokémon resiste o assorbe questo tipo.
                        </span>
                      )}
                      {entry.weakMembers.length > 0 && (
                        <div className="mt-1 text-slate-500 dark:text-slate-400">
                          Deboli: {entry.weakMembers.map((w) => `${w.memberName} (${w.mult}×)`).join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Offensive 2+ Synergy Grid */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Swords className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                Sinergia Offensiva — Tipi Colpiti 2× da ≥ 2 Membri
              </h3>
              <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">
                {synergy.offensiveDoubleCount}/18 con 2+ attaccanti SE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {synergy.offensiveTypes
                .filter((o) =>
                  synergyFilter === 'all'
                    ? true
                    : synergyFilter === 'double'
                      ? o.isDoubleCovered
                      : !o.isDoubleCovered
                )
                .map((entry) => (
                  <div
                    key={`off-${entry.type}`}
                    className={`p-3 rounded-xl border space-y-2 ${
                      entry.isDoubleCovered
                        ? 'bg-sky-500/[0.05] border-sky-500/35'
                        : entry.isSingleCovered
                          ? 'bg-amber-500/[0.04] border-amber-500/30'
                          : 'bg-red-500/[0.05] border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <TypeBadge type={entry.type} size="xs" />
                      <span
                        className={`font-mono text-[11px] font-bold ${
                          entry.isDoubleCovered
                            ? 'text-sky-700 dark:text-sky-300'
                            : entry.isSingleCovered
                              ? 'text-amber-700 dark:text-amber-300'
                              : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {entry.isDoubleCovered
                          ? `${entry.attackers.length} membri ✓`
                          : entry.isSingleCovered
                            ? 'Solo 1 membro'
                            : 'Non coperto'}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                      {entry.attackers.length > 0 ? (
                        <div>
                          {entry.attackers
                            .map(
                              (a) =>
                                `${a.memberName} (${a.bestMoveName}${a.isStab ? ' STAB' : ''})`
                            )
                            .join(', ')}
                        </div>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">
                          Nessun membro colpisce x2 questo tipo.
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Per-Pokemon Weakness Counter-Move Analysis */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400" />
                Come Ogni Pokémon Contrasta le Sue Debolezze (con le proprie mosse)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verifica per ciascun membro se le 4 mosse assegnate colpiscono superefficacemente i tipi a cui è debole e quali compagni coprono lo switch.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {memberStatProfiles.map((profile) => (
                <div
                  key={`wc-${profile.member.uid}`}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <PokemonArtwork
                        speciesId={profile.species.id}
                        spriteId={profile.species.spriteId}
                        name={profile.species.name}
                        primaryType={profile.species.types[0]}
                        shiny={profile.member.shiny}
                        size="sm"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {profile.member.nickname || profile.species.name}
                        </div>
                        <div className="mt-0.5 flex items-center gap-1 flex-wrap">
                          {profile.species.types.map((t) => (
                            <TypeBadge key={t} type={t} size="xs" compact />
                          ))}
                          {profile.member.ability && (
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1">
                              · {profile.member.ability}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <span className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300 shrink-0">
                      {profile.weaknessCounters.filter((w) => w.status === 'super-effective').length}/
                      {profile.weaknessCounters.length} coperte 2×
                    </span>
                  </div>

                  {profile.weaknessCounters.length === 0 ? (
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      Nessuna debolezza difensiva da contrastare.
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {profile.weaknessCounters.map((wc) => (
                        <div
                          key={wc.weaknessType}
                          className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 flex flex-col gap-1 text-xs"
                        >
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-1.5">
                              <TypeBadge type={wc.weaknessType} size="xs" />
                              <span
                                className={`font-mono text-[11px] font-bold ${
                                  wc.incomingMultiplier >= 3.5
                                    ? 'text-red-600 dark:text-red-400'
                                    : 'text-amber-700 dark:text-amber-300'
                                }`}
                              >
                                {wc.incomingMultiplier}×
                              </span>
                            </div>

                            <div className="flex items-center gap-1 flex-wrap">
                              {wc.status === 'super-effective' ? (
                                wc.superEffectiveMoves.slice(0, 2).map((mv) => (
                                  <span
                                    key={mv.moveId}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]"
                                  >
                                    <TypeBadge type={mv.moveType} size="xs" compact />
                                    <span>{mv.name}</span>
                                    <span className="font-mono">({mv.effectiveness}×)</span>
                                  </span>
                                ))
                              ) : wc.status === 'neutral-only' ? (
                                <span className="text-[11px] text-sky-700 dark:text-sky-300 font-medium">
                                  Neutro 1×: <strong>{wc.neutralMoves[0].name}</strong>
                                </span>
                              ) : (
                                <span className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                                  Scoperto nelle sue mosse
                                </span>
                              )}
                            </div>
                          </div>

                          {wc.teammateSwitchIns.length > 0 && (
                            <div className="text-[10.5px] text-slate-500 dark:text-slate-400">
                              Switch compagni:{' '}
                              {wc.teammateSwitchIns
                                .slice(0, 3)
                                .map((s) => `${s.memberName} (${s.mult === 0 ? '0×' : s.mult <= 0.3 ? '¼×' : '½×'})`)
                                .join(', ')}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {subTab === 'stats' && statAnalytics && (
        <div className="space-y-4">
          {/* Team Stat Balance Summary */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Profilo Statistiche Completo della Squadra
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Valori calcolati su Livello, IV, EV, Natura, Huge Power e strumenti Scelta.
                </p>
              </div>
              <div className="text-xs font-mono text-slate-600 dark:text-slate-300">
                BST medio: <strong className="text-slate-900 dark:text-white">{statAnalytics.avgBst}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  Bilancio Offensivo
                </div>
                <div className="mt-1 font-bold text-slate-900 dark:text-white">
                  {statAnalytics.physicalCount} Fisici · {statAnalytics.specialCount} Speciali
                  {statAnalytics.mixedCount > 0 ? ` · ${statAnalytics.mixedCount} Misti` : ''}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {statAnalytics.physicalCount > 0 && statAnalytics.specialCount > 0
                    ? 'Buon mix tra danni fisici e speciali.'
                    : statAnalytics.physicalCount === 0
                      ? 'Solo attaccanti speciali: attenzione ai wall speciali.'
                      : 'Solo attaccanti fisici: attenzione a Intimidate/Scottatura.'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  Tenuta Difensiva Media
                </div>
                <div className="mt-1 font-mono font-bold text-slate-900 dark:text-white">
                  PS {statAnalytics.perStat[0].avg} · Dif {statAnalytics.perStat[2].avg} · SpD {statAnalytics.perStat[4].avg}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {statAnalytics.perStat[2].avg >= statAnalytics.perStat[4].avg + 20
                    ? 'Squadra più solida sul lato fisico.'
                    : statAnalytics.perStat[4].avg >= statAnalytics.perStat[2].avg + 20
                      ? 'Squadra più solida sul lato speciale.'
                      : 'Bulk fisico e speciale ben bilanciato.'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  Velocità Media Squadra
                </div>
                <div className="mt-1 font-mono font-bold text-slate-900 dark:text-white">
                  {statAnalytics.perStat[5].avg} Vel media
                </div>
                <div className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  Leader: {statAnalytics.perStat[5].leader.member.nickname || statAnalytics.perStat[5].leader.species.name} ({statAnalytics.perStat[5].leader.effective.spe})
                </div>
              </div>
            </div>
          </div>

          {/* Introforza (Hidden Power) per Pokémon */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Introforza (Hidden Power) dei Pokémon
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tipo e potenza base (Gen 5, 30–70 BP) calcolati automaticamente dagli IV di ogni membro.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                Ordine IV: PS/Atk/Dif/SpA/SpD/Vel
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {memberStatProfiles.map((profile) => {
                const { ivs } = profile.member;
                const hasHpMove = profile.member.moves.some(
                  (mv) => mv && mv.startsWith('hidden-power')
                );
                return (
                  <div
                    key={profile.member.uid}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <PokemonArtwork
                        speciesId={profile.species.id}
                        spriteId={profile.species.spriteId}
                        name={profile.species.name}
                        primaryType={profile.species.types[0]}
                        shiny={profile.member.shiny}
                        size="sm"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {profile.member.nickname || profile.species.name}
                          </span>
                          {hasHpMove && (
                            <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400 shrink-0">
                              · Mossa attiva
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                          {ivs.hp}/{ivs.atk}/{ivs.def}/{ivs.spa}/{ivs.spd}/{ivs.spe}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <TypeBadge type={profile.hiddenPower.type} size="xs" />
                      <span className="font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                        Pot. {profile.hiddenPower.power}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6-Stat Summary Cards Grid (clickable to inspect single stat) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {statAnalytics.perStat.map((st) => {
              const active = selectedStat === st.key;
              return (
                <button
                  key={st.key}
                  type="button"
                  onClick={() => setSelectedStat(active ? 'all' : st.key)}
                  className={`p-3 rounded-2xl border text-left transition ${
                    active
                      ? 'bg-red-600/10 dark:bg-red-500/15 border-red-500 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-100">
                      <span className={`w-2 h-2 rounded-full ${st.barClass}`} />
                      {st.short}
                    </span>
                    <span className={`font-mono text-sm font-extrabold ${st.accentText}`}>
                      {st.avg}
                    </span>
                  </div>
                  <div className="mt-2 space-y-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <div className="truncate">
                      Max:{' '}
                      <strong className="font-mono text-slate-800 dark:text-slate-200">
                        {st.leader.effective[st.key]}
                      </strong>{' '}
                      ({st.leader.member.nickname || st.leader.species.name})
                    </div>
                    <div className="truncate">
                      Min:{' '}
                      <strong className="font-mono text-slate-700 dark:text-slate-300">
                        {st.lowest.effective[st.key]}
                      </strong>{' '}
                      ({st.lowest.member.nickname || st.lowest.species.name})
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stat Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedStat('all')}
              className={`min-h-[38px] px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition ${
                selectedStat === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tutte le 6 Statistiche
            </button>
            {STAT_META.map((st) => {
              const active = selectedStat === st.key;
              return (
                <button
                  key={st.key}
                  type="button"
                  onClick={() => setSelectedStat(st.key)}
                  className={`min-h-[38px] px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition inline-flex items-center gap-1.5 ${
                    active
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${active ? 'bg-white' : st.barClass}`} />
                  {st.label}
                </button>
              );
            })}
          </div>

          {/* Per-Stat Rankings */}
          <div
            className={
              selectedStat === 'all'
                ? 'grid grid-cols-1 lg:grid-cols-2 gap-4'
                : 'grid grid-cols-1 gap-4'
            }
          >
            {statAnalytics.perStat
              .filter((st) => selectedStat === 'all' || st.key === selectedStat)
              .map((st) => {
                const maxVal = Math.max(120, st.leader.effective[st.key]);

                return (
                  <div
                    key={st.key}
                    className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${st.barClass}`} />
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {st.label}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Media: <strong className="text-slate-900 dark:text-white">{st.avg}</strong>
                      </span>
                    </div>

                    <div className="space-y-3">
                      {st.ranked.map((item, idx) => {
                        const val = item.effective[st.key];
                        const pct = Math.min(100, Math.round((val / maxVal) * 100));
                        const evVal = item.member.evs[st.key];
                        const baseVal = item.species.baseStats[st.key];
                        const natBonus =
                          item.nature?.plus === st.key
                            ? ' (+10%)'
                            : item.nature?.minus === st.key
                              ? ' (-10%)'
                              : '';
                        const modNote = item.modifiers[st.key];

                        return (
                          <div key={item.member.uid} className="flex items-center gap-3">
                            <span className="w-4 font-mono text-[11px] font-bold text-slate-400 text-right shrink-0">
                              {idx + 1}
                            </span>
                            <PokemonArtwork
                              speciesId={item.species.id}
                              spriteId={item.species.spriteId}
                              name={item.species.name}
                              primaryType={item.species.types[0]}
                              size="sm"
                            />
                            <div className="flex-1 min-w-0 space-y-1">
                              <div className="flex items-center justify-between gap-2 text-xs">
                                <div className="min-w-0 truncate">
                                  <span className="font-semibold text-slate-900 dark:text-white">
                                    {item.member.nickname || item.species.name}
                                  </span>
                                  <span className="text-slate-500 dark:text-slate-400 ml-1.5 text-[11px]">
                                    Base {baseVal}
                                    {evVal > 0 ? ` · ${evVal} EV` : ''}
                                    {natBonus}
                                    {modNote ? ` · ${modNote}` : ''}
                                  </span>
                                </div>
                                <span className="font-mono font-bold text-slate-900 dark:text-white shrink-0">
                                  {val}
                                </span>
                              </div>
                              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                <div
                                  className={`h-full rounded-full transition-all ${st.barClass}`}
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Popup Window (Finestra a comparsa) for Selected Pokémon Weaknesses */}
      {weaknessModalUid && (() => {
        const selected = memberStatProfiles.find((p) => p.member.uid === weaknessModalUid);
        if (!selected) return null;
        const primaryType = selected.species.types[0] ?? 'Normale';
        const typeStyle = TYPE_STYLES[primaryType];
        const { quadWeak, doubleWeak, immune, quarterResist, halfResist } = selected.defenseBreakdown;

        return (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-sm p-0 sm:p-4"
            onClick={() => setWeaknessModalUid(null)}
          >
            <div
              className="w-full sm:max-w-lg max-h-[88dvh] flex flex-col rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`px-5 pt-3 pb-4 bg-gradient-to-br ${typeStyle.softBg} border-b border-slate-200 dark:border-slate-800`}>
                <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3 sm:hidden" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <PokemonArtwork
                      speciesId={selected.species.id}
                      spriteId={selected.species.spriteId}
                      name={selected.species.name}
                      primaryType={primaryType}
                      shiny={selected.member.shiny}
                      size="sm"
                    />
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                        Profilo Difensivo (Tabella BB2 Redux)
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                        {selected.member.nickname
                          ? `${selected.member.nickname} (${selected.species.name})`
                          : selected.species.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                        {selected.species.types.map((t) => (
                          <TypeBadge key={t} type={t} size="xs" />
                        ))}
                        {selected.member.ability && (
                          <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 ml-1">
                            · {selected.member.ability}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setWeaknessModalUid(null)}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800 transition"
                    aria-label="Chiudi finestra debolezze"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {quadWeak.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/35 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Debolezze Critiche (4×)
                      </span>
                      <span className="font-mono text-xs font-bold text-red-700 dark:text-red-300">
                        {quadWeak.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quadWeak.map((w) => (
                        <div
                          key={w.type}
                          className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-red-500/30"
                        >
                          <TypeBadge type={w.type} size="xs" />
                          <span className="font-mono text-xs font-extrabold text-red-600 dark:text-red-400">
                            {w.multiplier}×
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4" />
                      Debolezze (2×{doubleWeak.some((d) => d.multiplier !== 2) ? ' / mod.' : ''})
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                      {doubleWeak.length}
                    </span>
                  </div>
                  {doubleWeak.length === 0 ? (
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Nessuna debolezza 2×.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {doubleWeak.map((w) => (
                        <div
                          key={w.type}
                          className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-500/30"
                        >
                          <TypeBadge type={w.type} size="xs" />
                          <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-300">
                            {w.multiplier}×
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {immune.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                        Immunità (0×)
                      </span>
                      <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300">
                        {immune.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {immune.map((w) => (
                        <TypeBadge key={w.type} type={w.type} size="xs" />
                      ))}
                    </div>
                  </div>
                )}

                {(quarterResist.length > 0 || halfResist.length > 0) && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        Resistenze (¼× / ½×)
                      </span>
                      <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
                        {quarterResist.length + halfResist.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quarterResist.map((w) => (
                        <div
                          key={w.type}
                          className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-emerald-500/30"
                        >
                          <TypeBadge type={w.type} size="xs" />
                          <span className="font-mono text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
                            ¼×
                          </span>
                        </div>
                      ))}
                      {halfResist.map((w) => (
                        <div
                          key={w.type}
                          className="inline-flex items-center gap-1.5 pr-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-emerald-500/25"
                        >
                          <TypeBadge type={w.type} size="xs" />
                          <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            ½×
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selected.weaknessCounters.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
                      Come contrasta le sue debolezze con le proprie mosse
                    </div>
                    <div className="space-y-1.5">
                      {selected.weaknessCounters.map((wc) => (
                        <div
                          key={`modal-wc-${wc.weaknessType}`}
                          className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs"
                        >
                          <div className="flex items-center gap-1.5">
                            <TypeBadge type={wc.weaknessType} size="xs" />
                            <span className="font-mono text-[11px] font-bold text-slate-500">
                              ({wc.incomingMultiplier}×)
                            </span>
                          </div>
                          <div className="flex items-center gap-1 flex-wrap">
                            {wc.status === 'super-effective' ? (
                              wc.superEffectiveMoves.slice(0, 2).map((mv) => (
                                <span
                                  key={mv.moveId}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]"
                                >
                                  <TypeBadge type={mv.moveType} size="xs" compact />
                                  <span>{mv.name}</span>
                                  <span className="font-mono">({mv.effectiveness}×)</span>
                                </span>
                              ))
                            ) : wc.status === 'neutral-only' ? (
                              <span className="text-[11px] text-sky-700 dark:text-sky-300 font-medium">
                                Solo neutro 1×: <strong>{wc.neutralMoves[0].name}</strong>
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

              <div className="px-5 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex justify-end">
                <button
                  type="button"
                  onClick={() => setWeaknessModalUid(null)}
                  className="min-h-[44px] px-5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
