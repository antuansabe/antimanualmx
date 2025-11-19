'use client';

import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const pasos = [
  {
    orden: 1,
    titulo: 'Cerrar todas las aplicaciones',
    descripcion: 'Cierra navegadores, apps de mensajería y cualquier aplicación abierta',
    comando: 'Alt + F4 (Windows) o Cmd + Q (Mac)',
    tiempo: '10 seg'
  },
  {
    orden: 2,
    titulo: 'Borrar historial del navegador',
    descripcion: 'Elimina el historial de navegación de las últimas 24 horas',
    comando: 'Ctrl + Shift + Delete',
    tiempo: '15 seg'
  },
  {
    orden: 3,
    titulo: 'Desconectar internet',
    descripcion: 'Desactiva WiFi y datos móviles para detener cualquier sincronización',
    comando: 'Modo avión ON',
    tiempo: '5 seg'
  },
  {
    orden: 4,
    titulo: 'Reiniciar dispositivo',
    descripcion: 'Reinicia para limpiar la memoria RAM y procesos temporales',
    comando: 'Reinicio completo',
    tiempo: '30 seg'
  }
];

export default function BotonPanicoPage() {
  const [pasoActual, setPasoActual] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [completado, setCompletado] = useState(false);

  const iniciarProtocolo = () => {
    setIniciado(true);
    setPasoActual(0);
  };

  const siguientePaso = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    } else {
      setCompletado(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud via-washi to-persimmon-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/herramientas" className="inline-flex items-center gap-2 text-ink-700 hover:text-persimmon-600 transition-colors">
            <span className="text-2xl">←</span>
            <Body size="sm">Volver a Herramientas</Body>
          </Link>
        </motion.div>

        {!iniciado ? (
          // Vista inicial
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <Hero
                variant="minimal"
                size="md"
                title="🚨 Botón de Pánico"
                description="Protocolo de emergencia para borrar rastros digitales en 60 segundos"
                badge={
                  <Badge color="persimmon" variant="soft" size="lg">
                    Emergencias Solamente
                  </Badge>
                }
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Card variant="glass" className="bg-persimmon-50/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚠️</div>
                  <div>
                    <H3 className="mb-2 text-persimmon-800">Antes de Continuar:</H3>
                    <ul className="space-y-1">
                      <li><Body className="text-ink-700">• Este protocolo borrará datos de forma permanente</Body></li>
                      <li><Body className="text-ink-700">• Solo úsalo si estás en peligro real</Body></li>
                      <li><Body className="text-ink-700">• Ten ubicaciones seguras identificadas con anticipación</Body></li>
                      <li><Body className="text-ink-700">• Guarda información importante en lugares seguros</Body></li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <Card variant="outlined">
                <H3 className="mb-4">Protocolo Completo:</H3>
                <div className="grid gap-4">
                  {pasos.map((paso, index) => (
                    <motion.div
                      key={paso.orden}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 border border-ink-200 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-persimmon-700 min-w-[40px]">
                        {paso.orden}
                      </div>
                      <div className="flex-1">
                        <Body className="font-bold">{paso.titulo}</Body>
                        <Body size="sm" className="text-ink-600">{paso.descripcion}</Body>
                        <code className="text-xs bg-washi px-2 py-1 rounded font-mono mt-1 inline-block">
                          {paso.comando}
                        </code>
                      </div>
                      <Body size="sm" className="text-ink-500 font-mono">
                        {paso.tiempo}
                      </Body>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Button
                onClick={iniciarProtocolo}
                color="persimmon"
                size="lg"
              >
                🚨 Iniciar Protocolo de Emergencia
              </Button>
            </motion.div>
          </>
        ) : !completado ? (
          // Vista del protocolo en ejecución
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card variant="elevated" className="border-2 border-persimmon-500">
              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-6xl mb-4"
                >
                  🚨
                </motion.div>
                <H2 className="text-persimmon-700">Protocolo Activo</H2>
                <Body size="lg">
                  Paso {pasoActual + 1} de {pasos.length}
                </Body>
              </div>

              <div className="mb-8">
                <div className="w-full bg-washi rounded-full h-4 mb-6">
                  <div
                    className="bg-persimmon-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: `${((pasoActual + 1) / pasos.length) * 100}%` }}
                  ></div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{pasos[pasoActual].orden}</div>
                  <H2 className="mb-4">{pasos[pasoActual].titulo}</H2>
                  <Body size="lg" className="text-ink-700 mb-4">
                    {pasos[pasoActual].descripcion}
                  </Body>
                  <div className="bg-washi p-4 rounded-lg inline-block">
                    <code className="font-mono text-lg">
                      {pasos[pasoActual].comando}
                    </code>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={siguientePaso}
                  color="matcha"
                  size="lg"
                >
                  ✅ Completado - Siguiente Paso
                </Button>
              </div>
            </Card>
          </motion.div>
        ) : (
          // Vista de protocolo completado
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card variant="elevated" className="border-2 border-matcha-500">
              <div className="text-center">
                <div className="text-8xl mb-4">✅</div>
                <H2 className="text-matcha-700 mb-4">Protocolo Completado</H2>
                <Body size="lg" className="mb-8">
                  Has completado exitosamente el protocolo de emergencia
                </Body>

                <Card variant="glass" className="mb-8 text-left bg-matcha-50/50">
                  <H3 className="mb-2 text-matcha-800">Próximos Pasos:</H3>
                  <ul className="space-y-2">
                    <li><Body className="text-ink-700">• Mantente en un lugar seguro</Body></li>
                    <li><Body className="text-ink-700">• Contacta a personas de confianza</Body></li>
                    <li><Body className="text-ink-700">• Documenta cualquier amenaza recibida</Body></li>
                    <li><Body className="text-ink-700">• Considera contactar organizaciones de apoyo</Body></li>
                  </ul>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/red">
                    <Button color="matcha" size="lg">
                      Contactar Red de Apoyo
                    </Button>
                  </Link>
                  <Link href="/herramientas">
                    <Button variant="outline" color="matcha" size="lg">
                      Volver a Herramientas
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}