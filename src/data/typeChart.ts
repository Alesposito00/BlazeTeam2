import { BaseStats, MoveCategory, NatureData, PokemonSpecies, PokemonType, StatKey, TeamMember } from '../types/pokemon';
import { MOVES_BY_ID } from './moves';

export const ALL_TYPES: PokemonType[] = [
  'Normale',
  'Fuoco',
  'Acqua',
  'Erba',
  'Elettro',
  'Ghiaccio',
  'Lotta',
  'Veleno',
  'Terra',
  'Volante',
  'Psico',
  'Coleottero',
  'Roccia',
  'Spettro',
  'Drago',
  'Buio',
  'Acciaio',
  'Folletto',
];

export const TYPE_STYLES: Record<
  PokemonType,
  {
    bg: string;
    text: string;
    hex: string;
    softBg: string;
    border: string;
    short: string;
  }
> = {
  Normale: {
    bg: 'bg-stone-500',
    text: 'text-white',
    hex: '#A8A77A',
    softBg: 'from-stone-500/20 to-stone-500/5',
    border: 'border-stone-500/30',
    short: 'NOR',
  },
  Fuoco: {
    bg: 'bg-orange-600',
    text: 'text-white',
    hex: '#EE8130',
    softBg: 'from-orange-500/20 to-red-500/5',
    border: 'border-orange-500/30',
    short: 'FUO',
  },
  Acqua: {
    bg: 'bg-sky-600',
    text: 'text-white',
    hex: '#6390F0',
    softBg: 'from-sky-500/20 to-blue-500/5',
    border: 'border-sky-500/30',
    short: 'ACQ',
  },
  Erba: {
    bg: 'bg-emerald-600',
    text: 'text-white',
    hex: '#7AC74C',
    softBg: 'from-emerald-500/20 to-green-500/5',
    border: 'border-emerald-500/30',
    short: 'ERB',
  },
  Elettro: {
    bg: 'bg-amber-500',
    text: 'text-slate-950',
    hex: '#F7D02C',
    softBg: 'from-amber-400/20 to-yellow-500/5',
    border: 'border-amber-500/30',
    short: 'ELE',
  },
  Ghiaccio: {
    bg: 'bg-cyan-500',
    text: 'text-slate-950',
    hex: '#96D9D6',
    softBg: 'from-cyan-400/20 to-sky-400/5',
    border: 'border-cyan-500/30',
    short: 'GHI',
  },
  Lotta: {
    bg: 'bg-red-700',
    text: 'text-white',
    hex: '#C22E28',
    softBg: 'from-red-600/20 to-rose-600/5',
    border: 'border-red-600/30',
    short: 'LOT',
  },
  Veleno: {
    bg: 'bg-purple-600',
    text: 'text-white',
    hex: '#A33EA1',
    softBg: 'from-purple-500/20 to-fuchsia-500/5',
    border: 'border-purple-500/30',
    short: 'VEL',
  },
  Terra: {
    bg: 'bg-amber-700',
    text: 'text-white',
    hex: '#E2BF65',
    softBg: 'from-amber-700/20 to-yellow-700/5',
    border: 'border-amber-700/30',
    short: 'TER',
  },
  Volante: {
    bg: 'bg-indigo-500',
    text: 'text-white',
    hex: '#A98FF3',
    softBg: 'from-indigo-400/20 to-sky-400/5',
    border: 'border-indigo-500/30',
    short: 'VOL',
  },
  Psico: {
    bg: 'bg-fuchsia-600',
    text: 'text-white',
    hex: '#D946EF',
    softBg: 'from-fuchsia-500/20 to-purple-500/5',
    border: 'border-fuchsia-500/30',
    short: 'PSI',
  },
  Coleottero: {
    bg: 'bg-lime-600',
    text: 'text-white',
    hex: '#A6B91A',
    softBg: 'from-lime-500/20 to-emerald-500/5',
    border: 'border-lime-500/30',
    short: 'COL',
  },
  Roccia: {
    bg: 'bg-yellow-700',
    text: 'text-white',
    hex: '#B6A136',
    softBg: 'from-yellow-700/20 to-stone-600/5',
    border: 'border-yellow-700/30',
    short: 'ROC',
  },
  Spettro: {
    bg: 'bg-violet-700',
    text: 'text-white',
    hex: '#735797',
    softBg: 'from-violet-600/20 to-purple-700/5',
    border: 'border-violet-600/30',
    short: 'SPE',
  },
  Drago: {
    bg: 'bg-indigo-700',
    text: 'text-white',
    hex: '#6F35FC',
    softBg: 'from-indigo-600/20 to-violet-600/5',
    border: 'border-indigo-600/30',
    short: 'DRA',
  },
  Buio: {
    bg: 'bg-zinc-800',
    text: 'text-white',
    hex: '#705746',
    softBg: 'from-zinc-700/25 to-stone-800/10',
    border: 'border-zinc-600/40',
    short: 'BUI',
  },
  Acciaio: {
    bg: 'bg-slate-500',
    text: 'text-white',
    hex: '#B7B7CE',
    softBg: 'from-slate-400/20 to-zinc-500/5',
    border: 'border-slate-500/30',
    short: 'ACC',
  },
  Folletto: {
    bg: 'bg-pink-400',
    text: 'text-slate-950',
    hex: '#F472B6',
    softBg: 'from-pink-400/25 to-rose-300/10',
    border: 'border-pink-400/40',
    short: 'FOL',
  },
};

// Blaze Black 2 & Volt White 2 Redux Type Chart (Gen 6+ with Folletto & updated Acciaio)
const REDUX_CHART: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  Normale: { Roccia: 0.5, Spettro: 0, Acciaio: 0.5 },
  Fuoco: { Fuoco: 0.5, Acqua: 0.5, Erba: 2, Ghiaccio: 2, Coleottero: 2, Roccia: 0.5, Drago: 0.5, Acciaio: 2 },
  Acqua: { Fuoco: 2, Acqua: 0.5, Erba: 0.5, Terra: 2, Roccia: 2, Drago: 0.5 },
  Erba: { Fuoco: 0.5, Acqua: 2, Erba: 0.5, Veleno: 0.5, Terra: 2, Volante: 0.5, Coleottero: 0.5, Roccia: 2, Drago: 0.5, Acciaio: 0.5 },
  Elettro: { Acqua: 2, Erba: 0.5, Elettro: 0.5, Terra: 0, Volante: 2, Drago: 0.5 },
  Ghiaccio: { Fuoco: 0.5, Acqua: 0.5, Erba: 2, Ghiaccio: 0.5, Terra: 2, Volante: 2, Drago: 2, Acciaio: 0.5 },
  Lotta: { Normale: 2, Ghiaccio: 2, Veleno: 0.5, Volante: 0.5, Psico: 0.5, Coleottero: 0.5, Roccia: 2, Spettro: 0, Buio: 2, Acciaio: 2, Folletto: 0.5 },
  Veleno: { Erba: 2, Veleno: 0.5, Terra: 0.5, Roccia: 0.5, Spettro: 0.5, Acciaio: 0, Folletto: 2 },
  Terra: { Fuoco: 2, Erba: 0.5, Elettro: 2, Veleno: 2, Volante: 0, Coleottero: 0.5, Roccia: 2, Acciaio: 2 },
  Volante: { Erba: 2, Elettro: 0.5, Lotta: 2, Coleottero: 2, Roccia: 0.5, Acciaio: 0.5 },
  Psico: { Lotta: 2, Veleno: 2, Psico: 0.5, Buio: 0, Acciaio: 0.5 },
  Coleottero: { Fuoco: 0.5, Erba: 2, Lotta: 0.5, Veleno: 0.5, Volante: 0.5, Psico: 2, Spettro: 0.5, Buio: 2, Acciaio: 0.5, Folletto: 0.5 },
  Roccia: { Fuoco: 2, Ghiaccio: 2, Lotta: 0.5, Terra: 0.5, Volante: 2, Coleottero: 2, Acciaio: 0.5 },
  Spettro: { Normale: 0, Psico: 2, Spettro: 2, Buio: 0.5 },
  Drago: { Drago: 2, Acciaio: 0.5, Folletto: 0 },
  Buio: { Lotta: 0.5, Psico: 2, Spettro: 2, Buio: 0.5, Folletto: 0.5 },
  Acciaio: { Fuoco: 0.5, Acqua: 0.5, Elettro: 0.5, Ghiaccio: 2, Roccia: 2, Acciaio: 0.5, Folletto: 2 },
  Folletto: { Fuoco: 0.5, Lotta: 2, Veleno: 0.5, Drago: 2, Buio: 2, Acciaio: 0.5 },
};

export function getTypeEffectiveness(
  attacking: PokemonType,
  defendingTypes: PokemonType[],
  ability?: string
): number {
  if (attacking === 'Terra' && ability === 'Levitate') return 0;
  if (attacking === 'Fuoco' && ability === 'Flash Fire') return 0;
  if (attacking === 'Acqua' && (ability === 'Water Absorb' || ability === 'Storm Drain' || ability === 'Dry Skin'))
    return 0;
  if (attacking === 'Elettro' && (ability === 'Volt Absorb' || ability === 'Lightning Rod' || ability === 'Motor Drive'))
    return 0;
  if (attacking === 'Erba' && ability === 'Sap Sipper') return 0;

  let mult = 1;
  for (const def of defendingTypes) {
    const val = REDUX_CHART[attacking]?.[def] ?? 1;
    mult *= val;
  }
  if (ability === 'Thick Fat' && (attacking === 'Fuoco' || attacking === 'Ghiaccio')) {
    mult *= 0.5;
  }
  if ((ability === 'Filter' || ability === 'Solid Rock') && mult > 1) {
    mult *= 0.75;
  }
  return mult;
}

export interface TypeDefenseSummary {
  type: PokemonType;
  weak4x: number;
  weak2x: number;
  neutral: number;
  resist: number;
  immune: number;
  score: number;
}

export function analyzeTeamDefense(
  members: TeamMember[],
  speciesMap: Record<number, PokemonSpecies>
): TypeDefenseSummary[] {
  return ALL_TYPES.map((atkType) => {
    let weak4x = 0;
    let weak2x = 0;
    let neutral = 0;
    let resist = 0;
    let immune = 0;

    for (const m of members) {
      const sp = speciesMap[m.speciesId];
      if (!sp) continue;
      const mult = getTypeEffectiveness(atkType, sp.types, m.ability);
      if (mult === 0) immune++;
      else if (mult >= 3.5) weak4x++;
      else if (mult > 1) weak2x++;
      else if (mult < 1) resist++;
      else neutral++;
    }

    const score = resist + immune * 1.5 - (weak2x + weak4x * 2);
    return { type: atkType, weak4x, weak2x, neutral, resist, immune, score };
  });
}

export interface OffenseMoveMatch {
  moveId: string;
  name: string;
  moveType: PokemonType;
  category: MoveCategory;
  power: number;
  isStab: boolean;
  multiplier: number;
}

export interface OffenseMemberMatch {
  memberUid: string;
  speciesId: number;
  spriteId?: number;
  memberName: string;
  types: PokemonType[];
  moves: OffenseMoveMatch[];
}

export interface TypeOffenseSummary {
  type: PokemonType;
  superEffectiveCount: number;
  totalSeMoves: number;
  stabCount: number;
  coveringMembers: string[];
  matches: OffenseMemberMatch[];
}

export function analyzeTeamOffense(
  members: TeamMember[],
  speciesMap: Record<number, PokemonSpecies>
): TypeOffenseSummary[] {
  return ALL_TYPES.map((defType) => {
    let superEffectiveCount = 0;
    let totalSeMoves = 0;
    let stabCount = 0;
    const coveringMembers: string[] = [];
    const matches: OffenseMemberMatch[] = [];

    for (const m of members) {
      const sp = speciesMap[m.speciesId];
      if (!sp) continue;
      let memberHitsStabSE = false;
      const seMoves: OffenseMoveMatch[] = [];
      const seenMoveIds = new Set<string>();

      for (const moveId of m.moves) {
        if (!moveId || seenMoveIds.has(moveId)) continue;
        const move = MOVES_BY_ID[moveId];
        if (!move || move.category === 'Stato' || move.power === 0) continue;
        const mult = getTypeEffectiveness(move.type, [defType]);
        if (mult > 1) {
          seenMoveIds.add(moveId);
          const isStab = sp.types.includes(move.type);
          if (isStab) memberHitsStabSE = true;
          seMoves.push({
            moveId: move.id,
            name: move.name,
            moveType: move.type,
            category: move.category,
            power: move.power,
            isStab,
            multiplier: mult,
          });
        }
      }

      if (seMoves.length > 0) {
        seMoves.sort((a, b) => Number(b.isStab) - Number(a.isStab) || b.power - a.power);
        superEffectiveCount++;
        totalSeMoves += seMoves.length;
        const memberName = m.nickname || sp.name;
        coveringMembers.push(memberName);
        matches.push({
          memberUid: m.uid,
          speciesId: sp.id,
          spriteId: sp.spriteId,
          memberName,
          types: sp.types,
          moves: seMoves,
        });
      }
      if (memberHitsStabSE) {
        stabCount++;
      }
    }

    return { type: defType, superEffectiveCount, totalSeMoves, stabCount, coveringMembers, matches };
  });
}

export function calculateStat(
  statKey: StatKey,
  base: number,
  iv: number,
  ev: number,
  level: number,
  nature?: NatureData
): number {
  if (statKey === 'hp') {
    if (base === 1) return 1;
    return Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + level + 10;
  }
  const raw = Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5;
  let mod = 1;
  if (nature?.plus === statKey) mod = 1.1;
  if (nature?.minus === statKey) mod = 0.9;
  return Math.floor(raw * mod);
}

export function getBST(stats: BaseStats): number {
  return stats.hp + stats.atk + stats.def + stats.spa + stats.spd + stats.spe;
}

export const HIDDEN_POWER_TYPES: PokemonType[] = [
  'Lotta',
  'Volante',
  'Veleno',
  'Terra',
  'Roccia',
  'Coleottero',
  'Spettro',
  'Acciaio',
  'Fuoco',
  'Acqua',
  'Erba',
  'Elettro',
  'Psico',
  'Ghiaccio',
  'Drago',
  'Buio',
];

export function calculateHiddenPower(ivs: BaseStats): { type: PokemonType; power: number } {
  const clamp = (v: number) => Math.max(0, Math.min(31, Math.round(v)));
  const hp = clamp(ivs.hp);
  const atk = clamp(ivs.atk);
  const def = clamp(ivs.def);
  const spa = clamp(ivs.spa);
  const spd = clamp(ivs.spd);
  const spe = clamp(ivs.spe);

  // Gen 5 bit order: HP (1), Atk (2), Def (4), Spe (8), SpA (16), SpD (32)
  const typeBits =
    (hp % 2) +
    2 * (atk % 2) +
    4 * (def % 2) +
    8 * (spe % 2) +
    16 * (spa % 2) +
    32 * (spd % 2);
  const typeIndex = Math.floor((typeBits * 15) / 63);

  const powerBits =
    ((hp >> 1) & 1) +
    2 * ((atk >> 1) & 1) +
    4 * ((def >> 1) & 1) +
    8 * ((spe >> 1) & 1) +
    16 * ((spa >> 1) & 1) +
    32 * ((spd >> 1) & 1);
  const power = Math.floor((powerBits * 40) / 63) + 30;

  return {
    type: HIDDEN_POWER_TYPES[typeIndex] ?? 'Buio',
    power,
  };
}

export function getOptimalHiddenPowerIvs(targetType: PokemonType): BaseStats | null {
  if (!HIDDEN_POWER_TYPES.includes(targetType)) return null;

  let bestIvs: BaseStats | null = null;
  let bestScore = -1;

  for (let mask = 0; mask < 64; mask++) {
    const hp = mask & 1 ? 31 : 30;
    const atk = mask & 2 ? 31 : 30;
    const def = mask & 4 ? 31 : 30;
    const spe = mask & 8 ? 31 : 30;
    const spa = mask & 16 ? 31 : 30;
    const spd = mask & 32 ? 31 : 30;

    const candidate: BaseStats = { hp, atk, def, spa, spd, spe };
    const result = calculateHiddenPower(candidate);
    if (result.type !== targetType) continue;

    const count31 =
      (hp === 31 ? 1 : 0) +
      (atk === 31 ? 1 : 0) +
      (def === 31 ? 1 : 0) +
      (spe === 31 ? 1 : 0) +
      (spa === 31 ? 1 : 0) +
      (spd === 31 ? 1 : 0);

    // Prefer keeping 31 Speed, HP, SpA, SpD, Def over Atk for special Hidden Power coverage
    const score =
      count31 * 100 +
      (spe === 31 ? 120 : 0) +
      (hp === 31 ? 40 : 0) +
      (spa === 31 ? 30 : 0) +
      (spd === 31 ? 20 : 0) +
      (def === 31 ? 10 : 0) +
      (atk === 31 ? 5 : 0);

    if (score > bestScore) {
      bestScore = score;
      bestIvs = candidate;
    }
  }

  return bestIvs;
}

export interface DefenseTypeMatch {
  type: PokemonType;
  multiplier: number;
}

export interface PokemonDefenseBreakdown {
  quadWeak: DefenseTypeMatch[];
  doubleWeak: DefenseTypeMatch[];
  neutral: DefenseTypeMatch[];
  halfResist: DefenseTypeMatch[];
  quarterResist: DefenseTypeMatch[];
  immune: DefenseTypeMatch[];
}

export function getPokemonDefenseBreakdown(
  defendingTypes: PokemonType[],
  ability?: string
): PokemonDefenseBreakdown {
  const quadWeak: DefenseTypeMatch[] = [];
  const doubleWeak: DefenseTypeMatch[] = [];
  const neutral: DefenseTypeMatch[] = [];
  const halfResist: DefenseTypeMatch[] = [];
  const quarterResist: DefenseTypeMatch[] = [];
  const immune: DefenseTypeMatch[] = [];

  for (const atkType of ALL_TYPES) {
    const multiplier = getTypeEffectiveness(atkType, defendingTypes, ability);
    const entry = { type: atkType, multiplier };
    if (multiplier === 0) immune.push(entry);
    else if (multiplier >= 3.5) quadWeak.push(entry);
    else if (multiplier > 1) doubleWeak.push(entry);
    else if (multiplier <= 0.3) quarterResist.push(entry);
    else if (multiplier < 1) halfResist.push(entry);
    else neutral.push(entry);
  }

  return {
    quadWeak,
    doubleWeak,
    neutral,
    halfResist,
    quarterResist,
    immune,
  };
}

export interface SynergyMemberRef {
  memberUid: string;
  speciesId: number;
  spriteId?: number;
  memberName: string;
  types: PokemonType[];
}

export interface DefensiveSynergyEntry {
  type: PokemonType;
  defenders: (SynergyMemberRef & { mult: number })[];
  weakMembers: (SynergyMemberRef & { mult: number })[];
  isDoubleCovered: boolean;
  isSingleCovered: boolean;
}

export interface OffensiveSynergyEntry {
  type: PokemonType;
  attackers: (SynergyMemberRef & {
    bestMoveName: string;
    bestMoveType: PokemonType;
    isStab: boolean;
    moveCount: number;
  })[];
  isDoubleCovered: boolean;
  isSingleCovered: boolean;
}

export interface TeamSynergySummary {
  defensiveTypes: DefensiveSynergyEntry[];
  offensiveTypes: OffensiveSynergyEntry[];
  defensiveDoubleCount: number;
  defensiveCoveredCount: number;
  offensiveDoubleCount: number;
  offensiveCoveredCount: number;
  weaknessesWithSwitchIn: number;
  totalTeamWeaknessSlots: number;
  synergyScore: number;
}

export function analyzeTeamSynergy(
  members: TeamMember[],
  speciesMap: Record<number, PokemonSpecies>
): TeamSynergySummary {
  const validMembers = members
    .map((m) => {
      const sp = speciesMap[m.speciesId];
      if (!sp) return null;
      return {
        member: m,
        species: sp,
        ref: {
          memberUid: m.uid,
          speciesId: sp.id,
          spriteId: sp.spriteId,
          memberName: m.nickname || sp.name,
          types: sp.types,
        } satisfies SynergyMemberRef,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  let totalTeamWeaknessSlots = 0;
  let weaknessesWithSwitchIn = 0;

  const defensiveTypes: DefensiveSynergyEntry[] = ALL_TYPES.map((atkType) => {
    const defenders: (SynergyMemberRef & { mult: number })[] = [];
    const weakMembers: (SynergyMemberRef & { mult: number })[] = [];

    for (const item of validMembers) {
      const mult = getTypeEffectiveness(atkType, item.species.types, item.member.ability);
      if (mult < 1) {
        defenders.push({ ...item.ref, mult });
      } else if (mult > 1) {
        weakMembers.push({ ...item.ref, mult });
      }
    }

    defenders.sort((a, b) => a.mult - b.mult);
    weakMembers.sort((a, b) => b.mult - a.mult);

    if (weakMembers.length > 0) {
      totalTeamWeaknessSlots += weakMembers.length;
      if (defenders.length > 0) {
        weaknessesWithSwitchIn += weakMembers.length;
      }
    }

    return {
      type: atkType,
      defenders,
      weakMembers,
      isDoubleCovered: defenders.length >= 2,
      isSingleCovered: defenders.length === 1,
    };
  });

  const offensiveTypes: OffensiveSynergyEntry[] = ALL_TYPES.map((defType) => {
    const attackers: OffensiveSynergyEntry['attackers'] = [];

    for (const item of validMembers) {
      const seMoves: { name: string; type: PokemonType; power: number; isStab: boolean }[] = [];
      const seen = new Set<string>();

      for (const mvId of item.member.moves) {
        if (!mvId || seen.has(mvId)) continue;
        const mv = MOVES_BY_ID[mvId];
        if (!mv || mv.category === 'Stato' || mv.power === 0) continue;
        if (getTypeEffectiveness(mv.type, [defType]) > 1) {
          seen.add(mvId);
          seMoves.push({
            name: mv.name,
            type: mv.type,
            power: mv.power,
            isStab: item.species.types.includes(mv.type),
          });
        }
      }

      if (seMoves.length > 0) {
        seMoves.sort((a, b) => Number(b.isStab) - Number(a.isStab) || b.power - a.power);
        attackers.push({
          ...item.ref,
          bestMoveName: seMoves[0].name,
          bestMoveType: seMoves[0].type,
          isStab: seMoves[0].isStab,
          moveCount: seMoves.length,
        });
      }
    }

    attackers.sort((a, b) => Number(b.isStab) - Number(a.isStab) || b.moveCount - a.moveCount);

    return {
      type: defType,
      attackers,
      isDoubleCovered: attackers.length >= 2,
      isSingleCovered: attackers.length === 1,
    };
  });

  const defensiveDoubleCount = defensiveTypes.filter((d) => d.isDoubleCovered).length;
  const defensiveCoveredCount = defensiveTypes.filter((d) => d.defenders.length >= 1).length;
  const offensiveDoubleCount = offensiveTypes.filter((o) => o.isDoubleCovered).length;
  const offensiveCoveredCount = offensiveTypes.filter((o) => o.attackers.length >= 1).length;

  const defDoubleRatio = defensiveDoubleCount / ALL_TYPES.length;
  const offDoubleRatio = offensiveDoubleCount / ALL_TYPES.length;
  const switchInRatio =
    totalTeamWeaknessSlots > 0 ? weaknessesWithSwitchIn / totalTeamWeaknessSlots : 1;

  const synergyScore =
    validMembers.length === 0
      ? 0
      : Math.min(
          100,
          Math.round((defDoubleRatio * 0.4 + offDoubleRatio * 0.4 + switchInRatio * 0.2) * 100)
        );

  return {
    defensiveTypes,
    offensiveTypes,
    defensiveDoubleCount,
    defensiveCoveredCount,
    offensiveDoubleCount,
    offensiveCoveredCount,
    weaknessesWithSwitchIn,
    totalTeamWeaknessSlots,
    synergyScore,
  };
}

export interface CounterMoveDetail {
  moveId: string;
  name: string;
  moveType: PokemonType;
  category: MoveCategory;
  power: number;
  isStab: boolean;
  effectiveness: number;
}

export interface WeaknessCounterAnalysis {
  weaknessType: PokemonType;
  incomingMultiplier: number;
  status: 'super-effective' | 'neutral-only' | 'uncovered';
  superEffectiveMoves: CounterMoveDetail[];
  neutralMoves: CounterMoveDetail[];
  teammateSwitchIns: { memberName: string; mult: number }[];
}

export function analyzeMemberWeaknessCounters(
  member: TeamMember,
  species: PokemonSpecies,
  allMembers: TeamMember[] = [],
  speciesMap: Record<number, PokemonSpecies> = {}
): WeaknessCounterAnalysis[] {
  const breakdown = getPokemonDefenseBreakdown(species.types, member.ability);
  const allWeaknesses = [...breakdown.quadWeak, ...breakdown.doubleWeak];

  const equippedMoves = member.moves
    .filter((id): id is string => Boolean(id))
    .map((id) => MOVES_BY_ID[id])
    .filter((mv): mv is NonNullable<typeof mv> => Boolean(mv && mv.category !== 'Stato' && mv.power > 0));

  return allWeaknesses.map((w) => {
    const superEffectiveMoves: CounterMoveDetail[] = [];
    const neutralMoves: CounterMoveDetail[] = [];
    const seen = new Set<string>();

    for (const mv of equippedMoves) {
      if (seen.has(mv.id)) continue;
      seen.add(mv.id);
      const eff = getTypeEffectiveness(mv.type, [w.type]);
      const detail: CounterMoveDetail = {
        moveId: mv.id,
        name: mv.name,
        moveType: mv.type,
        category: mv.category,
        power: mv.power,
        isStab: species.types.includes(mv.type),
        effectiveness: eff,
      };
      if (eff > 1) {
        superEffectiveMoves.push(detail);
      } else if (eff === 1) {
        neutralMoves.push(detail);
      }
    }

    superEffectiveMoves.sort((a, b) => Number(b.isStab) - Number(a.isStab) || b.power - a.power);
    neutralMoves.sort((a, b) => Number(b.isStab) - Number(a.isStab) || b.power - a.power);

    const teammateSwitchIns: { memberName: string; mult: number }[] = [];
    for (const other of allMembers) {
      if (other.uid === member.uid) continue;
      const otherSp = speciesMap[other.speciesId];
      if (!otherSp) continue;
      const mult = getTypeEffectiveness(w.type, otherSp.types, other.ability);
      if (mult < 1) {
        teammateSwitchIns.push({
          memberName: other.nickname || otherSp.name,
          mult,
        });
      }
    }
    teammateSwitchIns.sort((a, b) => a.mult - b.mult);

    const status: WeaknessCounterAnalysis['status'] =
      superEffectiveMoves.length > 0
        ? 'super-effective'
        : neutralMoves.length > 0
          ? 'neutral-only'
          : 'uncovered';

    return {
      weaknessType: w.type,
      incomingMultiplier: w.multiplier,
      status,
      superEffectiveMoves,
      neutralMoves,
      teammateSwitchIns,
    };
  });
}

