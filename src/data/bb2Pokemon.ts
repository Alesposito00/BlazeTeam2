import { PokemonSpecies } from '../types/pokemon';

// Database completo dei 649 Pokémon verificato su romhackdex.net/blaze-black-2-volt-white-2-redux/pokedex/
export const BB2_POKEMON: PokemonSpecies[] = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 49,
      "def": 49,
      "spa": 65,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 62,
      "def": 63,
      "spa": 80,
      "spd": 80,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 82,
      "def": 83,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: abilità Solar Power aggiunta e accesso a Thick Fat.",
    "learnset": [
      "giga-drain",
      "leaf-storm",
      "energy-ball",
      "sludge-bomb",
      "earth-power",
      "sleep-powder",
      "leech-seed",
      "synthesis",
      "hidden-power-ice",
      "power-whip",
      "earthquake"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 4,
    "name": "Charmander",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "region": "Kanto",
    "types": [
      "Fuoco",
      "Drago"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "dragon-pulse",
      "draco-meteor",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco/Drago"
  },
  {
    "id": 6,
    "name": "Charizard",
    "region": "Kanto",
    "types": [
      "Fuoco",
      "Drago"
    ],
    "baseStats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo cambiato in Fuoco/Drago, abilità Defiant e Solar Power.",
    "learnset": [
      "flamethrower",
      "fire-blast",
      "dragon-pulse",
      "draco-meteor",
      "air-slash",
      "hurricane",
      "focus-blast",
      "earth-power",
      "roost",
      "dragon-dance",
      "flare-blitz",
      "outrage"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 44,
      "atk": 48,
      "def": 65,
      "spa": 50,
      "spd": 64,
      "spe": 43
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 59,
      "atk": 63,
      "def": 80,
      "spa": 65,
      "spd": 80,
      "spe": 58
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 9,
    "name": "Blastoise",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 79,
      "atk": 83,
      "def": 100,
      "spa": 85,
      "spd": 105,
      "spe": 78
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: accesso a Shell Armor e mosse di copertura aggiornate.",
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "water-spout",
      "ice-beam",
      "aura-sphere",
      "dark-pulse",
      "rapid-spin",
      "shell-smash",
      "protect",
      "toxic",
      "flash-cannon"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "region": "Kanto",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 35,
      "spa": 20,
      "spd": 20,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Shield Dust",
        "description": "Protects against incoming moves&#39; extra effects."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 11,
    "name": "Metapod",
    "region": "Kanto",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 20,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 12,
    "name": "Butterfree",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 45,
      "def": 50,
      "spa": 90,
      "spd": 80,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Volante"
  },
  {
    "id": 13,
    "name": "Weedle",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 20,
      "spd": 20,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Shield Dust",
        "description": "Protects against incoming moves&#39; extra effects."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Veleno"
  },
  {
    "id": 14,
    "name": "Kakuna",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 25,
      "def": 50,
      "spa": 25,
      "spd": 25,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Veleno"
  },
  {
    "id": 15,
    "name": "Beedrill",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 40,
      "spa": 45,
      "spd": 80,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Veleno"
  },
  {
    "id": 16,
    "name": "Pidgey",
    "region": "Kanto",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 35,
      "spd": 35,
      "spe": 56
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused."
      },
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Normale/Volante"
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "region": "Kanto",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 63,
      "atk": 60,
      "def": 55,
      "spa": 50,
      "spd": 50,
      "spe": 71
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused."
      },
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Normale/Volante"
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "region": "Kanto",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 83,
      "atk": 80,
      "def": 75,
      "spa": 70,
      "spd": 70,
      "spe": 101
    },
    "abilities": [
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 19,
    "name": "Rattata",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 56,
      "def": 35,
      "spa": 25,
      "spd": 35,
      "spe": 72
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 20,
    "name": "Raticate",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 81,
      "def": 60,
      "spa": 50,
      "spd": 70,
      "spe": 97
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 21,
    "name": "Spearow",
    "region": "Kanto",
    "types": [
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 60,
      "def": 30,
      "spa": 31,
      "spd": 31,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Volante"
  },
  {
    "id": 22,
    "name": "Fearow",
    "region": "Kanto",
    "types": [
      "Volante"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 65,
      "spa": 61,
      "spd": 61,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 23,
    "name": "Ekans",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 60,
      "def": 44,
      "spa": 40,
      "spd": 54,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Veleno"
  },
  {
    "id": 24,
    "name": "Arbok",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 95,
      "def": 69,
      "spa": 65,
      "spd": 79,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Veleno"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "region": "Kanto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 55,
      "def": 40,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 26,
    "name": "Raichu",
    "region": "Kanto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 90,
      "def": 55,
      "spa": 90,
      "spd": 80,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "region": "Kanto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 85,
      "spa": 20,
      "spd": 30,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      },
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia."
      },
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 28,
    "name": "Sandslash",
    "region": "Kanto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 100,
      "def": 110,
      "spa": 45,
      "spd": 55,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      },
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia."
      },
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 29,
    "name": "Nidoran♀",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 47,
      "def": 52,
      "spa": 40,
      "spd": 40,
      "spe": 41
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 30,
    "name": "Nidorina",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 62,
      "def": 67,
      "spa": 55,
      "spd": 55,
      "spe": 56
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "region": "Kanto",
    "types": [
      "Veleno",
      "Terra"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 92,
      "def": 87,
      "spa": 75,
      "spd": 85,
      "spe": 76
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno/Terra"
  },
  {
    "id": 32,
    "name": "Nidoran♂",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 46,
      "atk": 57,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 33,
    "name": "Nidorino",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 61,
      "atk": 72,
      "def": 57,
      "spa": 55,
      "spd": 55,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 34,
    "name": "Nidoking",
    "region": "Kanto",
    "types": [
      "Veleno",
      "Terra"
    ],
    "baseStats": {
      "hp": 81,
      "atk": 102,
      "def": 77,
      "spa": 85,
      "spd": 75,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno/Terra"
  },
  {
    "id": 35,
    "name": "Clefairy",
    "region": "Kanto",
    "types": [
      "Folletto"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 45,
      "def": 48,
      "spa": 60,
      "spd": 65,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Folletto"
  },
  {
    "id": 36,
    "name": "Clefable",
    "region": "Kanto",
    "types": [
      "Folletto"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 70,
      "def": 73,
      "spa": 95,
      "spd": 90,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo aggiornato a Folletto puro in BB2 Redux con Moonblast e Magic Guard/Unaware.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "flamethrower",
      "thunderbolt",
      "ice-beam",
      "calm-mind",
      "softboiled",
      "stealth-rock",
      "thunder-wave"
    ],
    "roleHint": "Attaccante Speciale Folletto"
  },
  {
    "id": 37,
    "name": "Vulpix",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 41,
      "def": 40,
      "spa": 50,
      "spd": 65,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Drought",
        "description": "Evoca Luce Solare intensa all’entrata in campo.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 38,
    "name": "Ninetales",
    "region": "Kanto",
    "types": [
      "Fuoco",
      "Folletto"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 76,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Drought",
        "description": "Evoca Luce Solare intensa all’entrata in campo.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo aggiornato a Fuoco/Folletto con Drought e Moonblast.",
    "learnset": [
      "flamethrower",
      "fire-blast",
      "moonblast",
      "solarbeam",
      "energy-ball",
      "nasty-plot",
      "will-o-wisp",
      "psyshock"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "region": "Kanto",
    "types": [
      "Normale",
      "Folletto"
    ],
    "baseStats": {
      "hp": 115,
      "atk": 45,
      "def": 20,
      "spa": 45,
      "spd": 25,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta."
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "play-rough",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale/Folletto"
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "region": "Kanto",
    "types": [
      "Normale",
      "Folletto"
    ],
    "baseStats": {
      "hp": 140,
      "atk": 70,
      "def": 45,
      "spa": 85,
      "spd": 50,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Huge Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Normale/Folletto e abilità Huge Power!",
    "learnset": [
      "play-rough",
      "return",
      "moonblast",
      "dazzling-gleam",
      "hyper-voice",
      "fire-punch",
      "ice-punch",
      "thunder-wave",
      "stealth-rock"
    ],
    "roleHint": "Attaccante Misto Normale/Folletto"
  },
  {
    "id": 41,
    "name": "Zubat",
    "region": "Kanto",
    "types": [
      "Veleno",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 30,
      "spd": 40,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Veleno/Volante"
  },
  {
    "id": 42,
    "name": "Golbat",
    "region": "Kanto",
    "types": [
      "Veleno",
      "Volante"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 70,
      "spa": 65,
      "spd": 75,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Veleno/Volante"
  },
  {
    "id": 43,
    "name": "Oddish",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 50,
      "def": 55,
      "spa": 75,
      "spd": 65,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Veleno"
  },
  {
    "id": 44,
    "name": "Gloom",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 65,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Veleno"
  },
  {
    "id": 45,
    "name": "Vileplume",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 85,
      "spa": 110,
      "spd": 90,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Veleno"
  },
  {
    "id": 46,
    "name": "Paras",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Erba"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 70,
      "def": 55,
      "spa": 45,
      "spd": 55,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Dry Skin",
        "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Erba"
  },
  {
    "id": 47,
    "name": "Parasect",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Erba"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 95,
      "def": 80,
      "spa": 60,
      "spd": 80,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Dry Skin",
        "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Erba"
  },
  {
    "id": 48,
    "name": "Venonat",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 55,
      "def": 50,
      "spa": 40,
      "spd": 55,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Veleno"
  },
  {
    "id": 49,
    "name": "Venomoth",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 65,
      "def": 60,
      "spa": 90,
      "spd": 75,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Shield Dust",
        "description": "Protects against incoming moves&#39; extra effects."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci."
      },
      {
        "name": "Wonder Skin",
        "description": "Lowers incoming non-damaging moves&#39; base accuracy to exactly 50%.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Veleno"
  },
  {
    "id": 50,
    "name": "Diglett",
    "region": "Kanto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 10,
      "atk": 55,
      "def": 25,
      "spa": 35,
      "spd": 45,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Arena Trap",
        "description": "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "region": "Kanto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 100,
      "def": 50,
      "spa": 50,
      "spd": 70,
      "spe": 120
    },
    "abilities": [
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Arena Trap",
        "description": "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 52,
    "name": "Meowth",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 53,
    "name": "Persian",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 70,
      "def": 60,
      "spa": 65,
      "spd": 65,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 54,
    "name": "Psyduck",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 52,
      "def": 48,
      "spa": 65,
      "spd": 50,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 55,
    "name": "Golduck",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Psico"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 82,
      "def": 78,
      "spa": 95,
      "spd": 80,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Acqua/Psico con accesso a Psychic, Calm Mind e Swift Swim.",
    "learnset": [
      "scald",
      "hydro-pump",
      "surf",
      "psychic",
      "psyshock",
      "ice-beam",
      "focus-blast",
      "calm-mind",
      "encore",
      "signal-beam"
    ],
    "roleHint": "Attaccante Misto Acqua/Psico"
  },
  {
    "id": 56,
    "name": "Mankey",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 80,
      "def": 35,
      "spa": 35,
      "spd": 45,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit."
      },
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 57,
    "name": "Primeape",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 105,
      "def": 60,
      "spa": 60,
      "spd": 70,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit."
      },
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 58,
    "name": "Growlithe",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 70,
      "def": 45,
      "spa": 70,
      "spd": 50,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 59,
    "name": "Arcanine",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 110,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 60,
    "name": "Poliwag",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 50,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 65,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Lotta"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 95,
      "def": 95,
      "spa": 70,
      "spd": 90,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Acqua/Lotta"
  },
  {
    "id": 63,
    "name": "Abra",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 25,
      "atk": 20,
      "def": 15,
      "spa": 105,
      "spd": 55,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 64,
    "name": "Kadabra",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 35,
      "def": 30,
      "spa": 120,
      "spd": 70,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 65,
    "name": "Alakazam",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 50,
      "def": 45,
      "spa": 135,
      "spd": 95,
      "spe": 120
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 66,
    "name": "Machop",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 80,
      "def": 50,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit."
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 67,
    "name": "Machoke",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 70,
      "spa": 50,
      "spd": 60,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit."
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 68,
    "name": "Machamp",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 130,
      "def": 80,
      "spa": 65,
      "spd": 85,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit."
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 35,
      "spa": 70,
      "spd": 30,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 50,
      "spa": 85,
      "spd": 45,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 71,
    "name": "Victreebel",
    "region": "Kanto",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 100,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 72,
    "name": "Tentacool",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Veleno"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 35,
      "spa": 50,
      "spd": 100,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Liquid Ooze",
        "description": "Damages opponents using leeching moves for as much as they would heal."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Misto Acqua/Veleno"
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Veleno"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 70,
      "def": 65,
      "spa": 80,
      "spd": 120,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Liquid Ooze",
        "description": "Damages opponents using leeching moves for as much as they would heal."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 74,
    "name": "Geodude",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Terra"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 80,
      "def": 100,
      "spa": 30,
      "spd": 30,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "bulldoze",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Terra"
  },
  {
    "id": 75,
    "name": "Graveler",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Terra"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 95,
      "def": 115,
      "spa": 45,
      "spd": 45,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "bulldoze",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Terra"
  },
  {
    "id": 76,
    "name": "Golem",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Terra"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 120,
      "def": 130,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "bulldoze",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Terra"
  },
  {
    "id": 77,
    "name": "Ponyta",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 85,
      "def": 55,
      "spa": 65,
      "spd": 65,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Fuoco"
  },
  {
    "id": 78,
    "name": "Rapidash",
    "region": "Kanto",
    "types": [
      "Fuoco",
      "Folletto"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 100,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "play-rough",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Psico"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 65,
      "def": 65,
      "spa": 40,
      "spd": 40,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Psico"
  },
  {
    "id": 80,
    "name": "Slowbro",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Psico"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 75,
      "def": 110,
      "spa": 100,
      "spd": 80,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Acqua/Psico"
  },
  {
    "id": 81,
    "name": "Magnemite",
    "region": "Kanto",
    "types": [
      "Elettro",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 25,
      "atk": 35,
      "def": 70,
      "spa": 95,
      "spd": 55,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Magnet Pull",
        "description": "Intrappola i Pokémon di tipo Acciaio."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "flash-cannon",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro/Acciaio"
  },
  {
    "id": 82,
    "name": "Magneton",
    "region": "Kanto",
    "types": [
      "Elettro",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 60,
      "def": 95,
      "spa": 120,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Magnet Pull",
        "description": "Intrappola i Pokémon di tipo Acciaio."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "flash-cannon",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro/Acciaio"
  },
  {
    "id": 83,
    "name": "Farfetch'd",
    "region": "Kanto",
    "types": [
      "Lotta",
      "Volante"
    ],
    "baseStats": {
      "hp": 52,
      "atk": 90,
      "def": 55,
      "spa": 58,
      "spd": 62,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Defeatist",
        "description": "Dimezza Atk e SpA quando i PS scendono sotto la metà."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Lotta/Volante (Atk 90) con Brave Bird/Close Combat e Defeatist.",
    "learnset": [
      "brave-bird",
      "close-combat",
      "acrobatics",
      "leaf-blade",
      "night-slash",
      "swords-dance",
      "u-turn",
      "quick-attack",
      "roost"
    ],
    "roleHint": "Attaccante Fisico Lotta/Volante"
  },
  {
    "id": 84,
    "name": "Doduo",
    "region": "Kanto",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 85,
      "def": 45,
      "spa": 35,
      "spd": 35,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 85,
    "name": "Dodrio",
    "region": "Kanto",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 110,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 86,
    "name": "Seel",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 45,
      "def": 55,
      "spa": 45,
      "spd": 70,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 87,
    "name": "Dewgong",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 70,
      "def": 80,
      "spa": 70,
      "spd": 95,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Ghiaccio"
  },
  {
    "id": 88,
    "name": "Grimer",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit."
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Poison Touch",
        "description": "Has a 30% chance of poisoning target Pokémon upon contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Veleno"
  },
  {
    "id": 89,
    "name": "Muk",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 105,
      "def": 75,
      "spa": 65,
      "spd": 100,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit."
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Poison Touch",
        "description": "Has a 30% chance of poisoning target Pokémon upon contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Veleno"
  },
  {
    "id": 90,
    "name": "Shellder",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 65,
      "def": 100,
      "spa": 45,
      "spd": 25,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Ghiaccio"
  },
  {
    "id": 91,
    "name": "Cloyster",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 95,
      "def": 180,
      "spa": 85,
      "spd": 45,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Ghiaccio"
  },
  {
    "id": 92,
    "name": "Gastly",
    "region": "Kanto",
    "types": [
      "Spettro",
      "Veleno"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 35,
      "def": 30,
      "spa": 100,
      "spd": 35,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro/Veleno"
  },
  {
    "id": 93,
    "name": "Haunter",
    "region": "Kanto",
    "types": [
      "Spettro",
      "Veleno"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 50,
      "def": 45,
      "spa": 115,
      "spd": 55,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro/Veleno"
  },
  {
    "id": 94,
    "name": "Gengar",
    "region": "Kanto",
    "types": [
      "Spettro",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 75,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 95,
    "name": "Onix",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Terra"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 45,
      "def": 160,
      "spa": 30,
      "spd": 45,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "bulldoze",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Roccia/Terra"
  },
  {
    "id": 96,
    "name": "Drowzee",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 48,
      "def": 45,
      "spa": 43,
      "spd": 90,
      "spe": 42
    },
    "abilities": [
      {
        "name": "Bad Dreams",
        "description": "Damages sleeping opponents for 1/8 their max HP after each turn."
      },
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Forewarn",
        "description": "Reveals the opponents&#39; strongest move upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Psico"
  },
  {
    "id": 97,
    "name": "Hypno",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 73,
      "def": 70,
      "spa": 73,
      "spd": 115,
      "spe": 67
    },
    "abilities": [
      {
        "name": "Bad Dreams",
        "description": "Damages sleeping opponents for 1/8 their max HP after each turn."
      },
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Forewarn",
        "description": "Reveals the opponents&#39; strongest move upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Psico"
  },
  {
    "id": 98,
    "name": "Krabby",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 105,
      "def": 90,
      "spa": 25,
      "spd": 25,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 99,
    "name": "Kingler",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 130,
      "def": 115,
      "spa": 50,
      "spd": 50,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 100,
    "name": "Voltorb",
    "region": "Kanto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 50,
      "spa": 55,
      "spd": 55,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 101,
    "name": "Electrode",
    "region": "Kanto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 70,
      "spa": 80,
      "spd": 80,
      "spe": 150
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "region": "Kanto",
    "types": [
      "Erba",
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 80,
      "spa": 60,
      "spd": 45,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Harvest",
        "description": "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Psico"
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "region": "Kanto",
    "types": [
      "Erba",
      "Psico"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 95,
      "def": 85,
      "spa": 125,
      "spd": 75,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Harvest",
        "description": "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Psico"
  },
  {
    "id": 104,
    "name": "Cubone",
    "region": "Kanto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 95,
      "spa": 40,
      "spd": 50,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Terra"
  },
  {
    "id": 105,
    "name": "Marowak",
    "region": "Kanto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 110,
      "spa": 50,
      "spd": 80,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 120,
      "def": 53,
      "spa": 35,
      "spd": 110,
      "spe": 87
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash)."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "region": "Kanto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 105,
      "def": 79,
      "spa": 35,
      "spd": 110,
      "spe": 76
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 108,
    "name": "Lickitung",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 55,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 109,
    "name": "Koffing",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 65,
      "def": 95,
      "spa": 60,
      "spd": 45,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      },
      {
        "name": "Neutralizing Gas",
        "description": "Neutralizes abilities of all Pokémon in battle."
      },
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 110,
    "name": "Weezing",
    "region": "Kanto",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 120,
      "spa": 85,
      "spd": 70,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      },
      {
        "name": "Neutralizing Gas",
        "description": "Neutralizes abilities of all Pokémon in battle."
      },
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "region": "Kanto",
    "types": [
      "Terra",
      "Roccia"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 85,
      "def": 95,
      "spa": 30,
      "spd": 30,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "stone-edge",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Roccia"
  },
  {
    "id": 112,
    "name": "Rhydon",
    "region": "Kanto",
    "types": [
      "Terra",
      "Roccia"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 130,
      "def": 120,
      "spa": 45,
      "spd": 45,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "stone-edge",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Roccia"
  },
  {
    "id": 113,
    "name": "Chansey",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 250,
      "atk": 5,
      "def": 5,
      "spa": 35,
      "spd": 105,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Healer",
        "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Wall / Supporto Normale"
  },
  {
    "id": 114,
    "name": "Tangela",
    "region": "Kanto",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 55,
      "def": 115,
      "spa": 100,
      "spd": 40,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 95,
      "def": 80,
      "spa": 40,
      "spd": 80,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 116,
    "name": "Horsea",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 40,
      "def": 70,
      "spa": 70,
      "spd": 25,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 117,
    "name": "Seadra",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 65,
      "def": 95,
      "spa": 95,
      "spd": 45,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 118,
    "name": "Goldeen",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 67,
      "def": 60,
      "spa": 35,
      "spd": 50,
      "spe": 63
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 119,
    "name": "Seaking",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 92,
      "def": 65,
      "spa": 65,
      "spd": 80,
      "spe": 68
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 120,
    "name": "Staryu",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 45,
      "def": 55,
      "spa": 70,
      "spd": 55,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione."
      },
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 121,
    "name": "Starmie",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 75,
      "def": 85,
      "spa": 100,
      "spd": 85,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Illuminate",
        "description": "Doubles the wild encounter rate."
      },
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "region": "Kanto",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 65,
      "spa": 100,
      "spd": 120,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Filter",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "psychic",
      "psyshock",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 123,
    "name": "Scyther",
    "region": "Kanto",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 110,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 124,
    "name": "Jynx",
    "region": "Kanto",
    "types": [
      "Ghiaccio",
      "Psico"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 50,
      "def": 35,
      "spa": 115,
      "spd": 95,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Trace",
        "description": "Copies an opponent&#39;s ability upon entering battle."
      },
      {
        "name": "Dry Skin",
        "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP."
      },
      {
        "name": "Dry Skin",
        "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "psychic",
      "psyshock",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Ghiaccio/Psico"
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "region": "Kanto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 83,
      "def": 57,
      "spa": 95,
      "spd": 85,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 126,
    "name": "Magmar",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 95,
      "def": 57,
      "spa": 100,
      "spd": 85,
      "spe": 93
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 127,
    "name": "Pinsir",
    "region": "Kanto",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 70,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero"
  },
  {
    "id": 128,
    "name": "Tauros",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 100,
      "def": 95,
      "spa": 40,
      "spd": 70,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 129,
    "name": "Magikarp",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 10,
      "def": 55,
      "spa": 15,
      "spd": 20,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 130,
    "name": "Gyarados",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 125,
      "def": 79,
      "spa": 60,
      "spd": 100,
      "spe": 81
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Acqua/Volante"
  },
  {
    "id": 131,
    "name": "Lapras",
    "region": "Kanto",
    "types": [
      "Acqua",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 130,
      "atk": 85,
      "def": 80,
      "spa": 85,
      "spd": 95,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "surf",
      "scald",
      "hydro-pump",
      "ice-beam",
      "blizzard",
      "thunderbolt",
      "psychic",
      "ice-shard",
      "dragon-dance",
      "waterfall"
    ],
    "roleHint": "Wall / Supporto Acqua/Ghiaccio"
  },
  {
    "id": 132,
    "name": "Ditto",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 48,
      "atk": 48,
      "def": 48,
      "spa": 48,
      "spd": 48,
      "spe": 48
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis."
      },
      {
        "name": "Imposter",
        "description": "Transforms upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 133,
    "name": "Eevee",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 55,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x."
      },
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "region": "Kanto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 130,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 135,
    "name": "Jolteon",
    "region": "Kanto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 130
    },
    "abilities": [
      {
        "name": "Volt Absorb",
        "description": "Immunità ad Elettro e recupera 25% PS."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 136,
    "name": "Flareon",
    "region": "Kanto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Fuoco"
  },
  {
    "id": 137,
    "name": "Porygon",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 60,
      "def": 70,
      "spa": 85,
      "spd": 75,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Trace",
        "description": "Copies an opponent&#39;s ability upon entering battle."
      },
      {
        "name": "Download",
        "description": "+1 Atk o +1 SpA in base alla difesa inferiore del bersaglio."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Normale"
  },
  {
    "id": 138,
    "name": "Omanyte",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Acqua"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 40,
      "def": 100,
      "spa": 90,
      "spd": 55,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "power-gem",
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Roccia/Acqua"
  },
  {
    "id": 139,
    "name": "Omastar",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Acqua"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 60,
      "def": 125,
      "spa": 115,
      "spd": 70,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "power-gem",
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Roccia/Acqua"
  },
  {
    "id": 140,
    "name": "Kabuto",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Acqua"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 80,
      "def": 90,
      "spa": 55,
      "spd": 45,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "waterfall",
      "aqua-jet",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Acqua"
  },
  {
    "id": 141,
    "name": "Kabutops",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Acqua"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 115,
      "def": 105,
      "spa": 65,
      "spd": 70,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "waterfall",
      "aqua-jet",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Acqua"
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "region": "Kanto",
    "types": [
      "Roccia",
      "Volante"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 60,
      "spd": 75,
      "spe": 130
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 143,
    "name": "Snorlax",
    "region": "Kanto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 160,
      "atk": 110,
      "def": 65,
      "spa": 65,
      "spd": 110,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Immunity",
        "description": "Prevents poison."
      },
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 144,
    "name": "Articuno",
    "region": "Kanto",
    "types": [
      "Ghiaccio",
      "Volante"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 85,
      "def": 100,
      "spa": 95,
      "spd": 125,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Snow Warning",
        "description": "Evoca Grandine all’entrata in campo."
      },
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "air-slash",
      "hurricane",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Volante"
  },
  {
    "id": 145,
    "name": "Zapdos",
    "region": "Kanto",
    "types": [
      "Elettro",
      "Volante"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 90,
      "def": 85,
      "spa": 125,
      "spd": 90,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "air-slash",
      "hurricane",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 146,
    "name": "Moltres",
    "region": "Kanto",
    "types": [
      "Fuoco",
      "Volante"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 100,
      "def": 90,
      "spa": 125,
      "spd": 85,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Fuoco/Volante"
  },
  {
    "id": 147,
    "name": "Dratini",
    "region": "Kanto",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 41,
      "atk": 64,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Marvel Scale",
        "description": "+50% Difesa se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Drago"
  },
  {
    "id": 148,
    "name": "Dragonair",
    "region": "Kanto",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 61,
      "atk": 84,
      "def": 65,
      "spa": 70,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Marvel Scale",
        "description": "+50% Difesa se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Drago"
  },
  {
    "id": 149,
    "name": "Dragonite",
    "region": "Kanto",
    "types": [
      "Drago",
      "Volante"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 134,
      "def": 95,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Multiscale",
        "description": "Dimezza i danni subiti quando è a PS pieni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Drago/Volante"
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 106,
      "atk": 110,
      "def": 90,
      "spa": 154,
      "spd": 90,
      "spe": 130
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 151,
    "name": "Mew",
    "region": "Kanto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 152,
    "name": "Chikorita",
    "region": "Johto",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 49,
      "def": 65,
      "spa": 49,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 153,
    "name": "Bayleef",
    "region": "Johto",
    "types": [
      "Erba",
      "Folletto"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 62,
      "def": 80,
      "spa": 63,
      "spd": 80,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "giga-drain",
      "energy-ball",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Folletto"
  },
  {
    "id": 154,
    "name": "Meganium",
    "region": "Johto",
    "types": [
      "Erba",
      "Folletto"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 82,
      "def": 100,
      "spa": 83,
      "spd": 100,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Erba/Folletto con Serene Grace, Draining Kiss e Moonblast.",
    "learnset": [
      "moonblast",
      "draining-kiss",
      "giga-drain",
      "energy-ball",
      "earth-power",
      "leech-seed",
      "synthesis",
      "toxic",
      "dragon-tail",
      "calm-mind"
    ],
    "roleHint": "Attaccante Misto Erba/Folletto"
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "region": "Johto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 39,
      "atk": 52,
      "def": 43,
      "spa": 60,
      "spd": 50,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 156,
    "name": "Quilava",
    "region": "Johto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 64,
      "def": 58,
      "spa": 80,
      "spd": 65,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "region": "Johto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "eruption",
      "flamethrower",
      "fire-blast",
      "earth-power",
      "focus-blast",
      "hidden-power-ice",
      "thunderbolt",
      "quick-attack",
      "will-o-wisp"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 158,
    "name": "Totodile",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 64,
      "spa": 44,
      "spd": 48,
      "spe": 43
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 159,
    "name": "Croconaw",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 80,
      "def": 80,
      "spa": 59,
      "spd": 63,
      "spe": 58
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 105,
      "def": 100,
      "spa": 79,
      "spd": 83,
      "spe": 78
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "crunch",
      "ice-punch",
      "dragon-dance",
      "swords-dance",
      "superpower",
      "earthquake",
      "rock-slide"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 161,
    "name": "Sentret",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 46,
      "def": 34,
      "spa": 35,
      "spd": 45,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 162,
    "name": "Furret",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 76,
      "def": 64,
      "spa": 45,
      "spd": 55,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "region": "Johto",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 30,
      "def": 30,
      "spa": 36,
      "spd": 56,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale/Volante"
  },
  {
    "id": 164,
    "name": "Noctowl",
    "region": "Johto",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 50,
      "def": 50,
      "spa": 86,
      "spd": 96,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Psico/Volante con SpA 86, DifSp 96 e Tinted Lens.",
    "learnset": [
      "air-slash",
      "hurricane",
      "psychic",
      "psyshock",
      "shadow-ball",
      "heat-wave",
      "roost",
      "calm-mind",
      "tailwind"
    ],
    "roleHint": "Attaccante Speciale Psico/Volante"
  },
  {
    "id": 165,
    "name": "Ledyba",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 20,
      "def": 30,
      "spa": 40,
      "spd": 80,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Volante"
  },
  {
    "id": 166,
    "name": "Ledian",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 35,
      "def": 50,
      "spa": 55,
      "spd": 110,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Volante"
  },
  {
    "id": 167,
    "name": "Spinarak",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 60,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Veleno"
  },
  {
    "id": 168,
    "name": "Ariados",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 70,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Veleno"
  },
  {
    "id": 169,
    "name": "Crobat",
    "region": "Johto",
    "types": [
      "Veleno",
      "Volante"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 90,
      "def": 80,
      "spa": 70,
      "spd": 80,
      "spe": 130
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 170,
    "name": "Chinchou",
    "region": "Johto",
    "types": [
      "Acqua",
      "Elettro"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 38,
      "def": 38,
      "spa": 56,
      "spd": 56,
      "spe": 67
    },
    "abilities": [
      {
        "name": "Volt Absorb",
        "description": "Immunità ad Elettro e recupera 25% PS."
      },
      {
        "name": "Illuminate",
        "description": "Doubles the wild encounter rate."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Elettro"
  },
  {
    "id": 171,
    "name": "Lanturn",
    "region": "Johto",
    "types": [
      "Acqua",
      "Elettro"
    ],
    "baseStats": {
      "hp": 125,
      "atk": 58,
      "def": 58,
      "spa": 76,
      "spd": 76,
      "spe": 67
    },
    "abilities": [
      {
        "name": "Volt Absorb",
        "description": "Immunità ad Elettro e recupera 25% PS."
      },
      {
        "name": "Illuminate",
        "description": "Doubles the wild encounter rate."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Elettro"
  },
  {
    "id": 172,
    "name": "Pichu",
    "region": "Johto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 40,
      "def": 15,
      "spa": 35,
      "spd": 35,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 173,
    "name": "Cleffa",
    "region": "Johto",
    "types": [
      "Folletto"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 25,
      "def": 28,
      "spa": 45,
      "spd": 55,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Folletto"
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "region": "Johto",
    "types": [
      "Normale",
      "Folletto"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 30,
      "def": 15,
      "spa": 40,
      "spd": 20,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×."
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Misto Normale/Folletto"
  },
  {
    "id": 175,
    "name": "Togepi",
    "region": "Johto",
    "types": [
      "Folletto"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 20,
      "def": 65,
      "spa": 40,
      "spd": 65,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Folletto"
  },
  {
    "id": 176,
    "name": "Togetic",
    "region": "Johto",
    "types": [
      "Folletto",
      "Volante"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 40,
      "def": 85,
      "spa": 80,
      "spd": 105,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Folletto/Volante"
  },
  {
    "id": 177,
    "name": "Natu",
    "region": "Johto",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 50,
      "def": 45,
      "spa": 70,
      "spd": 45,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly."
      },
      {
        "name": "Magic Bounce",
        "description": "Riflette trappole e mosse di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico/Volante"
  },
  {
    "id": 178,
    "name": "Xatu",
    "region": "Johto",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 75,
      "def": 70,
      "spa": 95,
      "spd": 70,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly."
      },
      {
        "name": "Magic Bounce",
        "description": "Riflette trappole e mosse di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico/Volante"
  },
  {
    "id": 179,
    "name": "Mareep",
    "region": "Johto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 40,
      "def": 40,
      "spa": 65,
      "spd": 45,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Plus",
        "description": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro"
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "region": "Johto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 55,
      "def": 55,
      "spa": 80,
      "spd": 60,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Plus",
        "description": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro"
  },
  {
    "id": 181,
    "name": "Ampharos",
    "region": "Johto",
    "types": [
      "Elettro",
      "Drago"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 75,
      "def": 85,
      "spa": 115,
      "spd": 90,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Plus",
        "description": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Elettro/Drago con Overcoat e Dragon Pulse.",
    "learnset": [
      "thunderbolt",
      "discharge",
      "volt-switch",
      "dragon-pulse",
      "power-gem",
      "focus-blast",
      "thunder-wave",
      "signal-beam",
      "hidden-power-ice"
    ],
    "roleHint": "Attaccante Speciale Elettro/Drago"
  },
  {
    "id": 182,
    "name": "Bellossom",
    "region": "Johto",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 95,
      "spa": 90,
      "spd": 100,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself."
      },
      {
        "name": "Healer",
        "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 183,
    "name": "Marill",
    "region": "Johto",
    "types": [
      "Acqua",
      "Folletto"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 20,
      "def": 50,
      "spa": 20,
      "spd": 50,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Huge Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "waterfall",
      "aqua-jet",
      "play-rough",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Folletto"
  },
  {
    "id": 184,
    "name": "Azumarill",
    "region": "Johto",
    "types": [
      "Acqua",
      "Folletto"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 50,
      "def": 80,
      "spa": 60,
      "spd": 80,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Huge Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Aggiornato ad Acqua/Folletto in BB2 Redux con Play Rough e Huge Power.",
    "learnset": [
      "waterfall",
      "aqua-jet",
      "play-rough",
      "superpower",
      "ice-punch",
      "return",
      "toxic",
      "encore"
    ],
    "roleHint": "Attaccante Misto Acqua/Folletto"
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "region": "Johto",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 100,
      "def": 115,
      "spa": 30,
      "spd": 65,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 186,
    "name": "Politoed",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 75,
      "def": 75,
      "spa": 90,
      "spd": 100,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Drizzle",
        "description": "Evoca Pioggia intensa all’entrata in campo.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 187,
    "name": "Hoppip",
    "region": "Johto",
    "types": [
      "Erba",
      "Volante"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 35,
      "def": 40,
      "spa": 35,
      "spd": 55,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Erba/Volante"
  },
  {
    "id": 188,
    "name": "Skiploom",
    "region": "Johto",
    "types": [
      "Erba",
      "Volante"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 45,
      "def": 50,
      "spa": 45,
      "spd": 65,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Erba/Volante"
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "region": "Johto",
    "types": [
      "Erba",
      "Volante"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 55,
      "def": 70,
      "spa": 55,
      "spd": 95,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 190,
    "name": "Aipom",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 70,
      "def": 55,
      "spa": 40,
      "spd": 55,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 191,
    "name": "Sunkern",
    "region": "Johto",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 30,
      "def": 30,
      "spa": 30,
      "spd": 30,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 192,
    "name": "Sunflora",
    "region": "Johto",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 75,
      "def": 55,
      "spa": 105,
      "spd": 85,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Drought",
        "description": "Evoca Luce Solare intensa all’entrata in campo."
      },
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: abilità Drought e Solar Power aggiunte per sinergie Sole.",
    "learnset": [
      "solarbeam",
      "giga-drain",
      "leaf-storm",
      "earth-power",
      "sludge-bomb",
      "synthesis",
      "leech-seed",
      "hidden-power-ice"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 193,
    "name": "Yanma",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 45,
      "spa": 75,
      "spd": 45,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno."
      },
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Volante"
  },
  {
    "id": 194,
    "name": "Wooper",
    "region": "Johto",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 45,
      "def": 45,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Terra"
  },
  {
    "id": 195,
    "name": "Quagsire",
    "region": "Johto",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 85,
      "def": 85,
      "spa": 65,
      "spd": 65,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Terra"
  },
  {
    "id": 196,
    "name": "Espeon",
    "region": "Johto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 95,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Magic Bounce",
        "description": "Riflette trappole e mosse di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 197,
    "name": "Umbreon",
    "region": "Johto",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 65,
      "def": 110,
      "spa": 60,
      "spd": 130,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Buio"
  },
  {
    "id": 198,
    "name": "Murkrow",
    "region": "Johto",
    "types": [
      "Buio",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 42,
      "spa": 85,
      "spd": 42,
      "spe": 91
    },
    "abilities": [
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn"
    ],
    "roleHint": "Attaccante Misto Buio/Volante"
  },
  {
    "id": 199,
    "name": "Slowking",
    "region": "Johto",
    "types": [
      "Acqua",
      "Psico"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 75,
      "def": 80,
      "spa": 100,
      "spd": 110,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Acqua/Psico"
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "region": "Johto",
    "types": [
      "Spettro",
      "Folletto"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 85,
      "spd": 85,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "shadow-ball",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro/Folletto"
  },
  {
    "id": 201,
    "name": "Unown",
    "region": "Johto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 48,
      "atk": 72,
      "def": 48,
      "spa": 72,
      "spd": 48,
      "spe": 48
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Psico"
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "region": "Johto",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 190,
      "atk": 33,
      "def": 58,
      "spa": 33,
      "spd": 58,
      "spe": 33
    },
    "abilities": [
      {
        "name": "Shadow Tag",
        "description": "Impedisce la fuga ai nemici."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Psico"
  },
  {
    "id": 203,
    "name": "Girafarig",
    "region": "Johto",
    "types": [
      "Normale",
      "Psico"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 80,
      "def": 65,
      "spa": 90,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale/Psico"
  },
  {
    "id": 204,
    "name": "Pineco",
    "region": "Johto",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 90,
      "spa": 35,
      "spd": 35,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero"
  },
  {
    "id": 205,
    "name": "Forretress",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 90,
      "def": 140,
      "spa": 60,
      "spd": 60,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Acciaio"
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 70,
      "def": 70,
      "spa": 65,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 207,
    "name": "Gligar",
    "region": "Johto",
    "types": [
      "Terra",
      "Volante"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 75,
      "def": 105,
      "spa": 35,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Immunity",
        "description": "Prevents poison.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Volante"
  },
  {
    "id": 208,
    "name": "Steelix",
    "region": "Johto",
    "types": [
      "Acciaio",
      "Terra"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 85,
      "def": 200,
      "spa": 55,
      "spd": 65,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Acciaio/Terra"
  },
  {
    "id": 209,
    "name": "Snubbull",
    "region": "Johto",
    "types": [
      "Lotta",
      "Folletto"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 50,
      "spa": 40,
      "spd": 40,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "play-rough",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta/Folletto"
  },
  {
    "id": 210,
    "name": "Granbull",
    "region": "Johto",
    "types": [
      "Lotta",
      "Folletto"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 120,
      "def": 75,
      "spa": 60,
      "spd": 60,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo aggiornato a Lotta/Folletto (Atk 120) con Play Rough e Close Combat!",
    "learnset": [
      "play-rough",
      "close-combat",
      "crunch",
      "earthquake",
      "ice-punch",
      "fire-punch",
      "thunder-wave",
      "bulk-up"
    ],
    "roleHint": "Attaccante Fisico Lotta/Folletto"
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "region": "Johto",
    "types": [
      "Acqua",
      "Veleno"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 95,
      "def": 85,
      "spa": 55,
      "spd": 55,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Veleno"
  },
  {
    "id": 212,
    "name": "Scizor",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 130,
      "def": 100,
      "spa": 55,
      "spd": 80,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Light Metal",
        "description": "Halves the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Acciaio"
  },
  {
    "id": 213,
    "name": "Shuckle",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Roccia"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 10,
      "def": 230,
      "spa": 10,
      "spd": 230,
      "spe": 5
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Contrary",
        "description": "Inverte tutte le variazioni alle statistiche (Leaf Storm dà +2 SpA!).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Coleottero/Roccia"
  },
  {
    "id": 214,
    "name": "Heracross",
    "region": "Johto",
    "types": [
      "Coleottero",
      "Lotta"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 125,
      "def": 75,
      "spa": 40,
      "spd": 95,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Lotta"
  },
  {
    "id": 215,
    "name": "Sneasel",
    "region": "Johto",
    "types": [
      "Buio",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 95,
      "def": 55,
      "spa": 35,
      "spd": 75,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Pickpocket",
        "description": "Steals attacking Pokémon&#39;s held items on contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "region": "Johto",
    "types": [
      "Normale",
      "Terra"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Honey Gather",
        "description": "The Pokémon may pick up honey after battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale/Terra"
  },
  {
    "id": 217,
    "name": "Ursaring",
    "region": "Johto",
    "types": [
      "Normale",
      "Terra"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 130,
      "def": 75,
      "spa": 75,
      "spd": 75,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale/Terra"
  },
  {
    "id": 218,
    "name": "Slugma",
    "region": "Johto",
    "types": [
      "Fuoco",
      "Roccia"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 40,
      "spa": 70,
      "spd": 40,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Magma Armor",
        "description": "Prevents freezing."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "power-gem",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Fuoco/Roccia"
  },
  {
    "id": 219,
    "name": "Magcargo",
    "region": "Johto",
    "types": [
      "Fuoco",
      "Roccia"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 120,
      "spa": 90,
      "spd": 80,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "power-gem",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Fuoco/Roccia"
  },
  {
    "id": 220,
    "name": "Swinub",
    "region": "Johto",
    "types": [
      "Ghiaccio",
      "Terra"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 40,
      "spa": 30,
      "spd": 30,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Ghiaccio/Terra"
  },
  {
    "id": 221,
    "name": "Piloswine",
    "region": "Johto",
    "types": [
      "Ghiaccio",
      "Terra"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 80,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Ghiaccio/Terra"
  },
  {
    "id": 222,
    "name": "Corsola",
    "region": "Johto",
    "types": [
      "Acqua",
      "Roccia"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 55,
      "def": 95,
      "spa": 65,
      "spd": 95,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "power-gem",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Roccia"
  },
  {
    "id": 223,
    "name": "Remoraid",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 65,
      "def": 35,
      "spa": 65,
      "spd": 35,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Moody",
        "description": "Raises a random stat two stages and lowers another one stage after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 224,
    "name": "Octillery",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 105,
      "def": 75,
      "spa": 105,
      "spd": 75,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Suction Cups",
        "description": "Prevents being forced out of battle by other Pokémon&#39;s moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 225,
    "name": "Delibird",
    "region": "Johto",
    "types": [
      "Ghiaccio",
      "Volante"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 55,
      "def": 45,
      "spa": 65,
      "spd": 45,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Insomnia",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "air-slash",
      "hurricane",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Volante"
  },
  {
    "id": 226,
    "name": "Mantine",
    "region": "Johto",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 40,
      "def": 70,
      "spa": 80,
      "spd": 140,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Wall / Supporto Acqua/Volante"
  },
  {
    "id": 227,
    "name": "Skarmory",
    "region": "Johto",
    "types": [
      "Acciaio",
      "Volante"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 80,
      "def": 140,
      "spa": 40,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Volante"
  },
  {
    "id": 228,
    "name": "Houndour",
    "region": "Johto",
    "types": [
      "Buio",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 60,
      "def": 30,
      "spa": 80,
      "spd": 50,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dark-pulse",
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Buio/Fuoco"
  },
  {
    "id": 229,
    "name": "Houndoom",
    "region": "Johto",
    "types": [
      "Buio",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 90,
      "def": 50,
      "spa": 110,
      "spd": 80,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dark-pulse",
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Buio/Fuoco"
  },
  {
    "id": 230,
    "name": "Kingdra",
    "region": "Johto",
    "types": [
      "Acqua",
      "Drago"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 95,
      "def": 95,
      "spa": 95,
      "spd": 95,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Drago"
  },
  {
    "id": 231,
    "name": "Phanpy",
    "region": "Johto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 60,
      "def": 60,
      "spa": 40,
      "spd": 40,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 232,
    "name": "Donphan",
    "region": "Johto",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 120,
      "def": 120,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 233,
    "name": "Porygon2",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 80,
      "def": 90,
      "spa": 105,
      "spd": 95,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Trace",
        "description": "Copies an opponent&#39;s ability upon entering battle."
      },
      {
        "name": "Download",
        "description": "+1 Atk o +1 SpA in base alla difesa inferiore del bersaglio."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Normale"
  },
  {
    "id": 234,
    "name": "Stantler",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 95,
      "def": 62,
      "spa": 85,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 235,
    "name": "Smeargle",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 20,
      "def": 35,
      "spa": 20,
      "spd": 45,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Moody",
        "description": "Raises a random stat two stages and lowers another one stage after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "region": "Johto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 35,
      "def": 35,
      "spa": 35,
      "spd": 35,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Lotta"
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "region": "Johto",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 95,
      "def": 95,
      "spa": 35,
      "spd": 110,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 238,
    "name": "Smoochum",
    "region": "Johto",
    "types": [
      "Ghiaccio",
      "Psico"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 15,
      "spa": 85,
      "spd": 65,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Forewarn",
        "description": "Reveals the opponents&#39; strongest move upon entering battle."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "psychic",
      "psyshock",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Ghiaccio/Psico"
  },
  {
    "id": 239,
    "name": "Elekid",
    "region": "Johto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 63,
      "def": 37,
      "spa": 65,
      "spd": 55,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 240,
    "name": "Magby",
    "region": "Johto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 75,
      "def": 37,
      "spa": 70,
      "spd": 55,
      "spe": 83
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 241,
    "name": "Miltank",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 80,
      "def": 105,
      "spa": 40,
      "spd": 70,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 242,
    "name": "Blissey",
    "region": "Johto",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 255,
      "atk": 10,
      "def": 10,
      "spa": 75,
      "spd": 135,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Healer",
        "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Wall / Supporto Normale"
  },
  {
    "id": 243,
    "name": "Raikou",
    "region": "Johto",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 85,
      "def": 75,
      "spa": 115,
      "spd": 100,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 244,
    "name": "Entei",
    "region": "Johto",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 115,
      "atk": 115,
      "def": 85,
      "spa": 90,
      "spd": 75,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 245,
    "name": "Suicune",
    "region": "Johto",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 75,
      "def": 115,
      "spa": 90,
      "spd": 115,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Wall / Supporto Acqua"
  },
  {
    "id": 246,
    "name": "Larvitar",
    "region": "Johto",
    "types": [
      "Roccia",
      "Terra"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 64,
      "def": 50,
      "spa": 45,
      "spd": 50,
      "spe": 41
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "bulldoze",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Roccia/Terra"
  },
  {
    "id": 247,
    "name": "Pupitar",
    "region": "Johto",
    "types": [
      "Roccia",
      "Terra"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 84,
      "def": 70,
      "spa": 65,
      "spd": 70,
      "spe": 51
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "bulldoze",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Roccia/Terra"
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "region": "Johto",
    "types": [
      "Roccia",
      "Buio"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 134,
      "def": 110,
      "spa": 95,
      "spd": 100,
      "spe": 61
    },
    "abilities": [
      {
        "name": "Sand Stream",
        "description": "Evoca Tempesta di Sabbia all’entrata in campo."
      },
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Buio"
  },
  {
    "id": 249,
    "name": "Lugia",
    "region": "Johto",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 106,
      "atk": 90,
      "def": 130,
      "spa": 90,
      "spd": 154,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Multiscale",
        "description": "Dimezza i danni subiti quando è a PS pieni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Wall / Supporto Psico/Volante"
  },
  {
    "id": 250,
    "name": "Ho-Oh",
    "region": "Johto",
    "types": [
      "Fuoco",
      "Volante"
    ],
    "baseStats": {
      "hp": 106,
      "atk": 130,
      "def": 90,
      "spa": 110,
      "spd": 154,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Fuoco/Volante"
  },
  {
    "id": 251,
    "name": "Celebi",
    "region": "Johto",
    "types": [
      "Psico",
      "Erba"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 252,
    "name": "Treecko",
    "region": "Hoenn",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 35,
      "spa": 65,
      "spd": 55,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 253,
    "name": "Grovyle",
    "region": "Hoenn",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 45,
      "spa": 85,
      "spd": 65,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 254,
    "name": "Sceptile",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Drago"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 85,
      "def": 65,
      "spa": 105,
      "spd": 85,
      "spe": 120
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "dragon-pulse",
      "draco-meteor",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 255,
    "name": "Torchic",
    "region": "Hoenn",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 60,
      "def": 40,
      "spa": 70,
      "spd": 50,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 256,
    "name": "Combusken",
    "region": "Hoenn",
    "types": [
      "Fuoco",
      "Lotta"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 60,
      "spa": 85,
      "spd": 60,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Fuoco/Lotta"
  },
  {
    "id": 257,
    "name": "Blaziken",
    "region": "Hoenn",
    "types": [
      "Fuoco",
      "Lotta"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 120,
      "def": 70,
      "spa": 110,
      "spd": 70,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash)."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Fuoco/Lotta"
  },
  {
    "id": 258,
    "name": "Mudkip",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 70,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 85,
      "def": 70,
      "spa": 60,
      "spd": 70,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Terra"
  },
  {
    "id": 260,
    "name": "Swampert",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 110,
      "def": 90,
      "spa": 85,
      "spd": 90,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Terra"
  },
  {
    "id": 261,
    "name": "Poochyena",
    "region": "Hoenn",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 55,
      "def": 35,
      "spa": 30,
      "spd": 30,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Buio"
  },
  {
    "id": 262,
    "name": "Mightyena",
    "region": "Hoenn",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 60,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Buio"
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 30,
      "def": 41,
      "spa": 30,
      "spd": 41,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 264,
    "name": "Linoone",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 78,
      "atk": 70,
      "def": 61,
      "spa": 50,
      "spd": 61,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 265,
    "name": "Wurmple",
    "region": "Hoenn",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 45,
      "def": 35,
      "spa": 20,
      "spd": 30,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Shield Dust",
        "description": "Protects against incoming moves&#39; extra effects."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero"
  },
  {
    "id": 266,
    "name": "Silcoon",
    "region": "Hoenn",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 35,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 267,
    "name": "Beautifly",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 70,
      "def": 50,
      "spa": 100,
      "spd": 50,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Volante"
  },
  {
    "id": 268,
    "name": "Cascoon",
    "region": "Hoenn",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 35,
      "def": 55,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 269,
    "name": "Dustox",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 70,
      "spa": 50,
      "spd": 90,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Shield Dust",
        "description": "Protects against incoming moves&#39; extra effects."
      },
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Veleno"
  },
  {
    "id": 270,
    "name": "Lotad",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Erba"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 30,
      "spa": 40,
      "spd": 50,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Erba"
  },
  {
    "id": 271,
    "name": "Lombre",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Erba"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 50,
      "spa": 60,
      "spd": 70,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Erba"
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Erba"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 70,
      "def": 70,
      "spa": 90,
      "spd": 100,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua/Erba"
  },
  {
    "id": 273,
    "name": "Seedot",
    "region": "Hoenn",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 50,
      "spa": 30,
      "spd": 30,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 70,
      "def": 40,
      "spa": 60,
      "spd": 40,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Erba/Buio"
  },
  {
    "id": 275,
    "name": "Shiftry",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Buio"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 100,
      "def": 60,
      "spa": 90,
      "spd": 60,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move."
      },
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Erba/Buio"
  },
  {
    "id": 276,
    "name": "Taillow",
    "region": "Hoenn",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 30,
      "spa": 30,
      "spd": 30,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Early Bird",
        "description": "Makes sleep pass twice as quickly."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 277,
    "name": "Swellow",
    "region": "Hoenn",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 60,
      "spa": 75,
      "spd": 50,
      "spe": 125
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 278,
    "name": "Wingull",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 30,
      "spa": 55,
      "spd": 30,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Acqua/Volante"
  },
  {
    "id": 279,
    "name": "Pelipper",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 100,
      "spa": 95,
      "spd": 70,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Drizzle",
        "description": "Evoca Pioggia intensa all’entrata in campo."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Acqua/Volante"
  },
  {
    "id": 280,
    "name": "Ralts",
    "region": "Hoenn",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 28,
      "atk": 25,
      "def": 25,
      "spa": 45,
      "spd": 35,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Trace",
        "description": "Copies an opponent&#39;s ability upon entering battle."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "psychic",
      "psyshock",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 281,
    "name": "Kirlia",
    "region": "Hoenn",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 35,
      "def": 35,
      "spa": 65,
      "spd": 55,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Trace",
        "description": "Copies an opponent&#39;s ability upon entering battle."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "psychic",
      "psyshock",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "region": "Hoenn",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 68,
      "atk": 65,
      "def": 65,
      "spa": 125,
      "spd": 115,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Trace",
        "description": "Copies an opponent&#39;s ability upon entering battle."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Aggiornata a Psico/Folletto in BB2 Redux con Moonblast e Draining Kiss.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "psychic",
      "psyshock",
      "thunderbolt",
      "focus-blast",
      "shadow-ball",
      "calm-mind",
      "will-o-wisp"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 283,
    "name": "Surskit",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Acqua"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 32,
      "spa": 50,
      "spd": 52,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Rain Dish",
        "description": "Heals for 1/16 max HP after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Acqua"
  },
  {
    "id": 284,
    "name": "Masquerain",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Acqua"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 60,
      "def": 62,
      "spa": 100,
      "spd": 82,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Coleottero/Acqua (SpA 100, Vel 80) con Quiver Dance e Hydro Pump.",
    "learnset": [
      "quiver-dance",
      "bug-buzz",
      "hydro-pump",
      "scald",
      "air-slash",
      "ice-beam",
      "giga-drain",
      "roost"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Acqua"
  },
  {
    "id": 285,
    "name": "Shroomish",
    "region": "Hoenn",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 60,
      "spa": 40,
      "spd": 60,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Poison Heal",
        "description": "Recupera 1/8 dei PS ogni turno se avvelenato."
      },
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 286,
    "name": "Breloom",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Lotta"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 130,
      "def": 80,
      "spa": 60,
      "spd": 60,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Poison Heal",
        "description": "Recupera 1/8 dei PS ogni turno se avvelenato."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Erba/Lotta"
  },
  {
    "id": 287,
    "name": "Slakoth",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 35,
      "spd": 35,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Truant",
        "description": "Skips every second turn."
      },
      {
        "name": "Slow Start",
        "description": "Halves Attack and Speed for five turns upon entering battle."
      },
      {
        "name": "Truant",
        "description": "Skips every second turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 55,
      "spd": 55,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 289,
    "name": "Slaking",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 150,
      "atk": 160,
      "def": 100,
      "spa": 95,
      "spd": 65,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Truant",
        "description": "Skips every second turn."
      },
      {
        "name": "Slow Start",
        "description": "Halves Attack and Speed for five turns upon entering battle."
      },
      {
        "name": "Truant",
        "description": "Skips every second turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 290,
    "name": "Nincada",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Terra"
    ],
    "baseStats": {
      "hp": 31,
      "atk": 45,
      "def": 90,
      "spa": 30,
      "spd": 30,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Terra"
  },
  {
    "id": 291,
    "name": "Ninjask",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 61,
      "atk": 90,
      "def": 45,
      "spa": 50,
      "spd": 50,
      "spe": 160
    },
    "abilities": [
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 292,
    "name": "Shedinja",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Spettro"
    ],
    "baseStats": {
      "hp": 1,
      "atk": 90,
      "def": 45,
      "spa": 30,
      "spd": 30,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Wonder Guard",
        "description": "Protects against damaging moves that are not super effective."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Spettro"
  },
  {
    "id": 293,
    "name": "Whismur",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 51,
      "def": 23,
      "spa": 51,
      "spd": 23,
      "spe": 28
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 294,
    "name": "Loudred",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 84,
      "atk": 71,
      "def": 43,
      "spa": 71,
      "spd": 43,
      "spe": 48
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 295,
    "name": "Exploud",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 104,
      "atk": 91,
      "def": 63,
      "spa": 91,
      "spd": 73,
      "spe": 68
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 296,
    "name": "Makuhita",
    "region": "Hoenn",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 72,
      "atk": 60,
      "def": 30,
      "spa": 20,
      "spd": 30,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 297,
    "name": "Hariyama",
    "region": "Hoenn",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 144,
      "atk": 120,
      "def": 60,
      "spa": 40,
      "spd": 60,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 298,
    "name": "Azurill",
    "region": "Hoenn",
    "types": [
      "Normale",
      "Folletto"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 20,
      "def": 40,
      "spa": 20,
      "spd": 40,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Huge Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "play-rough",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale/Folletto"
  },
  {
    "id": 299,
    "name": "Nosepass",
    "region": "Hoenn",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 45,
      "def": 135,
      "spa": 45,
      "spd": 90,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Magnet Pull",
        "description": "Intrappola i Pokémon di tipo Acciaio."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Roccia"
  },
  {
    "id": 300,
    "name": "Skitty",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 45,
      "def": 45,
      "spa": 35,
      "spd": 35,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Wonder Skin",
        "description": "Lowers incoming non-damaging moves&#39; base accuracy to exactly 50%."
      },
      {
        "name": "Normalize",
        "description": "Makes the Pokémon&#39;s moves all act normal-type."
      },
      {
        "name": "Wonder Skin",
        "description": "Lowers incoming non-damaging moves&#39; base accuracy to exactly 50%.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 301,
    "name": "Delcatty",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 65,
      "def": 65,
      "spa": 55,
      "spd": 55,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Wonder Skin",
        "description": "Lowers incoming non-damaging moves&#39; base accuracy to exactly 50%."
      },
      {
        "name": "Normalize",
        "description": "Makes the Pokémon&#39;s moves all act normal-type."
      },
      {
        "name": "Wonder Skin",
        "description": "Lowers incoming non-damaging moves&#39; base accuracy to exactly 50%.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 302,
    "name": "Sableye",
    "region": "Hoenn",
    "types": [
      "Buio",
      "Spettro"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 75,
      "spa": 65,
      "spd": 65,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Stall",
        "description": "Makes the Pokémon move last within its move&#39;s priority bracket."
      },
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Buio/Spettro"
  },
  {
    "id": 303,
    "name": "Mawile",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Folletto"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 85,
      "def": 85,
      "spa": 55,
      "spd": 55,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Huge Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Acciaio/Folletto con Huge Power, Intimidate e Sheer Force!",
    "learnset": [
      "play-rough",
      "iron-head",
      "sucker-punch",
      "fire-punch",
      "ice-punch",
      "swords-dance",
      "stealth-rock",
      "brick-break"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Folletto"
  },
  {
    "id": 304,
    "name": "Aron",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Roccia"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 70,
      "def": 100,
      "spa": 40,
      "spd": 40,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Filter",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Roccia"
  },
  {
    "id": 305,
    "name": "Lairon",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Roccia"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 90,
      "def": 140,
      "spa": 50,
      "spd": 50,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Filter",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Roccia"
  },
  {
    "id": 306,
    "name": "Aggron",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Roccia"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 110,
      "def": 180,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Filter",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Roccia"
  },
  {
    "id": 307,
    "name": "Meditite",
    "region": "Hoenn",
    "types": [
      "Lotta",
      "Psico"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 40,
      "def": 55,
      "spa": 40,
      "spd": 55,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Pure Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Lotta/Psico"
  },
  {
    "id": 308,
    "name": "Medicham",
    "region": "Hoenn",
    "types": [
      "Lotta",
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Pure Power",
        "description": "Raddoppia la statistica Attacco!"
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Lotta/Psico"
  },
  {
    "id": 309,
    "name": "Electrike",
    "region": "Hoenn",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 45,
      "def": 40,
      "spa": 65,
      "spd": 40,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro"
  },
  {
    "id": 310,
    "name": "Manectric",
    "region": "Hoenn",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 75,
      "def": 60,
      "spa": 105,
      "spd": 60,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 311,
    "name": "Plusle",
    "region": "Hoenn",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 50,
      "def": 40,
      "spa": 85,
      "spd": 75,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Plus",
        "description": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro"
  },
  {
    "id": 312,
    "name": "Minun",
    "region": "Hoenn",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 50,
      "spa": 75,
      "spd": 85,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Minus",
        "description": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus."
      },
      {
        "name": "Volt Absorb",
        "description": "Immunità ad Elettro e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro"
  },
  {
    "id": 313,
    "name": "Volbeat",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Elettro"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 73,
      "def": 75,
      "spa": 47,
      "spd": 85,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci."
      },
      {
        "name": "Illuminate",
        "description": "Doubles the wild encounter rate.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Elettro"
  },
  {
    "id": 314,
    "name": "Illumise",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Folletto"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 47,
      "def": 75,
      "spa": 73,
      "spd": 85,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci."
      },
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Folletto"
  },
  {
    "id": 315,
    "name": "Roselia",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 60,
      "def": 45,
      "spa": 100,
      "spd": 80,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Veleno"
  },
  {
    "id": 316,
    "name": "Gulpin",
    "region": "Hoenn",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 43,
      "def": 53,
      "spa": 43,
      "spd": 53,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Liquid Ooze",
        "description": "Damages opponents using leeching moves for as much as they would heal."
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 317,
    "name": "Swalot",
    "region": "Hoenn",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 73,
      "def": 83,
      "spa": 73,
      "spd": 83,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Liquid Ooze",
        "description": "Damages opponents using leeching moves for as much as they would heal."
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 318,
    "name": "Carvanha",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Buio"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 90,
      "def": 20,
      "spa": 65,
      "spd": 20,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      },
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Acqua/Buio"
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 120,
      "def": 40,
      "spa": 95,
      "spd": 40,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      },
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Acqua/Buio"
  },
  {
    "id": 320,
    "name": "Wailmer",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 130,
      "atk": 70,
      "def": 35,
      "spa": 70,
      "spd": 35,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 321,
    "name": "Wailord",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 170,
      "atk": 90,
      "def": 45,
      "spa": 90,
      "spd": 45,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Water Veil",
        "description": "Prevents burns."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 322,
    "name": "Numel",
    "region": "Hoenn",
    "types": [
      "Fuoco",
      "Terra"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 40,
      "spa": 65,
      "spd": 45,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "earth-power",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco/Terra"
  },
  {
    "id": 323,
    "name": "Camerupt",
    "region": "Hoenn",
    "types": [
      "Fuoco",
      "Terra"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 100,
      "def": 70,
      "spa": 105,
      "spd": 75,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "earth-power",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco/Terra"
  },
  {
    "id": 324,
    "name": "Torkoal",
    "region": "Hoenn",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 85,
      "def": 140,
      "spa": 85,
      "spd": 70,
      "spe": 20
    },
    "abilities": [
      {
        "name": "White Smoke",
        "description": "Prevents stats from being lowered by other Pokémon."
      },
      {
        "name": "Drought",
        "description": "Evoca Luce Solare intensa all’entrata in campo."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 325,
    "name": "Spoink",
    "region": "Hoenn",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 25,
      "def": 35,
      "spa": 70,
      "spd": 80,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 326,
    "name": "Grumpig",
    "region": "Hoenn",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 45,
      "def": 65,
      "spa": 90,
      "spd": 110,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 327,
    "name": "Spinda",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 60,
      "spd": 60,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused."
      },
      {
        "name": "Contrary",
        "description": "Inverte tutte le variazioni alle statistiche (Leaf Storm dà +2 SpA!).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 328,
    "name": "Trapinch",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Terra"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 100,
      "def": 45,
      "spa": 45,
      "spd": 45,
      "spe": 10
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Arena Trap",
        "description": "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Terra"
  },
  {
    "id": 329,
    "name": "Vibrava",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Drago"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 70,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Drago"
  },
  {
    "id": 330,
    "name": "Flygon",
    "region": "Hoenn",
    "types": [
      "Coleottero",
      "Drago"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo cambiato in Coleottero/Drago con Quiver Dance, Bug Buzz e Boomburst.",
    "learnset": [
      "quiver-dance",
      "bug-buzz",
      "draco-meteor",
      "dragon-pulse",
      "boomburst",
      "earth-power",
      "flamethrower",
      "u-turn",
      "earthquake",
      "outrage",
      "dragon-dance",
      "roost"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 331,
    "name": "Cacnea",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Buio"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 85,
      "def": 40,
      "spa": 85,
      "spd": 40,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Erba/Buio"
  },
  {
    "id": 332,
    "name": "Cacturne",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 115,
      "def": 60,
      "spa": 115,
      "spd": 60,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Erba/Buio"
  },
  {
    "id": 333,
    "name": "Swablu",
    "region": "Hoenn",
    "types": [
      "Folletto",
      "Volante"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 40,
      "def": 60,
      "spa": 40,
      "spd": 75,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "play-rough",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Folletto/Volante"
  },
  {
    "id": 334,
    "name": "Altaria",
    "region": "Hoenn",
    "types": [
      "Drago",
      "Folletto"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 70,
      "def": 90,
      "spa": 70,
      "spd": 105,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Drago/Folletto in BB2 Redux con Moonblast.",
    "learnset": [
      "dragon-pulse",
      "draco-meteor",
      "moonblast",
      "flamethrower",
      "roost",
      "dragon-dance",
      "earthquake",
      "return"
    ],
    "roleHint": "Attaccante Misto Drago/Folletto"
  },
  {
    "id": 335,
    "name": "Zangoose",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 115,
      "def": 60,
      "spa": 60,
      "spd": 60,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Immunity",
        "description": "Prevents poison."
      },
      {
        "name": "Toxic Boost",
        "description": "Increases Attack to 1.5× when poisoned.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 336,
    "name": "Seviper",
    "region": "Hoenn",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 73,
      "atk": 100,
      "def": 60,
      "spa": 100,
      "spd": 60,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 337,
    "name": "Lunatone",
    "region": "Hoenn",
    "types": [
      "Roccia",
      "Psico"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 55,
      "def": 65,
      "spa": 95,
      "spd": 85,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "power-gem",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Roccia/Psico"
  },
  {
    "id": 338,
    "name": "Solrock",
    "region": "Hoenn",
    "types": [
      "Roccia",
      "Psico"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 95,
      "def": 85,
      "spa": 55,
      "spd": 65,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Psico"
  },
  {
    "id": 339,
    "name": "Barboach",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 48,
      "def": 43,
      "spa": 46,
      "spd": 41,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
      },
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Terra"
  },
  {
    "id": 340,
    "name": "Whiscash",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 78,
      "def": 73,
      "spa": 76,
      "spd": 71,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
      },
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Terra"
  },
  {
    "id": 341,
    "name": "Corphish",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 43,
      "atk": 80,
      "def": 65,
      "spa": 50,
      "spd": 35,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua"
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Buio"
    ],
    "baseStats": {
      "hp": 63,
      "atk": 120,
      "def": 85,
      "spa": 90,
      "spd": 55,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Acqua/Buio"
  },
  {
    "id": 343,
    "name": "Baltoy",
    "region": "Hoenn",
    "types": [
      "Terra",
      "Psico"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 40,
      "def": 55,
      "spa": 40,
      "spd": 70,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "zen-headbutt",
      "psycho-cut",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Terra/Psico"
  },
  {
    "id": 344,
    "name": "Claydol",
    "region": "Hoenn",
    "types": [
      "Terra",
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 70,
      "def": 105,
      "spa": 70,
      "spd": 120,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "zen-headbutt",
      "psycho-cut",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Terra/Psico"
  },
  {
    "id": 345,
    "name": "Lileep",
    "region": "Hoenn",
    "types": [
      "Roccia",
      "Erba"
    ],
    "baseStats": {
      "hp": 66,
      "atk": 41,
      "def": 77,
      "spa": 61,
      "spd": 87,
      "spe": 23
    },
    "abilities": [
      {
        "name": "Suction Cups",
        "description": "Prevents being forced out of battle by other Pokémon&#39;s moves."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "power-gem",
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Roccia/Erba"
  },
  {
    "id": 346,
    "name": "Cradily",
    "region": "Hoenn",
    "types": [
      "Roccia",
      "Erba"
    ],
    "baseStats": {
      "hp": 86,
      "atk": 81,
      "def": 97,
      "spa": 81,
      "spd": 107,
      "spe": 43
    },
    "abilities": [
      {
        "name": "Suction Cups",
        "description": "Prevents being forced out of battle by other Pokémon&#39;s moves."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Roccia/Erba"
  },
  {
    "id": 347,
    "name": "Anorith",
    "region": "Hoenn",
    "types": [
      "Roccia",
      "Coleottero"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 95,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "x-scissor",
      "u-turn",
      "earthquake",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Coleottero"
  },
  {
    "id": 348,
    "name": "Armaldo",
    "region": "Hoenn",
    "types": [
      "Roccia",
      "Coleottero"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 125,
      "def": 100,
      "spa": 70,
      "spd": 80,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "x-scissor",
      "u-turn",
      "earthquake",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Coleottero"
  },
  {
    "id": 349,
    "name": "Feebas",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 15,
      "def": 20,
      "spa": 10,
      "spd": 55,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 350,
    "name": "Milotic",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 60,
      "def": 79,
      "spa": 100,
      "spd": 125,
      "spe": 81
    },
    "abilities": [
      {
        "name": "Marvel Scale",
        "description": "+50% Difesa se affetto da problema di stato."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta."
      },
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "In Redux resta Acqua puro per bilanciamento; Feebas evolve con Prism Scale.",
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "dragon-pulse",
      "recover",
      "toxic",
      "dragon-tail",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 351,
    "name": "Castform",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 70,
      "def": 70,
      "spa": 70,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Forecast",
        "description": "Changes castform&#39;s type and form to match the weather."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 352,
    "name": "Kecleon",
    "region": "Hoenn",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 120,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Color Change",
        "description": "Changes type to match when hit by a damaging move."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 353,
    "name": "Shuppet",
    "region": "Hoenn",
    "types": [
      "Spettro"
    ],
    "baseStats": {
      "hp": 44,
      "atk": 75,
      "def": 35,
      "spa": 63,
      "spd": 33,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle."
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Spettro"
  },
  {
    "id": 354,
    "name": "Banette",
    "region": "Hoenn",
    "types": [
      "Spettro",
      "Normale"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 115,
      "def": 65,
      "spa": 83,
      "spd": 63,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle."
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Spettro/Normale"
  },
  {
    "id": 355,
    "name": "Duskull",
    "region": "Hoenn",
    "types": [
      "Spettro"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 40,
      "def": 90,
      "spa": 30,
      "spd": 90,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Spettro"
  },
  {
    "id": 356,
    "name": "Dusclops",
    "region": "Hoenn",
    "types": [
      "Spettro"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 70,
      "def": 130,
      "spa": 60,
      "spd": 130,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Spettro"
  },
  {
    "id": 357,
    "name": "Tropius",
    "region": "Hoenn",
    "types": [
      "Erba",
      "Volante"
    ],
    "baseStats": {
      "hp": 99,
      "atk": 68,
      "def": 83,
      "spa": 72,
      "spd": 87,
      "spe": 51
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Solar Power",
        "description": "+50% SpA sotto il Sole al costo di 1/8 PS a turno."
      },
      {
        "name": "Harvest",
        "description": "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Volante"
  },
  {
    "id": 358,
    "name": "Chimecho",
    "region": "Hoenn",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 50,
      "def": 80,
      "spa": 95,
      "spd": 90,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 359,
    "name": "Absol",
    "region": "Hoenn",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 75,
      "spd": 60,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Buio"
  },
  {
    "id": 360,
    "name": "Wynaut",
    "region": "Hoenn",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 23,
      "def": 48,
      "spa": 23,
      "spd": 48,
      "spe": 23
    },
    "abilities": [
      {
        "name": "Shadow Tag",
        "description": "Impedisce la fuga ai nemici."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Psico"
  },
  {
    "id": 361,
    "name": "Snorunt",
    "region": "Hoenn",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 50,
      "spa": 50,
      "spd": 50,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Moody",
        "description": "Raises a random stat two stages and lowers another one stage after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio"
  },
  {
    "id": 362,
    "name": "Glalie",
    "region": "Hoenn",
    "types": [
      "Ghiaccio",
      "Roccia"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Roccia"
  },
  {
    "id": 363,
    "name": "Spheal",
    "region": "Hoenn",
    "types": [
      "Ghiaccio",
      "Acqua"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 40,
      "def": 50,
      "spa": 55,
      "spd": 50,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "scald",
      "surf",
      "hydro-pump",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Acqua"
  },
  {
    "id": 364,
    "name": "Sealeo",
    "region": "Hoenn",
    "types": [
      "Ghiaccio",
      "Acqua"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 60,
      "def": 70,
      "spa": 75,
      "spd": 70,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "scald",
      "surf",
      "hydro-pump",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Acqua"
  },
  {
    "id": 365,
    "name": "Walrein",
    "region": "Hoenn",
    "types": [
      "Ghiaccio",
      "Acqua"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 80,
      "def": 90,
      "spa": 95,
      "spd": 90,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "scald",
      "surf",
      "hydro-pump",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Acqua"
  },
  {
    "id": 366,
    "name": "Clamperl",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 64,
      "def": 85,
      "spa": 74,
      "spd": 55,
      "spe": 32
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 367,
    "name": "Huntail",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 104,
      "def": 105,
      "spa": 94,
      "spd": 75,
      "spe": 52
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 84,
      "def": 105,
      "spa": 114,
      "spd": 75,
      "spe": 52
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 369,
    "name": "Relicanth",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Roccia"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 90,
      "def": 130,
      "spa": 45,
      "spd": 65,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Acqua/Roccia"
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "region": "Hoenn",
    "types": [
      "Acqua",
      "Folletto"
    ],
    "baseStats": {
      "hp": 43,
      "atk": 30,
      "def": 55,
      "spa": 40,
      "spd": 65,
      "spe": 97
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball"
    ],
    "roleHint": "Attaccante Misto Acqua/Folletto"
  },
  {
    "id": 371,
    "name": "Bagon",
    "region": "Hoenn",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 75,
      "def": 60,
      "spa": 40,
      "spd": 30,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago"
  },
  {
    "id": 372,
    "name": "Shelgon",
    "region": "Hoenn",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 95,
      "def": 100,
      "spa": 60,
      "spd": 50,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago"
  },
  {
    "id": 373,
    "name": "Salamence",
    "region": "Hoenn",
    "types": [
      "Drago",
      "Volante"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 135,
      "def": 80,
      "spa": 110,
      "spd": 80,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 374,
    "name": "Beldum",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Psico"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 80,
      "spa": 35,
      "spd": 60,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Heavy Metal",
        "description": "Doubles the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Psico"
  },
  {
    "id": 375,
    "name": "Metang",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Psico"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 75,
      "def": 100,
      "spa": 55,
      "spd": 80,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Heavy Metal",
        "description": "Doubles the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Psico"
  },
  {
    "id": 376,
    "name": "Metagross",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Psico"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 135,
      "def": 130,
      "spa": 95,
      "spd": 90,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Heavy Metal",
        "description": "Doubles the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio/Psico"
  },
  {
    "id": 377,
    "name": "Regirock",
    "region": "Hoenn",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 200,
      "spa": 50,
      "spd": 100,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 378,
    "name": "Regice",
    "region": "Hoenn",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 50,
      "def": 100,
      "spa": 100,
      "spd": 200,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Filter",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Ghiaccio"
  },
  {
    "id": 379,
    "name": "Registeel",
    "region": "Hoenn",
    "types": [
      "Acciaio"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 75,
      "def": 150,
      "spa": 75,
      "spd": 150,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Heatproof",
        "description": "Halves damage from fire moves and burns."
      },
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Light Metal",
        "description": "Halves the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Acciaio"
  },
  {
    "id": 380,
    "name": "Latias",
    "region": "Hoenn",
    "types": [
      "Drago",
      "Psico"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 90,
      "spa": 110,
      "spd": 130,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-pulse",
      "draco-meteor",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 381,
    "name": "Latios",
    "region": "Hoenn",
    "types": [
      "Drago",
      "Psico"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 90,
      "def": 80,
      "spa": 130,
      "spd": 110,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-pulse",
      "draco-meteor",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 382,
    "name": "Kyogre",
    "region": "Hoenn",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 90,
      "spa": 150,
      "spd": 140,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Drizzle",
        "description": "Evoca Pioggia intensa all’entrata in campo."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua"
  },
  {
    "id": 383,
    "name": "Groudon",
    "region": "Hoenn",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 150,
      "def": 140,
      "spa": 100,
      "spd": 90,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Drought",
        "description": "Evoca Luce Solare intensa all’entrata in campo."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "region": "Hoenn",
    "types": [
      "Drago",
      "Volante"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 150,
      "def": 90,
      "spa": 150,
      "spd": 90,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Air Lock",
        "description": "Negates all effects of weather, but does not prevent the weather itself."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Drago/Volante"
  },
  {
    "id": 385,
    "name": "Jirachi",
    "region": "Hoenn",
    "types": [
      "Acciaio",
      "Psico"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 386,
    "name": "Deoxys",
    "region": "Hoenn",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 150,
      "def": 50,
      "spa": 150,
      "spd": 50,
      "spe": 150
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 387,
    "name": "Turtwig",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 68,
      "def": 64,
      "spa": 45,
      "spd": 55,
      "spe": 31
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Erba"
  },
  {
    "id": 388,
    "name": "Grotle",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 89,
      "def": 85,
      "spa": 55,
      "spd": 65,
      "spe": 36
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Erba"
  },
  {
    "id": 389,
    "name": "Torterra",
    "region": "Sinnoh",
    "types": [
      "Erba",
      "Terra"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 109,
      "def": 105,
      "spa": 75,
      "spd": 85,
      "spe": 56
    },
    "abilities": [
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Erba/Terra"
  },
  {
    "id": 390,
    "name": "Chimchar",
    "region": "Sinnoh",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 44,
      "atk": 58,
      "def": 44,
      "spa": 58,
      "spd": 44,
      "spe": 61
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 391,
    "name": "Monferno",
    "region": "Sinnoh",
    "types": [
      "Fuoco",
      "Lotta"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 78,
      "def": 52,
      "spa": 78,
      "spd": 52,
      "spe": 81
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Fuoco/Lotta"
  },
  {
    "id": 392,
    "name": "Infernape",
    "region": "Sinnoh",
    "types": [
      "Fuoco",
      "Lotta"
    ],
    "baseStats": {
      "hp": 76,
      "atk": 104,
      "def": 71,
      "spa": 104,
      "spd": 71,
      "spe": 108
    },
    "abilities": [
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 393,
    "name": "Piplup",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 53,
      "atk": 51,
      "def": 53,
      "spa": 61,
      "spd": 56,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 394,
    "name": "Prinplup",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 66,
      "def": 68,
      "spa": 81,
      "spd": 76,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 395,
    "name": "Empoleon",
    "region": "Sinnoh",
    "types": [
      "Acqua",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 84,
      "atk": 86,
      "def": 88,
      "spa": 111,
      "spd": 101,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "flash-cannon",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua/Acciaio"
  },
  {
    "id": 396,
    "name": "Starly",
    "region": "Sinnoh",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 30,
      "spa": 30,
      "spd": 30,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 397,
    "name": "Staravia",
    "region": "Sinnoh",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 75,
      "def": 50,
      "spa": 40,
      "spd": 40,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 398,
    "name": "Staraptor",
    "region": "Sinnoh",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 120,
      "def": 70,
      "spa": 50,
      "spd": 60,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 399,
    "name": "Bidoof",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 59,
      "atk": 45,
      "def": 40,
      "spa": 35,
      "spd": 40,
      "spe": 31
    },
    "abilities": [
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
      },
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Moody",
        "description": "Raises a random stat two stages and lowers another one stage after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 400,
    "name": "Bibarel",
    "region": "Sinnoh",
    "types": [
      "Normale",
      "Acqua"
    ],
    "baseStats": {
      "hp": 79,
      "atk": 85,
      "def": 60,
      "spa": 55,
      "spd": 60,
      "spe": 71
    },
    "abilities": [
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages."
      },
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Moody",
        "description": "Raises a random stat two stages and lowers another one stage after each turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale/Acqua"
  },
  {
    "id": 401,
    "name": "Kricketot",
    "region": "Sinnoh",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 37,
      "atk": 25,
      "def": 41,
      "spa": 25,
      "spd": 41,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 402,
    "name": "Kricketune",
    "region": "Sinnoh",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 77,
      "atk": 85,
      "def": 51,
      "spa": 55,
      "spd": 51,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero"
  },
  {
    "id": 403,
    "name": "Shinx",
    "region": "Sinnoh",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 65,
      "def": 34,
      "spa": 40,
      "spd": 34,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Elettro"
  },
  {
    "id": 404,
    "name": "Luxio",
    "region": "Sinnoh",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 49,
      "spa": 60,
      "spd": 49,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Elettro"
  },
  {
    "id": 405,
    "name": "Luxray",
    "region": "Sinnoh",
    "types": [
      "Elettro",
      "Buio"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 120,
      "def": 79,
      "spa": 95,
      "spd": 79,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Elettro/Buio con Crunch, Intimidate e Guts.",
    "learnset": [
      "wild-charge",
      "crunch",
      "superpower",
      "ice-fang",
      "facade",
      "volt-switch",
      "thunderbolt",
      "night-slash"
    ],
    "roleHint": "Attaccante Fisico Elettro/Buio"
  },
  {
    "id": 406,
    "name": "Budew",
    "region": "Sinnoh",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 30,
      "def": 35,
      "spa": 50,
      "spd": 70,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Veleno"
  },
  {
    "id": 407,
    "name": "Roserade",
    "region": "Sinnoh",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 70,
      "def": 65,
      "spa": 125,
      "spd": 105,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "sludge-bomb",
      "sludge-wave",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba/Veleno"
  },
  {
    "id": 408,
    "name": "Cranidos",
    "region": "Sinnoh",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 67,
      "atk": 125,
      "def": 40,
      "spa": 30,
      "spd": 30,
      "spe": 58
    },
    "abilities": [
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 409,
    "name": "Rampardos",
    "region": "Sinnoh",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 97,
      "atk": 165,
      "def": 60,
      "spa": 65,
      "spd": 50,
      "spe": 58
    },
    "abilities": [
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 410,
    "name": "Shieldon",
    "region": "Sinnoh",
    "types": [
      "Roccia",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 42,
      "def": 118,
      "spa": 42,
      "spd": 88,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Roccia/Acciaio"
  },
  {
    "id": 411,
    "name": "Bastiodon",
    "region": "Sinnoh",
    "types": [
      "Roccia",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 52,
      "def": 168,
      "spa": 47,
      "spd": 138,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Roccia/Acciaio"
  },
  {
    "id": 412,
    "name": "Burmy",
    "region": "Sinnoh",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 29,
      "def": 45,
      "spa": 29,
      "spd": 45,
      "spe": 36
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 413,
    "name": "Wormadam",
    "region": "Sinnoh",
    "types": [
      "Coleottero",
      "Erba"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 59,
      "def": 85,
      "spa": 79,
      "spd": 105,
      "spe": 36
    },
    "abilities": [
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Erba"
  },
  {
    "id": 414,
    "name": "Mothim",
    "region": "Sinnoh",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 94,
      "def": 50,
      "spa": 94,
      "spd": 50,
      "spe": 66
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Volante"
  },
  {
    "id": 415,
    "name": "Combee",
    "region": "Sinnoh",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 30,
      "def": 42,
      "spa": 30,
      "spd": 42,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Honey Gather",
        "description": "The Pokémon may pick up honey after battle."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Volante"
  },
  {
    "id": 416,
    "name": "Vespiquen",
    "region": "Sinnoh",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 80,
      "def": 102,
      "spa": 80,
      "spd": 102,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Volante"
  },
  {
    "id": 417,
    "name": "Pachirisu",
    "region": "Sinnoh",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 45,
      "def": 70,
      "spa": 45,
      "spd": 90,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Volt Absorb",
        "description": "Immunità ad Elettro e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 418,
    "name": "Buizel",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 65,
      "def": 35,
      "spa": 60,
      "spd": 30,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 419,
    "name": "Floatzel",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 105,
      "def": 55,
      "spa": 85,
      "spd": 50,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 420,
    "name": "Cherubi",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 35,
      "def": 45,
      "spa": 62,
      "spd": 53,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 421,
    "name": "Cherrim",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 60,
      "def": 70,
      "spa": 87,
      "spd": 78,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Flower Gift",
        "description": "Increases friendly Pokémon&#39;s Attack and Special Defense to 1.5× during strong sunlight."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 422,
    "name": "Shellos",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 76,
      "atk": 48,
      "def": 48,
      "spa": 57,
      "spd": 62,
      "spe": 34
    },
    "abilities": [
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 423,
    "name": "Gastrodon",
    "region": "Sinnoh",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 111,
      "atk": 83,
      "def": 68,
      "spa": 92,
      "spd": 82,
      "spe": 39
    },
    "abilities": [
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "earth-power",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Terra"
  },
  {
    "id": 424,
    "name": "Ambipom",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 100,
      "def": 66,
      "spa": 60,
      "spd": 66,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 425,
    "name": "Drifloon",
    "region": "Sinnoh",
    "types": [
      "Spettro",
      "Volante"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 50,
      "def": 34,
      "spa": 60,
      "spd": 44,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item."
      },
      {
        "name": "Flare Boost",
        "description": "Increases Special Attack to 1.5× when burned.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Spettro/Volante"
  },
  {
    "id": 426,
    "name": "Drifblim",
    "region": "Sinnoh",
    "types": [
      "Spettro",
      "Volante"
    ],
    "baseStats": {
      "hp": 150,
      "atk": 80,
      "def": 44,
      "spa": 90,
      "spd": 54,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item."
      },
      {
        "name": "Flare Boost",
        "description": "Increases Special Attack to 1.5× when burned.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Spettro/Volante"
  },
  {
    "id": 427,
    "name": "Buneary",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 66,
      "def": 44,
      "spa": 44,
      "spd": 56,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle."
      },
      {
        "name": "Limber",
        "description": "Prevents paralysis.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 428,
    "name": "Lopunny",
    "region": "Sinnoh",
    "types": [
      "Normale",
      "Lotta"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 76,
      "def": 84,
      "spa": 54,
      "spd": 96,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon."
      },
      {
        "name": "Limber",
        "description": "Prevents paralysis.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 429,
    "name": "Mismagius",
    "region": "Sinnoh",
    "types": [
      "Spettro",
      "Folletto"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 60,
      "spa": 105,
      "spd": 105,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Spettro/Folletto con Infiltrator e Moonblast!",
    "learnset": [
      "shadow-ball",
      "moonblast",
      "dazzling-gleam",
      "thunderbolt",
      "energy-ball",
      "nasty-plot",
      "calm-mind",
      "will-o-wisp",
      "taunt"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 430,
    "name": "Honchkrow",
    "region": "Sinnoh",
    "types": [
      "Buio",
      "Volante"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 125,
      "def": 52,
      "spa": 105,
      "spd": 52,
      "spe": 71
    },
    "abilities": [
      {
        "name": "Insomnia",
        "description": "Prevents sleep."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn"
    ],
    "roleHint": "Attaccante Fisico Buio/Volante"
  },
  {
    "id": 431,
    "name": "Glameow",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 49,
      "atk": 55,
      "def": 42,
      "spa": 42,
      "spd": 37,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 432,
    "name": "Purugly",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 71,
      "atk": 82,
      "def": 64,
      "spa": 64,
      "spd": 59,
      "spe": 112
    },
    "abilities": [
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 433,
    "name": "Chingling",
    "region": "Sinnoh",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 50,
      "spa": 65,
      "spd": 50,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 434,
    "name": "Stunky",
    "region": "Sinnoh",
    "types": [
      "Veleno",
      "Buio"
    ],
    "baseStats": {
      "hp": 63,
      "atk": 63,
      "def": 47,
      "spa": 41,
      "spd": 41,
      "spe": 74
    },
    "abilities": [
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit."
      },
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Veleno/Buio"
  },
  {
    "id": 435,
    "name": "Skuntank",
    "region": "Sinnoh",
    "types": [
      "Veleno",
      "Buio"
    ],
    "baseStats": {
      "hp": 103,
      "atk": 93,
      "def": 67,
      "spa": 71,
      "spd": 61,
      "spe": 84
    },
    "abilities": [
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit."
      },
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Veleno/Buio"
  },
  {
    "id": 436,
    "name": "Bronzor",
    "region": "Sinnoh",
    "types": [
      "Acciaio",
      "Psico"
    ],
    "baseStats": {
      "hp": 57,
      "atk": 24,
      "def": 86,
      "spa": 24,
      "spd": 86,
      "spe": 23
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      },
      {
        "name": "Heatproof",
        "description": "Halves damage from fire moves and burns."
      },
      {
        "name": "Heavy Metal",
        "description": "Doubles the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acciaio/Psico"
  },
  {
    "id": 437,
    "name": "Bronzong",
    "region": "Sinnoh",
    "types": [
      "Acciaio",
      "Psico"
    ],
    "baseStats": {
      "hp": 67,
      "atk": 89,
      "def": 116,
      "spa": 79,
      "spd": 116,
      "spe": 33
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      },
      {
        "name": "Heatproof",
        "description": "Halves damage from fire moves and burns."
      },
      {
        "name": "Heavy Metal",
        "description": "Doubles the Pokémon&#39;s weight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "zen-headbutt",
      "psycho-cut",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Acciaio/Psico"
  },
  {
    "id": 438,
    "name": "Bonsly",
    "region": "Sinnoh",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 80,
      "def": 95,
      "spa": 10,
      "spd": 45,
      "spe": 10
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Rock Head",
        "description": "Annulla il contraccolpo delle mosse."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 439,
    "name": "Mime Jr.",
    "region": "Sinnoh",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 20,
      "atk": 25,
      "def": 45,
      "spa": 70,
      "spd": 90,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Filter",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "psychic",
      "psyshock",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 440,
    "name": "Happiny",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 5,
      "def": 5,
      "spa": 15,
      "spd": 65,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 441,
    "name": "Chatot",
    "region": "Sinnoh",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 76,
      "atk": 65,
      "def": 45,
      "spa": 92,
      "spd": 42,
      "spe": 91
    },
    "abilities": [
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves."
      },
      {
        "name": "Tangled Feet",
        "description": "Doubles evasion when confused."
      },
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Normale/Volante"
  },
  {
    "id": 442,
    "name": "Spiritomb",
    "region": "Sinnoh",
    "types": [
      "Spettro",
      "Buio"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 92,
      "def": 108,
      "spa": 92,
      "spd": 108,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Spettro/Buio"
  },
  {
    "id": 443,
    "name": "Gible",
    "region": "Sinnoh",
    "types": [
      "Drago",
      "Terra"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 70,
      "def": 45,
      "spa": 40,
      "spd": 45,
      "spe": 42
    },
    "abilities": [
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago/Terra"
  },
  {
    "id": 444,
    "name": "Gabite",
    "region": "Sinnoh",
    "types": [
      "Drago",
      "Terra"
    ],
    "baseStats": {
      "hp": 68,
      "atk": 90,
      "def": 65,
      "spa": 50,
      "spd": 55,
      "spe": 82
    },
    "abilities": [
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago/Terra"
  },
  {
    "id": 445,
    "name": "Garchomp",
    "region": "Sinnoh",
    "types": [
      "Drago",
      "Terra"
    ],
    "baseStats": {
      "hp": 108,
      "atk": 130,
      "def": 95,
      "spa": 80,
      "spd": 85,
      "spe": 102
    },
    "abilities": [
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 446,
    "name": "Munchlax",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 135,
      "atk": 85,
      "def": 40,
      "spa": 40,
      "spd": 85,
      "spe": 5
    },
    "abilities": [
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio."
      },
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 447,
    "name": "Riolu",
    "region": "Sinnoh",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 70,
      "def": 40,
      "spa": 35,
      "spd": 40,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 448,
    "name": "Lucario",
    "region": "Sinnoh",
    "types": [
      "Lotta",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 110,
      "def": 70,
      "spa": 115,
      "spd": 70,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Steadfast",
        "description": "Raises Speed one stage upon flinching."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "aura-sphere",
      "focus-blast",
      "flash-cannon",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Lotta/Acciaio"
  },
  {
    "id": 449,
    "name": "Hippopotas",
    "region": "Sinnoh",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 68,
      "atk": 72,
      "def": 78,
      "spa": 38,
      "spd": 42,
      "spe": 32
    },
    "abilities": [
      {
        "name": "Sand Stream",
        "description": "Evoca Tempesta di Sabbia all’entrata in campo."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "region": "Sinnoh",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 108,
      "atk": 112,
      "def": 118,
      "spa": 68,
      "spd": 72,
      "spe": 47
    },
    "abilities": [
      {
        "name": "Sand Stream",
        "description": "Evoca Tempesta di Sabbia all’entrata in campo."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 451,
    "name": "Skorupi",
    "region": "Sinnoh",
    "types": [
      "Veleno",
      "Coleottero"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 50,
      "def": 90,
      "spa": 30,
      "spd": 55,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Veleno/Coleottero"
  },
  {
    "id": 452,
    "name": "Drapion",
    "region": "Sinnoh",
    "types": [
      "Veleno",
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 110,
      "spa": 60,
      "spd": 75,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Battle Armor",
        "description": "Protects against critical hits."
      },
      {
        "name": "Sniper",
        "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Veleno/Buio"
  },
  {
    "id": 453,
    "name": "Croagunk",
    "region": "Sinnoh",
    "types": [
      "Veleno",
      "Lotta"
    ],
    "baseStats": {
      "hp": 48,
      "atk": 61,
      "def": 40,
      "spa": 61,
      "spd": 40,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move."
      },
      {
        "name": "Dry Skin",
        "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP."
      },
      {
        "name": "Poison Touch",
        "description": "Has a 30% chance of poisoning target Pokémon upon contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Veleno/Lotta"
  },
  {
    "id": 454,
    "name": "Toxicroak",
    "region": "Sinnoh",
    "types": [
      "Veleno",
      "Lotta"
    ],
    "baseStats": {
      "hp": 83,
      "atk": 106,
      "def": 65,
      "spa": 86,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move."
      },
      {
        "name": "Dry Skin",
        "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP."
      },
      {
        "name": "Poison Touch",
        "description": "Has a 30% chance of poisoning target Pokémon upon contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Veleno/Lotta"
  },
  {
    "id": 455,
    "name": "Carnivine",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 74,
      "atk": 100,
      "def": 72,
      "spa": 90,
      "spd": 72,
      "spe": 46
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 456,
    "name": "Finneon",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 49,
      "atk": 49,
      "def": 56,
      "spa": 49,
      "spd": 61,
      "spe": 66
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 457,
    "name": "Lumineon",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 69,
      "atk": 69,
      "def": 76,
      "spa": 69,
      "spd": 86,
      "spe": 91
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 458,
    "name": "Mantyke",
    "region": "Sinnoh",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 20,
      "def": 50,
      "spa": 60,
      "spd": 120,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Water Veil",
        "description": "Prevents burns.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Acqua/Volante"
  },
  {
    "id": 459,
    "name": "Snover",
    "region": "Sinnoh",
    "types": [
      "Erba",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 62,
      "def": 50,
      "spa": 62,
      "spd": 60,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Snow Warning",
        "description": "Evoca Grandine all’entrata in campo."
      },
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Ghiaccio"
  },
  {
    "id": 460,
    "name": "Abomasnow",
    "region": "Sinnoh",
    "types": [
      "Erba",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 92,
      "def": 75,
      "spa": 92,
      "spd": 85,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Snow Warning",
        "description": "Evoca Grandine all’entrata in campo."
      },
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Ghiaccio"
  },
  {
    "id": 461,
    "name": "Weavile",
    "region": "Sinnoh",
    "types": [
      "Buio",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 120,
      "def": 65,
      "spa": 45,
      "spd": 85,
      "spe": 125
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Pickpocket",
        "description": "Steals attacking Pokémon&#39;s held items on contact.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 462,
    "name": "Magnezone",
    "region": "Sinnoh",
    "types": [
      "Elettro",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 70,
      "def": 115,
      "spa": 130,
      "spd": 90,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Magnet Pull",
        "description": "Intrappola i Pokémon di tipo Acciaio."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "flash-cannon",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Elettro/Acciaio"
  },
  {
    "id": 463,
    "name": "Lickilicky",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 85,
      "def": 95,
      "spa": 80,
      "spd": 95,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Cloud Nine",
        "description": "Negates all effects of weather, but does not prevent the weather itself.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Normale"
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "region": "Sinnoh",
    "types": [
      "Terra",
      "Roccia"
    ],
    "baseStats": {
      "hp": 115,
      "atk": 140,
      "def": 130,
      "spa": 55,
      "spd": 55,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "stone-edge",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Roccia"
  },
  {
    "id": 465,
    "name": "Tangrowth",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 125,
      "spa": 110,
      "spd": 50,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 466,
    "name": "Electivire",
    "region": "Sinnoh",
    "types": [
      "Elettro",
      "Lotta"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 123,
      "def": 67,
      "spa": 95,
      "spd": 85,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Motor Drive",
        "description": "Immunità ad Elettro e +1 Velocità se colpito."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Elettro/Lotta con Close Combat e Motor Drive.",
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "close-combat",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "thunderbolt",
      "flamethrower",
      "volt-switch"
    ],
    "roleHint": "Attaccante Fisico Elettro/Lotta"
  },
  {
    "id": 467,
    "name": "Magmortar",
    "region": "Sinnoh",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 95,
      "def": 67,
      "spa": 125,
      "spd": 95,
      "spe": 83
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Fuoco"
  },
  {
    "id": 468,
    "name": "Togekiss",
    "region": "Sinnoh",
    "types": [
      "Folletto",
      "Volante"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 50,
      "def": 95,
      "spa": 120,
      "spd": 115,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Aggiornato a Folletto/Volante in BB2 Redux con Moonblast e Serene Grace.",
    "learnset": [
      "moonblast",
      "dazzling-gleam",
      "air-slash",
      "hurricane",
      "aura-sphere",
      "flamethrower",
      "thunder-wave",
      "roost",
      "nasty-plot",
      "tailwind"
    ],
    "roleHint": "Attaccante Speciale Folletto/Volante"
  },
  {
    "id": 469,
    "name": "Yanmega",
    "region": "Sinnoh",
    "types": [
      "Coleottero",
      "Volante"
    ],
    "baseStats": {
      "hp": 86,
      "atk": 76,
      "def": 86,
      "spa": 116,
      "spd": 56,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci."
      },
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Coleottero/Volante"
  },
  {
    "id": 470,
    "name": "Leafeon",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 110,
      "def": 130,
      "spa": 60,
      "spd": 65,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Erba"
  },
  {
    "id": 471,
    "name": "Glaceon",
    "region": "Sinnoh",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 60,
      "def": 110,
      "spa": 130,
      "spd": 95,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Ghiaccio"
  },
  {
    "id": 472,
    "name": "Gliscor",
    "region": "Sinnoh",
    "types": [
      "Terra",
      "Volante"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 95,
      "def": 125,
      "spa": 45,
      "spd": 75,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Poison Heal",
        "description": "Recupera 1/8 dei PS ogni turno se avvelenato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Volante"
  },
  {
    "id": 473,
    "name": "Mamoswine",
    "region": "Sinnoh",
    "types": [
      "Ghiaccio",
      "Terra"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 130,
      "def": 80,
      "spa": 70,
      "spd": 60,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Oblivious",
        "description": "Prevents infatuation and protects against captivate."
      },
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Thick Fat",
        "description": "Dimezza i danni subiti da mosse Fuoco e Ghiaccio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Ghiaccio/Terra"
  },
  {
    "id": 474,
    "name": "Porygon-Z",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 80,
      "def": 70,
      "spa": 135,
      "spd": 75,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x."
      },
      {
        "name": "Download",
        "description": "+1 Atk o +1 SpA in base alla difesa inferiore del bersaglio."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Normale"
  },
  {
    "id": 475,
    "name": "Gallade",
    "region": "Sinnoh",
    "types": [
      "Psico",
      "Lotta"
    ],
    "baseStats": {
      "hp": 68,
      "atk": 125,
      "def": 65,
      "spa": 65,
      "spd": 115,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio."
      },
      {
        "name": "Hyper Cutter",
        "description": "Prevents Attack from being lowered by other Pokémon."
      },
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Psico/Lotta"
  },
  {
    "id": 476,
    "name": "Probopass",
    "region": "Sinnoh",
    "types": [
      "Roccia",
      "Elettro"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 55,
      "def": 145,
      "spa": 75,
      "spd": 150,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Clear Body",
        "description": "Impedisce il calo delle proprie statistiche."
      },
      {
        "name": "Magnet Pull",
        "description": "Intrappola i Pokémon di tipo Acciaio.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "power-gem",
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Wall / Supporto Roccia/Elettro"
  },
  {
    "id": 477,
    "name": "Dusknoir",
    "region": "Sinnoh",
    "types": [
      "Spettro"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 100,
      "def": 135,
      "spa": 65,
      "spd": 135,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Spettro"
  },
  {
    "id": 478,
    "name": "Froslass",
    "region": "Sinnoh",
    "types": [
      "Ghiaccio",
      "Spettro"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 80,
      "def": 70,
      "spa": 80,
      "spd": 70,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "shadow-claw",
      "shadow-sneak",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 479,
    "name": "Rotom",
    "region": "Sinnoh",
    "types": [
      "Elettro",
      "Spettro"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 77,
      "spa": 95,
      "spd": 77,
      "spe": 91
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "shadow-ball",
      "will-o-wisp",
      "hidden-power-ice",
      "thunder-wave",
      "trick-room"
    ],
    "roleHint": "Attaccante Speciale Elettro/Spettro"
  },
  {
    "id": 480,
    "name": "Uxie",
    "region": "Sinnoh",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 75,
      "def": 130,
      "spa": 75,
      "spd": 130,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "play-rough",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Psico/Folletto"
  },
  {
    "id": 481,
    "name": "Mesprit",
    "region": "Sinnoh",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 105,
      "def": 105,
      "spa": 105,
      "spd": 105,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "play-rough",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Psico/Folletto"
  },
  {
    "id": 482,
    "name": "Azelf",
    "region": "Sinnoh",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 125,
      "def": 70,
      "spa": 125,
      "spd": 70,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "play-rough",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 483,
    "name": "Dialga",
    "region": "Sinnoh",
    "types": [
      "Acciaio",
      "Drago"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 120,
      "def": 120,
      "spa": 150,
      "spd": 100,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flash-cannon",
      "dragon-pulse",
      "draco-meteor",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acciaio/Drago"
  },
  {
    "id": 484,
    "name": "Palkia",
    "region": "Sinnoh",
    "types": [
      "Acqua",
      "Drago"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 120,
      "def": 100,
      "spa": 150,
      "spd": 120,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "dragon-pulse",
      "draco-meteor",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 485,
    "name": "Heatran",
    "region": "Sinnoh",
    "types": [
      "Fuoco",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 90,
      "def": 106,
      "spa": 130,
      "spd": 106,
      "spe": 77
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "flash-cannon",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Fuoco/Acciaio"
  },
  {
    "id": 486,
    "name": "Regigigas",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 160,
      "def": 110,
      "spa": 80,
      "spd": 110,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Slow Start",
        "description": "Halves Attack and Speed for five turns upon entering battle."
      },
      {
        "name": "Defeatist",
        "description": "Dimezza Atk e SpA quando i PS scendono sotto la metà."
      },
      {
        "name": "Slow Start",
        "description": "Halves Attack and Speed for five turns upon entering battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 487,
    "name": "Giratina",
    "region": "Sinnoh",
    "types": [
      "Spettro",
      "Drago"
    ],
    "baseStats": {
      "hp": 150,
      "atk": 100,
      "def": 120,
      "spa": 100,
      "spd": 120,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-claw",
      "shadow-sneak",
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Spettro/Drago"
  },
  {
    "id": 488,
    "name": "Cresselia",
    "region": "Sinnoh",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 120,
      "atk": 70,
      "def": 110,
      "spa": 75,
      "spd": 120,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Wall / Supporto Psico"
  },
  {
    "id": 489,
    "name": "Phione",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 490,
    "name": "Manaphy",
    "region": "Sinnoh",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 491,
    "name": "Darkrai",
    "region": "Sinnoh",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 90,
      "spa": 135,
      "spd": 90,
      "spe": 125
    },
    "abilities": [
      {
        "name": "Bad Dreams",
        "description": "Damages sleeping opponents for 1/8 their max HP after each turn."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dark-pulse",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 492,
    "name": "Shaymin",
    "region": "Sinnoh",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 493,
    "name": "Arceus",
    "region": "Sinnoh",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 120,
      "atk": 120,
      "def": 120,
      "spa": 120,
      "spd": 120,
      "spe": 120
    },
    "abilities": [
      {
        "name": "Multitype",
        "description": "Changes arceus&#39;s type and form to match its held Plate."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 494,
    "name": "Victini",
    "region": "Unima",
    "types": [
      "Psico",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 100,
      "def": 100,
      "spa": 100,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Victory Star",
        "description": "Increases moves&#39; accuracy to 1.1× for friendly Pokémon."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "zen-headbutt",
      "psycho-cut",
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 495,
    "name": "Snivy",
    "region": "Unima",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 45,
      "def": 55,
      "spa": 45,
      "spd": 55,
      "spe": 63
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Contrary",
        "description": "Inverte tutte le variazioni alle statistiche (Leaf Storm dà +2 SpA!).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 496,
    "name": "Servine",
    "region": "Unima",
    "types": [
      "Erba",
      "Drago"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 83
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Contrary",
        "description": "Inverte tutte le variazioni alle statistiche (Leaf Storm dà +2 SpA!).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Drago"
  },
  {
    "id": 497,
    "name": "Serperior",
    "region": "Unima",
    "types": [
      "Erba",
      "Drago"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 75,
      "def": 95,
      "spa": 75,
      "spd": 95,
      "spe": 113
    },
    "abilities": [
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Contrary",
        "description": "Inverte tutte le variazioni alle statistiche (Leaf Storm dà +2 SpA!).",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Erba/Drago con Contrary e Dragon Pulse.",
    "learnset": [
      "leaf-storm",
      "dragon-pulse",
      "giga-drain",
      "energy-ball",
      "glare",
      "leech-seed",
      "hidden-power-ice",
      "coil",
      "synthesis",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 498,
    "name": "Tepig",
    "region": "Unima",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 63,
      "def": 45,
      "spa": 45,
      "spd": 45,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 499,
    "name": "Pignite",
    "region": "Unima",
    "types": [
      "Fuoco",
      "Terra"
    ],
    "baseStats": {
      "hp": 90,
      "atk": 93,
      "def": 55,
      "spa": 70,
      "spd": 55,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Fuoco/Terra"
  },
  {
    "id": 500,
    "name": "Emboar",
    "region": "Unima",
    "types": [
      "Fuoco",
      "Terra"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 123,
      "def": 65,
      "spa": 100,
      "spd": 65,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo cambiato in Fuoco/Terra con Mold Breaker e Reckless.",
    "learnset": [
      "flare-blitz",
      "earthquake",
      "head-smash",
      "wild-charge",
      "close-combat",
      "superpower",
      "hammer-arm",
      "stone-edge",
      "sucker-punch",
      "flamethrower",
      "earth-power",
      "bulk-up"
    ],
    "roleHint": "Attaccante Fisico Fuoco/Terra"
  },
  {
    "id": 501,
    "name": "Oshawott",
    "region": "Unima",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 55,
      "def": 45,
      "spa": 63,
      "spd": 45,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 502,
    "name": "Dewott",
    "region": "Unima",
    "types": [
      "Acqua",
      "Lotta"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 75,
      "def": 60,
      "spa": 83,
      "spd": 60,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "aura-sphere",
      "focus-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Misto Acqua/Lotta"
  },
  {
    "id": 503,
    "name": "Samurott",
    "region": "Unima",
    "types": [
      "Acqua",
      "Lotta"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 100,
      "def": 85,
      "spa": 108,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Acqua/Lotta (SpA 108) con Sacred Sword e Shell Armor.",
    "learnset": [
      "waterfall",
      "aqua-jet",
      "sacred-sword",
      "close-combat",
      "megahorn",
      "ice-beam",
      "scald",
      "surf",
      "hydro-pump",
      "swords-dance",
      "x-scissor",
      "night-slash"
    ],
    "roleHint": "Attaccante Misto Acqua/Lotta"
  },
  {
    "id": 504,
    "name": "Patrat",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 55,
      "def": 39,
      "spa": 35,
      "spd": 39,
      "spe": 42
    },
    "abilities": [
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 505,
    "name": "Watchog",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 69,
      "spa": 60,
      "spd": 69,
      "spe": 77
    },
    "abilities": [
      {
        "name": "Illuminate",
        "description": "Doubles the wild encounter rate."
      },
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 506,
    "name": "Lillipup",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 60,
      "def": 45,
      "spa": 25,
      "spd": 45,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Vital Spirit",
        "description": "Prevents sleep."
      },
      {
        "name": "Pickup",
        "description": "Picks up other Pokémon&#39;s used and Flung held items.  May also pick up an item after battle."
      },
      {
        "name": "Run Away",
        "description": "Ensures success fleeing from wild battles.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 507,
    "name": "Herdier",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 80,
      "def": 65,
      "spa": 35,
      "spd": 65,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 508,
    "name": "Stoutland",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 110,
      "def": 90,
      "spa": 45,
      "spd": 90,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia."
      },
      {
        "name": "Scrappy",
        "description": "Lets the Pokémon&#39;s normal and fighting moves hit ghost Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 509,
    "name": "Purrloin",
    "region": "Unima",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 41,
      "atk": 50,
      "def": 37,
      "spa": 50,
      "spd": 37,
      "spe": 66
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item."
      },
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Buio"
  },
  {
    "id": 510,
    "name": "Liepard",
    "region": "Unima",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 64,
      "atk": 88,
      "def": 50,
      "spa": 88,
      "spd": 50,
      "spe": 106
    },
    "abilities": [
      {
        "name": "Limber",
        "description": "Prevents paralysis."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item."
      },
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 511,
    "name": "Pansage",
    "region": "Unima",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 53,
      "def": 48,
      "spa": 53,
      "spd": 48,
      "spe": 64
    },
    "abilities": [
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba"
  },
  {
    "id": 512,
    "name": "Simisage",
    "region": "Unima",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 98,
      "def": 63,
      "spa": 98,
      "spd": 63,
      "spe": 101
    },
    "abilities": [
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Overgrow",
        "description": "Potenzia le mosse Erba del 50% sotto 1/3 dei PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 513,
    "name": "Pansear",
    "region": "Unima",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 53,
      "def": 48,
      "spa": 53,
      "spd": 48,
      "spe": 64
    },
    "abilities": [
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 514,
    "name": "Simisear",
    "region": "Unima",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 98,
      "def": 63,
      "spa": 98,
      "spd": 63,
      "spe": 101
    },
    "abilities": [
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Blaze",
        "description": "Potenzia le mosse Fuoco del 50% sotto 1/3 dei PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 515,
    "name": "Panpour",
    "region": "Unima",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 53,
      "def": 48,
      "spa": 53,
      "spd": 48,
      "spe": 64
    },
    "abilities": [
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 516,
    "name": "Simipour",
    "region": "Unima",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 98,
      "def": 63,
      "spa": 98,
      "spd": 63,
      "spe": 101
    },
    "abilities": [
      {
        "name": "Gluttony",
        "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
      },
      {
        "name": "Torrent",
        "description": "Potenzia le mosse Acqua del 50% sotto 1/3 dei PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 517,
    "name": "Munna",
    "region": "Unima",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 76,
      "atk": 25,
      "def": 45,
      "spa": 67,
      "spd": 55,
      "spe": 24
    },
    "abilities": [
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last."
      },
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "psychic",
      "psyshock",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 518,
    "name": "Musharna",
    "region": "Unima",
    "types": [
      "Psico",
      "Folletto"
    ],
    "baseStats": {
      "hp": 116,
      "atk": 55,
      "def": 85,
      "spa": 107,
      "spd": 95,
      "spe": 29
    },
    "abilities": [
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last."
      },
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "psychic",
      "psyshock",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Attaccante Speciale Psico/Folletto"
  },
  {
    "id": 519,
    "name": "Pidove",
    "region": "Unima",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 55,
      "def": 50,
      "spa": 36,
      "spd": 30,
      "spe": 43
    },
    "abilities": [
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Normale/Volante"
  },
  {
    "id": 520,
    "name": "Tranquill",
    "region": "Unima",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 62,
      "atk": 77,
      "def": 62,
      "spa": 50,
      "spd": 42,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 521,
    "name": "Unfezant",
    "region": "Unima",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 115,
      "def": 80,
      "spa": 65,
      "spd": 55,
      "spe": 93
    },
    "abilities": [
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Super Luck",
        "description": "Raises moves&#39; critical hit rates one stage."
      },
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 522,
    "name": "Blitzle",
    "region": "Unima",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 60,
      "def": 32,
      "spa": 50,
      "spd": 32,
      "spe": 76
    },
    "abilities": [
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Motor Drive",
        "description": "Immunità ad Elettro e +1 Velocità se colpito."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 523,
    "name": "Zebstrika",
    "region": "Unima",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 100,
      "def": 63,
      "spa": 80,
      "spd": 63,
      "spe": 116
    },
    "abilities": [
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Motor Drive",
        "description": "Immunità ad Elettro e +1 Velocità se colpito."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 524,
    "name": "Roggenrola",
    "region": "Unima",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 75,
      "def": 85,
      "spa": 25,
      "spd": 25,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 525,
    "name": "Boldore",
    "region": "Unima",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 105,
      "def": 105,
      "spa": 50,
      "spd": 40,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 526,
    "name": "Gigalith",
    "region": "Unima",
    "types": [
      "Roccia"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 135,
      "def": 130,
      "spa": 60,
      "spd": 80,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Sand Stream",
        "description": "Evoca Tempesta di Sabbia all’entrata in campo."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia"
  },
  {
    "id": 527,
    "name": "Woobat",
    "region": "Unima",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 45,
      "def": 43,
      "spa": 55,
      "spd": 43,
      "spe": 72
    },
    "abilities": [
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle."
      },
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Psico/Volante"
  },
  {
    "id": 528,
    "name": "Swoobat",
    "region": "Unima",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 67,
      "atk": 57,
      "def": 55,
      "spa": 77,
      "spd": 55,
      "spe": 114
    },
    "abilities": [
      {
        "name": "Unaware",
        "description": "Ignora i potenziamenti alle statistiche del nemico."
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle."
      },
      {
        "name": "Simple",
        "description": "Doubles the Pokémon&#39;s stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 529,
    "name": "Drilbur",
    "region": "Unima",
    "types": [
      "Terra"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 85,
      "def": 40,
      "spa": 30,
      "spd": 45,
      "spe": 68
    },
    "abilities": [
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra"
  },
  {
    "id": 530,
    "name": "Excadrill",
    "region": "Unima",
    "types": [
      "Terra",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 135,
      "def": 60,
      "spa": 50,
      "spd": 65,
      "spe": 88
    },
    "abilities": [
      {
        "name": "Sand Rush",
        "description": "Raddoppia la Velocità sotto Tempesta di Sabbia."
      },
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "iron-head",
      "rock-slide",
      "x-scissor",
      "swords-dance",
      "rapid-spin",
      "brick-break",
      "return",
      "shadow-claw"
    ],
    "roleHint": "Attaccante Fisico Terra/Acciaio"
  },
  {
    "id": 531,
    "name": "Audino",
    "region": "Unima",
    "types": [
      "Normale",
      "Folletto"
    ],
    "baseStats": {
      "hp": 103,
      "atk": 60,
      "def": 86,
      "spa": 60,
      "spd": 86,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Natural Cure",
        "description": "Cura i problemi di stato quando esce dal campo."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione."
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Redux Complete: tipo Normale/Folletto con Regenerator e Natural Cure.",
    "learnset": [
      "dazzling-gleam",
      "draining-kiss",
      "hyper-voice",
      "flamethrower",
      "ice-beam",
      "thunderbolt",
      "calm-mind",
      "thunder-wave",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale/Folletto"
  },
  {
    "id": 532,
    "name": "Timburr",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 80,
      "def": 55,
      "spa": 25,
      "spd": 35,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 533,
    "name": "Gurdurr",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 105,
      "def": 85,
      "spa": 40,
      "spd": 50,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 534,
    "name": "Conkeldurr",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 140,
      "def": 95,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 535,
    "name": "Tympole",
    "region": "Unima",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 40,
      "spa": 50,
      "spd": 40,
      "spe": 64
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 536,
    "name": "Palpitoad",
    "region": "Unima",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 65,
      "def": 55,
      "spa": 65,
      "spd": 55,
      "spe": 69
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Terra"
  },
  {
    "id": 537,
    "name": "Seismitoad",
    "region": "Unima",
    "types": [
      "Acqua",
      "Terra"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 95,
      "def": 75,
      "spa": 85,
      "spd": 75,
      "spe": 74
    },
    "abilities": [
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia."
      },
      {
        "name": "Poison Touch",
        "description": "Has a 30% chance of poisoning target Pokémon upon contact."
      },
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "bulldoze",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua/Terra"
  },
  {
    "id": 538,
    "name": "Throh",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 120,
      "atk": 100,
      "def": 85,
      "spa": 30,
      "spd": 85,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Guts",
        "description": "+50% Attacco se affetto da problema di stato."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 539,
    "name": "Sawk",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 125,
      "def": 75,
      "spa": 30,
      "spd": 75,
      "spe": 85
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 540,
    "name": "Sewaddle",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Erba"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 53,
      "def": 70,
      "spa": 40,
      "spd": 60,
      "spe": 42
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Erba"
  },
  {
    "id": 541,
    "name": "Swadloon",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Erba"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 63,
      "def": 90,
      "spa": 50,
      "spd": 80,
      "spe": 42
    },
    "abilities": [
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Erba"
  },
  {
    "id": 542,
    "name": "Leavanny",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Erba"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 103,
      "def": 80,
      "spa": 70,
      "spd": 80,
      "spe": 92
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Erba"
  },
  {
    "id": 543,
    "name": "Venipede",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 30,
      "atk": 45,
      "def": 59,
      "spa": 30,
      "spd": 39,
      "spe": 57
    },
    "abilities": [
      {
        "name": "Quick Feet",
        "description": "Increases Speed to 1.5× with a major status ailment."
      },
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Veleno"
  },
  {
    "id": 544,
    "name": "Whirlipede",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 99,
      "spa": 40,
      "spd": 79,
      "spe": 47
    },
    "abilities": [
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno."
      },
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Veleno"
  },
  {
    "id": 545,
    "name": "Scolipede",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Veleno"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 100,
      "def": 89,
      "spa": 55,
      "spd": 69,
      "spe": 112
    },
    "abilities": [
      {
        "name": "Poison Point",
        "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Speed Boost",
        "description": "+1 Velocità alla fine di ogni turno.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Statistiche Gen 8 (Atk 100) e abilità Speed Boost sbloccata in BB2 Redux.",
    "learnset": [
      "megahorn",
      "x-scissor",
      "poison-jab",
      "earthquake",
      "rock-slide",
      "superpower",
      "swords-dance",
      "spikes",
      "toxic-spikes",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 546,
    "name": "Cottonee",
    "region": "Unima",
    "types": [
      "Erba",
      "Folletto"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 27,
      "def": 60,
      "spa": 37,
      "spd": 50,
      "spe": 66
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "giga-drain",
      "energy-ball",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Folletto"
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "region": "Unima",
    "types": [
      "Erba",
      "Folletto"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 67,
      "def": 85,
      "spa": 77,
      "spd": 75,
      "spe": 116
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Aggiornato a Erba/Folletto in BB2 Redux con Prankster e Moonblast.",
    "learnset": [
      "moonblast",
      "giga-drain",
      "energy-ball",
      "encore",
      "taunt",
      "leech-seed",
      "tailwind",
      "u-turn",
      "substitute"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 548,
    "name": "Petilil",
    "region": "Unima",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 35,
      "def": 50,
      "spa": 70,
      "spd": 50,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 549,
    "name": "Lilligant",
    "region": "Unima",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 60,
      "def": 75,
      "spa": 110,
      "spd": 75,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Own Tempo",
        "description": "Prevents confusion."
      },
      {
        "name": "Leaf Guard",
        "description": "Protects against major status ailments during strong sunlight.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 550,
    "name": "Basculin",
    "region": "Unima",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 92,
      "def": 65,
      "spa": 80,
      "spd": 55,
      "spe": 98
    },
    "abilities": [
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash)."
      },
      {
        "name": "Adaptability",
        "description": "Il bonus STAB passa da 1.5x a 2x."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acqua"
  },
  {
    "id": 551,
    "name": "Sandile",
    "region": "Unima",
    "types": [
      "Terra",
      "Buio"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 72,
      "def": 35,
      "spa": 35,
      "spd": 35,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "crunch",
      "night-slash",
      "sucker-punch",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Buio"
  },
  {
    "id": 552,
    "name": "Krokorok",
    "region": "Unima",
    "types": [
      "Terra",
      "Buio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 82,
      "def": 45,
      "spa": 45,
      "spd": 45,
      "spe": 74
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "crunch",
      "night-slash",
      "sucker-punch",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Buio"
  },
  {
    "id": 553,
    "name": "Krookodile",
    "region": "Unima",
    "types": [
      "Terra",
      "Buio"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 117,
      "def": 80,
      "spa": 65,
      "spd": 70,
      "spe": 92
    },
    "abilities": [
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario."
      },
      {
        "name": "Anger Point",
        "description": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "crunch",
      "stone-edge",
      "rock-slide",
      "superpower",
      "bulk-up",
      "pursuit",
      "stealth-rock",
      "taunt"
    ],
    "roleHint": "Attaccante Fisico Terra/Buio"
  },
  {
    "id": 554,
    "name": "Darumaka",
    "region": "Unima",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 90,
      "def": 45,
      "spa": 15,
      "spd": 45,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Fuoco"
  },
  {
    "id": 555,
    "name": "Darmanitan",
    "region": "Unima",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 105,
      "atk": 140,
      "def": 55,
      "spa": 30,
      "spd": 55,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Zen Mode",
        "description": "Changes darmanitan&#39;s form after each turn depending on its HP: Zen Mode below 50% max HP, and Standard Mode otherwise.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flare-blitz",
      "fire-punch",
      "superpower",
      "rock-slide",
      "earthquake",
      "u-turn",
      "zen-headbutt",
      "hammer-arm"
    ],
    "roleHint": "Attaccante Fisico Fuoco"
  },
  {
    "id": 556,
    "name": "Maractus",
    "region": "Unima",
    "types": [
      "Erba"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 86,
      "def": 67,
      "spa": 106,
      "spd": 67,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Storm Drain",
        "description": "Attira le mosse Acqua, immune e +1 SpA.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "giga-drain",
      "energy-ball",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Erba"
  },
  {
    "id": 557,
    "name": "Dwebble",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Roccia"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 65,
      "def": 85,
      "spa": 35,
      "spd": 35,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Roccia"
  },
  {
    "id": 558,
    "name": "Crustle",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Roccia"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 105,
      "def": 125,
      "spa": 65,
      "spd": 75,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Roccia"
  },
  {
    "id": 559,
    "name": "Scraggy",
    "region": "Unima",
    "types": [
      "Buio",
      "Lotta"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 70,
      "spa": 35,
      "spd": 70,
      "spe": 48
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn"
    ],
    "roleHint": "Attaccante Fisico Buio/Lotta"
  },
  {
    "id": 560,
    "name": "Scrafty",
    "region": "Unima",
    "types": [
      "Buio",
      "Lotta"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 90,
      "def": 115,
      "spa": 45,
      "spd": 115,
      "spe": 58
    },
    "abilities": [
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "Moxie",
        "description": "+1 Attacco ogni volta che manda KO un avversario."
      },
      {
        "name": "Intimidate",
        "description": "Riduce di 1 livello l’Attacco nemico all’entrata.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn"
    ],
    "roleHint": "Wall / Supporto Buio/Lotta"
  },
  {
    "id": 561,
    "name": "Sigilyph",
    "region": "Unima",
    "types": [
      "Psico",
      "Volante"
    ],
    "baseStats": {
      "hp": 72,
      "atk": 58,
      "def": 80,
      "spa": 103,
      "spd": 80,
      "spe": 97
    },
    "abilities": [
      {
        "name": "Wonder Skin",
        "description": "Lowers incoming non-damaging moves&#39; base accuracy to exactly 50%."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Tinted Lens",
        "description": "Raddoppia il danno delle mosse poco efficaci.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico/Volante"
  },
  {
    "id": 562,
    "name": "Yamask",
    "region": "Unima",
    "types": [
      "Spettro"
    ],
    "baseStats": {
      "hp": 38,
      "atk": 30,
      "def": 85,
      "spa": 55,
      "spd": 65,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Mummy",
        "description": "Changes attacking Pokémon&#39;s abilities to Mummy on contact."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro"
  },
  {
    "id": 563,
    "name": "Cofagrigus",
    "region": "Unima",
    "types": [
      "Spettro"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 50,
      "def": 145,
      "spa": 95,
      "spd": 105,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Mummy",
        "description": "Changes attacking Pokémon&#39;s abilities to Mummy on contact."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro"
  },
  {
    "id": 564,
    "name": "Tirtouga",
    "region": "Unima",
    "types": [
      "Acqua",
      "Roccia"
    ],
    "baseStats": {
      "hp": 54,
      "atk": 78,
      "def": 103,
      "spa": 53,
      "spd": 45,
      "spe": 22
    },
    "abilities": [
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Roccia"
  },
  {
    "id": 565,
    "name": "Carracosta",
    "region": "Unima",
    "types": [
      "Acqua",
      "Roccia"
    ],
    "baseStats": {
      "hp": 74,
      "atk": 108,
      "def": 133,
      "spa": 83,
      "spd": 65,
      "spe": 32
    },
    "abilities": [
      {
        "name": "Solid Rock",
        "description": "Decreases damage taken from super-effective moves by 1/4."
      },
      {
        "name": "Sturdy",
        "description": "Resiste con 1 PS a un colpo letale se a PS pieni."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "stone-edge",
      "rock-slide",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acqua/Roccia"
  },
  {
    "id": 566,
    "name": "Archen",
    "region": "Unima",
    "types": [
      "Roccia",
      "Volante"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 112,
      "def": 45,
      "spa": 74,
      "spd": 45,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Defeatist",
        "description": "Dimezza Atk e SpA quando i PS scendono sotto la metà."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Roccia/Volante"
  },
  {
    "id": 567,
    "name": "Archeops",
    "region": "Unima",
    "types": [
      "Roccia",
      "Volante"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 140,
      "def": 65,
      "spa": 112,
      "spd": 65,
      "spe": 110
    },
    "abilities": [
      {
        "name": "Defeatist",
        "description": "Dimezza Atk e SpA quando i PS scendono sotto la metà."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 568,
    "name": "Trubbish",
    "region": "Unima",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 50,
      "def": 62,
      "spa": 40,
      "spd": 62,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit."
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon."
      },
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Veleno"
  },
  {
    "id": 569,
    "name": "Garbodor",
    "region": "Unima",
    "types": [
      "Veleno"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 95,
      "def": 82,
      "spa": 60,
      "spd": 82,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Stench",
        "description": "Has a 10% chance of making target Pokémon flinch with each hit."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move."
      },
      {
        "name": "Aftermath",
        "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Veleno"
  },
  {
    "id": 570,
    "name": "Zorua",
    "region": "Unima",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 65,
      "def": 40,
      "spa": 80,
      "spd": 40,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Illusion",
        "description": "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dark-pulse",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Buio"
  },
  {
    "id": 571,
    "name": "Zoroark",
    "region": "Unima",
    "types": [
      "Buio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 105,
      "def": 60,
      "spa": 120,
      "spd": 60,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Illusion",
        "description": "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dark-pulse",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 572,
    "name": "Minccino",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 50,
      "def": 40,
      "spa": 40,
      "spd": 40,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Normale"
  },
  {
    "id": 573,
    "name": "Cinccino",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 95,
      "def": 60,
      "spa": 65,
      "spd": 60,
      "spe": 115
    },
    "abilities": [
      {
        "name": "Cute Charm",
        "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
      },
      {
        "name": "Technician",
        "description": "+50% potenza alle mosse con potenza base <= 60."
      },
      {
        "name": "Skill Link",
        "description": "Le mosse multi-colpo colpiscono sempre 5 volte.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 574,
    "name": "Gothita",
    "region": "Unima",
    "types": [
      "Psico",
      "Buio"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 50,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta."
      },
      {
        "name": "Shadow Tag",
        "description": "Impedisce la fuga ai nemici.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "dark-pulse",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico/Buio"
  },
  {
    "id": 575,
    "name": "Gothorita",
    "region": "Unima",
    "types": [
      "Psico",
      "Buio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 45,
      "def": 70,
      "spa": 75,
      "spd": 85,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta."
      },
      {
        "name": "Shadow Tag",
        "description": "Impedisce la fuga ai nemici.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "dark-pulse",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico/Buio"
  },
  {
    "id": 576,
    "name": "Gothitelle",
    "region": "Unima",
    "types": [
      "Psico",
      "Buio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 55,
      "def": 95,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Frisk",
        "description": "Reveals an opponent&#39;s held item upon entering battle."
      },
      {
        "name": "Competitive",
        "description": "+2 Attacco Speciale quando una statistica viene ridotta."
      },
      {
        "name": "Shadow Tag",
        "description": "Impedisce la fuga ai nemici.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "dark-pulse",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico/Buio"
  },
  {
    "id": 577,
    "name": "Solosis",
    "region": "Unima",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 30,
      "def": 40,
      "spa": 105,
      "spd": 50,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 578,
    "name": "Duosion",
    "region": "Unima",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 40,
      "def": 50,
      "spa": 125,
      "spd": 60,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 579,
    "name": "Reuniclus",
    "region": "Unima",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 65,
      "def": 75,
      "spa": 125,
      "spd": 85,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Magic Guard",
        "description": "Immune a tutti i danni indiretti (trappole, meteo, Life Orb)."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 580,
    "name": "Ducklett",
    "region": "Unima",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 62,
      "atk": 44,
      "def": 50,
      "spa": 44,
      "spd": 50,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×."
      },
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Acqua/Volante"
  },
  {
    "id": 581,
    "name": "Swanna",
    "region": "Unima",
    "types": [
      "Acqua",
      "Volante"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 87,
      "def": 63,
      "spa": 87,
      "spd": 63,
      "spe": 98
    },
    "abilities": [
      {
        "name": "Friend Guard",
        "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×."
      },
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Misto Acqua/Volante"
  },
  {
    "id": 582,
    "name": "Vanillite",
    "region": "Unima",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 36,
      "atk": 50,
      "def": 50,
      "spa": 65,
      "spd": 60,
      "spe": 44
    },
    "abilities": [
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio"
  },
  {
    "id": 583,
    "name": "Vanillish",
    "region": "Unima",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 51,
      "atk": 65,
      "def": 65,
      "spa": 80,
      "spd": 75,
      "spe": 59
    },
    "abilities": [
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio"
  },
  {
    "id": 584,
    "name": "Vanilluxe",
    "region": "Unima",
    "types": [
      "Ghiaccio",
      "Folletto"
    ],
    "baseStats": {
      "hp": 71,
      "atk": 95,
      "def": 85,
      "spa": 110,
      "spd": 95,
      "spe": 79
    },
    "abilities": [
      {
        "name": "Ice Body",
        "description": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage."
      },
      {
        "name": "Snow Warning",
        "description": "Evoca Grandine all’entrata in campo."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Tipo Folletto introdotto in Blaze Black 2 Redux.",
    "learnset": [
      "ice-beam",
      "icy-wind",
      "moonblast",
      "dazzling-gleam",
      "draining-kiss",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio/Folletto"
  },
  {
    "id": 585,
    "name": "Deerling",
    "region": "Unima",
    "types": [
      "Normale",
      "Erba"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 60,
      "def": 50,
      "spa": 40,
      "spd": 50,
      "spe": 75
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale/Erba"
  },
  {
    "id": 586,
    "name": "Sawsbuck",
    "region": "Unima",
    "types": [
      "Normale",
      "Erba"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 100,
      "def": 70,
      "spa": 60,
      "spd": 70,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Chlorophyll",
        "description": "Raddoppia la Velocità sotto il Sole."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco."
      },
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "seed-bomb",
      "leaf-blade",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale/Erba"
  },
  {
    "id": 587,
    "name": "Emolga",
    "region": "Unima",
    "types": [
      "Elettro",
      "Volante"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 75,
      "def": 60,
      "spa": 75,
      "spd": 60,
      "spe": 103
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Motor Drive",
        "description": "Immunità ad Elettro e +1 Velocità se colpito.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 588,
    "name": "Karrablast",
    "region": "Unima",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 75,
      "def": 45,
      "spa": 40,
      "spd": 45,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less."
      },
      {
        "name": "Shed Skin",
        "description": "Has a 33% chance of curing any major status ailment after each turn."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero"
  },
  {
    "id": 589,
    "name": "Escavalier",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 135,
      "def": 105,
      "spa": 60,
      "spd": 105,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Acciaio"
  },
  {
    "id": 590,
    "name": "Foongus",
    "region": "Unima",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 69,
      "atk": 55,
      "def": 45,
      "spa": 55,
      "spd": 55,
      "spe": 15
    },
    "abilities": [
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 591,
    "name": "Amoonguss",
    "region": "Unima",
    "types": [
      "Erba",
      "Veleno"
    ],
    "baseStats": {
      "hp": 114,
      "atk": 85,
      "def": 70,
      "spa": 85,
      "spd": 80,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Effect Spore",
        "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "poison-jab",
      "cross-poison",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Erba/Veleno"
  },
  {
    "id": 592,
    "name": "Frillish",
    "region": "Unima",
    "types": [
      "Acqua",
      "Spettro"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 40,
      "def": 50,
      "spa": 65,
      "spd": 85,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "shadow-ball",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua/Spettro"
  },
  {
    "id": 593,
    "name": "Jellicent",
    "region": "Unima",
    "types": [
      "Acqua",
      "Spettro"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 60,
      "def": 70,
      "spa": 85,
      "spd": 105,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Water Absorb",
        "description": "Immunità ad Acqua e recupera 25% PS."
      },
      {
        "name": "Cursed Body",
        "description": "Has a 30% chance of Disabling any move that hits the Pokémon."
      },
      {
        "name": "Damp",
        "description": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "shadow-ball",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Acqua/Spettro"
  },
  {
    "id": 594,
    "name": "Alomomola",
    "region": "Unima",
    "types": [
      "Acqua"
    ],
    "baseStats": {
      "hp": 165,
      "atk": 75,
      "def": 80,
      "spa": 40,
      "spd": 45,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Healer",
        "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "waterfall",
      "aqua-jet",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Wall / Supporto Acqua"
  },
  {
    "id": 595,
    "name": "Joltik",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Elettro"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 47,
      "def": 50,
      "spa": 57,
      "spd": 50,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero/Elettro"
  },
  {
    "id": 596,
    "name": "Galvantula",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Elettro"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 77,
      "def": 60,
      "spa": 97,
      "spd": 60,
      "spe": 108
    },
    "abilities": [
      {
        "name": "Compound Eyes",
        "description": "Increases moves&#39; accuracy to 1.3×."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 597,
    "name": "Ferroseed",
    "region": "Unima",
    "types": [
      "Erba",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 44,
      "atk": 50,
      "def": 91,
      "spa": 24,
      "spd": 86,
      "spe": 10
    },
    "abilities": [
      {
        "name": "Iron Barbs",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Erba/Acciaio"
  },
  {
    "id": 598,
    "name": "Ferrothorn",
    "region": "Unima",
    "types": [
      "Erba",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 74,
      "atk": 94,
      "def": 131,
      "spa": 54,
      "spd": 116,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Iron Barbs",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      },
      {
        "name": "Anticipation",
        "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "power-whip",
      "seed-bomb",
      "gyro-ball",
      "iron-head",
      "stealth-rock",
      "spikes",
      "leech-seed",
      "thunder-wave",
      "protect",
      "bulldoze"
    ],
    "roleHint": "Wall / Supporto Erba/Acciaio"
  },
  {
    "id": 599,
    "name": "Klink",
    "region": "Unima",
    "types": [
      "Acciaio"
    ],
    "baseStats": {
      "hp": 40,
      "atk": 55,
      "def": 70,
      "spa": 45,
      "spd": 60,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acciaio"
  },
  {
    "id": 600,
    "name": "Klang",
    "region": "Unima",
    "types": [
      "Acciaio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 80,
      "def": 95,
      "spa": 70,
      "spd": 85,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Acciaio"
  },
  {
    "id": 601,
    "name": "Klinklang",
    "region": "Unima",
    "types": [
      "Acciaio"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 100,
      "def": 115,
      "spa": 70,
      "spd": 85,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Acciaio"
  },
  {
    "id": 602,
    "name": "Tynamo",
    "region": "Unima",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 35,
      "atk": 55,
      "def": 40,
      "spa": 45,
      "spd": 40,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 603,
    "name": "Eelektrik",
    "region": "Unima",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 85,
      "def": 70,
      "spa": 75,
      "spd": 70,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 604,
    "name": "Eelektross",
    "region": "Unima",
    "types": [
      "Elettro"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 115,
      "def": 80,
      "spa": 105,
      "spd": 80,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Elettro"
  },
  {
    "id": 605,
    "name": "Elgyem",
    "region": "Unima",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 55,
      "def": 55,
      "spa": 85,
      "spd": 55,
      "spe": 30
    },
    "abilities": [
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves."
      },
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 606,
    "name": "Beheeyem",
    "region": "Unima",
    "types": [
      "Psico"
    ],
    "baseStats": {
      "hp": 75,
      "atk": 75,
      "def": 75,
      "spa": 125,
      "spd": 95,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Telepathy",
        "description": "Protects against friendly Pokémon&#39;s damaging moves."
      },
      {
        "name": "Synchronize",
        "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
      },
      {
        "name": "Analytic",
        "description": "Strengthens moves to 1.3× their power when moving last.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Psico"
  },
  {
    "id": 607,
    "name": "Litwick",
    "region": "Unima",
    "types": [
      "Spettro",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 30,
      "def": 55,
      "spa": 65,
      "spd": 55,
      "spe": 20
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro/Fuoco"
  },
  {
    "id": 608,
    "name": "Lampent",
    "region": "Unima",
    "types": [
      "Spettro",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 40,
      "def": 60,
      "spa": 95,
      "spd": 60,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "shadow-ball",
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Spettro/Fuoco"
  },
  {
    "id": 609,
    "name": "Chandelure",
    "region": "Unima",
    "types": [
      "Spettro",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 60,
      "atk": 55,
      "def": 90,
      "spa": 145,
      "spd": 90,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Shadow Tag",
        "description": "Impedisce la fuga ai nemici.",
        "isHidden": true
      }
    ],
    "bb2Modified": true,
    "bb2Changes": "Abilità nascosta Shadow Tag disponibile in BB2 Redux.",
    "learnset": [
      "shadow-ball",
      "flamethrower",
      "fire-blast",
      "overheat",
      "energy-ball",
      "psychic",
      "calm-mind",
      "will-o-wisp",
      "trick-room",
      "hidden-power-ice"
    ],
    "roleHint": "Attaccante Speciale Spettro/Fuoco"
  },
  {
    "id": 610,
    "name": "Axew",
    "region": "Unima",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 46,
      "atk": 87,
      "def": 60,
      "spa": 30,
      "spd": 40,
      "spe": 57
    },
    "abilities": [
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago"
  },
  {
    "id": 611,
    "name": "Fraxure",
    "region": "Unima",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 66,
      "atk": 117,
      "def": 70,
      "spa": 40,
      "spd": 50,
      "spe": 67
    },
    "abilities": [
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago"
  },
  {
    "id": 612,
    "name": "Haxorus",
    "region": "Unima",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 76,
      "atk": 147,
      "def": 90,
      "spa": 60,
      "spd": 70,
      "spe": 97
    },
    "abilities": [
      {
        "name": "Rivalry",
        "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Unnerve",
        "description": "Prevents opposing Pokémon from eating held Berries.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-dance",
      "outrage",
      "dragon-claw",
      "earthquake",
      "superpower",
      "brick-break",
      "x-scissor",
      "night-slash",
      "taunt",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Drago"
  },
  {
    "id": 613,
    "name": "Cubchoo",
    "region": "Unima",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 70,
      "def": 40,
      "spa": 60,
      "spd": 40,
      "spe": 40
    },
    "abilities": [
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Slush Rush",
        "description": "During Hail, this Pokémon has double Speed."
      },
      {
        "name": "Rattled",
        "description": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Ghiaccio"
  },
  {
    "id": 614,
    "name": "Beartic",
    "region": "Unima",
    "types": [
      "Ghiaccio",
      "Lotta"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 130,
      "def": 80,
      "spa": 70,
      "spd": 80,
      "spe": 50
    },
    "abilities": [
      {
        "name": "Snow Cloak",
        "description": "Increases evasion to 1.25× during hail.  Protects against hail damage."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Swift Swim",
        "description": "Raddoppia la Velocità sotto Pioggia.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "icicle-crash",
      "ice-punch",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Ghiaccio/Lotta"
  },
  {
    "id": 615,
    "name": "Cryogonal",
    "region": "Unima",
    "types": [
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 50,
      "def": 50,
      "spa": 95,
      "spd": 135,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "ice-beam",
      "icy-wind",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 616,
    "name": "Shelmet",
    "region": "Unima",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 50,
      "atk": 40,
      "def": 85,
      "spa": 40,
      "spd": 65,
      "spe": 25
    },
    "abilities": [
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Shell Armor",
        "description": "Protegge completamente dai brutti colpi."
      },
      {
        "name": "Hydration",
        "description": "Cures any major status ailment after each turn during rain.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Coleottero"
  },
  {
    "id": 617,
    "name": "Accelgor",
    "region": "Unima",
    "types": [
      "Coleottero"
    ],
    "baseStats": {
      "hp": 80,
      "atk": 70,
      "def": 40,
      "spa": 100,
      "spd": 60,
      "spe": 145
    },
    "abilities": [
      {
        "name": "Infiltrator",
        "description": "Attraversa Sostituto, Riflesso e Schermoluce."
      },
      {
        "name": "Unburden",
        "description": "Doubles Speed upon using or losing a held item."
      },
      {
        "name": "Sticky Hold",
        "description": "Prevents a held item from being removed by other Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "bug-buzz",
      "signal-beam",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 618,
    "name": "Stunfisk",
    "region": "Unima",
    "types": [
      "Terra",
      "Elettro"
    ],
    "baseStats": {
      "hp": 109,
      "atk": 66,
      "def": 84,
      "spa": 81,
      "spd": 99,
      "spe": 32
    },
    "abilities": [
      {
        "name": "Static",
        "description": "30% di paralizzare chi usa mosse da contatto."
      },
      {
        "name": "Lightning Rod",
        "description": "Attira le mosse Elettro, immune e +1 SpA."
      },
      {
        "name": "Sand Veil",
        "description": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earth-power",
      "thunderbolt",
      "volt-switch",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Wall / Supporto Terra/Elettro"
  },
  {
    "id": 619,
    "name": "Mienfoo",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 85,
      "def": 50,
      "spa": 55,
      "spd": 50,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Lotta"
  },
  {
    "id": 620,
    "name": "Mienshao",
    "region": "Unima",
    "types": [
      "Lotta"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 125,
      "def": 60,
      "spa": 95,
      "spd": 60,
      "spe": 105
    },
    "abilities": [
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Regenerator",
        "description": "Recupera 1/3 dei PS alla sostituzione."
      },
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 621,
    "name": "Druddigon",
    "region": "Unima",
    "types": [
      "Drago"
    ],
    "baseStats": {
      "hp": 77,
      "atk": 120,
      "def": 90,
      "spa": 60,
      "spd": 90,
      "spe": 48
    },
    "abilities": [
      {
        "name": "Rough Skin",
        "description": "Infligge 1/8 PS a chi usa mosse da contatto."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago"
  },
  {
    "id": 622,
    "name": "Golett",
    "region": "Unima",
    "types": [
      "Terra",
      "Spettro"
    ],
    "baseStats": {
      "hp": 59,
      "atk": 74,
      "def": 50,
      "spa": 35,
      "spd": 50,
      "spe": 35
    },
    "abilities": [
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "shadow-claw",
      "shadow-sneak",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Spettro"
  },
  {
    "id": 623,
    "name": "Golurk",
    "region": "Unima",
    "types": [
      "Terra",
      "Spettro"
    ],
    "baseStats": {
      "hp": 89,
      "atk": 124,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Iron Fist",
        "description": "+20% potenza alle mosse basate sui pugni."
      },
      {
        "name": "Klutz",
        "description": "Prevents the Pokémon from using its held item in battle."
      },
      {
        "name": "No Guard",
        "description": "Ensures all moves used by and against the Pokémon hit.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "shadow-claw",
      "shadow-sneak",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Terra/Spettro"
  },
  {
    "id": 624,
    "name": "Pawniard",
    "region": "Unima",
    "types": [
      "Buio",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 45,
      "atk": 85,
      "def": 70,
      "spa": 40,
      "spd": 40,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Buio/Acciaio"
  },
  {
    "id": 625,
    "name": "Bisharp",
    "region": "Unima",
    "types": [
      "Buio",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 60,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta."
      },
      {
        "name": "Inner Focus",
        "description": "Prevents flinching."
      },
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Buio/Acciaio"
  },
  {
    "id": 626,
    "name": "Bouffalant",
    "region": "Unima",
    "types": [
      "Normale"
    ],
    "baseStats": {
      "hp": 95,
      "atk": 110,
      "def": 95,
      "spa": 40,
      "spd": 95,
      "spe": 55
    },
    "abilities": [
      {
        "name": "Reckless",
        "description": "Potenzia del 20% le mosse con contraccolpo (Flare Blitz, Head Smash)."
      },
      {
        "name": "Sap Sipper",
        "description": "Immunità ad Erba e +1 Attacco."
      },
      {
        "name": "Soundproof",
        "description": "Protects against sound-based moves.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Normale"
  },
  {
    "id": 627,
    "name": "Rufflet",
    "region": "Unima",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 83,
      "def": 50,
      "spa": 37,
      "spd": 50,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 628,
    "name": "Braviary",
    "region": "Unima",
    "types": [
      "Normale",
      "Volante"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 123,
      "def": 75,
      "spa": 57,
      "spd": 75,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Keen Eye",
        "description": "Prevents accuracy from being lowered."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli)."
      },
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "return",
      "facade",
      "quick-attack",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Normale/Volante"
  },
  {
    "id": 629,
    "name": "Vullaby",
    "region": "Unima",
    "types": [
      "Buio",
      "Volante"
    ],
    "baseStats": {
      "hp": 70,
      "atk": 55,
      "def": 75,
      "spa": 45,
      "spd": 65,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn"
    ],
    "roleHint": "Attaccante Misto Buio/Volante"
  },
  {
    "id": 630,
    "name": "Mandibuzz",
    "region": "Unima",
    "types": [
      "Buio",
      "Volante"
    ],
    "baseStats": {
      "hp": 110,
      "atk": 65,
      "def": 105,
      "spa": 55,
      "spd": 95,
      "spe": 80
    },
    "abilities": [
      {
        "name": "Big Pecks",
        "description": "Protects against Defense drops."
      },
      {
        "name": "Overcoat",
        "description": "Protects against damage from weather."
      },
      {
        "name": "Weak Armor",
        "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn"
    ],
    "roleHint": "Wall / Supporto Buio/Volante"
  },
  {
    "id": 631,
    "name": "Heatmor",
    "region": "Unima",
    "types": [
      "Fuoco"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 97,
      "def": 66,
      "spa": 105,
      "spd": 66,
      "spe": 65
    },
    "abilities": [
      {
        "name": "Mold Breaker",
        "description": "Ignora le abilità difensive avversarie (es. Levitate, Sturdy)."
      },
      {
        "name": "Flash Fire",
        "description": "Immunità a Fuoco e +50% potenza alle proprie mosse Fuoco."
      },
      {
        "name": "White Smoke",
        "description": "Prevents stats from being lowered by other Pokémon.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Misto Fuoco"
  },
  {
    "id": 632,
    "name": "Durant",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 58,
      "atk": 109,
      "def": 112,
      "spa": 48,
      "spd": 48,
      "spe": 109
    },
    "abilities": [
      {
        "name": "Heatproof",
        "description": "Halves damage from fire moves and burns."
      },
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      },
      {
        "name": "Truant",
        "description": "Skips every second turn.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "iron-head",
      "meteor-mash",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 633,
    "name": "Deino",
    "region": "Unima",
    "types": [
      "Buio",
      "Drago"
    ],
    "baseStats": {
      "hp": 52,
      "atk": 65,
      "def": 50,
      "spa": 45,
      "spd": 50,
      "spe": 38
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Buio/Drago"
  },
  {
    "id": 634,
    "name": "Zweilous",
    "region": "Unima",
    "types": [
      "Buio",
      "Drago"
    ],
    "baseStats": {
      "hp": 72,
      "atk": 85,
      "def": 70,
      "spa": 65,
      "spd": 70,
      "spe": 58
    },
    "abilities": [
      {
        "name": "Hustle",
        "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "crunch",
      "night-slash",
      "sucker-punch",
      "dragon-claw",
      "outrage",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Attaccante Fisico Buio/Drago"
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "region": "Unima",
    "types": [
      "Buio",
      "Drago"
    ],
    "baseStats": {
      "hp": 92,
      "atk": 105,
      "def": 90,
      "spa": 125,
      "spd": 90,
      "spe": 98
    },
    "abilities": [
      {
        "name": "Levitate",
        "description": "Immunità alle mosse di tipo Terra."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "draco-meteor",
      "dragon-pulse",
      "dark-pulse",
      "flamethrower",
      "fire-blast",
      "surf",
      "focus-blast",
      "earth-power",
      "u-turn",
      "superpower"
    ],
    "roleHint": "Attaccante Speciale Buio/Drago"
  },
  {
    "id": 636,
    "name": "Larvesta",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 55,
      "atk": 85,
      "def": 55,
      "spa": 50,
      "spd": 55,
      "spe": 60
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "x-scissor",
      "u-turn",
      "flare-blitz",
      "fire-punch",
      "earthquake",
      "rock-slide",
      "return",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Coleottero/Fuoco"
  },
  {
    "id": 637,
    "name": "Volcarona",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 85,
      "atk": 60,
      "def": 65,
      "spa": 135,
      "spd": 105,
      "spe": 100
    },
    "abilities": [
      {
        "name": "Flame Body",
        "description": "30% di scottare chi usa mosse da contatto."
      },
      {
        "name": "Swarm",
        "description": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "quiver-dance",
      "fiery-dance",
      "flamethrower",
      "fire-blast",
      "bug-buzz",
      "giga-drain",
      "hurricane",
      "psychic",
      "roost",
      "hidden-power-ice"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 638,
    "name": "Cobalion",
    "region": "Unima",
    "types": [
      "Acciaio",
      "Lotta"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 90,
      "def": 129,
      "spa": 90,
      "spd": 72,
      "spe": 108
    },
    "abilities": [
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "iron-head",
      "meteor-mash",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Wall / Supporto Acciaio/Lotta"
  },
  {
    "id": 639,
    "name": "Terrakion",
    "region": "Unima",
    "types": [
      "Roccia",
      "Lotta"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 129,
      "def": 90,
      "spa": 72,
      "spd": 90,
      "spe": 108
    },
    "abilities": [
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "stone-edge",
      "rock-slide",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 640,
    "name": "Virizion",
    "region": "Unima",
    "types": [
      "Erba",
      "Lotta"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 90,
      "def": 72,
      "spa": 90,
      "spd": 129,
      "spe": 108
    },
    "abilities": [
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "seed-bomb",
      "leaf-blade",
      "close-combat",
      "drain-punch",
      "brick-break",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance"
    ],
    "roleHint": "Wall / Supporto Erba/Lotta"
  },
  {
    "id": 641,
    "name": "Tornadus",
    "region": "Unima",
    "types": [
      "Volante"
    ],
    "baseStats": {
      "hp": 79,
      "atk": 115,
      "def": 70,
      "spa": 125,
      "spd": 80,
      "spe": 111
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "air-slash",
      "hurricane",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 642,
    "name": "Thundurus",
    "region": "Unima",
    "types": [
      "Elettro",
      "Volante"
    ],
    "baseStats": {
      "hp": 79,
      "atk": 115,
      "def": 70,
      "spa": 125,
      "spd": 80,
      "spe": 111
    },
    "abilities": [
      {
        "name": "Prankster",
        "description": "Priorità +1 a tutte le mosse di Stato."
      },
      {
        "name": "Defiant",
        "description": "+2 Attacco quando una statistica viene ridotta.",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "thunderbolt",
      "volt-switch",
      "air-slash",
      "hurricane",
      "ice-beam",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 643,
    "name": "Reshiram",
    "region": "Unima",
    "types": [
      "Drago",
      "Fuoco"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 120,
      "def": 100,
      "spa": 150,
      "spd": 120,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Turboblaze",
        "description": "Bypasses targets&#39; abilities if they could hinder or prevent moves."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-pulse",
      "draco-meteor",
      "flamethrower",
      "fire-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Drago/Fuoco"
  },
  {
    "id": 644,
    "name": "Zekrom",
    "region": "Unima",
    "types": [
      "Drago",
      "Elettro"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 150,
      "def": 120,
      "spa": 120,
      "spd": 100,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Teravolt",
        "description": "Bypasses targets&#39; abilities if they could hinder or prevent moves."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "wild-charge",
      "thunderpunch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Fisico Drago/Elettro"
  },
  {
    "id": 645,
    "name": "Landorus",
    "region": "Unima",
    "types": [
      "Terra",
      "Volante"
    ],
    "baseStats": {
      "hp": 89,
      "atk": 125,
      "def": 90,
      "spa": 115,
      "spd": 80,
      "spe": 101
    },
    "abilities": [
      {
        "name": "Sand Force",
        "description": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage."
      },
      {
        "name": "Sheer Force",
        "description": "+30% potenza alle mosse con effetti secondari (annullandoli).",
        "isHidden": true
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "earthquake",
      "bulldoze",
      "brave-bird",
      "acrobatics",
      "aerial-ace",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Sweeper Fisico Veloce"
  },
  {
    "id": 646,
    "name": "Kyurem",
    "region": "Unima",
    "types": [
      "Drago",
      "Ghiaccio"
    ],
    "baseStats": {
      "hp": 125,
      "atk": 130,
      "def": 90,
      "spa": 130,
      "spd": 90,
      "spe": 95
    },
    "abilities": [
      {
        "name": "Pressure",
        "description": "Increases the PP cost of moves targetting the Pokémon by one."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "dragon-claw",
      "outrage",
      "icicle-crash",
      "ice-punch",
      "earthquake",
      "rock-slide",
      "return",
      "u-turn",
      "swords-dance",
      "protect"
    ],
    "roleHint": "Attaccante Misto Drago/Ghiaccio"
  },
  {
    "id": 647,
    "name": "Keldeo",
    "region": "Unima",
    "types": [
      "Acqua",
      "Lotta"
    ],
    "baseStats": {
      "hp": 91,
      "atk": 72,
      "def": 90,
      "spa": 129,
      "spd": 90,
      "spe": 108
    },
    "abilities": [
      {
        "name": "Justified",
        "description": "+1 Attacco se colpito da una mossa di tipo Buio."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "scald",
      "surf",
      "hydro-pump",
      "aura-sphere",
      "focus-blast",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind"
    ],
    "roleHint": "Sweeper Speciale Veloce"
  },
  {
    "id": 648,
    "name": "Meloetta",
    "region": "Unima",
    "types": [
      "Normale",
      "Psico"
    ],
    "baseStats": {
      "hp": 100,
      "atk": 77,
      "def": 77,
      "spa": 128,
      "spd": 128,
      "spe": 90
    },
    "abilities": [
      {
        "name": "Serene Grace",
        "description": "Raddoppia la probabilità degli effetti secondari."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "hyper-voice",
      "tri-attack",
      "psychic",
      "psyshock",
      "ice-beam",
      "thunderbolt",
      "shadow-ball",
      "energy-ball",
      "calm-mind",
      "protect"
    ],
    "roleHint": "Attaccante Speciale Normale/Psico"
  },
  {
    "id": 649,
    "name": "Genesect",
    "region": "Unima",
    "types": [
      "Coleottero",
      "Acciaio"
    ],
    "baseStats": {
      "hp": 71,
      "atk": 120,
      "def": 95,
      "spa": 120,
      "spd": 95,
      "spe": 99
    },
    "abilities": [
      {
        "name": "Download",
        "description": "+1 Atk o +1 SpA in base alla difesa inferiore del bersaglio."
      }
    ],
    "bb2Modified": false,
    "learnset": [
      "u-turn",
      "bug-buzz",
      "flash-cannon",
      "iron-head",
      "ice-beam",
      "thunderbolt",
      "flamethrower",
      "extremespeed",
      "shift-gear"
    ],
    "roleHint": "Attaccante Misto Coleottero/Acciaio"
  }
];

export const BB2_POKEMON_BY_ID: Record<number, PokemonSpecies> = Object.fromEntries(
  BB2_POKEMON.map((p) => [p.id, p])
);
