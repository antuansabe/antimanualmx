/**
 * Nivel 1 Page - Playful Harmony Design
 * Curso interactivo con certificado - Activista Digital Básico
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero } from '@/shared/ui';
import { H2, H3, Body } from '@/shared/ui';
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Badge } from '@/shared/ui';
import { CertificadoGenerator } from '@/shared/ui/CertificadoGenerator';
import { cursoNivel1 } from '@/shared/data/cursos';
import { useCourseProgress } from '@/shared/hooks/useLocalStorage';

export default function Nivel1Page() {
  const { progress, startCourse, markModuleComplete, updateProgress, resetCourse } = useCourseProgress('nivel-1');
  const [moduloActual, setModuloActual] = useState(0);
  const [contenidoActual, setContenidoActual] = useState(0);
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState<{[key: string]: string | number}>({});
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const [mostrarRecursos, setMostrarRecursos] = useState(false);

  const curso = cursoNivel1;
  const modulo = curso.modulos[moduloActual];
  const contenido = modulo?.contenido[contenidoActual];
  const ejercicio = modulo?.ejercicios?.[ejercicioActual];

  useEffect(() => {
    if (!progress.started) {
      startCourse();
    }
  }, [progress.started, startCourse]);

  const siguienteContenido = () => {
    if (contenidoActual < modulo.contenido.length - 1) {
      setContenidoActual(contenidoActual + 1);
    } else if (modulo.ejercicios && modulo.ejercicios.length > 0) {
      setMostrarEjercicios(true);
    } else {
      completarModulo();
    }
  };

  const anteriorContenido = () => {
    if (mostrarEjercicios) {
      if (ejercicioActual > 0) {
        setEjercicioActual(ejercicioActual - 1);
      } else {
        setMostrarEjercicios(false);
        setContenidoActual(modulo.contenido.length - 1);
      }
    } else if (contenidoActual > 0) {
      setContenidoActual(contenidoActual - 1);
    } else if (moduloActual > 0) {
      setModuloActual(moduloActual - 1);
      const moduloAnterior = curso.modulos[moduloActual - 1];
      setContenidoActual(moduloAnterior.contenido.length - 1);
    }
  };

  const siguienteEjercicio = () => {
    if (modulo.ejercicios && ejercicioActual < modulo.ejercicios.length - 1) {
      setEjercicioActual(ejercicioActual + 1);
    } else {
      completarModulo();
    }
  };

  const completarModulo = () => {
    markModuleComplete(modulo.id);

    if (moduloActual < curso.modulos.length - 1) {
      setModuloActual(moduloActual + 1);
      setContenidoActual(0);
      setMostrarEjercicios(false);
      setEjercicioActual(0);
    } else {
      // Curso completado
      updateProgress({ completed: true, progress: 100 });
    }
  };

  const responderEjercicio = (respuesta: string | number) => {
    setRespuestasUsuario({
      ...respuestasUsuario,
      [ejercicio!.id]: respuesta
    });
  };

  const renderContenido = () => {
    if (!contenido) return null;

    // Función para procesar texto con markdown mejorado
    const procesarTexto = (texto: string) => {
      return texto
        .split('\n\n')
        .map(bloque => {
          bloque = bloque.trim();
          if (!bloque) return '';

          // Detectar citas
          if (bloque.match(/^[""]/) || (bloque.match(/^\*\*[""]/) && bloque.length < 200)) {
            const cita = bloque.replace(/^\*\*[""]/, '"').replace(/[""]?\*\*$/, '"').replace(/^[""]/, '').replace(/[""]$/, '');
            return `<blockquote class="border-l-4 border-ocean-500 bg-ocean-50 pl-6 pr-4 py-4 my-6 italic text-charcoal text-lg rounded-r-xl">
              "${cita}"
            </blockquote>`;
          }

          // Detectar títulos
          if (bloque.match(/^\*\*[^*]+(\*\*:|\*\*$)/) && bloque.length < 100) {
            const titulo = bloque.replace(/^\*\*/, '').replace(/\*\*:?$/, '').trim();
            return `<h3 class="text-xl font-display font-bold text-ocean-500 mt-8 mb-4 border-l-4 border-ocean-500 pl-4 py-1">${titulo}</h3>`;
          }

          // Detectar listas
          if (bloque.match(/^[-•]/m)) {
            const items = bloque.split('\n')
              .filter(item => item.trim())
              .map(item => {
                const contenido = item.replace(/^[-•]\s*/, '').trim();
                const procesado = contenido
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-sumi">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
                return `<li class="flex items-start gap-3 mb-3">
                  <span class="text-ocean-500 font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                  <span class="text-charcoal leading-relaxed flex-1">${procesado}</span>
                </li>`;
              })
              .join('');
            return `<ul class="my-5 space-y-1 pl-2">${items}</ul>`;
          }

          // Procesar párrafos normales
          const procesado = bloque
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-ocean-500">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="italic text-charcoal">$1</em>')
            .replace(/\n/g, '<br/>');

          return `<p class="mb-5 leading-relaxed text-charcoal text-base">${procesado}</p>`;
        })
        .filter(item => item)
        .join('');
    };

    switch (contenido.tipo) {
      case 'texto':
        return (
          <div className="prose prose-lg max-w-none">
            {contenido.titulo && (
              <H2 className="mb-6 pb-3 border-b-2 border-mist">
                {contenido.titulo}
              </H2>
            )}
            <div
              className="text-base"
              dangerouslySetInnerHTML={{ __html: procesarTexto(contenido.contenido) }}
            />
          </div>
        );

      case 'alerta':
        return (
          <div className="bg-gradient-to-r from-persimmon-50 to-sunset-50 border-l-4 border-persimmon p-6 my-6 rounded-r-xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">⚠️</div>
              <div className="flex-1">
                <H3 className="text-lg mb-3 text-persimmon">IMPORTANTE:</H3>
                <div
                  className="text-charcoal leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: procesarTexto(contenido.contenido) }}
                />
              </div>
            </div>
          </div>
        );

      case 'lista':
        return (
          <div className="my-6">
            {contenido.titulo && (
              <H3 className="mb-4 border-l-4 border-ocean-500 pl-4">{contenido.titulo}</H3>
            )}
            <ul className="space-y-3">
              {contenido.contenido.split('\n').filter((item: string) => item.trim()).map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal leading-relaxed">
                  <span className="text-ocean-500 font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: procesarTexto(item.replace(/^[•\-]\s*/, '')) }} />
                </li>
              ))}
            </ul>
          </div>
        );

      case 'codigo':
        return (
          <div className="my-6">
            {contenido.titulo && (
              <H3 className="mb-4 border-l-4 border-matcha-500 pl-4">{contenido.titulo}</H3>
            )}
            <div className="bg-washi border-2 border-mist rounded-xl p-5 font-mono text-sm overflow-x-auto shadow-sm">
              <pre className="whitespace-pre-wrap text-sumi leading-relaxed">{contenido.contenido}</pre>
            </div>
          </div>
        );

      default:
        return <Body color="secondary">{contenido.contenido}</Body>;
    }
  };

  const renderEjercicio = () => {
    if (!ejercicio) return null;

    const respuestaUsuario = respuestasUsuario[ejercicio.id];

    switch (ejercicio.tipo) {
      case 'quiz':
        return (
          <div className="space-y-6">
            <H3 className="text-xl">📝 Pregunta de Revisión</H3>
            <Body className="text-lg">{ejercicio.pregunta}</Body>

            <div className="space-y-3">
              {ejercicio.opciones?.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => responderEjercicio(index)}
                  className={`w-full text-left p-4 border-2 rounded-xl transition-all ${
                    respuestaUsuario === index
                      ? 'bg-ocean-50 border-ocean-500 shadow-md'
                      : 'hover:bg-cloud border-mist hover:border-ocean-300'
                  }`}
                >
                  <Body>
                    <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                    {opcion}
                  </Body>
                </button>
              ))}
            </div>

            {respuestaUsuario !== undefined && (
              <div className={`p-4 rounded-xl border-l-4 ${
                respuestaUsuario === ejercicio.respuestaCorrecta
                  ? 'bg-matcha-50 border-matcha-500'
                  : 'bg-persimmon-50 border-persimmon'
              }`}>
                <Body className="font-bold mb-2">
                  {respuestaUsuario === ejercicio.respuestaCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                </Body>
                <Body color="secondary" className="text-sm">{ejercicio.explicacion}</Body>
              </div>
            )}
          </div>
        );

      case 'practica':
        return (
          <div className="space-y-6">
            <H3 className="text-xl">🛠️ Ejercicio Práctico</H3>
            <Body className="text-lg">{ejercicio.pregunta}</Body>

            <textarea
              className="w-full h-32 p-4 border-2 border-mist rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200 transition-all"
              placeholder="Escribe tu respuesta aquí..."
              onChange={(e) => responderEjercicio(e.target.value)}
            />

            <div className="bg-ocean-50 border-l-4 border-ocean-500 p-4 rounded-r-xl">
              <Body className="font-bold text-ocean-700 mb-2">💡 Sugerencia:</Body>
              <Body color="secondary" className="text-sm">{ejercicio.explicacion}</Body>
            </div>
          </div>
        );

      case 'reflexion':
        return (
          <div className="space-y-6">
            <H3 className="text-xl">🤔 Reflexión</H3>
            <Body className="text-lg">{ejercicio.pregunta}</Body>

            <textarea
              className="w-full h-40 p-4 border-2 border-mist rounded-xl focus:border-matcha-500 focus:ring-2 focus:ring-matcha-200 transition-all"
              placeholder="Comparte tu reflexión..."
              onChange={(e) => responderEjercicio(e.target.value)}
            />

            <div className="bg-gold-50 border-l-4 border-gold p-4 rounded-r-xl">
              <Body className="font-bold text-gold mb-2">📝 Guía de reflexión:</Body>
              <Body color="secondary" className="text-sm">{ejercicio.explicacion}</Body>
            </div>
          </div>
        );
    }
  };

  if (progress.completed) {
    return (
      <div className="min-h-screen">
        {/* Hero de Completado */}
        <Hero
          variant="gradient"
          size="md"
          title="¡Curso Completado!"
          description="Has completado exitosamente el Nivel 1: Activista Digital Básico"
          badge={
            <Badge color="matcha" variant="solid" size="lg">
              🎓 Certificado Disponible
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

        {/* Contenido de completado */}
        <section className="py-16 bg-gradient-to-br from-matcha-50 via-cloud to-washi">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card variant="elevated" padding="xl" className="text-center">
                <div className="text-8xl mb-6">🎓</div>
                <H2 className="mb-4">¡Felicitaciones!</H2>
                <Body className="text-xl mb-8">
                  Has completado el {curso.titulo}
                </Body>

                <div className="bg-gradient-to-r from-matcha-50 to-cloud rounded-2xl p-6 border border-matcha-100 mb-8">
                  <H3 className="mb-4">🏆 Logros Desbloqueados</H3>
                  <ul className="space-y-2 text-left max-w-md mx-auto">
                    <li className="flex items-start gap-2">
                      <span className="text-matcha-500">✅</span>
                      <Body color="secondary">Conocimiento básico de derechos digitales</Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-matcha-500">✅</span>
                      <Body color="secondary">Herramientas fundamentales de seguridad</Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-matcha-500">✅</span>
                      <Body color="secondary">Red de organizaciones de apoyo</Body>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-matcha-500">✅</span>
                      <Body color="secondary">Fundamentos de autodefensa digital</Body>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-gradient-to-br from-ocean-50 to-cloud rounded-xl p-6 border border-ocean-100">
                    <div className="text-4xl mb-2">⏱️</div>
                    <Body className="font-bold mb-1">Tiempo invertido</Body>
                    <Body color="secondary">{Math.round(progress.timeSpent)} minutos</Body>
                  </div>
                  <div className="text-center bg-gradient-to-br from-sakura-50 to-cloud rounded-xl p-6 border border-sakura-100">
                    <div className="text-4xl mb-2">📚</div>
                    <Body className="font-bold mb-1">Módulos completados</Body>
                    <Body color="secondary">{progress.completedModules.length}/{curso.modulos.length}</Body>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button color="matcha" size="lg" onClick={() => setMostrarCertificado(true)}>
                    📜 Descargar Certificado
                  </Button>
                  <Link href="/herramientas">
                    <Button variant="outline" color="ocean" size="lg">
                      🛠️ Practicar Herramientas
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    color="lavender"
                    size="lg"
                    onClick={() => {
                      if (confirm('¿Estás seguro de que quieres reiniciar el curso? Perderás todo tu progreso actual.')) {
                        resetCourse();
                        setModuloActual(0);
                        setContenidoActual(0);
                        setMostrarEjercicios(false);
                        setEjercicioActual(0);
                      }
                    }}
                  >
                    🔄 Reiniciar Curso
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {mostrarCertificado && (
          <CertificadoGenerator
            nombreUsuario={`Activista Digital`}
            curso={curso.titulo}
            nivel={curso.nivel}
            fecha={new Date()}
            onClose={() => setMostrarCertificado(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Navegación */}
      <section className="py-6 bg-white border-b border-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/academia">
              <Button variant="ghost" color="ocean" size="sm">
                ← Volver a Academia
              </Button>
            </Link>
            <Badge color="ocean" variant="soft">
              {modulo?.titulo?.toUpperCase()}
            </Badge>
          </div>
        </div>
      </section>

      {/* Barra de progreso */}
      <section className="py-8 bg-gradient-to-br from-cloud to-washi">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="outlined" padding="lg">
            <div className="flex justify-between items-center mb-4">
              <H2 className="text-xl">{curso.titulo}</H2>
              <div className="text-right">
                <Body className="font-bold">Módulo {moduloActual + 1} de {curso.modulos.length}</Body>
                <Body color="secondary" className="text-sm">
                  {mostrarEjercicios ? 'Ejercicios' : `Contenido ${contenidoActual + 1}/${modulo?.contenido.length}`}
                </Body>
              </div>
            </div>

            <div className="w-full bg-cloud rounded-full h-4 mb-4 overflow-hidden border border-mist">
              <div
                className="bg-gradient-to-r from-ocean-500 to-ocean-400 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progress.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between">
              <Body color="secondary" className="text-sm">Progreso: {Math.round(progress.progress)}%</Body>
              <Body color="secondary" className="text-sm">
                Tiempo estimado restante: {curso.duracionTotal - progress.timeSpent} min
              </Body>
            </div>
          </Card>
        </div>
      </section>

      {/* Contenido del módulo */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card variant="elevated" padding="xl">
              {!mostrarEjercicios ? (
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-mist">
                    <div className="text-4xl">📖</div>
                    <div>
                      <H2 className="text-xl">{modulo?.titulo}</H2>
                      <Body color="secondary">{modulo?.descripcion}</Body>
                    </div>
                  </div>

                  {renderContenido()}
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-mist">
                    <div className="text-4xl">✏️</div>
                    <div>
                      <H2 className="text-xl">Ejercicios - {modulo?.titulo}</H2>
                      <Body color="secondary">
                        Ejercicio {ejercicioActual + 1} de {modulo?.ejercicios?.length}
                      </Body>
                    </div>
                  </div>

                  {renderEjercicio()}
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Navegación y recursos */}
      <section className="py-8 bg-gradient-to-br from-cloud to-washi">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="outlined" padding="lg">
            <div className="flex justify-between items-center">
              <Button
                onClick={anteriorContenido}
                variant="outline"
                color="ocean"
                disabled={moduloActual === 0 && contenidoActual === 0 && !mostrarEjercicios}
              >
                ← Anterior
              </Button>

              <div className="flex gap-4">
                {modulo?.recursos && modulo.recursos.length > 0 && (
                  <Button
                    variant="outline"
                    color="matcha"
                    size="sm"
                    onClick={() => setMostrarRecursos(true)}
                  >
                    📚 Recursos ({modulo.recursos.length})
                  </Button>
                )}
              </div>

              <Button
                onClick={mostrarEjercicios ? siguienteEjercicio : siguienteContenido}
                color="ocean"
                disabled={mostrarEjercicios && ejercicio?.tipo === 'quiz' && respuestasUsuario[ejercicio.id] === undefined}
              >
                {moduloActual === curso.modulos.length - 1 &&
                 (mostrarEjercicios ? ejercicioActual === (modulo?.ejercicios?.length || 1) - 1 : contenidoActual === modulo.contenido.length - 1)
                  ? 'Completar Curso'
                  : 'Siguiente →'
                }
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Modal de Recursos */}
      {mostrarRecursos && modulo?.recursos && (
        <div
          className="fixed inset-0 bg-sumi/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setMostrarRecursos(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white max-w-2xl w-full max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border-4 border-ocean-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-ocean-500 to-ocean-400 text-white p-6 shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <H2 className="text-white mb-2">📚 Recursos del Módulo</H2>
                  <Body className="text-white/90">{modulo.titulo}</Body>
                </div>
                <button
                  onClick={() => setMostrarRecursos(false)}
                  className="text-4xl hover:scale-110 transition-transform leading-none bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(85vh-180px)]">
              {modulo.recursos.map((recurso, index) => (
                <Card key={index} variant="outlined" padding="md" hoverable>
                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-50 p-3 rounded-xl flex-shrink-0 border-2 border-ocean-100">
                      <span className="text-3xl">
                        {recurso.tipo === 'herramienta' ? '🛠️' : recurso.tipo === 'descarga' ? '📥' : '🔗'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <H3 className="text-lg mb-2">{recurso.titulo}</H3>
                      <Body color="secondary" className="text-sm mb-4 leading-relaxed">
                        {recurso.descripcion}
                      </Body>
                      <a
                        href={recurso.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button color="ocean" size="sm">
                          {recurso.tipo === 'herramienta' ? 'Usar Herramienta' : recurso.tipo === 'descarga' ? 'Descargar' : 'Visitar Sitio'} →
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-cloud border-t-2 border-mist p-4 text-center">
              <Button
                variant="outline"
                color="ocean"
                onClick={() => setMostrarRecursos(false)}
              >
                Cerrar
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
