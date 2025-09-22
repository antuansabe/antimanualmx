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
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Portada del manual técnico */}
        <section className="mb-12">
          <ExpedienteCard variant="approved" className="max-w-5xl mx-auto" perforated>
            {/* Encabezado institucional */}
            <div className="border-b-2 border-doble border-verde-aprobado pb-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="texto-pequeno mb-1 text-verde-aprobado">REPÚBLICA DIGITAL DE MÉXICO</p>
                  <p className="texto-pequeno text-verde-aprobado">INSTITUTO NACIONAL DE CAPACITACIÓN DIGITAL</p>
                </div>
                <div className="text-right">
                  <Stamp className="text-xs bg-verde-aprobado text-white transform -rotate-2 mb-2">CERTIFICADO</Stamp>
                  <p className="texto-pequeno">Manual: INCD-{new Date().getFullYear()}-CAP-001</p>
                  <p className="texto-pequeno">Revisión: {currentDate}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter text-verde-aprobado">
                ACADEMIA ACTIVISTA
              </h1>
              <div className="inline-block border-4 border-double border-verde-aprobado px-6 py-2 mb-4 bg-verde-aprobado/10">
                <p className="text-lg md:text-xl text-verde-aprobado font-bold tracking-widest typewriter">
                  MANUAL DE CAPACITACIÓN TÉCNICA
                </p>
              </div>
              <p className="texto-pequeno mt-4">
                PROGRAMA DE FORMACIÓN EN ACTIVISMO DIGITAL • VERSIÓN 2024.1
              </p>
            </div>

            {/* Objetivos del manual */}
            <div className="space-y-6 texto-oficial leading-relaxed mb-8">
              <div className="pl-8 border-l-4 border-verde-aprobado">
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

            {/* Métricas del programa */}
            <div className="bg-verde-aprobado/5 border border-verde-aprobado p-6 mb-8">
              <div className="text-center mb-4">
                <p className="typewriter-bold text-verde-aprobado text-sm">INDICADORES DE IMPACTO DEL PROGRAMA</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-verde-aprobado typewriter">{metricas.estudiantes}</div>
                  <div className="texto-pequeno">Estudiantes activos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-verde-aprobado typewriter">{metricas.certificaciones}</div>
                  <div className="texto-pequeno">Certificaciones emitidas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-verde-aprobado typewriter">{metricas.organizaciones}</div>
                  <div className="texto-pequeno">Organizaciones beneficiadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-verde-aprobado typewriter">{metricas.efectividad}%</div>
                  <div className="texto-pequeno">Efectividad formativa</div>
                </div>
              </div>
            </div>

            {/* Declaración de principios */}
            <div className="text-center pt-6 border-t border-verde-aprobado">
              <p className="texto-oficial leading-relaxed max-w-4xl mx-auto">
                Este programa de capacitación está fundamentado en los principios de 
                <span className="highlight font-bold"> educación popular</span>, 
                <span className="highlight font-bold"> tecnología libre</span> y 
                <span className="highlight font-bold"> resistencia colectiva</span>. 
                Cada módulo busca transformar vulnerabilidades individuales en fortalezas comunitarias.
              </p>
            </div>
          </ExpedienteCard>
        </section>

        {/* Módulos de capacitación */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="typewriter-bold text-2xl mb-2">MÓDULOS DE CAPACITACIÓN DISPONIBLES</h2>
            <p className="texto-pequeno">INSTITUTO NACIONAL DE CAPACITACIÓN DIGITAL • INCD-CAP</p>
          </div>
          
          <div className="space-y-8">
            {modulos.map((modulo) => (
              <ExpedienteCard 
                key={modulo.codigo} 
                variant="approved"
                className={!modulo.habilitado ? 'opacity-60' : ''}
                perforated
              >
                {/* Encabezado del módulo */}
                <div className="border-b border-verde-aprobado pb-4 mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-start gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-verde-aprobado/10 border-2 border-verde-aprobado rounded-full flex items-center justify-center mb-2">
                          <span className="text-2xl font-bold text-verde-aprobado typewriter">{modulo.nivel}</span>
                        </div>
                        <Stamp className={`text-xs ${modulo.habilitado ? 'bg-verde-aprobado text-white' : 'bg-gray-500 text-white'}`}>
                          {modulo.habilitado ? 'HABILITADO' : 'EN DESARROLLO'}
                        </Stamp>
                      </div>
                      <div>
                        <p className="texto-pequeno mb-1">MÓDULO {modulo.codigo}</p>
                        <h3 className="text-xl md:text-2xl font-bold typewriter mb-1 text-verde-aprobado">
                          {modulo.titulo}
                        </h3>
                        <p className="texto-pequeno text-verde-aprobado mb-2">{modulo.subtitulo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="texto-pequeno">Revisión: {modulo.revision}</p>
                      <p className="texto-pequeno">Duración: {modulo.duracion}</p>
                      <p className="texto-pequeno">Unidades: {modulo.unidades}</p>
                    </div>
                  </div>
                </div>

                {/* Descripción y especificaciones */}
                <div className="mb-6">
                  <p className="texto-oficial leading-relaxed mb-4">
                    {modulo.descripcion}
                  </p>
                  
                  <div className="bg-papel-sombra border-l-4 border-verde-aprobado p-4 mb-4">
                    <p className="typewriter-bold text-sm mb-2 text-verde-aprobado">REQUISITOS DE INGRESO:</p>
                    <p className="texto-pequeno">
                      {modulo.requisitos}
                    </p>
                  </div>

                  {/* Competencias del módulo */}
                  <div className="mb-4">
                    <h4 className="typewriter-bold text-sm mb-3 text-verde-aprobado">COMPETENCIAS TÉCNICAS A DESARROLLAR:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {modulo.competencias.map((competencia, index) => (
                        <div key={index} className="flex items-start gap-2 texto-pequeno">
                          <span className="text-verde-aprobado mt-1 text-xs">▶</span>
                          <span>{competencia}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Acciones disponibles */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {modulo.habilitado ? (
                    <>
                      <Link href={modulo.nivel === 1 ? '/academia/nivel-1' : '#'}>
                        <SelloAccion 
                          variant="approved"
                          size="lg"
                          disabled={modulo.nivel !== 1}
                        >
                          🎓 ACCEDER AL MÓDULO
                        </SelloAccion>
                      </Link>
                      <SelloAccion variant="secondary" size="lg">
                        📋 PROGRAMA ACADÉMICO
                      </SelloAccion>
                    </>
                  ) : (
                    <SelloAccion variant="secondary" size="lg" disabled>
                      🔒 PRÓXIMAMENTE
                    </SelloAccion>
                  )}
                </div>

                {/* Código de expediente */}
                <div className="absolute bottom-2 right-2 text-xs texto-suave typewriter opacity-30">
                  {modulo.codigo}-{new Date().getFullYear()}
                </div>
              </ExpedienteCard>
            ))}
          </div>
        </section>

        {/* Marco metodológico */}
        <section className="mb-16">
          <ExpedienteCard variant="classified" className="max-w-5xl mx-auto" stamped>
            <div className="border-b-2 border-papel-border pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1">ANEXO TÉCNICO</p>
                  <h2 className="text-2xl font-bold typewriter">
                    MARCO METODOLÓGICO DEL PROGRAMA
                  </h2>
                </div>
                <Stamp className="text-xs">PÚBLICO</Stamp>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-azul-info/10 border-l-4 border-azul-info p-4 mb-6">
                <p className="typewriter-bold text-azul-info mb-2">ENFOQUE PEDAGÓGICO:</p>
                <p className="texto-oficial">
                  El programa utiliza metodologías de educación popular adaptadas al contexto digital, 
                  priorizando el aprendizaje experiencial y la construcción colectiva del conocimiento.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <ExpedienteCard className="h-full text-center">
                  <div className="inline-block p-4 bg-azul-info/10 rounded-full mb-4">
                    <span className="text-3xl">💻</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">PRÁCTICA TÉCNICA APLICADA</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Laboratorios virtuales seguros, simuladores de amenazas y ejercicios con casos documentados
                  </p>
                  <div className="pt-3 border-t border-papel-border">
                    <p className="texto-pequeno font-bold">METODOLOGÍA ACTIVA</p>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard className="h-full text-center">
                  <div className="inline-block p-4 bg-azul-info/10 rounded-full mb-4">
                    <span className="text-3xl">👥</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">CONSTRUCCIÓN COLECTIVA</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Círculos de estudio, mentorías horizontales y desarrollo de redes de apoyo mutuo
                  </p>
                  <div className="pt-3 border-t border-papel-border">
                    <p className="texto-pequeno font-bold">EDUCACIÓN POPULAR</p>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard className="h-full text-center">
                  <div className="inline-block p-4 bg-verde-aprobado/10 rounded-full mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">ACREDITACIÓN VERIFICABLE</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Certificaciones digitales con blockchain y reconocimiento institucional verificable
                  </p>
                  <div className="pt-3 border-t border-papel-border">
                    <Stamp className="text-xs bg-verde-aprobado">CERTIFICADO</Stamp>
                  </div>
                </ExpedienteCard>
              </div>

              <div className="text-center pt-6 border-t border-papel-border">
                <p className="texto-pequeno">
                  MARCO PEDAGÓGICO VALIDADO POR: Instituto Nacional de Capacitación Digital • {currentDate}
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Convocatoria */}
        <section className="text-center">
          <ExpedienteCard variant="approved" className="max-w-4xl mx-auto">
            <div className="border-b border-verde-aprobado pb-4 mb-6">
              <h2 className="text-2xl font-bold typewriter text-verde-aprobado">
                CONVOCATORIA ABIERTA
              </h2>
              <p className="texto-pequeno mt-2">PROGRAMA DE FORMACIÓN EN ACTIVISMO DIGITAL</p>
            </div>

            <div className="space-y-6">
              <div className="bg-verde-aprobado/10 border border-verde-aprobado p-6">
                <p className="typewriter-bold text-verde-aprobado mb-2">DIRIGIDO A:</p>
                <p className="texto-oficial leading-relaxed">
                  Defensores de derechos humanos, periodistas, organizaciones de la sociedad civil, 
                  estudiantes y ciudadanía comprometida con la transformación digital de México.
                </p>
              </div>

              <p className="texto-oficial leading-relaxed max-w-3xl mx-auto">
                La resistencia digital comienza con la formación técnica. Únete a nuestra comunidad de 
                aprendizaje y contribuye a construir un ecosistema digital más libre, seguro y soberano.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/academia/nivel-1">
                  <SelloAccion variant="approved" size="lg">
                    🎓 INICIAR CAPACITACIÓN
                  </SelloAccion>
                </Link>
                <Link href="/academia/perfil">
                  <SelloAccion variant="secondary" size="lg">
                    👤 ACCEDER A MI PERFIL
                  </SelloAccion>
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-verde-aprobado">
                <p className="margin-note text-verde-aprobado">
                  &ldquo;El conocimiento compartido es poder multiplicado&rdquo;
                </p>
                <p className="texto-pequeno mt-2">
                  CONVOCATORIA PERMANENTE • ACCESO LIBRE Y GRATUITO
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}