/**
 * Alertas Page - Playful Harmony Design
 * Feed de alertas comunitarias con diseño moderno
 */

'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
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
  baja: { color: 'ocean' as const, border: 'border-ocean-200' },
  media: { color: 'gold' as const, border: 'border-gold-200' },
  alta: { color: 'sunset' as const, border: 'border-sunset-200' },
  critica: { color: 'persimmon' as const, border: 'border-persimmon-200' }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="lg"
        title="Alertas Comunitarias"
        description="Sistema de alerta temprana ciudadana. Monitoreo continuo de amenazas verificadas por organizaciones especializadas."
        badge={
          <Badge color="persimmon" variant="solid" size="lg">
            🚨 {estadisticas.total} Alertas Activas
          </Badge>
        }
        illustration={
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl"
          >
            🚨
          </motion.div>
        }
      />

      <main className="py-12 md:py-16">
        {/* Estadísticas */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Activas', value: estadisticas.total, icon: '🚨', color: 'persimmon' as const },
                { label: 'Críticas', value: estadisticas.criticas, icon: '⚠️', color: 'sunset' as const },
                { label: 'Alta Prioridad', value: estadisticas.altas, icon: '📢', color: 'gold' as const },
                { label: 'Últimas 24h', value: estadisticas.recientes, icon: '⏱️', color: 'ocean' as const },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="outlined" padding="md" className="text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-display font-bold mb-2 text-sumi">
                      {stat.value}
                    </div>
                    <Body color="secondary" className="text-sm font-medium">
                      {stat.label}
                    </Body>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-12 bg-gradient-to-br from-cloud via-washi to-persimmon-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Badge color="indigo" variant="soft" size="lg" className="mb-4">
                  Filtros de Búsqueda
                </Badge>
                <H2>🔍 Filtrar Alertas</H2>
              </div>

              <Card variant="elevated" padding="lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-display font-bold text-sm mb-2 text-sumi">
                      Severidad
                    </label>
                    <select
                      value={filtroSeveridad}
                      onChange={(e) => setFiltroSeveridad(e.target.value)}
                      className="w-full p-3 border border-mist rounded-xl focus:ring-2 focus:ring-persimmon-500 focus:border-persimmon-500 transition-all"
                    >
                      <option value="">Todas</option>
                      <option value="critica">Crítica</option>
                      <option value="alta">Alta</option>
                      <option value="media">Media</option>
                      <option value="baja">Baja</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-display font-bold text-sm mb-2 text-sumi">
                      Categoría
                    </label>
                    <select
                      value={filtroCategoria}
                      onChange={(e) => setFiltroCategoria(e.target.value)}
                      className="w-full p-3 border border-mist rounded-xl focus:ring-2 focus:ring-persimmon-500 focus:border-persimmon-500 transition-all"
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
                    <label className="block font-display font-bold text-sm mb-2 text-sumi">
                      Ubicación
                    </label>
                    <select
                      value={filtroUbicacion}
                      onChange={(e) => setFiltroUbicacion(e.target.value)}
                      className="w-full p-3 border border-mist rounded-xl focus:ring-2 focus:ring-persimmon-500 focus:border-persimmon-500 transition-all"
                    >
                      <option value="">Todas</option>
                      {ubicaciones.map(ub => (
                        <option key={ub} value={ub}>{ub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {(filtroSeveridad || filtroCategoria || filtroUbicacion) && (
                  <div className="mt-6 text-center">
                    <Button
                      onClick={() => {
                        setFiltroSeveridad('');
                        setFiltroCategoria('');
                        setFiltroUbicacion('');
                      }}
                      color="persimmon"
                      variant="outline"
                      size="md"
                    >
                      🔄 Limpiar Filtros
                    </Button>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Lista de Alertas */}
        <section className="py-12 bg-gradient-to-br from-washi via-cloud to-sunset-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <H2 className="mb-2">Feed de Alertas</H2>
                <Body color="secondary">
                  {alertasFiltradas.length} alertas encontradas
                </Body>
              </div>

              <div className="space-y-6">
                {alertasFiltradas.length === 0 ? (
                  <Card variant="outlined" padding="xl" className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <H3 className="mb-3">No se encontraron alertas</H3>
                    <Body color="secondary">
                      Intenta ajustar los filtros o vuelve más tarde.
                    </Body>
                  </Card>
                ) : (
                  alertasFiltradas.map((alerta, index) => (
                    <motion.div
                      key={alerta.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card
                        variant="elevated"
                        padding="lg"
                        className={`border-l-4 ${coloresPorSeveridad[alerta.severidad].border}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 text-4xl">
                            {iconosPorCategoria[alerta.categoria]}
                          </div>

                          <div className="flex-1">
                            {/* Badges y metadatos */}
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <Badge
                                color={coloresPorSeveridad[alerta.severidad].color}
                                variant="soft"
                                size="sm"
                              >
                                {alerta.severidad.toUpperCase()}
                              </Badge>

                              <Badge color="indigo" variant="soft" size="sm">
                                {alerta.categoria}
                              </Badge>

                              <Body color="tertiary" className="text-xs">
                                {tiempoTranscurrido(alerta.fechaCreacion)}
                              </Body>

                              <Body color="tertiary" className="text-xs">
                                📍 {alerta.ubicacion.nombres.join(', ')}
                              </Body>
                            </div>

                            {/* Título y descripción */}
                            <H3 className="mb-3">{alerta.titulo}</H3>

                            <Body className="mb-4 leading-relaxed">
                              {alertaExpandida === alerta.id ?
                                alerta.descripcion :
                                `${alerta.descripcion.substring(0, 150)}${alerta.descripcion.length > 150 ? '...' : ''}`
                              }
                            </Body>

                            {/* Detalles expandidos */}
                            {alertaExpandida === alerta.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="space-y-4 mb-4"
                              >
                                <div className="bg-gradient-to-r from-persimmon-50 to-sunset-50 p-4 rounded-xl">
                                  <Body className="font-display font-bold text-sm mb-2">
                                    Acciones Recomendadas
                                  </Body>
                                  <ul className="space-y-2">
                                    {alerta.accionesRecomendadas.map((accion, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <span className="text-persimmon-500 mt-1">•</span>
                                        <Body className="text-sm">{accion}</Body>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {alerta.recursos && alerta.recursos.length > 0 && (
                                  <div>
                                    <Body className="font-display font-bold text-sm mb-2">
                                      Recursos Adicionales
                                    </Body>
                                    <div className="space-y-1">
                                      {alerta.recursos.map((recurso, idx) => (
                                        <a
                                          key={idx}
                                          href={recurso}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block text-sm text-ocean-500 hover:text-ocean-600 hover:underline"
                                        >
                                          🔗 {recurso}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                <div className="pt-3 border-t border-mist">
                                  <Body color="secondary" className="text-sm">
                                    <span className="font-display font-bold">Fuente:</span> {alerta.fuente.organizacion}
                                    {alerta.fuente.contacto && (
                                      <span> • <a href={`mailto:${alerta.fuente.contacto}`} className="text-ocean-500 hover:underline">
                                        {alerta.fuente.contacto}
                                      </a></span>
                                    )}
                                  </Body>
                                </div>
                              </motion.div>
                            )}

                            {/* Acciones */}
                            <div className="flex flex-wrap gap-2">
                              <Button
                                onClick={() => setAlertaExpandida(
                                  alertaExpandida === alerta.id ? null : alerta.id
                                )}
                                color={coloresPorSeveridad[alerta.severidad].color}
                                variant="outline"
                                size="sm"
                              >
                                {alertaExpandida === alerta.id ? 'Ver Menos' : 'Ver Más'}
                              </Button>

                              <Button
                                onClick={() => {/* Compartir alerta */}}
                                color="ocean"
                                variant="ghost"
                                size="sm"
                              >
                                📤 Compartir
                              </Button>

                              {alerta.fuente.contacto && (
                                <a href={`mailto:${alerta.fuente.contacto}?subject=Consulta sobre alerta: ${alerta.titulo}`}>
                                  <Button color="sakura" variant="ghost" size="sm">
                                    ✉️ Contactar
                                  </Button>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-persimmon-100 to-sunset-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" padding="xl" className="text-center">
                <Badge color="persimmon" variant="soft" size="lg" className="mb-4">
                  Participación Comunitaria
                </Badge>
                <H2 className="mb-4">¿Detectaste una Amenaza?</H2>
                <Body className="mb-8 max-w-2xl mx-auto">
                  Ayuda a proteger a la comunidad reportando amenazas, vulnerabilidades
                  o ataques que hayas detectado.
                </Body>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button color="persimmon" size="lg">
                    📝 Reportar Amenaza
                  </Button>
                  <Button variant="outline" color="ocean" size="lg">
                    🔔 Suscribirse a Alertas
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}