'use client';

import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const correosPrueba = [
  {
    id: 1,
    tipo: 'phishing',
    remitente: 'seguridad@bancomexico-oficial.com',
    asunto: 'URGENTE: Confirma tu cuenta en 24 horas',
    contenido: `Estimado cliente,

Hemos detectado actividad sospechosa en tu cuenta. Para proteger tu seguridad, necesitas verificar tu identidad INMEDIATAMENTE.

Haz clic aquí para verificar: http://bancomexico-verificacion.tk/login

Si no lo haces en 24 horas, tu cuenta será suspendida permanentemente.

Atentamente,
Equipo de Seguridad Banco de México`,
    pistas: [
      'Dominio sospechoso (.tk es una extensión gratuita)',
      'Urgencia artificial para crear presión',
      'Solicita datos sensibles por correo',
      'URL no coincide con el banco oficial'
    ]
  },
  {
    id: 2,
    tipo: 'legitimo',
    remitente: 'notificaciones@netflix.com',
    asunto: 'Nuevo contenido agregado a tu lista',
    contenido: `¡Hola!

Los títulos que guardaste en "Mi Lista" ya están disponibles:
• Serie X - Temporada 2
• Película Y - Estreno

Inicia sesión en Netflix para verlos.

Si no quieres recibir estas notificaciones, puedes cambiar tus preferencias en tu perfil.

El equipo de Netflix`,
    pistas: [
      'No solicita datos personales',
      'Dominio oficial verificado',
      'Contenido informativo, no urgente',
      'Ofrece opción de cancelar suscripción'
    ]
  },
  {
    id: 3,
    tipo: 'phishing',
    remitente: 'soporte@whatsapp.com.mx',
    asunto: 'Tu número será bloqueado',
    contenido: `ALERTA DE SEGURIDAD

Tu número de WhatsApp será desactivado por uso indebido.

Para evitarlo, confirma tu identidad enviando:
- Foto de tu INE
- Código de verificación actual
- Número de teléfono

Envía la información a este número: +52 55 1234 5678

Tienes 2 horas antes del bloqueo permanente.`,
    pistas: [
      'WhatsApp nunca pide documentos por mensaje',
      'Solicita información personal sensible',
      'Presión temporal extrema',
      'Número de teléfono no oficial'
    ]
  }
];

export default function PhishingDetectorPage() {
  const [correoActual, setCorreoActual] = useState(0);
  const [respuesta, setRespuesta] = useState<string | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);
  const [completado, setCompletado] = useState(false);

  const correo = correosPrueba[correoActual];

  const responder = (tipo: string) => {
    setRespuesta(tipo);
    setMostrarResultado(true);
    
    if (tipo === correo.tipo) {
      setPuntuacion(puntuacion + 1);
    }
  };

  const siguienteCorreo = () => {
    if (correoActual < correosPrueba.length - 1) {
      setCorreoActual(correoActual + 1);
      setRespuesta(null);
      setMostrarResultado(false);
    } else {
      setCompletado(true);
    }
  };

  if (completado) {
    const porcentaje = Math.round((puntuacion / correosPrueba.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-cloud via-washi to-ocean-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/herramientas" className="inline-flex items-center gap-2 text-ink-700 hover:text-ocean-600 transition-colors">
              <span className="text-2xl">←</span>
              <Body size="sm">Volver a Herramientas</Body>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="elevated">
              <div className="text-center">
                <div className="text-8xl mb-6">
                  {porcentaje >= 80 ? '🏆' : porcentaje >= 60 ? '👍' : '⚠️'}
                </div>
                <H2 className="mb-4">Simulación Completada</H2>

                <div className="text-6xl font-bold text-ocean-600 mb-2">
                  {puntuacion}/{correosPrueba.length}
                </div>
                <Body size="lg" className="mb-6">
                  Precisión: {porcentaje}%
                </Body>

                <Card variant="glass" className="mb-8 text-left bg-ocean-50/50">
                  <H3 className="mb-4 text-ocean-800">Evaluación</H3>
                  {porcentaje >= 80 ? (
                    <div>
                      <Body className="font-bold text-matcha-700 mb-2">¡Excelente! 🎉</Body>
                      <Body className="text-ink-600">Tienes muy buen ojo para detectar phishing. Mantén esta vigilancia siempre activa.</Body>
                    </div>
                  ) : porcentaje >= 60 ? (
                    <div>
                      <Body className="font-bold text-gold-700 mb-2">Bien, pero puedes mejorar 📚</Body>
                      <Body className="text-ink-600">Considera repasar las técnicas de phishing más comunes y practica regularmente.</Body>
                    </div>
                  ) : (
                    <div>
                      <Body className="font-bold text-persimmon-700 mb-2">Necesitas más práctica ⚠️</Body>
                      <Body className="text-ink-600">Te recomendamos tomar el curso completo en nuestra Academia y practicar más.</Body>
                    </div>
                  )}
                </Card>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.location.reload()} color="ocean" size="lg">
                    Practicar de Nuevo
                  </Button>
                  <Link href="/academia">
                    <Button variant="outline" color="ocean" size="lg">
                      Ir a la Academia
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud via-washi to-ocean-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header with back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/herramientas" className="inline-flex items-center gap-2 text-ink-700 hover:text-ocean-600 transition-colors">
            <span className="text-2xl">←</span>
            <Body size="sm">Volver a Herramientas</Body>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Hero
            variant="minimal"
            size="md"
            title="🎯 Detector de Phishing"
            description="Aprende a identificar correos fraudulentos con este simulador interactivo"
            badge={
              <Badge color="ocean" variant="soft" size="lg">
                Seguridad Digital
              </Badge>
            }
          />
        </motion.div>

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="outlined">
            <div className="flex justify-between items-center mb-4">
              <div>
                <Body size="sm" className="text-ink-600">
                  Correo {correoActual + 1} de {correosPrueba.length}
                </Body>
                <Body size="sm" className="text-ink-600">
                  Puntuación: {puntuacion}/{correoActual === 0 && puntuacion === 0 ? 0 : correoActual}
                </Body>
              </div>
              <Badge color="ocean">{Math.round(((correoActual + 1) / correosPrueba.length) * 100)}% Completado</Badge>
            </div>

            <div className="w-full bg-washi rounded-full h-3">
              <div
                className="bg-ocean-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((correoActual + 1) / correosPrueba.length) * 100}%` }}
              ></div>
            </div>
          </Card>
        </motion.div>

        {/* Email Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" className="font-mono text-sm">
            <div className="border-b border-ink-200 pb-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>De:</strong> {correo.remitente}
                </div>
                <div>
                  <strong>Fecha:</strong> {new Date().toLocaleDateString()}
                </div>
              </div>
              <div className="mt-2">
                <strong>Asunto:</strong> {correo.asunto}
              </div>
            </div>

            <div className="whitespace-pre-line text-ink-700">
              {correo.contenido}
            </div>
          </Card>
        </motion.div>

        {/* Quiz or Result Section */}
        {!mostrarResultado ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="elevated">
              <div className="text-center">
                <H3 className="mb-6">¿Qué tipo de correo es?</H3>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => responder('legitimo')}
                    color="matcha"
                    size="lg"
                  >
                    ✅ Legítimo
                  </Button>
                  <Button
                    onClick={() => responder('phishing')}
                    color="persimmon"
                    size="lg"
                  >
                    🚨 Phishing
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="elevated" className={`border-2 ${
              respuesta === correo.tipo ? 'border-matcha-500' : 'border-persimmon-500'
            }`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {respuesta === correo.tipo ? '✅' : '❌'}
                </div>
                <H2 className="mb-2">
                  {respuesta === correo.tipo ? '¡Correcto!' : 'Incorrecto'}
                </H2>
                <Body size="lg">
                  Este correo es <strong>{correo.tipo === 'phishing' ? 'PHISHING' : 'LEGÍTIMO'}</strong>
                </Body>
              </div>

              <Card variant="glass" className="mb-6 text-left bg-ocean-50/50">
                <H3 className="mb-3 text-ocean-800">Pistas Clave</H3>
                <ul className="space-y-2">
                  {correo.pistas.map((pista, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-ocean-600 mt-1">•</span>
                      <Body size="sm">{pista}</Body>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="text-center">
                <Button onClick={siguienteCorreo} color="ocean" size="lg">
                  {correoActual < correosPrueba.length - 1 ? 'Siguiente Correo' : 'Ver Resultados'}
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}