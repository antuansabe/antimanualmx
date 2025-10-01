'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExpedienteCard, Button } from '@/shared/ui';

export default function EstudioEspecialPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <main className="page-container py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/observatorio" className="text-blue-600 hover:underline">Observatorio</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-gray-600">
              Estudio Especial
            </li>
          </ol>
        </nav>

        {/* Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ExpedienteCard variant="classified" clipped>
            <div className="text-center">
              <div className="text-sello-rojo text-sm typewriter-bold mb-2">DOCUMENTO CLASIFICADO</div>
              <h1 className="text-3xl md:text-4xl font-bold typewriter mb-3">
                ESTUDIO ESPECIAL
              </h1>
              <p className="text-xl typewriter-bold mb-4">
                Vigilancia Digital en México: Tendencias Emergentes y Contramedidas
              </p>
              <p className="text-sm text-tinta-suave">
                Septiembre 2025 | Investigación Actualizada
              </p>
            </div>
          </ExpedienteCard>
        </motion.header>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introducción */}
          <motion.section variants={itemVariants}>
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-2xl typewriter-bold text-center">📊 PANORAMA ACTUAL</h2>
              </div>
              <div className="liquid-card-content">
                <div className="texto-oficial space-y-4">
                  <p className="text-lg font-semibold">
                    ¿Sabías que México fue el <span className="text-sello-rojo">primer gobierno cliente</span> y el usuario más prolífico del spyware Pegasus?
                  </p>
                  <p>
                    Durante 2024, México registró <strong>42.4 millones de intentos de ataque de malware</strong> dirigidos a empresas,
                    y más de <strong>31 mil millones de intentos de ciberataques</strong> en total. Pero la vigilancia digital va más allá
                    de los ciberataques: se trata del monitoreo sistemático de ciudadanos a través de tecnologías cada vez más sofisticadas.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                    <p className="text-sm">
                      <strong>💡 Reflexiona:</strong> ¿Cuántos dispositivos conectados tienes en este momento?
                      ¿Tu teléfono, laptop, reloj inteligente, asistente de voz? Cada uno es una potencial puerta de entrada
                      para la vigilancia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tendencias Emergentes */}
          <motion.section variants={itemVariants}>
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-2xl typewriter-bold text-center">🔍 TENDENCIAS EMERGENTES 2024-2025</h2>
              </div>
              <div className="liquid-card-content">
                <div className="space-y-6">
                  {/* Tendencia 1 */}
                  <div className="expediente-liquid-card">
                    <h3 className="typewriter-bold text-xl mb-3 flex items-center gap-2">
                      <span className="text-2xl">🤖</span>
                      1. Inteligencia Artificial de Doble Filo
                    </h3>
                    <p className="texto-oficial mb-3">
                      La IA se está utilizando <strong>simultáneamente para defensa y ataque</strong>. Según encuestas de
                      ciberseguridad, el 50% de los profesionales identifica la IA generativa como la tecnología con mayor
                      impacto en la superficie de ataque cibernético.
                    </p>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-sm"><strong>Caso México:</strong> El proyecto Torre Centinela en Chihuahua (costo: $200 millones USD) incluye:</p>
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>1,791 lectores automáticos de placas</li>
                        <li>3,065 cámaras con zoom y giro</li>
                        <li>74 drones con filtros biométricos para reconocimiento facial</li>
                      </ul>
                    </div>
                    <p className="text-sm text-tinta-suave mt-2">
                      <em>Fuente: Global Voices, 2024</em>
                    </p>
                  </div>

                  {/* Tendencia 2 */}
                  <div className="expediente-liquid-card">
                    <h3 className="typewriter-bold text-xl mb-3 flex items-center gap-2">
                      <span className="text-2xl">📡</span>
                      2. Proliferación del Internet de las Cosas (IoT)
                    </h3>
                    <p className="texto-oficial mb-3">
                      El crecimiento exponencial de dispositivos conectados representa una <strong>mayor superficie de exposición</strong>.
                      Cada cámara, sensor, termostato inteligente o vehículo conectado puede ser potencialmente comprometido.
                    </p>
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <p className="text-sm font-semibold">❓ Pregunta crítica:</p>
                      <p className="text-sm mt-2">
                        ¿Has leído alguna vez la política de privacidad de tu smart TV, tu asistente de voz o tu cámara de seguridad doméstica?
                        ¿Sabes qué datos recopilan y con quién los comparten?
                      </p>
                    </div>
                    <p className="text-sm text-tinta-suave mt-2">
                      <em>Fuente: PwC Digital Trust Insights México, 2025</em>
                    </p>
                  </div>

                  {/* Tendencia 3 */}
                  <div className="expediente-liquid-card">
                    <h3 className="typewriter-bold text-xl mb-3 flex items-center gap-2">
                      <span className="text-2xl">🏙️</span>
                      3. Sistemas de &ldquo;Ciudades Seguras&rdquo; en América Latina
                    </h3>
                    <p className="texto-oficial mb-3">
                      Según Carnegie Endowment for International Peace, de 176 países estudiados, <strong>75 ya emplean tecnologías de IA para vigilancia</strong>:
                    </p>
                    <ul className="list-disc list-inside space-y-2 texto-oficial">
                      <li>74 países usan reconocimiento facial</li>
                      <li>56 han desarrollado sistemas de &ldquo;ciudades seguras&rdquo;</li>
                      <li>Buenos Aires y Ciudad de México implementan estos sistemas <strong>sin regulaciones claras de privacidad</strong></li>
                    </ul>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200 mt-3">
                      <p className="text-sm">
                        <strong>⚠️ Alerta:</strong> Investigadores advierten que estas soluciones pueden tener consecuencias graves
                        para los derechos humanos, incluyendo privacidad, libertad de expresión y el derecho a no ser vigilado sin consentimiento.
                      </p>
                    </div>
                    <p className="text-sm text-tinta-suave mt-2">
                      <em>Fuente: Carnegie Endowment for International Peace, 2024</em>
                    </p>
                  </div>

                  {/* Tendencia 4 */}
                  <div className="expediente-liquid-card">
                    <h3 className="typewriter-bold text-xl mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      4. Incremento de Ataques a Pequeñas Empresas
                    </h3>
                    <p className="texto-oficial mb-3">
                      Las pequeñas empresas están en la mira debido a su <strong>menor nivel de protección</strong>.
                      En 2024 se registraron más de <strong>40,287 vulnerabilidades</strong>, duplicando las cifras de 2023.
                    </p>
                    <p className="text-sm text-tinta-suave mt-2">
                      <em>Fuente: Nivelics, Análisis de Vulnerabilidades 2024</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contramedidas */}
          <motion.section variants={itemVariants}>
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-2xl typewriter-bold text-center">🛡️ CONTRAMEDIDAS Y PROTECCIÓN</h2>
              </div>
              <div className="liquid-card-content">
                <div className="texto-oficial space-y-4 mb-6">
                  <p className="text-lg">
                    No todo está perdido. Existen herramientas y prácticas que puedes implementar <strong>hoy mismo</strong> para protegerte:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Técnicas */}
                  <div className="expediente-liquid-card">
                    <h3 className="typewriter-bold text-lg mb-3 text-green-700">✅ Contramedidas Técnicas</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>Cifrado de extremo a extremo</strong> en todas tus comunicaciones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>VPN confiable</strong> (cuidado con TunnelVision, vulnerabilidad descubierta en 2024)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>Antivirus actualizado</strong> y sistemas de detección de intrusiones (IDS/IPS)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>Autenticación de dos factores (2FA)</strong> en todas tus cuentas importantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>Herramientas SIEM</strong> para organizaciones (monitoreo en tiempo real)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Administrativas */}
                  <div className="expediente-liquid-card">
                    <h3 className="typewriter-bold text-lg mb-3 text-blue-700">📋 Contramedidas Administrativas</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Políticas de privacidad claras</strong> en tu organización</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Auditorías de seguridad regulares</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Plan de respuesta a incidentes</strong> documentado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Capacitación continua</strong> en ciberseguridad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Gestión de accesos</strong> con principio de mínimo privilegio</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-sm font-semibold mb-2">📚 Recurso Clave: Guía de Autodefensa contra la Vigilancia (SSD)</p>
                  <p className="text-sm">
                    La Electronic Frontier Foundation (EFF) celebró en 2024 el 15º aniversario de su guía Surveillance Self-Defense,
                    actualizada con nuevas amenazas como las licencias de conducir digitales y técnicas de ataque a VPN.
                  </p>
                  <p className="text-xs text-tinta-suave mt-2">
                    <em>Fuente: EFF, Surveillance Self-Defense 2024</em>
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Llamado a la Acción */}
          <motion.section variants={itemVariants}>
            <div className="liquid-card bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="liquid-card-header">
                <h2 className="text-2xl typewriter-bold text-center">🎯 ¿QUÉ PUEDES HACER TÚ?</h2>
              </div>
              <div className="liquid-card-content">
                <div className="space-y-4">
                  <p className="texto-oficial text-lg text-center">
                    La vigilancia digital es una realidad, pero no tienes que ser una víctima pasiva.
                    <strong> Aquí hay acciones concretas que puedes tomar ahora:</strong>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="expediente-liquid-card text-center">
                      <div className="text-4xl mb-3">📱</div>
                      <h3 className="typewriter-bold mb-2">AUDITA TUS DISPOSITIVOS</h3>
                      <p className="text-sm">Revisa los permisos de todas tus apps. Desactiva micrófonos y cámaras cuando no los uses.</p>
                    </div>

                    <div className="expediente-liquid-card text-center">
                      <div className="text-4xl mb-3">🔐</div>
                      <h3 className="typewriter-bold mb-2">CIFRA TU COMUNICACIÓN</h3>
                      <p className="text-sm">Usa Signal, ProtonMail u otras herramientas con cifrado de extremo a extremo verificado.</p>
                    </div>

                    <div className="expediente-liquid-card text-center">
                      <div className="text-4xl mb-3">📖</div>
                      <h3 className="typewriter-bold mb-2">EDÚCATE Y COMPARTE</h3>
                      <p className="text-sm">Aprende sobre tus derechos digitales y comparte este conocimiento con tu comunidad.</p>
                    </div>
                  </div>

                  <div className="bg-sello-rojo text-white p-6 rounded-lg text-center mt-6">
                    <h3 className="typewriter-bold text-xl mb-3">⚡ ACTÚA AHORA</h3>
                    <p className="mb-4">
                      No esperes a ser víctima de vigilancia. Cada minuto sin protección es un minuto de exposición.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link href="/herramientas">
                        <Button variant="secondary" size="lg">
                          🔧 Ver Herramientas de Protección
                        </Button>
                      </Link>
                      <Link href="/red">
                        <Button variant="primary" size="lg">
                          🤝 Únete a la Red
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Preguntas para Reflexionar */}
          <motion.section variants={itemVariants}>
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-2xl typewriter-bold text-center">🤔 PREGUNTAS PARA REFLEXIONAR</h2>
              </div>
              <div className="liquid-card-content">
                <div className="space-y-4">
                  <div className="expediente-liquid-card">
                    <p className="font-semibold mb-2">1. ¿Cuál es el verdadero costo de la conveniencia?</p>
                    <p className="text-sm text-tinta-clara">
                      Cuando usas servicios &ldquo;gratuitos&rdquo; que recopilan tus datos, ¿realmente es gratis? ¿O estás pagando con tu privacidad?
                    </p>
                  </div>

                  <div className="expediente-liquid-card">
                    <p className="font-semibold mb-2">2. ¿Quién tiene acceso a tu información?</p>
                    <p className="text-sm text-tinta-clara">
                      ¿Sabes qué empresas, gobiernos o terceros pueden acceder a tus datos de ubicación, conversaciones y actividad en línea?
                    </p>
                  </div>

                  <div className="expediente-liquid-card">
                    <p className="font-semibold mb-2">3. ¿Qué legado digital dejas?</p>
                    <p className="text-sm text-tinta-clara">
                      Cada búsqueda, cada like, cada ubicación compartida construye un perfil permanente de ti. ¿Es ese el legado que quieres dejar?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Referencias */}
          <motion.section variants={itemVariants}>
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-xl typewriter-bold text-center">📚 FUENTES Y REFERENCIAS</h2>
              </div>
              <div className="liquid-card-content">
                <ul className="text-xs space-y-2 text-tinta-suave">
                  <li>• PwC México. (2025). Digital Trust Insights Survey</li>
                  <li>• Global Voices. (2024). Vigilancia digital y el fantasma de la IA en México</li>
                  <li>• Carnegie Endowment for International Peace. (2024). AI Surveillance Index</li>
                  <li>• Nivelics. (2024). Las 5 vulnerabilidades críticas del 2024</li>
                  <li>• Electronic Frontier Foundation. (2024). Surveillance Self-Defense Guide</li>
                  <li>• IT Sitio México. (2025). Tendencias tecnológicas en seguridad para 2025</li>
                  <li>• Minery Report. (2024). Contramedidas en Ciberseguridad</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Botón de regreso */}
          <motion.div variants={itemVariants} className="text-center pt-6">
            <Link href="/observatorio">
              <Button variant="secondary" size="lg">
                ← Volver al Observatorio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
