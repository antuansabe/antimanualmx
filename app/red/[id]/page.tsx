import { notFound } from 'next/navigation';
import { Button, PaperContainer, Stamp } from '@/shared/ui';
import MapaInteractivo from '@/shared/ui/MapaInteractivo';
import Link from 'next/link';
import { organizaciones } from '@/shared/data/organizaciones';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PerfilOrganizacionPage({ params }: PageProps) {
  const { id } = await params;
  const organizacion = organizaciones.find(org => org.id === id);

  if (!organizacion) {
    notFound();
  }

  const iconosPorTipo = {
    ong: '🏛️',
    colectivo: '🤝',
    academia: '🎓',
    periodismo: '📰',
    legal: '⚖️'
  };

  const coloresPorTipo = {
    ong: 'bg-blue-100 text-blue-800',
    colectivo: 'bg-purple-100 text-purple-800',
    academia: 'bg-green-100 text-green-800',
    periodismo: 'bg-orange-100 text-orange-800',
    legal: 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <Link href="/red" className="flex items-center gap-2">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / RED DE APOYO / {organizacion.nombreCorto}
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Header de la organización */}
        <section className="mb-12">
          <PaperContainer aged>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 text-center">
                <div className="text-8xl mb-4">{iconosPorTipo[organizacion.tipo]}</div>
                <div className="space-y-2">
                  <Stamp className={`text-xs ${organizacion.verificada ? 'bg-green-600' : 'bg-yellow-600'}`}>
                    {organizacion.verificada ? '✅ VERIFICADA' : '⏳ PENDIENTE'}
                  </Stamp>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${coloresPorTipo[organizacion.tipo]}`}>
                    {organizacion.tipo.toUpperCase()}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 typewriter">
                  {organizacion.nombre}
                </h1>
                <p className="text-xl text-red-700 font-bold mb-4">
                  {organizacion.nombreCorto}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                  <div>
                    <strong>Fundación:</strong><br />
                    {organizacion.fechaFundacion}
                  </div>
                  <div>
                    <strong>Alcance:</strong><br />
                    {organizacion.alcance}
                  </div>
                  <div>
                    <strong>Ubicación:</strong><br />
                    {organizacion.ubicacion.ciudad}
                  </div>
                  <div>
                    <strong>Estado:</strong><br />
                    <span className="text-green-600 font-bold">{organizacion.estado}</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  {organizacion.descripcion}
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-blue-800 mb-2">MISIÓN</h3>
                  <p className="text-blue-700 italic">
                    {organizacion.mision}
                  </p>
                </div>
              </div>
            </div>
          </PaperContainer>
        </section>

        {/* Especialidades y Servicios */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <PaperContainer>
            <h2 className="text-xl font-bold mb-4 typewriter">
              🎯 ESPECIALIDADES
            </h2>
            <div className="space-y-2">
              {organizacion.especialidades.map((esp, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>{esp}</span>
                </div>
              ))}
            </div>
          </PaperContainer>

          <PaperContainer>
            <h2 className="text-xl font-bold mb-4 typewriter">
              🛠️ SERVICIOS
            </h2>
            <div className="space-y-2">
              {organizacion.servicios.map((servicio, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>{servicio}</span>
                </div>
              ))}
            </div>
          </PaperContainer>
        </section>

        {/* Logros y Colaboraciones */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <PaperContainer>
            <h2 className="text-xl font-bold mb-4 typewriter">
              🏆 LOGROS PRINCIPALES
            </h2>
            <div className="space-y-3">
              {organizacion.logros.map((logro, index) => (
                <div key={index} className="p-3 bg-green-50 border-l-4 border-green-500">
                  <p className="text-green-800">{logro}</p>
                </div>
              ))}
            </div>
          </PaperContainer>

          <PaperContainer>
            <h2 className="text-xl font-bold mb-4 typewriter">
              🤝 COLABORACIONES
            </h2>
            <div className="space-y-2">
              {organizacion.colaboraciones.map((colab, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>{colab}</span>
                </div>
              ))}
            </div>
          </PaperContainer>
        </section>

        {/* Mapa de Ubicación */}
        <section className="mb-12">
          <PaperContainer>
            <h2 className="text-xl font-bold mb-4 typewriter text-center">
              📍 UBICACIÓN
            </h2>
            <div className="mb-4 text-center">
              <p className="text-gray-700">
                {organizacion.ubicacion.ciudad}, {organizacion.ubicacion.estado}
              </p>
            </div>
            <MapaInteractivo
              organizaciones={[organizacion]}
              altura="300px"
            />
          </PaperContainer>
        </section>

        {/* Contacto */}
        <section className="mb-12">
          <PaperContainer>
            <h2 className="text-xl font-bold mb-6 typewriter text-center">
              📞 INFORMACIÓN DE CONTACTO
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">CONTACTO DIRECTO</h3>
                <div className="space-y-3">
                  <a 
                    href={organizacion.contacto.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl">🌐</span>
                    <div>
                      <div className="font-bold">Sitio Web</div>
                      <div className="text-sm text-gray-600">{organizacion.contacto.sitioWeb}</div>
                    </div>
                  </a>
                  
                  {organizacion.contacto.email && (
                    <a 
                      href={`mailto:${organizacion.contacto.email}`}
                      className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl">✉️</span>
                      <div>
                        <div className="font-bold">Email</div>
                        <div className="text-sm text-gray-600">{organizacion.contacto.email}</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-3">REDES SOCIALES</h3>
                <div className="space-y-3">
                  {organizacion.contacto.twitter && (
                    <a 
                      href={`https://twitter.com/${organizacion.contacto.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl">🐦</span>
                      <div>
                        <div className="font-bold">Twitter</div>
                        <div className="text-sm text-gray-600">{organizacion.contacto.twitter}</div>
                      </div>
                    </a>
                  )}
                  
                  {organizacion.contacto.facebook && (
                    <a 
                      href={`https://facebook.com/${organizacion.contacto.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl">📘</span>
                      <div>
                        <div className="font-bold">Facebook</div>
                        <div className="text-sm text-gray-600">{organizacion.contacto.facebook}</div>
                      </div>
                    </a>
                  )}
                  
                  {organizacion.contacto.telegram && (
                    <a 
                      href={`https://t.me/${organizacion.contacto.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl">✈️</span>
                      <div>
                        <div className="font-bold">Telegram</div>
                        <div className="text-sm text-gray-600">{organizacion.contacto.telegram}</div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  🤝 SOLICITAR COLABORACIÓN
                </Button>
                <Button variant="secondary" size="lg">
                  📋 REPORTAR INFORMACIÓN
                </Button>
              </div>
            </div>
          </PaperContainer>
        </section>

        {/* Navegación */}
        <section className="text-center">
          <PaperContainer>
            <h3 className="font-bold mb-4 typewriter">
              EXPLORAR MÁS ORGANIZACIONES
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/red">
                <Button variant="secondary" size="lg">
                  ← VOLVER AL DIRECTORIO
                </Button>
              </Link>
              <Link href="/red?vista=mapa">
                <Button variant="secondary" size="lg">
                  🗺️ VER EN MAPA
                </Button>
              </Link>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}