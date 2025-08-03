'use client';

import { useState, useEffect } from 'react';
import { ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';
import { ContadorAnimado } from '@/features/observatorio/components/ContadorAnimado';
import { GraficaLineal } from '@/features/observatorio/components/GraficaLineal';
import { GraficaDonut } from '@/features/observatorio/components/GraficaDonut';
import { MapaCalorMexico } from '@/features/observatorio/components/MapaCalorMexico';
import { FeedActividad } from '@/features/observatorio/components/FeedActividad';
import type { MetricasResumen, TendenciasData, EstadoData } from '@/features/observatorio/types';

export default function ObservatorioPage() {
  const [metricas, setMetricas] = useState<MetricasResumen | null>(null);
  const [tendencias, setTendencias] = useState<TendenciasData | null>(null);
  const [porEstado, setPorEstado] = useState<EstadoData[]>([]);
  const [cargando, setCargando] = useState(true);
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    // Cargar datos de las APIs
    Promise.all([
      fetch('/api/metricas/resumen').then(res => res.json()),
      fetch('/api/metricas/tendencias').then(res => res.json()),
      fetch('/api/metricas/por-estado').then(res => res.json())
    ])
    .then(([resumen, trends, estados]) => {
      setMetricas(resumen);
      setTendencias(trends);
      setPorEstado(estados);
      setCargando(false);
    })
    .catch(error => {
      console.error('Error cargando métricas:', error);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando métricas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${modoOscuro ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-4 md:p-8">
        {/* Header */}
        <header className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <Stamp>ANTIMANUAL</Stamp>
              <span className="typewriter text-sm text-gray-600">
                / OBSERVATORIO DE LIBERTADES DIGITALES
              </span>
            </Link>
            
            <button
              onClick={() => setModoOscuro(!modoOscuro)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto">
          {/* Título y descripción */}
          <section className="mb-8">
            <ExpedienteCard variant="default">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold typewriter mb-4">
                  OBSERVATORIO CIUDADANO
                </h1>
                <p className="text-xl text-red-700 font-bold mb-4">
                  TRANSPARENCIA RADICAL EN TIEMPO REAL
                </p>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Métricas públicas y actualizadas sobre el estado de los derechos digitales en México. 
                  Cada número representa una persona protegida, una amenaza evitada, una victoria colectiva.
                </p>
              </div>
            </ExpedienteCard>
          </section>

          {/* Contadores principales */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <ContadorAnimado
              valor={metricas?.totalUsuarios || 0}
              etiqueta="Activistas Protegidos"
              icono="🛡️"
              tendencia={metricas?.tendencia.usuarios}
              colorTendencia="green"
            />
            <ContadorAnimado
              valor={metricas?.herramientasUsadas || 0}
              etiqueta="Herramientas Utilizadas"
              icono="🔧"
              tendencia={metricas?.tendencia.herramientas}
              colorTendencia="green"
            />
            <ContadorAnimado
              valor={metricas?.cursosCompletados || 0}
              etiqueta="Cursos Completados"
              icono="🎓"
              tendencia={metricas?.tendencia.cursos}
              colorTendencia="green"
            />
            <ContadorAnimado
              valor={metricas?.alertasEmitidas || 0}
              etiqueta="Alertas Emitidas"
              icono="⚠️"
              sufijo=""
              colorTendencia="yellow"
            />
          </section>

          {/* Gráficas y visualizaciones */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Tendencias semanales */}
            {tendencias && (
              <GraficaLineal
                datos={tendencias.semanal}
                titulo="Crecimiento Semanal"
                lineas={[
                  { key: 'usuarios', nombre: 'Usuarios', color: '#DC2626' },
                  { key: 'herramientas', nombre: 'Herramientas', color: '#3B82F6' }
                ]}
              />
            )}

            {/* Tipos de amenazas */}
            {tendencias && (
              <GraficaDonut
                datos={tendencias.amenazas.map((a) => ({
                  nombre: a.tipo,
                  valor: a.cantidad,
                  porcentaje: a.porcentaje
                }))}
                titulo="Tipos de Amenazas Detectadas"
              />
            )}
          </section>

          {/* Mapa de calor y feed de actividad */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Mapa de calor por estado */}
            {porEstado.length > 0 && (
              <MapaCalorMexico
                datos={porEstado}
                titulo="Actividad por Estado"
              />
            )}

            {/* Feed de actividad en tiempo real */}
            <FeedActividad />
          </section>

          {/* Herramientas más usadas */}
          {tendencias && (
            <section className="mb-8">
              <ExpedienteCard>
                <h3 className="text-xl font-bold typewriter mb-6">
                  🛠️ HERRAMIENTAS MÁS UTILIZADAS
                </h3>
                <div className="space-y-3">
                  {tendencias.herramientas.map((herramienta, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{herramienta.nombre}</span>
                          <span className="text-sm text-gray-600">
                            {herramienta.usos.toLocaleString('es-MX')} usos
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-red-600 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${herramienta.porcentaje}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-gray-700 w-12 text-right">
                        {herramienta.porcentaje}%
                      </span>
                    </div>
                  ))}
                </div>
              </ExpedienteCard>
            </section>
          )}

          {/* Footer con última actualización */}
          <section className="text-center">
            <ExpedienteCard>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                  <p>
                    Última actualización: {new Date(metricas?.ultimaActualizacion || Date.now()).toLocaleString('es-MX')}
                  </p>
                  <p className="margin-note mt-2">
                    &ldquo;La transparencia es nuestra mejor defensa&rdquo;
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <Link href="/api/metricas/resumen" target="_blank">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm hover:bg-gray-300 transition-colors">
                      📊 API Pública
                    </button>
                  </Link>
                  <button 
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-red-700 text-white rounded-lg text-sm hover:bg-red-800 transition-colors"
                  >
                    🔄 Actualizar
                  </button>
                </div>
              </div>
            </ExpedienteCard>
          </section>
        </main>
      </div>
    </div>
  );
}