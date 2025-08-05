import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import { SelloHero } from '@/shared/ui/SelloHero';
import { FooterMobile } from '@/shared/ui/FooterMobile';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Hero Section - Manifiesto */}
        <section className="mb-16">
          <ExpedienteCard variant="default" className="max-w-4xl mx-auto" perforated clipped>
            <div className="text-center mb-8">
              {/* Sello Hero Animado */}
              <SelloHero />
              
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
              <p className="texto-pequeno text-tinta-suave">
                INICIATIVA CIUDADANA INDEPENDIENTE
              </p>
            </div>

            {/* Cuerpo del manifiesto con estilo oficial */}
            <div className="space-y-6 texto-oficial leading-relaxed">
              <div className="pl-8 border-l-4 border-papel-border">
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> el estado actual de vulnerabilidad digital de la ciudadanía;
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
          
          <div className="expedientes-grid">
            <Link href="/herramientas">
              <div className="expediente-card-simple">
                <div className="icono-expediente">🚨</div>
                <h3 className="titulo-expediente">HERRAMIENTAS DE EMERGENCIA</h3>
                <p className="descripcion-expediente">
                  Protocolos de respuesta inmediata ante amenazas digitales. Acceso sin registro.
                </p>
                <button className="boton-expediente">ACCESO 24/7</button>
                <span className="codigo-expediente">EXP-51827K</span>
              </div>
            </Link>

            <Link href="/red">
              <div className="expediente-card-simple">
                <div className="icono-expediente">🤝</div>
                <h3 className="titulo-expediente">RED DE APOYO</h3>
                <p className="descripcion-expediente">
                  Directorio verificado de organizaciones aliadas. Contacto directo disponible.
                </p>
                <div className="contador-simple">
                  <span className="numero">23</span>
                  <span className="texto">ORGANIZACIONES</span>
                </div>
                <button className="boton-expediente">VER DIRECTORIO</button>
                <span className="codigo-expediente">EXP-O85BV3</span>
              </div>
            </Link>

            <Link href="/academia">
              <div className="expediente-card-simple">
                <div className="icono-expediente">🎓</div>
                <h3 className="titulo-expediente">ACADEMIA ACTIVISTA</h3>
                <p className="descripcion-expediente">
                  Formación certificada en seguridad digital. Tres niveles progresivos.
                </p>
                <button className="boton-expediente">CERTIFICACIÓN</button>
                <span className="codigo-expediente">EXP-A8X66N</span>
              </div>
            </Link>

            <Link href="/observatorio">
              <div className="expediente-card-simple">
                <div className="icono-expediente">📊</div>
                <h3 className="titulo-expediente">OBSERVATORIO</h3>
                <p className="descripcion-expediente">
                  Métricas públicas del estado de libertades digitales en tiempo real.
                </p>
                <button className="boton-expediente">DATOS ABIERTOS</button>
                <span className="codigo-expediente">EXP-3D1G3S</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <div className="unete-movimiento">
            <h2 className="titulo-seccion">ÚNETE AL MOVIMIENTO</h2>
            <p className="descripcion-movimiento">
              Ya somos <span className="contador-activistas">500+ activistas</span> construyendo 
              el futuro digital que merecemos.
            </p>
            <button className="sello-accion grande">
              <span>COMENZAR AHORA</span>
            </button>
            <div className="codigo-expediente">EXP-TLC9HE</div>
          </div>
        </section>
      </main>

      {/* Footer móvil mejorado */}
      <FooterMobile />
    </div>
  );
}