import React from 'react';
import { Eye, EyeOff, Lock, Shield, ShieldOff } from 'lucide-react';
import { BB2_GAME_MILESTONES, SpoilerStage } from '../data/bb2ItemsAndTms';
import { GameProgress } from '../types/pokemon';

export type SpoilerMode = 'auto' | '0' | '1' | '2' | '3' | '4';

export const SPOILER_STAGE_OPTIONS: {
  value: SpoilerStage;
  shortLabel: string;
  label: string;
  unlockHint: string;
}[] = [
  {
    value: 0,
    shortLabel: 'Cap. 0',
    label: 'Inizio (0–2 Medaglie)',
    unlockHint: 'Alisopoli & Zondopoli',
  },
  {
    value: 1,
    shortLabel: 'Cap. 1',
    label: 'Metà Unima (3–5 Medaglie)',
    unlockHint: 'dopo la 2ª Medaglia',
  },
  {
    value: 2,
    shortLabel: 'Cap. 2',
    label: 'Verso Grecalopoli (6–8 Medaglie)',
    unlockHint: 'dopo la 5ª Medaglia',
  },
  {
    value: 3,
    shortLabel: 'Cap. 3',
    label: 'Climax Storia & Lega Pokémon',
    unlockHint: 'dopo l’8ª Medaglia',
  },
  {
    value: 4,
    shortLabel: 'Cap. 4',
    label: 'Post-Game & Leggendari (Tutto)',
    unlockHint: 'dopo la Lega Pokémon',
  },
];

export function computeAutoSpoilerStage(progress: GameProgress): SpoilerStage {
  const done = new Set(progress.completedMilestones);
  if (
    done.has('post-league') ||
    done.has('post-league-rematch') ||
    BB2_GAME_MILESTONES.some((m) => m.spoilerStage === 4 && done.has(m.id))
  ) {
    return 4;
  }

  let badgeMax = progress.savSummary?.badgesCount ?? 0;
  let checkedBadges = 0;
  for (const ms of BB2_GAME_MILESTONES) {
    if (typeof ms.badgeIndex === 'number' && done.has(ms.id)) {
      checkedBadges = Math.max(checkedBadges, ms.badgeIndex + 1);
    }
  }
  badgeMax = Math.max(badgeMax, checkedBadges);

  if (badgeMax >= 8 || done.has('story-colress') || done.has('story-ghetsis') || done.has('story-victory-road')) {
    return 3;
  }
  if (badgeMax >= 5 || done.has('gym-6') || done.has('gym-7')) {
    return 2;
  }
  if (badgeMax >= 2 || done.has('gym-3') || done.has('gym-4') || done.has('gym-5')) {
    return 1;
  }
  return 0;
}

export function getSpoilerUnlockHint(stage: SpoilerStage): string {
  return SPOILER_STAGE_OPTIONS.find((o) => o.value === stage)?.unlockHint ?? 'avanzando nella storia';
}

interface SpoilerGuardBarProps {
  spoilerEnabled: boolean;
  spoilerMode: SpoilerMode;
  effectiveStage: SpoilerStage;
  hiddenCount: number;
  onToggleEnabled: () => void;
  onChangeMode: (mode: SpoilerMode) => void;
  onResetRevealed?: () => void;
  revealedCount?: number;
}

export const SpoilerGuardBar: React.FC<SpoilerGuardBarProps> = ({
  spoilerEnabled,
  spoilerMode,
  effectiveStage,
  hiddenCount,
  onToggleEnabled,
  onChangeMode,
  onResetRevealed,
  revealedCount = 0,
}) => {
  const stageMeta = SPOILER_STAGE_OPTIONS.find((s) => s.value === effectiveStage) ?? SPOILER_STAGE_OPTIONS[0];

  return (
    <div
      className={`rounded-2xl border p-3.5 sm:p-4 transition ${
        spoilerEnabled
          ? 'bg-indigo-500/5 dark:bg-indigo-500/10 border-indigo-500/25'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5 min-w-0">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              spoilerEnabled
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {spoilerEnabled ? <Shield className="w-4 h-4" /> : <ShieldOff className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Protezione Spoiler Storia
              </span>
              {spoilerEnabled ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300">
                  <Lock className="w-3 h-3" />
                  <span>
                    {hiddenCount > 0
                      ? `${hiddenCount} ${hiddenCount === 1 ? 'elemento nascosto' : 'elementi nascosti'}`
                      : 'Tutto sbloccato per il tuo capitolo'}
                  </span>
                </span>
              ) : (
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Disattivata — tutti i contenuti e segreti post-game visibili
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
              {spoilerEnabled
                ? `Livello attivo: ${stageMeta.label}${spoilerMode === 'auto' ? ' (Auto da medaglie/.sav)' : ''}.`
                : 'Attiva per oscurare boss, colpi di scena e catture post-game oltre il tuo capitolo.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap shrink-0">
          {spoilerEnabled && (
            <select
              value={spoilerMode}
              onChange={(e) => onChangeMode(e.target.value as SpoilerMode)}
              className="min-h-[40px] px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100"
              aria-label="Seleziona capitolo anti-spoiler"
            >
              <option value="auto">Auto (da progressi/.sav)</option>
              {SPOILER_STAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={String(opt.value)}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {spoilerEnabled && revealedCount > 0 && onResetRevealed && (
            <button
              type="button"
              onClick={onResetRevealed}
              className="min-h-[40px] px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 inline-flex items-center gap-1.5 hover:border-indigo-500 transition"
              title="Nascondi di nuovo gli spoiler rivelati manualmente"
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Rinascondi ({revealedCount})</span>
            </button>
          )}

          <button
            type="button"
            onClick={onToggleEnabled}
            className={`min-h-[40px] px-3.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition ${
              spoilerEnabled
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
            }`}
          >
            {spoilerEnabled ? <Eye className="w-3.5 h-3.5" /> : <Shield className="w-3.5 h-3.5" />}
            <span>{spoilerEnabled ? 'Mostra Tutto' : 'Attiva Protezione'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
