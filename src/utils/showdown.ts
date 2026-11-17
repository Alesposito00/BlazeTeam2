import { BB2_POKEMON, BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import { MOVES_BY_ID, MOVES_LIST } from '../data/moves';
import { NATURES } from '../data/naturesAndItems';
import { BattleFormat, PokemonSpecies, PokemonType, SavedTeam, StatKey, TeamCategory, TeamMember } from '../types/pokemon';

export type TeamPresetType = 'serperior' | 'samurott' | 'fairy' | 'rain' | 'sun' | 'empty';

export const TEAM_CATEGORIES: TeamCategory[] = [
  'Run Principale',
  'Challenge Mode',
  'Nuzlocke',
  'Monotype',
  'Meteo / Strategia',
  'Lega & Post-Game',
];

export function createDefaultMember(species: PokemonSpecies, level = 50): TeamMember {
  const defaultMoves: [string | null, string | null, string | null, string | null] = [
    species.learnset[0] ?? null,
    species.learnset[1] ?? null,
    species.learnset[2] ?? null,
    species.learnset[3] ?? null,
  ];

  let defaultNature = 'Hardy';
  if (species.baseStats.atk > species.baseStats.spa + 15) {
    defaultNature = species.baseStats.spe >= 85 ? 'Jolly' : 'Adamant';
  } else if (species.baseStats.spa > species.baseStats.atk + 15) {
    defaultNature = species.baseStats.spe >= 85 ? 'Timid' : 'Modest';
  }

  return {
    uid: `${species.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    speciesId: species.id,
    nickname: '',
    level,
    ability: species.abilities[0]?.name ?? 'Overgrow',
    item: 'Leftovers',
    nature: defaultNature,
    ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    moves: defaultMoves,
    shiny: false,
    notes: '',
  };
}

export const DEFAULT_STARTER_TEAM_ID = 'team-starter-default';

export function createStarterTeam(
  preset: TeamPresetType = 'serperior',
  customOptions?: {
    name?: string;
    category?: TeamCategory;
    battleFormat?: BattleFormat;
    monotype?: PokemonType;
    mode?: 'Standard' | 'Challenge Mode';
    fixedId?: string;
  }
): SavedTeam {
  const nextId =
    customOptions?.fixedId || `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`;
  const battleFormat: BattleFormat = customOptions?.battleFormat || 'Singolo';
  if (preset === 'empty') {
    return {
      id: nextId,
      name: customOptions?.name || 'Nuova Squadra Redux',
      category: customOptions?.category || 'Run Principale',
      battleFormat,
      monotype: customOptions?.monotype,
      mode: customOptions?.mode || 'Challenge Mode',
      updatedAt: Date.now(),
      members: [null, null, null, null, null, null],
    };
  }

  if (preset === 'fairy') {
    const ids = [184, 303, 468, 282, 334, 547];
    return {
      id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      name: customOptions?.name || 'Monotype Folletto Redux',
      category: customOptions?.category || 'Monotype',
      battleFormat,
      monotype: 'Folletto',
      mode: 'Challenge Mode',
      notes: 'Squadra Monotype Folletto per Blaze Black 2 Redux Complete.',
      updatedAt: Date.now(),
      members: ids.map((id) => {
        const sp = BB2_POKEMON_BY_ID[id];
        return sp ? createDefaultMember(sp, 60) : null;
      }),
    };
  }

  if (preset === 'rain') {
    const ids = [503, 230, 10009, 598, 537, 330];
    return {
      id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      name: customOptions?.name || 'Squadra Pioggia & Volt-Turn',
      category: customOptions?.category || 'Meteo / Strategia',
      battleFormat,
      mode: 'Challenge Mode',
      notes: 'Core Pioggia con Samurott Acqua/Lotta, Kingdra, Rotom-Wash e Flygon Coleottero/Drago.',
      updatedAt: Date.now(),
      members: ids.map((id) => {
        const sp = BB2_POKEMON_BY_ID[id];
        return sp ? createDefaultMember(sp, 60) : null;
      }),
    };
  }

  if (preset === 'sun') {
    const ids = [38, 3, 637, 500, 154, 472];
    return {
      id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      name: customOptions?.name || 'Team Sole (Ninetales Folletto)',
      category: customOptions?.category || 'Meteo / Strategia',
      battleFormat,
      mode: 'Challenge Mode',
      notes: 'Ninetales Fuoco/Folletto Drought + Emboar Fuoco/Terra + Venusaur Clorofilla.',
      updatedAt: Date.now(),
      members: ids.map((id) => {
        const sp = BB2_POKEMON_BY_ID[id];
        return sp ? createDefaultMember(sp, 60) : null;
      }),
    };
  }

  if (preset === 'samurott') {
    const ids = [503, 555, 405, 330, 598, 282];
    return {
      id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      name: customOptions?.name || 'Offensiva Unima (Samurott)',
      category: customOptions?.category || 'Challenge Mode',
      battleFormat,
      mode: 'Challenge Mode',
      updatedAt: Date.now(),
      members: ids.map((id) => {
        const sp = BB2_POKEMON_BY_ID[id];
        return sp ? createDefaultMember(sp, 55) : null;
      }),
    };
  }

  // Default balanced Blaze Black 2 Redux showcase team highlighting BB2 Redux & Fairy
  const serperior = createDefaultMember(BB2_POKEMON_BY_ID[497], 55);
  serperior.item = 'Life Orb';
  serperior.nature = 'Timid';
  serperior.evs = { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 };
  serperior.moves = ['leaf-storm', 'dragon-pulse', 'giga-drain', 'glare'];

  const azumarill = createDefaultMember(BB2_POKEMON_BY_ID[184], 55);
  azumarill.item = 'Choice Band';
  azumarill.nature = 'Adamant';
  azumarill.evs = { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 };
  azumarill.moves = ['waterfall', 'play-rough', 'aqua-jet', 'superpower'];

  const chandelure = createDefaultMember(BB2_POKEMON_BY_ID[609], 55);
  chandelure.item = 'Choice Scarf';
  chandelure.nature = 'Timid';
  chandelure.evs = { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 };
  chandelure.moves = ['shadow-ball', 'flamethrower', 'energy-ball', 'hidden-power-ice'];

  const excadrill = createDefaultMember(BB2_POKEMON_BY_ID[530], 55);
  excadrill.ability = 'Mold Breaker';
  excadrill.item = 'Air Balloon';
  excadrill.nature = 'Jolly';
  excadrill.evs = { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 };
  excadrill.moves = ['earthquake', 'iron-head', 'rock-slide', 'swords-dance'];

  const flygon = createDefaultMember(BB2_POKEMON_BY_ID[330], 55);
  flygon.item = 'Focus Sash';
  flygon.nature = 'Timid';
  flygon.evs = { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 };
  flygon.moves = ['quiver-dance', 'bug-buzz', 'dragon-pulse', 'flamethrower'];

  return {
    id: nextId,
    name: customOptions?.name || 'Run Principale Redux',
    category: customOptions?.category || 'Run Principale',
    battleFormat,
    mode: customOptions?.mode || 'Challenge Mode',
    notes: 'Team bilanciato BB2 Redux con Serperior Erba/Drago, Azumarill Acqua/Folletto e Flygon Coleottero/Drago.',
    updatedAt: Date.now(),
    members: [serperior, azumarill, chandelure, excadrill, flygon, null],
  };
}

const STAT_LABELS_SHOWDOWN: Record<StatKey, string> = {
  hp: 'HP',
  atk: 'Atk',
  def: 'Def',
  spa: 'SpA',
  spd: 'SpD',
  spe: 'Spe',
};

export function exportTeamToShowdown(team: SavedTeam): string {
  const blocks: string[] = [];
  for (const m of team.members) {
    if (!m) continue;
    const sp = BB2_POKEMON_BY_ID[m.speciesId];
    if (!sp) continue;

    const lines: string[] = [];
    const headerName = m.nickname ? `${m.nickname} (${sp.name})` : sp.name;
    lines.push(m.item ? `${headerName} @ ${m.item}` : headerName);
    lines.push(`Ability: ${m.ability}`);
    lines.push(`Level: ${m.level}`);
    if (m.shiny) lines.push('Shiny: Yes');

    const evParts = (Object.keys(m.evs) as StatKey[])
      .filter((k) => m.evs[k] > 0)
      .map((k) => `${m.evs[k]} ${STAT_LABELS_SHOWDOWN[k]}`);
    if (evParts.length > 0) {
      lines.push(`EVs: ${evParts.join(' / ')}`);
    }

    lines.push(`${m.nature} Nature`);

    const ivParts = (Object.keys(m.ivs) as StatKey[])
      .filter((k) => m.ivs[k] < 31)
      .map((k) => `${m.ivs[k]} ${STAT_LABELS_SHOWDOWN[k]}`);
    if (ivParts.length > 0) {
      lines.push(`IVs: ${ivParts.join(' / ')}`);
    }

    for (const moveId of m.moves) {
      if (!moveId) continue;
      const move = MOVES_BY_ID[moveId];
      if (move) {
        lines.push(`- ${move.name}`);
      }
    }

    blocks.push(lines.join('\n'));
  }

  return blocks.join('\n\n');
}

export function buildShowdownFileName(teamName: string): string {
  const cleaned = teamName
    .trim()
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, ' ')
    .slice(0, 80);
  return `${cleaned || 'Squadra Redux'}.showdown.txt`;
}

export function parseShowdownFilenameToTeamName(fileName: string): string {
  return fileName
    .replace(/\.showdown\.txt$/i, '')
    .replace(/\.txt$/i, '')
    .trim() || 'Squadra Drive';
}

export function importTeamFromShowdown(text: string): TeamMember[] {
  const chunks = text
    .trim()
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean)
    .slice(0, 6);

  const imported: TeamMember[] = [];

  for (const chunk of chunks) {
    const rawLines = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
    const lines = rawLines.filter((l) => !l.startsWith('===') && !l.startsWith('#'));
    if (lines.length === 0) continue;

    const firstLine = lines[0];
    const [namePart, itemPart] = firstLine.split('@').map((s) => s.trim());

    let speciesName = namePart.replace(/\s*\([MF]\)\s*$/, '').trim();
    let nickname = '';
    const parenMatch = speciesName.match(/^(.+?)\s*\(([^()]+)\)$/);
    if (parenMatch) {
      nickname = parenMatch[1].trim();
      speciesName = parenMatch[2].trim();
    }

    const ROTOM_ALIASES: Record<string, string> = {
      'rotom-h': 'Rotom-Heat',
      'rotom heat': 'Rotom-Heat',
      'rotom-calore': 'Rotom-Heat',
      'rotom-w': 'Rotom-Wash',
      'rotom wash': 'Rotom-Wash',
      'rotom-lavaggio': 'Rotom-Wash',
      'rotom-f': 'Rotom-Frost',
      'rotom frost': 'Rotom-Frost',
      'rotom-gelo': 'Rotom-Frost',
      'rotom-s': 'Rotom-Fan',
      'rotom fan': 'Rotom-Fan',
      'rotom-vortice': 'Rotom-Fan',
      'rotom-c': 'Rotom-Mow',
      'rotom mow': 'Rotom-Mow',
      'rotom-taglio': 'Rotom-Mow',
    };
    const normalizedSpeciesName =
      ROTOM_ALIASES[speciesName.toLowerCase()] ?? speciesName;

    const sp = BB2_POKEMON.find(
      (p) => p.name.toLowerCase() === normalizedSpeciesName.toLowerCase()
    );
    if (!sp) continue;

    const member = createDefaultMember(sp, 50);
    member.nickname = nickname;
    if (itemPart) member.item = itemPart;
    member.moves = [null, null, null, null];
    let moveIdx = 0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('Ability:')) {
        member.ability = line.replace('Ability:', '').trim();
      } else if (line.startsWith('Level:')) {
        const lvl = parseInt(line.replace('Level:', '').trim(), 10);
        if (!isNaN(lvl)) member.level = Math.max(1, Math.min(100, lvl));
      } else if (line.startsWith('Shiny:')) {
        member.shiny = line.toLowerCase().includes('yes');
      } else if (line.endsWith('Nature')) {
        const nat = line.replace('Nature', '').trim();
        const foundNat = NATURES.find((n) => n.name.toLowerCase() === nat.toLowerCase());
        if (foundNat) member.nature = foundNat.name;
      } else if (line.startsWith('EVs:')) {
        const parts = line.replace('EVs:', '').split('/');
        for (const p of parts) {
          const m = p.trim().match(/^(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)$/i);
          if (m) {
            const val = Math.min(252, Math.max(0, parseInt(m[1], 10)));
            const key = m[2].toLowerCase() as StatKey;
            member.evs[key] = val;
          }
        }
      } else if (line.startsWith('IVs:')) {
        const parts = line.replace('IVs:', '').split('/');
        for (const p of parts) {
          const m = p.trim().match(/^(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)$/i);
          if (m) {
            const val = Math.min(31, Math.max(0, parseInt(m[1], 10)));
            const key = m[2].toLowerCase() as StatKey;
            member.ivs[key] = val;
          }
        }
      } else if (line.startsWith('- ') && moveIdx < 4) {
        const mName = line.slice(2).trim().toLowerCase();
        const foundMove = MOVES_LIST.find((mv) => mv.name.toLowerCase() === mName);
        if (foundMove) {
          member.moves[moveIdx] = foundMove.id;
          moveIdx++;
        }
      }
    }

    imported.push(member);
  }

  return imported;
}

export function encodeSharedTeam(team: SavedTeam): string {
  const compact = {
    n: team.name.slice(0, 80),
    c: team.category,
    bf: team.battleFormat || 'Singolo',
    mt: team.monotype,
    m: team.mode,
    nt: team.notes?.slice(0, 500),
    mb: team.members.map((mem) =>
      mem
        ? {
            s: mem.speciesId,
            nk: mem.nickname,
            lv: mem.level,
            ab: mem.ability,
            it: mem.item,
            na: mem.nature,
            iv: mem.ivs,
            ev: mem.evs,
            mv: mem.moves,
            sh: mem.shiny ? 1 : 0,
            nt: mem.notes,
          }
        : null
    ),
  };
  const json = JSON.stringify(compact);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  for (let i = 0; i < bytes.length; i++) {
    bin += String.fromCharCode(bytes[i]);
  }
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeSharedTeam(encoded: string): SavedTeam | null {
  try {
    const padded = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const bin = atob(padded);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    const json = new TextDecoder().decode(bytes);
    const data = JSON.parse(json) as {
      n?: string;
      c?: TeamCategory;
      bf?: BattleFormat;
      mt?: PokemonType;
      m?: 'Standard' | 'Challenge Mode';
      nt?: string;
      mb?: Array<{
        s: number;
        nk?: string;
        lv?: number;
        ab?: string;
        it?: string;
        na?: string;
        iv?: TeamMember['ivs'];
        ev?: TeamMember['evs'];
        mv?: TeamMember['moves'];
        sh?: number;
        nt?: string;
      } | null>;
    };

    if (!Array.isArray(data.mb) || data.mb.length === 0) return null;

    const category: TeamCategory = TEAM_CATEGORIES.includes(data.c as TeamCategory)
      ? (data.c as TeamCategory)
      : 'Run Principale';

    const members: (TeamMember | null)[] = [null, null, null, null, null, null];
    for (let i = 0; i < 6; i++) {
      const raw = data.mb[i];
      if (!raw || typeof raw.s !== 'number') continue;
      const sp = BB2_POKEMON_BY_ID[raw.s];
      if (!sp) continue;
      const fallback = createDefaultMember(sp, raw.lv ?? 55);
      members[i] = {
        ...fallback,
        nickname: String(raw.nk || '').slice(0, 40),
        level: Math.max(1, Math.min(100, Math.round(raw.lv ?? 55))),
        ability: String(raw.ab || fallback.ability).slice(0, 60),
        item: String(raw.it || '').slice(0, 60),
        nature: String(raw.na || fallback.nature).slice(0, 30),
        ivs: raw.iv ?? fallback.ivs,
        evs: raw.ev ?? fallback.evs,
        moves: Array.isArray(raw.mv) && raw.mv.length === 4 ? raw.mv : fallback.moves,
        shiny: Boolean(raw.sh),
        notes: String(raw.nt || '').slice(0, 300),
      };
    }

    return {
      id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      name: String(data.n || 'Squadra Condivisa').slice(0, 80),
      category,
      battleFormat: data.bf === 'Doppio' ? 'Doppio' : 'Singolo',
      monotype: category === 'Monotype' ? data.mt : undefined,
      mode: data.m === 'Standard' ? 'Standard' : 'Challenge Mode',
      notes: data.nt ? String(data.nt).slice(0, 500) : undefined,
      updatedAt: Date.now(),
      members,
    };
  } catch {
    return null;
  }
}

