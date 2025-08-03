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

  const currentDate = new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  if (cargando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-papel-base">
        <ExpedienteCard variant="classified" className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sello-rojo mx-auto mb-4"></div>
          <p className="typewriter-bold text-sello-rojo">CARGANDO DATOS CLASIFICADOS...</p>
          <p className="texto-pequeno mt-2">Sistema de monitoreo en tiempo real</p>
        </ExpedienteCard>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${modoOscuro ? 'dark bg-gray-900' : 'bg-papel-base'}`}>
      <div className="px-4 py-8 md:px-8 md:py-12">
        {/* Encabezado de la sala de situación */}
        <header className="max-w-7xl mx-auto mb-8">
          <ExpedienteCard variant="classified" className="border-l-8 border-sello-rojo" clipped>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="texto-pequeno mb-1 text-sello-rojo">REPÚBLICA DIGITAL DE MÉXICO</p>
                <p className="texto-pequeno text-sello-rojo">CENTRO NACIONAL DE MONITOREO DE LIBERTADES DIGITALES</p>
                <h1 className="text-2xl md:text-3xl font-bold typewriter mt-2">
                  SALA DE SITUACIÓN NACIONAL
                </h1>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="text-center">
                  <Stamp className="text-xs bg-sello-rojo text-white mb-2">TIEMPO REAL</Stamp>
                  <p className="texto-pequeno">Estado: OPERATIVO</p>
                  <p className="texto-pequeno">{currentDate}</p>
                </div>
                <button
                  onClick={() => setModoOscuro(!modoOscuro)}
                  className="px-4 py-2 bg-papel-sombra border border-papel-border rounded text-sm hover:bg-papel-border transition-colors typewriter"
                >
                  {modoOscuro ? '☀️ MODO DIURNO' : '🌙 MODO NOCTURNO'}
                </button>
              </div>
            </div>
          </ExpedienteCard>
        </header>

        <main className="max-w-7xl mx-auto">
          {/* Panel de situación general */}
          <section className="mb-8">
            <ExpedienteCard variant="urgent" className="border-2 border-sello-rojo" clipped>
              <div className="border-b-2 border-sello-rojo pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="texto-pequeno mb-1 text-sello-rojo">OBSERVATORIO CIUDADANO</p>
                    <h2 className="text-3xl md:text-4xl font-bold typewriter text-sello-rojo">
                      MONITOREO NACIONAL EN TIEMPO REAL
                    </h2>
                  </div>
                  <Stamp className="text-xs bg-sello-rojo text-white transform rotate-3">CLASIFICADO</Stamp>
                </div>
              </div>
              
              <div className="space-y-4 texto-oficial leading-relaxed">
                <div className="bg-sello-rojo/10 border-l-4 border-sello-rojo p-4">
                  <p className="typewriter-bold text-sello-rojo mb-2">MISIÓN DEL OBSERVATORIO:</p>
                  <p>
                    Monitoreo continuo del estado de libertades digitales en territorio nacional. 
                    Cada métrica representa vidas protegidas, amenazas neutralizadas y victorias 
                    colectivas en la resistencia digital ciudadana.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <Stamp className="text-xs mb-2">TRANSPARENCIA</Stamp>
                    <p className="texto-pequeno">Datos públicos verificables</p>
                  </div>
                  <div>
                    <Stamp className="text-xs mb-2 bg-verde-aprobado">TIEMPO REAL</Stamp>
                    <p className="texto-pequeno">Actualización automática</p>
                  </div>
                  <div>
                    <Stamp className="text-xs mb-2 bg-azul-info">ABIERTO</Stamp>
                    <p className="texto-pequeno">API pública disponible</p>
                  </div>
                </div>
              </div>
            </ExpedienteCard>
          </section>

          {/* Panel de métricas operativas */}
          <section className="mb-8">
            <div className="text-center mb-6">
              <h3 className="typewriter-bold text-xl mb-2">INDICADORES OPERATIVOS NACIONALES</h3>
              <p className="texto-pequeno">CENTRO NACIONAL DE MONITOREO • TIEMPO REAL</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ExpedienteCard variant="approved" className="text-center">
                <div className="border-b border-verde-aprobado pb-3 mb-3">
                  <Stamp className="text-xs bg-verde-aprobado text-white">PROTEGIDOS</Stamp>
                </div>
                <ContadorAnimado
                  valor={metricas?.totalUsuarios || 0}
                  etiqueta="Activistas en Resguardo"
                  icono="🛡️"
                  tendencia={metricas?.tendencia.usuarios}
                  colorTendencia="green"
                />
              </ExpedienteCard>
              
              <ExpedienteCard variant="default" className="text-center">
                <div className="border-b border-papel-border pb-3 mb-3">
                  <Stamp className="text-xs">DESPLEGADAS</Stamp>
                </div>
                <ContadorAnimado
                  valor={metricas?.herramientasUsadas || 0}
                  etiqueta="Herramientas Activas"
                  icono="🔧"
                  tendencia={metricas?.tendencia.herramientas}
                  colorTendencia="green"
                />
              </ExpedienteCard>
              
              <ExpedienteCard variant="approved" className="text-center">
                <div className="border-b border-verde-aprobado pb-3 mb-3">
                  <Stamp className="text-xs bg-verde-aprobado text-white">FORMACIÓN</Stamp>
                </div>
                <ContadorAnimado
                  valor={metricas?.cursosCompletados || 0}
                  etiqueta="Capacitaciones Finalizadas"
                  icono="🎓"
                  tendencia={metricas?.tendencia.cursos}
                  colorTendencia="green"
                />
              </ExpedienteCard>
              
              <ExpedienteCard variant="urgent" className="text-center">
                <div className="border-b border-sello-rojo pb-3 mb-3">
                  <Stamp className="text-xs bg-sello-rojo text-white">ALERTAS</Stamp>
                </div>
                <ContadorAnimado
                  valor={metricas?.alertasEmitidas || 0}
                  etiqueta="Avisos de Seguridad"
                  icono="⚠️"
                  sufijo=""
                  colorTendencia="yellow"
                />
              </ExpedienteCard>
            </div>
          </section>

          {/* Paneles de análisis técnico */}
          <section className="mb-8">
            <div className="text-center mb-6">
              <h3 className="typewriter-bold text-xl mb-2">ANÁLISIS TÉCNICO Y TENDENCIAS</h3>
              <p className="texto-pequeno">INTELIGENCIA ESTRATÉGICA • MONITOREO CONTINUO</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Panel de tendencias operativas */}
              {tendencias && (
                <ExpedienteCard variant="classified" clipped>
                  <div className="border-b border-papel-border pb-4 mb-4">
                    <div className="flex items-center justify-between">
                      <h4 className="typewriter-bold">EVOLUCIÓN SEMANAL DEL SISTEMA</h4>
                      <Stamp className="text-xs">TENDENCIAS</Stamp>
                    </div>
                  </div>
                  <GraficaLineal
                    datos={tendencias.semanal}
                    titulo="Crecimiento Operativo"
                    lineas={[
                      { key: 'usuarios', nombre: 'Usuarios Activos', color: '#DC2626' },
                      { key: 'herramientas', nombre: 'Herramientas Desplegadas', color: '#3B82F6' }
                    ]}
                  />
                </ExpedienteCard>
              )}

              {/* Panel de análisis de amenazas */}
              {tendencias && (
                <ExpedienteCard variant="urgent" clipped>
                  <div className="border-b border-sello-rojo pb-4 mb-4">
                    <div className="flex items-center justify-between">
                      <h4 className="typewriter-bold text-sello-rojo">VECTORES DE AMENAZA IDENTIFICADOS</h4>
                      <Stamp className="text-xs bg-sello-rojo text-white">CRÍTICO</Stamp>
                    </div>
                  </div>
                  <GraficaDonut
                    datos={tendencias.amenazas.map((a) => ({
                      nombre: a.tipo,
                      valor: a.cantidad,
                      porcentaje: a.porcentaje
                    }))}
                    titulo="Distribución de Amenazas Detectadas"
                  />
                </ExpedienteCard>
              )}
            </div>
          </section>

          {/* Paneles cartográfico y de actividad */}
          <section className="mb-8">
            <div className="text-center mb-6">
              <h3 className="typewriter-bold text-xl mb-2">INTELIGENCIA GEOGRÁFICA Y OPERACIONES</h3>
              <p className="texto-pequeno">MONITOREO TERRITORIAL • ACTIVIDAD EN TIEMPO REAL</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Panel cartográfico nacional */}
              {porEstado.length > 0 && (
                <ExpedienteCard variant="classified" clipped>
                  <div className="border-b border-papel-border pb-4 mb-4">
                    <div className="flex items-center justify-between">
                      <h4 className="typewriter-bold">MAPA DE CALOR NACIONAL</h4>
                      <Stamp className="text-xs">GEOGRÁFICO</Stamp>
                    </div>
                  </div>
                  <MapaCalorMexico
                    datos={porEstado}
                    titulo="Actividad por Entidad Federativa"
                  />
                </ExpedienteCard>
              )}

              {/* Centro de operaciones */}
              <ExpedienteCard variant="urgent" clipped>
                <div className="border-b border-sello-rojo pb-4 mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="typewriter-bold text-sello-rojo">CENTRO DE OPERACIONES</h4>
                    <Stamp className="text-xs bg-sello-rojo text-white">VIVO</Stamp>
                  </div>
                </div>
                <FeedActividad />
              </ExpedienteCard>
            </div>
          </section>

          {/* Panel de recursos desplegados */}
          {tendencias && (
            <section className="mb-8">
              <ExpedienteCard variant="approved" className="max-w-5xl mx-auto" perforated>
                <div className="border-b border-verde-aprobado pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="texto-pequeno mb-1 text-verde-aprobado">ESTADO DE RECURSOS</p>
                      <h3 className="text-xl font-bold typewriter text-verde-aprobado">
                        🛠️ HERRAMIENTAS DIGITALES DESPLEGADAS
                      </h3>
                    </div>
                    <Stamp className="text-xs bg-verde-aprobado text-white">OPERATIVO</Stamp>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-verde-aprobado/10 border-l-4 border-verde-aprobado p-4 mb-4">
                    <p className="typewriter-bold text-verde-aprobado mb-2">ANÁLISIS DE DESPLIEGUE:</p>
                    <p className="texto-oficial">
                      Monitoreo de utilización de herramientas digitales por parte de la ciudadanía. 
                      Datos agregados y anonimizados para proteger la privacidad operativa.
                    </p>
                  </div>
                  
                  {tendencias.herramientas.map((herramienta, index: number) => (
                    <ExpedienteCard key={index} className="bg-papel-sombra">
                      <div className="flex items-center gap-4">
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="typewriter-bold">{herramienta.nombre}</span>
                            <div className="flex items-center gap-2">
                              <span className="texto-pequeno">
                                {herramienta.usos.toLocaleString('es-MX')} implementaciones
                              </span>
                              <Stamp className="text-xs">ACTIVA</Stamp>
                            </div>
                          </div>
                          <div className="w-full bg-papel-border rounded-full h-3">
                            <div
                              className="bg-verde-aprobado h-3 rounded-full transition-all duration-1000"
                              style={{ width: `${herramienta.porcentaje}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-bold typewriter w-12 text-right text-verde-aprobado">
                          {herramienta.porcentaje}%
                        </span>
                      </div>
                    </ExpedienteCard>
                  ))}
                </div>
              </ExpedienteCard>
            </section>
          )}

          {/* Panel de control del sistema */}
          <section className="text-center">
            <ExpedienteCard variant="classified" className="max-w-4xl mx-auto" stamped>
              <div className="border-b border-papel-border pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="texto-pequeno mb-1">PANEL DE CONTROL</p>
                    <h3 className="text-xl font-bold typewriter">
                      ESTADO DEL SISTEMA DE MONITOREO
                    </h3>
                  </div>
                  <Stamp className="text-xs">OFICIAL</Stamp>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-verde-aprobado/10 rounded-full mb-3">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="typewriter-bold mb-2">TRANSPARENCIA TOTAL</h4>
                    <p className="texto-pequeno">
                      Datos públicos verificables con API abierta para consulta ciudadana
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-block p-3 bg-azul-info/10 rounded-full mb-3">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h4 className="typewriter-bold mb-2">ACTUALIZACIÓN CONTINUA</h4>
                    <p className="texto-pequeno">
                      Sistema de monitoreo en tiempo real con actualizaciones automáticas
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-block p-3 bg-sello-rojo/10 rounded-full mb-3">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="typewriter-bold mb-2">PRIVACIDAD GARANTIZADA</h4>
                    <p className="texto-pequeno">
                      Datos agregados y anonimizados para proteger la identidad operativa
                    </p>
                  </div>
                </div>

                <div className="bg-papel-sombra border border-papel-border p-4">
                  <p className="texto-oficial mb-4">
                    <span className="typewriter-bold">ÚLTIMA SINCRONIZACIÓN:</span> {new Date(metricas?.ultimaActualizacion || Date.now()).toLocaleString('es-MX')}
                  </p>
                  <p className="margin-note text-center">
                    &ldquo;La transparencia es nuestra mejor defensa&rdquo;
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/api/metricas/resumen" target="_blank">
                    <button className="px-6 py-3 bg-azul-info text-white rounded typewriter hover:bg-azul-info/80 transition-colors">
                      📊 ACCEDER A API PÚBLICA
                    </button>
                  </Link>
                  <button 
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-sello-rojo text-white rounded typewriter hover:bg-sello-rojo/80 transition-colors"
                  >
                    🔄 SINCRONIZAR DATOS
                  </button>
                </div>

                <div className="pt-4 border-t border-papel-border">
                  <p className="texto-pequeno">
                    SISTEMA OPERATIVO • DATOS ABIERTOS • MONITOREO 24/7 • {currentDate}
                  </p>
                </div>
              </div>
            </ExpedienteCard>
          </section>
        </main>
      </div>
    </div>
  );
}