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
        {/* Encabezado del expediente urgente - Rediseñado */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto relative">
            {/* Detalles burocráticos sutiles */}
            <div className="absolute top-0 left-0 text-xs opacity-50 typewriter">
              Expediente: EMG-{new Date().getFullYear()}-001
            </div>
            <div className="absolute top-0 right-0 text-xs opacity-50 typewriter">
              {currentDate}
            </div>
            
            <ExpedienteCard variant="default" className="bg-papel-base mt-6" clipped>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Contenido principal */}
                <div className="lg:col-span-3">
                  {/* Header ciudadano */}
                  <div className="border-b border-papel-border pb-6 mb-8">
                    <p className="texto-pequeno mb-1 text-tinta-clara">COLECTIVO CIUDADANO ANTIMANUAL</p>
                    <p className="texto-pequeno text-tinta-clara">HERRAMIENTAS DE AUTODEFENSA DIGITAL</p>
                  </div>
                  
                  {/* Título prominente */}
                  <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 typewriter text-tinta-oficial leading-tight">
                      KIT DE EMERGENCIA<br/>DIGITAL
                    </h1>
                    
                    {/* Subtítulo en caja simple */}
                    <div className="inline-block border-2 border-papel-border px-6 py-3 bg-papel-sombra">
                      <p className="text-lg md:text-xl typewriter-bold text-tinta-oficial">
                        PROTOCOLOS DE DEFENSA INMEDIATA
                      </p>
                    </div>
                  </div>

                  {/* Sellos de valor minimalistas */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                    <Stamp className="text-xs bg-sello-rojo text-white px-3 py-1">GRATUITO</Stamp>
                    <Stamp className="text-xs bg-sello-rojo text-white px-3 py-1">INMEDIATO</Stamp>
                    <Stamp className="text-xs bg-sello-rojo text-white px-3 py-1">VERIFICADO</Stamp>
                  </div>
                </div>

                {/* Aviso de seguridad lateral */}
                <div className="lg:col-span-1">
                  <div className="border-2 border-papel-border p-4 bg-papel-base h-fit">
                    <div className="text-center mb-3">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <p className="typewriter-bold text-sm mb-3 text-center text-tinta-oficial">
                      AVISO DE SEGURIDAD
                    </p>
                    <p className="text-xs texto-oficial leading-relaxed">
                      Estas herramientas están diseñadas para situaciones de riesgo real. 
                      Recomendamos realizar pruebas en entorno controlado antes de usar 
                      en emergencias.
                    </p>
                    <div className="text-center mt-4">
                      <div className="text-xs opacity-60 typewriter">
                        FOLIO: {Math.random().toString(36).substr(2, 6).toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ExpedienteCard>
          </div>
        </section>

        {/* Protocolos de emergencia */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="typewriter-bold text-2xl mb-2 text-tinta-oficial">PROTOCOLOS DISPONIBLES</h2>
            <p className="texto-pequeno text-tinta-clara">HERRAMIENTAS VERIFICADAS PARA AUTODEFENSA DIGITAL</p>
          </div>
          
          <div className="space-y-6">
            {protocolos.map((protocolo) => (
              <div key={protocolo.id} className="relative bg-papel-base border border-papel-border rounded-sm p-6 sombra-papel">
                {/* Código de protocolo discreto - superior derecha */}
                <div className="absolute top-3 right-2 sm:right-4">
                  <p className="text-xs" style={{fontFamily: 'Georgia, serif', color: '#666'}}>
                    {protocolo.codigo}
                  </p>
                </div>

                {/* Contenido principal con márgenes limpios */}
                <div className="pr-8 sm:pr-16 pb-8 sm:pb-12">
                  {/* Título en Georgia prominente */}
                  <h3 className="text-xl sm:text-2xl font-bold text-tinta-oficial mb-3 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                    {protocolo.nombre}
                  </h3>
                  
                  {/* Descripción breve y clara */}
                  <p className="text-base leading-relaxed mb-4 text-tinta-suave" style={{fontFamily: 'Georgia, serif'}}>
                    {protocolo.descripcion}
                  </p>
                  
                  {/* Etiqueta de clasificación como sello rojo pequeño */}
                  <div className="mb-6">
                    <Stamp className="text-xs bg-sello-rojo text-white px-2 py-1">
                      {protocolo.clasificacion}
                    </Stamp>
                  </div>

                  {/* Información adicional integrada */}
                  <div className="mb-4 text-sm" style={{color: '#666', fontFamily: 'Georgia, serif'}}>
                    <p className="mb-1">Tiempo estimado: {protocolo.tiempo}</p>
                    <p>Autorización: {protocolo.autorizado}</p>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/herramientas/${protocolo.id}`}>
                    <SelloAccion 
                      variant="stamp"
                      size="md"
                      className="bg-sello-rojo text-white border-2 border-sello-rojo"
                    >
                      EJECUTAR PROTOCOLO
                    </SelloAccion>
                  </Link>
                  <Link href={`/herramientas/${protocolo.id}/tutorial`}>
                    <SelloAccion 
                      variant="secondary" 
                      size="md" 
                      className="bg-papel-sombra text-tinta-oficial border-2 border-papel-border"
                    >
                      MANUAL TÉCNICO
                    </SelloAccion>
                  </Link>
                </div>

                {/* Folio gubernamental - esquina inferior derecha */}
                <div className="absolute bottom-3 right-2 sm:right-4">
                  <p className="text-xs" style={{fontFamily: 'Georgia, serif', color: '#666'}}>
                    {protocolo.codigo}-{new Date().getFullYear()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}