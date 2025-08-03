import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';

const niveles = [
  {
    nivel: 1,
    titulo: 'Activista Digital Básico',
    descripcion: 'Fundamentos de seguridad digital y primeros pasos en el activismo',
    duracion: '2-3 horas',
    modulos: 4,
    temas: [
      'Historia de la resistencia digital',
      'Derechos digitales en México',
      'Primeros pasos seguros',
      'Casos de éxito locales'
    ],
    prerequisitos: 'Ninguno',
    disponible: true
  },
  {
    nivel: 2,
    titulo: 'Defensor Comunitario',
    descripcion: 'Organización segura y construcción de redes de apoyo resilientes',
    duracion: '4-5 horas',
    modulos: 6,
    temas: [
      'Organización segura para colectivos',
      'Contravigilancia básica',
      'Documentación de violaciones',
      'Construcción de redes de apoyo'
    ],
    prerequisitos: 'Nivel 1 completado',
    disponible: false
  },
  {
    nivel: 3,
    titulo: 'Facilitador de Seguridad',
    descripcion: 'Capacitación avanzada para formar y apoyar a otros activistas',
    duracion: '6-8 horas',
    modulos: 8,
    temas: [
      'Metodologías de enseñanza',
      'Diagnósticos comunitarios',
      'Respuesta a incidentes',
      'Sostenibilidad de proyectos'
    ],
    prerequisitos: 'Nivel 2 completado + experiencia práctica',
    disponible: false
  }
];

const estadisticas = {
  estudiantes: 247,
  certificados: 89,
  organizaciones: 12,
  satisfaccion: 94
};

export default function AcademiaPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">

      <main className="max-w-6xl mx-auto">
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                ACADEMIA ACTIVISTA
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                DE USUARIO VULNERABLE A DEFENSOR DIGITAL
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.estudiantes}</div>
                  <div className="text-xs text-gray-600">Estudiantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.certificados}</div>
                  <div className="text-xs text-gray-600">Certificados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.organizaciones}</div>
                  <div className="text-xs text-gray-600">Organizaciones</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">{estadisticas.satisfaccion}%</div>
                  <div className="text-xs text-gray-600">Satisfacción</div>
                </div>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Formación progresiva y práctica en seguridad digital, organización comunitaria 
                y liderazgo activista. Cada nivel te prepara para enfrentar desafíos más complejos 
                y apoyar a otros en su proceso de empoderamiento digital.
              </p>
            </div>
          </ExpedienteCard>
        </section>

        <section className="grid gap-8 mb-16">
          {niveles.map((nivel) => (
            <ExpedienteCard key={nivel.nivel} className={!nivel.disponible ? 'opacity-60' : ''}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 text-center">
                  <div className="text-6xl font-bold text-red-700 mb-2">
                    {nivel.nivel}
                  </div>
                  <Stamp className={`text-xs ${nivel.disponible ? 'bg-green-600' : 'bg-gray-500'}`}>
                    {nivel.disponible ? 'DISPONIBLE' : 'PRÓXIMAMENTE'}
                  </Stamp>
                </div>
                
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold typewriter mb-2">
                    {nivel.titulo}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {nivel.descripcion}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <strong>Duración:</strong> {nivel.duracion}
                    </div>
                    <div>
                      <strong>Módulos:</strong> {nivel.modulos}
                    </div>
                    <div>
                      <strong>Prerequisitos:</strong> {nivel.prerequisitos}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Temas principales:</h4>
                    <ul className="grid md:grid-cols-2 gap-1 text-sm text-gray-600">
                      {nivel.temas.map((tema, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-700 mt-0.5">•</span>
                          <span>{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    {nivel.disponible ? (
                      <>
                        <Link href={nivel.nivel === 1 ? '/academia/nivel-1' : '#'}>
                          <SelloAccion size="lg" disabled={nivel.nivel !== 1}>
                            COMENZAR NIVEL {nivel.nivel}
                          </SelloAccion>
                        </Link>
                        <SelloAccion variant="secondary" size="lg">
                          VER TEMARIO COMPLETO
                        </SelloAccion>
                      </>
                    ) : (
                      <SelloAccion variant="secondary" size="lg" disabled>
                        PRÓXIMAMENTE
                      </SelloAccion>
                    )}
                  </div>
                </div>
              </div>
            </ExpedienteCard>
          ))}
        </section>

        <section className="mb-16">
          <ExpedienteCard>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 typewriter">
                🎓 METODOLOGÍA DE APRENDIZAJE
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="font-bold mb-2">Práctica Real</h3>
                  <p className="text-sm text-gray-600">
                    Ejercicios con casos reales, simuladores interactivos y laboratorios seguros
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="font-bold mb-2">Aprendizaje Colectivo</h3>
                  <p className="text-sm text-gray-600">
                    Grupos de estudio, mentorías P2P y construcción de redes de apoyo
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-bold mb-2">Certificación Verificable</h3>
                  <p className="text-sm text-gray-600">
                    Certificados digitales verificables y reconocidos por la comunidad
                  </p>
                </div>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        <section className="text-center">
          <ExpedienteCard>
            <h2 className="text-2xl font-bold mb-4 typewriter">
              ¿LISTO PARA TRANSFORMARTE?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              El cambio comienza con el primer paso. Únete a nuestra comunidad de aprendizaje 
              y construyamos juntos un futuro digital más libre y seguro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/academia/nivel-1">
                <SelloAccion size="lg">
                  COMENZAR NIVEL 1 GRATIS
                </SelloAccion>
              </Link>
              <Link href="/academia/perfil">
                <SelloAccion variant="secondary" size="lg">
                  VER MI PERFIL
                </SelloAccion>
              </Link>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <p className="margin-note">
                &ldquo;El conocimiento compartido es poder multiplicado&rdquo;
              </p>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}