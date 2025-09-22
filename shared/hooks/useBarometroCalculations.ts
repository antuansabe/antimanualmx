import { useMemo, useCallback } from 'react';
import { BAROMETRO_CONFIG } from '@/shared/constants/barometro';

/**
 * Hook personalizado para cálculos del barómetro
 * Centraliza la lógica de SVG y cálculos matemáticos
 */
export const useBarometroCalculations = (value: number) => {
  const { SVG, ANIMATION } = BAROMETRO_CONFIG;

  /**
   * Calcula la rotación de la aguja basada en el valor
   */
  const needleRotation = useMemo(() => {
    return ANIMATION.START_ANGLE + (value * (ANIMATION.TOTAL_SWEEP / 100));
  }, [value]);

  /**
   * Calcula las rutas SVG para los arcos de color
   */
  const arcPaths = useMemo(() => {
    const getArcPath = (startAngle: number, endAngle: number) => {
      const startRad = (startAngle - 90) * Math.PI / 180;
      const endRad = (endAngle - 90) * Math.PI / 180;

      const x1 = SVG.CENTER_X + SVG.RADIUS * Math.cos(startRad);
      const y1 = SVG.CENTER_Y + SVG.RADIUS * Math.sin(startRad);
      const x2 = SVG.CENTER_X + SVG.RADIUS * Math.cos(endRad);
      const y2 = SVG.CENTER_Y + SVG.RADIUS * Math.sin(endRad);

      const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

      return `M ${x1} ${y1} A ${SVG.RADIUS} ${SVG.RADIUS} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
    };

    // Convertir umbrales a ángulos
    const criticalAngle = (BAROMETRO_CONFIG.THRESHOLDS.CRITICAL_MAX * ANIMATION.TOTAL_SWEEP) / 100;
    const warningAngle = (BAROMETRO_CONFIG.THRESHOLDS.WARNING_MAX * ANIMATION.TOTAL_SWEEP) / 100;

    return {
      critical: getArcPath(ANIMATION.START_ANGLE, ANIMATION.START_ANGLE + criticalAngle),
      warning: getArcPath(ANIMATION.START_ANGLE + criticalAngle, ANIMATION.START_ANGLE + warningAngle),
      safe: getArcPath(ANIMATION.START_ANGLE + warningAngle, ANIMATION.START_ANGLE + ANIMATION.TOTAL_SWEEP),
    };
  }, []);

  /**
   * Función para generar rutas de arco SVG
   */
  const getArcPath = useCallback((startAngle: number, endAngle: number, r: number, cx: number, cy: number): string => {
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  }, []);

  return {
    needleRotation,
    arcPaths,
    getArcPath,
    svgConfig: SVG,
    animationConfig: ANIMATION,
  };
};