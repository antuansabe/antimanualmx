/**
 * Constantes de configuración para el componente Barómetro
 * Centraliza todos los valores hardcodeados para facilitar mantenimiento
 */

export const BAROMETRO_CONFIG = {
  /** Valor por defecto del barómetro */
  DEFAULT_VALUE: 45,

  /** Configuración del SVG */
  SVG: {
    VIEW_BOX_WIDTH: 280,
    VIEW_BOX_HEIGHT: 160,
    RADIUS: 110,
    CENTER_X: 140,
    CENTER_Y: 140,
    STROKE_WIDTH: 16,
    NEEDLE_LENGTH_OFFSET: 15,
    NEEDLE_STROKE_WIDTH: 4,
    CENTER_CIRCLE_RADIUS: 12,
    GLOW_RADIUS: 125,
  },

  /** Umbrales de valores para colores */
  THRESHOLDS: {
    CRITICAL_MAX: 33,
    WARNING_MAX: 66,
    SAFE_MAX: 100,
  },

  /** Colores del barómetro optimizados para legibilidad */
  COLORS: {
    CRITICAL: '#d32f2f',
    CRITICAL_GLOW: '#f44336',
    WARNING: '#f57c00',
    WARNING_GLOW: '#ff9800',
    SAFE: '#388e3c',
    SAFE_GLOW: '#4caf50',
    NEEDLE: '#212121',
    NEEDLE_GLOW: '#ff4444',
    CENTER_CIRCLE: '#212121',
    BACKGROUND_TRACK: 'rgba(0,0,0,0.15)',
    GLOW_COLOR: 'rgba(255, 255, 255, 0.3)',
  },

  /** Configuración de la animación */
  ANIMATION: {
    DURATION: 2.2,
    DAMPING: 15,
    STIFFNESS: 80,
    START_ANGLE: -90,
    TOTAL_SWEEP: 180,
    PULSE_DURATION: 1.5,
    GLOW_DURATION: 2,
  },
} as const;

/** Tipos derivados de las constantes */
export type BarometroThreshold = keyof typeof BAROMETRO_CONFIG.THRESHOLDS;
export type BarometroColor = keyof typeof BAROMETRO_CONFIG.COLORS;

/** Función helper para obtener el estado basado en el valor */
export const getBarometroStatus = (value: number) => {
  if (value <= BAROMETRO_CONFIG.THRESHOLDS.CRITICAL_MAX) return 'CRÍTICO';
  if (value <= BAROMETRO_CONFIG.THRESHOLDS.WARNING_MAX) return 'EN RIESGO';
  return 'NORMAL';
};

/** Función helper para obtener el color basado en el valor */
export const getBarometroColor = (value: number) => {
  if (value <= BAROMETRO_CONFIG.THRESHOLDS.CRITICAL_MAX) return BAROMETRO_CONFIG.COLORS.CRITICAL;
  if (value <= BAROMETRO_CONFIG.THRESHOLDS.WARNING_MAX) return BAROMETRO_CONFIG.COLORS.WARNING;
  return BAROMETRO_CONFIG.COLORS.SAFE;
};