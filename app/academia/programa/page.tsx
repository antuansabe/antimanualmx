/**
 * Programa Académico Page - Playful Harmony Design
 * Descripción detallada del programa de formación Nivel 1
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero } from '@/shared/ui';
import { H2, H3, Body } from '@/shared/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Badge } from '@/shared/ui';
import { cursoNivel1 } from '@/shared/data/cursos';
import { useCourseProgress } from '@/shared/hooks/useLocalStorage';

export default function ProgramaAcademicoPage() {
  const { progress } = useCourseProgress('nivel-1');
  const curso = cursoNivel1;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="md"
        title="Programa Académico Completo"
        description="Nivel 1: Activista Digital Básico - Formación integral en seguridad digital y defensa de derechos digitales"
        badge={
          <Badge color="ocean" variant="solid" size="lg">
            📋 Programa Oficial
          </Badge>
        }
      />

      {/* Navegación */}
      <section className="py-6 bg-white border-b border-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/academia">
            <Button variant="ghost" color="ocean" size="sm">
              ← Volver a Academia
            </Button>
          </Link>
        </div>
      </section>

      {/* Información General */}
      <section className="py-12 bg-gradient-to-br from-cloud via-washi to-ocean-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="xl">
              <div className="text-center mb-8">
                <Badge color="gold" variant="soft" size="lg" className="mb-4">
                  {curso.nivel}
                </Badge>
                <H2 className="mb-2">{curso.titulo}</H2>
                <Body color="secondary" className="text-lg">
                  {curso.descripcion}
                </Body>
              </div>

              {/* Stats del programa */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-ocean-50 to-cloud rounded-xl p-4 border border-ocean-100 text-center">
                  <div className="text-3xl font-display font-bold text-ocean-500 mb-1">
                    {curso.duracionTotal}
                  </div>
                  <Body color="secondary" className="text-xs">
                    minutos totales
                  </Body>
                </div>
                <div className="bg-gradient-to-br from-matcha-50 to-cloud rounded-xl p-4 border border-matcha-100 text-center">
                  <div className="text-3xl font-display font-bold text-matcha-500 mb-1">
                    {Math.round(curso.duracionTotal / 60)}
                  </div>
                  <Body color="secondary" className="text-xs">
                    horas aprox.
                  </Body>
                </div>
                <div className="bg-gradient-to-br from-sakura-50 to-cloud rounded-xl p-4 border border-sakura-100 text-center">
                  <div className="text-3xl font-display font-bold text-sakura-500 mb-1">
                    {curso.modulos.length}
                  </div>
                  <Body color="secondary" className="text-xs">
                    módulos
                  </Body>
                </div>
                <div className="bg-gradient-to-br from-lavender-50 to-cloud rounded-xl p-4 border border-lavender-100 text-center">
                  <div className="text-3xl font-display font-bold text-lavender-500 mb-1">
                    ✓
                  </div>
                  <Body color="secondary" className="text-xs">
                    Certificado
                  </Body>
                </div>
              </div>

              {/* Detalles adicionales */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-washi to-cloud rounded-xl p-5 border border-mist">
                  <H3 className="text-base mb-3">Modalidad</H3>
                  <Body color="secondary" className="text-sm">
                    Auto-dirigido, progreso guardado localmente
                  </Body>
                </div>
                <div className="bg-gradient-to-r from-washi to-cloud rounded-xl p-5 border border-mist">
                  <H3 className="text-base mb-3">Certificado</H3>
                  <Body color="secondary" className="text-sm">
                    Al completar todos los módulos
                  </Body>
                </div>
              </div>

              {/* Progreso del usuario */}
              {progress.started && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t border-mist"
                >
                  <H3 className="text-lg mb-4">Tu Progreso Actual</H3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="w-full bg-cloud rounded-full h-4 overflow-hidden border border-mist">
                        <div
                          className="bg-gradient-to-r from-ocean-500 to-ocean-400 h-4 rounded-full transition-all duration-500"
                          style={{ width: `${progress.progress}%` }}
                        />
                      </div>
                    </div>
                    <Badge color="ocean" variant="solid" size="lg">
                      {Math.round(progress.progress)}%
                    </Badge>
                  </div>
                  <Body color="secondary" className="text-sm mt-3">
                    Has completado {progress.completedModules.length} de {curso.modulos.length} módulos
                  </Body>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contenido del Curso */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge color="indigo" variant="soft" size="lg" className="mb-4">
              Contenido
            </Badge>
            <H2>Módulos del Programa</H2>
            <Body color="secondary" className="mt-4 max-w-2xl mx-auto">
              Ruta de aprendizaje estructurada para desarrollar competencias en activismo digital
            </Body>
          </motion.div>

          <div className="space-y-6">
            {curso.modulos.map((modulo, idx) => {
              const isCompleted = progress.completedModules.includes(modulo.id);
              const isCurrent = progress.currentModule === idx;
              const isLocked = !progress.started && idx > 0;

              return (
                <motion.div
                  key={modulo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card
                    variant={isCurrent ? 'elevated' : 'outlined'}
                    hoverable={!isLocked}
                    className={`${
                      isCurrent ? 'border-ocean-500 shadow-lg' : ''
                    } ${
                      isCompleted ? 'bg-gradient-to-r from-matcha-50 to-cloud border-matcha-200' : ''
                    } ${
                      isLocked ? 'opacity-60' : ''
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        {/* Número del módulo */}
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-display font-bold border-4 ${
                              isCurrent
                                ? 'bg-ocean-500 text-white border-ocean-600 shadow-lg'
                                : isCompleted
                                ? 'bg-matcha-500 text-white border-matcha-600'
                                : 'bg-cloud text-charcoal border-mist'
                            }`}
                          >
                            {isCompleted ? '✓' : idx + 1}
                          </div>
                          {isCurrent && (
                            <Badge color="ocean" variant="solid" size="sm">
                              En curso
                            </Badge>
                          )}
                          {isCompleted && (
                            <Badge color="matcha" variant="solid" size="sm">
                              Completado
                            </Badge>
                          )}
                          {isLocked && (
                            <Badge color="indigo" variant="soft" size="sm">
                              Bloqueado
                            </Badge>
                          )}
                        </div>

                        {/* Contenido del módulo */}
                        <div className="flex-1">
                          <CardTitle className="mb-2">{modulo.titulo}</CardTitle>
                          <CardDescription className="mb-4">
                            {modulo.descripcion}
                          </CardDescription>

                          {/* Metadata */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge color="ocean" variant="soft" size="sm">
                              ⏱️ {modulo.duracion} min
                            </Badge>
                            <Badge color="matcha" variant="soft" size="sm">
                              📄 {modulo.contenido.length} temas
                            </Badge>
                            {modulo.ejercicios && (
                              <Badge color="sakura" variant="soft" size="sm">
                                ✍️ {modulo.ejercicios.length} ejercicios
                              </Badge>
                            )}
                            {modulo.recursos && (
                              <Badge color="lavender" variant="soft" size="sm">
                                🔗 {modulo.recursos.length} recursos
                              </Badge>
                            )}
                          </div>

                          {/* Temas del módulo */}
                          <div className="bg-gradient-to-r from-washi to-cloud rounded-xl p-4 border border-mist">
                            <Body className="text-sm font-display font-bold text-charcoal mb-3">
                              Temas cubiertos:
                            </Body>
                            <ul className="space-y-2">
                              {modulo.contenido.slice(0, 5).map((contenido, contIdx) => (
                                <li key={contIdx} className="flex items-start gap-2">
                                  <span className="text-ocean-500 mt-1 text-xs flex-shrink-0">▶</span>
                                  <Body color="secondary" className="text-sm flex-1">
                                    {contenido.titulo || 'Contenido educativo'}
                                  </Body>
                                </li>
                              ))}
                              {modulo.contenido.length > 5 && (
                                <li className="pl-4">
                                  <Body color="tertiary" className="text-xs italic">
                                    + {modulo.contenido.length - 5} temas más...
                                  </Body>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objetivos de Aprendizaje */}
      <section className="py-16 bg-gradient-to-br from-matcha-50 via-cloud to-washi">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="xl">
              <div className="text-center mb-8">
                <Badge color="matcha" variant="solid" size="lg" className="mb-4">
                  🎯 Objetivos
                </Badge>
                <H2>Objetivos de Aprendizaje</H2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {curso.objetivos.map((objetivo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-gradient-to-r from-washi to-cloud rounded-xl p-4 border border-mist"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-matcha-500 to-bamboo flex items-center justify-center text-white font-display font-bold text-sm">
                      ✓
                    </div>
                    <Body className="flex-1">{objetivo}</Body>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-ocean-100 via-sakura-100 to-matcha-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" padding="xl" className="text-center">
              <H2 className="mb-4">
                {progress.started ? '¿Listo para continuar?' : '¿Listo para comenzar?'}
              </H2>
              <Body className="text-lg mb-8">
                {progress.started
                  ? 'Continúa tu formación como activista digital'
                  : 'Inicia tu formación como activista digital'}
              </Body>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/academia/nivel-1">
                  <Button color="ocean" size="xl">
                    {progress.started ? '🎓 Continuar Curso' : '🚀 Comenzar Nivel 1'}
                  </Button>
                </Link>
                <Link href="/academia">
                  <Button variant="outline" color="matcha" size="xl">
                    ← Volver a Academia
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
