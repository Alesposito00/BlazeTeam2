import React from 'react';
import {
  BookOpen,
  Compass,
  Crown,
  FolderKanban,
  Grid3X3,
  Layers,
  Moon,
  Shield,
  ShieldCheck,
  ShieldOff,
  Sun,
  X,
} from 'lucide-react';
import { BB2_POKEMON } from '../data/bb2Pokemon';
import { AppTab, SavedTeam } from '../types/pokemon';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  activeTeam: SavedTeam;
  teamsCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
  spoilerEnabled: boolean;
  onToggleSpoiler: () => void;
  onToggleTeamMode: (mode: 'Standard' | 'Challenge Mode') => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
  activeTeam,
  teamsCount,
  isDark,
  onToggleTheme,
  spoilerEnabled,
  onToggleSpoiler,
  onToggleTeamMode,
}) => {
  const navItems: {
    id: AppTab;
    label: string;
    subtitle: string;
    icon: typeof Layers;
    count?: number;
  }[] = [
    {
      id: 'team',
      label: 'Costruttore Squadra',
      subtitle: `${activeTeam.members.filter(Boolean).length}/6 Pokémon · Mosse, IV, EV e Introforza`,
      icon: Layers,
    },
    {
      id: 'teams',
      label: 'Le Mie Squadre',
      subtitle: 'Archivio Run, Nuzlocke e testo Showdown',
      icon: FolderKanban,
      count: teamsCount,
    },
    {
      id: 'pokedex',
      label: 'Pokédex Redux',
      subtitle: 'Specie, statistiche, abilità e mosse BB2/VW2',
      icon: BookOpen,
      count: BB2_POKEMON.length,
    },
    {
      id: 'analysis',
      label: 'Analisi & Copertura',
      subtitle: 'Sinergia 2+, debolezze, contromosse e stats',
      icon: ShieldCheck,
    },
    {
      id: 'bosses',
      label: 'Boss Unima Redux',
      subtitle: 'Capipalestra, Team Plasma e Lega Pokémon',
      icon: Crown,
    },
    {
      id: 'guide',
      label: 'Guida MT/MN & Run',
      subtitle: 'MT/MN, oggetti, PWT, Lotta Metro e .sav',
      icon: Compass,
    },
    {
      id: 'typechart',
      label: 'Tabella 18 Tipi',
      subtitle: 'Calcolatore efficacia e doppi tipi Redux',
      icon: Grid3X3,
    },
  ];

  const handleNav = (tab: AppTab) => {
    onSelectTab(tab);
    onClose();
  };

  const drawerContent = (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 select-none">
      {/* Classic dataDex Crimson Header Banner */}
      <div className="px-4 py-3 bg-gradient-to-br from-red-600 to-red-700 text-white shrink-0">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600" />
            </span>
            <span className="font-display text-base font-extrabold tracking-tight">
              BlazeDex 2
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden min-w-[38px] min-h-[38px] -mr-1.5 flex items-center justify-center rounded-xl text-white/90 hover:bg-white/15 transition"
            aria-label="Chiudi menu laterale"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] text-red-100 leading-none">Squadra attiva</div>
            <div className="text-xs font-bold truncate mt-0.5">{activeTeam.name}</div>
          </div>
          <span className="text-[10px] font-semibold bg-white/15 px-2 py-0.5 rounded-md text-white shrink-0">
            {activeTeam.mode === 'Challenge Mode' ? 'Challenge' : 'Standard'}
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5" aria-label="Menu dataDex">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className={`w-full min-h-[44px] px-2.5 py-1.5 rounded-xl flex items-center justify-between gap-2.5 text-left transition ${
                active
                  ? 'bg-red-600/10 dark:bg-red-500/15 text-red-700 dark:text-red-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon
                  className={`w-4.5 h-4.5 shrink-0 ${
                    active ? 'text-red-600 dark:text-red-400' : 'text-slate-400 dark:text-slate-500'
                  }`}
                />
                <div className="min-w-0">
                  <div className="text-[13px] font-bold leading-tight truncate">{item.label}</div>
                  <div className="text-[10.5px] text-slate-500 dark:text-slate-400 leading-tight truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>
              {typeof item.count === 'number' && (
                <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Compact Drawer Options Footer */}
      <div className="px-3 py-2.5 border-t border-slate-200 dark:border-slate-800 space-y-1.5 bg-slate-50/70 dark:bg-slate-950/40 shrink-0">
        {/* Compact Theme & Spoiler Shield Row */}
        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={onToggleTheme}
            title={isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
            className="min-h-[36px] px-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition"
          >
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            )}
            <span className="truncate">{isDark ? 'Scuro' : 'Chiaro'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleSpoiler}
            title="Attiva o disattiva protezione anti-spoiler"
            className={`min-h-[36px] px-2.5 rounded-xl border flex items-center justify-center gap-1.5 text-[11px] font-semibold transition ${
              spoilerEnabled
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            {spoilerEnabled ? (
              <Shield className="w-3.5 h-3.5 shrink-0" />
            ) : (
              <ShieldOff className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            )}
            <span className="truncate">{spoilerEnabled ? 'Spoiler ON' : 'Spoiler OFF'}</span>
          </button>
        </div>

        {/* Compact Mode Selector */}
        <div className="grid grid-cols-2 gap-1 p-0.5 rounded-xl bg-slate-200/70 dark:bg-slate-800">
          {(['Standard', 'Challenge Mode'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => onToggleTeamMode(m)}
              className={`min-h-[30px] px-2 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${
                activeTeam.mode === m
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {m === 'Challenge Mode' ? 'Challenge' : 'Standard'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-68 shrink-0 sticky top-0 h-screen">
        {drawerContent}
      </aside>

      {/* Mobile / Tablet Slide-Out Lateral Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        />
        {/* Slide Panel */}
        <div
          className={`relative w-[290px] max-w-[85vw] h-full shadow-2xl transform transition-transform duration-200 ease-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {drawerContent}
        </div>
      </div>
    </>
  );
};
