import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Hero Section - Manifiesto */}
        <section className="mb-16">
          <ExpedienteCard variant="default" className="max-w-4xl mx-auto" perforated clipped>
            {/* Encabezado oficial */}
            <div className="border-b-2 border-doble border-papel-border pb-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="texto-pequeno mb-1">REPÚBLICA DIGITAL DE MÉXICO</p>
                  <p className="texto-pequeno">SECRETARÍA DE RESISTENCIA CIUDADANA</p>
                </div>
                <div className="text-right">
                  <Stamp className="text-xs transform rotate-2">PÚBLICO</Stamp>
                  <p className="texto-pequeno mt-2">Folio: {new Date().getFullYear()}-RDC-001</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter tracking-wider">
                ANTIMANUAL
              </h1>
              <div className="inline-block border-4 border-double border-sello-rojo px-6 py-2 mb-4">
                <p className="text-lg md:text-xl text-sello-rojo font-bold tracking-widest typewriter">
                  ACTIVISMO DIGITAL COLECTIVO
                </p>
              </div>
              <p className="texto-pequeno mt-4">
                MANIFIESTO DE LIBERACIÓN DIGITAL • VERSIÓN 1.0
              </p>
            </div>

            {/* Cuerpo del manifiesto con estilo oficial */}
            <div className="space-y-6 texto-oficial leading-relaxed">
              <div className="pl-8 border-l-4 border-papel-border">
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">VISTO</span> el estado actual de vulnerabilidad digital de la ciudadanía;
                </p>
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> que el miedo digital paraliza a la ciudadanía mexicana ante amenazas cibernéticas;
                </p>
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> que la vigilancia gubernamental y corporativa viola sistemáticamente nuestros derechos fundamentales;
                </p>
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> que el conocimiento técnico se mantiene deliberadamente inaccesible para las mayorías;
                </p>
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="flex-grow border-t-2 border-papel-border"></div>
                <Stamp className="text-sm">RESOLUTIVOS</Stamp>
                <div className="flex-grow border-t-2 border-papel-border"></div>
              </div>

              <div className="space-y-6">
                <p className="text-center typewriter-bold text-xl mb-8">
                  POR LO TANTO, DECLARAMOS:
                </p>

                <div className="space-y-4 pl-8">
                  <p>
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">I.</span>
                    Que cada ciudadano tiene derecho irrenunciable a la privacidad digital sin vigilancia ni censura de ningún tipo.
                  </p>

                  <p>
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">II.</span>
                    Que transformaremos el miedo en poder colectivo a través de herramientas prácticas, educación accesible y organización comunitaria.
                  </p>

                  <p>
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">III.</span>
                    Que ningún activista digital navegará solo en esta lucha por las libertades digitales fundamentales.
                  </p>

                  <p>
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">IV.</span>
                    Que este conocimiento será siempre libre, gratuito y accesible para todas las personas.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t-2 border-papel-border">
                <div className="text-center">
                  <p className="texto-pequeno mb-2">Dado en el territorio digital de México</p>
                  <p className="texto-pequeno mb-6">{new Date().toLocaleDateString('es-MX', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                  <p className="margin-note text-base">
                    &ldquo;Cada línea de código es un acto de resistencia&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Acciones principales */}
            <div className="mt-12 pt-8 border-t-2 border-papel-border">
              <div className="text-center mb-6">
                <p className="typewriter-bold text-sm">ACCIONES INMEDIATAS DISPONIBLES</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/herramientas">
                  <SelloAccion variant="urgent" size="lg">
                    🚨 KIT DE EMERGENCIA
                  </SelloAccion>
                </Link>
                <Link href="/red">
                  <SelloAccion variant="secondary" size="lg">
                    🤝 UNIRSE A LA RED
                  </SelloAccion>
                </Link>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Sección de características - Expedientes disponibles */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="typewriter-bold text-2xl mb-2">EXPEDIENTES DISPONIBLES</h2>
            <p className="texto-pequeno">CLASIFICACIÓN: PÚBLICO • ACCESO LIBRE</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/herramientas" className="block transform hover:-translate-y-1 transition-transform">
              <ExpedienteCard variant="urgent" clipped>
                <div className="text-center">
                  <div className="inline-block p-4 bg-sello-rojo/10 rounded-full mb-4">
                    <span className="text-4xl">🛡️</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">HERRAMIENTAS DE EMERGENCIA</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Protocolos de respuesta inmediata ante amenazas digitales. Acceso sin registro.
                  </p>
                  <div className="pt-4 border-t border-papel-border">
                    <Stamp className="text-xs">ACCESO 24/7</Stamp>
                  </div>
                </div>
              </ExpedienteCard>
            </Link>

            <Link href="/red" className="block transform hover:-translate-y-1 transition-transform">
              <ExpedienteCard stamped>
                <div className="text-center">
                  <div className="inline-block p-4 bg-dorado-metal/10 rounded-full mb-4">
                    <span className="text-4xl">🤝</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">RED DE APOYO</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Directorio verificado de organizaciones aliadas. Contacto directo disponible.
                  </p>
                  <div className="pt-4 border-t border-papel-border">
                    <p className="texto-pequeno font-bold">23 ORGANIZACIONES</p>
                  </div>
                </div>
              </ExpedienteCard>
            </Link>

            <Link href="/academia" className="block transform hover:-translate-y-1 transition-transform">
              <ExpedienteCard perforated>
                <div className="text-center">
                  <div className="inline-block p-4 bg-verde-aprobado/10 rounded-full mb-4">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">ACADEMIA ACTIVISTA</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Formación certificada en seguridad digital. Tres niveles progresivos.
                  </p>
                  <div className="pt-4 border-t border-papel-border">
                    <Stamp className="text-xs bg-verde-aprobado">CERTIFICACIÓN</Stamp>
                  </div>
                </div>
              </ExpedienteCard>
            </Link>

            <Link href="/observatorio" className="block transform hover:-translate-y-1 transition-transform">
              <ExpedienteCard>
                <div className="text-center">
                  <div className="inline-block p-4 bg-azul-info/10 rounded-full mb-4">
                    <span className="text-4xl">📊</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">OBSERVATORIO</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Métricas públicas del estado de libertades digitales en tiempo real.
                  </p>
                  <div className="pt-4 border-t border-papel-border">
                    <p className="texto-pequeno font-bold">DATOS ABIERTOS</p>
                  </div>
                </div>
              </ExpedienteCard>
            </Link>
          </div>
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