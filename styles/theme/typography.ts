/**
 * Playful Harmony Typography System
 * Tipografía japonesa moderna: legible, amigable, juguetona
 */

export const typography = {
  // Font families
  fonts: {
    // Display - M PLUS Rounded 1c (redondeada, juguetona)
    display: '"M PLUS Rounded 1c", "Noto Sans JP", system-ui, sans-serif',

    // Body - Noto Sans JP (legible, profesional)
    body: '"Noto Sans JP", system-ui, -apple-system, sans-serif',

    // Mono - Para código y datos técnicos
    mono: '"JetBrains Mono", "Roboto Mono", monospace',
  },

  // Font sizes - Escala armoniosa (1.25 ratio)
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  // Font weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line heights - Espaciado respirado
  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 1.75,
    spacious: 2,
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export type Typography = typeof typography;
