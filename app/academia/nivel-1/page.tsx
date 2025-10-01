'use client';

import { useState, useEffect } from 'react';
import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import { CertificadoGenerator } from '@/shared/ui/CertificadoGenerator';
import Link from 'next/link';
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
  const [mostrarProgramaAcademico, setMostrarProgramaAcademico] = useState(false);
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
        .split('\n\n') // Primero separar por bloques
        .map(bloque => {
          bloque = bloque.trim();
          if (!bloque) return '';

          // Detectar citas (comienzan con comillas)
          if (bloque.match(/^[""]/) || (bloque.match(/^\*\*[""]/) && bloque.length < 200)) {
            const cita = bloque.replace(/^\*\*[""]/, '"').replace(/[""]?\*\*$/, '"').replace(/^[""]/, '').replace(/[""]$/, '');
            return `<blockquote class="border-l-4 border-azul-info bg-azul-info/5 pl-6 pr-4 py-4 my-6 italic text-tinta-oficial text-lg">
              "${cita}"
            </blockquote>`;
          }

          // Detectar títulos (comienza con ** y termina con : o **)
          if (bloque.match(/^\*\*[^*]+(\*\*:|\*\*$)/) && bloque.length < 100) {
            const titulo = bloque.replace(/^\*\*/, '').replace(/\*\*:?$/, '').trim();
            return `<h3 class="text-xl font-bold typewriter text-sello-rojo mt-8 mb-4 border-l-4 border-sello-rojo pl-4 py-1">${titulo}</h3>`;
          }

          // Detectar listas (líneas que empiezan con - o •)
          if (bloque.match(/^[-•]/m)) {
            const items = bloque.split('\n')
              .filter(item => item.trim())
              .map(item => {
                const contenido = item.replace(/^[-•]\s*/, '').trim();
                const procesado = contenido
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-tinta-oficial">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
                return `<li class="flex items-start gap-3 mb-3">
                  <span class="text-sello-rojo font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                  <span class="text-tinta-oficial leading-relaxed flex-1">${procesado}</span>
                </li>`;
              })
              .join('');
            return `<ul class="my-5 space-y-1 pl-2">${items}</ul>`;
          }

          // Procesar párrafos normales
          const procesado = bloque
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-sello-rojo">$1</strong>') // Negritas importantes
            .replace(/\*(.*?)\*/g, '<em class="italic text-tinta-suave">$1</em>') // Cursivas
            .replace(/\n/g, '<br/>'); // Saltos de línea simples

          return `<p class="mb-5 leading-relaxed text-tinta-oficial text-base">${procesado}</p>`;
        })
        .filter(item => item) // Eliminar strings vacíos
        .join('');
    };

    switch (contenido.tipo) {
      case 'texto':
        return (
          <div className="prose prose-lg max-w-none">
            {contenido.titulo && (
              <h2 className="text-2xl font-bold mb-6 typewriter text-sello-rojo border-b-2 border-papel-border pb-3">
                {contenido.titulo}
              </h2>
            )}
            <div
              className="text-base"
              dangerouslySetInnerHTML={{ __html: procesarTexto(contenido.contenido) }}
            />
          </div>
        );

      case 'alerta':
        return (
          <div className="bg-gradient-to-r from-red-50 to-red-100/30 border-l-4 border-sello-rojo p-6 my-6 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">⚠️</div>
              <div className="flex-1">
                <p className="font-bold text-sello-rojo mb-3 text-lg typewriter">IMPORTANTE:</p>
                <div
                  className="text-tinta-oficial leading-relaxed"
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
              <h3 className="text-xl font-bold mb-4 typewriter text-tinta-oficial border-l-4 border-sello-rojo pl-4">{contenido.titulo}</h3>
            )}
            <ul className="space-y-3">
              {contenido.contenido.split('\n').filter((item: string) => item.trim()).map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-tinta-oficial leading-relaxed">
                  <span className="text-sello-rojo font-bold text-lg mt-0.5 flex-shrink-0">•</span>
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
              <h3 className="text-xl font-bold mb-4 typewriter text-tinta-oficial border-l-4 border-azul-info pl-4">{contenido.titulo}</h3>
            )}
            <div className="bg-papel-base border-2 border-papel-border rounded-lg p-5 font-mono text-sm overflow-x-auto shadow-sm">
              <pre className="whitespace-pre-wrap text-tinta-oficial leading-relaxed">{contenido.contenido}</pre>
            </div>
          </div>
        );

      default:
        return <p className="text-gray-700">{contenido.contenido}</p>;
    }
  };

  const renderEjercicio = () => {
    if (!ejercicio) return null;

    const respuestaUsuario = respuestasUsuario[ejercicio.id];

    switch (ejercicio.tipo) {
      case 'quiz':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold typewriter mb-4">📝 PREGUNTA DE REVISIÓN</h3>
            <p className="text-lg font-medium">{ejercicio.pregunta}</p>
            
            <div className="space-y-3">
              {ejercicio.opciones?.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => responderEjercicio(index)}
                  className={`w-full text-left p-4 border rounded-lg transition-colors ${
                    respuestaUsuario === index 
                      ? 'bg-blue-100 border-blue-500' 
                      : 'hover:bg-gray-50 border-gray-300'
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {opcion}
                </button>
              ))}
            </div>

            {respuestaUsuario !== undefined && (
              <div className={`p-4 rounded-lg border-l-4 ${
                respuestaUsuario === ejercicio.respuestaCorrecta
                  ? 'bg-green-50 border-green-500'
                  : 'bg-red-50 border-red-500'
              }`}>
                <p className="font-bold mb-2">
                  {respuestaUsuario === ejercicio.respuestaCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                </p>
                <p className="text-sm">{ejercicio.explicacion}</p>
              </div>
            )}
          </div>
        );

      case 'practica':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold typewriter mb-4">🛠️ EJERCICIO PRÁCTICO</h3>
            <p className="text-lg font-medium">{ejercicio.pregunta}</p>
            
            <textarea
              className="w-full h-32 p-4 border rounded-lg"
              placeholder="Escribe tu respuesta aquí..."
              onChange={(e) => responderEjercicio(e.target.value)}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="font-bold text-blue-800 mb-2">💡 Sugerencia:</p>
              <p className="text-blue-700 text-sm">{ejercicio.explicacion}</p>
            </div>
          </div>
        );

      case 'reflexion':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold typewriter mb-4">🤔 REFLEXIÓN</h3>
            <p className="text-lg font-medium">{ejercicio.pregunta}</p>
            
            <textarea
              className="w-full h-40 p-4 border rounded-lg"
              placeholder="Comparte tu reflexión..."
              onChange={(e) => responderEjercicio(e.target.value)}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="font-bold text-yellow-800 mb-2">📝 Guía de reflexión:</p>
              <p className="text-yellow-700 text-sm">{ejercicio.explicacion}</p>
            </div>
          </div>
        );
    }
  };

  if (progress.completed) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <header className="max-w-7xl mx-auto mb-12">
          <Link href="/academia" className="flex items-center gap-4">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / ACADEMIA / NIVEL 1 / COMPLETADO
            </span>
          </Link>
        </header>

        <main className="max-w-4xl mx-auto">
          <ExpedienteCard variant="default">
            <div className="text-center">
              <div className="text-8xl mb-6">🎓</div>
              <h1 className="text-3xl font-bold typewriter mb-4">
                ¡CURSO COMPLETADO!
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                Activista Digital Básico - Nivel 1
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 text-left">
                <h3 className="font-bold text-green-800 mb-4">🏆 LOGROS DESBLOQUEADOS:</h3>
                <ul className="space-y-2 text-green-700">
                  <li>✅ Conocimiento básico de derechos digitales</li>
                  <li>✅ Herramientas fundamentales de seguridad</li>
                  <li>✅ Red de organizaciones de apoyo</li>
                  <li>✅ Fundamentos de autodefensa digital</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">⏱️</div>
                  <p className="font-bold">Tiempo invertido</p>
                  <p className="text-gray-600">{Math.round(progress.timeSpent)} minutos</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="font-bold">Módulos completados</p>
                  <p className="text-gray-600">{progress.completedModules.length}/{curso.modulos.length}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SelloAccion size="lg" onClick={() => setMostrarCertificado(true)}>
                  📜 DESCARGAR CERTIFICADO
                </SelloAccion>
                <Link href="/herramientas">
                  <SelloAccion variant="secondary" size="lg">
                    🛠️ PRACTICAR HERRAMIENTAS
                  </SelloAccion>
                </Link>
                <SelloAccion
                  variant="secondary"
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
                  🔄 REINICIAR CURSO
                </SelloAccion>
              </div>
            </div>
          </ExpedienteCard>
        </main>
        
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
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <Link href="/academia" className="flex items-center gap-4">
          <Stamp>ANTIMANUAL</Stamp>
          <span className="typewriter text-sm text-gray-600">
            / ACADEMIA / NIVEL 1 / {modulo?.titulo.toUpperCase()}
          </span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Barra de progreso */}
        <section className="mb-8">
          <ExpedienteCard>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold typewriter">
                {curso.titulo}
              </h1>
              <div className="text-right text-sm">
                <div>Módulo {moduloActual + 1} de {curso.modulos.length}</div>
                <div className="text-gray-600">
                  {mostrarEjercicios ? 'Ejercicios' : `Contenido ${contenidoActual + 1}/${modulo?.contenido.length}`}
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-red-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress.progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Progreso: {Math.round(progress.progress)}%</span>
              <span>Tiempo estimado restante: {curso.duracionTotal - progress.timeSpent} min</span>
            </div>
          </ExpedienteCard>
        </section>

        {/* Contenido del módulo */}
        <section className="mb-8">
          <ExpedienteCard variant="default">
            {!mostrarEjercicios ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">📖</div>
                  <div>
                    <h2 className="text-2xl font-bold typewriter">{modulo?.titulo}</h2>
                    <p className="text-gray-600">{modulo?.descripcion}</p>
                  </div>
                </div>
                
                {renderContenido()}
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">✏️</div>
                  <div>
                    <h2 className="text-2xl font-bold typewriter">Ejercicios - {modulo?.titulo}</h2>
                    <p className="text-gray-600">
                      Ejercicio {ejercicioActual + 1} de {modulo?.ejercicios?.length}
                    </p>
                  </div>
                </div>
                
                {renderEjercicio()}
              </div>
            )}
          </ExpedienteCard>
        </section>

        {/* Navegación */}
        <section>
          <ExpedienteCard>
            <div className="flex justify-between items-center">
              <SelloAccion
                onClick={anteriorContenido}
                variant="secondary"
                disabled={moduloActual === 0 && contenidoActual === 0 && !mostrarEjercicios}
              >
                ← Anterior
              </SelloAccion>

              <div className="flex gap-4">
                {modulo?.recursos && modulo.recursos.length > 0 && (
                  <SelloAccion
                    variant="secondary"
                    size="sm"
                    onClick={() => setMostrarRecursos(true)}
                  >
                    📚 RECURSOS ({modulo.recursos.length})
                  </SelloAccion>
                )}
                <SelloAccion
                  variant="secondary"
                  size="sm"
                  onClick={() => setMostrarProgramaAcademico(true)}
                >
                  📋 PROGRAMA ACADÉMICO
                </SelloAccion>
              </div>

              <SelloAccion
                onClick={mostrarEjercicios ? siguienteEjercicio : siguienteContenido}
                disabled={mostrarEjercicios && ejercicio?.tipo === 'quiz' && respuestasUsuario[ejercicio.id] === undefined}
              >
                {moduloActual === curso.modulos.length - 1 && 
                 (mostrarEjercicios ? ejercicioActual === (modulo?.ejercicios?.length || 1) - 1 : contenidoActual === modulo.contenido.length - 1)
                  ? 'Completar Curso'
                  : 'Siguiente →'
                }
              </SelloAccion>
            </div>
          </ExpedienteCard>
        </section>
      </main>

      {/* Modal de Recursos */}
      {mostrarRecursos && modulo?.recursos && (
        <div
          className="fixed inset-0 bg-papel-oscuro z-50 flex items-center justify-center p-4"
          onClick={() => setMostrarRecursos(false)}
        >
          <div
            className="bg-papel-base max-w-2xl w-full max-h-[85vh] overflow-hidden rounded-xl shadow-2xl border-4 border-dorado-claro"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con colores del tema */}
            <div className="bg-sello-rojo text-papel-base p-6 shadow-lg border-b-4 border-sello-urgent">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold typewriter flex items-center gap-2">
                    📚 RECURSOS DEL MÓDULO
                  </h2>
                  <p className="text-sm mt-2 typewriter opacity-90">{modulo.titulo}</p>
                </div>
                <button
                  onClick={() => setMostrarRecursos(false)}
                  className="text-4xl hover:scale-110 transition-transform leading-none bg-papel-base/20 hover:bg-papel-base/30 rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Contenido con scroll */}
            <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(85vh-180px)]">
              {modulo.recursos.map((recurso, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-papel-border rounded-lg p-5 hover:border-azul-info hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-azul-info/10 p-3 rounded-lg flex-shrink-0 border-2 border-azul-info/20">
                      <span className="text-3xl">
                        {recurso.tipo === 'herramienta' ? '🛠️' : recurso.tipo === 'descarga' ? '📥' : '🔗'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold typewriter text-lg text-tinta-oficial mb-2">{recurso.titulo}</h3>
                      <p className="text-sm text-tinta-suave mb-4 leading-relaxed">{recurso.descripcion}</p>
                      <a
                        href={recurso.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-azul-info text-papel-base px-5 py-2.5 rounded-lg text-sm typewriter hover:bg-blue-700 hover:shadow-lg transition-all font-bold border-2 border-blue-700"
                      >
                        {recurso.tipo === 'herramienta' ? 'USAR HERRAMIENTA' : recurso.tipo === 'descarga' ? 'DESCARGAR' : 'VISITAR SITIO'} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer con colores del tema */}
            <div className="bg-papel-sombra border-t-2 border-papel-border p-4 text-center">
              <button
                onClick={() => setMostrarRecursos(false)}
                className="bg-tinta-oficial text-papel-base px-8 py-2.5 rounded-lg typewriter hover:bg-tinta-suave transition-colors font-bold border-2 border-tinta-oficial"
              >
                CERRAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Programa Académico */}
      {mostrarProgramaAcademico && (
        <div
          className="fixed inset-0 bg-papel-oscuro z-50 flex items-center justify-center p-4"
          onClick={() => setMostrarProgramaAcademico(false)}
        >
          <div
            className="bg-papel-base max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl border-4 border-dorado-claro"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con colores del tema */}
            <div className="bg-azul-info text-papel-base p-6 shadow-lg border-b-4 border-blue-700">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold typewriter">
                    📋 PROGRAMA ACADÉMICO COMPLETO
                  </h2>
                  <p className="text-sm mt-2 typewriter opacity-90">NIVEL 1: ACTIVISTA DIGITAL BÁSICO</p>
                </div>
                <button
                  onClick={() => setMostrarProgramaAcademico(false)}
                  className="text-4xl hover:scale-110 transition-transform leading-none bg-papel-base/20 hover:bg-papel-base/30 rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Contenido con scroll */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {/* Información general */}
              <div className="bg-naranja-pendiente/10 border-l-4 border-naranja-pendiente p-5 rounded-r-lg shadow-sm">
                <h3 className="font-bold typewriter mb-3 text-tinta-oficial text-lg">📋 INFORMACIÓN GENERAL</h3>
                <ul className="text-sm space-y-2 text-tinta-suave">
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[130px] text-tinta-oficial">Duración total:</span>
                    <span>{curso.duracionTotal} minutos ({Math.round(curso.duracionTotal / 60)} horas)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[130px] text-tinta-oficial">Módulos:</span>
                    <span>{curso.modulos.length}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[130px] text-tinta-oficial">Módulo actual:</span>
                    <span>{moduloActual + 1}/{curso.modulos.length}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-bold min-w-[130px] text-tinta-oficial">Progreso:</span>
                    <span className="text-azul-info font-bold">{Math.round(progress.progress)}%</span>
                  </li>
                </ul>
              </div>

              {/* Módulos */}
              <div>
                <h3 className="font-bold typewriter mb-4 text-xl text-tinta-oficial">📚 CONTENIDO DEL CURSO</h3>
                <div className="space-y-4">
                  {curso.modulos.map((mod, idx) => (
                    <div
                      key={mod.id}
                      className={`border-2 rounded-xl p-5 shadow-sm transition-all ${
                        idx === moduloActual
                          ? 'border-azul-info bg-azul-info/5 shadow-md'
                          : progress.completedModules.includes(mod.id)
                          ? 'border-verde-aprobado bg-verde-aprobado/5'
                          : 'border-papel-border bg-white hover:border-papel-border'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 shadow-sm ${
                            idx === moduloActual
                              ? 'bg-azul-info text-papel-base'
                              : progress.completedModules.includes(mod.id)
                              ? 'bg-verde-aprobado text-papel-base'
                              : 'bg-papel-sombra text-tinta-oficial'
                          }`}
                        >
                          {progress.completedModules.includes(mod.id) ? '✓' : idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold typewriter text-base mb-1 text-tinta-oficial">
                            {mod.titulo}
                            {idx === moduloActual && (
                              <span className="ml-2 bg-azul-info text-papel-base px-2 py-0.5 rounded text-xs">ACTUAL</span>
                            )}
                          </h4>
                          <p className="text-sm text-tinta-suave mb-3 leading-relaxed">{mod.descripcion}</p>
                          <div className="flex flex-wrap gap-3 text-xs text-tinta-clara">
                            <span className="bg-papel-base px-2 py-1 rounded border border-papel-border">⏱️ {mod.duracion} min</span>
                            <span className="bg-papel-base px-2 py-1 rounded border border-papel-border">📄 {mod.contenido.length} temas</span>
                            {mod.ejercicios && <span className="bg-papel-base px-2 py-1 rounded border border-papel-border">✍️ {mod.ejercicios.length} ejercicios</span>}
                            {mod.recursos && <span className="bg-papel-base px-2 py-1 rounded border border-papel-border">🔗 {mod.recursos.length} recursos</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objetivos */}
              <div className="bg-verde-aprobado/10 border-l-4 border-verde-aprobado p-5 rounded-r-lg shadow-sm">
                <h3 className="font-bold typewriter mb-3 text-tinta-oficial text-lg">🎯 OBJETIVOS DE APRENDIZAJE</h3>
                <ul className="space-y-2.5 text-sm">
                  {curso.objetivos.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-tinta-suave">
                      <span className="text-verde-aprobado text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-papel-sombra border-t-2 border-papel-border p-5 text-center">
              <button
                onClick={() => setMostrarProgramaAcademico(false)}
                className="bg-azul-info text-papel-base px-8 py-3 rounded-lg typewriter hover:bg-blue-700 hover:shadow-lg transition-all font-bold border-2 border-blue-700"
              >
                CONTINUAR APRENDIENDO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}