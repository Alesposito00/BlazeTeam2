import React, { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { ALL_TYPES, getTypeEffectiveness } from '../data/typeChart';
import { PokemonType } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';

export const TypeChartView: React.FC = () => {
  const [type1, setType1] = useState<PokemonType>('Folletto');
  const [type2, setType2] = useState<PokemonType | null>('Acciaio');

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

  const handleSelectType = (t: PokemonType) => {
    if (type1 === t && type2 === null) return;
    if (type2 === t) {
      setType2(null);
    } else if (type2 === null && type1 !== t) {
      setType2(t);
    } else {
      setType1(t);
      setType2(null);
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
              Tabella Tipi Blaze Black 2 Redux (18 Tipi)
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Include il tipo Folletto e la tabella Gen 6+ (Acciaio non resiste più a Spettro e Buio). Tocca fino a 2 tipi.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <TypeBadge type={type1} size="md" />
            {type2 && type2 !== type1 && <TypeBadge type={type2} size="md" />}
            {type2 && (
              <button
                type="button"
                onClick={() => setType2(null)}
                className="min-w-[40px] min-h-[40px] rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center"
                title="Rimuovi secondo tipo"
                aria-label="Rimuovi secondo tipo"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive 18-Type Selector Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {ALL_TYPES.map((t) => {
            const isSelected = t === type1 || t === type2;
            return (
              <button
                key={t}
                type="button"
                onClick={() => handleSelectType(t)}
                className={`min-h-[44px] px-2 rounded-xl border flex items-center justify-center transition ${
                  isSelected
                    ? 'border-red-600 ring-2 ring-red-500/30 bg-red-500/5'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <TypeBadge type={t} size="sm" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Breakdown (dataDex Style) */}
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
                <h2 className={`text-sm font-bold ${section.tone}`}>{section.title}</h2>
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
    </div>
  );
};
