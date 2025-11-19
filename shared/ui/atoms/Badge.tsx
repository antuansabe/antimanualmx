/**
 * Badge Component - Playful Harmony Design System
 * Badges y tags con colores vibrantes y bordes redondeados
 */

'use client';

import React from 'react';
import { cn } from '@/shared/utils/cn';

type BadgeVariant = 'solid' | 'soft' | 'outline';
type BadgeColor = 'sakura' | 'matcha' | 'ocean' | 'sunset' | 'lavender' | 'persimmon' | 'bamboo' | 'gold' | 'indigo';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  dot?: boolean;
}

const colorStyles: Record<BadgeColor, Record<BadgeVariant, string>> = {
  sakura: {
    solid: 'bg-sakura-500 text-white',
    soft: 'bg-sakura-100 text-sakura-600',
    outline: 'border-2 border-sakura-300 text-sakura-600',
  },
  matcha: {
    solid: 'bg-matcha-500 text-white',
    soft: 'bg-matcha-100 text-matcha-600',
    outline: 'border-2 border-matcha-300 text-matcha-600',
  },
  ocean: {
    solid: 'bg-ocean-500 text-white',
    soft: 'bg-ocean-100 text-ocean-600',
    outline: 'border-2 border-ocean-300 text-ocean-600',
  },
  sunset: {
    solid: 'bg-sunset-500 text-sumi',
    soft: 'bg-sunset-100 text-sunset-500',
    outline: 'border-2 border-sunset-300 text-sunset-500',
  },
  lavender: {
    solid: 'bg-lavender-500 text-white',
    soft: 'bg-lavender-100 text-lavender-500',
    outline: 'border-2 border-lavender-300 text-lavender-500',
  },
  persimmon: {
    solid: 'bg-persimmon text-white',
    soft: 'bg-persimmon/10 text-persimmon',
    outline: 'border-2 border-persimmon text-persimmon',
  },
  bamboo: {
    solid: 'bg-bamboo text-white',
    soft: 'bg-bamboo/10 text-bamboo',
    outline: 'border-2 border-bamboo text-bamboo',
  },
  gold: {
    solid: 'bg-gold text-sumi',
    soft: 'bg-gold/10 text-gold-dark',
    outline: 'border-2 border-gold text-gold-dark',
  },
  indigo: {
    solid: 'bg-indigo text-white',
    soft: 'bg-indigo/10 text-indigo',
    outline: 'border-2 border-indigo text-indigo',
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs rounded-md gap-1',
  md: 'px-2.5 py-1 text-sm rounded-lg gap-1.5',
  lg: 'px-3 py-1.5 text-base rounded-xl gap-2',
};

export function Badge({
  variant = 'solid',
  color = 'sakura',
  size = 'md',
  className,
  children,
  icon,
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-display font-medium',
        'transition-all duration-fast ease-smooth',
        colorStyles[color][variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'solid' ? 'bg-white' : 'bg-current'
          )}
        />
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
