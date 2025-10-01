'use client';

import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';
import { cursoNivel1 } from '@/shared/data/cursos';
import { useCourseProgress } from '@/shared/hooks/useLocalStorage';

export default function ProgramaAcademicoPage() {
  const { progress } = useCourseProgress('nivel-1');
  const curso = cursoNivel1;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <Link href="/academia" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <Stamp>ANTIMANUAL</Stamp>
          <span className="typewriter text-sm text-tinta-suave">
            / ACADEMIA / PROGRAMA ACADÉMICO
          </span>
        </Link>
      </header>

      <main className="max-w-5xl mx-auto">
        {/* Encabezado principal */}
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <div className="border-b-2 border-papel-border pb-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <Stamp className="text-xs bg-sello-rojo text-white">OFICIAL</Stamp>
                <p className="texto-pequeno">DNA-2024-PROG-001</p>
              </div>
              <h1 className="text-4xl font-bold typewriter text-sello-rojo mb-4">
                📋 PROGRAMA ACADÉMICO COMPLETO
              </h1>
              <p className="text-xl typewriter mb-2">NIVEL 1: ACTIVISTA DIGITAL BÁSICO</p>
              <p className="texto-oficial">
                Programa de formación integral en seguridad digital y defensa de derechos digitales
              </p>
            </div>

            {/* Información general */}
            <div className="bg-naranja-pendiente/10 border-l-4 border-naranja-pendiente p-6 rounded-r-lg mb-6">
              <h2 className="font-bold typewriter mb-4 text-tinta-oficial text-xl">📋 INFORMACIÓN GENERAL</h2>
              <div className="grid md:grid-cols-2 gap-4 text-tinta-suave">
                <div>
                  <p className="font-bold text-tinta-oficial mb-1">Duración total:</p>
                  <p>{curso.duracionTotal} minutos ({Math.round(curso.duracionTotal / 60)} horas)</p>
                </div>
                <div>
                  <p className="font-bold text-tinta-oficial mb-1">Módulos:</p>
                  <p>{curso.modulos.length}</p>
                </div>
                <div>
                  <p className="font-bold text-tinta-oficial mb-1">Modalidad:</p>
                  <p>Auto-dirigido, progreso guardado localmente</p>
                </div>
                <div>
                  <p className="font-bold text-tinta-oficial mb-1">Certificado:</p>
                  <p>Al completar todos los módulos</p>
                </div>
              </div>

              {progress.started && (
                <div className="mt-4 pt-4 border-t border-naranja-pendiente">
                  <p className="font-bold text-tinta-oficial mb-1">Tu progreso actual:</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="w-full bg-papel-sombra rounded-full h-3">
                        <div
                          className="bg-azul-info h-3 rounded-full transition-all"
                          style={{ width: `${progress.progress}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-azul-info font-bold">{Math.round(progress.progress)}%</span>
                  </div>
                </div>
              )}
            </div>
          </ExpedienteCard>
        </section>

        {/* Contenido del curso */}
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <h2 className="font-bold typewriter mb-6 text-2xl text-tinta-oficial border-b-2 border-papel-border pb-4">
              📚 CONTENIDO DEL CURSO
            </h2>

            <div className="space-y-6">
              {curso.modulos.map((modulo, idx) => (
                <div
                  key={modulo.id}
                  className={`border-2 rounded-xl p-6 transition-all ${
                    progress.currentModule === idx
                      ? 'border-azul-info bg-azul-info/5 shadow-md'
                      : progress.completedModules.includes(modulo.id)
                      ? 'border-verde-aprobado bg-verde-aprobado/5'
                      : 'border-papel-border bg-white hover:border-papel-border hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`rounded-full w-14 h-14 flex items-center justify-center font-bold flex-shrink-0 shadow-sm text-lg ${
                        progress.currentModule === idx
                          ? 'bg-azul-info text-papel-base'
                          : progress.completedModules.includes(modulo.id)
                          ? 'bg-verde-aprobado text-papel-base'
                          : 'bg-papel-sombra text-tinta-oficial'
                      }`}
                    >
                      {progress.completedModules.includes(modulo.id) ? '✓' : idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold typewriter text-xl mb-2 text-tinta-oficial">
                        {modulo.titulo}
                        {progress.currentModule === idx && (
                          <span className="ml-3 bg-azul-info text-papel-base px-3 py-1 rounded text-sm">EN CURSO</span>
                        )}
                        {progress.completedModules.includes(modulo.id) && (
                          <span className="ml-3 bg-verde-aprobado text-papel-base px-3 py-1 rounded text-sm">COMPLETADO</span>
                        )}
                      </h3>
                      <p className="text-tinta-suave mb-3 leading-relaxed">{modulo.descripcion}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-papel-base px-3 py-1 rounded border border-papel-border text-tinta-clara">
                          ⏱️ {modulo.duracion} minutos
                        </span>
                        <span className="bg-papel-base px-3 py-1 rounded border border-papel-border text-tinta-clara">
                          📄 {modulo.contenido.length} temas
                        </span>
                        {modulo.ejercicios && (
                          <span className="bg-papel-base px-3 py-1 rounded border border-papel-border text-tinta-clara">
                            ✍️ {modulo.ejercicios.length} ejercicios
                          </span>
                        )}
                        {modulo.recursos && (
                          <span className="bg-papel-base px-3 py-1 rounded border border-papel-border text-tinta-clara">
                            🔗 {modulo.recursos.length} recursos
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Temas del módulo */}
                  <div className="ml-18 pl-6 border-l-2 border-papel-border">
                    <p className="font-bold text-tinta-oficial mb-3 text-sm">Temas cubiertos:</p>
                    <ul className="space-y-2">
                      {modulo.contenido.slice(0, 5).map((contenido, contIdx) => (
                        <li key={contIdx} className="flex items-start gap-2 text-sm text-tinta-suave">
                          <span className="text-azul-info mt-1">•</span>
                          <span>{contenido.titulo || 'Contenido educativo'}</span>
                        </li>
                      ))}
                      {modulo.contenido.length > 5 && (
                        <li className="text-tinta-clara italic text-sm pl-4">
                          + {modulo.contenido.length - 5} temas más...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ExpedienteCard>
        </section>

        {/* Objetivos de aprendizaje */}
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <div className="bg-verde-aprobado/10 border-l-4 border-verde-aprobado p-6 rounded-r-lg">
              <h2 className="font-bold typewriter mb-4 text-tinta-oficial text-xl">🎯 OBJETIVOS DE APRENDIZAJE</h2>
              <ul className="space-y-3">
                {curso.objetivos.map((objetivo, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-tinta-suave">
                    <span className="text-verde-aprobado text-xl mt-0.5 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{objetivo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ExpedienteCard>
        </section>

        {/* Acciones */}
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <div className="text-center py-6">
              <p className="text-tinta-oficial mb-6 text-lg">
                ¿Listo para comenzar tu formación como activista digital?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/academia/nivel-1">
                  <SelloAccion
                    variant="stamp"
                    size="lg"
                    className="bg-sello-rojo text-white border-2 border-sello-rojo"
                  >
                    🎓 {progress.started ? 'CONTINUAR CURSO' : 'COMENZAR NIVEL 1'}
                  </SelloAccion>
                </Link>
                <Link href="/academia">
                  <SelloAccion
                    variant="secondary"
                    size="lg"
                    className="bg-papel-sombra text-tinta-oficial border-2 border-papel-border"
                  >
                    ← VOLVER A ACADEMIA
                  </SelloAccion>
                </Link>
              </div>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}
