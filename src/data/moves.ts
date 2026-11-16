import { MoveData } from '../types/pokemon';

export const MOVES_LIST: MoveData[] = [
  // Normale
  { id: 'return', name: 'Return', type: 'Normale', category: 'Fisico', power: 102, accuracy: 100, pp: 20, description: 'Potenza massima (102) con felicità al massimo.' },
  { id: 'extremespeed', name: 'ExtremeSpeed', type: 'Normale', category: 'Fisico', power: 80, accuracy: 100, pp: 5, description: 'Attacco prioritario (+2) ad alta velocità.' },
  { id: 'quick-attack', name: 'Quick Attack', type: 'Normale', category: 'Fisico', power: 40, accuracy: 100, pp: 30, description: 'Attacco prioritario (+1).' },
  { id: 'hyper-voice', name: 'Hyper Voice', type: 'Normale', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: 'Onda sonora potente che colpisce tutti i nemici.' },
  { id: 'tri-attack', name: 'Tri Attack', type: 'Normale', category: 'Speciale', power: 80, accuracy: 100, pp: 10, description: 'Può scottare, congelare o paralizzare (20%).' },
  { id: 'tail-slap', name: 'Tail Slap', type: 'Normale', category: 'Fisico', power: 25, accuracy: 85, pp: 10, description: 'Colpisce 2-5 volte; devastante con Skill Link.' },
  { id: 'fake-out', name: 'Fake Out', type: 'Normale', category: 'Fisico', power: 40, accuracy: 100, pp: 10, description: 'Priorità +3, fa tentennare al primo turno.' },
  { id: 'rapid-spin', name: 'Rapid Spin', type: 'Normale', category: 'Fisico', power: 20, accuracy: 100, pp: 40, description: 'Rimuove Levitoroccia, Punte e Fielepunte.' },
  { id: 'shell-smash', name: 'Shell Smash', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 15, description: '+2 Atk, +2 SpA, +2 Vel; -1 Dif e DifSp.' },
  { id: 'swords-dance', name: 'Swords Dance', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 30, description: 'Aumenta di 2 livelli l’Attacco.' },
  { id: 'work-up', name: 'Work Up', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 30, description: 'Aumenta di 1 livello Atk e SpA.' },
  { id: 'protect', name: 'Protect', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 10, description: 'Protegge completamente il Pokémon per un turno.' },
  { id: 'substitute', name: 'Substitute', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 10, description: 'Crea un sostituto usando il 25% dei PS.' },
  { id: 'recover', name: 'Recover', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 10, description: 'Ripristina il 50% dei PS massimi.' },
  { id: 'softboiled', name: 'Softboiled', type: 'Normale', category: 'Stato', power: 0, accuracy: null, pp: 10, description: 'Ripristina il 50% dei PS massimi.' },
  { id: 'glare', name: 'Glare', type: 'Normale', category: 'Stato', power: 0, accuracy: 90, pp: 30, description: 'Paralizza il bersaglio (anche tipo Terra).' },
  { id: 'encore', name: 'Encore', type: 'Normale', category: 'Stato', power: 0, accuracy: 100, pp: 5, description: 'Costringe il nemico a ripetere l’ultima mossa.' },
  { id: 'facade', name: 'Facade', type: 'Normale', category: 'Fisico', power: 70, accuracy: 100, pp: 20, description: 'Potenza raddoppiata (140) se scottato/avvelenato.' },
  { id: 'entrainment', name: 'Entrainment', type: 'Normale', category: 'Stato', power: 0, accuracy: 100, pp: 15, description: 'Trasferisce la propria Abilità (es. Truant) al bersaglio.' },

  // Fuoco
  { id: 'flamethrower', name: 'Flamethrower', type: 'Fuoco', category: 'Speciale', power: 95, accuracy: 100, pp: 15, description: 'Potenza 95 (Gen 5), può scottare (10%).' },
  { id: 'fire-blast', name: 'Fire Blast', type: 'Fuoco', category: 'Speciale', power: 120, accuracy: 85, pp: 5, description: 'Potenza 120 (Gen 5), alto danno Fuoco.' },
  { id: 'heat-wave', name: 'Heat Wave', type: 'Fuoco', category: 'Speciale', power: 100, accuracy: 90, pp: 10, description: 'Colpisce entrambi gli avversari in doppio.' },
  { id: 'overheat', name: 'Overheat', type: 'Fuoco', category: 'Speciale', power: 140, accuracy: 90, pp: 5, description: 'Potenza 140; cala SpA di 2 (sale con Contrary!).' },
  { id: 'eruption', name: 'Eruption', type: 'Fuoco', category: 'Speciale', power: 150, accuracy: 100, pp: 5, description: 'Potenza proporzionale ai PS residui.' },
  { id: 'fiery-dance', name: 'Fiery Dance', type: 'Fuoco', category: 'Speciale', power: 80, accuracy: 100, pp: 10, description: '50% probabilità di aumentare SpA di +1.' },
  { id: 'flare-blitz', name: 'Flare Blitz', type: 'Fuoco', category: 'Fisico', power: 120, accuracy: 100, pp: 15, description: 'Danno fisico enorme con contraccolpo (1/3).' },
  { id: 'fire-punch', name: 'Fire Punch', type: 'Fuoco', category: 'Fisico', power: 75, accuracy: 100, pp: 15, description: 'Pugno infuocato senza contraccolpo.' },
  { id: 'blaze-kick', name: 'Blaze Kick', type: 'Fuoco', category: 'Fisico', power: 85, accuracy: 90, pp: 10, description: 'Alta probabilità di brutto colpo.' },
  { id: 'v-create', name: 'V-create', type: 'Fuoco', category: 'Fisico', power: 180, accuracy: 95, pp: 5, description: 'Mossa firma devastante; cala Dif, DifSp e Vel.' },
  { id: 'will-o-wisp', name: 'Will-O-Wisp', type: 'Fuoco', category: 'Stato', power: 0, accuracy: 85, pp: 15, description: 'Scotta l’avversario dimezzandone l’Attacco.', bb2Buffed: true },

  // Acqua
  { id: 'scald', name: 'Scald', type: 'Acqua', category: 'Speciale', power: 80, accuracy: 100, pp: 15, description: '30% probabilità di scottare il bersaglio.' },
  { id: 'surf', name: 'Surf', type: 'Acqua', category: 'Speciale', power: 95, accuracy: 100, pp: 15, description: 'Potenza 95 (Gen 5), affidabile e potente.' },
  { id: 'hydro-pump', name: 'Hydro Pump', type: 'Acqua', category: 'Speciale', power: 120, accuracy: 80, pp: 5, description: 'Potenza 120 (Gen 5) ad altissimo impatto.' },
  { id: 'water-spout', name: 'Water Spout', type: 'Acqua', category: 'Speciale', power: 150, accuracy: 100, pp: 5, description: 'Potenza massima a PS pieni.' },
  { id: 'waterfall', name: 'Waterfall', type: 'Acqua', category: 'Fisico', power: 80, accuracy: 100, pp: 15, description: 'Può far tentennare (20%).' },
  { id: 'aqua-tail', name: 'Aqua Tail', type: 'Acqua', category: 'Fisico', power: 90, accuracy: 90, pp: 10, description: 'Attacco fisico Acqua potente.' },
  { id: 'aqua-jet', name: 'Aqua Jet', type: 'Acqua', category: 'Fisico', power: 40, accuracy: 100, pp: 20, description: 'Attacco Acqua prioritario (+1).' },
  { id: 'crabhammer', name: 'Crabhammer', type: 'Acqua', category: 'Fisico', power: 90, accuracy: 90, pp: 10, description: 'Alto tasso di brutto colpo.' },
  { id: 'shell-blade', name: 'Razor Shell', type: 'Acqua', category: 'Fisico', power: 75, accuracy: 95, pp: 10, description: '50% probabilità di ridurre la Difesa.' },

  // Erba
  { id: 'leaf-storm', name: 'Leaf Storm', type: 'Erba', category: 'Speciale', power: 140, accuracy: 90, pp: 5, description: 'Potenza 140 (Gen 5); con Contrary dà +2 SpA!' },
  { id: 'giga-drain', name: 'Giga Drain', type: 'Erba', category: 'Speciale', power: 75, accuracy: 100, pp: 10, description: 'Assorbe il 50% dei danni inflitti.' },
  { id: 'energy-ball', name: 'Energy Ball', type: 'Erba', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: 'Potenza aumentata in BB2, può calare DifSp.', bb2Buffed: true },
  { id: 'solarbeam', name: 'SolarBeam', type: 'Erba', category: 'Speciale', power: 120, accuracy: 100, pp: 10, description: 'Immediata sotto il Sole.' },
  { id: 'leaf-blade', name: 'Leaf Blade', type: 'Erba', category: 'Fisico', power: 90, accuracy: 100, pp: 15, description: 'Alta probabilità di brutto colpo.' },
  { id: 'power-whip', name: 'Power Whip', type: 'Erba', category: 'Fisico', power: 120, accuracy: 85, pp: 10, description: 'Potentissimo attacco fisico Erba.' },
  { id: 'wood-hammer', name: 'Wood Hammer', type: 'Erba', category: 'Fisico', power: 120, accuracy: 100, pp: 15, description: 'Danno enorme con contraccolpo.' },
  { id: 'seed-bomb', name: 'Seed Bomb', type: 'Erba', category: 'Fisico', power: 80, accuracy: 100, pp: 15, description: 'Attacco fisico Erba preciso.' },
  { id: 'spore', name: 'Spore', type: 'Erba', category: 'Stato', power: 0, accuracy: 100, pp: 15, description: 'Addormenta il nemico con precisione 100%.' },
  { id: 'sleep-powder', name: 'Sleep Powder', type: 'Erba', category: 'Stato', power: 0, accuracy: 75, pp: 15, description: 'Addormenta il bersaglio.' },
  { id: 'leech-seed', name: 'Leech Seed', type: 'Erba', category: 'Stato', power: 0, accuracy: 90, pp: 10, description: 'Drena 1/8 dei PS nemici ogni turno.' },
  { id: 'synthesis', name: 'Synthesis', type: 'Erba', category: 'Stato', power: 0, accuracy: null, pp: 5, description: 'Cura 50% PS (66% sotto il Sole).' },

  // Elettro
  { id: 'thunderbolt', name: 'Thunderbolt', type: 'Elettro', category: 'Speciale', power: 95, accuracy: 100, pp: 15, description: 'Potenza 95 (Gen 5), può paralizzare (10%).' },
  { id: 'thunder', name: 'Thunder', type: 'Elettro', category: 'Speciale', power: 120, accuracy: 70, pp: 10, description: 'Precisione 100% sotto Pioggia (30% paralisi).' },
  { id: 'volt-switch', name: 'Volt Switch', type: 'Elettro', category: 'Speciale', power: 70, accuracy: 100, pp: 20, description: 'Colpisce e sostituisce il Pokémon.' },
  { id: 'discharge', name: 'Discharge', type: 'Elettro', category: 'Speciale', power: 80, accuracy: 100, pp: 15, description: '30% probabilità di paralizzare.' },
  { id: 'wild-charge', name: 'Wild Charge', type: 'Elettro', category: 'Fisico', power: 90, accuracy: 100, pp: 15, description: 'Attacco fisico Elettro con lieve contraccolpo.' },
  { id: 'thunderpunch', name: 'ThunderPunch', type: 'Elettro', category: 'Fisico', power: 75, accuracy: 100, pp: 15, description: 'Pugno Elettro preciso.' },
  { id: 'volt-tackle', name: 'Bolt Strike', type: 'Elettro', category: 'Fisico', power: 130, accuracy: 85, pp: 5, description: 'Mossa firma Elettro di immensa potenza.' },
  { id: 'thunder-wave', name: 'Thunder Wave', type: 'Elettro', category: 'Stato', power: 0, accuracy: 100, pp: 20, description: 'Paralizza il bersaglio dimezzandone la Velocità.' },

  // Ghiaccio
  { id: 'ice-beam', name: 'Ice Beam', type: 'Ghiaccio', category: 'Speciale', power: 95, accuracy: 100, pp: 10, description: 'Potenza 95 (Gen 5), copertura fondamentale.' },
  { id: 'blizzard', name: 'Blizzard', type: 'Ghiaccio', category: 'Speciale', power: 120, accuracy: 70, pp: 5, description: 'Precisione 100% sotto Grandine.' },
  { id: 'hidden-power-ice', name: 'Hidden Power Ice', type: 'Ghiaccio', category: 'Speciale', power: 70, accuracy: 100, pp: 15, description: 'Copertura Ghiaccio speciale (70 BP in Gen 5).' },
  { id: 'icicle-crash', name: 'Icicle Crash', type: 'Ghiaccio', category: 'Fisico', power: 85, accuracy: 90, pp: 10, description: '30% probabilità di far tentennare.' },
  { id: 'ice-punch', name: 'Ice Punch', type: 'Ghiaccio', category: 'Fisico', power: 75, accuracy: 100, pp: 15, description: 'Copertura fisica contro i Draghi.' },
  { id: 'ice-shard', name: 'Ice Shard', type: 'Ghiaccio', category: 'Fisico', power: 40, accuracy: 100, pp: 30, description: 'Prioritario (+1), elimina Draghi veloci.' },
  { id: 'ice-fang', name: 'Ice Fang', type: 'Ghiaccio', category: 'Fisico', power: 65, accuracy: 95, pp: 15, description: 'Può congelare o far tentennare.' },

  // Lotta
  { id: 'close-combat', name: 'Close Combat', type: 'Lotta', category: 'Fisico', power: 120, accuracy: 100, pp: 5, description: 'Potenza 120; cala Dif e DifSp di 1.' },
  { id: 'superpower', name: 'Superpower', type: 'Lotta', category: 'Fisico', power: 120, accuracy: 100, pp: 5, description: 'Potenza 120; con Contrary aumenta Atk e Dif!' },
  { id: 'hi-jump-kick', name: 'Hi Jump Kick', type: 'Lotta', category: 'Fisico', power: 130, accuracy: 90, pp: 10, description: 'Potenza 130; potenziata da Reckless.' },
  { id: 'drain-punch', name: 'Drain Punch', type: 'Lotta', category: 'Fisico', power: 75, accuracy: 100, pp: 10, description: 'Assorbe il 50% dei danni inflitti.' },
  { id: 'sacred-sword', name: 'Sacred Sword', type: 'Lotta', category: 'Fisico', power: 90, accuracy: 100, pp: 15, description: 'Ignora i boost difensivi del nemico.' },
  { id: 'hammer-arm', name: 'Hammer Arm', type: 'Lotta', category: 'Fisico', power: 100, accuracy: 90, pp: 10, description: 'Potente colpo Lotta; riduce Velocità di 1.' },
  { id: 'brick-break', name: 'Brick Break', type: 'Lotta', category: 'Fisico', power: 75, accuracy: 100, pp: 15, description: 'Distrugge Riflesso e Schermoluce.' },
  { id: 'mach-punch', name: 'Mach Punch', type: 'Lotta', category: 'Fisico', power: 40, accuracy: 100, pp: 30, description: 'Attacco Lotta prioritario (+1).' },
  { id: 'aura-sphere', name: 'Aura Sphere', type: 'Lotta', category: 'Speciale', power: 90, accuracy: null, pp: 20, description: 'Potenza 90 (Gen 5), non fallisce mai.' },
  { id: 'focus-blast', name: 'Focus Blast', type: 'Lotta', category: 'Speciale', power: 120, accuracy: 70, pp: 5, description: 'Attacco speciale Lotta ad alta potenza.' },
  { id: 'secret-sword', name: 'Secret Sword', type: 'Lotta', category: 'Speciale', power: 85, accuracy: 100, pp: 10, description: 'Calcola i danni sulla Difesa fisica del bersaglio.' },
  { id: 'bulk-up', name: 'Bulk Up', type: 'Lotta', category: 'Stato', power: 0, accuracy: null, pp: 20, description: '+1 Attacco e +1 Difesa.' },

  // Veleno
  { id: 'sludge-bomb', name: 'Sludge Bomb', type: 'Veleno', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: '30% probabilità di avvelenare.' },
  { id: 'sludge-wave', name: 'Sludge Wave', type: 'Veleno', category: 'Speciale', power: 95, accuracy: 100, pp: 10, description: 'Potenza 95 Veleno speciale.' },
  { id: 'poison-jab', name: 'Poison Jab', type: 'Veleno', category: 'Fisico', power: 80, accuracy: 100, pp: 20, description: '30% probabilità di avvelenare.' },
  { id: 'cross-poison', name: 'Cross Poison', type: 'Veleno', category: 'Fisico', power: 70, accuracy: 100, pp: 20, description: 'Alto tasso di brutto colpo.' },
  { id: 'toxic', name: 'Toxic', type: 'Veleno', category: 'Stato', power: 0, accuracy: 90, pp: 10, description: 'Iperavvelenamento progressivo.' },
  { id: 'toxic-spikes', name: 'Toxic Spikes', type: 'Veleno', category: 'Stato', power: 0, accuracy: null, pp: 20, description: 'Piazza trappole velenose sul campo.' },
  { id: 'coil', name: 'Coil', type: 'Veleno', category: 'Stato', power: 0, accuracy: null, pp: 20, description: '+1 Atk, +1 Dif e +1 Precisione.' },

  // Terra
  { id: 'earthquake', name: 'Earthquake', type: 'Terra', category: 'Fisico', power: 100, accuracy: 100, pp: 10, description: 'La mossa Terra fisica per eccellenza.' },
  { id: 'earth-power', name: 'Earth Power', type: 'Terra', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: 'Potente attacco Terra speciale.' },
  { id: 'bulldoze', name: 'Bulldoze', type: 'Terra', category: 'Fisico', power: 60, accuracy: 100, pp: 20, description: 'Riduce la Velocità nemica di 1.' },
  { id: 'drill-run', name: 'Drill Run', type: 'Terra', category: 'Fisico', power: 80, accuracy: 95, pp: 10, description: 'Alto tasso di brutto colpo.' },
  { id: 'spikes', name: 'Spikes', type: 'Terra', category: 'Stato', power: 0, accuracy: null, pp: 20, description: 'Piazza Punte sul campo avversario.' },

  // Volante
  { id: 'brave-bird', name: 'Brave Bird', type: 'Volante', category: 'Fisico', power: 120, accuracy: 100, pp: 15, description: 'Attacco Volante potentissimo con contraccolpo.' },
  { id: 'acrobatics', name: 'Acrobatics', type: 'Volante', category: 'Fisico', power: 55, accuracy: 100, pp: 15, description: 'Potenza 110 senza strumento (ottimo con Gem!).' },
  { id: 'aerial-ace', name: 'Aerial Ace', type: 'Volante', category: 'Fisico', power: 60, accuracy: null, pp: 20, description: 'Non fallisce mai; potenziata da Technician.' },
  { id: 'hurricane', name: 'Hurricane', type: 'Volante', category: 'Speciale', power: 120, accuracy: 70, pp: 10, description: 'Precisione 100% sotto Pioggia, può confondere.' },
  { id: 'air-slash', name: 'Air Slash', type: 'Volante', category: 'Speciale', power: 75, accuracy: 95, pp: 20, description: '30% probabilità di far tentennare (60% Serene Grace!).' },
  { id: 'roost', name: 'Roost', type: 'Volante', category: 'Stato', power: 0, accuracy: null, pp: 10, description: 'Cura il 50% dei PS massimi.' },
  { id: 'tailwind', name: 'Tailwind', type: 'Volante', category: 'Stato', power: 0, accuracy: null, pp: 30, description: 'Raddoppia la Velocità del team per 4 turni.' },

  // Psico
  { id: 'psychic', name: 'Psychic', type: 'Psico', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: 'Può ridurre la Difesa Speciale (10%).' },
  { id: 'psyshock', name: 'Psyshock', type: 'Psico', category: 'Speciale', power: 80, accuracy: 100, pp: 10, description: 'Colpisce sulla Difesa fisica del bersaglio.' },
  { id: 'zen-headbutt', name: 'Zen Headbutt', type: 'Psico', category: 'Fisico', power: 80, accuracy: 90, pp: 15, description: 'Può far tentennare (20%).' },
  { id: 'psycho-cut', name: 'Psycho Cut', type: 'Psico', category: 'Fisico', power: 70, accuracy: 100, pp: 20, description: 'Alto tasso di brutto colpo.' },
  { id: 'calm-mind', name: 'Calm Mind', type: 'Psico', category: 'Stato', power: 0, accuracy: null, pp: 20, description: '+1 Attacco Speciale e +1 Difesa Speciale.' },
  { id: 'trick-room', name: 'Trick Room', type: 'Psico', category: 'Stato', power: 0, accuracy: null, pp: 5, description: 'I Pokémon più lenti agiscono per primi per 5 turni.' },
  { id: 'agility', name: 'Agility', type: 'Psico', category: 'Stato', power: 0, accuracy: null, pp: 30, description: 'Aumenta di 2 livelli la Velocità.' },

  // Coleottero
  { id: 'bug-buzz', name: 'Bug Buzz', type: 'Coleottero', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: 'Potente attacco speciale Coleottero.' },
  { id: 'signal-beam', name: 'Signal Beam', type: 'Coleottero', category: 'Speciale', power: 75, accuracy: 100, pp: 15, description: 'Può confondere il bersaglio.' },
  { id: 'x-scissor', name: 'X-Scissor', type: 'Coleottero', category: 'Fisico', power: 80, accuracy: 100, pp: 15, description: 'Attacco fisico Coleottero affidabile.' },
  { id: 'megahorn', name: 'Megahorn', type: 'Coleottero', category: 'Fisico', power: 120, accuracy: 85, pp: 10, description: 'Immenso danno fisico Coleottero.' },
  { id: 'u-turn', name: 'U-turn', type: 'Coleottero', category: 'Fisico', power: 70, accuracy: 100, pp: 20, description: 'Colpisce e permette il cambio immediato.' },
  { id: 'quiver-dance', name: 'Quiver Dance', type: 'Coleottero', category: 'Stato', power: 0, accuracy: null, pp: 20, description: '+1 SpA, +1 DifSp e +1 Velocità!' },

  // Roccia
  { id: 'stone-edge', name: 'Stone Edge', type: 'Roccia', category: 'Fisico', power: 100, accuracy: 80, pp: 5, description: 'Alto danno Roccia e alto tasso di crit.' },
  { id: 'rock-slide', name: 'Rock Slide', type: 'Roccia', category: 'Fisico', power: 75, accuracy: 90, pp: 10, description: '30% probabilità di far tentennare.' },
  { id: 'head-smash', name: 'Head Smash', type: 'Roccia', category: 'Fisico', power: 150, accuracy: 80, pp: 5, description: 'Potenza 150 (letale con Rock Head / Reckless).' },
  { id: 'power-gem', name: 'Power Gem', type: 'Roccia', category: 'Speciale', power: 80, accuracy: 100, pp: 20, description: 'Potenziata a 80 BP in Blaze Black 2.', bb2Buffed: true },
  { id: 'stealth-rock', name: 'Stealth Rock', type: 'Roccia', category: 'Stato', power: 0, accuracy: null, pp: 20, description: 'Trappola fondamentale contro i Boss BB2.' },
  { id: 'rock-polish', name: 'Rock Polish', type: 'Roccia', category: 'Stato', power: 0, accuracy: null, pp: 20, description: 'Aumenta di 2 livelli la Velocità.' },

  // Spettro
  { id: 'shadow-ball', name: 'Shadow Ball', type: 'Spettro', category: 'Speciale', power: 80, accuracy: 100, pp: 15, description: 'Può ridurre DifSp (20%).' },
  { id: 'shadow-claw', name: 'Shadow Claw', type: 'Spettro', category: 'Fisico', power: 70, accuracy: 100, pp: 15, description: 'Alto tasso di brutto colpo.' },
  { id: 'shadow-sneak', name: 'Shadow Sneak', type: 'Spettro', category: 'Fisico', power: 40, accuracy: 100, pp: 30, description: 'Attacco Spettro prioritario (+1).' },
  { id: 'destiny-bond', name: 'Destiny Bond', type: 'Spettro', category: 'Stato', power: 0, accuracy: null, pp: 5, description: 'Se va KO, porta con sé l’avversario.' },

  // Drago
  { id: 'draco-meteor', name: 'Draco Meteor', type: 'Drago', category: 'Speciale', power: 140, accuracy: 90, pp: 5, description: 'Potenza 140 (Gen 5); cala SpA di 2.' },
  { id: 'dragon-pulse', name: 'Dragon Pulse', type: 'Drago', category: 'Speciale', power: 90, accuracy: 100, pp: 10, description: 'Potenza 90 (Gen 5), affidabile e preciso.' },
  { id: 'outrage', name: 'Outrage', type: 'Drago', category: 'Fisico', power: 120, accuracy: 100, pp: 10, description: 'Dura 2-3 turni poi confonde; danno enorme.' },
  { id: 'dragon-claw', name: 'Dragon Claw', type: 'Drago', category: 'Fisico', power: 80, accuracy: 100, pp: 15, description: 'Attacco Drago fisico senza svantaggi.' },
  { id: 'dragon-tail', name: 'Dragon Tail', type: 'Drago', category: 'Fisico', power: 60, accuracy: 90, pp: 10, description: 'Forza la sostituzione del bersaglio.' },
  { id: 'dragon-dance', name: 'Dragon Dance', type: 'Drago', category: 'Stato', power: 0, accuracy: null, pp: 20, description: '+1 Attacco e +1 Velocità!' },

  // Buio
  { id: 'dark-pulse', name: 'Dark Pulse', type: 'Buio', category: 'Speciale', power: 80, accuracy: 100, pp: 15, description: '20% probabilità di far tentennare.' },
  { id: 'crunch', name: 'Crunch', type: 'Buio', category: 'Fisico', power: 80, accuracy: 100, pp: 15, description: '20% probabilità di ridurre la Difesa.' },
  { id: 'sucker-punch', name: 'Sucker Punch', type: 'Buio', category: 'Fisico', power: 80, accuracy: 100, pp: 5, description: 'Potenza 80 (Gen 5), priorità +1 se il nemico attacca.' },
  { id: 'night-slash', name: 'Night Slash', type: 'Buio', category: 'Fisico', power: 70, accuracy: 100, pp: 15, description: 'Alto tasso di brutto colpo.' },
  { id: 'pursuit', name: 'Pursuit', type: 'Buio', category: 'Fisico', power: 40, accuracy: 100, pp: 20, description: 'Potenza 80 se il nemico effettua il cambio.' },
  { id: 'nasty-plot', name: 'Nasty Plot', type: 'Buio', category: 'Stato', power: 0, accuracy: null, pp: 20, description: 'Aumenta di 2 livelli l’Attacco Speciale.' },
  { id: 'taunt', name: 'Taunt', type: 'Buio', category: 'Stato', power: 0, accuracy: 100, pp: 20, description: 'Impedisce al bersaglio le mosse di Stato.' },

  // Acciaio
  { id: 'flash-cannon', name: 'Flash Cannon', type: 'Acciaio', category: 'Speciale', power: 80, accuracy: 100, pp: 10, description: 'Può ridurre DifSp (10%).' },
  { id: 'iron-head', name: 'Iron Head', type: 'Acciaio', category: 'Fisico', power: 80, accuracy: 100, pp: 15, description: '30% probabilità di far tentennare.' },
  { id: 'meteor-mash', name: 'Meteor Mash', type: 'Acciaio', category: 'Fisico', power: 100, accuracy: 85, pp: 10, description: 'Potenza 100 (Gen 5), 20% di +1 Atk.' },
  { id: 'bullet-punch', name: 'Bullet Punch', type: 'Acciaio', category: 'Fisico', power: 40, accuracy: 100, pp: 30, description: 'Prioritario (+1); letale con Technician.' },
  { id: 'gear-grind', name: 'Gear Grind', type: 'Acciaio', category: 'Fisico', power: 50, accuracy: 85, pp: 15, description: 'Colpisce due volte (100 BP totali).' },
  { id: 'gyro-ball', name: 'Gyro Ball', type: 'Acciaio', category: 'Fisico', power: 1, accuracy: 100, pp: 5, description: 'Più forte quanto più il Pokémon è lento.' },
  { id: 'shift-gear', name: 'Shift Gear', type: 'Acciaio', category: 'Stato', power: 0, accuracy: null, pp: 10, description: '+1 Attacco e +2 Velocità!' },
  { id: 'icy-wind', name: 'Icy Wind', type: 'Ghiaccio', category: 'Speciale', power: 55, accuracy: 95, pp: 15, description: 'Riduce la Velocità dei nemici colpiti di 1.' },
  { id: 'roar', name: 'Roar', type: 'Normale', category: 'Stato', power: 0, accuracy: 100, pp: 20, description: 'Costringe l’avversario a cambiare Pokémon.' },
  { id: 'bounce', name: 'Bounce', type: 'Volante', category: 'Fisico', power: 85, accuracy: 85, pp: 5, description: 'Salta al primo turno e colpisce al secondo (30% paralisi).' },
  { id: 'ancient-power', name: 'AncientPower', type: 'Roccia', category: 'Speciale', power: 60, accuracy: 100, pp: 5, description: '10% probabilità di +1 a tutte le statistiche.' },
  { id: 'boomburst', name: 'Boomburst', type: 'Normale', category: 'Speciale', power: 140, accuracy: 100, pp: 10, description: 'Onda sonora da 140 BP senza svantaggi (Flygon Redux!).', bb2Buffed: true },

  // Folletto (Blaze Black 2 Redux)
  { id: 'moonblast', name: 'Moonblast', type: 'Folletto', category: 'Speciale', power: 95, accuracy: 100, pp: 15, description: 'Mossa Folletto top (95 BP); 30% di ridurre SpA nemico.', bb2Buffed: true },
  { id: 'play-rough', name: 'Play Rough', type: 'Folletto', category: 'Fisico', power: 90, accuracy: 90, pp: 10, description: 'Attacco fisico Folletto (90 BP); 10% di ridurre Atk.', bb2Buffed: true },
  { id: 'dazzling-gleam', name: 'Dazzling Gleam', type: 'Folletto', category: 'Speciale', power: 80, accuracy: 100, pp: 10, description: 'Colpisce entrambi gli avversari in doppio.', bb2Buffed: true },
  { id: 'draining-kiss', name: 'Draining Kiss', type: 'Folletto', category: 'Speciale', power: 75, accuracy: 100, pp: 10, description: 'Assorbe il 75% dei danni inflitti (buff Redux).', bb2Buffed: true },
  { id: 'disarming-voice', name: 'Disarming Voice', type: 'Folletto', category: 'Speciale', power: 40, accuracy: null, pp: 15, description: 'Mossa Folletto early-game che non fallisce mai.', bb2Buffed: true },
];

export const MOVES_BY_ID: Record<string, MoveData> = Object.fromEntries(
  MOVES_LIST.map((m) => [m.id, m])
);
