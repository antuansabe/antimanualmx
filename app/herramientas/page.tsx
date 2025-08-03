import { SelloAccion, ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';

const protocolos = [
  {
    id: 'boton-panico',
    codigo: 'PROT-001',
    nombre: 'PROTOCOLO DE BORRADO INMEDIATO',
    descripcion: 'Procedimiento de emergencia para eliminación de rastros digitales en 60 segundos',
    icono: '🚨',
    clasificacion: 'URGENTE',
    tiempo: '1-2 min',
    autorizado: 'DIR-SEG-001'
  },
  {
    id: 'borrado-seguro',
    codigo: 'PROT-002',
    nombre: 'ELIMINACIÓN FORENSE AVANZADA',
    descripcion: 'Procedimiento para destrucción permanente de archivos, historiales y metadatos',
    icono: '🗑️',
    clasificacion: 'ALTA',
    tiempo: '5-10 min',
    autorizado: 'DIR-TEC-002'
  },
  {
    id: 'comunicacion-cifrada',
    codigo: 'PROT-003',
    nombre: 'ESTABLECIMIENTO DE CANAL SEGURO',
    descripcion: 'Manual de configuración e implementación de comunicaciones cifradas',
    icono: '🔐',
    clasificacion: 'ALTA',
    tiempo: '10-15 min',
    autorizado: 'DIR-COM-003'
  },
  {
    id: 'phishing-detector',
    codigo: 'PROT-004',
    nombre: 'IDENTIFICACIÓN DE AMENAZAS DIGITALES',
    descripcion: 'Sistema de entrenamiento para detección de ataques de ingeniería social',
    icono: '🎣',
    clasificacion: 'MEDIA',
    tiempo: '5-10 min',
    autorizado: 'DIR-EDU-004'
  }
];

export default function HerramientasPage() {
  const currentDate = new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Encabezado del expediente urgente */}
        <section className="mb-12">
          <ExpedienteCard variant="urgent" className="max-w-5xl mx-auto" clipped>
            {/* Header oficial de emergencia */}
            <div className="border-b-2 border-doble border-sello-rojo pb-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="texto-pequeno mb-1 text-sello-rojo">REPÚBLICA DIGITAL DE MÉXICO</p>
                  <p className="texto-pequeno text-sello-rojo">CENTRO DE RESPUESTA A EMERGENCIAS DIGITALES</p>
                </div>
                <div className="text-right">
                  <Stamp className="text-xs bg-sello-rojo text-white transform rotate-3 mb-2">URGENTE</Stamp>
                  <p className="texto-pequeno">Expediente: CRED-{new Date().getFullYear()}-EMG-001</p>
                  <p className="texto-pequeno">Fecha: {currentDate}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter text-sello-rojo">
                KIT DE EMERGENCIA DIGITAL
              </h1>
              <div className="inline-block border-4 border-double border-sello-rojo px-6 py-2 mb-4 bg-sello-rojo/10">
                <p className="text-lg md:text-xl text-sello-rojo font-bold tracking-widest typewriter">
                  PROTOCOLOS DE DEFENSA INMEDIATA
                </p>
              </div>
              <p className="texto-pequeno mt-4">
                CLASIFICACIÓN: URGENTE • DISTRIBUCIÓN: LIBRE • AUTORIZACIÓN: CRED-001
              </p>
            </div>

            {/* Aviso de seguridad oficial */}
            <div className="bg-sello-rojo/5 border-l-8 border-sello-rojo p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚠️</div>
                <div>
                  <p className="typewriter-bold text-sello-rojo mb-2">AVISO DE SEGURIDAD NACIONAL:</p>
                  <p className="texto-oficial leading-relaxed">
                    Los procedimientos contenidos en este expediente están diseñados para situaciones de riesgo 
                    real contra la seguridad digital ciudadana. Se recomienda encarecidamente realizar pruebas 
                    en entorno controlado antes de implementar en situaciones críticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Sellos de autorización */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <Stamp className="text-xs mb-2">GRATUITO</Stamp>
                <p className="texto-pequeno">Acceso público garantizado</p>
              </div>
              <div>
                <Stamp className="text-xs mb-2 bg-sello-rojo">INMEDIATO</Stamp>
                <p className="texto-pequeno">Activación en segundos</p>
              </div>
              <div>
                <Stamp className="text-xs mb-2 bg-verde-aprobado">VERIFICADO</Stamp>
                <p className="texto-pequeno">Validado por expertos</p>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Protocolos de emergencia */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="typewriter-bold text-2xl mb-2">PROTOCOLOS OPERATIVOS DISPONIBLES</h2>
            <p className="texto-pequeno">CENTRO DE RESPUESTA A EMERGENCIAS DIGITALES • CRED-001</p>
          </div>
          
          <div className="space-y-6">
            {protocolos.map((protocolo) => (
              <ExpedienteCard 
                key={protocolo.id} 
                variant={protocolo.clasificacion === 'URGENTE' ? 'urgent' : 'default'}
                clipped
              >
                {/* Encabezado del protocolo */}
                <div className="border-b border-papel-border pb-4 mb-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{protocolo.icono}</div>
                      <div>
                        <p className="texto-pequeno mb-1">PROTOCOLO {protocolo.codigo}</p>
                        <h3 className="text-xl md:text-2xl font-bold typewriter mb-2">
                          {protocolo.nombre}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <Stamp className={`text-xs mb-2 ${
                        protocolo.clasificacion === 'URGENTE' ? 'bg-sello-rojo text-white' :
                        protocolo.clasificacion === 'ALTA' ? 'bg-orange-500 text-white' : 
                        'bg-azul-info text-white'
                      }`}>
                        {protocolo.clasificacion}
                      </Stamp>
                      <p className="texto-pequeno">Tiempo est.: {protocolo.tiempo}</p>
                      <p className="texto-pequeno">Auth: {protocolo.autorizado}</p>
                    </div>
                  </div>
                </div>

                {/* Descripción del protocolo */}
                <div className="mb-6">
                  <p className="texto-oficial leading-relaxed mb-4">
                    {protocolo.descripcion}
                  </p>
                  
                  <div className="bg-papel-sombra border-l-4 border-azul-info p-4">
                    <p className="typewriter-bold text-sm mb-2">PROCEDIMIENTO ESTÁNDAR:</p>
                    <p className="texto-pequeno">
                      Este protocolo ha sido validado por el equipo técnico y se encuentra 
                      disponible para implementación inmediata en situaciones de emergencia.
                    </p>
                  </div>
                </div>

                {/* Acciones disponibles */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/herramientas/${protocolo.id}`}>
                    <SelloAccion 
                      variant={protocolo.clasificacion === 'URGENTE' ? 'urgent' : 'primary'}
                      size="lg"
                    >
                      🚀 EJECUTAR PROTOCOLO
                    </SelloAccion>
                  </Link>
                  <Link href={`/herramientas/${protocolo.id}/tutorial`}>
                    <SelloAccion variant="secondary" size="lg">
                      📋 MANUAL TÉCNICO
                    </SelloAccion>
                  </Link>
                </div>

                {/* Número de expediente */}
                <div className="absolute bottom-2 right-2 text-xs texto-suave typewriter opacity-30">
                  {protocolo.codigo}-{new Date().getFullYear()}
                </div>
              </ExpedienteCard>
            ))}
          </div>
        </section>

        {/* Directorio de emergencia */}
        <section className="mt-16">
          <ExpedienteCard variant="classified" className="max-w-4xl mx-auto" stamped>
            <div className="border-b-2 border-papel-border pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1">DIRECTORIO OFICIAL</p>
                  <h2 className="text-2xl font-bold typewriter">
                    CONTACTOS DE EMERGENCIA VERIFICADOS
                  </h2>
                </div>
                <Stamp className="text-xs">PÚBLICO</Stamp>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sello-rojo/10 border-l-4 border-sello-rojo p-4 mb-6">
                <p className="typewriter-bold text-sello-rojo mb-2">PROTOCOLO DE EMERGENCIA:</p>
                <p className="texto-oficial">
                  Si te encuentras en peligro digital inmediato, contacta inmediatamente 
                  a las organizaciones listadas a continuación. Todas han sido verificadas 
                  y autorizadas por el Centro de Respuesta.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ExpedienteCard variant="approved" className="h-full">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-verde-aprobado/10 rounded-full mb-4">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h3 className="typewriter-bold text-lg mb-2">R3D - RED EN DEFENSA DE LOS DERECHOS DIGITALES</h3>
                    <p className="texto-oficial text-sm mb-3">
                      Organización especializada en litigio estratégico y apoyo legal para casos de violaciones digitales
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="texto-pequeno">CONTACTO VERIFICADO:</p>
                      <a href="https://r3d.mx" className="text-azul-info underline typewriter">r3d.mx</a>
                    </div>
                    <div className="mt-4 pt-3 border-t border-papel-border">
                      <Stamp className="text-xs bg-verde-aprobado">VERIFICADO</Stamp>
                    </div>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard variant="approved" className="h-full">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-verde-aprobado/10 rounded-full mb-4">
                      <span className="text-2xl">📰</span>
                    </div>
                    <h3 className="typewriter-bold text-lg mb-2">ARTÍCULO 19 MÉXICO</h3>
                    <p className="texto-oficial text-sm mb-3">
                      Organización de protección a periodistas y defensores de la libertad de expresión
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="texto-pequeno">CONTACTO VERIFICADO:</p>
                      <a href="https://articulo19.org" className="text-azul-info underline typewriter">articulo19.org</a>
                    </div>
                    <div className="mt-4 pt-3 border-t border-papel-border">
                      <Stamp className="text-xs bg-verde-aprobado">VERIFICADO</Stamp>
                    </div>
                  </div>
                </ExpedienteCard>
              </div>

              <div className="text-center pt-6 border-t border-papel-border">
                <p className="texto-pequeno">
                  DIRECTORIO ACTUALIZADO: {currentDate} • PRÓXIMA REVISIÓN: {new Date(Date.now() + 90*24*60*60*1000).toLocaleDateString('es-MX')}
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}