// Dati estratti e verificati da https://romhackdex.net/blaze-black-2-volt-white-2-redux/items/
export interface GuideTmEntry {
  id: string;
  code: string;
  kind: 'MT' | 'MN';
  name: string;
  locations: string[];
  itemId?: number;
}

export type GuideItemCategory =
  | 'Offensivi'
  | 'Difesa & Tattici'
  | 'Evoluzione'
  | 'Chiave & Utilità'
  | 'Bacche';

export interface GuideItemEntry {
  id: string;
  name: string;
  category: GuideItemCategory;
  locations: string[];
  itemId?: number;
}

export type MilestonePhase = 'Palestre' | 'Storia' | 'Lega & Post-Game' | 'Catture Leggendarie';

export type SpoilerStage = 0 | 1 | 2 | 3 | 4;

export interface GameMilestone {
  id: string;
  phase: MilestonePhase;
  title: string;
  location: string;
  levelCap?: number;
  badgeIndex?: number; // 0..7 matching Unova Badges bitmask in Gen 5 .sav
  speciesIds?: number[]; // All listed species must be caught in .sav
  anySpeciesIds?: number[]; // Any listed species caught in .sav (e.g. version-exclusive legendaries)
  spoilerStage: SpoilerStage;
  reward: string;
  notes?: string;
}

export const BB2_GUIDE_TMS: GuideTmEntry[] = [
  {
    "id": "tm01",
    "code": "TM01",
    "kind": "MT",
    "name": "Hone Claws",
    "locations": [
      "Relic Castle",
      "Humilau City"
    ],
    "itemId": 328
  },
  {
    "id": "tm02",
    "code": "TM02",
    "kind": "MT",
    "name": "Dragon Claw",
    "locations": [
      "Opelucid City",
      "Humilau City"
    ],
    "itemId": 329
  },
  {
    "id": "tm03",
    "code": "TM03",
    "kind": "MT",
    "name": "Psyshock",
    "locations": [
      "Desert Resort",
      "Humilau City"
    ],
    "itemId": 330
  },
  {
    "id": "tm04",
    "code": "TM04",
    "kind": "MT",
    "name": "Calm Mind",
    "locations": [
      "Lacunosa Town",
      "Humilau City"
    ],
    "itemId": 331
  },
  {
    "id": "tm05",
    "code": "TM05",
    "kind": "MT",
    "name": "Roar",
    "locations": [
      "Route 23",
      "Humilau City"
    ],
    "itemId": 332
  },
  {
    "id": "tm06",
    "code": "TM06",
    "kind": "MT",
    "name": "Toxic",
    "locations": [
      "Seaside Cave",
      "Humilau City"
    ],
    "itemId": 333
  },
  {
    "id": "tm08",
    "code": "TM08",
    "kind": "MT",
    "name": "Bulk Up",
    "locations": [
      "Castelia Sewers",
      "Humilau City"
    ],
    "itemId": 335
  },
  {
    "id": "tm09",
    "code": "TM09",
    "kind": "MT",
    "name": "Venoshock",
    "locations": [
      "Virbank City",
      "Humilau City"
    ],
    "itemId": 336
  },
  {
    "id": "tm10",
    "code": "TM10",
    "kind": "MT",
    "name": "Hidden Power",
    "locations": [
      "Castelia City",
      "Humilau City"
    ],
    "itemId": 337
  },
  {
    "id": "tm12",
    "code": "TM12",
    "kind": "MT",
    "name": "Taunt",
    "locations": [
      "Route 23",
      "Humilau City"
    ],
    "itemId": 339
  },
  {
    "id": "tm13",
    "code": "TM13",
    "kind": "MT",
    "name": "Ice Beam",
    "locations": [
      "Giant Chasm",
      "Humilau City"
    ],
    "itemId": 340
  },
  {
    "id": "tm14",
    "code": "TM14",
    "kind": "MT",
    "name": "Blizzard",
    "locations": [
      "Relic Passage",
      "Humilau City"
    ],
    "itemId": 341
  },
  {
    "id": "tm15",
    "code": "TM15",
    "kind": "MT",
    "name": "Hyper Beam                      Shopping Mall Nine",
    "locations": [
      "Humilau City"
    ],
    "itemId": 342
  },
  {
    "id": "tm16",
    "code": "TM16",
    "kind": "MT",
    "name": "Light Screen                    Nimbasa City PokéMon Center",
    "locations": [
      "Humilau City"
    ],
    "itemId": 343
  },
  {
    "id": "tm17",
    "code": "TM17",
    "kind": "MT",
    "name": "Protect",
    "locations": [
      "Humilau City"
    ],
    "itemId": 344
  },
  {
    "id": "tm19",
    "code": "TM19",
    "kind": "MT",
    "name": "Giga Drain",
    "locations": [
      "Village Bridge",
      "Route 18"
    ],
    "itemId": 346
  },
  {
    "id": "tm20",
    "code": "TM20",
    "kind": "MT",
    "name": "Tri Attack",
    "locations": [
      "Route 6",
      "Route 15"
    ],
    "itemId": 347
  },
  {
    "id": "tm21",
    "code": "TM21",
    "kind": "MT",
    "name": "Frustration",
    "locations": [
      "Floccesy Ranch",
      "Humilau City"
    ],
    "itemId": 348
  },
  {
    "id": "tm22",
    "code": "TM22",
    "kind": "MT",
    "name": "Solar Beam",
    "locations": [
      "Lostlorn Forest",
      "Humilau City"
    ],
    "itemId": 349
  },
  {
    "id": "tm23",
    "code": "TM23",
    "kind": "MT",
    "name": "Smack Down",
    "locations": [
      "Relic Passage",
      "Humilau City"
    ],
    "itemId": 350
  },
  {
    "id": "tm24",
    "code": "TM24",
    "kind": "MT",
    "name": "Thunderbolt",
    "locations": [
      "Lentimas Town",
      "Humilau City"
    ],
    "itemId": 351
  },
  {
    "id": "tm25",
    "code": "TM25",
    "kind": "MT",
    "name": "Thunder",
    "locations": [
      "Relic Passage",
      "Humilau City"
    ],
    "itemId": 352
  },
  {
    "id": "tm26",
    "code": "TM26",
    "kind": "MT",
    "name": "Earthquake",
    "locations": [
      "Driftveil City",
      "Humilau City"
    ],
    "itemId": 353
  },
  {
    "id": "tm27",
    "code": "TM27",
    "kind": "MT",
    "name": "Return",
    "locations": [
      "Reversal Mountain",
      "Humilau City"
    ],
    "itemId": 354
  },
  {
    "id": "tm28",
    "code": "TM28",
    "kind": "MT",
    "name": "Dig",
    "locations": [
      "Route 4",
      "Humilau City"
    ],
    "itemId": 355
  },
  {
    "id": "tm29",
    "code": "TM29",
    "kind": "MT",
    "name": "Psychic",
    "locations": [
      "Route 13",
      "Humilau City"
    ],
    "itemId": 356
  },
  {
    "id": "tm30",
    "code": "TM30",
    "kind": "MT",
    "name": "Shadow Ball",
    "locations": [
      "Strange House",
      "Humilau City"
    ],
    "itemId": 357
  },
  {
    "id": "tm31",
    "code": "TM31",
    "kind": "MT",
    "name": "Brick Break",
    "locations": [
      "Route 19",
      "Humilau City"
    ],
    "itemId": 358
  },
  {
    "id": "tm32",
    "code": "TM32",
    "kind": "MT",
    "name": "Dazzling Gleam",
    "locations": [
      "Route 13"
    ],
    "itemId": 359
  },
  {
    "id": "tm33",
    "code": "TM33",
    "kind": "MT",
    "name": "Reflect                         Nimbasa City PokéMon Center",
    "locations": [
      "Humilau City"
    ],
    "itemId": 360
  },
  {
    "id": "tm34",
    "code": "TM34",
    "kind": "MT",
    "name": "Sludge Wave",
    "locations": [
      "Route 9",
      "Humilau City"
    ],
    "itemId": 361
  },
  {
    "id": "tm35",
    "code": "TM35",
    "kind": "MT",
    "name": "Flamethrower",
    "locations": [
      "Reversal Mountain",
      "Humilau City"
    ],
    "itemId": 362
  },
  {
    "id": "tm36",
    "code": "TM36",
    "kind": "MT",
    "name": "Sludge Bomb",
    "locations": [
      "Virbank City",
      "Humilau City"
    ],
    "itemId": 363
  },
  {
    "id": "tm38",
    "code": "TM38",
    "kind": "MT",
    "name": "Fire Blast",
    "locations": [
      "Relic Passage",
      "Humilau City"
    ],
    "itemId": 365
  },
  {
    "id": "tm39",
    "code": "TM39",
    "kind": "MT",
    "name": "Rock Tomb",
    "locations": [
      "Relic Castle",
      "Humilau City"
    ],
    "itemId": 366
  },
  {
    "id": "tm40",
    "code": "TM40",
    "kind": "MT",
    "name": "Aerial Ace",
    "locations": [
      "Mistralton City",
      "Humilau City"
    ],
    "itemId": 367
  },
  {
    "id": "tm41",
    "code": "TM41",
    "kind": "MT",
    "name": "Infestation",
    "locations": [
      "Floccesy Ranch"
    ],
    "itemId": 368
  },
  {
    "id": "tm42",
    "code": "TM42",
    "kind": "MT",
    "name": "Facade",
    "locations": [
      "Marine Tube",
      "Humilau City"
    ],
    "itemId": 369
  },
  {
    "id": "tm43",
    "code": "TM43",
    "kind": "MT",
    "name": "Flame Charge",
    "locations": [
      "Route 5",
      "Humilau City"
    ],
    "itemId": 370
  },
  {
    "id": "tm44",
    "code": "TM44",
    "kind": "MT",
    "name": "Rest",
    "locations": [
      "Castelia City",
      "Humilau City"
    ],
    "itemId": 371
  },
  {
    "id": "tm45",
    "code": "TM45",
    "kind": "MT",
    "name": "Power-Up Punch",
    "locations": [
      "Virbank Complex"
    ],
    "itemId": 372
  },
  {
    "id": "tm46",
    "code": "TM46",
    "kind": "MT",
    "name": "Aura Sphere",
    "locations": [
      "Victory Road"
    ],
    "itemId": 373
  },
  {
    "id": "tm47",
    "code": "TM47",
    "kind": "MT",
    "name": "Low Sweep",
    "locations": [
      "Virbank Complex",
      "Humilau City"
    ],
    "itemId": 374
  },
  {
    "id": "tm48",
    "code": "TM48",
    "kind": "MT",
    "name": "Mystical Fire",
    "locations": [
      "Route 13"
    ],
    "itemId": 375
  },
  {
    "id": "tm49",
    "code": "TM49",
    "kind": "MT",
    "name": "Echoed Voice",
    "locations": [
      "Nimbasa City",
      "Humilau City"
    ],
    "itemId": 376
  },
  {
    "id": "tm50",
    "code": "TM50",
    "kind": "MT",
    "name": "Overheat",
    "locations": [
      "Route 23",
      "Humilau City"
    ],
    "itemId": 377
  },
  {
    "id": "tm51",
    "code": "TM51",
    "kind": "MT",
    "name": "Wave Crash",
    "locations": [
      "Humilau City",
      "Pinwheel Forest"
    ],
    "itemId": 378
  },
  {
    "id": "tm52",
    "code": "TM52",
    "kind": "MT",
    "name": "Focus Blast",
    "locations": [
      "Relic Passage",
      "Humilau City"
    ],
    "itemId": 379
  },
  {
    "id": "tm53",
    "code": "TM53",
    "kind": "MT",
    "name": "Energy Ball",
    "locations": [
      "Aspertia City",
      "Humilau City"
    ],
    "itemId": 380
  },
  {
    "id": "tm54",
    "code": "TM54",
    "kind": "MT",
    "name": "False Swipe",
    "locations": [
      "Aspertia City",
      "Humilau City"
    ],
    "itemId": 381
  },
  {
    "id": "tm55",
    "code": "TM55",
    "kind": "MT",
    "name": "Scald",
    "locations": [
      "Undella Town",
      "Humilau City"
    ],
    "itemId": 382
  },
  {
    "id": "tm56",
    "code": "TM56",
    "kind": "MT",
    "name": "Weather Ball",
    "locations": [
      "Lacunosa Town"
    ],
    "itemId": 383
  },
  {
    "id": "tm57",
    "code": "TM57",
    "kind": "MT",
    "name": "Charge Beam",
    "locations": [
      "Chargestone Cave",
      "Humilau City"
    ],
    "itemId": 384
  },
  {
    "id": "tm58",
    "code": "TM58",
    "kind": "MT",
    "name": "Hurricane",
    "locations": [
      "Victory Road"
    ],
    "itemId": 385
  },
  {
    "id": "tm59",
    "code": "TM59",
    "kind": "MT",
    "name": "Incinerate",
    "locations": [
      "Virbank Complex",
      "Humilau City"
    ],
    "itemId": 386
  },
  {
    "id": "tm60",
    "code": "TM60",
    "kind": "MT",
    "name": "Quash",
    "locations": [
      "Abundant Shrine",
      "Humilau City"
    ],
    "itemId": 387
  },
  {
    "id": "tm61",
    "code": "TM61",
    "kind": "MT",
    "name": "Will-O-Wisp",
    "locations": [
      "Celestial Tower",
      "Humilau City"
    ],
    "itemId": 388
  },
  {
    "id": "tm62",
    "code": "TM62",
    "kind": "MT",
    "name": "Acrobatics",
    "locations": [
      "Mistralton City",
      "Humilau City"
    ],
    "itemId": 389
  },
  {
    "id": "tm63",
    "code": "TM63",
    "kind": "MT",
    "name": "Brutal Swing",
    "locations": [
      "Driftveil City"
    ],
    "itemId": 390
  },
  {
    "id": "tm64",
    "code": "TM64",
    "kind": "MT",
    "name": "Explosion",
    "locations": [
      "Clay Tunnel",
      "Humilau City"
    ],
    "itemId": 391
  },
  {
    "id": "tm65",
    "code": "TM65",
    "kind": "MT",
    "name": "Shadow Claw",
    "locations": [
      "Celestial Tower",
      "Humilau City"
    ],
    "itemId": 392
  },
  {
    "id": "tm66",
    "code": "TM66",
    "kind": "MT",
    "name": "Power Gem",
    "locations": [
      "Route 16"
    ],
    "itemId": 393
  },
  {
    "id": "tm67",
    "code": "TM67",
    "kind": "MT",
    "name": "Retaliate",
    "locations": [
      "Plasma Frigate",
      "Humilau City"
    ],
    "itemId": 394
  },
  {
    "id": "tm68",
    "code": "TM68",
    "kind": "MT",
    "name": "Giga Impact                     Shopping Mall Nine",
    "locations": [
      "Humilau City"
    ],
    "itemId": 395
  },
  {
    "id": "tm69",
    "code": "TM69",
    "kind": "MT",
    "name": "Rock Polish",
    "locations": [
      "Reversal Mountain",
      "Humilau City"
    ],
    "itemId": 396
  },
  {
    "id": "tm70",
    "code": "TM70",
    "kind": "MT",
    "name": "Flash",
    "locations": [
      "Castelia City",
      "Humilau City"
    ],
    "itemId": 397
  },
  {
    "id": "tm71",
    "code": "TM71",
    "kind": "MT",
    "name": "Stone Edge",
    "locations": [
      "Victory Road",
      "Humilau City"
    ],
    "itemId": 398
  },
  {
    "id": "tm72",
    "code": "TM72",
    "kind": "MT",
    "name": "Volt Switch",
    "locations": [
      "Nimbasa City",
      "Humilau City"
    ],
    "itemId": 399
  },
  {
    "id": "tm73",
    "code": "TM73",
    "kind": "MT",
    "name": "Thunder Wave                    Nimbasa City PokéMon Center",
    "locations": [
      "Humilau City"
    ],
    "itemId": 400
  },
  {
    "id": "tm74",
    "code": "TM74",
    "kind": "MT",
    "name": "Gyro Ball                       Nimbasa City PokéMon Center",
    "locations": [
      "Humilau City"
    ],
    "itemId": 401
  },
  {
    "id": "tm75",
    "code": "TM75",
    "kind": "MT",
    "name": "Swords Dance",
    "locations": [
      "Route 11",
      "Humilau City"
    ],
    "itemId": 402
  },
  {
    "id": "tm76",
    "code": "TM76",
    "kind": "MT",
    "name": "Bug Buzz",
    "locations": [
      "Route 13"
    ],
    "itemId": 403
  },
  {
    "id": "tm77",
    "code": "TM77",
    "kind": "MT",
    "name": "Psych Up",
    "locations": [
      "Chargestone Cave",
      "Twist Mountain",
      "Humilau City"
    ],
    "itemId": 404
  },
  {
    "id": "tm78",
    "code": "TM78",
    "kind": "MT",
    "name": "Bulldoze",
    "locations": [
      "Desert Resort",
      "Humilau City"
    ],
    "itemId": 405
  },
  {
    "id": "tm79",
    "code": "TM79",
    "kind": "MT",
    "name": "Frost Breath",
    "locations": [
      "PWT",
      "Humilau City"
    ],
    "itemId": 406
  },
  {
    "id": "tm80",
    "code": "TM80",
    "kind": "MT",
    "name": "Rock Slide",
    "locations": [
      "Mistralton Cave",
      "Humilau City"
    ],
    "itemId": 407
  },
  {
    "id": "tm81",
    "code": "TM81",
    "kind": "MT",
    "name": "X-Scissor",
    "locations": [
      "Castelia City",
      "Humilau City"
    ],
    "itemId": 408
  },
  {
    "id": "tm82",
    "code": "TM82",
    "kind": "MT",
    "name": "Dragon Tail",
    "locations": [
      "Mistralton Cave",
      "Humilau City"
    ],
    "itemId": 409
  },
  {
    "id": "tm83",
    "code": "TM83",
    "kind": "MT",
    "name": "Work Up",
    "locations": [
      "Aspertia City",
      "Humilau City"
    ],
    "itemId": 410
  },
  {
    "id": "tm84",
    "code": "TM84",
    "kind": "MT",
    "name": "Poison Jab",
    "locations": [
      "Castelia Sewers",
      "Humilau City"
    ],
    "itemId": 411
  },
  {
    "id": "tm85",
    "code": "TM85",
    "kind": "MT",
    "name": "Play Rough",
    "locations": [
      "Relic Passage",
      "Dreamyard"
    ],
    "itemId": 412
  },
  {
    "id": "tm86",
    "code": "TM86",
    "kind": "MT",
    "name": "Grass Knot",
    "locations": [
      "Castelia City",
      "Humilau City"
    ],
    "itemId": 413
  },
  {
    "id": "tm87",
    "code": "TM87",
    "kind": "MT",
    "name": "Rock Climb",
    "locations": [
      "Route 9"
    ],
    "itemId": 414
  },
  {
    "id": "tm88",
    "code": "TM88",
    "kind": "MT",
    "name": "Pluck",
    "locations": [
      "Castelia City",
      "Humilau City"
    ],
    "itemId": 415
  },
  {
    "id": "tm89",
    "code": "TM89",
    "kind": "MT",
    "name": "U-Turn",
    "locations": [
      "Route 7",
      "Humilau City"
    ],
    "itemId": 416
  },
  {
    "id": "tm90",
    "code": "TM90",
    "kind": "MT",
    "name": "Substitute",
    "locations": [
      "Giant Chasm",
      "Humilau City"
    ],
    "itemId": 417
  },
  {
    "id": "tm91",
    "code": "TM91",
    "kind": "MT",
    "name": "Flash Cannon",
    "locations": [
      "Chargestone Cave",
      "Humilau City"
    ],
    "itemId": 418
  },
  {
    "id": "tm92",
    "code": "TM92",
    "kind": "MT",
    "name": "Trick Room",
    "locations": [
      "Plasma Frigate",
      "Humilau City"
    ],
    "itemId": 419
  },
  {
    "id": "tm93",
    "code": "TM93",
    "kind": "MT",
    "name": "Wild Charge",
    "locations": [
      "Route 12",
      "Humilau City"
    ],
    "itemId": 618
  },
  {
    "id": "tm94",
    "code": "TM94",
    "kind": "MT",
    "name": "Rock Smash",
    "locations": [
      "Virbank Complex",
      "Humilau City"
    ],
    "itemId": 619
  },
  {
    "id": "tm95",
    "code": "TM95",
    "kind": "MT",
    "name": "Snarl",
    "locations": [
      "Lostlorn Forest",
      "Humilau City"
    ],
    "itemId": 620
  },
  {
    "id": "hm01",
    "code": "HM01",
    "kind": "MN",
    "name": "Cut",
    "locations": [
      "Virbank City (consegnata da Komor/Rivali prima del Cantiere)"
    ],
    "itemId": 420
  },
  {
    "id": "hm02",
    "code": "HM02",
    "kind": "MN",
    "name": "Fly",
    "locations": [
      "Route 5"
    ],
    "itemId": 421
  },
  {
    "id": "hm03",
    "code": "HM03",
    "kind": "MN",
    "name": "Surf",
    "locations": [
      "Route 6"
    ],
    "itemId": 422
  },
  {
    "id": "hm04",
    "code": "HM04",
    "kind": "MN",
    "name": "Strength",
    "locations": [
      "Castelia Sewers"
    ],
    "itemId": 423
  },
  {
    "id": "hm05",
    "code": "HM05",
    "kind": "MN",
    "name": "Waterfall",
    "locations": [
      "Undella Town"
    ],
    "itemId": 424
  },
  {
    "id": "hm06",
    "code": "HM06",
    "kind": "MN",
    "name": "Dive",
    "locations": [
      "Victory Road"
    ],
    "itemId": 425
  }
];

export const BB2_GUIDE_ITEMS: GuideItemEntry[] = [
  {
    "id": "item-aspear-berry",
    "name": "Aspear Berry",
    "category": "Bacche",
    "locations": [
      "Route 11"
    ]
  },
  {
    "id": "item-berry-juice",
    "name": "Berry Juice",
    "category": "Bacche",
    "locations": [
      "Trainer School",
      "Castelia City",
      "Nuvema Town"
    ],
    "itemId": 43
  },
  {
    "id": "item-cheri-berry",
    "name": "Cheri Berry",
    "category": "Bacche",
    "locations": [
      "Lostlorn Forest",
      "Route 5",
      "Victory Road"
    ]
  },
  {
    "id": "item-cheri-berry-x12",
    "name": "Cheri Berry x12**",
    "category": "Bacche",
    "locations": [
      "Nimbasa City"
    ]
  },
  {
    "id": "item-chesto-berry",
    "name": "Chesto Berry",
    "category": "Bacche",
    "locations": [
      "Chargestone Cave"
    ],
    "itemId": 150
  },
  {
    "id": "item-haban-berry",
    "name": "Haban Berry",
    "category": "Bacche",
    "locations": [
      "Driftveil City"
    ]
  },
  {
    "id": "item-leppa-berry",
    "name": "Leppa Berry",
    "category": "Bacche",
    "locations": [
      "Route 20"
    ],
    "itemId": 154
  },
  {
    "id": "item-lum-berry",
    "name": "Lum Berry",
    "category": "Bacche",
    "locations": [
      "Clay Tunnel",
      "Moor of Icirrus",
      "Pinwheel Forest",
      "Accumula Town",
      "Route 1"
    ],
    "itemId": 157
  },
  {
    "id": "item-oran-berry",
    "name": "Oran Berry",
    "category": "Bacche",
    "locations": [
      "Route 19"
    ],
    "itemId": 155
  },
  {
    "id": "item-pecha-berry",
    "name": "Pecha Berry",
    "category": "Bacche",
    "locations": [
      "Lostlorn Forest",
      "Route 6"
    ]
  },
  {
    "id": "item-persim-berry",
    "name": "Persim Berry",
    "category": "Bacche",
    "locations": [
      "Reversal Mountain",
      "Seaside Cave",
      "Striaton City"
    ]
  },
  {
    "id": "item-rawst-berry",
    "name": "Rawst Berry",
    "category": "Bacche",
    "locations": [
      "Desert Resort",
      "Victory Road"
    ]
  },
  {
    "id": "item-sitrus-berry",
    "name": "Sitrus Berry",
    "category": "Bacche",
    "locations": [
      "Route 20",
      "Route 4",
      "Route 13",
      "Village Bridge",
      "Route 23",
      "Pinwheel Forest",
      "Accumula Town"
    ],
    "itemId": 158
  },
  {
    "id": "item-tanga-berry",
    "name": "Tanga Berry",
    "category": "Bacche",
    "locations": [
      "Castelia City"
    ]
  },
  {
    "id": "item-challenge-mode-only",
    "name": "**Challenge mode only.",
    "category": "Chiave & Utilità",
    "locations": [
      "Nimbasa City",
      "Driftveil City",
      "Mistralton City"
    ]
  },
  {
    "id": "item-easy-and-normal-mode-only",
    "name": "*Easy and Normal mode only.",
    "category": "Chiave & Utilità",
    "locations": [
      "Nimbasa City",
      "Driftveil City",
      "Mistralton City",
      "Opelucid City"
    ]
  },
  {
    "id": "item-old-amber",
    "name": "*Old Amber",
    "category": "Chiave & Utilità",
    "locations": [
      "Opelucid City"
    ]
  },
  {
    "id": "item-amulet-coin",
    "name": "Amulet Coin",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia City"
    ],
    "itemId": 223
  },
  {
    "id": "item-armor-fossil",
    "name": "Armor Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Driftveil Drawbridge",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-aura-sphere-victory-road",
    "name": "Aura Sphere Victory Road *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-balm-mushroom",
    "name": "Balm Mushroom",
    "category": "Chiave & Utilità",
    "locations": [
      "Pinwheel Forest",
      "Accumula Town"
    ]
  },
  {
    "id": "item-bicycle",
    "name": "Bicycle",
    "category": "Chiave & Utilità",
    "locations": [
      "Aspertia City"
    ],
    "itemId": 450
  },
  {
    "id": "item-big-root",
    "name": "Big Root",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 11"
    ]
  },
  {
    "id": "item-black-glasses",
    "name": "Black Glasses",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia City"
    ]
  },
  {
    "id": "item-blue-shard",
    "name": "Blue Shard",
    "category": "Chiave & Utilità",
    "locations": [
      "Relic Passage",
      "Desert Resort",
      "Clay Tunnel",
      "Reversal Mountain",
      "Route 13",
      "Seaside Cave",
      "Route 17"
    ]
  },
  {
    "id": "item-bright-powder",
    "name": "Bright Powder",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 13"
    ]
  },
  {
    "id": "item-brutal-swing-driftveil-city-marketplace",
    "name": "Brutal Swing Driftveil City Marketplace",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-bug-buzz-route-13",
    "name": "Bug Buzz Route 13 *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-calcium",
    "name": "Calcium",
    "category": "Chiave & Utilità",
    "locations": [
      "Reversal Mountain",
      "Abundant Shrine",
      "Seaside Cave",
      "Route 23",
      "Route 3",
      "Route 2"
    ]
  },
  {
    "id": "item-carbos",
    "name": "Carbos",
    "category": "Chiave & Utilità",
    "locations": [
      "Chargestone Cave",
      "Village Bridge",
      "Route 22",
      "Giant Chasm",
      "Dragonspiral Tower",
      "Wellspring Cave",
      "Route 2"
    ]
  },
  {
    "id": "item-claw-fossil",
    "name": "Claw Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Clay Tunnel",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-cleanse-tag",
    "name": "Cleanse Tag",
    "category": "Chiave & Utilità",
    "locations": [
      "Lentimas Town"
    ]
  },
  {
    "id": "item-comet-shard",
    "name": "Comet Shard",
    "category": "Chiave & Utilità",
    "locations": [
      "Dragonspiral Tower"
    ]
  },
  {
    "id": "item-cover-fossil",
    "name": "Cover Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Opelucid City"
    ]
  },
  {
    "id": "item-damp-rock",
    "name": "Damp Rock",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-dazzling-gleam-route-13",
    "name": "Dazzling Gleam Route 13 *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-deep-sea-tooth",
    "name": "Deep Sea Tooth",
    "category": "Chiave & Utilità",
    "locations": [
      "Desert Resort"
    ]
  },
  {
    "id": "item-destiny-knot",
    "name": "Destiny Knot",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia City"
    ]
  },
  {
    "id": "item-dire-hit",
    "name": "Dire Hit",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 20"
    ]
  },
  {
    "id": "item-dome-fossil",
    "name": "Dome Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Clay Tunnel",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-draco-plate",
    "name": "Draco Plate",
    "category": "Chiave & Utilità",
    "locations": [
      "Undella Bay"
    ]
  },
  {
    "id": "item-exp-share",
    "name": "Exp Share",
    "category": "Chiave & Utilità",
    "locations": [
      "Floccesy Ranch"
    ],
    "itemId": 216
  },
  {
    "id": "item-fluffy-tail",
    "name": "Fluffy Tail",
    "category": "Chiave & Utilità",
    "locations": [
      "Accumula Town"
    ]
  },
  {
    "id": "item-giga-drain-village-bridge",
    "name": "Giga Drain Village Bridge *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-gracidea",
    "name": "Gracidea",
    "category": "Chiave & Utilità",
    "locations": [
      "Striaton City"
    ]
  },
  {
    "id": "item-green-shard",
    "name": "Green Shard",
    "category": "Chiave & Utilità",
    "locations": [
      "Relic Passage",
      "Route 4",
      "Mistralton Cave",
      "Reversal Mountain",
      "Route 22",
      "Route 23",
      "Moor of Icirrus",
      "Pinwheel Forest"
    ]
  },
  {
    "id": "item-grip-claw",
    "name": "Grip Claw",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 4",
      "Lostlorn Forest"
    ]
  },
  {
    "id": "item-heat-rock",
    "name": "Heat Rock",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 22",
      "Route 8"
    ]
  },
  {
    "id": "item-helix-fossil",
    "name": "Helix Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Clay Tunnel",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-hp-up",
    "name": "HP Up",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia Sewers",
      "Route 11",
      "Route 9",
      "Route 23",
      "Route 15",
      "Pinwheel Forest",
      "Dreamyard"
    ]
  },
  {
    "id": "item-hurricane-victory-road",
    "name": "Hurricane Victory Road *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-icy-rock",
    "name": "Icy Rock",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 8"
    ]
  },
  {
    "id": "item-infestation-floccesy-ranch",
    "name": "Infestation Floccesy Ranch *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-iron",
    "name": "Iron",
    "category": "Chiave & Utilità",
    "locations": [
      "Clay Tunnel",
      "Mistralton City",
      "Route 23",
      "Victory Road",
      "Dreamyard",
      "Route 18"
    ]
  },
  {
    "id": "item-king-39-s-rock",
    "name": "King&#39;s Rock",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 6",
      "Route 7",
      "Nuvema Town"
    ]
  },
  {
    "id": "item-link-cable",
    "name": "Link Cable",
    "category": "Chiave & Utilità",
    "locations": [
      "Driftveil City",
      "Mistralton Cave",
      "Celestial Tower",
      "Abundant Shrine",
      "Wellspring Cave"
    ]
  },
  {
    "id": "item-lucky-egg",
    "name": "Lucky Egg",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia City",
      "Celestial Tower"
    ],
    "itemId": 231
  },
  {
    "id": "item-lucky-punch",
    "name": "Lucky Punch",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia City"
    ]
  },
  {
    "id": "item-lunar-wing",
    "name": "Lunar Wing",
    "category": "Chiave & Utilità",
    "locations": [
      "Strange House"
    ]
  },
  {
    "id": "item-macho-brace",
    "name": "Macho Brace",
    "category": "Chiave & Utilità",
    "locations": [
      "Nimbasa City"
    ],
    "itemId": 215
  },
  {
    "id": "item-master-ball",
    "name": "Master Ball",
    "category": "Chiave & Utilità",
    "locations": [
      "Mistralton City",
      "Undella Town",
      "Plasma Frigate"
    ]
  },
  {
    "id": "item-metal-powder",
    "name": "Metal Powder",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia Sewers"
    ],
    "itemId": 257
  },
  {
    "id": "item-modified-marts",
    "name": "Modified Marts",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 18"
    ]
  },
  {
    "id": "item-modified-tms-43-locations",
    "name": "Modified TMs &#43; Locations",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-mystical-fire-route-13",
    "name": "Mystical Fire Route 13 *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-never-melt-ice",
    "name": "Never Melt Ice",
    "category": "Chiave & Utilità",
    "locations": [
      "Giant Chasm",
      "Dragonspiral Tower"
    ]
  },
  {
    "id": "item-now-sells",
    "name": "Now sells:",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 9 Shopping Mall"
    ]
  },
  {
    "id": "item-odd-incense",
    "name": "Odd Incense",
    "category": "Chiave & Utilità",
    "locations": [
      "Celestial Tower"
    ]
  },
  {
    "id": "item-old-amber",
    "name": "Old Amber",
    "category": "Chiave & Utilità",
    "locations": [
      "Twist Mountain"
    ]
  },
  {
    "id": "item-old-gateau",
    "name": "Old Gateau",
    "category": "Chiave & Utilità",
    "locations": [
      "Dragonspiral Tower"
    ]
  },
  {
    "id": "item-old-sea-map",
    "name": "Old Sea Map",
    "category": "Chiave & Utilità",
    "locations": [
      "Victory Road"
    ]
  },
  {
    "id": "item-permit",
    "name": "Permit",
    "category": "Chiave & Utilità",
    "locations": [
      "Nuvema Town"
    ]
  },
  {
    "id": "item-plasma-grunt-now-sells",
    "name": "Plasma Grunt now sells:",
    "category": "Chiave & Utilità",
    "locations": [
      "Driftveil Market"
    ]
  },
  {
    "id": "item-play-rough-relic-passage",
    "name": "Play Rough Relic Passage *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-plume-fossil",
    "name": "Plume Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Opelucid City"
    ]
  },
  {
    "id": "item-pok-doll",
    "name": "Poké Doll",
    "category": "Chiave & Utilità",
    "locations": [
      "Accumula Town"
    ]
  },
  {
    "id": "item-poke-toy",
    "name": "Poke Toy",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 4"
    ]
  },
  {
    "id": "item-power-up-punch-virbank-complex",
    "name": "Power-Up Punch Virbank Complex *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-pp-max",
    "name": "PP Max",
    "category": "Chiave & Utilità",
    "locations": [
      "Abundant Shrine",
      "Dragonspiral Tower",
      "Pinwheel Forest",
      "Route 2",
      "Route 18"
    ]
  },
  {
    "id": "item-pp-up",
    "name": "PP Up",
    "category": "Chiave & Utilità",
    "locations": [
      "Reversal Mountain",
      "Route 12",
      "Village Bridge",
      "Route 22",
      "Route 21",
      "Giant Chasm",
      "Route 23",
      "Striaton City",
      "Dreamyard"
    ]
  },
  {
    "id": "item-protein",
    "name": "Protein",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 6",
      "Route 14",
      "Humilau City",
      "Dragonspiral Tower",
      "N&#39;s Castle",
      "Route 1"
    ]
  },
  {
    "id": "item-rare-candy",
    "name": "Rare Candy",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 20",
      "Castelia City",
      "Strange House",
      "Abundant Shrine",
      "Route 12",
      "Village Bridge",
      "Route 22",
      "Seaside Cave",
      "Route 23",
      "Victory Road",
      "Route 8",
      "Moor of Icirrus",
      "Pinwheel Forest",
      "Twist Mountain",
      "Route 3",
      "Dreamyard",
      "Route 18"
    ]
  },
  {
    "id": "item-red-shard",
    "name": "Red Shard",
    "category": "Chiave & Utilità",
    "locations": [
      "Relic Passage",
      "Route 4",
      "Desert Resort",
      "Nimbasa City",
      "Route 22",
      "Victory Road",
      "Dragonspiral Tower",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-rock-climb-route-9",
    "name": "Rock Climb Route 9 *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-root-fossil",
    "name": "Root Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Clay Tunnel",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-sacred-ash",
    "name": "Sacred Ash",
    "category": "Chiave & Utilità",
    "locations": [
      "Nuvema Town"
    ]
  },
  {
    "id": "item-sea-incense",
    "name": "Sea Incense",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-secondary-mart-now-sells",
    "name": "Secondary Mart now sells:",
    "category": "Chiave & Utilità",
    "locations": [
      "Virbank City",
      "Castelia City",
      "Driftveil City",
      "Humilau City"
    ]
  },
  {
    "id": "item-shiny-charm",
    "name": "Shiny Charm",
    "category": "Chiave & Utilità",
    "locations": [
      "Nuvema Town"
    ]
  },
  {
    "id": "item-shoal-salt",
    "name": "Shoal Salt",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 17"
    ]
  },
  {
    "id": "item-shoal-shell",
    "name": "Shoal Shell",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 17"
    ]
  },
  {
    "id": "item-silver-powder",
    "name": "Silver Powder",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 6"
    ]
  },
  {
    "id": "item-skull-fossil",
    "name": "Skull Fossil",
    "category": "Chiave & Utilità",
    "locations": [
      "Driftveil Drawbridge",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-smoke-ball",
    "name": "Smoke Ball",
    "category": "Chiave & Utilità",
    "locations": [
      "Virbank City"
    ]
  },
  {
    "id": "item-smooth-rock",
    "name": "Smooth Rock",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 8"
    ]
  },
  {
    "id": "item-soothe-bell",
    "name": "Soothe Bell",
    "category": "Chiave & Utilità",
    "locations": [
      "Floccesy Ranch",
      "Nimbasa City"
    ],
    "itemId": 218
  },
  {
    "id": "item-splash-plate",
    "name": "Splash Plate",
    "category": "Chiave & Utilità",
    "locations": [
      "Undella Bay"
    ]
  },
  {
    "id": "item-super-rod",
    "name": "Super Rod",
    "category": "Chiave & Utilità",
    "locations": [
      "Route 20"
    ],
    "itemId": 447
  },
  {
    "id": "item-tm-move-location-in-redux",
    "name": "TM # Move Location in Redux",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-tri-attack-route-6",
    "name": "Tri Attack Route 6 *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-twisted-spoon",
    "name": "Twisted Spoon",
    "category": "Chiave & Utilità",
    "locations": [
      "Castelia Sewers"
    ]
  },
  {
    "id": "item-wave-crash-humilau-city-gym",
    "name": "Wave Crash Humilau City Gym *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-weather-ball-lacunosa-town",
    "name": "Weather Ball Lacunosa Town *",
    "category": "Chiave & Utilità",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-yellow-shard",
    "name": "Yellow Shard",
    "category": "Chiave & Utilità",
    "locations": [
      "Relic Passage",
      "Route 4",
      "Chargestone Cave",
      "Giant Chasm",
      "Route 23",
      "Twist Mountain",
      "Striaton City"
    ]
  },
  {
    "id": "item-zinc",
    "name": "Zinc",
    "category": "Chiave & Utilità",
    "locations": [
      "PWT",
      "Route 13",
      "Plasma Frigate",
      "Route 3",
      "Nuvema Town",
      "Route 18"
    ]
  },
  {
    "id": "item-air-balloon",
    "name": "**Air Balloon",
    "category": "Difesa & Tattici",
    "locations": [
      "Mistralton City"
    ]
  },
  {
    "id": "item-absorb-bulb",
    "name": "Absorb Bulb",
    "category": "Difesa & Tattici",
    "locations": [
      "Opelucid City"
    ],
    "itemId": 545
  },
  {
    "id": "item-air-balloon",
    "name": "Air Balloon*",
    "category": "Difesa & Tattici",
    "locations": [
      "Driftveil City"
    ]
  },
  {
    "id": "item-binding-band",
    "name": "Binding Band",
    "category": "Difesa & Tattici",
    "locations": [
      "Floccesy Ranch"
    ],
    "itemId": 544
  },
  {
    "id": "item-black-sludge",
    "name": "Black Sludge",
    "category": "Difesa & Tattici",
    "locations": [
      "Castelia Sewers"
    ],
    "itemId": 281
  },
  {
    "id": "item-cell-battery",
    "name": "Cell Battery",
    "category": "Difesa & Tattici",
    "locations": [
      "Chargestone Cave"
    ],
    "itemId": 546
  },
  {
    "id": "item-eject-button",
    "name": "Eject Button",
    "category": "Difesa & Tattici",
    "locations": [
      "Mistralton City",
      "Plasma Frigate",
      "Twist Mountain"
    ],
    "itemId": 547
  },
  {
    "id": "item-eviolite",
    "name": "Eviolite",
    "category": "Difesa & Tattici",
    "locations": [
      "Castelia City"
    ],
    "itemId": 538
  },
  {
    "id": "item-focus-band",
    "name": "Focus Band",
    "category": "Difesa & Tattici",
    "locations": [
      "Virbank City"
    ],
    "itemId": 230
  },
  {
    "id": "item-iron-ball",
    "name": "Iron Ball",
    "category": "Difesa & Tattici",
    "locations": [
      "Trainer School",
      "Driftveil City"
    ],
    "itemId": 278
  },
  {
    "id": "item-lagging-tail",
    "name": "Lagging Tail",
    "category": "Difesa & Tattici",
    "locations": [
      "Virbank City",
      "Route 14"
    ],
    "itemId": 279
  },
  {
    "id": "item-leftovers",
    "name": "Leftovers",
    "category": "Difesa & Tattici",
    "locations": [
      "Castelia City"
    ],
    "itemId": 234
  },
  {
    "id": "item-light-clay",
    "name": "Light Clay",
    "category": "Difesa & Tattici",
    "locations": [
      "Chargestone Cave"
    ],
    "itemId": 269
  },
  {
    "id": "item-mental-herb",
    "name": "Mental Herb",
    "category": "Difesa & Tattici",
    "locations": [
      "Virbank Complex",
      "Celestial Tower"
    ],
    "itemId": 219
  },
  {
    "id": "item-quick-claw",
    "name": "Quick Claw",
    "category": "Difesa & Tattici",
    "locations": [
      "Floccesy Ranch"
    ],
    "itemId": 217
  },
  {
    "id": "item-red-card",
    "name": "Red Card",
    "category": "Difesa & Tattici",
    "locations": [
      "Plasma Frigate"
    ],
    "itemId": 542
  },
  {
    "id": "item-ring-target",
    "name": "Ring Target",
    "category": "Difesa & Tattici",
    "locations": [
      "Opelucid City"
    ],
    "itemId": 543
  },
  {
    "id": "item-rocky-helmet",
    "name": "Rocky Helmet",
    "category": "Difesa & Tattici",
    "locations": [
      "PWT"
    ],
    "itemId": 540
  },
  {
    "id": "item-shed-shell",
    "name": "Shed Shell",
    "category": "Difesa & Tattici",
    "locations": [
      "Strange House"
    ],
    "itemId": 295
  },
  {
    "id": "item-shell-bell",
    "name": "Shell Bell",
    "category": "Difesa & Tattici",
    "locations": [
      "Nimbasa City",
      "Driftveil City"
    ],
    "itemId": 253
  },
  {
    "id": "item-dawn-stone",
    "name": "Dawn Stone",
    "category": "Evoluzione",
    "locations": [
      "Route 16",
      "Moor of Icirrus",
      "Dreamyard",
      "Route 2"
    ],
    "itemId": 109
  },
  {
    "id": "item-deep-sea-scale",
    "name": "Deep Sea Scale",
    "category": "Evoluzione",
    "locations": [
      "Desert Resort"
    ]
  },
  {
    "id": "item-dragon-scale",
    "name": "Dragon Scale",
    "category": "Evoluzione",
    "locations": [
      "Mistralton Cave",
      "Victory Road"
    ],
    "itemId": 235
  },
  {
    "id": "item-dubious-disc",
    "name": "Dubious Disc",
    "category": "Evoluzione",
    "locations": [
      "Opelucid City"
    ],
    "itemId": 324
  },
  {
    "id": "item-dusk-stone",
    "name": "Dusk Stone",
    "category": "Evoluzione",
    "locations": [
      "Strange House",
      "Victory Road",
      "Wellspring Cave",
      "Twist Mountain"
    ],
    "itemId": 108
  },
  {
    "id": "item-electirizer",
    "name": "Electirizer",
    "category": "Evoluzione",
    "locations": [
      "Village Bridge"
    ],
    "itemId": 322
  },
  {
    "id": "item-everstone",
    "name": "Everstone",
    "category": "Evoluzione",
    "locations": [
      "Driftveil City"
    ]
  },
  {
    "id": "item-fire-stone",
    "name": "Fire Stone",
    "category": "Evoluzione",
    "locations": [
      "Desert Resort",
      "Lentimas Town"
    ],
    "itemId": 82
  },
  {
    "id": "item-float-stone",
    "name": "Float Stone",
    "category": "Evoluzione",
    "locations": [
      "Castelia City",
      "Twist Mountain"
    ],
    "itemId": 539
  },
  {
    "id": "item-hard-stone",
    "name": "Hard Stone",
    "category": "Evoluzione",
    "locations": [
      "Castelia Sewers",
      "Relic Passage",
      "Desert Resort",
      "Lostlorn Forest",
      "Chargestone Cave",
      "Clay Tunnel",
      "Mistralton Cave",
      "Mistralton City",
      "Celestial Tower",
      "Reversal Mountain",
      "Route 9",
      "Giant Chasm",
      "Victory Road",
      "Pinwheel Forest",
      "Dreamyard",
      "Accumula Town"
    ],
    "itemId": 238
  },
  {
    "id": "item-heart-scale",
    "name": "Heart Scale",
    "category": "Evoluzione",
    "locations": [
      "Route 20",
      "Castelia Sewers",
      "Desert Resort",
      "Relic Castle",
      "Driftveil City",
      "Route 6",
      "Undella Town",
      "Undella Bay",
      "Route 13",
      "Humilau City",
      "Seaside Cave",
      "Route 23",
      "Moor of Icirrus",
      "Route 18"
    ]
  },
  {
    "id": "item-ice-stone",
    "name": "Ice Stone",
    "category": "Evoluzione",
    "locations": [
      "Nimbasa City",
      "Twist Mountain"
    ]
  },
  {
    "id": "item-leaf-stone",
    "name": "Leaf Stone",
    "category": "Evoluzione",
    "locations": [
      "Lostlorn Forest",
      "Route 7",
      "Pinwheel Forest"
    ],
    "itemId": 85
  },
  {
    "id": "item-magma-stone",
    "name": "Magma Stone",
    "category": "Evoluzione",
    "locations": [
      "Route 18"
    ]
  },
  {
    "id": "item-magmarizer",
    "name": "Magmarizer",
    "category": "Evoluzione",
    "locations": [
      "Village Bridge"
    ],
    "itemId": 323
  },
  {
    "id": "item-metal-coat",
    "name": "Metal Coat",
    "category": "Evoluzione",
    "locations": [
      "Chargestone Cave",
      "Clay Tunnel"
    ],
    "itemId": 233
  },
  {
    "id": "item-moon-stone",
    "name": "Moon Stone",
    "category": "Evoluzione",
    "locations": [
      "Route 6",
      "Giant Chasm",
      "Dreamyard"
    ],
    "itemId": 81
  },
  {
    "id": "item-oval-charm",
    "name": "Oval Charm",
    "category": "Evoluzione",
    "locations": [
      "Nuvema Town"
    ]
  },
  {
    "id": "item-prism-scale",
    "name": "Prism Scale",
    "category": "Evoluzione",
    "locations": [
      "Route 4",
      "Route 1",
      "Route 18"
    ],
    "itemId": 537
  },
  {
    "id": "item-protector",
    "name": "Protector",
    "category": "Evoluzione",
    "locations": [
      "Victory Road",
      "Wellspring Cave"
    ],
    "itemId": 321
  },
  {
    "id": "item-razor-claw",
    "name": "Razor Claw",
    "category": "Evoluzione",
    "locations": [
      "Giant Chasm"
    ],
    "itemId": 326
  },
  {
    "id": "item-razor-fang",
    "name": "Razor Fang",
    "category": "Evoluzione",
    "locations": [
      "Route 11"
    ],
    "itemId": 327
  },
  {
    "id": "item-reaper-cloth",
    "name": "Reaper Cloth",
    "category": "Evoluzione",
    "locations": [
      "Clay Tunnel",
      "Victory Road",
      "Dreamyard"
    ],
    "itemId": 325
  },
  {
    "id": "item-shiny-stone",
    "name": "Shiny Stone",
    "category": "Evoluzione",
    "locations": [
      "Route 6",
      "Undella Town",
      "Abundant Shrine",
      "Dragonspiral Tower",
      "Twist Mountain"
    ],
    "itemId": 107
  },
  {
    "id": "item-sun-stone",
    "name": "Sun Stone",
    "category": "Evoluzione",
    "locations": [
      "Desert Resort",
      "Relic Castle",
      "Giant Chasm",
      "Pinwheel Forest"
    ],
    "itemId": 80
  },
  {
    "id": "item-thunder-stone",
    "name": "Thunder Stone",
    "category": "Evoluzione",
    "locations": [
      "Nimbasa City",
      "Chargestone Cave"
    ]
  },
  {
    "id": "item-up-grade",
    "name": "Up-Grade",
    "category": "Evoluzione",
    "locations": [
      "Castelia City",
      "Pinwheel Forest",
      "Striaton City"
    ],
    "itemId": 252
  },
  {
    "id": "item-water-stone",
    "name": "Water Stone",
    "category": "Evoluzione",
    "locations": [
      "Route 19",
      "Clay Tunnel"
    ],
    "itemId": 84
  },
  {
    "id": "item-choice-scarf",
    "name": "*Choice Scarf",
    "category": "Offensivi",
    "locations": [
      "Mistralton City"
    ]
  },
  {
    "id": "item-black-belt",
    "name": "Black Belt",
    "category": "Offensivi",
    "locations": [
      "Village Bridge",
      "Route 23"
    ],
    "itemId": 241
  },
  {
    "id": "item-charcoal",
    "name": "Charcoal",
    "category": "Offensivi",
    "locations": [
      "Castelia City"
    ],
    "itemId": 249
  },
  {
    "id": "item-choice-band",
    "name": "Choice Band",
    "category": "Offensivi",
    "locations": [
      "Tubeline Bridge"
    ],
    "itemId": 220
  },
  {
    "id": "item-choice-band",
    "name": "Choice Band*",
    "category": "Offensivi",
    "locations": [
      "Nimbasa City"
    ]
  },
  {
    "id": "item-choice-scarf",
    "name": "Choice Scarf",
    "category": "Offensivi",
    "locations": [
      "Aspertia City",
      "Route 8"
    ],
    "itemId": 287
  },
  {
    "id": "item-choice-specs",
    "name": "Choice Specs",
    "category": "Offensivi",
    "locations": [
      "Dragonspiral Tower"
    ],
    "itemId": 297
  },
  {
    "id": "item-choice-specs",
    "name": "Choice Specs*",
    "category": "Offensivi",
    "locations": [
      "Driftveil City"
    ]
  },
  {
    "id": "item-dragon-fang",
    "name": "Dragon Fang",
    "category": "Offensivi",
    "locations": [
      "Mistralton Cave",
      "Victory Road"
    ],
    "itemId": 250
  },
  {
    "id": "item-expert-belt",
    "name": "Expert Belt",
    "category": "Offensivi",
    "locations": [
      "Route 19",
      "Driftveil City"
    ],
    "itemId": 268
  },
  {
    "id": "item-flame-orb",
    "name": "Flame Orb",
    "category": "Offensivi",
    "locations": [
      "Castelia Sewers",
      "N&#39;s Castle"
    ],
    "itemId": 273
  },
  {
    "id": "item-life-orb",
    "name": "Life Orb",
    "category": "Offensivi",
    "locations": [
      "Route 4"
    ],
    "itemId": 270
  },
  {
    "id": "item-light-ball",
    "name": "Light Ball",
    "category": "Offensivi",
    "locations": [
      "Castelia City"
    ],
    "itemId": 236
  },
  {
    "id": "item-magnet",
    "name": "Magnet",
    "category": "Offensivi",
    "locations": [
      "Chargestone Cave"
    ],
    "itemId": 242
  },
  {
    "id": "item-metronome",
    "name": "Metronome",
    "category": "Offensivi",
    "locations": [
      "Route 5",
      "Accumula Town"
    ],
    "itemId": 277
  },
  {
    "id": "item-miracle-seed",
    "name": "Miracle Seed",
    "category": "Offensivi",
    "locations": [
      "Route 20"
    ],
    "itemId": 239
  },
  {
    "id": "item-muscle-band",
    "name": "Muscle Band",
    "category": "Offensivi",
    "locations": [
      "Floccesy Town"
    ],
    "itemId": 266
  },
  {
    "id": "item-mystic-water",
    "name": "Mystic Water",
    "category": "Offensivi",
    "locations": [
      "Humilau City"
    ],
    "itemId": 243
  },
  {
    "id": "item-poison-barb",
    "name": "Poison Barb",
    "category": "Offensivi",
    "locations": [
      "Route 12",
      "Route 22"
    ],
    "itemId": 245
  },
  {
    "id": "item-power-gem-route-16",
    "name": "Power Gem Route 16",
    "category": "Offensivi",
    "locations": [
      "Humilau City"
    ]
  },
  {
    "id": "item-scope-lens",
    "name": "Scope Lens",
    "category": "Offensivi",
    "locations": [
      "Virbank Complex"
    ],
    "itemId": 232
  },
  {
    "id": "item-sharp-beak",
    "name": "Sharp Beak",
    "category": "Offensivi",
    "locations": [
      "Mistralton City"
    ],
    "itemId": 244
  },
  {
    "id": "item-silk-scarf",
    "name": "Silk Scarf",
    "category": "Offensivi",
    "locations": [
      "Route 20"
    ],
    "itemId": 251
  },
  {
    "id": "item-soft-sand",
    "name": "Soft Sand",
    "category": "Offensivi",
    "locations": [
      "Desert Resort"
    ],
    "itemId": 237
  },
  {
    "id": "item-spell-tag",
    "name": "Spell Tag",
    "category": "Offensivi",
    "locations": [
      "Strange House"
    ],
    "itemId": 247
  },
  {
    "id": "item-stick",
    "name": "Stick",
    "category": "Offensivi",
    "locations": [
      "Route 12"
    ],
    "itemId": 259
  },
  {
    "id": "item-sticky-barb",
    "name": "Sticky Barb",
    "category": "Offensivi",
    "locations": [
      "Route 20"
    ],
    "itemId": 288
  },
  {
    "id": "item-thick-club",
    "name": "Thick Club",
    "category": "Offensivi",
    "locations": [
      "Castelia City"
    ],
    "itemId": 258
  },
  {
    "id": "item-toxic-orb",
    "name": "Toxic Orb",
    "category": "Offensivi",
    "locations": [
      "Castelia Sewers",
      "Moor of Icirrus"
    ],
    "itemId": 272
  },
  {
    "id": "item-wide-lens",
    "name": "Wide Lens",
    "category": "Offensivi",
    "locations": [
      "Route 4"
    ],
    "itemId": 265
  },
  {
    "id": "item-wise-glasses",
    "name": "Wise Glasses",
    "category": "Offensivi",
    "locations": [
      "Virbank Complex"
    ],
    "itemId": 267
  },
  {
    "id": "item-zoom-lens",
    "name": "Zoom Lens",
    "category": "Offensivi",
    "locations": [
      "Plasma Frigate"
    ],
    "itemId": 276
  }
];

export const BB2_GAME_MILESTONES: GameMilestone[] = [
  // ======================== PALESTRE (8) ========================
  { id: 'gym-1', phase: 'Palestre', title: '1ª Palestra — Cheren (Medaglia Base)', location: 'Alisopoli', levelCap: 13, badgeIndex: 0, spoilerStage: 0, reward: 'MT83 Cuordileone (Work Up)' },
  { id: 'gym-2', phase: 'Palestre', title: '2ª Palestra — Veleno / Roxie (Medaglia Tossina)', location: 'Zondopoli', levelCap: 19, badgeIndex: 1, spoilerStage: 0, reward: 'MT09 Velenoshock (Venoshock)' },
  { id: 'gym-3', phase: 'Palestre', title: '3ª Palestra — Artemisio / Burgh (Medaglia Scarabeo)', location: 'Austropoli', levelCap: 25, badgeIndex: 2, spoilerStage: 1, reward: 'MT76 Entomoscontro (Struggle Bug)' },
  { id: 'gym-4', phase: 'Palestre', title: '4ª Palestra — Camelia / Elesa (Medaglia Volt)', location: 'Sciroccopoli', levelCap: 32, badgeIndex: 3, spoilerStage: 1, reward: 'MT72 Invertivolt (Volt Switch)' },
  { id: 'gym-5', phase: 'Palestre', title: '5ª Palestra — Rafan / Clay (Medaglia Sisma)', location: 'Libecciopoli', levelCap: 38, badgeIndex: 4, spoilerStage: 1, reward: 'MT78 Battiterra (Bulldoze)' },
  { id: 'gym-6', phase: 'Palestre', title: '6ª Palestra — Anemone / Skyla (Medaglia Jet)', location: 'Ponentopoli', levelCap: 44, badgeIndex: 5, spoilerStage: 2, reward: 'MT62 Acrobazia (Acrobatics)' },
  { id: 'gym-7', phase: 'Palestre', title: '7ª Palestra — Aristide / Drayden (Medaglia Leggenda)', location: 'Boredupoli', levelCap: 53, badgeIndex: 6, spoilerStage: 2, reward: 'MT82 Codadrago (Dragon Tail)' },
  { id: 'gym-8', phase: 'Palestre', title: '8ª Palestra — Ciprian / Marlon (Medaglia Onda)', location: 'Grecalopoli', levelCap: 57, badgeIndex: 7, spoilerStage: 2, reward: 'MT55 Idrovampata (Scald)' },

  // ======================== STORIA (7) ========================
  { id: 'story-keyguy', phase: 'Storia', title: 'Key Gift Guy & Preparazione Eventi Redux', location: 'Alisopoli (Centro Pokémon / Casa)', spoilerStage: 0, reward: 'Chiavi Challenge Mode & sblocco script leggendari', notes: 'Parla subito con il Key Gift Guy ad Alisopoli per non bloccare eventi successivi.' },
  { id: 'story-sewers', phase: 'Storia', title: 'Fogne di Austropoli & Primo Scontro con Acromo', location: 'Austropoli / Percorso 4', levelCap: 26, spoilerStage: 1, reward: 'Accesso a Deserto Quiete e Sciroccopoli' },
  { id: 'story-pwt-driftveil', phase: 'Storia', title: 'Pokémon World Tournament — Torneo di Libecciopoli', location: 'Libecciopoli (Arena PWT)', levelCap: 38, spoilerStage: 1, reward: 'Sblocco Tornei Noleggio/Tipo PWT & primi Punti Lotta (PL)', notes: 'Torneo di storia contro Komor, Acromo e Toni dopo la 5ª Palestra.' },
  { id: 'story-driftveil', phase: 'Storia', title: 'Nave Plasma a Libecciopoli & Castel Sepolto', location: 'Libecciopoli / Percorso 6', levelCap: 39, spoilerStage: 1, reward: 'Avanzamento verso Cava Pietraelettrica e Ponentopoli' },
  { id: 'story-opelucid', phase: 'Storia', title: 'Assalto Plasma a Boredupoli — Zinzolin & Trio Oscuro', location: 'Boredupoli', levelCap: 54, spoilerStage: 2, reward: 'Difesa del Cuneo DNA e via verso Grecalopoli' },
  { id: 'story-colress', phase: 'Storia', title: 'Fregata Plasma — Scontro Finale con Acromo', location: 'Grecalopoli / Fossa Gigante', levelCap: 60, spoilerStage: 3, reward: 'Accesso al nucleo ghiacciato della Fossa Gigante' },
  { id: 'story-ghetsis', phase: 'Storia', title: 'Fossa Gigante — Fusione di Kyurem & Ghecis', location: 'Fossa Gigante', levelCap: 62, spoilerStage: 3, reward: 'Salvataggio di Unima & via alla Via Vittoria' },
  { id: 'story-victory-road', phase: 'Storia', title: 'Via Vittoria — Sfida Finale del Rivale Toni (Hugh)', location: 'Via Vittoria', levelCap: 68, spoilerStage: 3, reward: 'Accesso diretto alla Lega Pokémon di Unima' },

  // ======================== LEGA & POST-GAME (17) ========================
  { id: 'post-league', phase: 'Lega & Post-Game', title: 'Superquattro & Campionessa Iris (Round 1)', location: 'Lega Pokémon di Unima', levelCap: 78, spoilerStage: 3, reward: 'Sala d’Onore & sblocco completo Post-Game di Unima' },
  { id: 'post-league-rematch', phase: 'Lega & Post-Game', title: 'Rivincita Lega Pokémon Redux (Team Lv.85+)', location: 'Lega Pokémon di Unima', levelCap: 88, spoilerStage: 4, reward: 'Sfida competitiva ai Superquattro & Iris potenziati' },
  { id: 'post-subway-normal', phase: 'Lega & Post-Game', title: 'Metropolitana Lotta — Treno Singolo / Doppio (21ª Sfida)', location: 'Sciroccopoli — Stazione Ruota', levelCap: 50, spoilerStage: 2, reward: 'Vittoria su Andy (Ingo) & Torn (Emmet) · PL per strumenti Choice & Assorbisfera', notes: 'Squadre scalate al Lv.50: utile già da metà run per ottenere Punti Lotta (PL).' },
  { id: 'post-pwt-subway', phase: 'Lega & Post-Game', title: 'Super Metropolitana Lotta — Treni Super (49ª Sfida)', location: 'Sciroccopoli — Stazione Ruota (Post-Game)', levelCap: 50, spoilerStage: 4, reward: 'Vittoria su Super Andy & Super Torn · Trofei Stazione & Bacche rare', notes: 'Modalità Super Singolo, Super Doppio e Super Multi con set competitivi e 49+ vittorie di fila.' },
  { id: 'post-pwt-regional', phase: 'Lega & Post-Game', title: 'Pokémon World Tournament (PWT) — Tornei Regionali & World Leaders', location: 'Libecciopoli — Arena PWT', levelCap: 50, spoilerStage: 4, reward: 'Tornei Capipalestra di Unima, Kanto, Johto, Hoenn & Sinnoh + PL rapidi', notes: 'Vinci tutti i tornei regionali dei Capipalestra per accedere al Torneo Mondiale Capipalestra.' },
  { id: 'post-pwt-champions', phase: 'Lega & Post-Game', title: 'Pokémon World Tournament (PWT) — Torneo dei Campioni Mondiali', location: 'Libecciopoli — Arena PWT', levelCap: 50, spoilerStage: 4, reward: 'Scontro con Rosso (Red), Blu, Camilla, Lance, Rocco & Adriano', notes: 'Si sblocca dopo 10 vittorie nel Torneo Mondiale Capipalestra (Singolo, Doppio, Triplo o Rotazione).' },
  { id: 'post-bronius', phase: 'Lega & Post-Game', title: 'Dialogo con Bronius — Leggenda degli Uccelli di Kanto', location: 'Dopo Ponte Freccialuce / Area Unima', spoilerStage: 4, reward: 'Sblocco incontri Articuno, Zapdos & Moltres' },
  { id: 'post-n', phase: 'Lega & Post-Game', title: 'Castello di N — Rivincita Stagionale & Drago Eroe', location: 'Castello di N (Via Vittoria)', levelCap: 80, spoilerStage: 4, reward: 'Sfera Luce / Sfera Buio & evento Isola di Mew' },
  { id: 'post-cynthia', phase: 'Lega & Post-Game', title: 'Villa di Spiraria — Sfida a Camilla (Cynthia)', location: 'Spiraria', levelCap: 82, spoilerStage: 4, reward: 'Rivincite stagionali di alto livello a Spiraria' },
  { id: 'post-alder', phase: 'Lega & Post-Game', title: 'Venturia — Sfida all’ex Campione Nardo (Alder)', location: 'Casa di Nardo (Venturia)', levelCap: 80, spoilerStage: 4, reward: 'Sblocco sfida al nipote Benga in Torre Nera / Antro Bianco' },
  { id: 'post-tower', phase: 'Lega & Post-Game', title: 'Torre Nera / Antro Bianco — Scala 10 Piani & Benga', location: 'Città Nera / Foresta Bianca', levelCap: 85, spoilerStage: 4, reward: 'Dratini o Gible Shiny da Benga a Venturia' },
  { id: 'post-colress-rematch', phase: 'Lega & Post-Game', title: 'Laboratorio P2 — Rivincita Quotidiana con Acromo', location: 'Fregata Plasma (Laboratorio P2)', levelCap: 80, spoilerStage: 4, reward: 'Master Ball / Oggetti rari e sblocco Genesect' },
  { id: 'post-shadow-triad', phase: 'Lega & Post-Game', title: 'Mistralopoli — Rivincita contro il Trio Oscuro', location: 'Mistralopoli', levelCap: 78, spoilerStage: 4, reward: 'Polvere Segreta (accesso a Keldeo al Bosco Giuramento)' },
  { id: 'post-striaton-trio', phase: 'Lega & Post-Game', title: 'Palestra di Levantopoli — Spighetto, Chicco e Maisello', location: 'Levantopoli', levelCap: 78, spoilerStage: 4, reward: 'Sfera Rossa, Sfera Blu & Sfera Verde (Trio Meteo)' },
  { id: 'post-blue', phase: 'Lega & Post-Game', title: 'Falda Sotterranea — Sfida al Campione Blu (Blue)', location: 'Falda Sotterranea (Piano Inferiore)', levelCap: 83, spoilerStage: 4, reward: 'Accesso alla sala segreta di Mewtwo' },
  { id: 'post-gamefreak', phase: 'Lega & Post-Game', title: 'Sede Game Freak — Shigeki Morimoto & Koji Nishino', location: 'Austropoli (Edificio Game Freak)', levelCap: 84, spoilerStage: 4, reward: 'Sfida giornaliera agli sviluppatori' },
  { id: 'post-unity-looker', phase: 'Lega & Post-Game', title: 'Questline Torre Unità — Bellocchio & Anomalia Dimensionale', location: 'Torre Unità (Barca da Austropoli)', levelCap: 86, spoilerStage: 4, reward: 'Sblocco Trio della Creazione & Arceus' },
  { id: 'post-nature-preserve', phase: 'Lega & Post-Game', title: 'Pokédex di Unima Visto Completo — Riserva Naturale', location: 'Riserva Naturale (Aereo da Ponentopoli)', levelCap: 60, spoilerStage: 4, reward: 'Haxorus Shiny selvatico & Master Ball extra' },

  // ======================== CATTURE LEGGENDARIE (23) ========================
  { id: 'leg-victini', phase: 'Catture Leggendarie', title: 'Victini (#494)', location: 'Isola Libertà (Faro / Sotterraneo)', speciesIds: [494], spoilerStage: 1, reward: 'Fuoco/Psico con Generatore V' },
  { id: 'leg-cobalion', phase: 'Catture Leggendarie', title: 'Cobalion (#638)', location: 'Percorso 13', speciesIds: [638], spoilerStage: 2, reward: 'Spadaccino Acciaio/Lotta' },
  { id: 'leg-terrakion', phase: 'Catture Leggendarie', title: 'Terrakion (#639)', location: 'Percorso 22', speciesIds: [639], spoilerStage: 2, reward: 'Spadaccino Roccia/Lotta' },
  { id: 'leg-virizion', phase: 'Catture Leggendarie', title: 'Virizion (#640)', location: 'Percorso 11', speciesIds: [640], spoilerStage: 2, reward: 'Spadaccino Erba/Lotta' },
  { id: 'leg-jirachi', phase: 'Catture Leggendarie', title: 'Jirachi (#385)', location: 'Cantiere dei Sogni (Dreamyard)', speciesIds: [385], spoilerStage: 4, reward: 'Acciaio/Psico Post-Game Redux' },
  { id: 'leg-meloetta', phase: 'Catture Leggendarie', title: 'Meloetta (#648)', location: 'Café / Teatro di Austropoli', speciesIds: [648], spoilerStage: 4, reward: 'Normale/Psico (Cantoantico)' },
  { id: 'leg-keldeo', phase: 'Catture Leggendarie', title: 'Keldeo (#647)', location: 'Bosco Giuramento (dopo Trio Oscuro a Mistralopoli)', speciesIds: [647], spoilerStage: 4, reward: 'Spadaccino Mistico (Spadamistica)' },
  { id: 'leg-genesect', phase: 'Catture Leggendarie', title: 'Genesect (#649)', location: 'Laboratorio P2 / Evento Fregata Plasma', speciesIds: [649], spoilerStage: 4, reward: 'Coleottero/Acciaio con Techno Scoppio' },
  { id: 'leg-kanto-birds', phase: 'Catture Leggendarie', title: 'Articuno, Zapdos & Moltres (#144-#146)', location: 'Fossa Gigante, Cava Pietraelettrica, Monte Antico', speciesIds: [144, 145, 146], spoilerStage: 4, reward: 'Trio Uccelli di Kanto (dopo dialogo con Bronius)' },
  { id: 'leg-mewtwo', phase: 'Catture Leggendarie', title: 'Mewtwo (#150)', location: 'Falda Sotterranea (dopo aver sconfitto Blu)', speciesIds: [150], spoilerStage: 4, reward: 'Leggendario Psico Lv.70+' },
  { id: 'leg-mew', phase: 'Catture Leggendarie', title: 'Mew (#151)', location: 'Isola Segreta Redux (parla con N a Via Vittoria)', speciesIds: [151], spoilerStage: 4, reward: 'Misterioso esclusivo BB2/VW2 Redux' },
  { id: 'leg-johto-beasts', phase: 'Catture Leggendarie', title: 'Raikou, Entei & Suicune (#243-#245)', location: 'Aree Leggendarie Post-Game di Unima', speciesIds: [243, 244, 245], spoilerStage: 4, reward: 'Trio Bestie di Johto' },
  { id: 'leg-tower-duo', phase: 'Catture Leggendarie', title: 'Lugia & Ho-Oh (#249-#250)', location: 'Santuari & Vette Post-Game Redux', speciesIds: [249, 250], spoilerStage: 4, reward: 'Guardiani dei Mari e dei Cieli' },
  { id: 'leg-regis', phase: 'Catture Leggendarie', title: 'Regirock, Regice, Registeel & Regigigas (#377-#379, #486)', location: 'Rovine Sotterranee & Monte Vite (camera interna)', speciesIds: [377, 378, 379, 486], spoilerStage: 4, reward: 'Quartetto dei Regi completo' },
  { id: 'leg-latis', phase: 'Catture Leggendarie', title: 'Latias & Latios (#380-#381)', location: 'Cantiere dei Sogni & Eventi Post-Game', anySpeciesIds: [380, 381], spoilerStage: 4, reward: 'Duo Eone (Cuorugiada)' },
  { id: 'leg-weather-trio', phase: 'Catture Leggendarie', title: 'Groudon, Kyogre & Rayquaza (#382-#384)', location: 'Deserto Quiete, Rovine Abissali & Torre Cielo', speciesIds: [382, 383, 384], spoilerStage: 4, reward: 'Con le 3 Sfere della Palestra di Levantopoli' },
  { id: 'leg-lake-trio', phase: 'Catture Leggendarie', title: 'Uxie, Mesprit & Azelf (#480-#482)', location: 'Grotta della Mente → Zondopoli / Torre Cielo / Percorso 23', speciesIds: [480, 481, 482], spoilerStage: 4, reward: 'Trio dei Laghi di Sinnoh' },
  { id: 'leg-heatran', phase: 'Catture Leggendarie', title: 'Heatran (#485)', location: 'Monte Antico (con Magmapietra da Percorso 18)', speciesIds: [485], spoilerStage: 4, reward: 'Fuoco/Acciaio con Magmaclisma' },
  { id: 'leg-lunar-duo', phase: 'Catture Leggendarie', title: 'Cresselia & Darkrai (#488 & #491)', location: 'Ponte Meraviglie (Cresselia) → Casa Bizzarra (Darkrai)', speciesIds: [488, 491], spoilerStage: 4, reward: 'Porta Cresselia al 1° slot nella Casa Bizzarra' },
  { id: 'leg-sinnoh-mythicals', phase: 'Catture Leggendarie', title: 'Manaphy & Shaymin (#490 & #492)', location: 'Aree Acquatiche & Giardino Post-Game Redux', speciesIds: [490, 492], spoilerStage: 4, reward: 'Misteriosi di Sinnoh' },
  { id: 'leg-forces-nature', phase: 'Catture Leggendarie', title: 'Tornadus, Thundurus & Landorus (#641-#642, #645)', location: 'Santuario Abbondanza / Eventi Redux', speciesIds: [641, 642, 645], spoilerStage: 4, reward: 'Forze della Natura' },
  { id: 'leg-tao-trio', phase: 'Catture Leggendarie', title: 'Reshiram / Zekrom & Kyurem (#643/#644 & #646)', location: 'Torre Dragospira & Fossa Gigante', speciesIds: [646], anySpeciesIds: [643, 644], spoilerStage: 4, reward: 'Cuneo DNA per Kyurem Bianco/Nero' },
  { id: 'leg-creation-arceus', phase: 'Catture Leggendarie', title: 'Dialga, Palkia, Giratina & Arceus (#483, #484, #487, #493)', location: 'Questline Torre Unità & Spazio Dimensionale', speciesIds: [483, 484, 487, 493], spoilerStage: 4, reward: 'Completamento Questline Cosmica Post-Game' },
];

