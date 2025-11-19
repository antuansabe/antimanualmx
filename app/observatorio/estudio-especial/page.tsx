'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';

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
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="xl"
        title="Vigilancia Digital en México"
        description="Tendencias Emergentes y Contramedidas • Investigación Actualizada"
        badge={
          <Badge color="persimmon" variant="solid" size="lg">
            🔬 Estudio Especial
          </Badge>
        }
        illustration={
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl"
          >
            🔍
          </motion.div>
        }
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introducción */}
          <motion.section variants={itemVariants}>
            <Card variant="elevated" padding="lg">
              <div className="mb-6">
                <Badge color="lavender" variant="soft" size="lg" className="mb-4">
                  📊 Panorama Actual
                </Badge>
                <H2 className="mb-6">Estado de la Vigilancia Digital</H2>
              </div>

              <div className="space-y-4">
                <Body className="text-lg font-semibold">
                  ¿Sabías que México fue el <span className="text-persimmon font-bold">primer gobierno cliente</span> y el usuario más prolífico del spyware Pegasus?
                </Body>
                <Body>
                  Durante 2024, México registró <strong>42.4 millones de intentos de ataque de malware</strong> dirigidos a empresas,
                  y más de <strong>31 mil millones de intentos de ciberataques</strong> en total. Pero la vigilancia digital va más allá
                  de los ciberataques: se trata del monitoreo sistemático de ciudadanos a través de tecnologías cada vez más sofisticadas.
                </Body>
                <div className="bg-gradient-to-br from-sunset-50 to-gold-50 border-l-4 border-sunset p-6 rounded-xl my-6">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">💡</span>
                    <div>
                      <p className="font-display font-bold text-sumi mb-2">Reflexiona:</p>
                      <Body className="text-sm">
                        ¿Cuántos dispositivos conectados tienes en este momento?
                        ¿Tu teléfono, laptop, reloj inteligente, asistente de voz? Cada uno es una potencial puerta de entrada
                        para la vigilancia.
                      </Body>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Tendencias Emergentes */}
          <motion.section variants={itemVariants}>
            <Card variant="elevated" padding="lg">
              <div className="mb-8 text-center">
                <Badge color="ocean" variant="soft" size="lg" className="mb-4">
                  🔍 Tendencias
                </Badge>
                <H2>Tendencias Emergentes 2024-2025</H2>
              </div>

              <div className="space-y-6">
                  {/* Tendencia 1 */}
                  <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-4xl">🤖</span>
                      <H3 className="flex-1">1. Inteligencia Artificial de Doble Filo</H3>
                    </div>
                    <Body className="mb-4">
                      La IA se está utilizando <strong>simultáneamente para defensa y ataque</strong>. Según encuestas de
                      ciberseguridad, el 50% de los profesionales identifica la IA generativa como la tecnología con mayor
                      impacto en la superficie de ataque cibernético.
                    </Body>
                    <div className="bg-gradient-to-br from-persimmon/10 to-sunset-50 p-4 rounded-xl border border-persimmon/20">
                      <p className="text-sm font-bold text-sumi mb-2">Caso México: Torre Centinela en Chihuahua ($200M USD)</p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-charcoal">
                        <li>1,791 lectores automáticos de placas</li>
                        <li>3,065 cámaras con zoom y giro</li>
                        <li>74 drones con filtros biométricos para reconocimiento facial</li>
                      </ul>
                    </div>
                    <p className="text-xs text-charcoal mt-3 italic">
                      Fuente: Global Voices, 2024
                    </p>
                  </div>

                  {/* Tendencia 2 */}
                  <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-4xl">📡</span>
                      <H3 className="flex-1">2. Proliferación del Internet de las Cosas (IoT)</H3>
                    </div>
                    <Body className="mb-4">
                      El crecimiento exponencial de dispositivos conectados representa una <strong>mayor superficie de exposición</strong>.
                      Cada cámara, sensor, termostato inteligente o vehículo conectado puede ser potencialmente comprometido.
                    </Body>
                    <div className="bg-gradient-to-br from-ocean/10 to-lavender-50 p-4 rounded-xl border border-ocean/20">
                      <p className="text-sm font-bold text-sumi mb-2">❓ Pregunta crítica:</p>
                      <Body className="text-sm">
                        ¿Has leído alguna vez la política de privacidad de tu smart TV, tu asistente de voz o tu cámara de seguridad doméstica?
                        ¿Sabes qué datos recopilan y con quién los comparten?
                      </Body>
                    </div>
                    <p className="text-xs text-charcoal mt-3 italic">
                      Fuente: PwC Digital Trust Insights México, 2025
                    </p>
                  </div>

                  {/* Tendencia 3 */}
                  <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-4xl">🏙️</span>
                      <H3 className="flex-1">3. Sistemas de "Ciudades Seguras" en América Latina</H3>
                    </div>
                    <Body className="mb-3">
                      Según Carnegie Endowment for International Peace, de 176 países estudiados, <strong>75 ya emplean tecnologías de IA para vigilancia</strong>:
                    </Body>
                    <ul className="list-disc list-inside space-y-2 text-sm text-charcoal mb-4">
                      <li>74 países usan reconocimiento facial</li>
                      <li>56 han desarrollado sistemas de "ciudades seguras"</li>
                      <li>Buenos Aires y Ciudad de México implementan estos sistemas <strong>sin regulaciones claras de privacidad</strong></li>
                    </ul>
                    <div className="bg-gradient-to-br from-sunset-50 to-gold-50 p-4 rounded-xl border border-sunset/20">
                      <p className="text-sm font-bold text-sumi mb-2">⚠️ Alerta:</p>
                      <Body className="text-sm">
                        Investigadores advierten que estas soluciones pueden tener consecuencias graves
                        para los derechos humanos, incluyendo privacidad, libertad de expresión y el derecho a no ser vigilado sin consentimiento.
                      </Body>
                    </div>
                    <p className="text-xs text-charcoal mt-3 italic">
                      Fuente: Carnegie Endowment for International Peace, 2024
                    </p>
                  </div>

                  {/* Tendencia 4 */}
                  <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-4xl">🎯</span>
                      <H3 className="flex-1">4. Incremento de Ataques a Pequeñas Empresas</H3>
                    </div>
                    <Body className="mb-4">
                      Las pequeñas empresas están en la mira debido a su <strong>menor nivel de protección</strong>.
                      En 2024 se registraron más de <strong>40,287 vulnerabilidades</strong>, duplicando las cifras de 2023.
                    </Body>
                    <p className="text-xs text-charcoal italic">
                      Fuente: Nivelics, Análisis de Vulnerabilidades 2024
                    </p>
                  </div>
                </div>
            </Card>
          </motion.section>

          {/* Contramedidas */}
          <motion.section variants={itemVariants}>
            <Card variant="elevated" padding="lg">
              <div className="mb-8 text-center">
                <Badge color="matcha" variant="soft" size="lg" className="mb-4">
                  🛡️ Protección
                </Badge>
                <H2>Contramedidas y Protección</H2>
              </div>

              <div className="mb-6">
                <Body className="text-lg text-center">
                  No todo está perdido. Existen herramientas y prácticas que puedes implementar <strong>hoy mismo</strong> para protegerte:
                </Body>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Técnicas */}
                  <div className="p-6 bg-gradient-to-br from-matcha-50 to-washi rounded-2xl border border-matcha-200">
                    <H3 className="mb-4 text-matcha-700">✅ Contramedidas Técnicas</H3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-matcha-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Cifrado de extremo a extremo</strong> en todas tus comunicaciones</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-matcha-600 text-lg">•</span>
                        <Body className="text-sm"><strong>VPN confiable</strong> (cuidado con TunnelVision, vulnerabilidad descubierta en 2024)</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-matcha-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Antivirus actualizado</strong> y sistemas de detección de intrusiones (IDS/IPS)</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-matcha-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Autenticación de dos factores (2FA)</strong> en todas tus cuentas importantes</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-matcha-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Herramientas SIEM</strong> para organizaciones (monitoreo en tiempo real)</Body>
                      </li>
                    </ul>
                  </div>

                  {/* Administrativas */}
                  <div className="p-6 bg-gradient-to-br from-ocean-50 to-washi rounded-2xl border border-ocean-200">
                    <H3 className="mb-4 text-ocean-700">📋 Contramedidas Administrativas</H3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-ocean-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Políticas de privacidad claras</strong> en tu organización</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ocean-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Auditorías de seguridad regulares</strong></Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ocean-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Plan de respuesta a incidentes</strong> documentado</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ocean-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Capacitación continua</strong> en ciberseguridad</Body>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ocean-600 text-lg">•</span>
                        <Body className="text-sm"><strong>Gestión de accesos</strong> con principio de mínimo privilegio</Body>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-matcha-50 to-matcha-100 border-l-4 border-matcha p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📚</span>
                    <div>
                      <p className="text-sm font-display font-bold text-sumi mb-2">Recurso Clave: Guía de Autodefensa contra la Vigilancia (SSD)</p>
                      <Body className="text-sm mb-2">
                        La Electronic Frontier Foundation (EFF) celebró en 2024 el 15º aniversario de su guía Surveillance Self-Defense,
                        actualizada con nuevas amenazas como las licencias de conducir digitales y técnicas de ataque a VPN.
                      </Body>
                      <p className="text-xs text-charcoal italic">
                        Fuente: EFF, Surveillance Self-Defense 2024
                      </p>
                    </div>
                  </div>
                </div>
            </Card>
          </motion.section>

          {/* Llamado a la Acción */}
          <motion.section variants={itemVariants}>
            <Card variant="glass" padding="xl" className="bg-gradient-to-br from-sakura-50 via-lavender-50 to-ocean-50">
              <div className="text-center mb-8">
                <Badge color="sakura" variant="solid" size="lg" className="mb-4">
                  🎯 Acción
                </Badge>
                <H2 className="mb-4">¿Qué Puedes Hacer Tú?</H2>
                <Body className="text-lg">
                  La vigilancia digital es una realidad, pero no tienes que ser una víctima pasiva.
                  <strong> Aquí hay acciones concretas que puedes tomar ahora:</strong>
                </Body>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white/80 backdrop-blur rounded-2xl border border-mist text-center">
                  <div className="text-5xl mb-4">📱</div>
                  <H3 className="mb-3 text-lg">Audita tus Dispositivos</H3>
                  <Body className="text-sm">
                    Revisa los permisos de todas tus apps. Desactiva micrófonos y cámaras cuando no los uses.
                  </Body>
                </div>

                <div className="p-6 bg-white/80 backdrop-blur rounded-2xl border border-mist text-center">
                  <div className="text-5xl mb-4">🔐</div>
                  <H3 className="mb-3 text-lg">Cifra tu Comunicación</H3>
                  <Body className="text-sm">
                    Usa Signal, ProtonMail u otras herramientas con cifrado de extremo a extremo verificado.
                  </Body>
                </div>

                <div className="p-6 bg-white/80 backdrop-blur rounded-2xl border border-mist text-center">
                  <div className="text-5xl mb-4">📖</div>
                  <H3 className="mb-3 text-lg">Edúcate y Comparte</H3>
                  <Body className="text-sm">
                    Aprende sobre tus derechos digitales y comparte este conocimiento con tu comunidad.
                  </Body>
                </div>
              </div>

              <div className="bg-gradient-to-r from-persimmon to-sunset text-white p-8 rounded-2xl text-center">
                <H3 className="mb-4 text-white">⚡ Actúa Ahora</H3>
                <Body className="text-white/90 mb-6">
                  No esperes a ser víctima de vigilancia. Cada minuto sin protección es un minuto de exposición.
                </Body>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/herramientas">
                    <Button variant="solid" className="bg-white text-persimmon hover:bg-washi" size="lg">
                      🔧 Ver Herramientas de Protección
                    </Button>
                  </Link>
                  <Link href="/red">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                      🤝 Únete a la Red
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Preguntas para Reflexionar */}
          <motion.section variants={itemVariants}>
            <Card variant="outlined" padding="lg">
              <div className="mb-8 text-center">
                <Badge color="gold" variant="soft" size="lg" className="mb-4">
                  🤔 Reflexión
                </Badge>
                <H2>Preguntas para Reflexionar</H2>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                  <H3 className="mb-3 text-lg">1. ¿Cuál es el verdadero costo de la conveniencia?</H3>
                  <Body className="text-sm text-charcoal">
                    Cuando usas servicios "gratuitos" que recopilan tus datos, ¿realmente es gratis? ¿O estás pagando con tu privacidad?
                  </Body>
                </div>

                <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                  <H3 className="mb-3 text-lg">2. ¿Quién tiene acceso a tu información?</H3>
                  <Body className="text-sm text-charcoal">
                    ¿Sabes qué empresas, gobiernos o terceros pueden acceder a tus datos de ubicación, conversaciones y actividad en línea?
                  </Body>
                </div>

                <div className="p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist">
                  <H3 className="mb-3 text-lg">3. ¿Qué legado digital dejas?</H3>
                  <Body className="text-sm text-charcoal">
                    Cada búsqueda, cada like, cada ubicación compartida construye un perfil permanente de ti. ¿Es ese el legado que quieres dejar?
                  </Body>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Referencias */}
          <motion.section variants={itemVariants}>
            <Card variant="filled" padding="lg">
              <div className="mb-6 text-center">
                <Badge color="lavender" variant="soft" className="mb-4">
                  📚 Referencias
                </Badge>
                <H3>Fuentes y Referencias</H3>
              </div>

              <ul className="text-xs space-y-2 text-charcoal grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>PwC México. (2025). Digital Trust Insights Survey</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Global Voices. (2024). Vigilancia digital y el fantasma de la IA en México</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Carnegie Endowment for International Peace. (2024). AI Surveillance Index</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Nivelics. (2024). Las 5 vulnerabilidades críticas del 2024</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Electronic Frontier Foundation. (2024). Surveillance Self-Defense Guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>IT Sitio México. (2025). Tendencias tecnológicas en seguridad para 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Minery Report. (2024). Contramedidas en Ciberseguridad</span>
                </li>
              </ul>
            </Card>
          </motion.section>

          {/* Botón de regreso */}
          <motion.div variants={itemVariants} className="text-center pt-6">
            <Link href="/observatorio">
              <Button variant="outline" color="matcha" size="lg">
                ← Volver al Observatorio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
