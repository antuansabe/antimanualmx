'use client';

import { ExpedienteCard, Stamp, ContactForm } from '@/shared/ui';

export default function ContactoPage() {
  const handleFormSubmit = (data: object) => {
    console.log('Form submitted:', data);
    // Aquí se enviarían los datos al backend cuando esté implementado
  };

  return (
    <div className="min-h-screen p-4 md:p-8">

      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <ExpedienteCard variant="default">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                📞 CONTACTO
              </h1>
              <p className="text-xl text-red-700 font-bold mb-6">
                COMUNICACIÓN SEGURA Y CONFIDENCIAL
              </p>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                ¿Necesitas ayuda, tienes información relevante para la comunidad, 
                o quieres colaborar con nosotros? Usa este canal seguro para contactarnos.
              </p>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs bg-green-600">🔒 SEGURO</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs bg-blue-600">📧 CONFIDENCIAL</Stamp>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stamp className="text-xs bg-purple-600">⚡ RESPUESTA RÁPIDA</Stamp>
                </div>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        <section className="mb-12">
          <ExpedienteCard>
            <ContactForm 
              type="general"
              onSubmit={handleFormSubmit}
            />
          </ExpedienteCard>
        </section>

        <section className="mb-12">
          <ExpedienteCard>
            <h2 className="text-2xl font-bold mb-6 typewriter text-center">
              🚨 CONTACTOS DE EMERGENCIA
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h3 className="font-bold text-red-800 mb-2">AMENAZA INMEDIATA</h3>
                <p className="text-red-700 text-sm mb-3">
                  Si estás en peligro físico inmediato o bajo amenaza directa.
                </p>
                <div className="space-y-2">
                  <a href="tel:911" className="block text-red-800 font-bold">
                    📞 911 - Emergencias
                  </a>
                  <a href="mailto:emergencias@articulo19.org" className="block text-red-700 text-sm">
                    ✉️ emergencias@articulo19.org
                  </a>
                </div>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h3 className="font-bold text-orange-800 mb-2">ATAQUE DIGITAL</h3>
                <p className="text-orange-700 text-sm mb-3">
                  Si detectas vigilancia, hackeo o ataques cibernéticos.
                </p>
                <div className="space-y-2">
                  <a href="mailto:seguridad@r3d.mx" className="block text-orange-700 text-sm">
                    🛡️ seguridad@r3d.mx
                  </a>
                  <a href="mailto:apoyo@socialtic.org" className="block text-orange-700 text-sm">
                    💻 apoyo@socialtic.org
                  </a>
                </div>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        <section className="mb-12">
          <ExpedienteCard>
            <h2 className="text-2xl font-bold mb-6 typewriter text-center">
              📡 CANALES ALTERNATIVOS
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold mb-2">Signal</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Para comunicación cifrada de extremo a extremo
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                  +52 55 XXXX XXXX
                </code>
              </div>
              
              <div>
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="font-bold mb-2">Telegram</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Canal de noticias y actualizaciones
                </p>
                <a href="https://t.me/antimanualmx" className="text-blue-600 text-sm">
                  @antimanualmx
                </a>
              </div>
              
              <div>
                <div className="text-4xl mb-3">🐦</div>
                <h3 className="font-bold mb-2">Twitter</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Alertas públicas y comunicación abierta
                </p>
                <a href="https://twitter.com/antimanualmx" className="text-blue-600 text-sm">
                  @antimanualmx
                </a>
              </div>
            </div>
          </ExpedienteCard>
        </section>

        <section>
          <ExpedienteCard>
            <h2 className="text-2xl font-bold mb-6 typewriter text-center">
              💡 CONSEJOS DE SEGURIDAD
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 text-green-700">✅ SÍ HACER:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Usa conexión VPN al enviar información sensible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Proporciona contexto claro sobre tu situación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Usa el modo anónimo si prefieres no identificarte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Guarda copias seguras de evidencia importante</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-3 text-red-700">❌ NO HACER:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Enviar desde redes WiFi públicas sin VPN</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Incluir información que pueda comprometer a terceros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Usar dispositivos compartidos o monitoreados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Esperar si la situación requiere acción inmediata</span>
                  </li>
                </ul>
              </div>
            </div>
          </ExpedienteCard>
        </section>
      </main>
    </div>
  );
}