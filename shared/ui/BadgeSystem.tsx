'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/shared/utils/cn';

export interface Badge {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  color: string;
  desbloqueado: boolean;
  fechaDesbloqueo?: Date;
  requisitos: string;
}

interface BadgeSystemProps {
  badges: Badge[];
  className?: string;
}

export function BadgeSystem({ badges, className }: BadgeSystemProps) {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={badge.desbloqueado ? { scale: 1.1 } : {}}
            whileTap={badge.desbloqueado ? { scale: 0.95 } : {}}
            onClick={() => badge.desbloqueado && setSelectedBadge(badge)}
            className={cn(
              "relative cursor-pointer group",
              !badge.desbloqueado && "cursor-not-allowed"
            )}
          >
            <div className={cn(
              "aspect-square rounded-full p-4 flex items-center justify-center text-4xl md:text-5xl transition-all duration-300",
              badge.desbloqueado 
                ? `bg-gradient-to-br ${badge.color} shadow-lg` 
                : "bg-gray-200 grayscale opacity-50"
            )}>
              {badge.icono}
            </div>
            
            {badge.desbloqueado && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
            
            <p className={cn(
              "text-center mt-2 text-sm font-medium",
              badge.desbloqueado ? "text-gray-800" : "text-gray-400"
            )}>
              {badge.nombre}
            </p>

            {/* Tooltip en hover */}
            {badge.desbloqueado && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                            pointer-events-none z-10">
                <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                  {badge.descripcion}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal de detalle del badge */}
      {selectedBadge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedBadge(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-papel-base rounded-lg p-6 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className={cn(
                "w-32 h-32 rounded-full p-8 flex items-center justify-center text-6xl mx-auto mb-4",
                `bg-gradient-to-br ${selectedBadge.color} shadow-lg`
              )}>
                {selectedBadge.icono}
              </div>
              
              <h3 className="text-2xl font-bold typewriter mb-2">
                {selectedBadge.nombre}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {selectedBadge.descripcion}
              </p>
              
              <div className="bg-papel-resaltado rounded-lg p-4 mb-4">
                <p className="text-sm font-medium mb-1">Requisitos:</p>
                <p className="text-sm text-gray-600">{selectedBadge.requisitos}</p>
              </div>
              
              {selectedBadge.fechaDesbloqueo && (
                <p className="text-sm text-gray-500">
                  Desbloqueado el {selectedBadge.fechaDesbloqueo.toLocaleDateString('es-MX')}
                </p>
              )}
              
              <button
                onClick={() => setSelectedBadge(null)}
                className="mt-6 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors"
              >
                CERRAR
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

// Badges predefinidos para el sistema
export const badgesIniciales: Badge[] = [
  {
    id: 'primera-linea',
    nombre: 'Primera Línea',
    descripcion: 'Completaste tu primer módulo de formación',
    icono: '🛡️',
    color: 'from-blue-400 to-blue-600',
    desbloqueado: false,
    requisitos: 'Completar cualquier módulo del Nivel 1'
  },
  {
    id: 'defensor',
    nombre: 'Defensor Digital',
    descripcion: 'Completaste el Nivel 1 completo',
    icono: '⚔️',
    color: 'from-red-400 to-red-600',
    desbloqueado: false,
    requisitos: 'Completar todos los módulos del Nivel 1'
  },
  {
    id: 'estudioso',
    nombre: 'Estudioso',
    descripcion: 'Dedicaste más de 3 horas al aprendizaje',
    icono: '📚',
    color: 'from-purple-400 to-purple-600',
    desbloqueado: false,
    requisitos: 'Acumular 180 minutos de estudio'
  },
  {
    id: 'perfeccionista',
    nombre: 'Perfeccionista',
    descripcion: 'Respondiste correctamente todos los quizzes',
    icono: '💯',
    color: 'from-green-400 to-green-600',
    desbloqueado: false,
    requisitos: '100% de respuestas correctas en quizzes'
  },
  {
    id: 'nocturno',
    nombre: 'Activista Nocturno',
    descripcion: 'Estudiaste después de las 10 PM',
    icono: '🌙',
    color: 'from-indigo-400 to-indigo-600',
    desbloqueado: false,
    requisitos: 'Completar un módulo entre 10 PM y 6 AM'
  },
  {
    id: 'mentor',
    nombre: 'Mentor',
    descripcion: 'Compartiste tu progreso con otros',
    icono: '🤝',
    color: 'from-yellow-400 to-yellow-600',
    desbloqueado: false,
    requisitos: 'Compartir certificado'
  },
  {
    id: 'explorador',
    nombre: 'Explorador',
    descripcion: 'Visitaste todas las secciones de la plataforma',
    icono: '🧭',
    color: 'from-teal-400 to-teal-600',
    desbloqueado: false,
    requisitos: 'Visitar Herramientas, Red y Academia'
  },
  {
    id: 'resiliente',
    nombre: 'Resiliente',
    descripcion: 'Continuaste después de fallar un quiz',
    icono: '💪',
    color: 'from-orange-400 to-orange-600',
    desbloqueado: false,
    requisitos: 'Reintentar y aprobar un quiz'
  }
];