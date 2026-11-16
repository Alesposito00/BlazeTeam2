import { BB2_GUIDE_ITEMS, BB2_GUIDE_TMS, BB2_GAME_MILESTONES } from '../data/bb2ItemsAndTms';
import { SavSummary } from '../types/pokemon';

export interface ParsedSavResult {
  summary: SavSummary;
  matchedMilestoneIds: string[];
  matchedTmIds: string[];
  matchedItemIds: string[];
}

const MIN_SAV_SIZE = 512 * 1024; // 524,288 bytes (NDS 4Mbit Flash / Save)
const BLOCK_B_OFFSET = 0x40000;

function readUint16LE(view: DataView, offset: number): number {
  if (offset + 2 > view.byteLength) return 0;
  return view.getUint16(offset, true);
}

function readUint32LE(view: DataView, offset: number): number {
  if (offset + 4 > view.byteLength) return 0;
  return view.getUint32(offset, true);
}

function decodeGen5TrainerName(view: DataView, offset: number): string {
  let name = '';
  for (let i = 0; i < 8; i++) {
    const code = readUint16LE(view, offset + i * 2);
    if (code === 0xffff || code === 0x0000) break;
    if (code >= 0x0020 && code <= 0x024f) {
      name += String.fromCharCode(code);
    }
  }
  return name.trim();
}

function countBits(byte: number): number {
  let c = 0;
  let b = byte;
  while (b > 0) {
    c += b & 1;
    b >>= 1;
  }
  return c;
}

function pickActiveSaveBlockBase(view: DataView): number {
  if (view.byteLength < MIN_SAV_SIZE) return 0;

  // In B2W2, block footer save counter sits near 0x25F04 / 0x25F08
  const counterA = readUint32LE(view, 0x25f04);
  const counterB = readUint32LE(view, BLOCK_B_OFFSET + 0x25f04);

  const nameA = decodeGen5TrainerName(view, 0x19404);
  const nameB = decodeGen5TrainerName(view, BLOCK_B_OFFSET + 0x19404);

  const validA = nameA.length >= 1 && counterA !== 0xffffffff;
  const validB = nameB.length >= 1 && counterB !== 0xffffffff;

  if (validA && validB) {
    return counterB > counterA ? BLOCK_B_OFFSET : 0;
  }
  if (validB && !validA) return BLOCK_B_OFFSET;
  return 0;
}

export async function parseGen5SaveFile(file: File): Promise<ParsedSavResult> {
  const buffer = await file.arrayBuffer();
  if (buffer.byteLength < MIN_SAV_SIZE) {
    throw new Error(
      'File non valido: un salvataggio NDS Pokémon Black 2 / Blaze Black 2 (.sav o .dsv) deve essere almeno 512 KB.'
    );
  }

  const view = new DataView(buffer);
  const base = pickActiveSaveBlockBase(view);

  const trainerName = decodeGen5TrainerName(view, base + 0x19404) || 'Allenatore';
  const tid = readUint16LE(view, base + 0x19414);
  const playtimeHours = Math.min(9999, readUint16LE(view, base + 0x19424));
  const playtimeMinutes = Math.min(59, view.getUint8(base + 0x19426));

  const rawMoney = readUint32LE(view, base + 0x21100);
  const money = rawMoney <= 9999999 ? rawMoney : 0;
  const badgesMask = view.getUint8(base + 0x21104);

  const matchedMilestoneIds: string[] = [];
  let badgesCount = 0;
  for (const ms of BB2_GAME_MILESTONES) {
    if (typeof ms.badgeIndex === 'number') {
      const earned = (badgesMask & (1 << ms.badgeIndex)) !== 0;
      if (earned) {
        badgesCount++;
        matchedMilestoneIds.push(ms.id);
      }
    }
  }

  // Bag pockets in B2W2: 0x18400..0x18D37 (Items, Key Items, TMs/HMs, Medicine, Berries)
  const ownedItemIds = new Set<number>();
  for (let off = base + 0x18400; off < base + 0x18d38; off += 4) {
    const itemId = readUint16LE(view, off);
    const qty = readUint16LE(view, off + 2);
    if (itemId > 0 && itemId <= 650 && qty > 0 && qty <= 999) {
      ownedItemIds.add(itemId);
    }
  }

  const matchedTmIds = BB2_GUIDE_TMS.filter(
    (tm) => typeof tm.itemId === 'number' && ownedItemIds.has(tm.itemId)
  ).map((tm) => tm.id);

  const matchedItemIds = BB2_GUIDE_ITEMS.filter(
    (it) => typeof it.itemId === 'number' && ownedItemIds.has(it.itemId)
  ).map((it) => it.id);

  // Pokédex Caught bitfield in B2W2: 0x21400 + 0x08 (82 bytes covering 649 Pokémon)
  let pokedexCaught = 0;
  const caughtSpeciesSet = new Set<number>();
  const dexStart = base + 0x21408;
  for (let i = 0; i < 82; i++) {
    if (dexStart + i < view.byteLength) {
      const byte = view.getUint8(dexStart + i);
      pokedexCaught += countBits(byte);
      for (let bit = 0; bit < 8; bit++) {
        const speciesId = i * 8 + bit + 1;
        if (speciesId <= 649 && (byte & (1 << bit)) !== 0) {
          caughtSpeciesSet.add(speciesId);
        }
      }
    }
  }
  pokedexCaught = Math.min(649, pokedexCaught);

  // Auto-match Legendary capture milestones from Pokédex Caught bitfield
  for (const ms of BB2_GAME_MILESTONES) {
    if (typeof ms.badgeIndex === 'number') continue;
    const hasAllRequired =
      ms.speciesIds && ms.speciesIds.length > 0
        ? ms.speciesIds.every((id) => caughtSpeciesSet.has(id))
        : true;
    const hasAnyRequired =
      ms.anySpeciesIds && ms.anySpeciesIds.length > 0
        ? ms.anySpeciesIds.some((id) => caughtSpeciesSet.has(id))
        : true;
    if ((ms.speciesIds?.length || ms.anySpeciesIds?.length) && hasAllRequired && hasAnyRequired) {
      matchedMilestoneIds.push(ms.id);
    }
  }

  return {
    summary: {
      trainerName: trainerName.slice(0, 30),
      tid,
      playtimeHours,
      playtimeMinutes,
      money,
      badgesCount,
      pokedexCaught,
      fileName: file.name.slice(0, 120),
      parsedAt: Date.now(),
    },
    matchedMilestoneIds,
    matchedTmIds,
    matchedItemIds,
  };
}
