import React, { useState } from 'react';
import { Download, Smartphone, X, Share, MoreVertical } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-3.5 py-2 min-h-[40px] text-xs font-semibold text-white shadow-sm hover:bg-red-700 active:scale-[0.98] transition whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      >
        <Download className="w-4 h-4 shrink-0" />
        <span>Installa App</span>
      </button>

      {showGuide && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-4 sm:hidden" />
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Installa BlazeDex 2 su Android
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Funziona come app nativa e salva le squadre offline
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isIOS ? (
              <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <p className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">1.</span>
                  <span>
                    Tocca il pulsante <strong className="inline-flex items-center gap-1"><Share className="w-3.5 h-3.5" /> Condividi</strong> nella barra di Safari.
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">2.</span>
                  <span>Scorri verso il basso e seleziona <strong>Aggiungi alla schermata Home</strong>.</span>
                </p>
              </div>
            ) : (
              <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <p className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">1.</span>
                  <span>Apri questa pagina in <strong>Google Chrome</strong> su Android (fuori dall’anteprima embedded).</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">2.</span>
                  <span>
                    Tocca il menu <strong className="inline-flex items-center gap-0.5"><MoreVertical className="w-3.5 h-3.5" /> (3 puntini)</strong> in alto a destra su Chrome.
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <span className="font-mono font-bold text-red-600 dark:text-red-400">3.</span>
                  <span>Seleziona <strong>Installa app</strong> oppure <strong>Aggiungi a schermata Home</strong>.</span>
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="mt-6 w-full min-h-[44px] rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition"
            >
              Ho capito
            </button>
          </div>
        </div>
      )}
    </>
  );
};
