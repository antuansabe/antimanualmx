'use client';

import { useState, useMemo } from 'react';
import { Button, PaperContainer, Stamp } from '@/shared/ui';
import Link from 'next/link';
import { alertas } from '@/shared/data/alertas';

const iconosPorCategoria = {
  phishing: '🎣',
  vigilancia: '👁️',
  censura: '🚫',
  violencia: '⚠️',
  legislacion: '⚖️',
  vulnerabilidad: '🔓'
};

const coloresPorSeveridad = {
  baja: 'bg-gray-100 text-gray-800 border-gray-300',
  media: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  alta: 'bg-orange-100 text-orange-800 border-orange-300',
  critica: 'bg-red-100 text-red-800 border-red-300'
};

const tiempoTranscurrido = (fecha: Date) => {
  const ahora = new Date();
  const diferencia = ahora.getTime() - fecha.getTime();
  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  const dias = Math.floor(horas / 24);
  
  if (dias > 0) {
    return `Hace ${dias} día${dias > 1 ? 's' : ''}`;
  } else if (horas > 0) {
    return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
  } else {
    return 'Hace menos de 1 hora';
  }
};

export default function AlertasPage() {
  const [filtroSeveridad, setFiltroSeveridad] = useState<string>('');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('');
  const [filtroUbicacion, setFiltroUbicacion] = useState<string>('');
  const [alertaExpandida, setAlertaExpandida] = useState<string | null>(null);

  const alertasFiltradas = useMemo(() => {
    return alertas.filter(alerta => {
      const coincideSeveridad = !filtroSeveridad || alerta.severidad === filtroSeveridad;
      const coincideCategoria = !filtroCategoria || alerta.categoria === filtroCategoria;
      const coincideUbicacion = !filtroUbicacion || 
        alerta.ubicacion.nombres.includes(filtroUbicacion) ||
        alerta.ubicacion.tipo === 'nacional';
      
      return alerta.activa && coincideSeveridad && coincideCategoria && coincideUbicacion;
    }).sort((a, b) => {
      // Ordenar por severidad y fecha
      const severidadOrder = { critica: 4, alta: 3, media: 2, baja: 1 };
      const severidadDiff = severidadOrder[b.severidad] - severidadOrder[a.severidad];
      if (severidadDiff !== 0) return severidadDiff;
      return b.fechaCreacion.getTime() - a.fechaCreacion.getTime();
    });
  }, [filtroSeveridad, filtroCategoria, filtroUbicacion]);

  const estadisticas = useMemo(() => {
    const activas = alertas.filter(a => a.activa);
    return {
      total: activas.length,
      criticas: activas.filter(a => a.severidad === 'critica').length,
      altas: activas.filter(a => a.severidad === 'alta').length,
      recientes: activas.filter(a => {
        const hace24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
        return a.fechaCreacion >= hace24h;
      }).length
    };
  }, []);

  const categorias = [...new Set(alertas.map(a => a.categoria))];
  const ubicaciones = [...new Set(alertas.flatMap(a => a.ubicacion.nombres))];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <Link href="/red" className="flex items-center gap-2">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / RED DE APOYO / ALERTAS COMUNITARIAS
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="mb-12">
          <PaperContainer aged>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                🚨 ALERTAS COMUNITARIAS
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                SISTEMA DE ALERTA TEMPRANA CIUDADANA
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.total}</div>
                  <div className="text-xs text-gray-600">Alertas Activas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.criticas}</div>
                  <div className="text-xs text-gray-600">Críticas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.altas}</div>
                  <div className="text-xs text-gray-600">Alta Prioridad</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.recientes}</div>
                  <div className="text-xs text-gray-600">Últimas 24h</div>
                </div>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Monitoreo continuo de amenazas y riesgos para la comunidad activista. 
                Todas las alertas son verificadas por organizaciones especializadas 
                antes de su publicación.
              </p>
            </div>
          </PaperContainer>
        </section>

        {/* Filtros */}
        <section className="mb-8">
          <PaperContainer>
            <h2 className="text-xl font-bold mb-4 typewriter">🔍 FILTRAR ALERTAS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">SEVERIDAD</label>
                <select
                  value={filtroSeveridad}
                  onChange={(e) => setFiltroSeveridad(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Todas</option>
                  <option value="critica">Crítica</option>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">CATEGORÍA</label>
                <select
                  value={filtroCategoria}
                  onChange={(e) => setFiltroCategoria(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Todas</option>
                  {categorias.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">UBICACIÓN</label>
                <select
                  value={filtroUbicacion}
                  onChange={(e) => setFiltroUbicacion(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Todas</option>
                  {ubicaciones.map(ub => (
                    <option key={ub} value={ub}>{ub}</option>
                  ))}
                </select>
              </div>
            </div>

            {(filtroSeveridad || filtroCategoria || filtroUbicacion) && (
              <div className="mt-4 text-center">
                <Button
                  onClick={() => {
                    setFiltroSeveridad('');
                    setFiltroCategoria('');
                    setFiltroUbicacion('');
                  }}
                  variant="secondary"
                  size="sm"
                >
                  LIMPIAR FILTROS
                </Button>
              </div>
            )}
          </PaperContainer>
        </section>

        {/* Lista de Alertas */}
        <section className="space-y-6 mb-16">
          {alertasFiltradas.length === 0 ? (
            <PaperContainer>
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">No se encontraron alertas</h3>
                <p className="text-gray-600">Intenta ajustar los filtros o vuelve más tarde.</p>
              </div>
            </PaperContainer>
          ) : (
            alertasFiltradas.map((alerta) => (
              <PaperContainer key={alerta.id} className={`border-l-4 ${coloresPorSeveridad[alerta.severidad]}`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{iconosPorCategoria[alerta.categoria]}</div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Stamp className={`text-xs ${
                        alerta.severidad === 'critica' ? 'bg-red-600' :
                        alerta.severidad === 'alta' ? 'bg-orange-600' :
                        alerta.severidad === 'media' ? 'bg-yellow-600' : 'bg-gray-600'
                      }`}>
                        {alerta.severidad.toUpperCase()}
                      </Stamp>
                      
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {alerta.categoria}
                      </span>
                      
                      <span className="text-xs text-gray-600 typewriter">
                        {tiempoTranscurrido(alerta.fechaCreacion)}
                      </span>
                      
                      <span className="text-xs text-gray-600">
                        📍 {alerta.ubicacion.nombres.join(', ')}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2">{alerta.titulo}</h3>
                    
                    <p className="text-gray-700 mb-3">
                      {alertaExpandida === alerta.id ? 
                        alerta.descripcion : 
                        `${alerta.descripcion.substring(0, 150)}${alerta.descripcion.length > 150 ? '...' : ''}`
                      }
                    </p>
                    
                    {alertaExpandida === alerta.id && (
                      <div className="space-y-4 mb-4">
                        <div>
                          <h4 className="font-bold text-sm mb-2">ACCIONES RECOMENDADAS:</h4>
                          <ul className="space-y-1">
                            {alerta.accionesRecomendadas.map((accion, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-red-600 mt-1">•</span>
                                <span>{accion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {alerta.recursos && alerta.recursos.length > 0 && (
                          <div>
                            <h4 className="font-bold text-sm mb-2">RECURSOS ADICIONALES:</h4>
                            <div className="space-y-1">
                              {alerta.recursos.map((recurso, index) => (
                                <a 
                                  key={index}
                                  href={recurso}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-sm text-blue-600 hover:underline"
                                >
                                  🔗 {recurso}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="text-sm text-gray-600">
                          <strong>Fuente:</strong> {alerta.fuente.organizacion}
                          {alerta.fuente.contacto && (
                            <span> • <a href={`mailto:${alerta.fuente.contacto}`} className="text-blue-600 hover:underline">
                              {alerta.fuente.contacto}
                            </a></span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      <Button
                        onClick={() => setAlertaExpandida(
                          alertaExpandida === alerta.id ? null : alerta.id
                        )}
                        variant="secondary"
                        size="sm"
                      >
                        {alertaExpandida === alerta.id ? 'VER MENOS' : 'VER MÁS'}
                      </Button>
                      
                      <Button
                        onClick={() => {/* Compartir alerta */}}
                        variant="secondary"
                        size="sm"
                      >
                        📤 COMPARTIR
                      </Button>
                      
                      {alerta.fuente.contacto && (
                        <a href={`mailto:${alerta.fuente.contacto}?subject=Consulta sobre alerta: ${alerta.titulo}`}>
                          <Button variant="secondary" size="sm">
                            ✉️ CONTACTAR FUENTE
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </PaperContainer>
            ))
          )}
        </section>

        {/* Call to Action */}
        <section>
          <PaperContainer>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 typewriter">
                ¿DETECTASTE UNA AMENAZA?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Ayuda a proteger a la comunidad reportando amenazas, vulnerabilidades 
                o ataques que hayas detectado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  📝 REPORTAR AMENAZA
                </Button>
                <Button variant="secondary" size="lg">
                  🔔 SUSCRIBIRSE A ALERTAS
                </Button>
              </div>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}