'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Stamp } from '@/shared/ui';
import { BAROMETRO_CONFIG, getBarometroStatus, getBarometroColor } from '@/shared/constants/barometro';
import { useBarometroCalculations } from '@/shared/hooks/useBarometroCalculations';

/**
 * Componente de barómetro que muestra el índice de libertad digital
 * Utiliza SVG para renderizar un velocímetro semicircular con animaciones avanzadas
 */
interface BarometroProps {
  /** Valor del índice de libertad digital (0-100) */
  value?: number;
}

/**
 * Barómetro principal del observatorio con efectos visuales avanzados
 * @param value - Valor del índice (por defecto desde configuración)
 */
const Barometro: React.FC<BarometroProps> = ({
  value = BAROMETRO_CONFIG.DEFAULT_VALUE
}) => {
  const [currentDate, setCurrentDate] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const { needleRotation, arcPaths, svgConfig, animationConfig } = useBarometroCalculations(value);

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));

    // Detener animación después de la duración inicial
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, (animationConfig.DURATION + 1) * 1000);

    return () => clearTimeout(timer);
  }, [animationConfig.DURATION]);

  const status = getBarometroStatus(value);
  const statusColor = getBarometroColor(value);
  const currentSectionColor = getBarometroColor(value);

  // Determinar colores del glow según el valor actual
  const getCurrentGlowColor = () => {
    if (value <= BAROMETRO_CONFIG.THRESHOLDS.CRITICAL_MAX) return BAROMETRO_CONFIG.COLORS.CRITICAL_GLOW;
    if (value <= BAROMETRO_CONFIG.THRESHOLDS.WARNING_MAX) return BAROMETRO_CONFIG.COLORS.WARNING_GLOW;
    return BAROMETRO_CONFIG.COLORS.SAFE_GLOW;
  };

  return (
    <div className="liquid-card w-full">
      <div className="liquid-card-header text-center">
        <motion.h2
          className="text-lg md:text-xl typewriter-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ÍNDICE DE LIBERTAD DIGITAL
        </motion.h2>
        <motion.p
          className="texto-pequeno mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          RADAR NACIONAL DE DERECHOS DIGITALES
        </motion.p>
      </div>

      <div className="liquid-card-content flex flex-col items-center">
        {/* Digital Freedom Radar */}
        <div className="relative w-full max-w-lg mx-auto aspect-square">

          {/* Valor central prominente */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                className="text-6xl md:text-7xl lg:text-8xl font-bold typewriter text-tinta-oficial mb-2"
                animate={{
                  textShadow: isAnimating
                    ? [`0 0 20px ${getCurrentGlowColor()}50`, `0 0 40px ${getCurrentGlowColor()}80`, `0 0 20px ${getCurrentGlowColor()}50`]
                    : `0 0 15px ${getCurrentGlowColor()}40`
                }}
                transition={{
                  duration: 3,
                  repeat: isAnimating ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                {value}
              </motion.div>
              <div className="text-sm md:text-base typewriter text-tinta-clara">
                ÍNDICE NACIONAL
              </div>
            </motion.div>
          </div>

          {/* SVG Radar Circular */}
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full absolute inset-0"
            role="img"
            aria-label={`Índice de libertad digital: ${value} de 100 puntos. Estado: ${status}`}
          >
            <defs>
              {/* Gradientes radiales */}
              <radialGradient id="criticalRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: BAROMETRO_CONFIG.COLORS.CRITICAL, stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: BAROMETRO_CONFIG.COLORS.CRITICAL, stopOpacity: 0.2 }} />
              </radialGradient>
              <radialGradient id="warningRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: BAROMETRO_CONFIG.COLORS.WARNING, stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: BAROMETRO_CONFIG.COLORS.WARNING, stopOpacity: 0.2 }} />
              </radialGradient>
              <radialGradient id="safeRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: BAROMETRO_CONFIG.COLORS.SAFE, stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: BAROMETRO_CONFIG.COLORS.SAFE, stopOpacity: 0.2 }} />
              </radialGradient>
            </defs>

            {/* Círculos concéntricos de fondo */}
            {[100, 80, 60, 40, 20].map((radius, index) => (
              <motion.circle
                key={radius}
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke="rgba(26, 26, 26, 0.1)"
                strokeWidth="1"
                initial={{ r: 0, opacity: 0 }}
                animate={{ r: radius, opacity: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              />
            ))}

            {/* Círculo de estado actual */}
            <motion.circle
              cx="150"
              cy="150"
              r={value}
              fill={
                value <= 33 ? "url(#criticalRadial)" :
                value <= 66 ? "url(#warningRadial)" : "url(#safeRadial)"
              }
              initial={{ r: 0 }}
              animate={{ r: value }}
              transition={{ duration: 2, delay: 1, type: "spring", damping: 15 }}
            />

            {/* Ondas de pulso */}
            {[1, 2, 3].map((wave) => (
              <motion.circle
                key={wave}
                cx="150"
                cy="150"
                r={value}
                fill="none"
                stroke={getCurrentGlowColor()}
                strokeWidth="2"
                strokeOpacity="0.6"
                initial={{ r: value, strokeOpacity: 0.6 }}
                animate={{
                  r: value + 20,
                  strokeOpacity: 0
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: wave * 0.7,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Líneas radiales */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const radian = (angle * Math.PI) / 180;
              const x1 = 150 + 30 * Math.cos(radian);
              const y1 = 150 + 30 * Math.sin(radian);
              const x2 = 150 + 105 * Math.cos(radian);
              const y2 = 150 + 105 * Math.sin(radian);

              return (
                <motion.line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(26, 26, 26, 0.2)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 0.5, delay: 1.5 + (angle * 0.02) }}
                />
              );
            })}

            {/* Etiquetas de valores */}
            <motion.text x="150" y="45" textAnchor="middle" className="text-xs fill-current text-tinta-clara" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2 }}>100</motion.text>
            <motion.text x="150" y="65" textAnchor="middle" className="text-xs fill-current text-tinta-clara" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.1 }}>80</motion.text>
            <motion.text x="150" y="85" textAnchor="middle" className="text-xs fill-current text-tinta-clara" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.2 }}>60</motion.text>
            <motion.text x="150" y="105" textAnchor="middle" className="text-xs fill-current text-tinta-clara" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.3 }}>40</motion.text>
            <motion.text x="150" y="125" textAnchor="middle" className="text-xs fill-current text-tinta-clara" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 2.4 }}>20</motion.text>
          </svg>
        </div>

        {/* Text below speedometer */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <p className="text-xl md:text-2xl typewriter-bold text-tinta-oficial">ÍNDICE DE LIBERTAD DIGITAL</p>
          <p className="text-sm text-tinta-clara mt-1">Actualizado: {currentDate}</p>
          <Link href="/metodologia" className="text-blue-600 hover:underline text-sm mt-2 block transition-colors hover:text-blue-800">
            Ver metodología
          </Link>
        </motion.div>

        {/* Small indicators con animación */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-6 border-t border-papel-border pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <div className="text-center">
            <p className="text-base md:text-lg typewriter-bold">Tendencia</p>
            <motion.p
              className="text-lg md:text-xl text-red-600"
              aria-label="Tendencia bajando"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓ Bajando
            </motion.p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg typewriter-bold">Cambio semanal</p>
            <motion.p
              className="text-lg md:text-xl text-red-600"
              aria-label="Disminución de 5 puntos"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              -5 puntos
            </motion.p>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg typewriter-bold">Estado</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Stamp
                className="mt-1 text-white text-sm"
                style={{ backgroundColor: statusColor }}
              >
                {status}
              </Stamp>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Barometro;