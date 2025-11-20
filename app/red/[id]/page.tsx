/**
 * Perfil Organización Page - Playful Harmony Design
 * Página detallada de organización aliada con diseño moderno
 */

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
import MapaInteractivo from '@/shared/ui/MapaInteractivo';
import Link from 'next/link';
import { organizaciones } from '@/shared/data/organizaciones';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PerfilOrganizacionPage({ params }: PageProps) {
  const { id } = await params;
  const organizacion = organizaciones.find(org => org.id === id);

  if (!organizacion) {
    notFound();
  }

  const iconosPorTipo = {
    ong: '🏛️',
    colectivo: '🤝',
    academia: '🎓',
    periodismo: '📰',
    legal: '⚖️'
  };

  const coloresPorTipo = {
    ong: 'ocean' as const,
    colectivo: 'lavender' as const,
    academia: 'matcha' as const,
    periodismo: 'sunset' as const,
    legal: 'persimmon' as const
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/red" className="inline-flex items-center gap-2 text-charcoal hover:text-sumi transition-colors">
            <span>←</span>
            <Body className="font-display font-medium">Volver al Directorio</Body>
          </Link>
          <Body color="tertiary" className="mt-1 text-sm">
            Red de Apoyo / {organizacion.nombreCorto}
          </Body>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cloud via-washi to-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icono y badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0 text-center md:w-1/4"
            >
              <div className="text-8xl mb-4">{iconosPorTipo[organizacion.tipo]}</div>
              <div className="space-y-2">
                <Badge
                  color={organizacion.verificada ? 'matcha' : 'gold'}
                  variant="soft"
                  size="md"
                >
                  {organizacion.verificada ? '✓ Verificada' : '⏳ En proceso'}
                </Badge>
                <br />
                <Badge color={coloresPorTipo[organizacion.tipo]} variant="soft" size="md">
                  {organizacion.tipo.toUpperCase()}
                </Badge>
              </div>
            </motion.div>

            {/* Información principal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <Body color="tertiary" className="text-xs mb-2">
                ORG-{organizacion.id.toUpperCase()}
              </Body>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-2 text-sumi">
                {organizacion.nombre}
              </h1>
              <H3 className="mb-6 text-sakura-500">{organizacion.nombreCorto}</H3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-6">
                {[
                  { label: 'Fundación', value: organizacion.fechaFundacion, icon: '🗓️' },
                  { label: 'Alcance', value: organizacion.alcance, icon: '📡' },
                  { label: 'Ubicación', value: organizacion.ubicacion.ciudad, icon: '📍' },
                  { label: 'Estado', value: organizacion.estado, icon: '✓' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Body color="tertiary" className="text-xs mb-1">
                      {item.icon} {item.label}
                    </Body>
                    <Body className="font-display font-bold">{item.value}</Body>
                  </motion.div>
                ))}
              </div>

              <Body className="text-lg mb-6 leading-relaxed">
                {organizacion.descripcion}
              </Body>

              <Card variant="filled" padding="md" className="bg-gradient-to-r from-ocean-50 to-matcha-50">
                <Body className="font-display font-bold text-sm mb-2">Misión</Body>
                <Body className="italic">{organizacion.mision}</Body>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="py-12 md:py-16">
        {/* Especialidades y Servicios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" padding="lg">
                  <H3 className="mb-4">🎯 Especialidades</H3>
                  <div className="space-y-3">
                    {organizacion.especialidades.map((esp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-persimmon-500 rounded-full flex-shrink-0"></div>
                        <Body>{esp}</Body>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" padding="lg">
                  <H3 className="mb-4">🛠️ Servicios</H3>
                  <div className="space-y-3">
                    {organizacion.servicios.map((servicio, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-ocean-500 rounded-full flex-shrink-0"></div>
                        <Body>{servicio}</Body>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logros y Colaboraciones */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cloud to-washi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" padding="lg">
                  <H3 className="mb-4">🏆 Logros Principales</H3>
                  <div className="space-y-3">
                    {organizacion.logros.map((logro, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gradient-to-r from-matcha-50 to-matcha-100 border-l-4 border-matcha-500 rounded-lg"
                      >
                        <Body className="text-matcha-900">{logro}</Body>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" padding="lg">
                  <H3 className="mb-4">🤝 Colaboraciones</H3>
                  <div className="space-y-3">
                    {organizacion.colaboraciones.map((colab, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-lavender-500 rounded-full flex-shrink-0"></div>
                        <Body>{colab}</Body>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mapa de Ubicación */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Badge color="ocean" variant="soft" size="lg" className="mb-4">
                  Ubicación
                </Badge>
                <H2 className="mb-2">📍 Localización</H2>
                <Body color="secondary">
                  {organizacion.ubicacion.ciudad}, {organizacion.ubicacion.estado}
                </Body>
              </div>

              <Card variant="elevated" padding="lg">
                <MapaInteractivo
                  organizaciones={[organizacion]}
                  altura="300px"
                />
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cloud via-washi to-sakura-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Badge color="sakura" variant="soft" size="lg" className="mb-4">
                  Contacto
                </Badge>
                <H2>📞 Información de Contacto</H2>
              </div>

              <Card variant="elevated" padding="lg">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Contacto Directo */}
                  <div>
                    <H3 className="mb-4">Contacto Directo</H3>
                    <div className="space-y-3">
                      <a
                        href={organizacion.contacto.sitioWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl border border-mist hover:border-ocean-300 hover:bg-ocean-50 transition-all group"
                      >
                        <span className="text-3xl group-hover:scale-110 transition-transform">🌐</span>
                        <div className="flex-1">
                          <Body className="font-display font-bold mb-1">Sitio Web</Body>
                          <Body color="secondary" className="text-sm break-all">
                            {organizacion.contacto.sitioWeb}
                          </Body>
                        </div>
                      </a>

                      {organizacion.contacto.email && (
                        <a
                          href={`mailto:${organizacion.contacto.email}`}
                          className="flex items-center gap-4 p-4 rounded-xl border border-mist hover:border-sakura-300 hover:bg-sakura-50 transition-all group"
                        >
                          <span className="text-3xl group-hover:scale-110 transition-transform">✉️</span>
                          <div className="flex-1">
                            <Body className="font-display font-bold mb-1">Email</Body>
                            <Body color="secondary" className="text-sm break-all">
                              {organizacion.contacto.email}
                            </Body>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Redes Sociales */}
                  <div>
                    <H3 className="mb-4">Redes Sociales</H3>
                    <div className="space-y-3">
                      {organizacion.contacto.twitter && (
                        <a
                          href={`https://twitter.com/${organizacion.contacto.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl border border-mist hover:border-ocean-300 hover:bg-ocean-50 transition-all group"
                        >
                          <span className="text-3xl group-hover:scale-110 transition-transform">🐦</span>
                          <div className="flex-1">
                            <Body className="font-display font-bold mb-1">Twitter</Body>
                            <Body color="secondary" className="text-sm">
                              {organizacion.contacto.twitter}
                            </Body>
                          </div>
                        </a>
                      )}

                      {organizacion.contacto.facebook && (
                        <a
                          href={`https://facebook.com/${organizacion.contacto.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl border border-mist hover:border-lavender-300 hover:bg-lavender-50 transition-all group"
                        >
                          <span className="text-3xl group-hover:scale-110 transition-transform">📘</span>
                          <div className="flex-1">
                            <Body className="font-display font-bold mb-1">Facebook</Body>
                            <Body color="secondary" className="text-sm">
                              {organizacion.contacto.facebook}
                            </Body>
                          </div>
                        </a>
                      )}

                      {organizacion.contacto.telegram && (
                        <a
                          href={`https://t.me/${organizacion.contacto.telegram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-xl border border-mist hover:border-matcha-300 hover:bg-matcha-50 transition-all group"
                        >
                          <span className="text-3xl group-hover:scale-110 transition-transform">✈️</span>
                          <div className="flex-1">
                            <Body className="font-display font-bold mb-1">Telegram</Body>
                            <Body color="secondary" className="text-sm">
                              {organizacion.contacto.telegram}
                            </Body>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 pt-8 border-t border-mist text-center">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button color="matcha" size="lg">
                      🤝 Solicitar Colaboración
                    </Button>
                    <Button variant="outline" color="sakura" size="lg">
                      📋 Reportar Información
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Navegación */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card variant="outlined" padding="lg" className="text-center">
              <H3 className="mb-6">Explorar Más Organizaciones</H3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/red">
                  <Button color="matcha" variant="outline" size="lg">
                    ← Volver al Directorio
                  </Button>
                </Link>
                <Link href="/red?vista=mapa">
                  <Button color="ocean" variant="outline" size="lg">
                    🗺️ Ver en Mapa
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}