'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Stamp } from '@/shared/ui';
import { BAROMETRO_CONFIG, getBarometroStatus, getBarometroColor } from '@/shared/constants/barometro';
import { useBarometroCalculations } from '@/shared/hooks/useBarometroCalculations';

/**
 * Componente de barómetro que muestra el índice de libertad digital
 * Utiliza SVG para renderizar un velocímetro semicircular con animaciones
 */
interface BarometroProps {
  /** Valor del índice de libertad digital (0-100) */
  value?: number;
}

/**
 * Barómetro principal del observatorio
 * @param value - Valor del índice (por defecto desde configuración)
 */
const Barometro: React.FC<BarometroProps> = ({ 
  value = BAROMETRO_CONFIG.DEFAULT_VALUE 
}) => {
  const [currentDate, setCurrentDate] = useState('');
  const { needleRotation, arcPaths, svgConfig, animationConfig } = useBarometroCalculations(value);

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('es-MX', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  const status = getBarometroStatus(value);
  const statusColor = getBarometroColor(value);

  return (
    <div className="w-full flex flex-col items-center p-6 bg-papel-oscuro border border-papel-border rounded-sm sombra-papel overflow-hidden">
      {/* Speedometer Section */}
      <div className="relative w-full max-w-md aspect-[2/1] overflow-hidden">
        <svg
          viewBox={`0 0 ${svgConfig.VIEW_BOX_WIDTH} ${svgConfig.VIEW_BOX_HEIGHT}`}
          className="w-full h-full"
          style={{ transform: 'translateY(50%)' }}
          role="img"
          aria-label={`Índice de libertad digital: ${value} de 100 puntos. Estado: ${status}`}
        >
          <title>Barómetro de Libertad Digital</title>
          <desc>Un velocímetro que muestra el índice actual de libertad digital en México</desc>

          {/* Color arcs */}
          <path
            d={arcPaths.critical}
            fill="none"
            stroke={BAROMETRO_CONFIG.COLORS.CRITICAL}
            strokeWidth={svgConfig.STROKE_WIDTH}
            strokeLinecap="round"
          />
          <path
            d={arcPaths.warning}
            fill="none"
            stroke={BAROMETRO_CONFIG.COLORS.WARNING}
            strokeWidth={svgConfig.STROKE_WIDTH}
            strokeLinecap="round"
          />
          <path
            d={arcPaths.safe}
            fill="none"
            stroke={BAROMETRO_CONFIG.COLORS.SAFE}
            strokeWidth={svgConfig.STROKE_WIDTH}
            strokeLinecap="round"
          />

          {/* Needle */}
          <motion.line
            x1={svgConfig.CENTER_X}
            y1={svgConfig.CENTER_Y}
            x2={svgConfig.CENTER_X}
            y2={svgConfig.CENTER_Y - svgConfig.RADIUS + svgConfig.NEEDLE_LENGTH_OFFSET}
            stroke={BAROMETRO_CONFIG.COLORS.NEEDLE}
            strokeWidth={svgConfig.NEEDLE_STROKE_WIDTH}
            strokeLinecap="round"
            initial={{ rotate: animationConfig.START_ANGLE }}
            animate={{ rotate: needleRotation }}
            transition={{ 
              duration: animationConfig.DURATION, 
              type: "spring", 
              damping: animationConfig.DAMPING, 
              stiffness: animationConfig.STIFFNESS 
            }}
            style={{ transformOrigin: `${svgConfig.CENTER_X}px ${svgConfig.CENTER_Y}px` }}
          />

          {/* Center circle for needle pivot */}
          <circle 
            cx={svgConfig.CENTER_X} 
            cy={svgConfig.CENTER_Y} 
            r={svgConfig.CENTER_CIRCLE_RADIUS} 
            fill={BAROMETRO_CONFIG.COLORS.CENTER_CIRCLE} 
          />
        </svg>

        {/* Value display */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-6xl md:text-7xl font-bold typewriter text-tinta-oficial">
            {value}/100
          </p>
        </div>
      </div>

      {/* Text below speedometer */}
      <div className="text-center mt-4">
        <p className="text-xl md:text-2xl typewriter-bold text-tinta-oficial">ÍNDICE DE LIBERTAD DIGITAL</p>
        <p className="text-sm text-tinta-clara mt-1">Actualizado: {currentDate}</p>
        {/* "Ver metodología" link */}
        <Link href="/metodologia" className="text-blue-600 hover:underline text-sm mt-2 block">
          Ver metodología
        </Link>
      </div>

      {/* Small indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-4 border-t border-papel-border pt-3">
        <div className="text-center">
          <p className="text-base md:text-lg typewriter-bold">Tendencia</p>
          <p className="text-lg md:text-xl text-red-600" aria-label="Tendencia bajando">↓ Bajando</p>
        </div>
        <div className="text-center">
          <p className="text-base md:text-lg typewriter-bold">Cambio semanal</p>
          <p className="text-lg md:text-xl text-red-600" aria-label="Disminución de 5 puntos">-5 puntos</p>
        </div>
        <div className="text-center">
          <p className="text-base md:text-lg typewriter-bold">Estado</p>
          <Stamp 
            className="mt-1 text-white text-sm" 
            style={{ backgroundColor: statusColor }}
          >
            {status}
          </Stamp>
        </div>
      </div>
    </div>
  );
};

export default Barometro;