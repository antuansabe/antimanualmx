/**
 * Playful Harmony Design System
 * Sistema de diseño minimalista japonés para Antimanual MX
 *
 * Filosofía:
 * - Minimalismo japonés: espacios respirados, simplicidad elegante
 * - Playful: colores vibrantes pero suaves, micro-animaciones encantadoras
 * - Harmony: balance perfecto entre función y estética
 */

export { colors } from './colors';
export type { ColorPalette } from './colors';

export { typography } from './typography';
export type { Typography } from './typography';

export { tokens } from './tokens';
export type { DesignTokens } from './tokens';

// Theme completo
import { colors } from './colors';
import { typography } from './typography';
import { tokens } from './tokens';

export const theme = {
  colors,
  typography,
  tokens,
} as const;

export type Theme = typeof theme;

// Helper para generar CSS variables
export const generateCSSVariables = () => {
  return {
    // Colores primarios
    '--color-sakura': colors.primary.sakura[300],
    '--color-sakura-light': colors.primary.sakura[100],
    '--color-sakura-dark': colors.primary.sakura[500],

    '--color-matcha': colors.primary.matcha[300],
    '--color-matcha-light': colors.primary.matcha[100],
    '--color-matcha-dark': colors.primary.matcha[500],

    '--color-ocean': colors.primary.ocean[300],
    '--color-ocean-light': colors.primary.ocean[100],
    '--color-ocean-dark': colors.primary.ocean[500],

    '--color-sunset': colors.primary.sunset[300],
    '--color-sunset-light': colors.primary.sunset[100],
    '--color-sunset-dark': colors.primary.sunset[500],

    '--color-lavender': colors.primary.lavender[300],
    '--color-lavender-light': colors.primary.lavender[100],
    '--color-lavender-dark': colors.primary.lavender[500],

    // Neutrales
    '--color-washi': colors.neutral.washi,
    '--color-cloud': colors.neutral.cloud,
    '--color-mist': colors.neutral.mist,
    '--color-stone': colors.neutral.stone,
    '--color-charcoal': colors.neutral.charcoal,
    '--color-sumi': colors.neutral.sumi,
    '--color-ink': colors.neutral.ink,

    // Acentos
    '--color-persimmon': colors.accent.persimmon.DEFAULT,
    '--color-bamboo': colors.accent.bamboo.DEFAULT,
    '--color-indigo': colors.accent.indigo.DEFAULT,
    '--color-gold': colors.accent.gold.DEFAULT,

    // Semánticos
    '--color-success': colors.semantic.success,
    '--color-warning': colors.semantic.warning,
    '--color-error': colors.semantic.error,
    '--color-info': colors.semantic.info,

    // Backgrounds
    '--bg-primary': colors.background.primary,
    '--bg-secondary': colors.background.secondary,
    '--bg-tertiary': colors.background.tertiary,
    '--bg-elevated': colors.background.elevated,

    // Text
    '--text-primary': colors.text.primary,
    '--text-secondary': colors.text.secondary,
    '--text-tertiary': colors.text.tertiary,
    '--text-inverse': colors.text.inverse,
    '--text-accent': colors.text.accent,

    // Borders
    '--border-light': colors.border.light,
    '--border': colors.border.DEFAULT,
    '--border-dark': colors.border.dark,

    // Tipografía
    '--font-display': typography.fonts.display,
    '--font-body': typography.fonts.body,
    '--font-mono': typography.fonts.mono,

    // Transitions
    '--transition-fast': tokens.transitions.duration.fast,
    '--transition-normal': tokens.transitions.duration.normal,
    '--transition-slow': tokens.transitions.duration.slow,
    '--easing-smooth': tokens.transitions.easing.smooth,
    '--easing-gentle': tokens.transitions.easing.gentle,
    '--easing-spring': tokens.transitions.easing.spring,
  };
};
