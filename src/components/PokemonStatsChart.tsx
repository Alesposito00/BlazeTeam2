import React, { useMemo, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { calculateStat } from '../data/typeChart';
import { BaseStats, NatureData, StatKey } from '../types/pokemon';

interface PokemonStatsChartProps {
  baseStats: BaseStats;
  ivs?: BaseStats;
  evs?: BaseStats;
  level?: number;
  nature?: NatureData;
  accentHex?: string;
  mode?: 'member' | 'pokedex';
}

const STATS_ORDER: { key: StatKey; short: string }[] = [
  { key: 'hp', short: 'PS' },
  { key: 'atk', short: 'Atk' },
  { key: 'def', short: 'Dif' },
  { key: 'spa', short: 'SpA' },
  { key: 'spd', short: 'SpD' },
  { key: 'spe', short: 'Vel' },
];

export const PokemonStatsChart: React.FC<PokemonStatsChartProps> = ({
  baseStats,
  ivs = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
  evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
  level = 50,
  nature,
  accentHex = '#dc2626',
  mode = 'member',
}) => {
  const [chartType, setChartType] = useState<'radar' | 'bar'>('radar');
  const [metricView, setMetricView] = useState<'potential' | 'ivev'>(
    mode === 'member' ? 'potential' : 'potential'
  );

  const data = useMemo(() => {
    return STATS_ORDER.map(({ key, short }) => {
      const base = baseStats[key];
      const iv = ivs[key];
      const ev = evs[key];

      const actualStat = calculateStat(key, base, iv, ev, level, nature);
      const maxPossibleStat = calculateStat(key, base, 31, 252, level, nature);
      const minStat = calculateStat(key, base, 0, 0, level, nature);

      // Percentage of current stat relative to max optimized stat (31 IV / 252 EV)
      const actualPct = maxPossibleStat > 0 ? Math.round((actualStat / maxPossibleStat) * 100) : 0;
      const basePct = Math.min(100, Math.round((base / 160) * 100));

      const ivPct = Math.round((iv / 31) * 100);
      const evPct = Math.round((ev / 252) * 100);

      return {
        stat: short,
        actualStat,
        maxPossibleStat,
        minStat,
        actualPct,
        maxPct: 100,
        base,
        basePct,
        iv,
        ev,
        ivPct,
        evPct,
      };
    });
  }, [baseStats, ivs, evs, level, nature]);

  return (
    <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-3.5 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
          {mode === 'member'
            ? metricView === 'potential'
              ? `Statistiche Attuali vs Massime (Lv.${level})`
              : 'Ottimizzazione IV (max 31) ed EV (max 252)'
            : `Profilo Base & Potenziale Massimizzato (Lv.${level})`}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {mode === 'member' && (
            <div className="inline-flex rounded-lg bg-slate-200/70 dark:bg-slate-800 p-0.5 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setMetricView('potential')}
                className={`px-2.5 py-1 rounded-md transition ${
                  metricView === 'potential'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                vs Max Stat
              </button>
              <button
                type="button"
                onClick={() => setMetricView('ivev')}
                className={`px-2.5 py-1 rounded-md transition ${
                  metricView === 'ivev'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                IV / EV %
              </button>
            </div>
          )}

          <div className="inline-flex rounded-lg bg-slate-200/70 dark:bg-slate-800 p-0.5 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setChartType('radar')}
              className={`px-2.5 py-1 rounded-md transition ${
                chartType === 'radar'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Ragnatela
            </button>
            <button
              type="button"
              onClick={() => setChartType('bar')}
              className={`px-2.5 py-1 rounded-md transition ${
                chartType === 'bar'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Barre
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-56 sm:h-64 min-w-0">
        {chartType === 'radar' ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
              <PolarGrid stroke="#94a3b8" strokeOpacity={0.35} />
              <PolarAngleAxis
                dataKey="stat"
                tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              {mode === 'member' && metricView === 'potential' && (
                <>
                  <Radar
                    name="Massimo (31 IV / 252 EV)"
                    dataKey="maxPct"
                    stroke="#94a3b8"
                    strokeDasharray="4 3"
                    fill="#94a3b8"
                    fillOpacity={0.14}
                  />
                  <Radar
                    name="Attuale (% sul Max)"
                    dataKey="actualPct"
                    stroke={accentHex}
                    fill={accentHex}
                    fillOpacity={0.42}
                    strokeWidth={2}
                  />
                </>
              )}
              {mode === 'member' && metricView === 'ivev' && (
                <>
                  <Radar
                    name="IV (% su 31)"
                    dataKey="ivPct"
                    stroke="#0284c7"
                    fill="#0284c7"
                    fillOpacity={0.22}
                    strokeWidth={2}
                  />
                  <Radar
                    name="EV (% su 252)"
                    dataKey="evPct"
                    stroke={accentHex}
                    fill={accentHex}
                    fillOpacity={0.42}
                    strokeWidth={2}
                  />
                </>
              )}
              {mode === 'pokedex' && (
                <>
                  <Radar
                    name="Rif. Alto (160 Base)"
                    dataKey="maxPct"
                    stroke="#94a3b8"
                    strokeDasharray="4 3"
                    fill="#94a3b8"
                    fillOpacity={0.12}
                  />
                  <Radar
                    name="Base Stat (% su 160)"
                    dataKey="basePct"
                    stroke={accentHex}
                    fill={accentHex}
                    fillOpacity={0.42}
                    strokeWidth={2}
                  />
                </>
              )}
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.94)',
                  border: '1px solid rgba(148, 163, 184, 0.25)',
                  borderRadius: '12px',
                  fontSize: '12px',
                  color: '#f8fafc',
                }}
                formatter={(value: unknown, name: unknown, item: { payload?: (typeof data)[number] }) => {
                  const p = item?.payload;
                  if (!p) return [String(value), String(name)];
                  if (mode === 'pokedex') {
                    return [`Base ${p.base} (Max Lv.${level}: ${p.maxPossibleStat})`, String(name)];
                  }
                  if (metricView === 'ivev') {
                    const labelStr = String(name);
                    if (labelStr.includes('IV')) return [`${p.iv} / 31 (${value}%)`, 'IV'];
                    return [`${p.ev} / 252 (${value}%)`, 'EV'];
                  }
                  const labelStr = String(name);
                  if (labelStr.includes('Massimo')) return [`${p.maxPossibleStat}`, 'Max possibile'];
                  return [`${p.actualStat} / ${p.maxPossibleStat} (${value}%)`, 'Attuale'];
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.25} />
              <XAxis dataKey="stat" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.94)',
                  border: '1px solid rgba(148, 163, 184, 0.25)',
                  borderRadius: '12px',
                  fontSize: '12px',
                  color: '#f8fafc',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              {mode === 'member' && metricView === 'potential' && (
                <>
                  <Bar dataKey="actualStat" name="Attuale" fill={accentHex} radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey="maxPossibleStat"
                    name="Massimo (31 IV / 252 EV)"
                    fill="#94a3b8"
                    radius={[4, 4, 0, 0]}
                  />
                </>
              )}
              {mode === 'member' && metricView === 'ivev' && (
                <>
                  <Bar dataKey="ivPct" name="IV (% su 31)" fill="#0284c7" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="evPct" name="EV (% su 252)" fill={accentHex} radius={[4, 4, 0, 0]} />
                </>
              )}
              {mode === 'pokedex' && (
                <>
                  <Bar dataKey="base" name="Stat Base" fill={accentHex} radius={[4, 4, 0, 0]} />
                  <Bar
                    dataKey="maxPossibleStat"
                    name={`Max Lv.${level} (31 IV / 252 EV)`}
                    fill="#94a3b8"
                    radius={[4, 4, 0, 0]}
                  />
                </>
              )}
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};
