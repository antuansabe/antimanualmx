'use client';

import { ExpedienteCard, Stamp, ContactForm } from '@/shared/ui';

export default function ContactoPage() {
  const handleFormSubmit = (data: object) => {
    console.log('Form submitted:', data);
    // Aquí se enviarían los datos al backend cuando esté implementado
  };

  const currentDate = new Date().toLocaleDateString('es-MX', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Encabezado oficial del formulario */}
        <section className="mb-12">
          <ExpedienteCard variant="classified" className="max-w-5xl mx-auto" stamped>
            {/* Header institucional */}
            <div className="border-b-2 border-doble border-papel-border pb-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="texto-pequeno mb-1">REPÚBLICA DIGITAL DE MÉXICO</p>
                  <p className="texto-pequeno">CENTRO DE ATENCIÓN CIUDADANA DIGITAL</p>
                </div>
                <div className="text-right">
                  <Stamp className="text-xs transform -rotate-1 mb-2">OFICIAL</Stamp>
                  <p className="texto-pequeno">Formulario: CACD-{new Date().getFullYear()}-001</p>
                  <p className="texto-pequeno">Fecha: {currentDate}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                📞 CENTRO DE CONTACTO
              </h1>
              <div className="inline-block border-4 border-double border-papel-border px-6 py-2 mb-4">
                <p className="text-lg md:text-xl font-bold tracking-widest typewriter">
                  CANAL OFICIAL DE COMUNICACIÓN CIUDADANA
                </p>
              </div>
              <p className="texto-pequeno mt-4">
                COMUNICACIÓN SEGURA • CONFIDENCIAL • RESPUESTA GARANTIZADA
              </p>
            </div>

            {/* Objetivos del servicio */}
            <div className="space-y-6 texto-oficial leading-relaxed mb-8">
              <div className="pl-8 border-l-4 border-papel-border">
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">PROPÓSITO:</span> Canal oficial para solicitudes de asistencia técnica, denuncias de violaciones digitales, propuestas de colaboración y reportes de incidencias de seguridad.
                </p>
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">GARANTÍAS:</span> Todas las comunicaciones son procesadas bajo estrictos protocolos de confidencialidad y seguridad digital. Respuesta garantizada en un plazo máximo de 72 horas.
                </p>
                <p className="mb-4">
                  <span className="typewriter-bold text-sm">COBERTURA:</span> Servicio disponible 24/7 para ciudadanos en territorio nacional que requieran asistencia en materia de derechos digitales.
                </p>
              </div>
            </div>

            {/* Clasificaciones de seguridad */}
            <div className="bg-papel-sombra border border-papel-border p-6 mb-8">
              <div className="text-center mb-4">
                <p className="typewriter-bold text-sm">NIVELES DE SEGURIDAD DISPONIBLES</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Stamp className="text-xs mb-2 bg-verde-aprobado text-white">SEGURO</Stamp>
                  <p className="texto-pequeno">Cifrado de extremo a extremo</p>
                </div>
                <div>
                  <Stamp className="text-xs mb-2 bg-azul-info text-white">CONFIDENCIAL</Stamp>
                  <p className="texto-pequeno">Identidad protegida</p>
                </div>
                <div>
                  <Stamp className="text-xs mb-2 bg-sello-rojo text-white">URGENTE</Stamp>
                  <p className="texto-pequeno">Respuesta prioritaria</p>
                </div>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Formulario oficial */}
        <section className="mb-12">
          <ExpedienteCard variant="default" className="max-w-4xl mx-auto" perforated>
            <div className="border-b border-papel-border pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1">FORMULARIO OFICIAL</p>
                  <h2 className="text-2xl font-bold typewriter">
                    SOLICITUD DE ATENCIÓN CIUDADANA
                  </h2>
                </div>
                <Stamp className="text-xs">FORM-001</Stamp>
              </div>
            </div>
            
            <div className="bg-azul-info/10 border-l-4 border-azul-info p-4 mb-6">
              <p className="typewriter-bold text-azul-info mb-2">INSTRUCCIONES DE LLENADO:</p>
              <p className="texto-oficial text-sm">
                Complete todos los campos requeridos con información precisa y veraz. 
                Para solicitudes urgentes, marque la casilla correspondiente. Su información 
                será tratada con estricta confidencialidad según la Ley de Protección de Datos.
              </p>
            </div>
            
            <ContactForm 
              type="general"
              onSubmit={handleFormSubmit}
            />
          </ExpedienteCard>
        </section>

        {/* Directorio de emergencia */}
        <section className="mb-12">
          <ExpedienteCard variant="urgent" className="max-w-5xl mx-auto" clipped>
            <div className="border-b-2 border-sello-rojo pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1 text-sello-rojo">DIRECTORIO DE EMERGENCIA</p>
                  <h2 className="text-2xl font-bold typewriter text-sello-rojo">
                    🚨 PROTOCOLOS DE RESPUESTA INMEDIATA
                  </h2>
                </div>
                <Stamp className="text-xs bg-sello-rojo text-white">CRÍTICO</Stamp>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sello-rojo/10 border-l-4 border-sello-rojo p-4 mb-6">
                <p className="typewriter-bold text-sello-rojo mb-2">PROTOCOLO DE EMERGENCIA:</p>
                <p className="texto-oficial">
                  Para situaciones que requieren intervención inmediata, utilice los siguientes 
                  canales de comunicación directa. Todos están disponibles 24/7 y cuentan con 
                  personal especializado en respuesta a crisis digitales.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ExpedienteCard variant="urgent">
                  <div className="border-b border-sello-rojo pb-3 mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="typewriter-bold text-sello-rojo">AMENAZA FÍSICA INMEDIATA</h3>
                      <Stamp className="text-xs bg-sello-rojo text-white">NIVEL 1</Stamp>
                    </div>
                  </div>
                  <p className="texto-oficial text-sm mb-4">
                    Para situaciones de peligro físico inmediato, persecución o amenaza directa 
                    contra activistas o defensores de derechos humanos.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-papel-sombra p-3 rounded">
                      <a href="tel:911" className="block text-sello-rojo font-bold typewriter">
                        📞 911 - EMERGENCIAS NACIONALES
                      </a>
                      <p className="texto-pequeno mt-1">Servicio nacional de emergencias</p>
                    </div>
                    <div className="bg-papel-sombra p-3 rounded">
                      <a href="mailto:emergencias@articulo19.org" className="block text-sello-rojo typewriter">
                        ✉️ emergencias@articulo19.org
                      </a>
                      <p className="texto-pequeno mt-1">Artículo 19 México - Respuesta inmediata</p>
                    </div>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard variant="default">
                  <div className="border-b border-papel-border pb-3 mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="typewriter-bold">INCIDENCIA DIGITAL CRÍTICA</h3>
                      <Stamp className="text-xs bg-orange-500 text-white">NIVEL 2</Stamp>
                    </div>
                  </div>
                  <p className="texto-oficial text-sm mb-4">
                    Para ataques cibernéticos activos, vigilancia digital detectada, 
                    compromiso de sistemas o filtración de datos sensibles.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-papel-sombra p-3 rounded">
                      <a href="mailto:seguridad@r3d.mx" className="block text-orange-700 typewriter">
                        🛡️ seguridad@r3d.mx
                      </a>
                      <p className="texto-pequeno mt-1">R3D - Equipo de respuesta técnica</p>
                    </div>
                    <div className="bg-papel-sombra p-3 rounded">
                      <a href="mailto:apoyo@socialtic.org" className="block text-orange-700 typewriter">
                        💻 apoyo@socialtic.org
                      </a>
                      <p className="texto-pequeno mt-1">SocialTIC - Soporte técnico especializado</p>
                    </div>
                  </div>
                </ExpedienteCard>
              </div>

              <div className="text-center pt-6 border-t border-sello-rojo">
                <p className="texto-pequeno text-sello-rojo">
                  TIEMPO DE RESPUESTA GARANTIZADO: NIVEL 1 (5 minutos) • NIVEL 2 (30 minutos)
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Canales alternativos de comunicación */}
        <section className="mb-12">
          <ExpedienteCard variant="classified" className="max-w-5xl mx-auto" stamped>
            <div className="border-b border-papel-border pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1">CANALES ALTERNATIVOS</p>
                  <h2 className="text-2xl font-bold typewriter">
                    📡 COMUNICACIONES CIFRADAS DISPONIBLES
                  </h2>
                </div>
                <Stamp className="text-xs">PÚBLICO</Stamp>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-azul-info/10 border-l-4 border-azul-info p-4 mb-6">
                <p className="typewriter-bold text-azul-info mb-2">PROTOCOLOS DE COMUNICACIÓN:</p>
                <p className="texto-oficial">
                  Canales adicionales de comunicación disponibles para diferentes niveles de seguridad 
                  y tipos de interacción. Todos implementan cifrado de extremo a extremo.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <ExpedienteCard className="text-center h-full">
                  <div className="inline-block p-4 bg-verde-aprobado/10 rounded-full mb-4">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">SIGNAL MESSENGER</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Canal prioritario para comunicación confidencial con cifrado de extremo a extremo verificado
                  </p>
                  <div className="bg-papel-sombra p-3 rounded mb-3">
                    <code className="typewriter text-verde-aprobado">+52 55 XXXX XXXX</code>
                  </div>
                  <div className="pt-3 border-t border-papel-border">
                    <Stamp className="text-xs bg-verde-aprobado">MÁXIMA SEGURIDAD</Stamp>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard className="text-center h-full">
                  <div className="inline-block p-4 bg-azul-info/10 rounded-full mb-4">
                    <span className="text-3xl">✈️</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">TELEGRAM OFICIAL</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Canal público para noticias, actualizaciones y comunicación general con la comunidad
                  </p>
                  <div className="bg-papel-sombra p-3 rounded mb-3">
                    <a href="https://t.me/antimanualmx" className="text-azul-info typewriter">
                      @antimanualmx
                    </a>
                  </div>
                  <div className="pt-3 border-t border-papel-border">
                    <Stamp className="text-xs bg-azul-info">COMUNICACIÓN PÚBLICA</Stamp>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard className="text-center h-full">
                  <div className="inline-block p-4 bg-papel-border/10 rounded-full mb-4">
                    <span className="text-3xl">🐦</span>
                  </div>
                  <h3 className="typewriter-bold text-lg mb-3">TWITTER/X OFICIAL</h3>
                  <p className="texto-oficial text-sm mb-4">
                    Alertas públicas, comunicación abierta y difusión de información no confidencial
                  </p>
                  <div className="bg-papel-sombra p-3 rounded mb-3">
                    <a href="https://twitter.com/antimanualmx" className="text-papel-border typewriter">
                      @antimanualmx
                    </a>
                  </div>
                  <div className="pt-3 border-t border-papel-border">
                    <Stamp className="text-xs">COMUNICACIÓN ABIERTA</Stamp>
                  </div>
                </ExpedienteCard>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        {/* Manual de protocolos de seguridad */}
        <section>
          <ExpedienteCard variant="approved" className="max-w-5xl mx-auto" perforated>
            <div className="border-b border-verde-aprobado pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="texto-pequeno mb-1 text-verde-aprobado">MANUAL DE SEGURIDAD</p>
                  <h2 className="text-2xl font-bold typewriter text-verde-aprobado">
                    💡 PROTOCOLOS DE COMUNICACIÓN SEGURA
                  </h2>
                </div>
                <Stamp className="text-xs bg-verde-aprobado text-white">MANUAL</Stamp>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-verde-aprobado/10 border-l-4 border-verde-aprobado p-4 mb-6">
                <p className="typewriter-bold text-verde-aprobado mb-2">OBJETIVO DEL MANUAL:</p>
                <p className="texto-oficial">
                  Directrices técnicas para garantizar la seguridad de las comunicaciones 
                  entre ciudadanos y el centro de atención. Cumplimiento obligatorio para 
                  proteger la integridad de la información intercambiada.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ExpedienteCard variant="approved">
                  <div className="border-b border-verde-aprobado pb-3 mb-4">
                    <h3 className="typewriter-bold text-verde-aprobado">✅ PROCEDIMIENTOS AUTORIZADOS</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-verde-aprobado mt-1 text-sm">▶</span>
                      <p className="texto-oficial text-sm">
                        <strong>VPN activa:</strong> Utilizar conexión VPN verificada antes de enviar información sensible
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-verde-aprobado mt-1 text-sm">▶</span>
                      <p className="texto-oficial text-sm">
                        <strong>Contexto detallado:</strong> Proporcionar información clara y completa sobre la situación
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-verde-aprobado mt-1 text-sm">▶</span>
                      <p className="texto-oficial text-sm">
                        <strong>Modo anónimo:</strong> Activar opciones de anonimato cuando sea necesario proteger identidad
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-verde-aprobado mt-1 text-sm">▶</span>
                      <p className="texto-oficial text-sm">
                        <strong>Respaldo seguro:</strong> Mantener copias protegidas de evidencia crítica
                      </p>
                    </div>
                  </div>
                </ExpedienteCard>
                
                <ExpedienteCard variant="urgent">
                  <div className="border-b border-sello-rojo pb-3 mb-4">
                    <h3 className="typewriter-bold text-sello-rojo">❌ PRÁCTICAS PROHIBIDAS</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-sello-rojo mt-1 text-sm">✗</span>
                      <p className="texto-oficial text-sm">
                        <strong>WiFi público:</strong> Transmitir desde redes públicas sin protección VPN activa
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sello-rojo mt-1 text-sm">✗</span>
                      <p className="texto-oficial text-sm">
                        <strong>Información de terceros:</strong> Incluir datos que comprometan la seguridad de otros
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sello-rojo mt-1 text-sm">✗</span>
                      <p className="texto-oficial text-sm">
                        <strong>Dispositivos comprometidos:</strong> Utilizar equipos compartidos o bajo monitoreo
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sello-rojo mt-1 text-sm">✗</span>
                      <p className="texto-oficial text-sm">
                        <strong>Dilación en emergencias:</strong> Postergar comunicación en situaciones críticas
                      </p>
                    </div>
                  </div>
                </ExpedienteCard>
              </div>

              <div className="text-center pt-6 border-t border-verde-aprobado">
                <p className="texto-pequeno text-verde-aprobado">
                  MANUAL VIGENTE DESDE: {currentDate} • PRÓXIMA ACTUALIZACIÓN: 3 MESES
                </p>
              </div>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}