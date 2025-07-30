import { Button, PaperContainer, Stamp } from '@/shared/ui';
import Link from 'next/link';

const herramientas = [
  {
    id: 'boton-panico',
    nombre: 'Botón de Pánico',
    descripcion: 'Protocolo inmediato para borrar rastros en 60 segundos',
    icono: '🚨',
    urgencia: 'ALTA',
    tiempo: '1-2 min'
  },
  {
    id: 'borrado-seguro',
    nombre: 'Borrado Seguro',
    descripcion: 'Elimina archivos, historiales y metadatos de forma permanente',
    icono: '🗑️',
    urgencia: 'MEDIA',
    tiempo: '5-10 min'
  },
  {
    id: 'comunicacion-cifrada',
    nombre: 'Comunicación Cifrada',
    descripcion: 'Configura Signal y otras apps seguras paso a paso',
    icono: '🔐',
    urgencia: 'MEDIA',
    tiempo: '10-15 min'
  },
  {
    id: 'phishing-detector',
    nombre: 'Detector de Phishing',
    descripcion: 'Simulador interactivo para identificar correos maliciosos',
    icono: '🎣',
    urgencia: 'MEDIA',
    tiempo: '5-10 min'
  }
];

export default function HerramientasPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / KIT DE EMERGENCIA
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-12">
          <PaperContainer aged>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                KIT DE EMERGENCIA DIGITAL
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                PROTOCOLOS DE DEFENSA INMEDIATA
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-left">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">⚠️</div>
                  <div>
                    <p className="font-bold text-red-800">IMPORTANTE:</p>
                    <p className="text-red-700">
                      Estas herramientas están diseñadas para situaciones de riesgo real. 
                      Practica primero en un entorno seguro.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">🔓 SIEMPRE GRATIS</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">🏃‍♂️ ACCIÓN INMEDIATA</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">✅ VERIFICADO</Stamp>
                </div>
              </div>
            </div>
          </PaperContainer>
        </section>

        <section className="grid md:grid-cols-1 gap-8">
          {herramientas.map((herramienta) => (
            <PaperContainer key={herramienta.id}>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="text-6xl">{herramienta.icono}</div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold typewriter">
                      {herramienta.nombre}
                    </h3>
                    <Stamp className={`text-xs ${
                      herramienta.urgencia === 'ALTA' ? 'bg-red-600' : 'bg-orange-500'
                    }`}>
                      {herramienta.urgencia}
                    </Stamp>
                    <span className="text-sm text-gray-600 typewriter">
                      ⏱️ {herramienta.tiempo}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg">
                    {herramienta.descripcion}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/herramientas/${herramienta.id}`}>
                      <Button size="lg">
                        USAR AHORA
                      </Button>
                    </Link>
                    <Link href={`/herramientas/${herramienta.id}/tutorial`}>
                      <Button variant="secondary" size="lg">
                        VER TUTORIAL
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </PaperContainer>
          ))}
        </section>

        <section className="mt-16">
          <PaperContainer>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 typewriter">
                ¿NECESITAS AYUDA INMEDIATA?
              </h2>
              <p className="text-gray-600 mb-6">
                Si estás en peligro inmediato, contacta a estas organizaciones especializadas:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold text-red-700">R3D - Red en Defensa de los Derechos Digitales</h3>
                  <p className="text-sm text-gray-600">Litigio estratégico y apoyo legal</p>
                  <a href="https://r3d.mx" className="text-blue-600 underline">r3d.mx</a>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold text-red-700">Artículo 19</h3>
                  <p className="text-sm text-gray-600">Libertad de expresión y protección a periodistas</p>
                  <a href="https://articulo19.org" className="text-blue-600 underline">articulo19.org</a>
                </div>
              </div>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}