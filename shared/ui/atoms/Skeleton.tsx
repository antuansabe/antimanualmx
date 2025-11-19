/**
 * Skeleton Component - Playful Harmony Design System
 * Indicadores de carga con efecto shimmer
 */

'use client';

import React from 'react';
import { cn } from '@/shared/utils/cn';

type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'h-4 rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-none',
  rounded: 'rounded-2xl',
};

export function Skeleton({
  variant = 'text',
  width,
  height,
  className,
  count = 1,
}: SkeletonProps) {
  const widthStyle = width
    ? typeof width === 'number'
      ? `${width}px`
      : width
    : '100%';

  const heightStyle = height
    ? typeof height === 'number'
      ? `${height}px`
      : height
    : undefined;

  const skeletonElement = (
    <div
      className={cn(
        'bg-gradient-to-r from-mist via-cloud to-mist',
        'bg-[length:200%_100%]',
        'animate-shimmer',
        variantStyles[variant],
        className
      )}
      style={{
        width: widthStyle,
        height: heightStyle,
      }}
    />
  );

  if (count === 1) {
    return skeletonElement;
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{skeletonElement}</div>
      ))}
    </div>
  );
}

// Skeleton presets para casos comunes
export function SkeletonCard() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
      <Skeleton variant="circular" width={64} height={64} />
      <Skeleton variant="text" width="60%" height={24} />
      <Skeleton variant="text" count={2} />
      <Skeleton variant="rounded" height={40} className="mt-4" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  );
}
