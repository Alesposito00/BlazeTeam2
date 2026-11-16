import React, { useMemo, useState } from 'react';
import { ArrowRight, ArrowLeftRight, ShieldAlert, Swords, X } from 'lucide-react';
import { ALL_TYPES, getTypeEffectiveness, TYPE_STYLES } from '../data/typeChart';
import { PokemonType } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';

function getMultiplierLabel(mult: number): {
  badge: string;
  text: string;
  tone: string;
} {
  if (mult === 0) {
    return {
      badge: '0×',
      text: 'Non ha effetto (Immunità)',
      tone: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
    };
  }
  if (mult >= 3.5) {
    return {
      badge: '4×',
      text: 'Doppia Superefficacia!',
      tone: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/40',
    };
  }
  if (mult > 1) {
    return {
      badge: '2×',
      text: 'Superefficace!',
      tone: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    };
  }
  if (mult <= 0.3) {
    return {
      badge: '¼×',
      text: 'Molto poco efficace',
      tone: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30',
    };
  }
  if (mult < 1) {
    return {
      badge: '½×',
      text: 'Non molto efficace',
      tone: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-500/30',
    };
  }
  return {
    badge: '1×',
    text: 'Danno normale',
    tone: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  };
}

export const TypeChartView: React.FC = () => {
  // Defender selection state (Single vs Dual Type)
  const [type1, setType1] = useState<PokemonType>('Folletto');
  const [type2, setType2] = useState<PokemonType | null>('Acciaio');
  const [activeSlot, setActiveSlot] = useState<1 | 2>(2);

  // Offensive move effectiveness state
  const [moveType, setMoveType] = useState<PokemonType>('Folletto');
  const [targetType1, setTargetType1] = useState<PokemonType>('Drago');
  const [targetType2, setTargetType2] = useState<PokemonType | null>('Terra');

  const isDualType = type2 !== null && type2 !== type1;

  const activeTypes = useMemo<PokemonType[]>(() => {
    if (type2 && type2 !== type1) return [type1, type2];
    return [type1];
  }, [type1, type2]);

  const groupedDefense = useMemo(() => {
    const groups: Record<string, PokemonType[]> = {
      '4': [],
      '2': [],
      '1': [],
      '0.5': [],
      '0.25': [],
      '0': [],
    };
    for (const atk of ALL_TYPES) {
      const m = getTypeEffectiveness(atk, activeTypes);
      const key = String(m);
      if (groups[key]) groups[key].push(atk);
    }
    return groups;
  }, [activeTypes]);

  const groupedOffense = useMemo(() => {
    const groups: Record<'2' | '0.5' | '0' | '1', PokemonType[]> = {
      '2': [],
      '0.5': [],
      '0': [],
      '1': [],
    };
    for (const def of ALL_TYPES) {
      const m = getTypeEffectiveness(moveType, [def]);
      const key = String(m) as '2' | '0.5' | '0' | '1';
      if (groups[key]) groups[key].push(def);
    }
    return groups;
  }, [moveType]);

  const combinedStabSuperEffective = useMemo(() => {
    if (!isDualType || !type2) return [];
    return ALL_TYPES.filter(
      (def) =>
        getTypeEffectiveness(type1, [def]) > 1 || getTypeEffectiveness(type2, [def]) > 1
    );
  }, [isDualType, type1, type2]);

  const targetActiveTypes = useMemo<PokemonType[]>(() => {
    if (targetType2 && targetType2 !== targetType1) return [targetType1, targetType2];
    return [targetType1];
  }, [targetType1, targetType2]);

  const directMatchupMult = useMemo(
    () => getTypeEffectiveness(moveType, targetActiveTypes),
    [moveType, targetActiveTypes]
  );

  const directMatchupInfo = getMultiplierLabel(directMatchupMult);

  const handleSetSingleMode = () => {
    setType2(null);
    setActiveSlot(1);
  };

  const handleSetDualMode = () => {
    if (type2 && type2 !== type1) {
      setActiveSlot(2);
      return;
    }
    const fallbackSecond: PokemonType = type1 === 'Acciaio' ? 'Folletto' : 'Acciaio';
    setType2(fallbackSecond);
    setActiveSlot(2);
  };

  const handleSwapSlots = () => {
    if (!type2 || type2 === type1) return;
    const prev1 = type1;
    setType1(type2);
    setType2(prev1);
  };

  const handleSelectGridType = (t: PokemonType) => {
    if (!isDualType) {
      setType1(t);
      setType2(null);
      return;
    }

    if (activeSlot === 1) {
      if (t === type2) {
        // Swap cleanly instead of collapsing into single type
        setType2(type1);
        setType1(t);
      } else {
        setType1(t);
      }
      setActiveSlot(2);
    } else {
      if (t === type1) {
        // Swap cleanly instead of collapsing into single type
        if (type2) setType1(type2);
        setType2(t);
      } else {
        setType2(t);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Defender Selector Card: Single vs Dual Type */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Tabella Tipi Blaze Black 2 Redux (18 Tipi)
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Tabella Gen 6+ (Folletto incluso, Acciaio non resiste più a Spettro e Buio). Scegli tra Tipo Singolo o Doppio Tipo.
            </p>
          </div>

          {/* Segmented Mode Selector: Tipo Singolo vs Doppio Tipo */}
          <div
            className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 self-start md:self-auto shrink-0"
            role="group"
            aria-label="Modalità selezione tipi"
          >
            <button
              type="button"
              onClick={handleSetSingleMode}
              className={`min-h-[38px] px-3.5 rounded-lg text-xs font-bold transition ${
                !isDualType
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tipo Singolo
            </button>
            <button
              type="button"
              onClick={handleSetDualMode}
              className={`min-h-[38px] px-3.5 rounded-lg text-xs font-bold transition ${
                isDualType
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Doppio Tipo
            </button>
          </div>
        </div>

        {/* Active Slots Control Bar */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Slot 1 Button */}
            <button
              type="button"
              onClick={() => setActiveSlot(1)}
              className={`min-h-[42px] px-3 rounded-xl border flex items-center gap-2 transition ${
                activeSlot === 1 || !isDualType
                  ? 'border-red-600 bg-white dark:bg-slate-900 ring-2 ring-red-500/20'
                  : 'border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300'
              }`}
            >
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                {isDualType ? 'Tipo 1:' : 'Tipo:'}
              </span>
              <TypeBadge type={type1} size="sm" />
            </button>

            {/* Slot 2 Button (in Dual Type mode) or Add Second Type CTA */}
            {isDualType && type2 ? (
              <>
                <button
                  type="button"
                  onClick={() => setActiveSlot(2)}
                  className={`min-h-[42px] px-3 rounded-xl border flex items-center gap-2 transition ${
                    activeSlot === 2
                      ? 'border-red-600 bg-white dark:bg-slate-900 ring-2 ring-red-500/20'
                      : 'border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300'
                  }`}
                >
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    Tipo 2:
                  </span>
                  <TypeBadge type={type2} size="sm" />
                </button>

                <button
                  type="button"
                  onClick={handleSwapSlots}
                  className="min-h-[40px] px-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-slate-400 inline-flex items-center gap-1.5 transition"
                  title="Inverti Tipo 1 e Tipo 2"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Inverti</span>
                </button>

                <button
                  type="button"
                  onClick={handleSetSingleMode}
                  className="min-h-[40px] px-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 hover:border-red-400 inline-flex items-center gap-1 transition"
                  title="Passa a Tipo Singolo"
                >
                  <X className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Singolo</span>
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleSetDualMode}
                className="min-h-[42px] px-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition"
              >
                + Aggiungi Secondo Tipo
              </button>
            )}
          </div>

          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {isDualType
              ? `Seleziona dalla griglia per impostare il Tipo ${activeSlot}`
              : 'Seleziona un tipo dalla griglia qui sotto'}
          </span>
        </div>

        {/* Interactive 18-Type Selector Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {ALL_TYPES.map((t) => {
            const isSlot1 = t === type1;
            const isSlot2 = isDualType && t === type2;
            const isSelected = isSlot1 || isSlot2;
            const isActiveTarget =
              (activeSlot === 1 && isSlot1) || (isDualType && activeSlot === 2 && isSlot2);

            return (
              <button
                key={t}
                type="button"
                onClick={() => handleSelectGridType(t)}
                className={`relative min-h-[44px] px-2 rounded-xl border flex items-center justify-center transition ${
                  isSelected
                    ? isActiveTarget
                      ? 'border-red-600 ring-2 ring-red-500/35 bg-red-500/10'
                      : 'border-red-500/60 bg-red-500/5'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <TypeBadge type={t} size="sm" />
                {isSelected && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-600 text-white font-mono text-[10px] font-extrabold flex items-center justify-center shadow">
                    {isSlot1 ? '1' : '2'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: Defense (Weaknesses & Resistances) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Debolezze e Resistenze Subite
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span>Difensore:</span>
            <TypeBadge type={type1} size="xs" />
            {isDualType && type2 && <TypeBadge type={type2} size="xs" />}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: '4', title: 'Debolezza Doppia (4×)', tone: 'text-red-700 dark:text-red-400' },
            { key: '2', title: 'Debolezza (2×)', tone: 'text-orange-600 dark:text-orange-400' },
            { key: '0.5', title: 'Resistenza (½×)', tone: 'text-emerald-600 dark:text-emerald-400' },
            { key: '0.25', title: 'Resistenza Doppia (¼×)', tone: 'text-teal-600 dark:text-teal-400' },
            { key: '0', title: 'Immunità (0×)', tone: 'text-indigo-600 dark:text-indigo-400' },
            { key: '1', title: 'Danno Normale (1×)', tone: 'text-slate-600 dark:text-slate-400' },
          ].map((section) => {
            const list = groupedDefense[section.key];
            return (
              <div
                key={section.key}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm font-bold ${section.tone}`}>{section.title}</h3>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {list.length}
                  </span>
                </div>
                {list.length === 0 ? (
                  <p className="text-xs text-slate-400">Nessun tipo in questa fascia</p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {list.map((t) => (
                      <TypeBadge key={t} type={t} size="sm" />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Offensive Move Super-Effectiveness */}
      <section className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Swords className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Superefficacia della Mossa (Attacco)
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Seleziona il tipo della mossa per vedere su quali tipi è Superefficace (2×/4×), Poco Efficace o Inefficace.
            </p>
          </div>

          {/* Quick STAB shortcut buttons from selected Pokémon types */}
          <div className="flex items-center gap-1.5 flex-wrap shrink-0">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              STAB:
            </span>
            <button
              type="button"
              onClick={() => setMoveType(type1)}
              className={`px-2.5 py-1 rounded-lg border text-xs font-semibold inline-flex items-center gap-1.5 transition ${
                moveType === type1
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
              }`}
            >
              <TypeBadge type={type1} size="xs" />
            </button>
            {isDualType && type2 && (
              <button
                type="button"
                onClick={() => setMoveType(type2)}
                className={`px-2.5 py-1 rounded-lg border text-xs font-semibold inline-flex items-center gap-1.5 transition ${
                  moveType === type2
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <TypeBadge type={type2} size="xs" />
              </button>
            )}
          </div>
        </div>

        {/* 18-Type Picker for Attacking Move Type */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Tipo della Mossa usata:
            </span>
            <TypeBadge type={moveType} size="sm" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-1.5">
            {ALL_TYPES.map((t) => {
              const active = moveType === t;
              const style = TYPE_STYLES[t];
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setMoveType(t)}
                  className={`min-h-[38px] px-2 rounded-xl border text-[11px] font-bold transition truncate ${
                    active
                      ? `${style.bg} ${style.text} border-transparent ring-2 ring-offset-1 ring-slate-900/30 dark:ring-white/40`
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Direct Move vs Target (Single or Dual Type) Calculator */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Verifica Diretta: Mossa vs Avversario (Singolo o Doppio Tipo)
            </span>
            <button
              type="button"
              onClick={() => {
                setTargetType1(type1);
                setTargetType2(isDualType ? type2 : null);
              }}
              className="text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline self-start sm:self-auto"
            >
              Usa tipi del selettore sopra
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  Mossa:
                </span>
                <TypeBadge type={moveType} size="xs" />
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

              <select
                value={targetType1}
                onChange={(e) => setTargetType1(e.target.value as PokemonType)}
                className="min-h-[38px] px-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
                aria-label="Tipo 1 bersaglio"
              >
                {ALL_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={targetType2 ?? ''}
                onChange={(e) =>
                  setTargetType2(e.target.value ? (e.target.value as PokemonType) : null)
                }
                className="min-h-[38px] px-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
                aria-label="Tipo 2 bersaglio"
              >
                <option value="">— (Tipo Singolo)</option>
                {ALL_TYPES.filter((t) => t !== targetType1).map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div
              className={`px-3.5 py-2 rounded-xl border inline-flex items-center gap-2 text-xs font-bold self-start lg:self-auto ${directMatchupInfo.tone}`}
            >
              <span className="font-mono text-sm font-extrabold">{directMatchupInfo.badge}</span>
              <span>{directMatchupInfo.text}</span>
            </div>
          </div>
        </div>

        {/* Full 18-Type Breakdown for Selected Move Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              key: '2' as const,
              title: 'Superefficace contro (2×)',
              tone: 'text-emerald-600 dark:text-emerald-400',
              highlight: 'border-emerald-500/30 bg-emerald-500/[0.04]',
            },
            {
              key: '0.5' as const,
              title: 'Poco Efficace contro (½×)',
              tone: 'text-orange-600 dark:text-orange-400',
              highlight: 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30',
            },
            {
              key: '0' as const,
              title: 'Nessun Effetto contro (0×)',
              tone: 'text-indigo-600 dark:text-indigo-400',
              highlight: 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30',
            },
            {
              key: '1' as const,
              title: 'Danno Normale contro (1×)',
              tone: 'text-slate-600 dark:text-slate-400',
              highlight: 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30',
            },
          ].map((sec) => {
            const list = groupedOffense[sec.key];
            return (
              <div
                key={sec.key}
                className={`p-4 rounded-xl border space-y-2.5 ${sec.highlight}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm font-bold ${sec.tone}`}>{sec.title}</h3>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {list.length}
                  </span>
                </div>
                {list.length === 0 ? (
                  <p className="text-xs text-slate-400">Nessun tipo in questa fascia</p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {list.map((t) => (
                      <TypeBadge key={t} type={t} size="sm" />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Combined Dual-Type STAB Super-Effective Summary */}
        {isDualType && type2 && (
          <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white flex-wrap">
                <span>Copertura STAB Superefficace Combinata</span>
                <TypeBadge type={type1} size="xs" />
                <span>+</span>
                <TypeBadge type={type2} size="xs" />
              </div>
              <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {combinedStabSuperEffective.length}/{ALL_TYPES.length} tipi
              </span>
            </div>
            {combinedStabSuperEffective.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Nessun tipo colpito in superefficacia da questi due tipi.
              </p>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {combinedStabSuperEffective.map((t) => (
                  <TypeBadge key={t} type={t} size="xs" />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
