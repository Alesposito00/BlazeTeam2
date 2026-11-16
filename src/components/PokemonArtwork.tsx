import React, { useEffect, useState } from 'react';
import { TYPE_STYLES } from '../data/typeChart';
import { PokemonType } from '../types/pokemon';

interface PokemonArtworkProps {
  speciesId: number;
  spriteId?: number;
  name: string;
  primaryType: PokemonType;
  shiny?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const loadedCache = new Map<string, string>();
const failedCache = new Set<string>();

export const PokemonArtwork: React.FC<PokemonArtworkProps> = ({
  speciesId,
  spriteId,
  name,
  primaryType,
  shiny = false,
  size = 'md',
}) => {
  const effectiveId = spriteId ?? speciesId;
  const url = shiny
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${effectiveId}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${effectiveId}.png`;

  const [loadedUrl, setLoadedUrl] = useState<string | null>(() => loadedCache.get(url) ?? null);

  useEffect(() => {
    if (loadedCache.has(url)) {
      setLoadedUrl(loadedCache.get(url)!);
      return;
    }
    if (failedCache.has(url)) {
      setLoadedUrl(null);
      return;
    }

    let cancelled = false;
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    img.onload = () => {
      loadedCache.set(url, url);
      if (!cancelled) setLoadedUrl(url);
    };
    img.onerror = () => {
      failedCache.add(url);
      if (!cancelled) setLoadedUrl(null);
    };
    img.src = url;

    return () => {
      cancelled = true;
    };
  }, [url]);

  const typeStyle = TYPE_STYLES[primaryType];
  const dim =
    size === 'sm' ? 'w-12 h-12' : size === 'lg' ? 'w-24 h-24' : 'w-16 h-16';

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br ${typeStyle.softBg} border ${typeStyle.border} shrink-0 overflow-hidden select-none ${dim}`}
    >
      {/* Subtle Pokéball crest fallback (always present underneath for zero-broken-image guarantee) */}
      <svg
        viewBox="0 0 64 64"
        className={`w-3/4 h-3/4 transition-opacity duration-200 ${loadedUrl ? 'opacity-0' : 'opacity-85'}`}
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="26" fill="none" stroke={typeStyle.hex} strokeWidth="3" opacity="0.55" />
        <path
          d="M 8 32 A 24 24 0 0 1 56 32 Z"
          fill={typeStyle.hex}
          opacity="0.28"
        />
        <line x1="6" y1="32" x2="58" y2="32" stroke={typeStyle.hex} strokeWidth="2.5" opacity="0.5" />
        <circle cx="32" cy="32" r="7" fill="white" className="dark:fill-slate-900" stroke={typeStyle.hex} strokeWidth="2.5" />
      </svg>

      {!loadedUrl && (
        <span
          className="absolute bottom-1 right-1.5 font-mono text-[9px] font-bold opacity-75"
          style={{ color: typeStyle.hex }}
        >
          #{String(speciesId).padStart(3, '0')}
        </span>
      )}

      {loadedUrl && (
        <img
          src={loadedUrl}
          alt={name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-contain p-1 drop-shadow-sm transition-opacity duration-200"
        />
      )}
    </div>
  );
};
