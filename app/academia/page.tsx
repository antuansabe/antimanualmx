'use client';

import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';

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
                        <Link href="/academia/programa">
                          <SelloAccion
                            variant="secondary"
                            size="lg"
                          >
                            📋 PROGRAMA ACADÉMICO
                          </SelloAccion>
                        </Link>
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
      </div>
    </div>
  );
}