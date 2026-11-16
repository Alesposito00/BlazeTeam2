import { ItemData, NatureData } from '../types/pokemon';

export const NATURES: NatureData[] = [
  { name: 'Adamant', italianName: 'Decisa', plus: 'atk', minus: 'spa' },
  { name: 'Jolly', italianName: 'Allegra', plus: 'spe', minus: 'spa' },
  { name: 'Modest', italianName: 'Modesta', plus: 'spa', minus: 'atk' },
  { name: 'Timid', italianName: 'Timida', plus: 'spe', minus: 'atk' },
  { name: 'Bold', italianName: 'Sicura', plus: 'def', minus: 'atk' },
  { name: 'Impish', italianName: 'Scaltra', plus: 'def', minus: 'spa' },
  { name: 'Calm', italianName: 'Calma', plus: 'spd', minus: 'atk' },
  { name: 'Careful', italianName: 'Cauta', plus: 'spd', minus: 'spa' },
  { name: 'Naive', italianName: 'Ingenua', plus: 'spe', minus: 'spd' },
  { name: 'Hasty', italianName: 'Lesta', plus: 'spe', minus: 'def' },
  { name: 'Naughty', italianName: 'Birbona', plus: 'atk', minus: 'spd' },
  { name: 'Lonely', italianName: 'Schiva', plus: 'atk', minus: 'def' },
  { name: 'Rash', italianName: 'Ardente', plus: 'spa', minus: 'spd' },
  { name: 'Mild', italianName: 'Mite', plus: 'spa', minus: 'def' },
  { name: 'Brave', italianName: 'Audace', plus: 'atk', minus: 'spe' },
  { name: 'Quiet', italianName: 'Quieta', plus: 'spa', minus: 'spe' },
  { name: 'Relaxed', italianName: 'Placida', plus: 'def', minus: 'spe' },
  { name: 'Sassy', italianName: 'Vivace', plus: 'spd', minus: 'spe' },
  { name: 'Hardy', italianName: 'Ardita', plus: null, minus: null },
  { name: 'Docile', italianName: 'Docile', plus: null, minus: null },
  { name: 'Serious', italianName: 'Seria', plus: null, minus: null },
  { name: 'Bashful', italianName: 'Ritrosa', plus: null, minus: null },
  { name: 'Quirky', italianName: 'Furba', plus: null, minus: null },
  { name: 'Lax', italianName: 'Fiacca', plus: 'def', minus: 'spd' },
  { name: 'Gentle', italianName: 'Gentile', plus: 'spd', minus: 'def' },
];

export const NATURES_BY_NAME: Record<string, NatureData> = Object.fromEntries(
  NATURES.map((n) => [n.name, n])
);

export const ITEMS: ItemData[] = [
  { name: 'Leftovers', italianName: 'Avanzi', category: 'Difesa', description: 'Ripristina 1/16 dei PS massimi ogni turno.' },
  { name: 'Life Orb', italianName: 'Assorbisfera', category: 'Potenziamento', description: 'Potenzia le mosse del 30% al costo del 10% PS.' },
  { name: 'Choice Scarf', italianName: 'Stolascelta', category: 'Scelta', description: '+50% Velocità, blocca su una sola mossa.' },
  { name: 'Choice Band', italianName: 'Bendascelta', category: 'Scelta', description: '+50% Attacco, blocca su una sola mossa.' },
  { name: 'Choice Specs', italianName: 'Lentiscelta', category: 'Scelta', description: '+50% Attacco Speciale, blocca su una sola mossa.' },
  { name: 'Focus Sash', italianName: 'Focalnastro', category: 'Difesa', description: 'Evita il KO in un colpo a PS pieni.' },
  { name: 'Expert Belt', italianName: 'Abilcintura', category: 'Potenziamento', description: '+20% danni alle mosse superefficaci.' },
  { name: 'Eviolite', italianName: 'Evolcondensa', category: 'Difesa', description: '+50% Dif e DifSp ai Pokémon non evoluti.' },
  { name: 'Rocky Helmet', italianName: 'Bitorzolelmo', category: 'Difesa', description: 'Infligge 1/6 PS agli attaccanti da contatto.' },
  { name: 'Air Balloon', italianName: 'Palloncino', category: 'Difesa', description: 'Immunità a Terra fino al primo colpo subito.' },
  { name: 'Black Sludge', italianName: 'Fangopece', category: 'Difesa', description: 'Cura 1/16 PS ai Pokémon di tipo Veleno.' },
  { name: 'Flame Orb', italianName: 'Fiammosfera', category: 'Altro', description: 'Scotta il portatore; ideale per Guts.' },
  { name: 'Toxic Orb', italianName: 'Tossicsfera', category: 'Altro', description: 'Avvelena il portatore; ideale per Poison Heal.' },
  { name: 'White Herb', italianName: 'Erbachiara', category: 'Altro', description: 'Annulla i cali alle statistiche (Shell Smash).' },
  { name: 'Muscle Band', italianName: 'Muscolbanda', category: 'Potenziamento', description: '+10% potenza alle mosse fisiche.' },
  { name: 'Wise Glasses', italianName: 'Saviocchiali', category: 'Potenziamento', description: '+10% potenza alle mosse speciali.' },
  { name: 'Flying Gem', italianName: 'Bijou Volante', category: 'Potenziamento', description: '+50% una volta sola (Gen 5); attiva Acrobatics 110!' },
  { name: 'Dragon Gem', italianName: 'Bijou Drago', category: 'Potenziamento', description: '+50% potenza (Gen 5) su una mossa Drago.' },
  { name: 'Fighting Gem', italianName: 'Bijou Lotta', category: 'Potenziamento', description: '+50% potenza (Gen 5) su una mossa Lotta.' },
  { name: 'Fire Gem', italianName: 'Bijou Fuoco', category: 'Potenziamento', description: '+50% potenza (Gen 5) su una mossa Fuoco.' },
  { name: 'Sitrus Berry', italianName: 'Baccacedro', category: 'Bacca', description: 'Ripristina 25% PS quando scendono sotto metà.' },
  { name: 'Lum Berry', italianName: 'Baccaprugna', category: 'Bacca', description: 'Cura immediatamente qualsiasi stato alterato.' },
  { name: 'Yache Berry', italianName: 'Baccamoya', category: 'Bacca', description: 'Dimezza un attacco Ghiaccio superefficace.' },
  { name: 'Shuca Berry', italianName: 'Baccanaca', category: 'Bacca', description: 'Dimezza un attacco Terra superefficace.' },
  { name: 'Light Clay', italianName: 'Creta Luce', category: 'Altro', description: 'Estende Riflesso e Schermoluce a 8 turni.' },
  { name: 'Scope Lens', italianName: 'Mirino', category: 'Potenziamento', description: 'Aumenta la probabilità di brutto colpo.' },
  { name: 'Shell Bell', italianName: 'Conchinella', category: 'Difesa', description: 'Ripristina 1/8 dei danni inflitti.' },
];

export const ITEMS_BY_NAME: Record<string, ItemData> = Object.fromEntries(
  ITEMS.map((i) => [i.name, i])
);
