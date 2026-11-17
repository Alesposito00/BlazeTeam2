import { BB2_POKEMON } from './bb2Pokemon';
import { MOVES_BY_ID } from './moves';
import {
  ALL_TYPES,
  analyzeTeamDefense,
  getBST,
  getPokemonDefenseBreakdown,
  getTypeEffectiveness,
} from './typeChart';
import {
  BattleFormat,
  MoveCategory,
  PokemonSpecies,
  PokemonType,
  TeamMember,
} from '../types/pokemon';

interface BB2ThreatMeta {
  weight: number;
  spreadInDoubles?: boolean;
  reason: string;
}

const BB2_THREAT_META: Record<PokemonType, BB2ThreatMeta> = {
  Terra: {
    weight: 1.5,
    spreadInDoubles: true,
    reason: 'Terremoti ovunque (Clay, Iris, Lega, Metro Doppio e coperture Acciaio/Fuoco)',
  },
  Ghiaccio: {
    weight: 1.4,
    spreadInDoubles: true,
    reason: 'Geloraggio/Bora molto diffusi su team Acqua, Lega e Draghi di BB2 Redux',
  },
  Drago: {
    weight: 1.4,
    reason: 'Aristide, Iris, N, PWT e Draghi potenziati in BB2 Redux (Serperior, Flygon)',
  },
  Folletto: {
    weight: 1.35,
    spreadInDoubles: true,
    reason: 'Nuovo tipo di BB2 Redux (Moonblast/Play Rough e Magibrillio in Doppio)',
  },
  Lotta: {
    weight: 1.3,
    reason: 'Marzio, Leggendari Spadaccini e Samurott Acqua/Lotta contro Acciaio e Buio',
  },
  Fuoco: {
    weight: 1.25,
    spreadInDoubles: true,
    reason: 'Team Plasma, N e Ondacalda in Doppio puniscono squadre lente o con Acciaio/Erba',
  },
  Roccia: {
    weight: 1.25,
    spreadInDoubles: true,
    reason: 'Levitoroccia e Frana ad area (tentennamento) molto comuni nella Challenge Mode',
  },
  Elettro: {
    weight: 1.2,
    spreadInDoubles: true,
    reason: 'Camelia, Acromio e Scarica/Invertivolt ad alta velocità',
  },
  Acqua: {
    weight: 1.2,
    spreadInDoubles: true,
    reason: 'Ciprian, Idrovampata (30% scottatura) e Surf/Pioggia nei tornei PWT',
  },
  Buio: {
    weight: 1.15,
    reason: 'Antemia/Mirto, Sgranocchio e Sbigoattacco prioritario sulle minacce Psico/Spettro',
  },
  Spettro: {
    weight: 1.1,
    reason: 'Palla Ombra e coperture comuni contro tipi Psico e Spettro',
  },
  Volante: {
    weight: 1.1,
    reason: 'Anemone, Baldeali e Acrobazia (Bijou Volante in Gen 5)',
  },
  Acciaio: {
    weight: 1.05,
    reason: 'Acromio e Pugnoscarica/Metaltestata contro i nuovi tipi Folletto',
  },
  Erba: {
    weight: 1.0,
    reason: 'Copertura Energy Ball / Giga Drain e Serperior con Inversione',
  },
  Psico: {
    weight: 1.0,
    reason: 'Catlina, Psyshock (colpisce Difesa fisica) e Distortozona',
  },
  Coleottero: {
    weight: 0.95,
    reason: 'Retromarcia rapida, Volcarona e Flygon Coleottero/Drago Redux',
  },
  Veleno: {
    weight: 0.9,
    reason: 'Velia, Fangobomba/Velenpuntura e nuove risposte contro il tipo Folletto',
  },
  Normale: {
    weight: 0.85,
    reason: 'Extrarapido, Ritorno e Ondaboato ad alta potenza neutra',
  },
};

export interface ThreatGapSummary {
  type: PokemonType;
  weak4x: number;
  weak2x: number;
  resistAndImmune: number;
  netScore: number;
  severity: 'critico' | 'attenzione';
  bb2Reason: string;
}

export interface SuggestedPokemonExample {
  speciesId: number;
  spriteId?: number;
  name: string;
  types: PokemonType[];
  bst: number;
  highlightAbility?: string;
}

export interface MissingTypeRecommendation {
  types: [PokemonType] | [PokemonType, PokemonType];
  score: number;
  coveredGaps: PokemonType[];
  immuneTypes: PokemonType[];
  extraCoveredTypes: PokemonType[];
  cautionWeaknesses: PokemonType[];
  summaryReason: string;
  examplePokemon: SuggestedPokemonExample[];
}

export interface MissingTypesAnalysis {
  threatGaps: ThreatGapSummary[];
  uncoveredDefensiveTypes: PokemonType[];
  recommendations: MissingTypeRecommendation[];
  isWellBalanced: boolean;
}

export function analyzeMissingDefensiveTypes(
  members: TeamMember[],
  speciesMap: Record<number, PokemonSpecies>,
  battleFormat: BattleFormat = 'Singolo'
): MissingTypesAnalysis {
  if (members.length === 0) {
    return {
      threatGaps: [],
      uncoveredDefensiveTypes: [],
      recommendations: [],
      isWellBalanced: false,
    };
  }

  const defenseSummary = analyzeTeamDefense(members, speciesMap);
  const defenseByType = Object.fromEntries(defenseSummary.map((d) => [d.type, d])) as Record<
    PokemonType,
    (typeof defenseSummary)[number]
  >;

  const teamSpeciesIds = new Set(members.map((m) => m.speciesId));

  const threatGaps: ThreatGapSummary[] = [];
  for (const row of defenseSummary) {
    const meta = BB2_THREAT_META[row.type];
    const totalWeak = row.weak2x + row.weak4x;
    const resistAndImmune = row.resist + row.immune;
    const isCritical =
      (totalWeak >= 2 && resistAndImmune === 0) ||
      (row.weak4x >= 1 && resistAndImmune === 0) ||
      row.score <= -2;
    const isWarning =
      !isCritical &&
      ((totalWeak >= 1 && resistAndImmune === 0 && meta.weight >= 1.15) || row.score < 0);

    if (isCritical || isWarning) {
      threatGaps.push({
        type: row.type,
        weak4x: row.weak4x,
        weak2x: row.weak2x,
        resistAndImmune,
        netScore: row.score,
        severity: isCritical ? 'critico' : 'attenzione',
        bb2Reason: meta.reason,
      });
    }
  }

  threatGaps.sort((a, b) => {
    const aSev = a.severity === 'critico' ? 1 : 0;
    const bSev = b.severity === 'critico' ? 1 : 0;
    if (bSev !== aSev) return bSev - aSev;
    const aSpreadBoost = battleFormat === 'Doppio' && BB2_THREAT_META[a.type].spreadInDoubles ? 1.25 : 1;
    const bSpreadBoost = battleFormat === 'Doppio' && BB2_THREAT_META[b.type].spreadInDoubles ? 1.25 : 1;
    return (
      bSpreadBoost * ((b.weak4x * 2 + b.weak2x) * BB2_THREAT_META[b.type].weight - b.resistAndImmune) -
      aSpreadBoost * ((a.weak4x * 2 + a.weak2x) * BB2_THREAT_META[a.type].weight - a.resistAndImmune)
    );
  });

  const uncoveredDefensiveTypes = defenseSummary
    .filter((d) => d.resist + d.immune === 0)
    .map((d) => d.type);

  const gapSet = new Set(threatGaps.map((g) => g.type));
  const uncoveredSet = new Set(uncoveredDefensiveTypes);

  // Build candidate single types + dual-type pairs
  const candidates: ([PokemonType] | [PokemonType, PokemonType])[] = [];
  for (let i = 0; i < ALL_TYPES.length; i++) {
    candidates.push([ALL_TYPES[i]]);
    for (let j = i + 1; j < ALL_TYPES.length; j++) {
      candidates.push([ALL_TYPES[i], ALL_TYPES[j]]);
    }
  }

  interface ScoredCandidate {
    types: [PokemonType] | [PokemonType, PokemonType];
    score: number;
    coveredGaps: PokemonType[];
    immuneTypes: PokemonType[];
    extraCoveredTypes: PokemonType[];
    cautionWeaknesses: PokemonType[];
  }

  const scored: ScoredCandidate[] = [];

  for (const cand of candidates) {
    // Only recommend type combinations that actually have strong Pokémon in BB2 Redux
    const matchingPokemon = BB2_POKEMON.filter((p) => {
      if (teamSpeciesIds.has(p.id)) return false;
      if (cand.length === 1) {
        return p.types.length === 1 && p.types[0] === cand[0];
      }
      return (
        p.types.length === 2 &&
        ((p.types[0] === cand[0] && p.types[1] === cand[1]) ||
          (p.types[0] === cand[1] && p.types[1] === cand[0]))
      );
    });
    if (matchingPokemon.length === 0) continue;

    let score = 0;
    const coveredGaps: PokemonType[] = [];
    const immuneTypes: PokemonType[] = [];
    const extraCoveredTypes: PokemonType[] = [];
    const cautionWeaknesses: PokemonType[] = [];

    for (const atk of ALL_TYPES) {
      const mult = getTypeEffectiveness(atk, cand);
      const meta = BB2_THREAT_META[atk];
      const formatFactor = battleFormat === 'Doppio' && meta.spreadInDoubles ? 1.25 : 1;
      const gap = threatGaps.find((g) => g.type === atk);

      if (mult === 0) {
        immuneTypes.push(atk);
        if (gap) {
          coveredGaps.push(atk);
          score += (gap.severity === 'critico' ? 5 : 3.5) * meta.weight * formatFactor;
        } else if (uncoveredSet.has(atk)) {
          extraCoveredTypes.push(atk);
          score += 2.2 * meta.weight;
        } else {
          score += 0.6;
        }
      } else if (mult < 1) {
        const quadBonus = mult <= 0.3 ? 1.25 : 1;
        if (gap) {
          coveredGaps.push(atk);
          score += (gap.severity === 'critico' ? 3.5 : 2.3) * meta.weight * formatFactor * quadBonus;
        } else if (uncoveredSet.has(atk)) {
          extraCoveredTypes.push(atk);
          score += 1.4 * meta.weight;
        } else {
          score += 0.35;
        }
      } else if (mult > 1) {
        const row = defenseByType[atk];
        const teamWeak = row.weak2x + row.weak4x;
        const teamRes = row.resist + row.immune;
        const weakPenaltyMult = mult >= 3.5 ? 1.6 : 1;
        if (gapSet.has(atk)) {
          score -= 3.2 * weakPenaltyMult;
          cautionWeaknesses.push(atk);
        } else if (teamWeak >= 2 && teamRes === 0) {
          score -= 2.4 * weakPenaltyMult;
          cautionWeaknesses.push(atk);
        } else if (teamWeak >= 2 && teamRes <= 1) {
          score -= 1.0 * weakPenaltyMult;
        }
      }
    }

    // Slight preference for dual-types only when they genuinely cover more gaps; single types remain clean if competitive
    if (coveredGaps.length > 0 || extraCoveredTypes.length > 0) {
      scored.push({
        types: cand,
        score,
        coveredGaps,
        immuneTypes,
        extraCoveredTypes,
        cautionWeaknesses,
      });
    }
  }

  scored.sort((a, b) => b.score - a.score || b.coveredGaps.length - a.coveredGaps.length);

  // Pick top 4 diverse recommendations (avoid 4 variations of Steel/x if another archetype covers different gaps)
  const picked: MissingTypeRecommendation[] = [];
  const usedPrimaryTypes = new Map<PokemonType, number>();

  for (const cand of scored) {
    if (picked.length >= 4) break;
    const t0 = cand.types[0];
    const t1 = cand.types[1];
    if ((usedPrimaryTypes.get(t0) ?? 0) >= 2) continue;
    if (t1 && (usedPrimaryTypes.get(t1) ?? 0) >= 2) continue;

    // Avoid near-identical type sets if already represented
    const alreadySimilar = picked.some(
      (p) =>
        p.types.length === cand.types.length &&
        p.types.every((pt) => cand.types.includes(pt))
    );
    if (alreadySimilar) continue;

    usedPrimaryTypes.set(t0, (usedPrimaryTypes.get(t0) ?? 0) + 1);
    if (t1) usedPrimaryTypes.set(t1, (usedPrimaryTypes.get(t1) ?? 0) + 1);

    const examplePokemon = BB2_POKEMON.filter((p) => {
      if (teamSpeciesIds.has(p.id)) return false;
      if (cand.types.length === 1) {
        return p.types.length === 1 && p.types[0] === cand.types[0];
      }
      return (
        p.types.length === 2 &&
        ((p.types[0] === cand.types[0] && p.types[1] === cand.types[1]) ||
          (p.types[0] === cand.types[1] && p.types[1] === cand.types[0]))
      );
    })
      .sort((a, b) => getBST(b.baseStats) - getBST(a.baseStats))
      .slice(0, 3)
      .map((p) => ({
        speciesId: p.id,
        spriteId: p.spriteId,
        name: p.name,
        types: p.types,
        bst: getBST(p.baseStats),
        highlightAbility: p.abilities[0]?.name,
      }));

    const coveredList = cand.coveredGaps.length > 0 ? cand.coveredGaps : cand.extraCoveredTypes.slice(0, 3);
    const immuneText =
      cand.immuneTypes.length > 0 ? ` · Immune a ${cand.immuneTypes.join(', ')}` : '';
    const summaryReason =
      cand.coveredGaps.length > 0
        ? `Copre ${cand.coveredGaps.length} ${cand.coveredGaps.length === 1 ? 'debolezza critica' : 'debolezze critiche'} (${coveredList.join(', ')})${immuneText}.`
        : `Aggiunge resistenze mancanti (${coveredList.join(', ')})${immuneText}.`;

    picked.push({
      types: cand.types,
      score: Math.round(cand.score * 10) / 10,
      coveredGaps: cand.coveredGaps,
      immuneTypes: cand.immuneTypes,
      extraCoveredTypes: cand.extraCoveredTypes,
      cautionWeaknesses: cand.cautionWeaknesses,
      summaryReason,
      examplePokemon,
    });
  }

  return {
    threatGaps,
    uncoveredDefensiveTypes,
    recommendations: picked,
    isWellBalanced: threatGaps.filter((g) => g.severity === 'critico').length === 0,
  };
}

// ============================================================================
// IN-BATTLE TACTICAL ADVISOR (SINGOLO vs DOPPIO)
// ============================================================================

export interface SwitchInOption {
  memberUid: string;
  speciesId: number;
  spriteId?: number;
  memberName: string;
  types: PokemonType[];
  incomingMultiplier: number;
  counterMoveName?: string;
  counterMoveMultiplier?: number;
}

export interface WeaknessSwitchGuide {
  weaknessType: PokemonType;
  memberIncomingMult: number;
  bestSwitches: SwitchInOption[];
  selfCounterMove?: string;
  selfCounterMult?: number;
  actionVerdict: string;
}

export interface MovePreferenceSuggestion {
  priority: 'alta' | 'media';
  currentMoveName?: string;
  preferredMoveName: string;
  reason: string;
}

export interface MemberBattleTactic {
  memberUid: string;
  speciesId: number;
  spriteId?: number;
  memberName: string;
  types: PokemonType[];
  roleLabel: string;
  weaknessSwitches: WeaknessSwitchGuide[];
  moveSuggestions: MovePreferenceSuggestion[];
  uncoveredWeaknessesCount: number;
}

export interface DoublePairSynergy {
  memberAName: string;
  memberBName: string;
  memberASpeciesId: number;
  memberBSpeciesId: number;
  memberASpriteId?: number;
  memberBSpriteId?: number;
  synergyPoints: string[];
  score: number;
}

export interface BattleTacticsReport {
  format: BattleFormat;
  leadSuggestion: string;
  formatHighlights: string[];
  spreadWarnings: string[];
  doublePairs: DoublePairSynergy[];
  memberTactics: MemberBattleTactic[];
}

const SPREAD_HAZARD_MOVES: Record<string, { type: PokemonType; label: string }> = {
  earthquake: { type: 'Terra', label: 'Earthquake (colpisce anche il compagno)' },
  surf: { type: 'Acqua', label: 'Surf (colpisce anche il compagno)' },
  discharge: { type: 'Elettro', label: 'Discharge (colpisce anche il compagno)' },
};

const PRIORITY_MOVE_IDS = new Set([
  'extremespeed',
  'quick-attack',
  'mach-punch',
  'bullet-punch',
  'aqua-jet',
  'ice-shard',
  'shadow-sneak',
  'sucker-punch',
  'fake-out',
]);

const PIVOT_MOVE_IDS = new Set(['u-turn', 'volt-switch']);

const DOUBLES_SPREAD_ENEMY_ONLY = new Set([
  'rock-slide',
  'heat-wave',
  'dazzling-gleam',
  'hyper-voice',
  'icy-wind',
  'blizzard',
  'eruption',
  'water-spout',
]);

export function analyzeBattleTactics(
  members: TeamMember[],
  speciesMap: Record<number, PokemonSpecies>,
  battleFormat: BattleFormat = 'Singolo'
): BattleTacticsReport {
  const valid = members
    .map((m) => {
      const sp = speciesMap[m.speciesId];
      return sp ? { member: m, species: sp, name: m.nickname || sp.name } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (valid.length === 0) {
    return {
      format: battleFormat,
      leadSuggestion: 'Aggiungi almeno un Pokémon alla squadra per generare la guida tattica.',
      formatHighlights: [],
      spreadWarnings: [],
      doublePairs: [],
      memberTactics: [],
    };
  }

  const formatHighlights: string[] = [];
  const spreadWarnings: string[] = [];

  // Identify priority & pivot users
  const priorityUsers = valid
    .filter((v) => v.member.moves.some((mv) => mv && PRIORITY_MOVE_IDS.has(mv)))
    .map((v) => v.name);
  const pivotUsers = valid
    .filter((v) => v.member.moves.some((mv) => mv && PIVOT_MOVE_IDS.has(mv)))
    .map((v) => v.name);
  const protectUsers = valid
    .filter((v) => v.member.moves.includes('protect'))
    .map((v) => v.name);

  if (battleFormat === 'Singolo') {
    formatHighlights.push(
      pivotUsers.length > 0
        ? `Pivot disponibili (${pivotUsers.join(', ')}): usa U-turn/Volt Switch nei turni di previsto cambio avversario per mantenere vantaggio.`
        : 'Nessun Pivot (U-turn / Volt Switch): effettua cambi manuali diretti sulle resistenze o immunità elencate sotto.'
    );
    formatHighlights.push(
      priorityUsers.length > 0
        ? `Mosse prioritarie pronte (${priorityUsers.join(', ')}): fondamentali in Singolo per finire nemici con Focalnastro o già danneggiati.`
        : 'Nessuna mossa prioritaria equipaggiata: attenzione ai Pokémon avversari più veloci o potenziati con Dragodanza.'
    );
  } else {
    formatHighlights.push(
      protectUsers.length >= Math.max(2, Math.floor(valid.length / 2))
        ? `Buona copertura con Protect (${protectUsers.length}/${valid.length} membri): puoi proteggere un bersaglio mentre l'alleato elimina la minaccia.`
        : `Solo ${protectUsers.length}/${valid.length} Pokémon hanno Protect: in Lotta in Doppio Protezione è cruciale per schivare doppi focus e mosse ad area alleate.`
    );
    const enemySpreadUsers = valid.filter((v) =>
      v.member.moves.some((mv) => mv && DOUBLES_SPREAD_ENEMY_ONLY.has(mv))
    );
    formatHighlights.push(
      enemySpreadUsers.length > 0
        ? `Mosse ad area sicure sui nemici (${enemySpreadUsers.map((e) => e.name).join(', ')}): colpiscono entrambi gli avversari senza danneggiare l'alleato.`
        : 'Poche mosse ad area: in Doppio prediligi Frana, Ondacalda, Magibrillio o Ventogelato rispetto alle varianti a bersaglio singolo.'
    );
  }

  // Spread-move friendly-fire check (especially relevant in Doppio)
  for (const item of valid) {
    for (const mvId of item.member.moves) {
      if (!mvId || !SPREAD_HAZARD_MOVES[mvId]) continue;
      const hazard = SPREAD_HAZARD_MOVES[mvId];
      const safePartners = valid.filter((other) => {
        if (other.member.uid === item.member.uid) return false;
        const mult = getTypeEffectiveness(hazard.type, other.species.types, other.member.ability);
        return mult === 0 || mult <= 0.5 || other.member.moves.includes('protect');
      });

      if (battleFormat === 'Doppio') {
        if (safePartners.length === 0 && valid.length > 1) {
          spreadWarnings.push(
            `${item.name} ha ${MOVES_BY_ID[mvId]?.name}: nessun compagno è immune o ha Protect! Rischi fuoco amico in Doppio.`
          );
        } else if (safePartners.length > 0) {
          const immuneOnes = safePartners
            .filter(
              (o) => getTypeEffectiveness(hazard.type, o.species.types, o.member.ability) === 0
            )
            .map((o) => o.name);
          if (immuneOnes.length > 0) {
            spreadWarnings.push(
              `Combo sicura: ${item.name} può usare ${MOVES_BY_ID[mvId]?.name} liberamente accanto a ${immuneOnes.join(', ')} (0×).`
            );
          }
        }
      }
    }
  }

  // Compute Doubles pair synergies
  const doublePairs: DoublePairSynergy[] = [];
  if (valid.length >= 2) {
    for (let i = 0; i < valid.length; i++) {
      for (let j = i + 1; j < valid.length; j++) {
        const a = valid[i];
        const b = valid[j];
        const points: string[] = [];
        let score = 0;

        const aWeak = getPokemonDefenseBreakdown(a.species.types, a.member.ability);
        const bWeak = getPokemonDefenseBreakdown(b.species.types, b.member.ability);

        const aBadTypes = [...aWeak.quadWeak, ...aWeak.doubleWeak].map((w) => w.type);
        const bBadTypes = [...bWeak.quadWeak, ...bWeak.doubleWeak].map((w) => w.type);

        const bCoversA = aBadTypes.filter(
          (t) => getTypeEffectiveness(t, b.species.types, b.member.ability) < 1
        );
        const aCoversB = bBadTypes.filter(
          (t) => getTypeEffectiveness(t, a.species.types, a.member.ability) < 1
        );

        if (bCoversA.length > 0) {
          score += bCoversA.length * 2;
          points.push(`${b.name} copre ${bCoversA.slice(0, 2).join(', ')} per ${a.name}`);
        }
        if (aCoversB.length > 0) {
          score += aCoversB.length * 2;
          points.push(`${a.name} copre ${aCoversB.slice(0, 2).join(', ')} per ${b.name}`);
        }

        // Check Earthquake/Discharge/Surf free spam
        if (a.member.moves.includes('earthquake') && getTypeEffectiveness('Terra', b.species.types, b.member.ability) === 0) {
          score += 5;
          points.push(`${a.name} spamma Terremoto senza colpire ${b.name}`);
        } else if (b.member.moves.includes('earthquake') && getTypeEffectiveness('Terra', a.species.types, a.member.ability) === 0) {
          score += 5;
          points.push(`${b.name} spamma Terremoto senza colpire ${a.name}`);
        }

        if (a.member.moves.includes('discharge') && getTypeEffectiveness('Elettro', b.species.types, b.member.ability) === 0) {
          score += 4.5;
          points.push(`${a.name} lancia Scarica accanto a ${b.name} (immune)`);
        } else if (b.member.moves.includes('discharge') && getTypeEffectiveness('Elettro', a.species.types, a.member.ability) === 0) {
          score += 4.5;
          points.push(`${b.name} lancia Scarica accanto a ${a.name} (immune)`);
        }

        if (a.member.moves.includes('fake-out') || b.member.moves.includes('fake-out')) {
          score += 3;
          const foUser = a.member.moves.includes('fake-out') ? a.name : b.name;
          const partner = foUser === a.name ? b.name : a.name;
          points.push(`${foUser} blocca un lead con Bruciapelo mentre ${partner} attacca o si potenzia`);
        }

        if (points.length > 0) {
          doublePairs.push({
            memberAName: a.name,
            memberBName: b.name,
            memberASpeciesId: a.species.id,
            memberBSpeciesId: b.species.id,
            memberASpriteId: a.species.spriteId,
            memberBSpriteId: b.species.spriteId,
            synergyPoints: points,
            score,
          });
        }
      }
    }
    doublePairs.sort((a, b) => b.score - a.score);
  }

  // Suggest lead based on format
  let leadSuggestion = '';
  if (battleFormat === 'Doppio' && doublePairs.length > 0) {
    const topPair = doublePairs[0];
    leadSuggestion = `Lead consigliato in Doppio: ${topPair.memberAName} + ${topPair.memberBName} (${topPair.synergyPoints[0]}).`;
  } else {
    const pivotOrFast = [...valid].sort((a, b) => {
      const aPivot = a.member.moves.some((mv) => mv && PIVOT_MOVE_IDS.has(mv)) ? 1 : 0;
      const bPivot = b.member.moves.some((mv) => mv && PIVOT_MOVE_IDS.has(mv)) ? 1 : 0;
      if (bPivot !== aPivot) return bPivot - aPivot;
      return b.species.baseStats.spe - a.species.baseStats.spe;
    })[0];
    leadSuggestion = `Lead consigliato in Singolo: ${pivotOrFast.name} (${
      pivotOrFast.member.moves.some((mv) => mv && PIVOT_MOVE_IDS.has(mv))
        ? 'può aprire e cambiare subito con Pivot'
        : `alta Velocità base ${pivotOrFast.species.baseStats.spe}`
    }).`;
  }

  // Per-Pokémon Switch & Preferred Move Advice
  const memberTactics: MemberBattleTactic[] = valid.map((item) => {
    const { member, species, name } = item;
    const breakdown = getPokemonDefenseBreakdown(species.types, member.ability);
    const weaknesses = [...breakdown.quadWeak, ...breakdown.doubleWeak];

    const equippedMoves = member.moves
      .filter((id): id is string => Boolean(id))
      .map((id) => MOVES_BY_ID[id])
      .filter((mv): mv is NonNullable<typeof mv> => Boolean(mv));

    // Weaknesses + Best Teammate Switch-Ins
    let uncoveredWeaknessesCount = 0;
    const weaknessSwitches: WeaknessSwitchGuide[] = weaknesses.map((w) => {
      const switches: SwitchInOption[] = [];

      for (const mate of valid) {
        if (mate.member.uid === member.uid) continue;
        const mult = getTypeEffectiveness(w.type, mate.species.types, mate.member.ability);
        if (mult < 1) {
          // Does teammate also have a super-effective move against w.type?
          const mateSeMoves = mate.member.moves
            .map((id) => (id ? MOVES_BY_ID[id] : undefined))
            .filter(
              (mv): mv is NonNullable<typeof mv> =>
                Boolean(mv && mv.category !== 'Stato' && mv.power > 0 && getTypeEffectiveness(mv.type, [w.type]) > 1)
            )
            .sort((a, b) => b.power - a.power);

          switches.push({
            memberUid: mate.member.uid,
            speciesId: mate.species.id,
            spriteId: mate.species.spriteId,
            memberName: mate.name,
            types: mate.species.types,
            incomingMultiplier: mult,
            counterMoveName: mateSeMoves[0]?.name,
            counterMoveMultiplier: mateSeMoves[0]
              ? getTypeEffectiveness(mateSeMoves[0].type, [w.type])
              : undefined,
          });
        }
      }

      switches.sort((a, b) => {
        if (a.incomingMultiplier !== b.incomingMultiplier) {
          return a.incomingMultiplier - b.incomingMultiplier;
        }
        return Number(Boolean(b.counterMoveName)) - Number(Boolean(a.counterMoveName));
      });

      const selfSeMoves = equippedMoves
        .filter((mv) => mv.category !== 'Stato' && mv.power > 0 && getTypeEffectiveness(mv.type, [w.type]) > 1)
        .sort((a, b) => b.power - a.power);

      if (switches.length === 0) uncoveredWeaknessesCount++;

      let actionVerdict = '';
      if (w.multiplier >= 3.5 && switches.length > 0) {
        const best = switches[0];
        actionVerdict = `Pericolo 4×: cambia subito su ${best.memberName} (${
          best.incomingMultiplier === 0 ? '0× immune' : best.incomingMultiplier <= 0.3 ? '¼×' : '½×'
        })${best.counterMoveName ? ` e rispondi con ${best.counterMoveName}` : ''}.`;
      } else if (selfSeMoves.length > 0 && switches.length > 0) {
        const best = switches[0];
        actionVerdict = `Puoi punire con ${selfSeMoves[0].name} (2×) se sei più veloce, oppure cambiare su ${best.memberName} (${
          best.incomingMultiplier === 0 ? '0×' : best.incomingMultiplier <= 0.3 ? '¼×' : '½×'
        }).`;
      } else if (switches.length > 0) {
        const best = switches[0];
        actionVerdict = `Cambia su ${best.memberName} (${
          best.incomingMultiplier === 0 ? '0×' : best.incomingMultiplier <= 0.3 ? '¼×' : '½×'
        })${best.counterMoveName ? ` → poi ${best.counterMoveName}` : ''}.`;
      } else if (selfSeMoves.length > 0) {
        actionVerdict = `Nessun compagno resiste: resta in campo solo se superi l'avversario con ${selfSeMoves[0].name} (2×).`;
      } else {
        actionVerdict = 'Debolezza scoperta: né mosse 2× né cambi resistenti nel team!';
      }

      return {
        weaknessType: w.type,
        memberIncomingMult: w.multiplier,
        bestSwitches: switches.slice(0, 2),
        selfCounterMove: selfSeMoves[0]?.name,
        selfCounterMult: selfSeMoves[0]
          ? getTypeEffectiveness(selfSeMoves[0].type, [w.type])
          : undefined,
        actionVerdict,
      };
    });

    // Concrete Move Preference Suggestions
    const moveSuggestions: MovePreferenceSuggestion[] = [];
    const equippedIds = new Set(member.moves.filter(Boolean) as string[]);
    const learnsetIds = new Set(species.learnset);
    const isPhysicalFocus =
      species.baseStats.atk >= species.baseStats.spa + 25 ||
      member.ability === 'Huge Power' ||
      member.ability === 'Pure Power';
    const isSpecialFocus = species.baseStats.spa >= species.baseStats.atk + 25;

    // 1. Format-specific move swaps (Singolo vs Doppio)
    if (battleFormat === 'Doppio') {
      if (!equippedIds.has('protect') && learnsetIds.has('protect')) {
        moveSuggestions.push({
          priority: 'alta',
          preferredMoveName: 'Protect',
          reason:
            'In Lotta in Doppio Protect è preferibile a una quarta mossa situazionale: evita doppi attacchi e ti salva dai Terremoti/Surf alleati.',
        });
      }
      if (equippedIds.has('stone-edge') && learnsetIds.has('rock-slide')) {
        moveSuggestions.push({
          priority: 'alta',
          currentMoveName: 'Stone Edge',
          preferredMoveName: 'Rock Slide',
          reason:
            'In Doppio preferisci Rock Slide a Stone Edge: colpisce entrambi i nemici con il 30% di tentennamento su ciascuno e ha migliore precisione (90% vs 80%).',
        });
      }
      if (
        (equippedIds.has('flamethrower') || equippedIds.has('fire-blast')) &&
        learnsetIds.has('heat-wave')
      ) {
        moveSuggestions.push({
          priority: 'media',
          currentMoveName: equippedIds.has('flamethrower') ? 'Flamethrower' : 'Fire Blast',
          preferredMoveName: 'Heat Wave',
          reason:
            'In Doppio preferisci Heat Wave per colpire entrambi gli avversari contemporaneamente.',
        });
      }
      if (equippedIds.has('moonblast') && learnsetIds.has('dazzling-gleam')) {
        moveSuggestions.push({
          priority: 'media',
          currentMoveName: 'Moonblast',
          preferredMoveName: 'Dazzling Gleam',
          reason:
            'Dazzling Gleam (80 BP ad area) permette di danneggiare entrambi i nemici in Doppio; tieni Moonblast se vuoi massimizzare il KO singolo.',
        });
      }
      if (equippedIds.has('scald') && learnsetIds.has('surf') && member.speciesId !== 245) {
        moveSuggestions.push({
          priority: 'media',
          currentMoveName: 'Scald',
          preferredMoveName: 'Surf (se con compagno immune)',
          reason:
            'Surf colpisce entrambi gli avversari se affiancato da Water Absorb/Storm Drain/Protect; altrimenti tieni Scald per evitare fuoco amico.',
        });
      }
    } else {
      // Singolo
      if (equippedIds.has('rock-slide') && learnsetIds.has('stone-edge') && member.ability !== 'Serene Grace') {
        moveSuggestions.push({
          priority: 'media',
          currentMoveName: 'Rock Slide',
          preferredMoveName: 'Stone Edge',
          reason:
            'In Singolo 1v1 preferisci Stone Edge (100 BP) rispetto a Rock Slide (75 BP) per ottenere 1-hit KO su Volanti e Fuoco resistenti.',
        });
      }
      if (equippedIds.has('surf') && learnsetIds.has('scald') && species.baseStats.def + species.baseStats.spd >= 170) {
        moveSuggestions.push({
          priority: 'media',
          currentMoveName: 'Surf',
          preferredMoveName: 'Scald',
          reason:
            'In Singolo su Pokémon resistenti preferisci Scald rispetto a Surf: il 30% di scottatura dimezza l’Attacco fisico dei nemici che entrano.',
        });
      }
      if (equippedIds.has('dazzling-gleam') && learnsetIds.has('moonblast')) {
        moveSuggestions.push({
          priority: 'alta',
          currentMoveName: 'Dazzling Gleam',
          preferredMoveName: 'Moonblast',
          reason:
            'In Singolo Moonblast è nettamente superiore a Dazzling Gleam (95 BP vs 80 BP, più 30% calo SpA nemico).',
        });
      }
      if (!equippedIds.has('u-turn') && learnsetIds.has('u-turn') && isPhysicalFocus) {
        moveSuggestions.push({
          priority: 'media',
          preferredMoveName: 'U-turn',
          reason:
            'In Singolo U-turn è spesso preferibile a X-Scissor per uscire gratis dai matchup sfavorevoli mantenendo il controllo dei cambi.',
        });
      }
      if (!equippedIds.has('volt-switch') && learnsetIds.has('volt-switch') && isSpecialFocus) {
        moveSuggestions.push({
          priority: 'media',
          preferredMoveName: 'Volt Switch',
          reason:
            'Abbinare Volt Switch in Singolo ti permette di colpire e mandare subito in campo il compagno più adatto.',
        });
      }
    }

    // 2. Signature Ability / Stat-fit move upgrades
    if (member.ability === 'Contrary' && learnsetIds.has('leaf-storm') && !equippedIds.has('leaf-storm')) {
      moveSuggestions.push({
        priority: 'alta',
        currentMoveName: equippedIds.has('energy-ball') ? 'Energy Ball' : equippedIds.has('giga-drain') ? 'Giga Drain' : undefined,
        preferredMoveName: 'Leaf Storm',
        reason: 'Con Contrary, Leaf Storm dona +2 Attacco Speciale a ogni utilizzo: indispensabile rispetto a Energy Ball.',
      });
    }
    if (member.ability === 'Serene Grace' && learnsetIds.has('air-slash') && !equippedIds.has('air-slash')) {
      moveSuggestions.push({
        priority: 'alta',
        preferredMoveName: 'Air Slash',
        reason: 'Con Serene Grace, Air Slash raggiunge il 60% di probabilità di far tentennare il bersaglio.',
      });
    }

    // 3. Check Physical vs Special stat mismatch
    const preferredCategory: MoveCategory | null = isPhysicalFocus
      ? 'Fisico'
      : isSpecialFocus
        ? 'Speciale'
        : null;
    if (preferredCategory) {
      const wrongStatMoves = equippedMoves.filter(
        (mv) => mv.category !== 'Stato' && mv.power > 0 && mv.category !== preferredCategory
      );
      for (const badMv of wrongStatMoves.slice(0, 1)) {
        const betterSameType = species.learnset
          .map((id) => MOVES_BY_ID[id])
          .filter(
            (m): m is NonNullable<typeof m> =>
              Boolean(m && m.category === preferredCategory && m.type === badMv.type && m.power > 0)
          )
          .sort((a, b) => b.power - a.power)[0];

        if (betterSameType) {
          moveSuggestions.push({
            priority: 'alta',
            currentMoveName: badMv.name,
            preferredMoveName: betterSameType.name,
            reason: `${name} rende molto meglio sul lato ${preferredCategory.toLowerCase()}: preferisci ${betterSameType.name} (${betterSameType.power} BP ${preferredCategory}) a ${badMv.name}.`,
          });
        }
      }
    }

    // 4. Suggest learnset move to cover an uncovered weakness if missing SE coverage
    const uncoveredSelfWeaknesses = weaknessSwitches.filter((ws) => !ws.selfCounterMove);
    for (const uws of uncoveredSelfWeaknesses.slice(0, 1)) {
      const candidateMoves = species.learnset
        .map((id) => MOVES_BY_ID[id])
        .filter((m): m is NonNullable<typeof m> => {
          if (!m || m.category === 'Stato' || m.power === 0) return false;
          if (equippedIds.has(m.id)) return false;
          return getTypeEffectiveness(m.type, [uws.weaknessType]) > 1;
        })
        .sort((a, b) => {
          const aCatBonus = preferredCategory && a.category === preferredCategory ? 1 : 0;
          const bCatBonus = preferredCategory && b.category === preferredCategory ? 1 : 0;
          if (bCatBonus !== aCatBonus) return bCatBonus - aCatBonus;
          return b.power - a.power;
        });

      if (candidateMoves[0]) {
        moveSuggestions.push({
          priority: 'media',
          preferredMoveName: candidateMoves[0].name,
          reason: `Può imparare ${candidateMoves[0].name} (${candidateMoves[0].type}) per colpire 2× la sua debolezza ${uws.weaknessType}.`,
        });
      }
    }

    const roleLabel =
      member.moves.some((mv) => mv && PIVOT_MOVE_IDS.has(mv))
        ? 'Pivot'
        : member.moves.some((mv) => mv && PRIORITY_MOVE_IDS.has(mv))
          ? 'Priority / Attaccante'
          : isPhysicalFocus
            ? 'Attaccante Fisico'
            : isSpecialFocus
              ? 'Attaccante Speciale'
              : 'Misto / Supporto';

    return {
      memberUid: member.uid,
      speciesId: species.id,
      spriteId: species.spriteId,
      memberName: name,
      types: species.types,
      roleLabel,
      weaknessSwitches,
      moveSuggestions: moveSuggestions.slice(0, 3),
      uncoveredWeaknessesCount,
    };
  });

  return {
    format: battleFormat,
    leadSuggestion,
    formatHighlights,
    spreadWarnings,
    doublePairs: doublePairs.slice(0, 3),
    memberTactics,
  };
}
