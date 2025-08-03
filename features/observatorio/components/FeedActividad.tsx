'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Actividad {
  id: string;
  tipo: 'herramienta' | 'curso' | 'alerta' | 'victoria';
  mensaje: string;
  ubicacion: string;
  tiempo: string;
  icono: string;
}

export function FeedActividad() {
  const [actividades, setActividades] = useState<Actividad[]>([]);

  // Actividades de ejemplo
  const actividadesEjemplo: Omit<Actividad, 'id' | 'tiempo'>[] = [
    { tipo: 'herramienta', mensaje: 'Usuario completó Kit de Emergencia', ubicacion: 'CDMX', icono: '🛡️' },
    { tipo: 'curso', mensaje: 'Nuevo activista certificado Nivel 1', ubicacion: 'Jalisco', icono: '🎓' },
    { tipo: 'alerta', mensaje: 'Alerta de phishing reportada', ubicacion: 'Puebla', icono: '⚠️' },
    { tipo: 'victoria', mensaje: 'Caso de censura resuelto exitosamente', ubicacion: 'Oaxaca', icono: '✊' },
    { tipo: 'herramienta', mensaje: 'Comunicación cifrada activada', ubicacion: 'Nuevo León', icono: '🔒' },
    { tipo: 'curso', mensaje: 'Módulo de derechos digitales completado', ubicacion: 'Veracruz', icono: '📚' },
    { tipo: 'herramienta', mensaje: 'Borrado seguro ejecutado', ubicacion: 'Chiapas', icono: '🗑️' },
    { tipo: 'alerta', mensaje: 'Intento de vigilancia detectado', ubicacion: 'Yucatán', icono: '👁️' },
  ];

  // Simular nuevas actividades en tiempo real
  useEffect(() => {
    // Agregar actividades iniciales
    const iniciales = actividadesEjemplo.slice(0, 5).map((act, index) => ({
      ...act,
      id: `inicial-${index}`,
      tiempo: 'hace ' + (index + 1) + ' min'
    }));
    setActividades(iniciales);

    // Agregar nuevas actividades cada 5 segundos
    const interval = setInterval(() => {
      const nuevaActividad = actividadesEjemplo[Math.floor(Math.random() * actividadesEjemplo.length)];
      const actividad: Actividad = {
        ...nuevaActividad,
        id: Date.now().toString(),
        tiempo: 'ahora'
      };

      setActividades(prev => {
        const nuevas = [actividad, ...prev].slice(0, 20); // Mantener máximo 20
        // Actualizar tiempos
        return nuevas.map((act, index) => ({
          ...act,
          tiempo: index === 0 ? 'ahora' : `hace ${index} min`
        }));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const obtenerColorTipo = (tipo: string) => {
    switch (tipo) {
      case 'herramienta': return 'border-blue-500 bg-blue-50';
      case 'curso': return 'border-green-500 bg-green-50';
      case 'alerta': return 'border-red-500 bg-red-50';
      case 'victoria': return 'border-yellow-500 bg-yellow-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-papel-base rounded-lg p-4 md:p-6 shadow-lg border border-papel-border"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-bold typewriter">Actividad en Tiempo Real</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">EN VIVO</span>
        </div>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {actividades.map((actividad) => (
            <motion.div
              key={actividad.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${obtenerColorTipo(actividad.tipo)}`}
            >
              <span className="text-2xl flex-shrink-0">{actividad.icono}</span>
              <div className="flex-grow min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {actividad.mensaje}
                </p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    📍 {actividad.ubicacion}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{actividad.tiempo}</span>
                </div>
              </div>
              {actividad.tiempo === 'ahora' && (
                <span className="flex-shrink-0 px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                  NUEVO
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Datos anonimizados • Sin información personal • Actualización cada 5 segundos
        </p>
      </div>
    </motion.div>
  );
}