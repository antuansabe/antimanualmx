'use client';

import { useState, useEffect } from 'react';
import { ExpedienteCard, Stamp, SelloAccion } from '@/shared/ui';
import { BadgeSystem, badgesIniciales, type Badge } from '@/shared/ui/BadgeSystem';
import { useCourseProgress } from '@/shared/hooks/useLocalStorage';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Generador de avatar pixelado simple
function PixelAvatar({ seed }: { seed: string }) {
  const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const color = colors[hash % colors.length];
  
  const pixels = Array.from({ length: 64 }, (_, i) => {
    const shouldFill = (hash * (i + 1)) % 3 !== 0;
    return shouldFill;
  });

  return (
    <div className="w-32 h-32 md:w-40 md:h-40 grid grid-cols-8 gap-0 bg-gray-100 rounded-lg overflow-hidden">
      {pixels.map((filled, i) => (
        <div
          key={i}
          className={`aspect-square ${filled ? 'bg-current' : 'bg-transparent'}`}
          style={{ color }}
        />
      ))}
    </div>
  );
}

export default function PerfilPage() {
  const { progress: progressNivel1 } = useCourseProgress('nivel-1');
  const [badges, setBadges] = useState<Badge[]>(badgesIniciales);
  const [stats, setStats] = useState({
    modulosCompletados: 0,
    tiempoTotal: 0,
    racha: 0,
    nivel: 1
  });
  
  // ID único del perfil (en producción vendría de auth)
  const [perfilId] = useState(() => {
    if (typeof window === 'undefined') return 'temp-id';
    
    const saved = localStorage.getItem('antimanual-perfil-id');
    if (saved) return saved;
    const newId = Math.random().toString(36).substring(2, 10);
    localStorage.setItem('antimanual-perfil-id', newId);
    return newId;
  });

  useEffect(() => {
    // Actualizar badges basado en progreso
    const updatedBadges = [...badgesIniciales];
    
    // Primera línea - completar primer módulo
    if (progressNivel1.completedModules.length > 0) {
      updatedBadges[0] = { 
        ...updatedBadges[0], 
        desbloqueado: true,
        fechaDesbloqueo: new Date()
      };
    }
    
    // Defensor - completar Nivel 1
    if (progressNivel1.completed) {
      updatedBadges[1] = { 
        ...updatedBadges[1], 
        desbloqueado: true,
        fechaDesbloqueo: new Date()
      };
    }
    
    // Estudioso - más de 180 minutos
    if (progressNivel1.timeSpent >= 180) {
      updatedBadges[2] = { 
        ...updatedBadges[2], 
        desbloqueado: true,
        fechaDesbloqueo: new Date()
      };
    }
    
    // Nocturno - estudiar de noche
    const currentHour = new Date().getHours();
    if (progressNivel1.started && (currentHour >= 22 || currentHour <= 6)) {
      updatedBadges[4] = { 
        ...updatedBadges[4], 
        desbloqueado: true,
        fechaDesbloqueo: new Date()
      };
    }
    
    setBadges(updatedBadges);
    
    // Actualizar estadísticas
    setStats({
      modulosCompletados: progressNivel1.completedModules.length,
      tiempoTotal: Math.round(progressNivel1.timeSpent),
      racha: calculateStreak(),
      nivel: progressNivel1.completed ? 2 : 1
    });
  }, [progressNivel1]);

  // Calcular racha de días consecutivos (mock por ahora)
  const calculateStreak = () => {
    if (typeof window === 'undefined') return 0;
    
    const lastAccess = localStorage.getItem('antimanual-last-access');
    const today = new Date().toDateString();
    
    if (lastAccess === today) {
      return parseInt(localStorage.getItem('antimanual-streak') || '1');
    }
    
    localStorage.setItem('antimanual-last-access', today);
    const streak = lastAccess ? 1 : 0;
    localStorage.setItem('antimanual-streak', streak.toString());
    return streak;
  };

  const compartirPerfil = async () => {
    const url = `${window.location.origin}/academia/perfil/${perfilId}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mi perfil de Activista Digital',
          text: `¡Mira mi progreso en Antimanual! He completado ${stats.modulosCompletados} módulos y desbloqueado ${badges.filter(b => b.desbloqueado).length} insignias.`,
          url
        });
        
        // Desbloquear badge de mentor
        setBadges(prev => prev.map(badge => 
          badge.id === 'mentor' 
            ? { ...badge, desbloqueado: true, fechaDesbloqueo: new Date() }
            : badge
        ));
      } catch (error) {
        console.error('Error compartiendo:', error);
      }
    } else {
      // Copiar al portapapeles
      navigator.clipboard.writeText(url);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-8">
        <Link href="/academia" className="flex items-center gap-4">
          <Stamp>ANTIMANUAL</Stamp>
          <span className="typewriter text-sm text-gray-600">
            / ACADEMIA / MI PERFIL
          </span>
        </Link>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Sección de perfil principal */}
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="flex-shrink-0"
              >
                <PixelAvatar seed={perfilId} />
              </motion.div>

              {/* Info del perfil */}
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl font-bold typewriter mb-2">
                  ACTIVISTA #{perfilId.toUpperCase()}
                </h1>
                <p className="text-xl text-red-700 font-bold mb-4">
                  NIVEL {stats.nivel} - {stats.nivel === 1 ? 'EN FORMACIÓN' : 'DEFENSOR DIGITAL'}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{stats.modulosCompletados}</div>
                    <div className="text-xs text-gray-600">Módulos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{stats.tiempoTotal}</div>
                    <div className="text-xs text-gray-600">Minutos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{badges.filter(b => b.desbloqueado).length}</div>
                    <div className="text-xs text-gray-600">Insignias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">{stats.racha}</div>
                    <div className="text-xs text-gray-600">Días racha</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <SelloAccion onClick={compartirPerfil}>
                    📤 COMPARTIR PERFIL
                  </SelloAccion>
                  <Link href="/academia/nivel-1">
                    <SelloAccion variant="secondary">
                      📚 CONTINUAR APRENDIENDO
                    </SelloAccion>
                  </Link>
                </div>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Sección de badges */}
        <section className="mb-12">
          <ExpedienteCard>
            <h2 className="text-2xl font-bold typewriter mb-6">
              🏆 INSIGNIAS DESBLOQUEADAS
            </h2>
            
            <BadgeSystem badges={badges} />
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                {badges.filter(b => b.desbloqueado).length} de {badges.length} insignias obtenidas
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div 
                  className="bg-red-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${(badges.filter(b => b.desbloqueado).length / badges.length) * 100}%` 
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Sección de progreso detallado */}
        <section className="mb-12">
          <ExpedienteCard>
            <h2 className="text-2xl font-bold typewriter mb-6">
              📊 PROGRESO DETALLADO
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Nivel 1: Activista Digital Básico</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-grow">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <motion.div 
                        className="bg-green-600 h-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressNivel1.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium">{Math.round(progressNivel1.progress)}%</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {progressNivel1.completedModules.length} de 4 módulos completados
                </p>
              </div>

              {/* Placeholder para niveles futuros */}
              <div className="opacity-50">
                <h3 className="font-bold mb-2">Nivel 2: Defensor Comunitario</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-grow">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gray-400 h-4 rounded-full w-0" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">Bloqueado</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Completa el Nivel 1 para desbloquear
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <ExpedienteCard>
            <p className="text-lg mb-4">
              🎯 Próximo objetivo: {progressNivel1.completed 
                ? 'Comenzar el Nivel 2 (próximamente)'
                : 'Completar todos los módulos del Nivel 1'
              }
            </p>
            <div className="margin-note">
              &ldquo;El conocimiento compartido es poder multiplicado&rdquo;
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}