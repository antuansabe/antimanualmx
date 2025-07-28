import { Button, PaperContainer, Stamp } from '@/shared/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header con sello */}
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Stamp animate>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              EXPEDIENTE: #{new Date().getFullYear()}-LIBRE
            </span>
          </div>
          <nav className="flex gap-6">
            <Link href="/herramientas" className="typewriter hover:text-red-700">
              HERRAMIENTAS
            </Link>
            <Link href="/red" className="typewriter hover:text-red-700">
              RED DE APOYO
            </Link>
            <Link href="/academia" className="typewriter hover:text-red-700">
              ACADEMIA
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section - Manifiesto */}
        <section className="mb-16">
          <PaperContainer aged className="max-w-4xl mx-auto">
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
                <Button size="lg">
                  ACCEDER AL KIT DE EMERGENCIA
                </Button>
              </Link>
              <Link href="/red">
                <Button variant="secondary" size="lg">
                  UNIRSE A LA RED
                </Button>
              </Link>
            </div>
          </PaperContainer>
        </section>

        {/* Sección de características */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <PaperContainer>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2 typewriter">HERRAMIENTAS</h3>
              <p className="text-gray-600">
                Kit de emergencia digital con protocolos paso a paso para proteger tu identidad.
              </p>
              <div className="mt-4">
                <Stamp className="text-sm">SIEMPRE GRATIS</Stamp>
              </div>
            </div>
          </PaperContainer>

          <PaperContainer>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2 typewriter">RED DE APOYO</h3>
              <p className="text-gray-600">
                Directorio de organizaciones y activistas unidos por la libertad digital.
              </p>
              <div className="mt-4">
                <Stamp className="text-sm">20+ ALIADOS</Stamp>
              </div>
            </div>
          </PaperContainer>

          <PaperContainer>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2 typewriter">ACADEMIA</h3>
              <p className="text-gray-600">
                Formación progresiva: de usuario vulnerable a defensor digital capacitado.
              </p>
              <div className="mt-4">
                <Stamp className="text-sm">3 NIVELES</Stamp>
              </div>
            </div>
          </PaperContainer>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <PaperContainer className="inline-block">
            <p className="text-2xl font-bold mb-4 typewriter">
              ÚNETE AL MOVIMIENTO
            </p>
            <p className="mb-6 text-gray-600">
              Ya somos <span className="highlight font-bold">500+ activistas</span> construyendo 
              el futuro digital que merecemos.
            </p>
            <Button>
              COMENZAR AHORA
            </Button>
          </PaperContainer>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-300">
        <div className="text-center text-sm text-gray-600">
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