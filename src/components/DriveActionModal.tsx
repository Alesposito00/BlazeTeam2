import React, { useState } from 'react';
import {
  AlertTriangle,
  Check,
  Cloud,
  Copy,
  FileCode2,
  Link2,
  Loader2,
  Share2,
  Trash2,
  X,
} from 'lucide-react';
import { DriveShowdownFile } from '../services/driveTeams';
import { SavedTeam } from '../types/pokemon';
import { buildShowdownFileName, exportTeamToShowdown } from '../utils/showdown';

export type DriveModalState =
  | {
      kind: 'overwrite';
      team: SavedTeam;
      existingFile: DriveShowdownFile;
    }
  | {
      kind: 'batch-save';
      newTeams: SavedTeam[];
      existingPairs: { team: SavedTeam; file: DriveShowdownFile }[];
    }
  | {
      kind: 'delete';
      file: DriveShowdownFile;
    }
  | {
      kind: 'share';
      team: SavedTeam;
      existingFile?: DriveShowdownFile;
      sharedFile?: DriveShowdownFile;
    };

interface DriveActionModalProps {
  modal: DriveModalState;
  busy: boolean;
  error: string | null;
  onClose: () => void;
  onConfirmOverwrite: (team: SavedTeam, existingFileId: string) => void;
  onConfirmCreateNewCopy: (team: SavedTeam) => void;
  onConfirmBatchAll: (
    newTeams: SavedTeam[],
    existingPairs: { team: SavedTeam; file: DriveShowdownFile }[]
  ) => void;
  onConfirmBatchNewOnly: (newTeams: SavedTeam[]) => void;
  onConfirmDelete: (file: DriveShowdownFile) => void;
  onConfirmShareDrive: (team: SavedTeam, existingFileId?: string) => void;
  onCopyShowdownText: (text: string) => void;
}

export const DriveActionModal: React.FC<DriveActionModalProps> = ({
  modal,
  busy,
  error,
  onClose,
  onConfirmOverwrite,
  onConfirmCreateNewCopy,
  onConfirmBatchAll,
  onConfirmBatchNewOnly,
  onConfirmDelete,
  onConfirmShareDrive,
  onCopyShowdownText,
}) => {
  const [copiedLink, setCopiedLink] = useState<'drive' | 'app' | 'text' | null>(null);

  const handleCopyText = async (val: string, tag: 'drive' | 'app' | 'text') => {
    try {
      await navigator.clipboard.writeText(val);
      setCopiedLink(tag);
      setTimeout(() => setCopiedLink((curr) => (curr === tag ? null : curr)), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-sm p-0 sm:p-4"
      onClick={() => {
        if (!busy) onClose();
      }}
    >
      <div
        className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto sm:hidden" />

        {modal.kind === 'overwrite' && (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Aggiornare file su Google Drive?
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Esiste già un file Showdown per questa squadra.
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
              <div className="font-semibold text-slate-900 dark:text-white break-all">
                File esistente: {modal.existingFile.name}
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Confermando, il contenuto Showdown su Google Drive verrà sovrascritto con la versione attuale di «{modal.team.name}».
              </p>
            </div>

            {error && (
              <p className="text-xs font-semibold text-red-600 dark:text-red-400">{error}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                disabled={busy}
                onClick={() => onConfirmOverwrite(modal.team, modal.existingFile.id)}
                className="flex-1 min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Cloud className="w-4 h-4" />}
                <span>Sovrascrivi su Drive</span>
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => onConfirmCreateNewCopy(modal.team)}
                className="min-h-[44px] px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-semibold transition"
              >
                Crea Nuovo File
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-h-[44px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Annulla
              </button>
            </div>
          </>
        )}

        {modal.kind === 'batch-save' && (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Conferma aggiornamento file Showdown su Drive
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {modal.existingPairs.length} file esistenti verranno aggiornati, {modal.newTeams.length} nuovi verranno creati.
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                File Showdown che verranno sovrascritti:
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-400 max-h-32 overflow-y-auto">
                {modal.existingPairs.map(({ file }) => (
                  <li key={file.id} className="break-all">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>

            {error && (
              <p className="text-xs font-semibold text-red-600 dark:text-red-400">{error}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                disabled={busy}
                onClick={() => onConfirmBatchAll(modal.newTeams, modal.existingPairs)}
                className="flex-1 min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Cloud className="w-4 h-4" />}
                <span>Conferma e Aggiorna Tutti</span>
              </button>
              {modal.newTeams.length > 0 && (
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => onConfirmBatchNewOnly(modal.newTeams)}
                  className="min-h-[44px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-semibold transition"
                >
                  Solo Nuovi ({modal.newTeams.length})
                </button>
              )}
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-h-[44px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Annulla
              </button>
            </div>
          </>
        )}

        {modal.kind === 'delete' && (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-500/15 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <Trash2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Eliminare file da Google Drive?
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Questa azione rimuoverà il file dal tuo Google Drive.
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/20 text-xs space-y-1">
              <div className="font-bold text-slate-900 dark:text-white break-all">
                {modal.file.name}
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                La copia locale nell’app (se presente) resterà invariata.
              </p>
            </div>

            {error && (
              <p className="text-xs font-semibold text-red-600 dark:text-red-400">{error}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                disabled={busy}
                onClick={() => onConfirmDelete(modal.file)}
                className="flex-1 min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                <span>Elimina da Google Drive</span>
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-h-[44px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Annulla
              </button>
            </div>
          </>
        )}

        {modal.kind === 'share' && (
          <>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Condividi Squadra (File Showdown)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {modal.team.name} · {buildShowdownFileName(modal.team.name)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled={busy}
                onClick={onClose}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!modal.sharedFile ? (
              <>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {modal.existingFile ? (
                      <>
                        Confermando, il file esistente{' '}
                        <strong className="break-all">{modal.existingFile.name}</strong> verrà
                        aggiornato su Google Drive e reso visibile in{' '}
                        <strong>sola lettura a chiunque abbia il link</strong>.
                      </>
                    ) : (
                      <>
                        Confermando, verrà creato il file{' '}
                        <strong className="break-all">{buildShowdownFileName(modal.team.name)}</strong>{' '}
                        su Google Drive e reso visibile in{' '}
                        <strong>sola lettura a chiunque abbia il link</strong>.
                      </>
                    )}
                  </p>
                  <pre className="p-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-700 dark:text-slate-300 max-h-36 overflow-y-auto whitespace-pre-wrap">
                    {exportTeamToShowdown(modal.team) || 'Squadra vuota'}
                  </pre>
                </div>

                {error && (
                  <p className="text-xs font-semibold text-red-600 dark:text-red-400">{error}</p>
                )}

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    disabled={busy || !exportTeamToShowdown(modal.team).trim()}
                    onClick={() => onConfirmShareDrive(modal.team, modal.existingFile?.id)}
                    className="w-full min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
                  >
                    {busy ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Cloud className="w-4 h-4" />
                    )}
                    <span>Conferma e Genera Link Google Drive (.txt)</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      disabled={busy || !exportTeamToShowdown(modal.team).trim()}
                      onClick={() => {
                        const txt = exportTeamToShowdown(modal.team);
                        onCopyShowdownText(txt);
                        setCopiedLink('text');
                        setTimeout(() => setCopiedLink(null), 2000);
                      }}
                      className="min-h-[42px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition"
                    >
                      {copiedLink === 'text' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <FileCode2 className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedLink === 'text' ? 'Copiato!' : 'Solo Testo Showdown'}</span>
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={onClose}
                      className="min-h-[42px] px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                    >
                      Annulla
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs space-y-2">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>File Showdown condivisibile su Google Drive!</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Chiunque riceva il link può aprire o scaricare direttamente il file{' '}
                    <strong>{modal.sharedFile.name}</strong> da Google Drive, oppure aprirlo in BlazeDex 2.
                  </p>
                </div>

                {modal.sharedFile.webViewLink && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      Link diretto Google Drive (file Showdown .txt)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value={modal.sharedFile.webViewLink}
                        className="flex-1 min-h-[40px] px-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-800 dark:text-slate-200"
                      />
                      <button
                        type="button"
                        onClick={() => handleCopyText(modal.sharedFile!.webViewLink!, 'drive')}
                        className="min-h-[40px] px-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 transition"
                      >
                        {copiedLink === 'drive' ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedLink === 'drive' ? 'Copiato' : 'Copia'}</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-1">
                  {typeof navigator !== 'undefined' &&
                    typeof navigator.share === 'function' &&
                    modal.sharedFile.webViewLink && (
                      <button
                        type="button"
                        onClick={() => {
                          void navigator
                            .share({
                              title: `BlazeDex 2 — ${modal.team.name}`,
                              text: `Squadra Showdown (${modal.team.name}) su Google Drive:`,
                              url: modal.sharedFile!.webViewLink,
                            })
                            .catch(() => {});
                        }}
                        className="flex-1 min-h-[42px] px-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Invia tramite App</span>
                      </button>
                    )}

                  <button
                    type="button"
                    onClick={() => {
                      const appUrl = `${window.location.origin}${window.location.pathname}?driveTeam=${modal.sharedFile!.id}`;
                      void handleCopyText(appUrl, 'app');
                    }}
                    className="min-h-[42px] px-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition"
                  >
                    {copiedLink === 'app' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Link2 className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedLink === 'app' ? 'Link App Copiato' : 'Copia Link BlazeDex'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-[42px] px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
