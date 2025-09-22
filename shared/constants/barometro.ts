/**
 * Constantes de configuración para el componente Barómetro
 * Centraliza todos los valores hardcodeados para facilitar mantenimiento
 */

export const BAROMETRO_CONFIG = {
  /** Valor por defecto del barómetro */
  DEFAULT_VALUE: 45,
  
  /** Configuración del SVG */
  SVG: {
    VIEW_BOX_WIDTH: 200,
    VIEW_BOX_HEIGHT: 100,
    RADIUS: 100,
    CENTER_X: 100,
    CENTER_Y: 100,
    STROKE_WIDTH: 20,
    NEEDLE_LENGTH_OFFSET: 10,
    NEEDLE_STROKE_WIDTH: 3,
    CENTER_CIRCLE_RADIUS: 8,
  },
  
  /** Umbrales de valores para colores */
  THRESHOLDS: {
    CRITICAL_MAX: 33,
    WARNING_MAX: 66,
    SAFE_MAX: 100,
  },
  
  /** Colores del barómetro */
  COLORS: {
    CRITICAL: '#CC0000',
    WARNING: '#E6B800',
    SAFE: '#339933',
    NEEDLE: '#333',
    CENTER_CIRCLE: '#333',
  },
  
  /** Configuración de la animación */
  ANIMATION: {
    DURATION: 1.5,
    DAMPING: 10,
    STIFFNESS: 100,
    START_ANGLE: -90,
    TOTAL_SWEEP: 180,
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