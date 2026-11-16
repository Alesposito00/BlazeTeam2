import React from 'react';
import { TYPE_STYLES } from '../data/typeChart';
import { PokemonType } from '../types/pokemon';

interface TypeBadgeProps {
  type: PokemonType;
  size?: 'xs' | 'sm' | 'md';
  compact?: boolean;
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type, size = 'sm', compact = false }) => {
  const style = TYPE_STYLES[type];
  const sizeClasses =
    size === 'xs'
      ? 'px-1.5 py-0.5 text-[10px] leading-none'
      : size === 'md'
        ? 'px-3 py-1 text-xs leading-none'
        : 'px-2 py-0.5 text-[11px] leading-tight';

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md font-semibold tracking-wide whitespace-nowrap shrink-0 ${style.bg} ${style.text} ${sizeClasses}`}
    >
      {compact ? style.short : type}
    </span>
  );
};
