/**
 * Icon Component - Playful Harmony Design System
 * Wrapper para iconos SVG con tamaños consistentes
 */

import React from 'react';
import { cn } from '@/shared/utils/cn';

type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface IconProps {
  icon: string; // emoji o SVG
  size?: IconSize;
  className?: string;
  animated?: boolean;
}

const sizeStyles: Record<IconSize, string> = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-5xl',
  xl: 'text-6xl',
  '2xl': 'text-8xl',
};

export function Icon({ icon, size = 'md', className, animated = false }: IconProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        sizeStyles[size],
        animated && 'animate-bounce',
        className
      )}
    >
      {icon}
    </div>
  );
}
