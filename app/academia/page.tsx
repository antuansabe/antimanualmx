'use client';

import { useState } from 'react';
import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';
import { cursoNivel1 } from '@/shared/data/cursos';

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
    revision: '2024.1'
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
    revision: '2024.2'
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
    revision: '2024.3'
  }
];

const metricas = {
  estudiantes: 247,
  certificaciones: 89,
  organizaciones: 12,
  efectividad: 94
};

export default function AcademiaPage() {
  const [mostrarPrograma, setMostrarPrograma] = useState(false);
  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen">
      <div className="academia-page-container py-8 md:py-12">
        {/* Portada del manual técnico */}
        <section className="mb-12">
          <div className="academia-card-unified">
            {/* Encabezado institucional */}
            <div className="academia-card-header">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="texto-pequeno mb-1" style={{color: '#A16207'}}>ANTIMANUAL • RESISTENCIA DIGITAL</p>
                  <p className="texto-pequeno" style={{color: '#A16207'}}>INSTITUTO CIUDADANO DE CAPACITACIÓN</p>
                </div>
                <div className="text-right">
                  <Stamp className="text-xs bg-sello-rojo text-white transform -rotate-2 mb-2">CERTIFICADO</Stamp>
                  <p className="texto-pequeno">Manual: INCD-{new Date().getFullYear()}-CAP-001</p>
                  <p className="texto-pequeno">Revisión: {currentDate}</p>
                </div>
              </div>
            </div>
            
            {/* Contenido principal */}
            <div className="academia-card-content">
              <div className="text-center mb-8">
                <h1 className="academia-title-main typewriter font-bold" style={{color: '#B91C1C'}}>
                  ACADEMIA ANTIMANUAL
                </h1>
                <div className="inline-block border-4 border-double border-sello-rojo px-6 py-2 mb-4 bg-papel-sombra">
                  <p className="text-lg md:text-xl font-bold tracking-widest typewriter" style={{color: '#B91C1C'}}>
                    INSTITUTO CIUDADANO DE CAPACITACIÓN
                  </p>
                </div>
                <p className="academia-title-sub texto-pequeno">
                  PROGRAMA DE FORMACIÓN EN ACTIVISMO DIGITAL • VERSIÓN 2024.1
                </p>
              </div>

              {/* Objetivos del manual */}
              <div className="space-y-6 texto-oficial leading-relaxed">
                <div className="pl-8 border-l-4 border-dorado">
                  <p className="mb-4">
                    <span className="typewriter-bold text-sm">OBJETIVO GENERAL:</span> Formar activistas digitales capacitados en metodologías de seguridad, organización comunitaria y liderazgo tecnológico para la defensa de derechos humanos.
                  </p>
                  <p className="mb-4">
                    <span className="typewriter-bold text-sm">POBLACIÓN OBJETIVO:</span> Defensores de derechos humanos, periodistas, organizaciones de la sociedad civil y ciudadanía comprometida con la transformación digital.
                  </p>
                  <p className="mb-4">
                    <span className="typewriter-bold text-sm">MODALIDAD:</span> Educación digital auto-dirigida con acompañamiento técnico especializado y certificación verificable.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer de la card */}
            <div className="academia-card-footer text-center">
              <p className="texto-oficial leading-relaxed">
                Este programa de capacitación está fundamentado en los principios de
                <span className="highlight font-bold"> educación popular</span>,
                <span className="highlight font-bold"> tecnología libre</span> y
                <span className="highlight font-bold"> resistencia colectiva</span>.
                Cada módulo busca transformar vulnerabilidades individuales en fortalezas comunitarias.
              </p>
            </div>
          </div>
        </section>

        {/* Módulos de capacitación */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="typewriter-bold text-2xl mb-2">MÓDULOS DE CAPACITACIÓN DISPONIBLES</h2>
            <p className="texto-pequeno">INSTITUTO CIUDADANO DE CAPACITACIÓN • ICC-CAP</p>
          </div>

          <div className="space-y-6">
            {modulos.map((modulo) => (
              <div key={modulo.codigo} className={`academia-card-unified ${!modulo.habilitado ? 'opacity-60' : ''}`}>
                {/* Encabezado del módulo */}
                <div className="academia-card-header">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-start gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-papel-sombra border-2 border-dorado rounded-full flex items-center justify-center mb-2">
                          <span className="text-2xl font-bold typewriter" style={{color: '#A16207'}}>{modulo.nivel}</span>
                        </div>
                        <Stamp className={`text-xs transform ${modulo.nivel === 1 ? 'rotate-2' : modulo.nivel === 2 ? '-rotate-1' : 'rotate-3'} ${modulo.habilitado ? 'bg-sello-rojo text-white' : 'bg-papel-border text-tinta-oficial'}`}>
                          {modulo.habilitado ? 'HABILITADO' : 'EN DESARROLLO'}
                        </Stamp>
                      </div>
                      <div>
                        <p className="texto-pequeno mb-1">MÓDULO {modulo.codigo}</p>
                        <h3 className="text-xl md:text-2xl font-bold typewriter mb-1" style={{color: '#1A1A1A'}}>
                          {modulo.titulo}
                        </h3>
                        <p className="texto-pequeno mb-2" style={{color: '#1A1A1A'}}>{modulo.subtitulo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="texto-pequeno">Revisión: {modulo.revision}</p>
                      <p className="texto-pequeno">Duración: {modulo.duracion}</p>
                      <p className="texto-pequeno">Unidades: {modulo.unidades}</p>
                    </div>
                  </div>
                </div>

                {/* Contenido del módulo */}
                <div className="academia-card-content">
                  <p className="texto-oficial leading-relaxed mb-4">
                    {modulo.descripcion}
                  </p>

                  <div className="bg-papel-sombra border-l-4 border-dorado p-4 mb-4">
                    <p className="typewriter-bold text-sm mb-2" style={{color: '#A16207'}}>REQUISITOS DE INGRESO:</p>
                    <p className="texto-pequeno">
                      {modulo.requisitos}
                    </p>
                  </div>

                  {/* Competencias del módulo */}
                  <div className="mb-6">
                    <h4 className="typewriter-bold text-sm mb-3" style={{color: '#A16207'}}>COMPETENCIAS TÉCNICAS A DESARROLLAR:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {modulo.competencias.map((competencia, index) => (
                        <div key={index} className="flex items-start gap-2 texto-pequeno">
                          <span style={{color: '#A16207'}} className="mt-1 text-xs">▶</span>
                          <span>{competencia}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Acciones disponibles */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    {modulo.habilitado ? (
                      <>
                        <Link href={modulo.nivel === 1 ? '/academia/nivel-1' : '#'}>
                          <SelloAccion
                            variant="primary"
                            size="lg"
                            disabled={modulo.nivel !== 1}
                          >
                            🎓 ACCEDER AL MÓDULO
                          </SelloAccion>
                        </Link>
                        <SelloAccion
                          variant="secondary"
                          size="lg"
                          onClick={() => setMostrarPrograma(true)}
                        >
                          📋 PROGRAMA ACADÉMICO
                        </SelloAccion>
                      </>
                    ) : (
                      <SelloAccion variant="secondary" size="lg" disabled>
                        🔒 PRÓXIMAMENTE
                      </SelloAccion>
                    )}
                  </div>
                </div>

                {/* Footer del módulo */}
                <div className="academia-card-footer text-right">
                  <p className="text-xs typewriter" style={{color: '#1A1A1A', opacity: 0.6}}>
                    {modulo.codigo}-{new Date().getFullYear()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Convocatoria */}
        <section className="text-center">
          <div className="academia-card-unified max-w-4xl mx-auto">
            {/* Header */}
            <div className="academia-card-header">
              <h2 className="text-2xl font-bold typewriter" style={{color: '#B91C1C'}}>
                CONVOCATORIA ABIERTA
              </h2>
              <p className="texto-pequeno mt-2">PROGRAMA DE FORMACIÓN EN ACTIVISMO DIGITAL</p>
            </div>

            {/* Contenido */}
            <div className="academia-card-content">
              <div className="bg-papel-sombra border border-dorado p-6 mb-6">
                <p className="typewriter-bold mb-2" style={{color: '#A16207'}}>DIRIGIDO A:</p>
                <p className="texto-oficial leading-relaxed">
                  Defensores de derechos humanos, periodistas, organizaciones de la sociedad civil,
                  estudiantes y ciudadanía comprometida con la transformación digital de México.
                </p>
              </div>

              <p className="texto-oficial leading-relaxed max-w-3xl mx-auto">
                La resistencia digital comienza con la formación técnica. Únete a nuestra comunidad de
                aprendizaje y contribuye a construir un ecosistema digital más libre, seguro y soberano.
              </p>
            </div>

            {/* Footer */}
            <div className="academia-card-footer text-center">
              <p className="margin-note" style={{color: '#A16207'}}>
                &ldquo;El conocimiento compartido es poder multiplicado&rdquo;
              </p>
              <p className="texto-pequeno mt-2">
                CONVOCATORIA PERMANENTE • ACCESO LIBRE Y GRATUITO
              </p>
            </div>
          </div>
        </section>

        {/* Modal Programa Académico */}
        {mostrarPrograma && (
          <div
            className="fixed inset-0 bg-tinta-oficial/70 z-50 flex items-center justify-center p-4"
            onClick={() => setMostrarPrograma(false)}
          >
            <div
              className="bg-papel-base max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl border-4 border-dorado-claro"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con colores del tema */}
              <div className="bg-sello-rojo text-papel-base p-6 shadow-lg border-b-4 border-sello-urgent">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold typewriter mb-2">
                      📋 PROGRAMA ACADÉMICO DETALLADO
                    </h2>
                    <p className="text-sm typewriter opacity-90">NIVEL 1: ACTIVISTA DIGITAL BÁSICO</p>
                  </div>
                  <button
                    onClick={() => setMostrarPrograma(false)}
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
                      <span className="font-bold min-w-[110px] text-tinta-oficial">Duración total:</span>
                      <span>{cursoNivel1.duracionTotal} minutos (4 horas)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold min-w-[110px] text-tinta-oficial">Módulos:</span>
                      <span>{cursoNivel1.modulos.length}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold min-w-[110px] text-tinta-oficial">Modalidad:</span>
                      <span>Auto-dirigido, progreso guardado en tu navegador</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-bold min-w-[110px] text-tinta-oficial">Certificado:</span>
                      <span>Al completar todos los módulos</span>
                    </li>
                  </ul>
                </div>

                {/* Objetivos */}
                <div className="bg-verde-aprobado/10 border-l-4 border-verde-aprobado p-5 rounded-r-lg shadow-sm">
                  <h3 className="font-bold typewriter mb-3 text-tinta-oficial text-lg">🎯 OBJETIVOS DE APRENDIZAJE</h3>
                  <ul className="space-y-2.5 text-sm">
                    {cursoNivel1.objetivos.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-tinta-suave">
                        <span className="text-verde-aprobado text-lg mt-0.5 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Módulos detallados */}
                <div>
                  <h3 className="font-bold typewriter mb-4 text-xl text-tinta-oficial">📚 CONTENIDO POR MÓDULO</h3>
                  <div className="space-y-4">
                    {cursoNivel1.modulos.map((modulo, idx) => (
                      <div key={modulo.id} className="border-2 border-papel-border rounded-xl p-5 bg-white shadow-sm hover:border-azul-info transition-colors">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-azul-info text-papel-base rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold typewriter text-base mb-1 text-tinta-oficial">{modulo.titulo}</h4>
                            <p className="text-sm text-tinta-suave mb-2 leading-relaxed">{modulo.descripcion}</p>
                            <p className="text-xs text-tinta-clara bg-papel-sombra inline-block px-2 py-1 rounded border border-papel-border">⏱️ Duración: {modulo.duracion} minutos</p>
                          </div>
                        </div>

                        <div className="ml-14 space-y-3">
                          <div>
                            <h5 className="text-sm font-bold mb-2 text-tinta-oficial">Temas cubiertos:</h5>
                            <ul className="text-xs space-y-1.5">
                              {modulo.contenido.slice(0, 5).map((cont, contIdx) => (
                                <li key={contIdx} className="flex items-start gap-2 text-tinta-suave">
                                  <span className="text-azul-info font-bold">•</span>
                                  <span>{cont.titulo || 'Contenido educativo'}</span>
                                </li>
                              ))}
                              {modulo.contenido.length > 5 && (
                                <li className="text-tinta-clara italic pl-4">
                                  + {modulo.contenido.length - 5} temas más...
                                </li>
                              )}
                            </ul>
                          </div>

                          {modulo.ejercicios && modulo.ejercicios.length > 0 && (
                            <div className="pt-3 border-t border-papel-border">
                              <p className="text-xs text-tinta-suave">
                                <strong className="text-tinta-oficial">✍️ Ejercicios:</strong> {modulo.ejercicios.length} (quiz, prácticas y reflexiones)
                              </p>
                            </div>
                          )}

                          {modulo.recursos && modulo.recursos.length > 0 && (
                            <div className="pt-2">
                              <p className="text-xs text-tinta-suave">
                                <strong className="text-tinta-oficial">🔗 Recursos:</strong> {modulo.recursos.length} herramientas y enlaces
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action */}
                <div className="bg-azul-info/10 border-l-4 border-azul-info p-5 text-center rounded-r-lg shadow-sm">
                  <p className="text-sm mb-4 text-tinta-oficial font-medium">
                    ¿Listo para comenzar tu formación como activista digital?
                  </p>
                  <Link href="/academia/nivel-1">
                    <SelloAccion size="lg" onClick={() => setMostrarPrograma(false)}>
                      🎓 COMENZAR NIVEL 1
                    </SelloAccion>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}