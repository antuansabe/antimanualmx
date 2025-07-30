'use client';

import { useState, useEffect } from 'react';
import { Button, PaperContainer, Stamp } from '@/shared/ui';
import Link from 'next/link';
import { cursoNivel1 } from '@/shared/data/cursos';
import { useCourseProgress } from '@/shared/hooks/useLocalStorage';

export default function Nivel1Page() {
  const { progress, startCourse, markModuleComplete, updateProgress } = useCourseProgress('nivel-1');
  const [moduloActual, setModuloActual] = useState(0);
  const [contenidoActual, setContenidoActual] = useState(0);
  const [mostrarEjercicios, setMostrarEjercicios] = useState(false);
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [respuestasUsuario, setRespuestasUsuario] = useState<{[key: string]: string | number}>({});

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

    switch (contenido.tipo) {
      case 'texto':
        return (
          <div className="prose prose-lg max-w-none">
            {contenido.titulo && (
              <h2 className="text-2xl font-bold mb-4 typewriter text-red-700">
                {contenido.titulo}
              </h2>
            )}
            <div 
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: contenido.contenido.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />
          </div>
        );

      case 'alerta':
        return (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
            <div className="flex items-start">
              <div className="text-2xl mr-3">⚠️</div>
              <div>
                <p className="font-bold text-red-800 mb-2">IMPORTANTE:</p>
                <p className="text-red-700">{contenido.contenido}</p>
              </div>
            </div>
          </div>
        );

      case 'lista':
        return (
          <div className="my-6">
            {contenido.titulo && (
              <h3 className="text-xl font-bold mb-4 typewriter">{contenido.titulo}</h3>
            )}
            <div 
              className="space-y-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: contenido.contenido.replace(/•/g, '<div class="flex items-start gap-2"><span class="text-red-600 mt-1">•</span><span>').replace(/\n/g, '</span></div>') + '</span></div>' }}
            />
          </div>
        );

      case 'codigo':
        return (
          <div className="my-6">
            {contenido.titulo && (
              <h3 className="text-xl font-bold mb-4 typewriter">{contenido.titulo}</h3>
            )}
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">{contenido.contenido}</pre>
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
          <PaperContainer aged>
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
                <Button size="lg">
                  📜 DESCARGAR CERTIFICADO
                </Button>
                <Link href="/academia">
                  <Button variant="secondary" size="lg">
                    📈 CONTINUAR AL NIVEL 2
                  </Button>
                </Link>
                <Link href="/herramientas">
                  <Button variant="secondary" size="lg">
                    🛠️ PRACTICAR HERRAMIENTAS
                  </Button>
                </Link>
              </div>
            </div>
          </PaperContainer>
        </main>
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
          <PaperContainer>
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
          </PaperContainer>
        </section>

        {/* Contenido del módulo */}
        <section className="mb-8">
          <PaperContainer aged>
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
          </PaperContainer>
        </section>

        {/* Navegación */}
        <section>
          <PaperContainer>
            <div className="flex justify-between items-center">
              <Button
                onClick={anteriorContenido}
                variant="secondary"
                disabled={moduloActual === 0 && contenidoActual === 0 && !mostrarEjercicios}
              >
                ← Anterior
              </Button>

              <div className="flex gap-4">
                {modulo?.recursos && modulo.recursos.length > 0 && (
                  <details className="relative">
                    <summary className="cursor-pointer">
                      <Button variant="secondary" size="sm">
                        📚 Recursos ({modulo.recursos.length})
                      </Button>
                    </summary>
                    <div className="absolute right-0 top-full mt-2 w-80 bg-white border rounded-lg shadow-lg p-4 z-10">
                      <h4 className="font-bold mb-3">Recursos adicionales:</h4>
                      <div className="space-y-2">
                        {modulo.recursos.map((recurso, index) => (
                          <a
                            key={index}
                            href={recurso.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-gray-50 rounded text-sm"
                          >
                            <div className="font-medium">{recurso.titulo}</div>
                            <div className="text-gray-600 text-xs">{recurso.descripcion}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </details>
                )}
              </div>

              <Button
                onClick={mostrarEjercicios ? siguienteEjercicio : siguienteContenido}
                disabled={mostrarEjercicios && ejercicio?.tipo === 'quiz' && respuestasUsuario[ejercicio.id] === undefined}
              >
                {moduloActual === curso.modulos.length - 1 && 
                 (mostrarEjercicios ? ejercicioActual === (modulo?.ejercicios?.length || 1) - 1 : contenidoActual === modulo.contenido.length - 1)
                  ? 'Completar Curso'
                  : 'Siguiente →'
                }
              </Button>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}