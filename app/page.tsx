import { SelloAccion, ExpedienteCard, Stamp, TypewriterTitle } from '@/shared/ui';
import { SelloHero } from '@/shared/ui/SelloHero';
import { FooterMobile } from '@/shared/ui/FooterMobile';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="page-container py-6 md:py-12">
        {/* Hero Section - Manifiesto */}
        <section className="mb-16">
          <ExpedienteCard variant="default" className="max-w-4xl mx-auto relative" clipped>
            {/* Orificio de perforación decorativo */}
            <div className="absolute top-3 left-3 w-4 h-4 md:w-5 md:h-5 bg-papel-base rounded-full z-20 shadow-inner" 
                 style={{
                   boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                   backgroundColor: 'var(--papel-base)'
                 }}>
            </div>
            
            <div className="text-center mb-8">
              {/* Sello Hero Animado */}
              <SelloHero />
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter tracking-wider">
                <TypewriterTitle text="ANTIMANUAL" />
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
            <div className="space-y-4 texto-oficial">
              <div className="pl-8 border-l-4 border-papel-border space-y-3">
                <p className="typewriter leading-6">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> el estado actual de vulnerabilidad digital de la ciudadanía;
                </p>
                <p className="typewriter leading-6">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> que el miedo digital paraliza a la ciudadanía mexicana ante amenazas cibernéticas;
                </p>
                <p className="typewriter leading-6">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> que la vigilancia gubernamental y corporativa viola sistemáticamente nuestros derechos fundamentales;
                </p>
                <p className="typewriter leading-6">
                  <span className="typewriter-bold text-sm">CONSIDERANDO</span> que el conocimiento técnico se mantiene deliberadamente inaccesible para las mayorías;
                </p>
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="flex-grow border-t-2 border-papel-border"></div>
                <Stamp className="text-sm">RESOLUTIVOS</Stamp>
                <div className="flex-grow border-t-2 border-papel-border"></div>
              </div>

              <div className="space-y-4">
                <p className="text-center typewriter-bold text-xl mb-6">
                  POR LO TANTO, DECLARAMOS:
                </p>

                <div className="space-y-3 pl-8">
                  <p className="typewriter leading-6">
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">I.</span>
                    Que cada ciudadano tiene derecho irrenunciable a la privacidad digital sin vigilancia ni censura de ningún tipo.
                  </p>

                  <p className="typewriter leading-6">
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">II.</span>
                    Que transformaremos el miedo en poder colectivo a través de herramientas prácticas, educación accesible y organización comunitaria.
                  </p>

                  <p className="typewriter leading-6">
                    <span className="inline-block w-12 typewriter-bold text-sello-rojo">III.</span>
                    Que ningún activista digital navegará solo en esta lucha por las libertades digitales fundamentales.
                  </p>

                  <p className="typewriter leading-6">
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

          </ExpedienteCard>
        </section>

        {/* Sección de características - Expedientes disponibles */}
        <section className="mb-16">
          <div className="liquid-card">
            <div className="liquid-card-header text-center">
              <h2 className="typewriter-bold text-2xl mb-2">EXPEDIENTES DISPONIBLES</h2>
              <p className="texto-pequeno">CLASIFICACIÓN: PÚBLICO • ACCESO LIBRE</p>
            </div>

            <div className="liquid-card-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/herramientas" className="grupo-expediente">
                  <div className="expediente-liquid-card">
                    <div className="icono-expediente text-4xl mb-4">🚨</div>
                    <h3 className="titulo-expediente typewriter-bold text-lg mb-3">HERRAMIENTAS DE EMERGENCIA</h3>
                    <p className="descripcion-expediente texto-oficial text-sm mb-4">
                      Protocolos de respuesta inmediata ante amenazas digitales. Acceso sin registro.
                    </p>
                    <div className="mt-auto">
                      <button className="boton-expediente-liquid">ACCESO 24/7</button>
                      <span className="codigo-expediente-liquid">EXP-51827K</span>
                    </div>
                  </div>
                </Link>

                <Link href="/red" className="grupo-expediente">
                  <div className="expediente-liquid-card">
                    <div className="icono-expediente text-4xl mb-4">🤝</div>
                    <h3 className="titulo-expediente typewriter-bold text-lg mb-3">RED DE APOYO</h3>
                    <p className="descripcion-expediente texto-oficial text-sm mb-4">
                      Directorio verificado de organizaciones aliadas. Contacto directo disponible.
                    </p>
                    <div className="contador-organizaciones mb-4">
                      <span className="numero-org text-2xl font-bold text-sello-rojo">23</span>
                      <span className="texto-org texto-pequeno">ORGANIZACIONES</span>
                    </div>
                    <div className="mt-auto">
                      <button className="boton-expediente-liquid">VER DIRECTORIO</button>
                      <span className="codigo-expediente-liquid">EXP-O85BV3</span>
                    </div>
                  </div>
                </Link>

                <Link href="/academia" className="grupo-expediente">
                  <div className="expediente-liquid-card">
                    <div className="icono-expediente text-4xl mb-4">🎓</div>
                    <h3 className="titulo-expediente typewriter-bold text-lg mb-3">ACADEMIA ACTIVISTA</h3>
                    <p className="descripcion-expediente texto-oficial text-sm mb-4">
                      Formación certificada en seguridad digital. Tres niveles progresivos.
                    </p>
                    <div className="mt-auto">
                      <button className="boton-expediente-liquid">CERTIFICACIÓN</button>
                      <span className="codigo-expediente-liquid">EXP-A8X66N</span>
                    </div>
                  </div>
                </Link>

                <Link href="/observatorio" className="grupo-expediente">
                  <div className="expediente-liquid-card">
                    <div className="icono-expediente text-4xl mb-4">📊</div>
                    <h3 className="titulo-expediente typewriter-bold text-lg mb-3">OBSERVATORIO</h3>
                    <p className="descripcion-expediente texto-oficial text-sm mb-4">
                      Métricas públicas del estado de libertades digitales en tiempo real.
                    </p>
                    <div className="mt-auto">
                      <button className="boton-expediente-liquid">DATOS ABIERTOS</button>
                      <span className="codigo-expediente-liquid">EXP-3D1G3S</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-6 md:mb-10">
          <div className="liquid-card max-w-3xl mx-auto">
            <div className="liquid-card-content text-center">
              <h2 className="typewriter-bold text-3xl mb-6" style={{color: '#B91C1C'}}>ÚNETE AL MOVIMIENTO</h2>
              <p className="texto-oficial text-lg leading-relaxed mb-8">
                Ya somos <span className="text-2xl font-bold text-sello-rojo">500+ activistas</span> construyendo
                el futuro digital que merecemos.
              </p>
              <div className="mb-6">
                <Link href="/academia">
                  <SelloAccion variant="primary" size="lg">
                    🚀 COMENZAR AHORA
                  </SelloAccion>
                </Link>
              </div>
            </div>
            <div className="liquid-card-footer text-center">
              <p className="texto-pequeno">EXP-TLC9HE • REGISTRO PERMANENTE</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer móvil mejorado */}
      <FooterMobile />
    </div>
  );
}