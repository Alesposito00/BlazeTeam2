import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Crown,
  Eye,
  Lock,
  ShieldAlert,
  Swords,
} from 'lucide-react';
import { BB2_BOSSES } from '../data/bb2Bosses';
import { SpoilerStage } from '../data/bb2ItemsAndTms';
import { BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import { MOVES_BY_ID } from '../data/moves';
import { getTypeEffectiveness, TYPE_STYLES } from '../data/typeChart';
import { BossPokemon, BossTrainer, SavedTeam, TeamMember } from '../types/pokemon';
import { PokemonArtwork } from './PokemonArtwork';
import { getSpoilerUnlockHint, SpoilerGuardBar, SpoilerMode } from './SpoilerGuardBar';
import { TypeBadge } from './TypeBadge';

interface BossMatchupViewProps {
  team: SavedTeam;
  onGoToTeam: () => void;
  spoilerEnabled: boolean;
  spoilerMode: SpoilerMode;
  effectiveSpoilerStage: SpoilerStage;
  onToggleSpoiler: () => void;
  onChangeSpoilerMode: (mode: SpoilerMode) => void;
}

export const BossMatchupView: React.FC<BossMatchupViewProps> = ({
  team,
  onGoToTeam,
  spoilerEnabled,
  spoilerMode,
  effectiveSpoilerStage,
  onToggleSpoiler,
  onChangeSpoilerMode,
}) => {
  const [selectedBossId, setSelectedBossId] = useState(BB2_BOSSES[0].id);
  const [revealedBossIds, setRevealedBossIds] = useState<string[]>([]);

  const selectedBoss = useMemo(
    () => BB2_BOSSES.find((b) => b.id === selectedBossId) ?? BB2_BOSSES[0],
    [selectedBossId]
  );

  const isBossSpoilerLocked = (boss: BossTrainer): boolean => {
    if (!spoilerEnabled) return false;
    if (revealedBossIds.includes(boss.id)) return false;
    return (boss.spoilerStage ?? 0) > effectiveSpoilerStage;
  };

  const hiddenBossCount = useMemo(
    () => BB2_BOSSES.filter((b) => isBossSpoilerLocked(b)).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [spoilerEnabled, effectiveSpoilerStage, revealedBossIds]
  );

  const selectedLocked = isBossSpoilerLocked(selectedBoss);

  const members = useMemo(
    () => team.members.filter((m): m is TeamMember => m !== null),
    [team.members]
  );

  const evaluateAgainstBossMon = (bossMon: BossPokemon) => {
    if (members.length === 0) return { bestCounters: [], status: 'empty' as const };

    const scored = members.map((m) => {
      const sp = BB2_POKEMON_BY_ID[m.speciesId];
      if (!sp) return { name: '?', score: 0, hitsSE: false, resistsBoss: false };

      let maxOffMult = 1;
      for (const moveId of m.moves) {
        if (!moveId) continue;
        const mv = MOVES_BY_ID[moveId];
        if (!mv || mv.category === 'Stato' || mv.power === 0) continue;
        const mult = getTypeEffectiveness(mv.type, bossMon.types, bossMon.ability);
        if (mult > maxOffMult) maxOffMult = mult;
      }

      let maxIncomingMult = 0;
      for (const bType of bossMon.types) {
        const inc = getTypeEffectiveness(bType, sp.types, m.ability);
        if (inc > maxIncomingMult) maxIncomingMult = inc;
      }

      const hitsSE = maxOffMult > 1;
      const resistsBoss = maxIncomingMult < 1;
      const weakToBoss = maxIncomingMult > 1;

      let score = 0;
      if (hitsSE) score += 2;
      if (resistsBoss) score += 1.5;
      if (weakToBoss) score -= 2;

      return {
        name: m.nickname || sp.name,
        score,
        hitsSE,
        resistsBoss,
      };
    });

    const bestCounters = scored
      .filter((s) => s.score >= 1.5)
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);

    const anySE = scored.some((s) => s.hitsSE);
    const status =
      bestCounters.length > 0 ? ('great' as const) : anySE ? ('ok' as const) : ('risk' as const);

    return { bestCounters, status };
  };

  return (
    <div className="space-y-5">
      {/* Story Spoiler Shield */}
      <SpoilerGuardBar
        spoilerEnabled={spoilerEnabled}
        spoilerMode={spoilerMode}
        effectiveStage={effectiveSpoilerStage}
        hiddenCount={hiddenBossCount}
        revealedCount={revealedBossIds.length}
        onToggleEnabled={onToggleSpoiler}
        onChangeMode={onChangeSpoilerMode}
        onResetRevealed={() => setRevealedBossIds([])}
      />

      {/* Boss Horizontal Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {BB2_BOSSES.map((boss, index) => {
          const active = boss.id === selectedBoss.id;
          const locked = isBossSpoilerLocked(boss);
          return (
            <button
              key={boss.id}
              type="button"
              onClick={() => setSelectedBossId(boss.id)}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-left whitespace-nowrap shrink-0 transition ${
                active
                  ? 'bg-red-600 text-white border-red-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold">
                {locked && <Lock className="w-3 h-3 shrink-0 opacity-80" />}
                <span>{locked ? `Boss #${index + 1} (Spoiler)` : boss.name}</span>
              </div>
              <div
                className={`text-[10px] font-mono ${
                  active ? 'text-red-100' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {locked ? 'Contenuto Storia Protetto' : `Cap Lv.${boss.levelCap} · ${boss.specialty}`}
              </div>
            </button>
          );
        })}
      </div>

      {/* Spoiler Protected Card */}
      {selectedLocked ? (
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-indigo-500/30 p-6 sm:p-8 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Boss protetto da Anti-Spoiler
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Questo scontro si sblocca{' '}
              <strong>{getSpoilerUnlockHint((selectedBoss.spoilerStage ?? 3) as SpoilerStage)}</strong>.
              Squadra nemica, livello e consigli strategici sono oscurati per non rovinare la storia.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <button
              type="button"
              onClick={() => setRevealedBossIds((prev) => [...prev, selectedBoss.id])}
              className="min-h-[44px] px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold inline-flex items-center gap-2 transition"
            >
              <Eye className="w-4 h-4" />
              <span>Rivela solo questo Boss</span>
            </button>
            <button
              type="button"
              onClick={onToggleSpoiler}
              className="min-h-[44px] px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              Disattiva Anti-Spoiler
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Selected Boss Header Card */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedBoss.location} · {selectedBoss.badgeOrMilestone}
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {selectedBoss.name} — {selectedBoss.title}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {selectedBoss.specialty !== 'Misto' && (
                  <TypeBadge type={selectedBoss.specialty} size="md" />
                )}
                <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  Level Cap {selectedBoss.levelCap}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedBoss.tip}
            </p>

            {members.length === 0 && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-amber-800 dark:text-amber-300">
                  Aggiungi Pokémon alla tua squadra per vedere i counter automatici contro {selectedBoss.name}.
                </span>
                <button
                  type="button"
                  onClick={onGoToTeam}
                  className="min-h-[36px] px-3 rounded-lg bg-amber-600 text-white text-xs font-semibold shrink-0"
                >
                  Crea Squadra
                </button>
              </div>
            )}
          </div>

          {/* Boss Roster & Matchup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedBoss.roster.map((bMon, idx) => {
              const { bestCounters, status } = evaluateAgainstBossMon(bMon);
              const primaryStyle = TYPE_STYLES[bMon.types[0]];

              return (
                <div
                  key={`${bMon.speciesId}-${idx}`}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between"
                >
                  <div className="h-1 w-full" style={{ backgroundColor: primaryStyle.hex }} />
                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <PokemonArtwork
                          speciesId={bMon.speciesId}
                          name={bMon.name}
                          primaryType={bMon.types[0]}
                          size="md"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <span className="font-mono font-bold">Lv.{bMon.level}</span>
                            {bMon.item && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span>{bMon.item}</span>
                              </>
                            )}
                            {bMon.isAce && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="inline-flex items-center gap-1 font-bold text-red-600 dark:text-red-400">
                                  <Crown className="w-3 h-3" /> Ace
                                </span>
                              </>
                            )}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                            {bMon.name}
                          </h3>
                          <div className="mt-1 flex items-center gap-1.5">
                            {bMon.types.map((t) => (
                              <TypeBadge key={t} type={t} size="xs" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Boss Moves */}
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Mosse: </span>
                      {bMon.moves.join(' · ')}
                    </div>

                    {/* Matchup Verdict against User's Team */}
                    {status !== 'empty' && (
                      <div
                        className={`p-3 rounded-xl flex items-center justify-between gap-2 text-xs ${
                          status === 'great'
                            ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300'
                            : status === 'ok'
                              ? 'bg-sky-500/10 text-sky-800 dark:text-sky-300'
                              : 'bg-red-500/10 text-red-800 dark:text-red-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {status === 'great' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                          {status === 'ok' && <Swords className="w-4 h-4 shrink-0" />}
                          {status === 'risk' && <ShieldAlert className="w-4 h-4 shrink-0" />}
                          <span className="font-semibold truncate">
                            {status === 'great'
                              ? `Ottimo counter: ${bestCounters.map((c) => c.name).join(', ')}`
                              : status === 'ok'
                                ? 'Copertura x2 presente (attenzione ai danni subiti)'
                                : 'Minaccia scoperta: nessuna risposta superefficace'}
                          </span>
                        </div>
                        {status === 'risk' && <AlertCircle className="w-4 h-4 shrink-0" />}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
