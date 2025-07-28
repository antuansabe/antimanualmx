import { Button, PaperContainer, Stamp } from '@/shared/ui';
import Link from 'next/link';

const organizaciones = [
  {
    nombre: 'R3D - Red en Defensa de los Derechos Digitales',
    descripcion: 'Organización líder en litigio estratégico y defensa de derechos digitales en México.',
    especialidad: 'Litigio estratégico, transparencia',
    contacto: 'r3d.mx',
    ubicacion: 'Ciudad de México',
    estado: 'Activa'
  },
  {
    nombre: 'Artículo 19',
    descripcion: 'Organización internacional que defiende la libertad de expresión y el derecho a la información.',
    especialidad: 'Libertad de expresión, protección a periodistas',
    contacto: 'articulo19.org',
    ubicacion: 'Nacional',
    estado: 'Activa'
  },
  {
    nombre: 'SocialTIC',
    descripcion: 'Organización que promueve el uso estratégico de tecnologías digitales para el cambio social.',
    especialidad: 'Tecnología cívica, capacitación',
    contacto: 'socialtic.org',
    ubicacion: 'Ciudad de México',
    estado: 'Activa'
  },
  {
    nombre: 'Luchadoras',
    descripcion: 'Colectiva feminista que trabaja contra la violencia digital de género.',
    especialidad: 'Violencia digital, género',
    contacto: 'luchadoras.mx',
    ubicacion: 'Nacional',
    estado: 'Activa'
  }
];

export default function RedPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / RED DE APOYO
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-12">
          <PaperContainer aged>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                RED DE APOYO COLECTIVO
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                NADIE SE DEFIENDE SOLO
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-8">
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">🤝 20+ ALIADOS</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">🇲🇽 MÉXICO</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">✅ VERIFICADO</Stamp>
                </div>
              </div>

              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Directorio verificado de organizaciones, colectivos y activistas que luchan 
                por la libertad digital en México. Cada aliado ha sido evaluado por su 
                trayectoria y compromiso con los derechos digitales.
              </p>
            </div>
          </PaperContainer>
        </section>

        <section className="grid gap-6 mb-16">
          {organizaciones.map((org, index) => (
            <PaperContainer key={index}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Stamp className="text-xs bg-green-600">
                      {org.estado}
                    </Stamp>
                    <span className="text-sm text-gray-500 typewriter">
                      {org.ubicacion}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold typewriter mb-2">
                    {org.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Especialidad:</strong> {org.especialidad}
                  </p>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    {org.descripcion}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`https://${org.contacto}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm">
                        CONTACTAR
                      </Button>
                    </a>
                    <Button variant="secondary" size="sm">
                      VER PERFIL
                    </Button>
                  </div>
                </div>
              </div>
            </PaperContainer>
          ))}
        </section>

        <section className="mb-16">
          <PaperContainer>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 typewriter">
                🚨 ALERTAS COMUNITARIAS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-left">
                  <h3 className="font-bold text-red-800 mb-2">URGENTE</h3>
                  <p className="text-red-700 text-sm mb-2">
                    Nueva campaña de phishing dirigida a activistas ambientales
                  </p>
                  <p className="text-xs text-red-600">Hace 2 horas • Nacional</p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 text-left">
                  <h3 className="font-bold text-orange-800 mb-2">MODERADO</h3>
                  <p className="text-orange-700 text-sm mb-2">
                    Incremento en vigilancia digital en elecciones locales
                  </p>
                  <p className="text-xs text-orange-600">Hace 1 día • Jalisco</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="secondary">
                  VER TODAS LAS ALERTAS
                </Button>
              </div>
            </div>
          </PaperContainer>
        </section>

        <section className="text-center">
          <PaperContainer>
            <h2 className="text-2xl font-bold mb-4 typewriter">
              ¿QUIERES UNIRTE A LA RED?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Si representas una organización comprometida con los derechos digitales, 
              o eres un activista que quiere formar parte de esta red de apoyo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                REGISTRAR ORGANIZACIÓN
              </Button>
              <Button variant="secondary" size="lg">
                UNIRSE COMO ACTIVISTA
              </Button>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}