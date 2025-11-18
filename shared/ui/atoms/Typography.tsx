/**
 * Typography Component - Playful Harmony Design System
 * Sistema tipográfico con jerarquía clara y estilo japonés moderno
 */

import React from 'react';
import { cn } from '@/shared/utils/cn';

type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body' | 'body-lg' | 'body-sm'
  | 'caption' | 'label' | 'overline';

type TypographyWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent' | 'success' | 'warning' | 'error';

interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-5xl md:text-6xl lg:text-7xl font-display leading-tight tracking-tight',
  h2: 'text-4xl md:text-5xl font-display leading-tight tracking-tight',
  h3: 'text-3xl md:text-4xl font-display leading-snug',
  h4: 'text-2xl md:text-3xl font-display leading-snug',
  h5: 'text-xl md:text-2xl font-display leading-normal',
  h6: 'text-lg md:text-xl font-display leading-normal',
  'body': 'text-base font-body leading-relaxed',
  'body-lg': 'text-lg font-body leading-relaxed',
  'body-sm': 'text-sm font-body leading-normal',
  'caption': 'text-xs font-body leading-normal',
  'label': 'text-sm font-body leading-tight font-medium',
  'overline': 'text-xs font-body leading-tight uppercase tracking-widest',
};

const weightStyles: Record<TypographyWeight, string> = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorStyles: Record<TypographyColor, string> = {
  primary: 'text-sumi',
  secondary: 'text-charcoal',
  tertiary: 'text-stone',
  inverse: 'text-white',
  accent: 'text-sakura-500',
  success: 'text-bamboo',
  warning: 'text-gold',
  error: 'text-persimmon',
};

const defaultElements: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'body': 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  'caption': 'span',
  'label': 'label',
  'overline': 'span',
};

export function Typography({
  variant = 'body',
  weight,
  color = 'primary',
  className,
  children,
  as,
}: TypographyProps) {
  const Component = as || defaultElements[variant];

  return (
    <Component
      className={cn(
        variantStyles[variant],
        weight && weightStyles[weight],
        colorStyles[color],
        className
      )}
    >
      {children}
    </Component>
  );
}

// Componentes de ayuda para cada variante
export const H1 = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="h1" {...props} />;

export const H2 = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="h2" {...props} />;

export const H3 = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="h3" {...props} />;

export const H4 = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="h4" {...props} />;

export const H5 = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="h5" {...props} />;

export const H6 = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="h6" {...props} />;

export const Body = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="body" {...props} />;

export const BodyLarge = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="body-lg" {...props} />;

export const BodySmall = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="body-sm" {...props} />;

export const Caption = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="caption" {...props} />;

export const Label = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="label" {...props} />;

export const Overline = (props: Omit<TypographyProps, 'variant'>) =>
  <Typography variant="overline" {...props} />;
