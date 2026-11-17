import React, { useMemo, useState } from 'react';
import {
  Copy,
  FolderOpen,
  Plus,
  Share2,
  Sparkles,
  Trash2,
  Trophy,
  X,
} from 'lucide-react';
import { BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import { ALL_TYPES, TYPE_STYLES } from '../data/typeChart';
import { BattleFormat, PokemonType, SavedTeam, TeamCategory } from '../types/pokemon';
import { TEAM_CATEGORIES, TeamPresetType } from '../utils/showdown';
import { PokemonArtwork } from './PokemonArtwork';
import { TypeBadge } from './TypeBadge';

interface TeamsManagerViewProps {
  teams: SavedTeam[];
  activeTeamId: string;
  onShareTeam: (id: string) => void;
  onSelectAndOpen: (id: string) => void;
  onCreateCustomTeam: (options: {
    name: string;
    category: TeamCategory;
    monotype?: PokemonType;
    mode: 'Standard' | 'Challenge Mode';
    battleFormat: BattleFormat;
    preset: TeamPresetType;
  }) => void;
  onDuplicateTeam: (id: string) => void;
  onUpdateTeamCategory: (id: string, category: TeamCategory, monotype?: PokemonType) => void;
  onDeleteTeam: (id: string) => void;
  onOpenCompetitiveGuide: () => void;
}

export const TeamsManagerView: React.FC<TeamsManagerViewProps> = ({
  teams,
  activeTeamId,
  onShareTeam,
  onSelectAndOpen,
  onCreateCustomTeam,
  onDuplicateTeam,
  onUpdateTeamCategory,
  onDeleteTeam,
  onOpenCompetitiveGuide,
}) => {
  const [filterCategory, setFilterCategory] = useState<TeamCategory | 'Tutte'>('Tutte');
  const [showNewModal, setShowNewModal] = useState(false);

  // New team form state
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<TeamCategory>('Run Principale');
  const [newMonotype, setNewMonotype] = useState<PokemonType>('Folletto');
  const [newMode, setNewMode] = useState<'Standard' | 'Challenge Mode'>('Challenge Mode');
  const [newBattleFormat, setNewBattleFormat] = useState<BattleFormat>('Singolo');
  const [newPreset, setNewPreset] = useState<TeamPresetType>('empty');

  const filteredTeams = useMemo(() => {
    if (filterCategory === 'Tutte') return teams;
    return teams.filter((t) => t.category === filterCategory);
  }, [teams, filterCategory]);

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateCustomTeam({
      name: newName.trim() || `Squadra ${newCategory}`,
      category: newCategory,
      monotype: newCategory === 'Monotype' ? newMonotype : undefined,
      mode: newMode,
      battleFormat: newBattleFormat,
      preset: newPreset,
    });
    setNewName('');
    setShowNewModal(false);
  };

  return (
    <div className="space-y-5">
      {/* Header & Create CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            Le Mie Squadre Salvate
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Organizza squadre diverse per Run Principale, Nuzlocke, Monotype (incluso Folletto), Meteo e Lega Pokémon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowNewModal(true)}
          className="min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Crea Nuova Squadra</span>
        </button>
      </div>

      {/* Category Filter Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setFilterCategory('Tutte')}
          className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition ${
            filterCategory === 'Tutte'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          Tutte ({teams.length})
        </button>
        {TEAM_CATEGORIES.map((cat) => {
          const count = teams.filter((t) => t.category === cat).length;
          const active = filterCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition border ${
                active
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Saved Teams Grid */}
      {filteredTeams.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Nessuna squadra salvata nella categoria “{filterCategory}”
          </p>
          <button
            type="button"
            onClick={() => {
              if (filterCategory !== 'Tutte') setNewCategory(filterCategory);
              setShowNewModal(true);
            }}
            className="min-h-[40px] px-4 rounded-xl bg-red-600 text-white text-xs font-semibold"
          >
            Crea squadra {filterCategory !== 'Tutte' ? filterCategory : ''}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTeams.map((t) => {
            const isActive = t.id === activeTeamId;
            const memberCount = t.members.filter(Boolean).length;
            return (
              <div
                key={t.id}
                className={`rounded-2xl bg-white dark:bg-slate-900 border overflow-hidden flex flex-col justify-between transition ${
                  isActive
                    ? 'border-red-600 ring-1 ring-red-600/30'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span className="font-semibold text-red-600 dark:text-red-400">
                          {t.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{t.battleFormat === 'Doppio' ? 'Doppio' : 'Singolo'}</span>
                        <span aria-hidden="true">·</span>
                        <span>{t.mode}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{memberCount}/6</span>
                        {isActive && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              Attiva
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white truncate mt-0.5">
                        {t.name}
                      </h3>
                    </div>

                    {t.category === 'Monotype' && t.monotype && (
                      <TypeBadge type={t.monotype} size="xs" />
                    )}
                  </div>

                  {/* 6 Mini Pokémon Slot Previews */}
                  <div className="grid grid-cols-6 gap-1.5">
                    {t.members.map((m, i) => {
                      const sp = m ? BB2_POKEMON_BY_ID[m.speciesId] : null;
                      if (!sp) {
                        return (
                          <div
                            key={i}
                            className="aspect-square rounded-xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center text-[10px] font-mono text-slate-400"
                          >
                            —
                          </div>
                        );
                      }
                      return (
                        <div key={m!.uid} className="flex flex-col items-center">
                          <PokemonArtwork
                            speciesId={sp.id}
                            spriteId={sp.spriteId}
                            name={sp.name}
                            primaryType={sp.types[0]}
                            shiny={m!.shiny}
                            size="sm"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Quick Category Selector */}
                  <div className="flex items-center gap-2 pt-1">
                    <select
                      value={t.category}
                      onChange={(e) =>
                        onUpdateTeamCategory(
                          t.id,
                          e.target.value as TeamCategory,
                          e.target.value === 'Monotype' ? t.monotype || 'Folletto' : undefined
                        )
                      }
                      className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                      aria-label={`Categoria di ${t.name}`}
                    >
                      {TEAM_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {t.category === 'Monotype' && (
                      <select
                        value={t.monotype || 'Folletto'}
                        onChange={(e) =>
                          onUpdateTeamCategory(t.id, 'Monotype', e.target.value as PokemonType)
                        }
                        className="min-h-[36px] px-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                        aria-label="Tipo Monotype"
                      >
                        {ALL_TYPES.map((tp) => (
                          <option key={tp} value={tp}>
                            {tp}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => onSelectAndOpen(t.id)}
                    className="min-h-[40px] px-3.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold inline-flex items-center gap-1.5 hover:opacity-90 transition"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Apri</span>
                  </button>

                  <div className="flex items-center gap-1 flex-wrap">
                    <button
                      type="button"
                      onClick={() => onShareTeam(t.id)}
                      className="min-h-[40px] px-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 inline-flex items-center gap-1.5 transition"
                      title="Condividi squadra come testo Showdown"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Condividi</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onDuplicateTeam(t.id)}
                      className="min-h-[40px] px-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 inline-flex items-center gap-1.5 transition"
                      title="Duplica squadra"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Duplica</span>
                    </button>
                    {teams.length > 1 && (
                      <button
                        type="button"
                        onClick={() => onDeleteTeam(t.id)}
                        className="min-w-[40px] min-h-[40px] rounded-xl text-red-600 dark:text-red-400 hover:bg-red-500/10 flex items-center justify-center transition"
                        aria-label={`Elimina ${t.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Archetype Templates */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span>Template Pronti Blaze Black 2 Redux</span>
          </div>
          <button
            type="button"
            onClick={onOpenCompetitiveGuide}
            className="min-h-[38px] px-3.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold inline-flex items-center gap-1.5 transition shrink-0"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Team Famosi Metro Lotta &amp; PWT</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {[
            {
              preset: 'fairy' as TeamPresetType,
              title: 'Monotype Folletto',
              desc: 'Azumarill, Mawile, Togekiss, Gardevoir, Altaria, Whimsicott',
              cat: 'Monotype' as TeamCategory,
              mono: 'Folletto' as PokemonType,
            },
            {
              preset: 'serperior' as TeamPresetType,
              title: 'Run Redux Serperior',
              desc: 'Serperior Drago, Azumarill Folletto, Flygon 600 BST, Excadrill',
              cat: 'Run Principale' as TeamCategory,
            },
            {
              preset: 'rain' as TeamPresetType,
              title: 'Pioggia & Volt-Turn',
              desc: 'Samurott Lotta, Kingdra, Rotom-W, Ferrothorn, Flygon',
              cat: 'Meteo / Strategia' as TeamCategory,
            },
            {
              preset: 'sun' as TeamPresetType,
              title: 'Team Sole Folletto',
              desc: 'Ninetales Fuoco/Folletto, Emboar Fuoco/Terra, Meganium Folletto',
              cat: 'Meteo / Strategia' as TeamCategory,
            },
          ].map((tpl) => (
            <button
              key={tpl.preset}
              type="button"
              onClick={() =>
                onCreateCustomTeam({
                  name: tpl.title,
                  category: tpl.cat,
                  monotype: tpl.mono,
                  mode: 'Challenge Mode',
                  battleFormat: 'Singolo',
                  preset: tpl.preset,
                })
              }
              className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-red-500/60 text-left transition space-y-1 bg-slate-50/50 dark:bg-slate-800/30"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>{tpl.title}</span>
                <Plus className="w-3.5 h-3.5 text-red-600" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {tpl.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Create New Team Modal */}
      {showNewModal && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
          onClick={() => setShowNewModal(false)}
        >
          <form
            onSubmit={handleCreateSubmit}
            className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto sm:hidden" />
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Nuova Squadra BB2 Redux
              </h2>
              <button
                type="button"
                onClick={() => setShowNewModal(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Nome Squadra
              </label>
              <input
                type="text"
                maxLength={32}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Es: Nuzlocke Tentativo 2"
                className="w-full min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Tipologia Squadra
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as TeamCategory)}
                  className="w-full min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white"
                >
                  {TEAM_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Difficoltà BB2
                </label>
                <select
                  value={newMode}
                  onChange={(e) => setNewMode(e.target.value as 'Standard' | 'Challenge Mode')}
                  className="w-full min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white"
                >
                  <option value="Challenge Mode">Challenge Mode</option>
                  <option value="Standard">Standard</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Formato Lotta Preferito
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Singolo', 'Doppio'] as const).map((fmt) => {
                  const active = newBattleFormat === fmt;
                  return (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setNewBattleFormat(fmt)}
                      className={`min-h-[44px] px-3 rounded-xl text-xs font-semibold border transition whitespace-nowrap ${
                        active
                          ? 'bg-red-600 text-white border-red-600 shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {fmt === 'Singolo' ? 'Lotta in Singolo' : 'Lotta in Doppio'}
                    </button>
                  );
                })}
              </div>
            </div>

            {newCategory === 'Monotype' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Tipo del Monotype
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_TYPES.map((t) => {
                    const active = newMonotype === t;
                    const st = TYPE_STYLES[t];
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setNewMonotype(t)}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition border ${
                          active
                            ? `${st.bg} ${st.text} border-transparent`
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Base Iniziale
              </label>
              <select
                value={newPreset}
                onChange={(e) => setNewPreset(e.target.value as TeamPresetType)}
                className="w-full min-h-[44px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white"
              >
                <option value="empty">Vuota (6 slot liberi)</option>
                <option value="fairy">Preset Monotype Folletto Redux</option>
                <option value="serperior">Preset Run Serperior (Erba/Drago)</option>
                <option value="samurott">Preset Offensiva Samurott (Acqua/Lotta)</option>
                <option value="rain">Preset Pioggia & Volt-Turn</option>
                <option value="sun">Preset Sole (Ninetales Fuoco/Folletto)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full min-h-[48px] rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
            >
              Salva e Apri Squadra
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
