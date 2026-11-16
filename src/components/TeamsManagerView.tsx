import React, { useMemo, useState } from 'react';
import { User } from 'firebase/auth';
import {
  CheckCircle2,
  Cloud,
  CloudUpload,
  Copy,
  Download,
  ExternalLink,
  FileCode2,
  FolderOpen,
  Loader2,
  Plus,
  RefreshCw,
  Share2,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react';
import { BB2_POKEMON_BY_ID } from '../data/bb2Pokemon';
import { ALL_TYPES, TYPE_STYLES } from '../data/typeChart';
import { DriveShowdownFile } from '../services/driveTeams';
import { PokemonType, SavedTeam, TeamCategory } from '../types/pokemon';
import { TEAM_CATEGORIES, TeamPresetType } from '../utils/showdown';
import { PokemonArtwork } from './PokemonArtwork';
import { TypeBadge } from './TypeBadge';

interface TeamsManagerViewProps {
  teams: SavedTeam[];
  activeTeamId: string;
  user: User | null;
  authLoading: boolean;
  driveConnected: boolean;
  driveFiles: DriveShowdownFile[];
  driveLoading: boolean;
  onSignInGoogle: () => void;
  onRefreshDriveFiles: () => void;
  onSaveTeamToDrive: (teamId: string) => void;
  onSaveAllTeamsToDrive: () => void;
  onImportDriveFile: (file: DriveShowdownFile) => void;
  onImportAllFromDrive: () => void;
  onRequestDeleteDriveFile: (file: DriveShowdownFile) => void;
  onShareTeam: (id: string) => void;
  onSelectAndOpen: (id: string) => void;
  onCreateCustomTeam: (options: {
    name: string;
    category: TeamCategory;
    monotype?: PokemonType;
    mode: 'Standard' | 'Challenge Mode';
    preset: TeamPresetType;
  }) => void;
  onDuplicateTeam: (id: string) => void;
  onUpdateTeamCategory: (id: string, category: TeamCategory, monotype?: PokemonType) => void;
  onDeleteTeam: (id: string) => void;
}

export const TeamsManagerView: React.FC<TeamsManagerViewProps> = ({
  teams,
  activeTeamId,
  user,
  authLoading,
  driveConnected,
  driveFiles,
  driveLoading,
  onSignInGoogle,
  onRefreshDriveFiles,
  onSaveTeamToDrive,
  onSaveAllTeamsToDrive,
  onImportDriveFile,
  onImportAllFromDrive,
  onRequestDeleteDriveFile,
  onShareTeam,
  onSelectAndOpen,
  onCreateCustomTeam,
  onDuplicateTeam,
  onUpdateTeamCategory,
  onDeleteTeam,
}) => {
  const [filterCategory, setFilterCategory] = useState<TeamCategory | 'Tutte'>('Tutte');
  const [showNewModal, setShowNewModal] = useState(false);

  // New team form state
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<TeamCategory>('Run Principale');
  const [newMonotype, setNewMonotype] = useState<PokemonType>('Folletto');
  const [newMode, setNewMode] = useState<'Standard' | 'Challenge Mode'>('Challenge Mode');
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

      {/* Google Drive Cloud Showdown (.txt) Banner & File Browser */}
      <div
        className={`p-4 rounded-2xl border space-y-4 ${
          driveConnected
            ? 'bg-emerald-500/[0.04] border-emerald-500/25'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                driveConnected
                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                  : 'bg-red-500/10 text-red-600 dark:text-red-400'
              }`}
            >
              <Cloud className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {driveConnected
                    ? `Google Drive Showdown attivo (${user?.email || user?.displayName || 'Google'})`
                    : user
                      ? 'Autorizza Google Drive per salvare e condividere file Showdown'
                      : 'Salva e condividi squadre su Google Drive (solo file Showdown .txt)'}
                </span>
                {driveConnected && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {driveLoading ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Sincronizzo Drive...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{driveFiles.length} file .txt</span>
                      </>
                    )}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {driveConnected
                  ? 'Ogni squadra viene salvata nella cartella «BlazeDex 2 - Squadre Showdown» unicamente come file .showdown.txt leggero e condivisibile tramite link Drive.'
                  : 'Connetti il tuo account Google per salvare le squadre come file .showdown.txt sul tuo Drive e condividerle in 1 tocco su qualsiasi dispositivo.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap shrink-0">
            {driveConnected ? (
              <>
                <button
                  type="button"
                  disabled={driveLoading}
                  onClick={onSaveAllTeamsToDrive}
                  className="min-h-[40px] px-3.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition"
                >
                  <CloudUpload className="w-3.5 h-3.5" />
                  <span>Salva Tutte su Drive</span>
                </button>
                {driveFiles.length > 0 && (
                  <button
                    type="button"
                    disabled={driveLoading}
                    onClick={onImportAllFromDrive}
                    className="min-h-[40px] px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold inline-flex items-center gap-1.5 hover:opacity-90 disabled:opacity-60 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Carica Tutte</span>
                  </button>
                )}
                <button
                  type="button"
                  disabled={driveLoading}
                  onClick={onRefreshDriveFiles}
                  className="min-h-[40px] px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 inline-flex items-center gap-1.5 hover:border-emerald-500 disabled:opacity-60 transition"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${driveLoading ? 'animate-spin' : ''}`} />
                  <span>Aggiorna</span>
                </button>
              </>
            ) : (
              <button
                type="button"
                disabled={authLoading}
                onClick={onSignInGoogle}
                className="min-h-[40px] px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold inline-flex items-center gap-2 hover:opacity-90 disabled:opacity-60 transition"
              >
                {authLoading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#EA4335"
                      d="M12 10.2v3.9h5.4c-.2 1.2-1.4 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.1 14.6 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12s4.4 9.8 9.8 9.8c5.7 0 9.4-4 9.4-9.6 0-.6-.1-1.1-.2-1.6H12z"
                    />
                  </svg>
                )}
                <span>{user ? 'Collega Google Drive' : 'Accedi con Google'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Google Drive Showdown Files List */}
        {driveConnected && (
          <div className="pt-3 border-t border-emerald-500/20 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                File Showdown salvati in Google Drive ({driveFiles.length})
              </span>
            </div>

            {driveLoading && driveFiles.length === 0 ? (
              <div className="py-4 text-center text-xs text-slate-500 dark:text-slate-400 inline-flex items-center justify-center gap-2 w-full">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Caricamento file Showdown da Google Drive...</span>
              </div>
            ) : driveFiles.length === 0 ? (
              <p className="text-xs text-slate-500 dark:text-slate-400 py-1">
                Nessun file Showdown salvato su Google Drive. Premi «Salva Drive» su una squadra qui sotto per caricarlo subito.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {driveFiles.map((file) => {
                  const modDate = file.modifiedTime
                    ? new Date(file.modifiedTime).toLocaleDateString('it-IT', {
                        day: '2-digit',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : '';
                  return (
                    <div
                      key={file.id}
                      className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {file.name}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 flex-wrap mt-0.5">
                          {file.appProperties?.category && (
                            <span className="font-semibold text-red-600 dark:text-red-400">
                              {file.appProperties.category}
                            </span>
                          )}
                          {modDate && <span>{modDate}</span>}
                          {file.shared && (
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                              · Link attivo
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => onImportDriveFile(file)}
                          disabled={driveLoading}
                          className="min-h-[34px] px-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-semibold inline-flex items-center gap-1 hover:opacity-90 disabled:opacity-50 transition"
                          title="Importa questo file Showdown da Drive nell'app"
                        >
                          <Download className="w-3 h-3" />
                          <span>Carica</span>
                        </button>
                        {file.webViewLink && (
                          <a
                            href={file.webViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[34px] min-h-[34px] rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition"
                            title="Apri file Showdown su Google Drive"
                            aria-label={`Apri ${file.name} su Google Drive`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => onRequestDeleteDriveFile(file)}
                          disabled={driveLoading}
                          className="min-w-[34px] min-h-[34px] rounded-lg text-red-600 dark:text-red-400 hover:bg-red-500/10 flex items-center justify-center transition"
                          title="Elimina file da Google Drive"
                          aria-label={`Elimina ${file.name} da Google Drive`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
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
                        <span>{t.mode}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{memberCount}/6</span>
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
                      onClick={() => onSaveTeamToDrive(t.id)}
                      disabled={driveLoading}
                      className="min-h-[40px] px-2.5 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 inline-flex items-center gap-1.5 transition"
                      title="Salva file Showdown (.txt) su Google Drive"
                    >
                      <CloudUpload className="w-3.5 h-3.5" />
                      <span>Salva Drive</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onShareTeam(t.id)}
                      className="min-h-[40px] px-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800 inline-flex items-center gap-1.5 transition"
                      title="Condividi file Showdown tramite Google Drive"
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
        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <Sparkles className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span>Template Pronti Blaze Black 2 Redux</span>
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
