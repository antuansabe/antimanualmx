'use client';

import { Button, PaperContainer, Stamp } from '@/shared/ui';
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
      <div className="min-h-screen p-4 md:p-8">
        <header className="max-w-7xl mx-auto mb-12">
          <Link href="/herramientas" className="flex items-center gap-4">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / DETECTOR DE PHISHING / RESULTADOS
            </span>
          </Link>
        </header>

        <main className="max-w-4xl mx-auto">
          <PaperContainer aged>
            <div className="text-center">
              <div className="text-8xl mb-6">
                {porcentaje >= 80 ? '🏆' : porcentaje >= 60 ? '👍' : '⚠️'}
              </div>
              <h1 className="text-3xl font-bold typewriter mb-4">
                SIMULACIÓN COMPLETADA
              </h1>
              
              <div className="text-6xl font-bold text-red-700 mb-2">
                {puntuacion}/{correosPrueba.length}
              </div>
              <p className="text-xl mb-6">
                Precisión: {porcentaje}%
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 text-left">
                <h3 className="font-bold text-blue-800 mb-4">EVALUACIÓN:</h3>
                {porcentaje >= 80 ? (
                  <div className="text-green-700">
                    <p className="font-bold">¡Excelente! 🎉</p>
                    <p>Tienes muy buen ojo para detectar phishing. Mantén esta vigilancia siempre activa.</p>
                  </div>
                ) : porcentaje >= 60 ? (
                  <div className="text-orange-700">
                    <p className="font-bold">Bien, pero puedes mejorar 📚</p>
                    <p>Considera repasar las técnicas de phishing más comunes y practica regularmente.</p>
                  </div>
                ) : (
                  <div className="text-red-700">
                    <p className="font-bold">Necesitas más práctica ⚠️</p>
                    <p>Te recomendamos tomar el curso completo en nuestra Academia y practicar más.</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.reload()} size="lg">
                  PRACTICAR DE NUEVO
                </Button>
                <Link href="/academia">
                  <Button variant="secondary" size="lg">
                    IR A LA ACADEMIA
                  </Button>
                </Link>
              </div>
            </div>
          </PaperContainer>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <Link href="/herramientas" className="flex items-center gap-4">
          <Stamp>ANTIMANUAL</Stamp>
          <span className="typewriter text-sm text-gray-600">
            / DETECTOR DE PHISHING
          </span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-8">
          <PaperContainer>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold typewriter">
                🎯 SIMULADOR DE PHISHING
              </h1>
              <div className="text-right">
                <div className="text-sm text-gray-600">
                  Correo {correoActual + 1} de {correosPrueba.length}
                </div>
                <div className="text-sm text-gray-600">
                  Puntuación: {puntuacion}/{correoActual}
                </div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-red-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((correoActual + 1) / correosPrueba.length) * 100}%` }}
              ></div>
            </div>

            <p className="text-gray-600 mb-4">
              Analiza el siguiente correo electrónico y determina si es legítimo o phishing:
            </p>
          </PaperContainer>
        </section>

        <section className="mb-8">
          <PaperContainer aged className="font-mono text-sm">
            <div className="border-b border-gray-300 pb-4 mb-4">
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
            
            <div className="whitespace-pre-line">
              {correo.contenido}
            </div>
          </PaperContainer>
        </section>

        {!mostrarResultado ? (
          <section>
            <PaperContainer>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6 typewriter">
                  ¿QUÉ TIPO DE CORREO ES?
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => responder('legitimo')}
                    variant="primary" 
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    ✅ LEGÍTIMO
                  </Button>
                  <Button 
                    onClick={() => responder('phishing')}
                    size="lg"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    🚨 PHISHING
                  </Button>
                </div>
              </div>
            </PaperContainer>
          </section>
        ) : (
          <section>
            <PaperContainer className={`border-2 ${
              respuesta === correo.tipo ? 'border-green-500' : 'border-red-500'
            }`}>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {respuesta === correo.tipo ? '✅' : '❌'}
                </div>
                <h3 className="text-2xl font-bold typewriter mb-2">
                  {respuesta === correo.tipo ? '¡CORRECTO!' : 'INCORRECTO'}
                </h3>
                <p className="text-lg">
                  Este correo es <strong>{correo.tipo === 'phishing' ? 'PHISHING' : 'LEGÍTIMO'}</strong>
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 text-left">
                <h4 className="font-bold text-blue-800 mb-3">PISTAS CLAVE:</h4>
                <ul className="space-y-2">
                  {correo.pistas.map((pista, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{pista}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Button onClick={siguienteCorreo} size="lg">
                  {correoActual < correosPrueba.length - 1 ? 'SIGUIENTE CORREO' : 'VER RESULTADOS'}
                </Button>
              </div>
            </PaperContainer>
          </section>
        )}
      </main>
    </div>
  );
}