import React, { useMemo, useState } from 'react';
import { Check, Copy, Download, FileCode2, Share2, X } from 'lucide-react';
import { SavedTeam } from '../types/pokemon';
import { buildShowdownFileName, exportTeamToShowdown } from '../utils/showdown';

interface ShareShowdownModalProps {
  team: SavedTeam;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ShareShowdownModal: React.FC<ShareShowdownModalProps> = ({
  team,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);

  const showdownText = useMemo(() => exportTeamToShowdown(team), [team]);
  const hasMembers = showdownText.trim().length > 0;
  const fileName = useMemo(() => buildShowdownFileName(team.name), [team.name]);
  const canNativeShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  const handleCopy = async () => {
    if (!hasMembers) return;
    try {
      await navigator.clipboard.writeText(showdownText);
      setCopied(true);
      onShowToast('Testo Pokémon Showdown copiato negli appunti!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onShowToast('Impossibile accedere agli appunti: copia manualmente il testo.');
    }
  };

  const handleNativeShare = async () => {
    if (!hasMembers || !canNativeShare) return;
    try {
      await navigator.share({
        title: `BlazeDex 2 — ${team.name}`,
        text: showdownText,
      });
    } catch {
      // User cancelled share sheet or platform blocked share; ignore silently
    }
  };

  const handleDownloadTxt = () => {
    if (!hasMembers) return;
    try {
      const blob = new Blob([showdownText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      onShowToast(`Scaricato ${fileName}`);
    } catch {
      onShowToast('Errore durante il download del file .txt');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto sm:hidden" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                Condividi Squadra (Testo Showdown)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                {team.name} · {team.category} · {team.mode}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <FileCode2 className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              Anteprima Testo Pokémon Showdown
            </span>
            <span className="font-mono text-slate-400">
              {team.members.filter(Boolean).length}/6
            </span>
          </div>
          <textarea
            readOnly
            rows={10}
            value={
              hasMembers
                ? showdownText
                : 'Squadra vuota: aggiungi almeno un Pokémon per esportare o condividere il testo Showdown.'
            }
            className="w-full p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 resize-none focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className={`grid gap-2 ${canNativeShare ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            <button
              type="button"
              disabled={!hasMembers}
              onClick={() => void handleCopy()}
              className="min-h-[44px] px-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copiato negli appunti!' : 'Copia Testo Showdown'}</span>
            </button>

            {canNativeShare && (
              <button
                type="button"
                disabled={!hasMembers}
                onClick={() => void handleNativeShare()}
                className="min-h-[44px] px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 disabled:opacity-40 text-xs font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
              >
                <Share2 className="w-4 h-4" />
                <span>Invia con App</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              disabled={!hasMembers}
              onClick={handleDownloadTxt}
              className="min-h-[42px] px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 text-slate-800 dark:text-slate-100 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Scarica .txt</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[42px] px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
