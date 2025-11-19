/**
 * Red Page - Playful Harmony Design
 * Directorio de organizaciones aliadas con diseño moderno
 */

'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
import FiltrosOrganizaciones, { FiltrosState } from '@/shared/ui/FiltrosOrganizaciones';
import MapaInteractivo from '@/shared/ui/MapaInteractivo';
import Link from 'next/link';
import { organizaciones, Organizacion } from '@/shared/data/organizaciones';

const iconosPorTipo = {
  ong: '🏛️',
  colectivo: '🤝',
  academia: '🎓',
  periodismo: '📰',
  legal: '⚖️'
};

export default function RedPage() {
  const [filtros, setFiltros] = useState<FiltrosState>({
    busqueda: '',
    tipo: '',
    estado: '',
    especialidad: '',
    alcance: ''
  });
  const [organizacionSeleccionada, setOrganizacionSeleccionada] = useState<Organizacion | null>(null);
  const [vistaActual, setVistaActual] = useState<'lista' | 'mapa'>('lista');

  const currentDate = new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Filtrar organizaciones
  const organizacionesFiltradas = useMemo(() => {
    return organizaciones.filter(org => {
      const coincideBusqueda = !filtros.busqueda || 
        org.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        org.descripcion.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        org.especialidades.some(esp => esp.toLowerCase().includes(filtros.busqueda.toLowerCase()));

      const coincideTipo = !filtros.tipo || org.tipo === filtros.tipo;
      const coincideEstado = !filtros.estado || org.ubicacion.estado === filtros.estado;
      const coincideEspecialidad = !filtros.especialidad || 
        org.especialidades.includes(filtros.especialidad);
      const coincideAlcance = !filtros.alcance || org.alcance === filtros.alcance;

      return coincideBusqueda && coincideTipo && coincideEstado && 
             coincideEspecialidad && coincideAlcance;
    });
  }, [filtros]);

  const resetearFiltros = () => {
    setFiltros({
      busqueda: '',
      tipo: '',
      estado: '',
      especialidad: '',
      alcance: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="lg"
        title="Red de Apoyo Colectivo"
        description="Directorio nacional verificado de organizaciones aliadas en la defensa de derechos digitales"
        badge={
          <Badge color="matcha" variant="solid" size="lg">
            🤝 {organizaciones.length} Organizaciones
          </Badge>
        }
        illustration={
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl"
          >
            🤝
          </motion.div>
        }
      />

      <main className="py-12 md:py-16">
        {/* Estadísticas */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <Badge color="gold" variant="soft" size="lg" className="mb-4">
                Actualización: {currentDate}
              </Badge>
              <H2 className="mb-2">Directorio Nacional</H2>
              <Body color="secondary">
                Nadie se defiende solo • Registro público • Acceso libre
              </Body>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Organizaciones', value: organizaciones.length, icon: '🏛️', color: 'sakura' as const },
                { label: 'Entidades', value: 32, icon: '📍', color: 'ocean' as const },
                { label: 'Verificadas', value: organizaciones.filter(org => org.verificada).length, icon: '✓', color: 'matcha' as const },
                { label: 'Resultados', value: organizacionesFiltradas.length, icon: '🔍', color: 'lavender' as const },
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

        {/* Filtros de búsqueda */}
        <section className="py-12 bg-gradient-to-br from-cloud via-washi to-matcha-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Badge color="indigo" variant="soft" size="lg" className="mb-4">
                  Sistema de Consulta
                </Badge>
                <H2>Búsqueda Avanzada</H2>
              </div>

              <Card variant="elevated" padding="lg">
                <FiltrosOrganizaciones
                  organizaciones={organizaciones}
                  onFiltrosChange={setFiltros}
                  onReset={resetearFiltros}
                />
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Panel de control de vista */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setVistaActual('lista')}
                color="matcha"
                variant={vistaActual === 'lista' ? 'primary' : 'outline'}
                size="md"
              >
                📋 Vista Lista
              </Button>
              <Button
                onClick={() => setVistaActual('mapa')}
                color="ocean"
                variant={vistaActual === 'mapa' ? 'primary' : 'outline'}
                size="md"
              >
                🗺️ Vista Mapa
              </Button>
            </div>
          </div>
        </section>

        {/* Vista cartográfica */}
        {vistaActual === 'mapa' && (
          <section className="py-12 bg-gradient-to-br from-ocean-50 to-cloud">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <H2 className="mb-2">🗺️ Mapa Nacional</H2>
                  <Body color="secondary">
                    Distribución territorial de organizaciones aliadas
                  </Body>
                </div>

                <Card variant="elevated" padding="lg">
                  <MapaInteractivo
                    organizaciones={organizacionesFiltradas}
                    onOrganizacionSelect={setOrganizacionSeleccionada}
                    altura="500px"
                  />

                  {organizacionSeleccionada && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <Card variant="outlined" padding="md">
                        <H3 className="mb-3">Organización Seleccionada</H3>
                        <Body className="font-display font-bold mb-2">
                          {organizacionSeleccionada.nombre}
                        </Body>
                        <Body color="secondary" className="mb-4">
                          📍 {organizacionSeleccionada.ubicacion.ciudad}, {organizacionSeleccionada.ubicacion.estado}
                        </Body>
                        <Link href={`/red/${organizacionSeleccionada.id}`}>
                          <Button color="matcha" size="sm" fullWidth>
                            📋 Ver Detalles
                          </Button>
                        </Link>
                      </Card>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Vista de lista */}
        {vistaActual === 'lista' && (
          <section className="py-12 bg-gradient-to-br from-washi via-cloud to-lavender-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <H2 className="mb-2">Organizaciones Aliadas</H2>
                  <Body color="secondary">
                    {organizacionesFiltradas.length} resultados encontrados
                  </Body>
                </div>

                <div className="space-y-6">
                  {organizacionesFiltradas.length === 0 ? (
                    <Card variant="outlined" padding="xl" className="text-center">
                      <div className="text-6xl mb-4">🔍</div>
                      <H3 className="mb-3">No se encontraron resultados</H3>
                      <Body color="secondary" className="mb-6">
                        Los criterios de búsqueda aplicados no coinciden con ningún registro.
                        Modifica los filtros para ampliar la consulta.
                      </Body>
                      <Button onClick={resetearFiltros} color="matcha" size="md">
                        🔄 Restablecer Filtros
                      </Button>
                    </Card>
                  ) : (
                    organizacionesFiltradas.map((org, index) => (
                      <motion.div
                        key={org.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card variant="elevated" padding="lg" hoverable>
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Icono y badge */}
                            <div className="flex-shrink-0 text-center">
                              <div className="text-5xl mb-3">{iconosPorTipo[org.tipo]}</div>
                              <Badge
                                color={org.verificada ? 'matcha' : 'gold'}
                                variant="solid"
                                size="sm"
                              >
                                {org.verificada ? '✓ Verificada' : '⏳ En proceso'}
                              </Badge>
                            </div>

                            {/* Contenido principal */}
                            <div className="flex-1">
                              <div className="mb-4">
                                <Body color="tertiary" className="text-xs mb-1">
                                  ORG-{org.id.toUpperCase()}
                                </Body>
                                <H3 className="mb-1">{org.nombreCorto}</H3>
                                <Body color="secondary" className="text-sm">
                                  {org.nombre}
                                </Body>
                              </div>

                              <Body className="mb-4 leading-relaxed">
                                {org.descripcion}
                              </Body>

                              {/* Especialidades */}
                              <div className="bg-gradient-to-r from-matcha-50 to-ocean-50 p-4 rounded-xl mb-4">
                                <Body className="font-display font-bold text-sm mb-2">
                                  Áreas de Especialización
                                </Body>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {org.especialidades.slice(0, 4).map((esp, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <span className="text-matcha-500">•</span>
                                      <Body className="text-sm">{esp}</Body>
                                    </div>
                                  ))}
                                </div>
                                {org.especialidades.length > 4 && (
                                  <Body color="tertiary" className="text-xs mt-2">
                                    +{org.especialidades.length - 4} más
                                  </Body>
                                )}
                              </div>

                              {/* Metadatos */}
                              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                <div className="flex items-center gap-1.5">
                                  <span>📍</span>
                                  <Body color="secondary" className="text-sm">
                                    {org.ubicacion.ciudad}
                                  </Body>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span>🗓️</span>
                                  <Body color="secondary" className="text-sm">
                                    Fund. {org.fechaFundacion}
                                  </Body>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span>📡</span>
                                  <Body color="secondary" className="text-sm">
                                    {org.alcance}
                                  </Body>
                                </div>
                              </div>

                              {/* Acciones */}
                              <div className="flex flex-wrap gap-3">
                                <a
                                  href={org.contacto.sitioWeb}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button color="ocean" variant="outline" size="sm">
                                    🌐 Sitio Web
                                  </Button>
                                </a>
                                <Link href={`/red/${org.id}`}>
                                  <Button color="matcha" variant="primary" size="sm">
                                    📋 Ver Detalles
                                  </Button>
                                </Link>
                                {org.contacto.email && (
                                  <a href={`mailto:${org.contacto.email}`}>
                                    <Button color="sakura" variant="ghost" size="sm">
                                      ✉️ Contacto
                                    </Button>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Footer con código */}
                          <div className="mt-4 pt-4 border-t border-mist">
                            <Body color="tertiary" className="text-xs">
                              ORG-{org.id.toUpperCase()}-{new Date().getFullYear()}
                            </Body>
                          </div>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Registro */}
        <section className="py-16 bg-gradient-to-br from-matcha-100 to-ocean-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" padding="xl" className="text-center">
                <Badge color="gold" variant="soft" size="lg" className="mb-4">
                  Registro Abierto
                </Badge>
                <H2 className="mb-4">Únete al Directorio Nacional</H2>

                <div className="bg-gradient-to-r from-washi to-cloud p-6 rounded-xl mb-6">
                  <Body className="font-display font-bold mb-3">
                    Requisitos de Incorporación
                  </Body>
                  <Body color="secondary" className="leading-relaxed">
                    Organizaciones y colectivos comprometidos con la defensa de derechos
                    digitales pueden solicitar su incorporación mediante proceso de verificación.
                    El registro requiere validación de trayectoria, estructura y coherencia ideológica.
                  </Body>
                </div>

                <Body className="mb-8 max-w-2xl mx-auto">
                  La red de apoyo colectivo se fortalece con cada nueva incorporación.
                  Juntos construimos un ecosistema resiliente de resistencia digital.
                </Body>

                <a href="mailto:antuansabe@gmail.com?subject=Solicitud de Registro Organizacional&body=Nombre de la organización:%0D%0ATipo de organización:%0D%0ASitio web:%0D%0ADescripción de actividades:%0D%0AContacto responsable:%0D%0ATeléfono:%0D%0A%0D%0APor favor, proporcione información detallada sobre su organización para iniciar el proceso de verificación.">
                  <Button color="matcha" size="xl">
                    📝 Solicitar Registro
                  </Button>
                </a>

                <div className="mt-8 pt-6 border-t border-mist">
                  <Body color="tertiary" className="text-sm">
                    Proceso: 5-10 días hábiles • Gratuito • Confidencial
                  </Body>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}