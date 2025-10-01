'use client';

import { useState, useMemo } from 'react';
import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
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

  const currentDate = new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

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
    <div className="min-h-screen">
      <main className="page-container py-8 md:py-12">
        {/* Portada del directorio oficial */}
        <section className="mb-12">
          <div className="liquid-card">
            {/* Encabezado institucional */}
            <div className="liquid-card-header">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="texto-pequeno mb-1">REPÚBLICA DIGITAL DE MÉXICO</p>
                  <p className="texto-pequeno">DIRECTORIO NACIONAL DE ORGANIZACIONES ALIADAS</p>
                </div>
                <div className="text-right">
                  <Stamp className="text-xs bg-sello-rojo text-white transform rotate-2 mb-2">OFICIAL</Stamp>
                  <p className="texto-pequeno" style={{color: '#1A1A1A'}}>Directorio: DNA-{new Date().getFullYear()}-001</p>
                  <p className="texto-pequeno" style={{color: '#1A1A1A'}}>Actualización: {currentDate}</p>
                </div>
              </div>
            </div>

            <div className="liquid-card-content">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                  RED DE APOYO COLECTIVO
                </h1>
                <div className="inline-block border-4 border-double border-papel-border px-6 py-2 mb-4 rounded-lg">
                  <p className="text-lg md:text-xl font-bold tracking-widest typewriter">
                    DIRECTORIO NACIONAL VERIFICADO
                  </p>
                </div>
                <p className="texto-pequeno mt-4">
                  NADIE SE DEFIENDE SOLO • REGISTRO PÚBLICO • ACCESO LIBRE
                </p>
              </div>

              {/* Estadísticas oficiales */}
              <div className="bg-papel-sombra border-2 border-papel-border p-6 mb-8 rounded-lg">
                <div className="text-center mb-6">
                  <p className="typewriter-bold" style={{color: '#1A1A1A'}}>ESTADÍSTICAS DEL DIRECTORIO NACIONAL</p>
                  <p className="texto-pequeno mt-2" style={{color: '#1A1A1A'}}>ACTUALIZACIÓN: {currentDate}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="border border-papel-border p-4 bg-papel-base rounded">
                    <div className="text-3xl font-bold typewriter mb-2" style={{color: '#B91C1C'}}>{organizaciones.length}</div>
                    <div className="typewriter-bold text-xs mb-1" style={{color: '#1A1A1A'}}>ORGANIZACIONES</div>
                    <div className="texto-pequeno" style={{color: '#1A1A1A'}}>Registradas y activas</div>
                  </div>
                  <div className="border border-papel-border p-4 bg-papel-base rounded">
                    <div className="text-3xl font-bold typewriter mb-2" style={{color: '#B91C1C'}}>32</div>
                    <div className="typewriter-bold text-xs mb-1" style={{color: '#1A1A1A'}}>ENTIDADES</div>
                    <div className="texto-pequeno" style={{color: '#1A1A1A'}}>Federativas con presencia</div>
                  </div>
                  <div className="border border-papel-border p-4 bg-papel-base rounded">
                    <div className="text-3xl font-bold typewriter mb-2" style={{color: '#A16207'}}>{organizaciones.filter(org => org.verificada).length}</div>
                    <div className="typewriter-bold text-xs mb-1" style={{color: '#1A1A1A'}}>VERIFICADAS</div>
                    <div className="texto-pequeno" style={{color: '#1A1A1A'}}>Proceso completado</div>
                  </div>
                  <div className="border border-papel-border p-4 bg-papel-base rounded">
                    <div className="text-3xl font-bold typewriter mb-2" style={{color: '#A16207'}}>{organizacionesFiltradas.length}</div>
                    <div className="typewriter-bold text-xs mb-1" style={{color: '#1A1A1A'}}>RESULTADOS</div>
                    <div className="texto-pequeno" style={{color: '#1A1A1A'}}>Filtros aplicados</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-papel-border text-center">
                  <p className="texto-pequeno" style={{color: '#1A1A1A'}}>
                    PRÓXIMA ACTUALIZACIÓN: {new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString('es-MX')} •
                    COBERTURA: NACIONAL • ESTADO: OPERATIVO
                  </p>
                </div>
              </div>

              {/* Declaración institucional */}
              <div className="space-y-4 texto-oficial leading-relaxed">
                <div className="pl-8 border-l-4 border-papel-border">
                  <p className="mb-4">
                    <span className="typewriter-bold text-sm">PROPÓSITO:</span> Este directorio contiene el registro oficial de organizaciones, colectivos y activistas comprometidos con la defensa de los derechos digitales en territorio mexicano.
                  </p>
                  <p className="mb-4">
                    <span className="typewriter-bold text-sm">VERIFICACIÓN:</span> Cada entrada ha sido evaluada por su trayectoria, compromiso y coherencia con los principios de la resistencia digital colectiva.
                  </p>
                  <p className="mb-4">
                    <span className="typewriter-bold text-sm">ACTUALIZACIÓN:</span> El directorio se actualiza mensualmente para garantizar la vigencia y precisión de la información contenida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sistema de consulta */}
        <section className="mb-8">
          <div className="liquid-card">
            <div className="liquid-card-header">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1">SISTEMA DE CONSULTA</p>
                  <h2 className="text-xl font-bold typewriter">
                    FILTROS DE BÚSQUEDA AVANZADA
                  </h2>
                </div>
                <Stamp className="text-xs bg-sello-rojo text-white transform rotate-3">PÚBLICO</Stamp>
              </div>
            </div>
            <div className="liquid-card-content">
              <FiltrosOrganizaciones
                organizaciones={organizaciones}
                onFiltrosChange={setFiltros}
                onReset={resetearFiltros}
              />
            </div>
          </div>
        </section>

        {/* Panel de control de vista */}
        <section className="mb-8">
          <div className="flex justify-center gap-4">
            <SelloAccion
              onClick={() => setVistaActual('lista')}
              variant={vistaActual === 'lista' ? 'stamp' : 'secondary'}
              size="sm"
            >
              📋 VISTA EXPEDIENTES
            </SelloAccion>
            <SelloAccion
              onClick={() => setVistaActual('mapa')}
              variant={vistaActual === 'mapa' ? 'stamp' : 'secondary'}
              size="sm"
            >
              🗺️ VISTA CARTOGRÁFICA
            </SelloAccion>
          </div>
        </section>

        {/* Vista cartográfica */}
        {vistaActual === 'mapa' && (
          <section className="mb-8">
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-xl font-bold typewriter text-center">
                  🗺️ MAPA CARTOGRÁFICO NACIONAL
                </h2>
                <p className="texto-pequeno text-center mt-2">DISTRIBUCIÓN TERRITORIAL DE ORGANIZACIONES ALIADAS</p>
              </div>
              <div className="liquid-card-content">
                <MapaInteractivo
                  organizaciones={organizacionesFiltradas}
                  onOrganizacionSelect={setOrganizacionSeleccionada}
                  altura="500px"
                />

                {organizacionSeleccionada && (
                  <div className="mt-6">
                    <div className="expediente-liquid-card">
                      <div className="border-b border-dorado pb-3 mb-3">
                        <h3 className="typewriter-bold" style={{color: '#A16207'}}>
                          ORGANIZACIÓN SELECCIONADA:
                        </h3>
                      </div>
                      <p className="texto-oficial mb-2">
                        <strong>{organizacionSeleccionada.nombre}</strong>
                      </p>
                      <p className="texto-pequeno mb-3">
                        📍 {organizacionSeleccionada.ubicacion.ciudad}, {organizacionSeleccionada.ubicacion.estado}
                      </p>
                      <Link href={`/red/${organizacionSeleccionada.id}`}>
                        <SelloAccion variant="approved" size="sm">
                          📋 CONSULTAR EXPEDIENTE
                        </SelloAccion>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Vista de expedientes */}
        {vistaActual === 'lista' && (
          <section className="mb-16">
            <div className="liquid-card">
              <div className="liquid-card-header text-center">
                <h2 className="typewriter-bold text-2xl mb-2">EXPEDIENTES ORGANIZACIONALES</h2>
                <p className="texto-pequeno">DIRECTORIO NACIONAL DE ORGANIZACIONES ALIADAS</p>
              </div>
              <div className="liquid-card-content">
                <div className="space-y-6">
                  {organizacionesFiltradas.length === 0 ? (
                    <div className="expediente-liquid-card">
                      <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold mb-2 typewriter">
                          NO SE ENCONTRARON RESULTADOS
                        </h3>
                        <p className="texto-oficial mb-4">
                          Los criterios de búsqueda aplicados no coinciden con ningún registro
                          en el directorio nacional. Modifique los filtros para ampliar la consulta.
                        </p>
                        <SelloAccion onClick={resetearFiltros} variant="secondary">
                          🔄 RESTABLECER FILTROS
                        </SelloAccion>
                      </div>
                    </div>
                  ) : (
                organizacionesFiltradas.map((org) => (
                  <ExpedienteCard
                    key={org.id}
                    variant={org.verificada ? 'approved' : 'default'}
                    clipped
                    className="organizacion-card"
                  >
                    {/* Encabezado del expediente */}
                    <div className="organizacion-card-header">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex items-start gap-4">
                          <div className="text-center">
                            <div className="text-3xl mb-2">{iconosPorTipo[org.tipo]}</div>
                            <Stamp className={`text-xs ${org.verificada ? 'bg-dorado text-white' : 'bg-sello-rojo text-white'}`}>
                              {org.verificada ? 'VERIFICADA' : 'EN PROCESO'}
                            </Stamp>
                          </div>
                          <div>
                            <p className="texto-pequeno mb-1" style={{color: '#1A1A1A'}}>EXPEDIENTE ORG-{org.id.toUpperCase()}</p>
                            <h3 className="text-xl md:text-2xl font-bold typewriter mb-1" style={{color: '#1A1A1A'}}>
                              {org.nombreCorto}
                            </h3>
                            <p className="texto-pequeno mb-2" style={{color: '#1A1A1A'}}>{org.nombre}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="texto-pequeno" style={{color: '#1A1A1A'}}>📍 {org.ubicacion.ciudad}</p>
                          <p className="texto-pequeno" style={{color: '#1A1A1A'}}>🗓️ Fund. {org.fechaFundacion}</p>
                          <p className="texto-pequeno" style={{color: '#1A1A1A'}}>📡 {org.alcance}</p>
                        </div>
                      </div>
                    </div>

                    {/* Contenido de la card */}
                    <div className="organizacion-card-content">
                      {/* Descripción institucional */}
                      <div className="organizacion-card-description">
                        <p className="texto-oficial leading-relaxed mb-4">
                          {org.descripcion}
                        </p>

                        <div className="bg-papel-sombra border-l-4 border-dorado p-4">
                          <p className="typewriter-bold text-sm mb-2" style={{color: '#1A1A1A'}}>ÁREAS DE ESPECIALIZACIÓN:</p>
                          <div className="grid md:grid-cols-3 gap-2">
                            {org.especialidades.map((esp, index) => (
                              <div key={index} className="flex items-center gap-2 texto-pequeno">
                                <span style={{color: '#A16207'}}>▶</span>
                                <span style={{color: '#1A1A1A'}}>{esp}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Acciones disponibles */}
                      <div className="organizacion-card-actions">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={org.contacto.sitioWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SelloAccion variant="primary" size="sm">
                              🌐 SITIO OFICIAL
                            </SelloAccion>
                          </a>
                          <Link href={`/red/${org.id}`}>
                            <SelloAccion variant="secondary" size="sm">
                              📋 EXPEDIENTE COMPLETO
                            </SelloAccion>
                          </Link>
                          {org.contacto.email && (
                            <a href={`mailto:${org.contacto.email}`}>
                              <SelloAccion variant="secondary" size="sm">
                                ✉️ CONTACTO DIRECTO
                              </SelloAccion>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Código de registro */}
                    <div className="organizacion-card-footer">
                      <p className="text-xs typewriter" style={{color: '#1A1A1A', opacity: 0.6}}>
                        ORG-{org.id.toUpperCase()}-{new Date().getFullYear()}
                      </p>
                    </div>
                  </ExpedienteCard>
                ))
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sistema de alertas */}
        <section className="mb-16">
          <ExpedienteCard variant="urgent" className="max-w-5xl mx-auto" clipped>
            <div className="border-b-2 border-sello-rojo pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1 text-sello-rojo">SISTEMA DE ALERTAS COMUNITARIAS</p>
                  <h2 className="text-2xl font-bold typewriter text-sello-rojo">
                    🚨 BOLETÍN DE SEGURIDAD NACIONAL
                  </h2>
                </div>
                <Stamp className="text-xs bg-sello-rojo text-white">URGENTE</Stamp>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sello-rojo/10 border-l-4 border-sello-rojo p-4 mb-6">
                <p className="typewriter-bold text-sello-rojo mb-2">PROPÓSITO DEL SISTEMA:</p>
                <p className="texto-oficial">
                  Red de alerta temprana para amenazas digitales dirigidas contra organizaciones 
                  de la sociedad civil y activistas de derechos humanos en territorio nacional.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ExpedienteCard variant="urgent">
                  <div className="border-b border-sello-rojo pb-3 mb-3">
                    <div className="flex items-center justify-between">
                      <Stamp className="text-xs bg-sello-rojo text-white">CRÍTICO</Stamp>
                      <span className="texto-pequeno text-sello-rojo">Emitida: 2 horas</span>
                    </div>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-2 text-sello-rojo">
                    OPERACIÓN DE PHISHING DIRIGIDA
                  </h3>
                  <p className="texto-oficial text-sm mb-3">
                    Campaña de suplantación masiva dirigida contra defensores ambientales. 
                    Correos fraudulentos con logos de organizaciones legítimas para robo de credenciales.
                  </p>
                  <div className="pt-3 border-t border-sello-rojo">
                    <p className="texto-pequeno font-bold">📍 COBERTURA: Nacional</p>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard variant="default">
                  <div className="border-b border-papel-border pb-3 mb-3">
                    <div className="flex items-center justify-between">
                      <Stamp className="text-xs bg-dorado text-white">MODERADO</Stamp>
                      <span className="texto-pequeno">Emitida: 1 día</span>
                    </div>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-2">
                    INCREMENTO EN VIGILANCIA ELECTORAL
                  </h3>
                  <p className="texto-oficial text-sm mb-3">
                    Reportes verificados de monitoreo intensificado en plataformas digitales 
                    y aplicaciones de mensajería durante procesos electorales.
                  </p>
                  <div className="pt-3 border-t border-papel-border">
                    <p className="texto-pequeno font-bold">📍 COBERTURA: Jalisco, Coahuila</p>
                  </div>
                </ExpedienteCard>
              </div>
              
              <div className="text-center pt-6 border-t border-sello-rojo">
                <Link href="/red/alertas">
                  <SelloAccion variant="urgent">
                    🚨 CONSULTAR TODAS LAS ALERTAS
                  </SelloAccion>
                </Link>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Registro oficial */}
        <section className="text-center">
          <ExpedienteCard variant="approved" className="max-w-4xl mx-auto">
            <div className="border-b border-dorado pb-4 mb-6">
              <h2 className="text-2xl font-bold typewriter" style={{color: '#A16207'}}>
                REGISTRO EN EL DIRECTORIO NACIONAL
              </h2>
              <p className="texto-pequeno mt-2">INCORPORACIÓN DE NUEVAS ORGANIZACIONES ALIADAS</p>
            </div>

            <div className="space-y-6">
              <div className="bg-papel-sombra border border-dorado p-6">
                <p className="typewriter-bold mb-2" style={{color: '#A16207'}}>REQUISITOS DE INCORPORACIÓN ORGANIZACIONAL:</p>
                <p className="texto-oficial leading-relaxed">
                  Organizaciones y colectivos comprometidos con la defensa de derechos
                  digitales pueden solicitar su incorporación al directorio nacional mediante
                  proceso de verificación institucional. El registro requiere validación de
                  trayectoria, estructura organizacional y coherencia ideológica.
                </p>
              </div>

              <p className="texto-oficial leading-relaxed max-w-3xl mx-auto">
                La red de apoyo colectivo se fortalece con cada nueva incorporación organizacional.
                Juntos construimos un ecosistema resiliente de resistencia digital institucional.
              </p>

              <div className="flex justify-center">
                <a href="mailto:antuansabe@gmail.com?subject=Solicitud de Registro Organizacional&body=Nombre de la organización:%0D%0ATipo de organización:%0D%0ASitio web:%0D%0ADescripción de actividades:%0D%0AContacto responsable:%0D%0ATeléfono:%0D%0A%0D%0APor favor, proporcione información detallada sobre su organización para iniciar el proceso de verificación.">
                  <SelloAccion
                    variant="stamp"
                    size="lg"
                    className="bg-verde-aprobado text-white border-2 border-verde-aprobado hover:bg-green-700"
                  >
                    📝 SOLICITAR REGISTRO ORGANIZACIONAL
                  </SelloAccion>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-dorado">
                <p className="texto-pequeno">
                  PROCESO DE VERIFICACIÓN: 5-10 días hábiles • REGISTRO GRATUITO • CONFIDENCIALIDAD GARANTIZADA
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}