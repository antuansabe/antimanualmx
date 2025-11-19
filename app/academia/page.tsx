/**
 * Academia Page - Playful Harmony Design
 * Hub principal de formación en activismo digital
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero } from '@/shared/ui';
import { H2, H3, Body } from '@/shared/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Badge } from '@/shared/ui';

const modulos = [
  {
    codigo: 'CAP-001',
    nivel: 1,
    titulo: 'ACTIVISTA DIGITAL BÁSICO',
    subtitulo: 'Manual de Formación Técnica - Nivel Inicial',
    descripcion: 'Capacitación fundamental en principios de seguridad digital y metodologías de activismo tecnológico',
    duracion: '2-3 horas académicas',
    unidades: 4,
    competencias: [
      'Análisis histórico de la resistencia digital mexicana',
      'Marco jurídico de derechos digitales constitucionales',
      'Implementación de protocolos básicos de seguridad',
      'Estudio de casos de activismo digital exitoso'
    ],
    requisitos: 'Ninguno - Curso de acceso libre',
    habilitado: true,
    revision: '2024.1',
    color: 'ocean' as const,
    icon: '🎓'
  },
  {
    codigo: 'CAP-002',
    nivel: 2,
    titulo: 'DEFENSOR COMUNITARIO',
    subtitulo: 'Manual de Organización y Contravigilancia',
    descripcion: 'Especialización en metodologías de organización colectiva segura y construcción de redes resilientes',
    duracion: '4-5 horas académicas',
    unidades: 6,
    competencias: [
      'Técnicas avanzadas de organización digital segura',
      'Protocolos de contravigilancia y detección de amenazas',
      'Metodologías de documentación legal de violaciones',
      'Arquitectura y sostenibilidad de redes de apoyo'
    ],
    requisitos: 'Certificación CAP-001 + Evaluación técnica',
    habilitado: false,
    revision: '2024.2',
    color: 'matcha' as const,
    icon: '🛡️'
  },
  {
    codigo: 'CAP-003',
    nivel: 3,
    titulo: 'FACILITADOR DE SEGURIDAD',
    subtitulo: 'Manual de Formación de Formadores',
    descripcion: 'Capacitación avanzada para la formación y acompañamiento técnico de nuevos activistas digitales',
    duracion: '6-8 horas académicas',
    unidades: 8,
    competencias: [
      'Metodologías pedagógicas en educación digital crítica',
      'Técnicas de diagnóstico comunitario de vulnerabilidades',
      'Protocolos de respuesta inmediata a incidentes críticos',
      'Planificación estratégica de proyectos de resistencia digital'
    ],
    requisitos: 'Certificación CAP-002 + 6 meses experiencia práctica',
    habilitado: false,
    revision: '2024.3',
    color: 'lavender' as const,
    icon: '🚀'
  }
];

const metricas = {
  estudiantes: 247,
  certificaciones: 89,
  organizaciones: 12,
  efectividad: 94
};

export default function AcademiaPage() {
  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="lg"
        title="Academia Activista"
        description="Programa de formación certificada en seguridad digital y activismo tecnológico. Educación libre, gratuita y accesible para defender tus derechos digitales."
        badge={
          <Badge color="ocean" variant="solid" size="lg">
            🎓 Formación Certificada
          </Badge>
        }
        primaryAction={{
          label: '🚀 Comenzar Nivel 1',
          onClick: () => window.location.href = '/academia/nivel-1',
        }}
        secondaryAction={{
          label: 'Ver Programa',
          onClick: () => window.location.href = '/academia/programa',
        }}
        illustration={
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl"
          >
            📚
          </motion.div>
        }
      />

      {/* Métricas de impacto */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <Card variant="outlined" padding="md" className="text-center">
                <div className="text-4xl font-display font-bold text-ocean-500 mb-2">
                  {metricas.estudiantes}+
                </div>
                <Body color="secondary" className="text-sm">
                  Estudiantes activos
                </Body>
              </Card>
              <Card variant="outlined" padding="md" className="text-center">
                <div className="text-4xl font-display font-bold text-matcha-500 mb-2">
                  {metricas.certificaciones}
                </div>
                <Body color="secondary" className="text-sm">
                  Certificaciones emitidas
                </Body>
              </Card>
              <Card variant="outlined" padding="md" className="text-center">
                <div className="text-4xl font-display font-bold text-sakura-500 mb-2">
                  {metricas.organizaciones}
                </div>
                <Body color="secondary" className="text-sm">
                  Organizaciones aliadas
                </Body>
              </Card>
              <Card variant="outlined" padding="md" className="text-center">
                <div className="text-4xl font-display font-bold text-lavender-500 mb-2">
                  {metricas.efectividad}%
                </div>
                <Body color="secondary" className="text-sm">
                  Tasa de efectividad
                </Body>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objetivo de la Academia */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cloud via-washi to-ocean-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="xl">
              <div className="text-center mb-8">
                <Badge color="gold" variant="soft" size="lg" className="mb-4">
                  Misión
                </Badge>
                <H2 className="mb-4">Formación para la Resistencia Digital</H2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-ocean-50 to-cloud rounded-2xl p-6 border border-ocean-100">
                  <H3 className="text-lg mb-3">
                    <span className="text-ocean-500 mr-2">•</span>
                    Objetivo General
                  </H3>
                  <Body color="secondary">
                    Formar activistas digitales capacitados en metodologías de seguridad, organización comunitaria y liderazgo tecnológico para la defensa de derechos humanos.
                  </Body>
                </div>

                <div className="bg-gradient-to-r from-matcha-50 to-cloud rounded-2xl p-6 border border-matcha-100">
                  <H3 className="text-lg mb-3">
                    <span className="text-matcha-500 mr-2">•</span>
                    Población Objetivo
                  </H3>
                  <Body color="secondary">
                    Defensores de derechos humanos, periodistas, organizaciones de la sociedad civil y ciudadanía comprometida con la transformación digital.
                  </Body>
                </div>

                <div className="bg-gradient-to-r from-sakura-50 to-cloud rounded-2xl p-6 border border-sakura-100">
                  <H3 className="text-lg mb-3">
                    <span className="text-sakura-500 mr-2">•</span>
                    Modalidad
                  </H3>
                  <Body color="secondary">
                    Educación digital auto-dirigida con acompañamiento técnico especializado y certificación verificable.
                  </Body>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Body className="italic text-lg">
                  &ldquo;El conocimiento compartido es poder multiplicado&rdquo;
                </Body>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Módulos de Capacitación */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge color="indigo" variant="soft" size="lg" className="mb-4">
              Módulos Disponibles
            </Badge>
            <H2>Programa de Formación</H2>
            <Body color="secondary" className="mt-4 max-w-2xl mx-auto">
              Ruta de aprendizaje progresiva desde fundamentos hasta especialización avanzada
            </Body>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {modulos.map((modulo, index) => (
              <motion.div
                key={modulo.codigo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="elevated"
                  hoverable={modulo.habilitado}
                  clickable={modulo.habilitado}
                  className={`h-full ${!modulo.habilitado ? 'opacity-60' : ''}`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col items-center gap-3">
                        <div className="text-6xl">{modulo.icon}</div>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                          !modulo.habilitado
                            ? 'border-mist bg-cloud'
                            : modulo.color === 'ocean'
                            ? 'border-ocean-500 bg-ocean-50'
                            : modulo.color === 'matcha'
                            ? 'border-matcha-500 bg-matcha-50'
                            : 'border-lavender-500 bg-lavender-50'
                        }`}>
                          <span className={`text-3xl font-display font-bold ${
                            !modulo.habilitado
                              ? 'text-charcoal'
                              : modulo.color === 'ocean'
                              ? 'text-ocean-500'
                              : modulo.color === 'matcha'
                              ? 'text-matcha-500'
                              : 'text-lavender-500'
                          }`}>
                            {modulo.nivel}
                          </span>
                        </div>
                        <Badge
                          color={modulo.habilitado ? modulo.color : 'indigo'}
                          variant={modulo.habilitado ? 'solid' : 'soft'}
                          size="sm"
                        >
                          {modulo.habilitado ? 'DISPONIBLE' : 'PRÓXIMAMENTE'}
                        </Badge>
                      </div>

                      <div className="flex-1">
                        <div className="mb-3">
                          <Badge color="gold" variant="soft" size="sm" className="mb-2">
                            {modulo.codigo}
                          </Badge>
                          <CardTitle className="mb-2">{modulo.titulo}</CardTitle>
                          <H3 className="text-base mb-3 font-normal text-charcoal">
                            {modulo.subtitulo}
                          </H3>
                        </div>
                        <CardDescription>{modulo.descripcion}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Detalles del curso */}
                      <div className="flex flex-wrap gap-3">
                        <Badge color="ocean" variant="soft" size="sm">
                          ⏱️ {modulo.duracion}
                        </Badge>
                        <Badge color="matcha" variant="soft" size="sm">
                          📚 {modulo.unidades} unidades
                        </Badge>
                        <Badge color="lavender" variant="soft" size="sm">
                          Rev. {modulo.revision}
                        </Badge>
                      </div>

                      {/* Requisitos */}
                      <div className="bg-gradient-to-r from-washi to-cloud rounded-xl p-4 border border-mist">
                        <Body className="text-sm font-display font-bold text-charcoal mb-2">
                          Requisitos de ingreso:
                        </Body>
                        <Body color="secondary" className="text-sm">
                          {modulo.requisitos}
                        </Body>
                      </div>

                      {/* Competencias */}
                      <div>
                        <Body className="text-sm font-display font-bold text-charcoal mb-3">
                          Competencias técnicas:
                        </Body>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {modulo.competencias.map((competencia, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className={`mt-1 flex-shrink-0 ${
                                modulo.color === 'ocean'
                                  ? 'text-ocean-500'
                                  : modulo.color === 'matcha'
                                  ? 'text-matcha-500'
                                  : 'text-lavender-500'
                              }`}>▶</span>
                              <Body color="secondary" className="text-sm flex-1">
                                {competencia}
                              </Body>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <div className="flex flex-wrap gap-3 w-full">
                      {modulo.habilitado ? (
                        <>
                          <Link href={modulo.nivel === 1 ? '/academia/nivel-1' : '#'} className="flex-1">
                            <Button
                              color={modulo.color}
                              fullWidth
                              disabled={modulo.nivel !== 1}
                            >
                              {modulo.nivel === 1 ? '🎓 Acceder al Módulo' : '🔒 Requiere Nivel Anterior'}
                            </Button>
                          </Link>
                          <Link href="/academia/programa">
                            <Button variant="outline" color={modulo.color}>
                              📋 Ver Programa
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <Button variant="ghost" color="lavender" fullWidth disabled>
                          🔒 Próximamente
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Convocatoria */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sakura-100 via-matcha-100 to-ocean-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" padding="xl" className="text-center">
              <Badge color="persimmon" variant="solid" size="lg" className="mb-6">
                Convocatoria Abierta
              </Badge>
              <H2 className="mb-4">Únete a la Academia</H2>
              <Body className="text-lg mb-6">
                La resistencia digital comienza con la formación técnica. Únete a nuestra comunidad de aprendizaje y contribuye a construir un ecosistema digital más libre, seguro y soberano.
              </Body>

              <div className="bg-gradient-to-r from-washi to-cloud rounded-2xl p-6 border border-mist mb-8">
                <H3 className="text-lg mb-3">Dirigido a:</H3>
                <Body color="secondary">
                  Defensores de derechos humanos, periodistas, organizaciones de la sociedad civil, estudiantes y ciudadanía comprometida con la transformación digital de México.
                </Body>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button color="ocean" size="xl" onClick={() => window.location.href = '/academia/nivel-1'}>
                  🚀 Comenzar Ahora
                </Button>
                <Button
                  variant="outline"
                  color="matcha"
                  size="xl"
                  onClick={() => window.location.href = '/academia/programa'}
                >
                  📋 Ver Programa Completo
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-mist">
                <Body color="tertiary" className="text-sm">
                  Convocatoria Permanente • Acceso Libre y Gratuito • {currentDate}
                </Body>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
