'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ContadorAnimadoProps {
  valor: number;
  etiqueta: string;
  prefijo?: string;
  sufijo?: string;
  tendencia?: string;
  icono?: string;
  colorTendencia?: 'green' | 'red' | 'yellow';
}

export function ContadorAnimado({ 
  valor, 
  etiqueta, 
  prefijo = '', 
  sufijo = '',
  tendencia,
  icono,
  colorTendencia = 'green'
}: ContadorAnimadoProps) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const duracion = 2000; // 2 segundos
    const incremento = valor / (duracion / 16); // 60fps
    let actual = 0;

    const interval = setInterval(() => {
      actual += incremento;
      if (actual >= valor) {
        setContador(valor);
        clearInterval(interval);
      } else {
        setContador(Math.floor(actual));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [valor]);

  const colorClasses = {
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
    yellow: 'text-yellow-600 bg-yellow-100'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-papel-base rounded-lg p-4 md:p-6 shadow-lg border border-papel-border"
    >
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <p className="text-sm text-gray-600 mb-2">{etiqueta}</p>
          <div className="flex items-baseline gap-2">
            {icono && <span className="text-2xl">{icono}</span>}
            <h3 className="text-2xl md:text-3xl font-bold typewriter text-tinta-oficial">
              {prefijo}{contador.toLocaleString('es-MX')}{sufijo}
            </h3>
          </div>
        </div>
        
        {tendencia && (
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses[colorTendencia]}`}>
            {tendencia}
          </div>
        )}
      </div>
    </motion.div>
  );
}