import { BB2_POKEMON_BY_ID } from './bb2Pokemon';
import { SavedTeam, StatKey, TeamMember } from '../types/pokemon';

export type CompetitiveCategory =
  | 'Metro Singolo'
  | 'Metro Doppio'
  | 'Metro Multi'
  | 'PWT';

export interface CompetitiveMemberSpec {
  speciesId: number;
  role: string;
  ability: string;
  item: string;
  nature: string;
  level: number;
  evs: Record<StatKey, number>;
  ivs?: Partial<Record<StatKey, number>>;
  moves: [string, string, string, string];
}

export interface CompetitiveTeamSuggestion {
  id: string;
  title: string;
  archetype: string;
  competition: CompetitiveCategory;
  formatLabel: string;
  streakRating: string;
  strategySummary: string;
  leadAdvice: string;
  tacticalTips: string[];
  threatsToWatch: string;
  members: CompetitiveMemberSpec[];
}

export const COMPETITIVE_CATEGORIES: {
  id: CompetitiveCategory | 'Tutti';
  label: string;
  subtitle: string;
}[] = [
  { id: 'Tutti', label: 'Tutti', subtitle: '12 team iconici verificati per BB2 Redux' },
  {
    id: 'Metro Singolo',
    label: 'Metro Singolo',
    subtitle: 'Treno Singolo & Super Singolo (3 Pokémon · Lv. 50)',
  },
  {
    id: 'Metro Doppio',
    label: 'Metro Doppio',
    subtitle: 'Treno Doppio & Super Doppio (4 Pokémon · Lv. 50)',
  },
  {
    id: 'Metro Multi',
    label: 'Metro Multi',
    subtitle: 'Treno Multi & Super Multi (2 Pokémon + Partner · Lv. 50)',
  },
  {
    id: 'PWT',
    label: 'PWT',
    subtitle: 'Pokémon World Tournament: Capipalestra & Campioni (Lv. 50)',
  },
];

export const COMPETITIVE_TEAMS: CompetitiveTeamSuggestion[] = [
  // =========================================================================
  // METROPOLITANA LOTTA — SINGOLO (3v3)
  // =========================================================================
  {
    id: 'metro-single-truant-durant',
    title: 'Truant Durant + Setup Sweeper (Record 500+)',
    archetype: 'Combo Abilità & Setup Assicurato',
    competition: 'Metro Singolo',
    formatLabel: '3 Pokémon · Treno Super Singolo',
    streakRating: 'Record Mondiale Metro Singolo (500+ vittorie)',
    strategySummary:
      'La strategia più famosa nella storia della Metropolitana Lotta: Durant con Choice Scarf supera il lead nemico e usa Entrainment per trasferirgli Pigrone (Truant). Poi cambi sul turno in cui il nemico "poltrisce" e alterni Protect (nel turno attivo) e Dragon Dance / Shell Smash (nel turno fermo) fino a +6/+6!',
    leadAdvice: 'Apri sempre con Durant: lancia Entrainment al turno 1, poi cambia su Cloyster o Dragonite.',
    tacticalTips: [
      'Ciclo perfetto dopo il cambio: il nemico attacca -> usa Protect; il nemico poltrisce con Truant -> usa Dragon Dance o Shell Smash fino a +6!',
      'Una volta a +6 Atk e +6 Vel, Dragonite o Cloyster eliminano tutto il team nemico in un colpo solo (1HKO) senza che il 2° e 3° avversario possano agire.',
      'Se il lead nemico ha Substitute o Protect al turno 1, Durant può colpire con X-Scissor / Iron Head o riprovare Entrainment.',
    ],
    threatsToWatch: 'Lead con Fake Out / Priority + Protect o abilità non sovrascrivibili (Multitype/Wonder Guard): in quel caso passa a Dragonite con Multiscale.',
    members: [
      {
        speciesId: 632, // Durant
        role: 'Lead Entrainment',
        ability: 'Truant',
        item: 'Choice Scarf',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 252, atk: 4, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['entrainment', 'x-scissor', 'iron-head', 'rock-slide'],
      },
      {
        speciesId: 149, // Dragonite
        role: 'Protect + +6 Sweeper',
        ability: 'Multiscale',
        item: 'Lum Berry',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['protect', 'dragon-dance', 'outrage', 'earthquake'],
      },
      {
        speciesId: 91, // Cloyster
        role: 'Backup Shell Smash Sweeper',
        ability: 'Skill Link',
        item: 'Focus Sash',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['protect', 'shell-smash', 'icicle-crash', 'rock-slide'],
      },
    ],
  },
  {
    id: 'metro-single-shell-ho',
    title: 'Shell Smash Hyper Offense',
    archetype: 'Setup & Sweep Immediato',
    competition: 'Metro Singolo',
    formatLabel: '3 Pokémon · Treno Super Singolo',
    streakRating: '100+ vittorie · Veloce per farm PL',
    strategySummary:
      'Uno dei terzetti più veloci e famosi per scalare il Treno Super Singolo: Cloyster apre con Focalnastro per garantire Gettaguscio (+2 Atk/SpA/Vel) e travolgere i primi due Pokémon avversari, mentre Volcarona e Dragonite coprono tutte le debolezze residue con un potenziale sweep autonomo.',
    leadAdvice: 'Apri sempre con Cloyster @ Focus Sash: usa Shell Smash al turno 1 anche davanti a minacce speciali.',
    tacticalTips: [
      'Cloyster con Skill Link garantisce colpi multipli massimi; usa Aqua Jet per eliminare chi resta a 1 PS con Vigore/Focalnastro.',
      'Se entra un Acciaio o Erba difensivo contro Cloyster, passa su Volcarona per potenziarti gratis con Quiver Dance.',
      'Dragonite con Multiscale e Lum Berry ignora il primo Tentennamento o Stato (Fuocofatuo/Tuononda) e setuppa Dragon Dance.',
    ],
    threatsToWatch: 'Attaccanti con priorità multipla o Tempesta di Sabbia che rompe il Focalnastro di Cloyster (entra prima con Dragonite).',
    members: [
      {
        speciesId: 91, // Cloyster
        role: 'Lead Sweeper',
        ability: 'Skill Link',
        item: 'Focus Sash',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['shell-smash', 'icicle-crash', 'rock-slide', 'aqua-jet'],
      },
      {
        speciesId: 637, // Volcarona
        role: 'Special Sweeper',
        ability: 'Flame Body',
        item: 'Leftovers',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['quiver-dance', 'fiery-dance', 'bug-buzz', 'giga-drain'],
      },
      {
        speciesId: 149, // Dragonite
        role: 'Cleaner / Bulky Sweeper',
        ability: 'Multiscale',
        item: 'Lum Berry',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['dragon-dance', 'outrage', 'earthquake', 'roost'],
      },
    ],
  },
  {
    id: 'metro-single-fantasy-water',
    title: 'Steel-Dragon-Water Classic (200+ Streak)',
    archetype: 'Core Difensiva & Switch-In',
    competition: 'Metro Singolo',
    formatLabel: '3 Pokémon · Treno Super Singolo',
    streakRating: '200+ vittorie · Massima costanza',
    strategySummary:
      'La leggendaria core Fantasy + Water della Gen 5: Latios e Scizor hanno una sinergia di tipi quasi perfetta (Scizor assorbe Drago, Ghiaccio, Buio, Coleottero e Folletto; Latios con Levitate entra su Terra e resiste al Fuoco). Suicune con Pressione/Calm Mind vince qualunque duello contro i wall dell’IA.',
    leadAdvice: 'Apri con Latios @ Choice Specs: 1-hit KO immediato su gran parte dei lead della Metro.',
    tacticalTips: [
      'Quando Latios è davanti a un Buio, Acciaio o Ghiaccio, manda Scizor per assorbire il colpo e ripartire con U-turn o Bullet Punch.',
      'Suicune con Scald + Calm Mind + Protect esaurisce i PP delle mosse pericolose dell’IA e brucia gli attaccanti fisici.',
      'Se temi un attacco Terra contro Scizor, cambia immediatamente su Latios che ha immunità totale grazie a Levitate.',
    ],
    threatsToWatch: 'Heatran o Volcarona con mosse Fuoco + HP Ice (usa Suicune per gestirli con calma).',
    members: [
      {
        speciesId: 381, // Latios
        role: 'Wallbreaker Speciale',
        ability: 'Levitate',
        item: 'Choice Specs',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['draco-meteor', 'dragon-pulse', 'psyshock', 'thunderbolt'],
      },
      {
        speciesId: 212, // Scizor
        role: 'Pivot & Priority',
        ability: 'Technician',
        item: 'Choice Band',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 248, atk: 252, def: 0, spa: 0, spd: 8, spe: 0 },
        moves: ['bullet-punch', 'u-turn', 'superpower', 'pursuit'],
      },
      {
        speciesId: 245, // Suicune
        role: 'Tank & Win Condition',
        ability: 'Pressure',
        item: 'Leftovers',
        nature: 'Bold',
        level: 50,
        evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
        moves: ['calm-mind', 'scald', 'ice-beam', 'protect'],
      },
    ],
  },
  {
    id: 'metro-single-redux-core',
    title: 'Core BB2 Redux (Contrary + Folletto)',
    archetype: 'Sinergia BB2 Redux Complete',
    competition: 'Metro Singolo',
    formatLabel: '3 Pokémon · Ottimizzato BB2 Redux',
    streakRating: 'Bilanciato Drago / Folletto / Acciaio',
    strategySummary:
      'Team costruito attorno ai potenziamenti esclusivi di Blaze Black 2 Redux: Serperior diventa Erba/Drago con Inversione (+2 SpA ogni Leaf Storm), Azumarill ottiene il tipo Acqua/Folletto per bloccare i Draghi di Andy/Torn, ed Excadrill Mold Breaker perfora ogni Levitate e Sturdy.',
    leadAdvice: 'Apri con Serperior: paralizza i lead più veloci con Glare oppure spara Leaf Storm per andare subito a +2 SpA.',
    tacticalTips: [
      'Serperior Erba/Drago teme molto Ghiaccio e Folletto: Azumarill ed Excadrill li incassano entrambi con facilità.',
      'Azumarill @ Choice Band con Huge Power e Aqua Jet risolve le emergenze contro attaccanti con Focalnastro o già indeboliti.',
      'Excadrill @ Air Balloon annulla temporaneamente la debolezza Terra e consente un Swords Dance sicuro.',
    ],
    threatsToWatch: 'Attaccanti Fuoco veloci come Chandelure o Volcarona: mantieni Azumarill sano per colpirli con Aqua Jet.',
    members: [
      {
        speciesId: 497, // Serperior
        role: 'Special Sweeper',
        ability: 'Contrary',
        item: 'Life Orb',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['leaf-storm', 'dragon-pulse', 'giga-drain', 'glare'],
      },
      {
        speciesId: 184, // Azumarill
        role: 'Tank Offensivo Folletto',
        ability: 'Huge Power',
        item: 'Choice Band',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
        moves: ['waterfall', 'play-rough', 'aqua-jet', 'superpower'],
      },
      {
        speciesId: 530, // Excadrill
        role: 'Physical Sweeper',
        ability: 'Mold Breaker',
        item: 'Air Balloon',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['earthquake', 'iron-head', 'rock-slide', 'swords-dance'],
      },
    ],
  },

  // =========================================================================
  // METROPOLITANA LOTTA — DOPPIO (4v4)
  // =========================================================================
  {
    id: 'metro-double-rain',
    title: 'Pioggia Rapida (Drizzle Swift Swim)',
    archetype: 'Rain Offense 4v4',
    competition: 'Metro Doppio',
    formatLabel: '4 Pokémon · Treno Super Doppio',
    streakRating: '150+ vittorie · Clear in 2-3 turni',
    strategySummary:
      'Il team più celebrato della Metropolitana Doppio: Politoed evoca Pioggia automatica al turno 1, raddoppiando istantaneamente la Velocità di Kingdra e potenziando Surf/Hydro Pump del 50%. Con Choice Scarf su Politoed e Ludicolo + Zapdos nelle retrovie, quasi nessuna lotta dura più di 3 turni.',
    leadAdvice: 'Lead standard: Politoed + Kingdra (doppia offensiva Surf/Dragon Pulse). Se vedi lead pericolosi, apri con Ludicolo per Fake Out.',
    tacticalTips: [
      'Kingdra resiste x4 all’Acqua: Politoed può usare Surf colpendo entrambi gli avversari mentre Kingdra subisce pochissimi danni.',
      'Sotto Pioggia, Thunder e Hurricane di Zapdos hanno precisione 100% senza mai fallire (salvo mosse evasive/Protect).',
      'Ludicolo con Fake Out blocca sul nascere i setter avversari di Distortozona o Ventoincoda.',
    ],
    threatsToWatch: 'Tyranitar, Abomasnow o Ninetales che sovrascrivono il meteo entrando dalla panchina.',
    members: [
      {
        speciesId: 186, // Politoed
        role: 'Rain Setter',
        ability: 'Drizzle',
        item: 'Choice Scarf',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['surf', 'scald', 'ice-beam', 'protect'],
      },
      {
        speciesId: 230, // Kingdra
        role: 'Swift Swim Sweeper',
        ability: 'Swift Swim',
        item: 'Life Orb',
        nature: 'Modest',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['hydro-pump', 'surf', 'dragon-pulse', 'ice-beam'],
      },
      {
        speciesId: 272, // Ludicolo
        role: 'Fake Out & Rain Support',
        ability: 'Swift Swim',
        item: 'Sitrus Berry',
        nature: 'Modest',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['fake-out', 'scald', 'giga-drain', 'ice-beam'],
      },
      {
        speciesId: 145, // Zapdos
        role: 'Thunder / Hurricane Sweeper',
        ability: 'Static',
        item: 'Expert Belt',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['thunder', 'hurricane', 'hidden-power-ice', 'roost'],
      },
    ],
  },
  {
    id: 'metro-double-disquake',
    title: 'DisQuake & Tailwind Goodstuffs',
    archetype: 'Sinergia Area Immunità',
    competition: 'Metro Doppio',
    formatLabel: '4 Pokémon · Treno Super Doppio',
    streakRating: '100+ vittorie · Zero auto-danno',
    strategySummary:
      'La famosa combinazione "DisQuake": Garchomp (immune a Elettro) usa Earthquake senza mai colpire Zapdos (Volante), mentre Zapdos usa Discharge che colpisce tutti tranne Garchomp! In panchina Togekiss Folletto/Volante fornisce Tailwind e protezione dai Draghi, e Metagross punisce Ghiaccio e Roccia.',
    leadAdvice: 'Lead fisso: Garchomp + Zapdos. Se il team nemico sembra più veloce (es. Weavile/Latios), manda Togekiss per Tailwind.',
    tacticalTips: [
      'Garchomp + Yache Berry sopravvive anche a un Geloraggio imprevisto ed elimina l’avversario in risposta.',
      'Discharge al 30% paralizza entrambi i nemici in campo, permettendo a Metagross e Togekiss di superarli facilmente.',
      'Togekiss Folletto/Volante (BB2 Redux) è immune sia a Drago che a Terra: può affiancare Garchomp mentre usa Earthquake.',
    ],
    threatsToWatch: 'Team con Distortozona (usa Protect + switch strategici per consumare i 5 turni) o Mamoswine con Ice Shard.',
    members: [
      {
        speciesId: 445, // Garchomp
        role: 'Earthquake Sweeper',
        ability: 'Rough Skin',
        item: 'Yache Berry',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['earthquake', 'dragon-claw', 'rock-slide', 'protect'],
      },
      {
        speciesId: 145, // Zapdos
        role: 'Discharge Attacker',
        ability: 'Pressure',
        item: 'Life Orb',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['discharge', 'air-slash', 'hidden-power-ice', 'protect'],
      },
      {
        speciesId: 468, // Togekiss
        role: 'Tailwind & Folletto Support',
        ability: 'Serene Grace',
        item: 'Sitrus Berry',
        nature: 'Calm',
        level: 50,
        evs: { hp: 252, atk: 0, def: 4, spa: 0, spd: 252, spe: 0 },
        moves: ['moonblast', 'air-slash', 'tailwind', 'roost'],
      },
      {
        speciesId: 376, // Metagross
        role: 'Cleaner Acciaio',
        ability: 'Clear Body',
        item: 'Shuca Berry',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
        moves: ['meteor-mash', 'zen-headbutt', 'earthquake', 'protect'],
      },
    ],
  },

  // =========================================================================
  // METROPOLITANA LOTTA — MULTI (2 Pokémon tuoi + Partner)
  // =========================================================================
  {
    id: 'metro-multi-chomp-kiss',
    title: 'Coppia Anti-IA: Garchomp + Togekiss',
    archetype: 'Autosufficienza Multi 2+2',
    competition: 'Metro Multi',
    formatLabel: '2 Pokémon Tuoi + Partner PNG/Co-op',
    streakRating: 'Top Pick Super Multi (49+ vittorie)',
    strategySummary:
      'Nel Treno Multi puoi schierare solo 2 Pokémon mentre il partner (Komor/Nardo/amico) usa i suoi 2. Questa coppia è progettata per non dipendere dall’IA: Garchomp con Focus Sash spazza via le minacce con Earthquake/Rock Slide senza rischiare di colpire Togekiss (immune a Terra e Drago in BB2 Redux), che supporta anche il partner con Tailwind e Thunder Wave.',
    leadAdvice: 'Metti Garchomp in Slot 1 per chiudere subito le minacce pericolose e tieni Togekiss in panchina come pivot immortale.',
    tacticalTips: [
      'Se giochi con un partner IA (es. Nardo con Pokémon fisici offensivi), scegli una squadra alleata offensiva ed evita mosse ad area se il partner è debole a Terra.',
      'Togekiss con Tailwind raddoppia per 4 turni la Velocità sia di Garchomp sia di entrambi i Pokémon del tuo compagno!',
      'Air Slash + Serene Grace (60% tentennamento) su nemici paralizzati da Thunder Wave blocca quasi completamente il lato nemico.',
    ],
    threatsToWatch: 'Abomasnow/Hail che rompe il Focus Sash di Garchomp (usa Protect al turno 1 per far lavorare il partner).',
    members: [
      {
        speciesId: 445, // Garchomp
        role: 'Attaccante Lead',
        ability: 'Rough Skin',
        item: 'Focus Sash',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['earthquake', 'dragon-claw', 'rock-slide', 'protect'],
      },
      {
        speciesId: 468, // Togekiss
        role: 'Pivot & Tailwind Support',
        ability: 'Serene Grace',
        item: 'Leftovers',
        nature: 'Bold',
        level: 50,
        evs: { hp: 248, atk: 0, def: 192, spa: 0, spd: 68, spe: 0 },
        moves: ['moonblast', 'air-slash', 'tailwind', 'thunder-wave'],
      },
    ],
  },
  {
    id: 'metro-multi-latios-scizor',
    title: 'Coppia Co-op Classica: Latios + Scizor',
    archetype: 'Immunità & Priority Multi',
    competition: 'Metro Multi',
    formatLabel: '2 Pokémon Tuoi + Partner PNG/Co-op',
    streakRating: 'Ideale con partner Earthquake/Surf',
    strategySummary:
      'La coppia di 2 Pokémon più versatile del Super Multi: Latios grazie a Levitate è immune al Terremoto di un eventuale partner fisico (come Terrakion, Garchomp o Krookodile), mentre Scizor copre ogni singola debolezza di Latios (Drago, Ghiaccio, Buio, Spettro, Folletto) e garantisce kill rapide con Bullet Punch.',
    leadAdvice: 'Apri con Latios: usa Protect se il turno 1 è rischioso o elimina subito il bersaglio più pericoloso per il tuo partner.',
    tacticalTips: [
      'Scizor con Superpower sfonda i Pokémon Acciaio e Normale (Blissey/Snorlax) che rallentano Latios.',
      'Se il tuo compagno in Co-op usa un attaccante Fuoco o Terra, tieni Latios in campo e manda Scizor solo dopo aver eliminato le mosse Fuoco.',
      'Draco Meteor + Bullet Punch abbattono quasi qualunque Pokémon difensivo in un solo turno combinato.',
    ],
    threatsToWatch: 'Pokémon Fuoco veloci contro Scizor a fine partita: conserva Latios o assicurati che il partner copra il Fuoco.',
    members: [
      {
        speciesId: 381, // Latios
        role: 'Special Sweeper Immune Terra',
        ability: 'Levitate',
        item: 'Life Orb',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['dragon-pulse', 'psyshock', 'thunderbolt', 'protect'],
      },
      {
        speciesId: 212, // Scizor
        role: 'Priority & Difesa Sinergica',
        ability: 'Technician',
        item: 'Choice Band',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 248, atk: 252, def: 0, spa: 0, spd: 8, spe: 0 },
        moves: ['bullet-punch', 'u-turn', 'superpower', 'aerial-ace'],
      },
    ],
  },

  // =========================================================================
  // POKÉMON WORLD TOURNAMENT (PWT) — SINGOLO / DOPPIO / CAMPIONI MONDIALI
  // =========================================================================
  {
    id: 'pwt-sand-offense',
    title: 'PWT Sand Dominance (Tyranitar + Excadrill)',
    archetype: 'Sand Rush Hyper Offense',
    competition: 'PWT',
    formatLabel: '3v3 Singolo / 4v4 Doppio · Campioni Mondiali',
    streakRating: 'Top Tier contro Rosso, Camilla & Lance',
    strategySummary:
      'Il re indiscusso dei tornei PWT di Unima: Tyranitar evoca la Tempesta di Sabbia all’ingresso (+50% DifSp ai tipi Roccia e break di Focalnastro/Vigore) attivando Sand Rush su Excadrill, che raggiunge una Velocità mostruosa per spazzare via Capipalestra e Campioni Mondiali. Garchomp e Starmie completano la copertura su Lotta, Acqua e Fuoco.',
    leadAdvice: 'In Singolo PWT (3v3) porta Tyranitar + Excadrill + Starmie/Garchomp. In Doppio PWT apri con Tyranitar + Excadrill o Garchomp.',
    tacticalTips: [
      'Excadrill @ Air Balloon annulla la debolezza Terra e vince facilmente gli scontri speculari contro i tipi Terra di Camilla/Giovanni.',
      'Tyranitar @ Focus Sash garantisce Stealth Rock (decisiva contro Volcarona, Dragonite e Charizard di Rosso/Lance) o un Crunch secco.',
      'Starmie con Natural Cure assorbe scottature/paralisi e colpisce con copertura Acqua + Ghiaccio + Elettro + Psico.',
    ],
    threatsToWatch: 'Team Pioggia (Adriano / Misty) che tolgono la Sabbia: manda prima Starmie o Garchomp e rientra con Tyranitar a metà gara.',
    members: [
      {
        speciesId: 248, // Tyranitar
        role: 'Sand Setter & Stealth Rock',
        ability: 'Sand Stream',
        item: 'Focus Sash',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['stone-edge', 'crunch', 'earthquake', 'stealth-rock'],
      },
      {
        speciesId: 530, // Excadrill
        role: 'Sand Rush Sweeper',
        ability: 'Sand Rush',
        item: 'Air Balloon',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['earthquake', 'iron-head', 'rock-slide', 'swords-dance'],
      },
      {
        speciesId: 445, // Garchomp
        role: 'Revenge Killer',
        ability: 'Rough Skin',
        item: 'Choice Scarf',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['outrage', 'earthquake', 'stone-edge', 'dragon-claw'],
      },
      {
        speciesId: 121, // Starmie
        role: 'Copertura Speciale',
        ability: 'Natural Cure',
        item: 'Life Orb',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['surf', 'ice-beam', 'thunderbolt', 'psyshock'],
      },
    ],
  },
  {
    id: 'pwt-trick-room',
    title: 'PWT Distortozona (Trick Room PWT)',
    archetype: 'Speed Control Inverso 4v4',
    competition: 'PWT',
    formatLabel: '4v4 Doppio / Rotazione · Campioni PWT',
    streakRating: 'Punisce team veloci di Blu, Camilla & Iris',
    strategySummary:
      'I Campioni del PWT puntano tutto su Pokémon velocissimi: ribaltare l’ordine dei turni con Trick Room ribalta completamente le partite! Reuniclus (Magic Guard, zero danno da Life Orb/meteo) e Chandelure aprono Distortozona, mentre Conkeldurr @ Flame Orb (Guts) e Ferrothorn (0 IV Vel) agiscono per primi schiacciando tutto.',
    leadAdvice: 'Apri con Reuniclus + Conkeldurr (Protect al turno 1 per attivare Flame Orb mentre Reuniclus lancia Trick Room) o Chandelure.',
    tacticalTips: [
      'Conkeldurr con Protect al turno 1 attiva Flame Orb in sicurezza: dal turno 2 ha +50% Attacco (Guts) ed è il più veloce sotto Trick Room.',
      'Chandelure con Flash Fire entra gratis sulle mosse Fuoco destinate a Ferrothorn e lancia Heat Wave ad area.',
      'Quando Trick Room sta per scadere, Ferrothorn con Gyro Ball/Leech Seed e Mach Punch di Conkeldurr mantengono il controllo.',
    ],
    threatsToWatch: 'Taunt al turno 1 su Reuniclus: avere due setter (Reuniclus + Chandelure) mette al sicuro l’attivazione.',
    members: [
      {
        speciesId: 579, // Reuniclus
        role: 'Trick Room Setter #1',
        ability: 'Magic Guard',
        item: 'Life Orb',
        nature: 'Quiet',
        level: 50,
        evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
        ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 0 },
        moves: ['trick-room', 'psychic', 'focus-blast', 'shadow-ball'],
      },
      {
        speciesId: 609, // Chandelure
        role: 'Trick Room Setter #2',
        ability: 'Flash Fire',
        item: 'Focus Sash',
        nature: 'Quiet',
        level: 50,
        evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
        ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 0 },
        moves: ['trick-room', 'heat-wave', 'shadow-ball', 'energy-ball'],
      },
      {
        speciesId: 534, // Conkeldurr
        role: 'Trick Room Breaker',
        ability: 'Guts',
        item: 'Flame Orb',
        nature: 'Brave',
        level: 50,
        evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
        ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 0 },
        moves: ['drain-punch', 'mach-punch', 'rock-slide', 'protect'],
      },
      {
        speciesId: 598, // Ferrothorn
        role: 'Wall & Gyro Ball',
        ability: 'Iron Barbs',
        item: 'Rocky Helmet',
        nature: 'Relaxed',
        level: 50,
        evs: { hp: 252, atk: 0, def: 252, spa: 0, spd: 4, spe: 0 },
        ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 0 },
        moves: ['gyro-ball', 'power-whip', 'leech-seed', 'protect'],
      },
    ],
  },
  {
    id: 'pwt-dfs-champions',
    title: 'PWT Drago-Folletto-Acciaio (Campioni & Rotazione)',
    archetype: 'Sinergia DFS Redux',
    competition: 'PWT',
    formatLabel: '3v3 Singolo / 4v4 Rotazione · PWT Completo',
    streakRating: 'Copertura totale contro ogni Campione',
    strategySummary:
      'Sfrutta la triade difensiva Drago-Folletto-Acciaio introdotta in BB2 Redux: Hydreigon (immunità Psico/Terra), Azumarill Acqua/Folletto (immunità Drago) e Heatran Fuoco/Acciaio (immunità Fuoco/Veleno e 10 resistenze!). Terrakion aggiunge pressione immediata per sfondare Blissey, Snorlax e i team Ghiaccio/Buio.',
    leadAdvice: 'Apri con Terrakion @ Focus Sash nei tornei Singolo 3v3; nella Lotta a Rotazione ruota liberamente tra Azumarill, Heatran e Hydreigon.',
    tacticalTips: [
      'Heatran @ Air Balloon ha di fatto 11 resistenze/immunità e si scambia gratis sulle mosse Folletto/Ghiaccio/Drago dirette a Hydreigon.',
      'Azumarill @ Choice Band con Play Rough e Aqua Jet punisce sia i Draghi di Lance/Iris che i tipi Terra/Roccia.',
      'Hydreigon @ Choice Scarf supera tutti i Pokémon non potenziati dei Campioni del PWT e mantiene slancio offensivo con U-turn.',
    ],
    threatsToWatch: 'Mosse Lotta rapide una volta rotto il Palloncino di Heatran: tieni pronto Azumarill Folletto per assorbirle.',
    members: [
      {
        speciesId: 639, // Terrakion
        role: 'Lead Breaker',
        ability: 'Justified',
        item: 'Focus Sash',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['close-combat', 'stone-edge', 'earthquake', 'swords-dance'],
      },
      {
        speciesId: 184, // Azumarill
        role: 'Folletto Priority Tank',
        ability: 'Huge Power',
        item: 'Choice Band',
        nature: 'Adamant',
        level: 50,
        evs: { hp: 252, atk: 252, def: 0, spa: 0, spd: 4, spe: 0 },
        moves: ['play-rough', 'waterfall', 'aqua-jet', 'superpower'],
      },
      {
        speciesId: 485, // Heatran
        role: 'Steel Tank & Flash Fire',
        ability: 'Flash Fire',
        item: 'Air Balloon',
        nature: 'Modest',
        level: 50,
        evs: { hp: 252, atk: 0, def: 0, spa: 252, spd: 4, spe: 0 },
        moves: ['fire-blast', 'flash-cannon', 'earth-power', 'protect'],
      },
      {
        speciesId: 635, // Hydreigon
        role: 'Scarf Revenge Killer',
        ability: 'Levitate',
        item: 'Choice Scarf',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['draco-meteor', 'dark-pulse', 'flamethrower', 'u-turn'],
      },
    ],
  },
  {
    id: 'pwt-sun-redux',
    title: 'PWT Sole & Clorofilla Redux',
    archetype: 'Sun Offense BB2 Redux',
    competition: 'PWT',
    formatLabel: '3v3 Singolo / 4v4 Doppio · Tornei Esperti',
    streakRating: 'Ottimo nei tornei Erba, Fuoco, Coleottero & Campioni',
    strategySummary:
      'Team meteo ad altissima esplosività pensato per i tornei PWT e l’accesso immediato in BB2 Redux: Ninetales Fuoco/Folletto evoca il Sole (Drought), annullando la debolezza Drago dei compagni e raddoppiando la Velocità di Venusaur (Chlorophyll) mentre Volcarona e Garchomp chiudono ogni resistenza Fuoco/Drago.',
    leadAdvice: 'Apri con Ninetales per impostare subito il Sole, poi alterna tra Venusaur (velocità doppia + SolarBeam immediato) e Volcarona.',
    tacticalTips: [
      'In Blaze Black 2 Redux, Ninetales ha tipo Fuoco/Folletto e impara Moonblast: ottimo check contro i Draghi e i Buio.',
      'Venusaur sotto Sole supera praticamente tutto il PWT grazie a Chlorophyll ed elimina i tipi Acqua/Roccia/Terra con SolarBeam in 1 turno.',
      'Volcarona sotto Sole colpisce durissimo con Fiery Dance potenziato del 50%, e Garchomp gestisce eventuali Heatran o Tyranitar.',
    ],
    threatsToWatch: 'Tyranitar o Politoed che cambiano il meteo: usa Venusaur per punire Politoed e Garchomp contro Tyranitar.',
    members: [
      {
        speciesId: 38, // Ninetales
        role: 'Sun Setter Folletto',
        ability: 'Drought',
        item: 'Focus Sash',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['flamethrower', 'moonblast', 'solarbeam', 'will-o-wisp'],
      },
      {
        speciesId: 3, // Venusaur
        role: 'Chlorophyll Sweeper',
        ability: 'Chlorophyll',
        item: 'Life Orb',
        nature: 'Modest',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['solarbeam', 'sludge-bomb', 'earth-power', 'sleep-powder'],
      },
      {
        speciesId: 637, // Volcarona
        role: 'Sun Special Sweeper',
        ability: 'Flame Body',
        item: 'Lum Berry',
        nature: 'Timid',
        level: 50,
        evs: { hp: 4, atk: 0, def: 0, spa: 252, spd: 0, spe: 252 },
        moves: ['quiver-dance', 'fiery-dance', 'bug-buzz', 'giga-drain'],
      },
      {
        speciesId: 445, // Garchomp
        role: 'Heatran & Rock Check',
        ability: 'Rough Skin',
        item: 'Choice Scarf',
        nature: 'Jolly',
        level: 50,
        evs: { hp: 4, atk: 252, def: 0, spa: 0, spd: 0, spe: 252 },
        moves: ['earthquake', 'dragon-claw', 'stone-edge', 'outrage'],
      },
    ],
  },
];

export function buildSavedTeamFromCompetitiveSuggestion(
  suggestion: CompetitiveTeamSuggestion
): SavedTeam {
  const members: (TeamMember | null)[] = [null, null, null, null, null, null];

  suggestion.members.slice(0, 6).forEach((spec, idx) => {
    const sp = BB2_POKEMON_BY_ID[spec.speciesId];
    if (!sp) return;
    members[idx] = {
      uid: `${spec.speciesId}-${Date.now()}-${idx}-${Math.random().toString(36).slice(2, 6)}`,
      speciesId: spec.speciesId,
      nickname: '',
      level: spec.level,
      ability: spec.ability,
      item: spec.item,
      nature: spec.nature,
      ivs: {
        hp: spec.ivs?.hp ?? 31,
        atk: spec.ivs?.atk ?? 31,
        def: spec.ivs?.def ?? 31,
        spa: spec.ivs?.spa ?? 31,
        spd: spec.ivs?.spd ?? 31,
        spe: spec.ivs?.spe ?? 31,
      },
      evs: { ...spec.evs },
      moves: [spec.moves[0], spec.moves[1], spec.moves[2], spec.moves[3]],
      shiny: false,
      notes: `${spec.role} · ${suggestion.competition}`,
    };
  });

  return {
    id: `team-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
    name: `${suggestion.title}`.slice(0, 32),
    category: 'Lega & Post-Game',
    mode: 'Challenge Mode',
    notes: `[${suggestion.competition} · ${suggestion.formatLabel}] ${suggestion.strategySummary}`,
    updatedAt: Date.now(),
    members,
  };
}
