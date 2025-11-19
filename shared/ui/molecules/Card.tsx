/**
 * Card Component - Playful Harmony Design System
 * Cards con glass-morphism sutil y sombras suaves
 */

'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/utils/cn';

type CardVariant = 'elevated' | 'outlined' | 'filled' | 'glass';
type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  clickable?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  elevated: 'bg-white shadow-md hover:shadow-lg',
  outlined: 'bg-white border-2 border-mist hover:border-stone',
  filled: 'bg-cloud border border-transparent',
  glass: 'bg-white/60 backdrop-blur-md border border-white/20 shadow-sm',
};

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

const cardAnimation = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.01, y: -2 },
  tap: { scale: 0.99, y: 0 },
};

export function Card({
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  clickable = false,
  children,
  className,
  ...props
}: CardProps) {
  const isInteractive = hoverable || clickable;

  return (
    <motion.div
      variants={cardAnimation}
      initial="rest"
      whileHover={isInteractive ? "hover" : undefined}
      whileTap={clickable ? "tap" : undefined}
      transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
      className={cn(
        // Base styles
        'rounded-2xl',
        'transition-all duration-normal ease-smooth',
        'flex flex-col', // Añadido para mejor layout

        // Variant styles
        variantStyles[variant],

        // Padding
        paddingStyles[padding],

        // Interactive states
        clickable && 'cursor-pointer',

        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Card sub-components
export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('text-2xl font-display font-bold text-sumi', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-base font-body text-charcoal mt-1', className)}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex-1', className)}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mt-6 flex items-center gap-3', className)}>
      {children}
    </div>
  );
}
