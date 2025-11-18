/**
 * Playful Harmony Color System
 * Paleta minimalista japonesa con toques vibrantes y juguetones
 * Inspirada en naturaleza japonesa: sakura, matcha, océano, bambú
 */

export const colors = {
  // Primarios - Colores base del sistema
  primary: {
    sakura: {
      50: '#FFF5F7',
      100: '#FFE3E9',
      200: '#FFC7D3',
      300: '#FFB5C5',
      400: '#FF9BB4',
      500: '#FF7A9D',
      600: '#E65581',
      700: '#CC3366',
      800: '#991F4D',
      900: '#661433',
    },
    matcha: {
      50: '#F0F9F4',
      100: '#D4EFE0',
      200: '#B8E5CC',
      300: '#A8D5BA',
      400: '#8BC9A3',
      500: '#6FBD8C',
      600: '#51A36E',
      700: '#3D8959',
      800: '#2D6643',
      900: '#1E432C',
    },
    ocean: {
      50: '#F0F8FF',
      100: '#D6ECFF',
      200: '#BDE0FF',
      300: '#A3D5FF',
      400: '#7AC3FF',
      500: '#52B1FF',
      600: '#2E8FE6',
      700: '#1A6DCC',
      800: '#0F4D99',
      900: '#0A3366',
    },
    sunset: {
      50: '#FFF8F0',
      100: '#FFE8D6',
      200: '#FFD8BD',
      300: '#FFB88C',
      400: '#FFA366',
      500: '#FF8F3D',
      600: '#E67028',
      700: '#CC5614',
      800: '#993F0F',
      900: '#66290A',
    },
    lavender: {
      50: '#F7F5FF',
      100: '#E8E0FF',
      200: '#D9CCFF',
      300: '#C5A8FF',
      400: '#B08FFF',
      500: '#9B75FF',
      600: '#7D52E6',
      700: '#5F33CC',
      800: '#472699',
      900: '#2F1966',
    },
  },

  // Neutrales - Inspirados en materiales japoneses
  neutral: {
    washi: '#FFFBF5',      // Papel arroz
    cloud: '#F5F6FA',      // Nube
    mist: '#DFE6E9',       // Niebla
    stone: '#B2BEC3',      // Piedra
    charcoal: '#636E72',   // Carbón
    sumi: '#2D3436',       // Tinta sumi
    ink: '#1A1D1E',        // Tinta negra
  },

  // Acentos - Toques vibrantes
  accent: {
    persimmon: {
      light: '#FFA07A',
      DEFAULT: '#FF6B6B',
      dark: '#E63946',
    },
    bamboo: {
      light: '#8CE99A',
      DEFAULT: '#51CF66',
      dark: '#37B24D',
    },
    indigo: {
      light: '#748FFC',
      DEFAULT: '#5C7CFA',
      dark: '#4C6EF5',
    },
    gold: {
      light: '#FFD43B',
      DEFAULT: '#FAB005',
      dark: '#F08C00',
    },
  },

  // Semánticos - Estados de la UI
  semantic: {
    success: '#51CF66',    // Bamboo
    warning: '#FAB005',    // Gold
    error: '#FF6B6B',      // Persimmon
    info: '#A3D5FF',       // Ocean
  },

  // Backgrounds - Fondos con textura sutil
  background: {
    primary: '#FFFBF5',    // Washi
    secondary: '#F5F6FA',  // Cloud
    tertiary: '#FAFAFA',   // Paper
    elevated: '#FFFFFF',   // White
  },

  // Text - Jerarquía de texto
  text: {
    primary: '#2D3436',    // Sumi
    secondary: '#636E72',  // Charcoal
    tertiary: '#B2BEC3',   // Stone
    inverse: '#FFFFFF',    // White
    accent: '#FF7A9D',     // Sakura
  },

  // Borders - Bordes sutiles
  border: {
    light: '#DFE6E9',      // Mist
    DEFAULT: '#B2BEC3',    // Stone
    dark: '#636E72',       // Charcoal
  },
} as const;

export type ColorPalette = typeof colors;
