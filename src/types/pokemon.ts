export type PokemonType =
  | 'Normale'
  | 'Fuoco'
  | 'Acqua'
  | 'Erba'
  | 'Elettro'
  | 'Ghiaccio'
  | 'Lotta'
  | 'Veleno'
  | 'Terra'
  | 'Volante'
  | 'Psico'
  | 'Coleottero'
  | 'Roccia'
  | 'Spettro'
  | 'Drago'
  | 'Buio'
  | 'Acciaio'
  | 'Folletto';

export type MoveCategory = 'Fisico' | 'Speciale' | 'Stato';

export type StatKey = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';

export interface BaseStats {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}

export interface MoveData {
  id: string;
  name: string;
  type: PokemonType;
  category: MoveCategory;
  power: number;
  accuracy: number | null;
  pp: number;
  description: string;
  bb2Buffed?: boolean;
}

export interface AbilityInfo {
  name: string;
  description: string;
  isHidden?: boolean;
}

export interface PokemonSpecies {
  id: number;
  dexNumber?: number;
  spriteId?: number;
  name: string;
  region: 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh' | 'Unima';
  types: [PokemonType] | [PokemonType, PokemonType];
  baseStats: BaseStats;
  abilities: AbilityInfo[];
  bb2Modified: boolean;
  bb2Changes?: string;
  learnset: string[];
  roleHint: string;
}

export interface NatureData {
  name: string;
  italianName: string;
  plus: StatKey | null;
  minus: StatKey | null;
}

export interface ItemData {
  name: string;
  italianName: string;
  category: 'Potenziamento' | 'Scelta' | 'Difesa' | 'Bacca' | 'Altro';
  description: string;
}

export interface TeamMember {
  uid: string;
  speciesId: number;
  nickname: string;
  level: number;
  ability: string;
  item: string;
  nature: string;
  ivs: BaseStats;
  evs: BaseStats;
  moves: [string | null, string | null, string | null, string | null];
  shiny: boolean;
  notes: string;
}

export type TeamCategory =
  | 'Run Principale'
  | 'Challenge Mode'
  | 'Nuzlocke'
  | 'Monotype'
  | 'Meteo / Strategia'
  | 'Lega & Post-Game';

export type BattleFormat = 'Singolo' | 'Doppio';

export interface SavedTeam {
  id: string;
  name: string;
  category: TeamCategory;
  battleFormat?: BattleFormat;
  monotype?: PokemonType;
  mode: 'Standard' | 'Challenge Mode';
  notes?: string;
  updatedAt: number;
  members: (TeamMember | null)[];
}

export interface BossPokemon {
  speciesId: number;
  name: string;
  types: [PokemonType] | [PokemonType, PokemonType];
  level: number;
  item?: string;
  ability?: string;
  moves: string[];
  isAce?: boolean;
}

export interface BossTrainer {
  id: string;
  name: string;
  title: string;
  location: string;
  specialty: PokemonType | 'Misto';
  levelCap: number;
  badgeOrMilestone: string;
  spoilerStage?: 0 | 1 | 2 | 3 | 4;
  tip: string;
  roster: BossPokemon[];
}

export interface SavSummary {
  trainerName: string;
  tid: number;
  playtimeHours: number;
  playtimeMinutes: number;
  money: number;
  badgesCount: number;
  pokedexCaught: number;
  fileName: string;
  parsedAt: number;
}

export interface GameProgress {
  completedMilestones: string[];
  collectedTms: string[];
  collectedItems: string[];
  savSummary?: SavSummary;
}

export type AppTab = 'team' | 'teams' | 'pokedex' | 'analysis' | 'bosses' | 'typechart' | 'guide';
