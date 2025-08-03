import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <main className="max-w-7xl mx-auto">
        {/* Hero Section - Manifiesto */}
        <section className="mb-16">
          <ExpedienteCard variant="default" className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 typewriter">
                ANTIMANUAL
              </h1>
              <p className="text-xl text-red-700 font-bold tracking-wider">
                ACTIVISMO DIGITAL COLECTIVO
              </p>
              <div className="mt-4 inline-block">
                <span className="classified text-gray-500">CLASIFICADO</span>
              </div>
            </div>

            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                <span className="highlight font-bold">CONSIDERANDO</span> que el miedo digital 
                paraliza a la ciudadanía mexicana;
              </p>
              
              <p className="leading-relaxed">
                <span className="highlight font-bold">CONSIDERANDO</span> que la vigilancia 
                gubernamental y corporativa viola sistemáticamente nuestros derechos;
              </p>
              
              <p className="leading-relaxed">
                <span className="highlight font-bold">CONSIDERANDO</span> que el conocimiento 
                técnico se mantiene deliberadamente inaccesible;
              </p>

              <div className="border-t-2 border-dashed border-gray-400 my-8"></div>

              <p className="text-xl font-bold text-center">
                DECLARAMOS:
              </p>

              <p className="leading-relaxed">
                <span className="text-red-700 font-bold">I.</span> Que cada ciudadano tiene 
                derecho a la privacidad digital sin vigilancia ni censura.
              </p>

              <p className="leading-relaxed">
                <span className="text-red-700 font-bold">II.</span> Que transformaremos el 
                miedo en poder colectivo a través de herramientas prácticas.
              </p>

              <p className="leading-relaxed">
                <span className="text-red-700 font-bold">III.</span> Que ningún activista 
                digital navegará solo en esta lucha.
              </p>

              <div className="mt-8 text-center">
                <p className="margin-note inline-block">
                  &ldquo;Cada línea de código es un acto de resistencia&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/herramientas">
                <SelloAccion size="lg">
                  ACCEDER AL KIT DE EMERGENCIA
                </SelloAccion>
              </Link>
              <Link href="/red">
                <SelloAccion variant="secondary" size="lg">
                  UNIRSE A LA RED
                </SelloAccion>
              </Link>
            </div>
          </ExpedienteCard>
        </section>

        {/* Sección de características */}
        <section className="grid md:grid-cols-4 gap-6 mb-16">
          <Link href="/herramientas">
            <ExpedienteCard className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-2 typewriter">HERRAMIENTAS</h3>
                <p className="texto-suave">
                  Kit de emergencia digital con protocolos paso a paso para proteger tu identidad.
                </p>
                <div className="mt-4">
                  <Stamp className="text-sm">SIEMPRE GRATIS</Stamp>
                </div>
              </div>
            </ExpedienteCard>
          </Link>

          <Link href="/red">
            <ExpedienteCard className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2 typewriter">RED DE APOYO</h3>
                <p className="texto-suave">
                  Directorio de organizaciones y activistas unidos por la libertad digital.
                </p>
                <div className="mt-4">
                  <Stamp className="text-sm">20+ ALIADOS</Stamp>
                </div>
              </div>
            </ExpedienteCard>
          </Link>

          <Link href="/academia">
            <ExpedienteCard className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2 typewriter">ACADEMIA</h3>
                <p className="texto-suave">
                  Formación progresiva: de usuario vulnerable a defensor digital capacitado.
                </p>
                <div className="mt-4">
                  <Stamp className="text-sm">3 NIVELES</Stamp>
                </div>
              </div>
            </ExpedienteCard>
          </Link>

          <Link href="/observatorio">
            <ExpedienteCard className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2 typewriter">OBSERVATORIO</h3>
                <p className="texto-suave">
                  Métricas en tiempo real sobre el estado de los derechos digitales en México.
                </p>
                <div className="mt-4">
                  <Stamp className="text-sm">TRANSPARENCIA TOTAL</Stamp>
                </div>
              </div>
            </ExpedienteCard>
          </Link>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <ExpedienteCard className="inline-block">
            <p className="text-2xl font-bold mb-4 typewriter">
              ÚNETE AL MOVIMIENTO
            </p>
            <p className="mb-6 texto-suave">
              Ya somos <span className="highlight font-bold">500+ activistas</span> construyendo 
              el futuro digital que merecemos.
            </p>
            <SelloAccion>
              COMENZAR AHORA
            </SelloAccion>
          </ExpedienteCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-papel-border">
        <div className="text-center text-sm texto-suave">
          <p className="mb-2">
            <Stamp className="text-xs">VERIFICADO POR EL PUEBLO</Stamp>
          </p>
          <p className="typewriter">
            ANTIMANUAL {new Date().getFullYear()} | CÓDIGO ABIERTO | GPL-3.0
          </p>
        </div>
      </footer>
    </div>
  );
}