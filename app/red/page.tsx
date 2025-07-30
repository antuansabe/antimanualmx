'use client';

import { useState, useMemo } from 'react';
import { Button, PaperContainer, Stamp } from '@/shared/ui';
import FiltrosOrganizaciones, { FiltrosState } from '@/shared/ui/FiltrosOrganizaciones';
import MapaInteractivo from '@/shared/ui/MapaInteractivo';
import Link from 'next/link';
import { organizaciones, Organizacion } from '@/shared/data/organizaciones';

const iconosPorTipo = {
  ong: '🏛️',
  colectivo: '🤝',
  academia: '🎓',
  periodismo: '📰',
  legal: '⚖️'
};

export default function RedPage() {
  const [filtros, setFiltros] = useState<FiltrosState>({
    busqueda: '',
    tipo: '',
    estado: '',
    especialidad: '',
    alcance: ''
  });
  const [organizacionSeleccionada, setOrganizacionSeleccionada] = useState<Organizacion | null>(null);
  const [vistaActual, setVistaActual] = useState<'lista' | 'mapa'>('lista');

  // Filtrar organizaciones
  const organizacionesFiltradas = useMemo(() => {
    return organizaciones.filter(org => {
      const coincideBusqueda = !filtros.busqueda || 
        org.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        org.descripcion.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        org.especialidades.some(esp => esp.toLowerCase().includes(filtros.busqueda.toLowerCase()));

      const coincideTipo = !filtros.tipo || org.tipo === filtros.tipo;
      const coincideEstado = !filtros.estado || org.ubicacion.estado === filtros.estado;
      const coincideEspecialidad = !filtros.especialidad || 
        org.especialidades.includes(filtros.especialidad);
      const coincideAlcance = !filtros.alcance || org.alcance === filtros.alcance;

      return coincideBusqueda && coincideTipo && coincideEstado && 
             coincideEspecialidad && coincideAlcance;
    });
  }, [filtros]);

  const resetearFiltros = () => {
    setFiltros({
      busqueda: '',
      tipo: '',
      estado: '',
      especialidad: '',
      alcance: ''
    });
  };

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

      <main className="max-w-7xl mx-auto">
        <section className="mb-12">
          <PaperContainer aged>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                RED DE APOYO COLECTIVO
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                NADIE SE DEFIENDE SOLO
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-8">
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">{organizaciones.length}+ ALIADOS</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">🇲🇽 MÉXICO</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">✅ VERIFICADO</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs">{organizacionesFiltradas.length} VISIBLES</Stamp>
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

        {/* Filtros */}
        <section className="mb-8">
          <PaperContainer>
            <FiltrosOrganizaciones
              organizaciones={organizaciones}
              onFiltrosChange={setFiltros}
              onReset={resetearFiltros}
            />
          </PaperContainer>
        </section>

        {/* Toggle Vista */}
        <section className="mb-8">
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setVistaActual('lista')}
              variant={vistaActual === 'lista' ? 'stamp' : 'secondary'}
              size="sm"
            >
              📋 VISTA LISTA
            </Button>
            <Button
              onClick={() => setVistaActual('mapa')}
              variant={vistaActual === 'mapa' ? 'stamp' : 'secondary'}
              size="sm"
            >
              🗺️ VISTA MAPA
            </Button>
          </div>
        </section>

        {/* Vista Mapa */}
        {vistaActual === 'mapa' && (
          <section className="mb-8">
            <PaperContainer>
              <h2 className="text-xl font-bold mb-4 typewriter text-center">
                🗺️ MAPA INTERACTIVO DE LA RED
              </h2>
              <MapaInteractivo
                organizaciones={organizacionesFiltradas}
                onOrganizacionSelect={setOrganizacionSeleccionada}
                altura="500px"
              />
              
              {organizacionSeleccionada && (
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h3 className="font-bold text-blue-800 mb-2">
                    Organización seleccionada:
                  </h3>
                  <p className="text-blue-700">
                    {organizacionSeleccionada.nombre} - {organizacionSeleccionada.ubicacion.ciudad}
                  </p>
                  <div className="mt-2">
                    <Link href={`/red/${organizacionSeleccionada.id}`}>
                      <Button size="sm">
                        VER PERFIL COMPLETO
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </PaperContainer>
          </section>
        )}

        {/* Vista Lista */}
        {vistaActual === 'lista' && (
          <section className="grid gap-6 mb-16">
            {organizacionesFiltradas.length === 0 ? (
              <PaperContainer>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-2 typewriter">
                    NO SE ENCONTRARON ORGANIZACIONES
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Intenta ajustar los filtros para encontrar organizaciones que coincidan.
                  </p>
                  <Button onClick={resetearFiltros} variant="secondary">
                    LIMPIAR FILTROS
                  </Button>
                </div>
              </PaperContainer>
            ) : (
              organizacionesFiltradas.map((org) => (
                <PaperContainer key={org.id}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{iconosPorTipo[org.tipo]}</span>
                        <Stamp className={`text-xs ${org.verificada ? 'bg-green-600' : 'bg-yellow-600'}`}>
                          {org.verificada ? 'VERIFICADA' : 'PENDIENTE'}
                        </Stamp>
                      </div>
                      <h3 className="text-xl font-bold typewriter mb-2">
                        {org.nombreCorto}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>Ubicación:</strong> {org.ubicacion.ciudad}</p>
                        <p><strong>Alcance:</strong> {org.alcance}</p>
                        <p><strong>Fundación:</strong> {org.fechaFundacion}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <h4 className="font-bold text-lg mb-2">{org.nombre}</h4>
                      <p className="text-gray-700 mb-4">
                        {org.descripcion}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-bold text-sm mb-2">ESPECIALIDADES:</h5>
                        <div className="flex flex-wrap gap-2">
                          {org.especialidades.slice(0, 3).map((esp, index) => (
                            <span 
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs typewriter"
                            >
                              {esp}
                            </span>
                          ))}
                          {org.especialidades.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{org.especialidades.length - 3} más
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href={org.contacto.sitioWeb}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm">
                            🌐 SITIO WEB
                          </Button>
                        </a>
                        <Link href={`/red/${org.id}`}>
                          <Button variant="secondary" size="sm">
                            📋 VER PERFIL
                          </Button>
                        </Link>
                        {org.contacto.email && (
                          <a href={`mailto:${org.contacto.email}`}>
                            <Button variant="secondary" size="sm">
                              ✉️ CONTACTAR
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </PaperContainer>
              ))
            )}
          </section>
        )}

        {/* Alertas Comunitarias */}
        <section className="mb-16">
          <PaperContainer>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 typewriter">
                🚨 ALERTAS COMUNITARIAS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Stamp className="text-xs bg-red-600">URGENTE</Stamp>
                    <span className="text-xs text-red-600 typewriter">Hace 2 horas</span>
                  </div>
                  <h3 className="font-bold text-red-800 mb-2">
                    Campaña de phishing dirigida a activistas ambientales
                  </h3>
                  <p className="text-red-700 text-sm mb-2">
                    Se detectaron correos maliciosos suplantando a organizaciones ambientales 
                    para robar credenciales. Verificar siempre remitentes.
                  </p>
                  <p className="text-xs text-red-600">📍 Nacional</p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Stamp className="text-xs bg-orange-600">MODERADO</Stamp>
                    <span className="text-xs text-orange-600 typewriter">Hace 1 día</span>
                  </div>
                  <h3 className="font-bold text-orange-800 mb-2">
                    Incremento en vigilancia digital durante elecciones
                  </h3>
                  <p className="text-orange-700 text-sm mb-2">
                    Reportes de monitoreo aumentado en redes sociales y aplicaciones de mensajería 
                    en zonas electorales.
                  </p>
                  <p className="text-xs text-orange-600">📍 Jalisco, Coahuila</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link href="/red/alertas">
                  <Button variant="secondary">
                    VER TODAS LAS ALERTAS
                  </Button>
                </Link>
              </div>
            </div>
          </PaperContainer>
        </section>

        {/* Call to Action */}
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
                📝 REGISTRAR ORGANIZACIÓN
              </Button>
              <Button variant="secondary" size="lg">
                👤 UNIRSE COMO ACTIVISTA
              </Button>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}