/**
 * Playful Harmony Design Tokens
 * Spacing, shadows, radii, transitions - todos los tokens de diseño
 */

export const tokens = {
  // Spacing - Escala de 4px base (generosa y respirada)
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },

  // Border radius - Redondeados sutiles
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px
    DEFAULT: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '3rem',    // 48px
    full: '9999px',
    blob: '30% 70% 70% 30% / 60% 40% 60% 40%', // Formas orgánicas
  },

  // Shadows - Sombras sutiles y naturales
  shadows: {
    sm: '0 1px 2px 0 rgba(45, 52, 54, 0.05)',
    DEFAULT: '0 2px 8px 0 rgba(45, 52, 54, 0.08)',
    md: '0 4px 12px 0 rgba(45, 52, 54, 0.1)',
    lg: '0 8px 24px 0 rgba(45, 52, 54, 0.12)',
    xl: '0 16px 48px 0 rgba(45, 52, 54, 0.15)',
    '2xl': '0 24px 64px 0 rgba(45, 52, 54, 0.18)',
    inner: 'inset 0 2px 4px 0 rgba(45, 52, 54, 0.06)',
    none: 'none',

    // Sombras de color para elementos destacados
    sakura: '0 4px 16px 0 rgba(255, 122, 157, 0.25)',
    matcha: '0 4px 16px 0 rgba(111, 189, 140, 0.25)',
    ocean: '0 4px 16px 0 rgba(82, 177, 255, 0.25)',
    lavender: '0 4px 16px 0 rgba(155, 117, 255, 0.25)',
  },

  // Transitions - Animaciones suaves y naturales
  transitions: {
    // Duraciones
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms',
    },

    // Easing functions - Inspiradas en movimiento natural
    easing: {
      // Ease out - Deceleración suave (más común)
      smooth: 'cubic-bezier(0.33, 1, 0.68, 1)',

      // Ease in-out - Aceleración y deceleración
      gentle: 'cubic-bezier(0.65, 0, 0.35, 1)',

      // Spring - Efecto rebote sutil
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

      // Linear
      linear: 'linear',
    },

    // Combinaciones pre-definidas
    presets: {
      fade: 'opacity 250ms cubic-bezier(0.33, 1, 0.68, 1)',
      scale: 'transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      slide: 'transform 350ms cubic-bezier(0.65, 0, 0.35, 1)',
      all: 'all 250ms cubic-bezier(0.33, 1, 0.68, 1)',
    },
  },

  // Z-index - Capas de elevación
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },

  // Blur - Para glass morphism
  blur: {
    none: '0',
    sm: '4px',
    DEFAULT: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
  },

  // Opacity
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1',
  },

  // Breakpoints - Mobile first
  breakpoints: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type DesignTokens = typeof tokens;
