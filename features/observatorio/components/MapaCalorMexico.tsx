'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EstadoData {
  estado: string;
  codigo: string;
  usuarios: number;
  alertas: number;
  actividad: number;
}

interface MapaCalorMexicoProps {
  datos: EstadoData[];
  titulo: string;
}

export function MapaCalorMexico({ datos, titulo }: MapaCalorMexicoProps) {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState<EstadoData | null>(null);
  
  // Función para obtener el color basado en la actividad
  const obtenerColor = (actividad: number) => {
    if (actividad >= 80) return '#7F1D1D'; // Rojo oscuro
    if (actividad >= 60) return '#B91C1C'; // Rojo
    if (actividad >= 40) return '#DC2626'; // Rojo claro
    if (actividad >= 20) return '#F87171'; // Rosa
    return '#FCA5A5'; // Rosa claro
  };

  // Simulación de mapa con lista interactiva (en producción usaríamos un SVG real)
  const estadosOrdenados = [...datos].sort((a, b) => b.actividad - a.actividad);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-papel-base rounded-lg p-4 md:p-6 shadow-lg border border-papel-border"
    >
      <h3 className="text-lg md:text-xl font-bold typewriter mb-4">{titulo}</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Visualización del mapa (simulada con grid) */}
        <div>
          <div className="bg-papel-resaltado rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600 mb-2">Mapa de Actividad</p>
            <div className="grid grid-cols-4 gap-1">
              {datos.slice(0, 16).map((estado) => (
                <motion.div
                  key={estado.codigo}
                  whileHover={{ scale: 1.1 }}
                  className="aspect-square rounded cursor-pointer relative group"
                  style={{ backgroundColor: obtenerColor(estado.actividad) }}
                  onClick={() => setEstadoSeleccionado(estado)}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold">
                      {estado.codigo.split('-')[1]}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Leyenda */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">Menor actividad</span>
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FCA5A5' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F87171' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#DC2626' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#B91C1C' }}></div>
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#7F1D1D' }}></div>
            </div>
            <span className="text-gray-600">Mayor actividad</span>
          </div>
        </div>

        {/* Lista de estados con mayor actividad */}
        <div>
          <p className="text-sm text-gray-600 mb-3">Estados con Mayor Actividad</p>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {estadosOrdenados.slice(0, 10).map((estado, index) => (
              <motion.div
                key={estado.codigo}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  estadoSeleccionado?.codigo === estado.codigo 
                    ? 'bg-papel-resaltado ring-2 ring-red-500' 
                    : 'bg-papel-resaltado/50 hover:bg-papel-resaltado'
                }`}
                onClick={() => setEstadoSeleccionado(estado)}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: obtenerColor(estado.actividad) }}
                  ></div>
                  <span className="font-medium text-sm">{estado.estado}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{estado.usuarios.toLocaleString('es-MX')}</p>
                  <p className="text-xs text-gray-600">usuarios</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Detalle del estado seleccionado */}
      {estadoSeleccionado && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-papel-resaltado rounded-lg"
        >
          <h4 className="font-bold mb-3">{estadoSeleccionado.estado}</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Usuarios Activos</p>
              <p className="font-bold text-lg">{estadoSeleccionado.usuarios.toLocaleString('es-MX')}</p>
            </div>
            <div>
              <p className="text-gray-600">Alertas Emitidas</p>
              <p className="font-bold text-lg text-red-600">{estadoSeleccionado.alertas}</p>
            </div>
            <div>
              <p className="text-gray-600">Índice de Actividad</p>
              <p className="font-bold text-lg">{estadoSeleccionado.actividad}%</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}