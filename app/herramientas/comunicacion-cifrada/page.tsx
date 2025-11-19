'use client';

import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const aplicaciones = [
  {
    id: 'signal',
    nombre: 'Signal',
    descripcion: 'Mensajería cifrada de extremo a extremo recomendada por expertos',
    logo: '📱',
    seguridad: 'MÁXIMA',
    facilidad: 'FÁCIL',
    plataformas: ['iOS', 'Android', 'Desktop'],
    funciones: ['Mensajes', 'Llamadas', 'Videollamadas', 'Archivos'],
    configuracion: [
      'Descargar de tienda oficial',
      'Verificar número de teléfono',
      'Activar bloqueo con PIN',
      'Configurar desaparición de mensajes',
      'Verificar claves de seguridad'
    ],
    url: 'https://signal.org',
    codigoQR: 'QR_SIGNAL',
    notas: 'Usado por periodistas y activistas mundialmente'
  },
  {
    id: 'element',
    nombre: 'Element (Matrix)',
    descripcion: 'Red descentralizada para comunicación segura y colaboración',
    logo: '🔗',
    seguridad: 'ALTA',
    facilidad: 'MEDIA',
    plataformas: ['Web', 'iOS', 'Android', 'Desktop'],
    funciones: ['Mensajes', 'Salas', 'Archivos', 'Integración'],
    configuracion: [
      'Crear cuenta en servidor confiable',
      'Configurar verificación cruzada',
      'Crear sala cifrada',
      'Verificar dispositivos',
      'Configurar respaldos'
    ],
    url: 'https://element.io',
    codigoQR: 'QR_ELEMENT',
    notas: 'Ideal para grupos y organizaciones'
  },
  {
    id: 'briar',
    nombre: 'Briar',
    descripcion: 'Mensajería peer-to-peer sin servidores centrales',
    logo: '🌿',
    seguridad: 'MÁXIMA',
    facilidad: 'DIFÍCIL',
    plataformas: ['Android'],
    funciones: ['Mensajes P2P', 'Blogs', 'Foros'],
    configuracion: [
      'Instalar desde F-Droid o sitio oficial',
      'Crear identidad local',
      'Conectar con contactos físicamente',
      'Configurar sincronización',
      'Crear grupos privados'
    ],
    url: 'https://briarproject.org',
    codigoQR: 'QR_BRIAR',
    notas: 'Funciona sin internet mediante Bluetooth/WiFi'
  },
  {
    id: 'session',
    nombre: 'Session',
    descripcion: 'Mensajería anónima sin número de teléfono',
    logo: '👻',
    seguridad: 'ALTA',
    facilidad: 'FÁCIL',
    plataformas: ['iOS', 'Android', 'Desktop'],
    funciones: ['Mensajes anónimos', 'Grupos', 'Archivos'],
    configuracion: [
      'Descargar e instalar',
      'Generar ID anónimo',
      'Compartir ID de sesión',
      'Configurar notificaciones',
      'Establecer contraseña'
    ],
    url: 'https://getsession.org',
    codigoQR: 'QR_SESSION',
    notas: 'No requiere número de teléfono ni email'
  }
];

const protocolos = [
  {
    nombre: 'Cifrado de Extremo a Extremo (E2EE)',
    descripcion: 'Solo emisor y receptor pueden leer los mensajes',
    importancia: 'CRÍTICA'
  },
  {
    nombre: 'Perfect Forward Secrecy',
    descripcion: 'Claves únicas por mensaje, compromiso pasado no afecta futuro',
    importancia: 'ALTA'
  },
  {
    nombre: 'Verificación de Identidad',
    descripcion: 'Confirmar que hablas con la persona correcta',
    importancia: 'ALTA'
  },
  {
    nombre: 'Metadatos Mínimos',
    descripcion: 'Limitar información sobre cuándo y con quién hablas',
    importancia: 'MEDIA'
  }
];

export default function ComunicacionCifradaPage() {
  const [appSeleccionada, setAppSeleccionada] = useState<string>('signal');
  const [pasosCompletados, setPasosCompletados] = useState<Set<string>>(new Set());
  const [modoComparacion, setModoComparacion] = useState(false);

  const togglePaso = (paso: string) => {
    const nuevoPasos = new Set(pasosCompletados);
    if (nuevoPasos.has(paso)) {
      nuevoPasos.delete(paso);
    } else {
      nuevoPasos.add(paso);
    }
    setPasosCompletados(nuevoPasos);
  };

  const aplicacionSeleccionada = aplicaciones.find(app => app.id === appSeleccionada);
  const progreso = aplicacionSeleccionada ? 
    (pasosCompletados.size / aplicacionSeleccionada.configuracion.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud via-washi to-matcha-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header with back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/herramientas" className="inline-flex items-center gap-2 text-ink-700 hover:text-matcha-600 transition-colors">
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
            title="🔐 Comunicación Cifrada"
            description="Configura Signal y otras apps seguras paso a paso"
            badge={
              <Badge color="matcha" variant="soft" size="lg">
                Cifrado E2E
              </Badge>
            }
          />
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" className="bg-matcha-50/50">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <H3 className="mb-2 text-matcha-800">¿Por qué es importante?</H3>
                <Body className="text-ink-600">
                  Las comunicaciones sin cifrar pueden ser interceptadas por gobiernos,
                  empresas o atacantes. El cifrado de extremo a extremo protege tu privacidad.
                </Body>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => setModoComparacion(!modoComparacion)}
                variant={modoComparacion ? 'solid' : 'outline'}
                color="matcha"
              >
                📊 {modoComparacion ? 'Ocultar' : 'Comparar'} Aplicaciones
              </Button>
            </div>
          </Card>
        </motion.div>

        {modoComparacion && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8"
          >
            <Card variant="outlined">
              <H2 className="mb-6 text-center">📊 Comparación de Aplicaciones</H2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-ink-200">
                      <th className="text-left p-2">App</th>
                      <th className="text-center p-2">Seguridad</th>
                      <th className="text-center p-2">Facilidad</th>
                      <th className="text-center p-2">Plataformas</th>
                      <th className="text-left p-2">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aplicaciones.map((app) => (
                      <tr key={app.id} className="border-b border-ink-100 hover:bg-washi transition-colors">
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{app.logo}</span>
                            <strong>{app.nombre}</strong>
                          </div>
                        </td>
                        <td className="text-center p-2">
                          <Badge
                            color={app.seguridad === 'MÁXIMA' ? 'matcha' : 'ocean'}
                            size="sm"
                          >
                            {app.seguridad}
                          </Badge>
                        </td>
                        <td className="text-center p-2">
                          <Badge
                            color={
                              app.facilidad === 'FÁCIL' ? 'matcha' :
                              app.facilidad === 'MEDIA' ? 'gold' : 'persimmon'
                            }
                            size="sm"
                          >
                            {app.facilidad}
                          </Badge>
                        </td>
                        <td className="text-center p-2">
                          <Body size="sm">{app.plataformas.join(', ')}</Body>
                        </td>
                        <td className="p-2">
                          <Body size="sm" className="text-ink-600">{app.notas}</Body>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <div className="md:col-span-1">
            <Card variant="outlined">
              <H3 className="mb-4">Seleccionar App</H3>
              <div className="space-y-2">
                {aplicaciones.map((app, index) => (
                  <motion.button
                    key={app.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={() => {
                      setAppSeleccionada(app.id);
                      setPasosCompletados(new Set());
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      appSeleccionada === app.id
                        ? 'bg-matcha-100 border-l-4 border-matcha-600'
                        : 'hover:bg-washi'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{app.logo}</span>
                      <Body className="font-medium">{app.nombre}</Body>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      <Badge
                        color={app.seguridad === 'MÁXIMA' ? 'matcha' : 'ocean'}
                        size="sm"
                      >
                        {app.seguridad}
                      </Badge>
                      <Badge
                        color={
                          app.facilidad === 'FÁCIL' ? 'matcha' :
                          app.facilidad === 'MEDIA' ? 'gold' : 'persimmon'
                        }
                        size="sm"
                      >
                        {app.facilidad}
                      </Badge>
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card variant="elevated">
              {aplicacionSeleccionada && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{aplicacionSeleccionada.logo}</span>
                    <div>
                      <H2>{aplicacionSeleccionada.nombre}</H2>
                      <Body className="text-ink-600">{aplicacionSeleccionada.descripcion}</Body>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Body className="font-bold mb-2">Plataformas:</Body>
                      <div className="flex flex-wrap gap-1">
                        {aplicacionSeleccionada.plataformas.map((plat) => (
                          <span key={plat} className="bg-washi text-xs px-2 py-1 rounded">
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Body className="font-bold mb-2">Funciones:</Body>
                      <div className="flex flex-wrap gap-1">
                        {aplicacionSeleccionada.funciones.map((func) => (
                          <span key={func} className="bg-matcha-100 text-xs px-2 py-1 rounded">
                            {func}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <Body className="font-bold">Progreso de configuración:</Body>
                      <Body size="sm" className="text-ink-600">{Math.round(progreso)}%</Body>
                    </div>
                    <div className="w-full bg-washi rounded-full h-3">
                      <div
                        className="bg-matcha-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progreso}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Body className="font-bold mb-3">Pasos de configuración:</Body>
                    <div className="space-y-3">
                      {aplicacionSeleccionada.configuracion.map((paso, index) => {
                        const pasoId = `${aplicacionSeleccionada.id}-${index}`;
                        const completado = pasosCompletados.has(pasoId);

                        return (
                          <div
                            key={index}
                            className={`border rounded-lg p-3 transition-all ${
                              completado ? 'bg-matcha-50 border-matcha-500' : 'border-ink-200 hover:border-ink-400'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() => togglePaso(pasoId)}
                                className="mt-0.5"
                              >
                                <div className={`w-5 h-5 border-2 rounded transition-colors ${
                                  completado
                                    ? 'bg-matcha-600 border-matcha-600'
                                    : 'border-ink-400 hover:border-ink-600'
                                }`}>
                                  {completado && (
                                    <svg className="w-full h-full text-white" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </div>
                              </button>

                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-matcha-700">{index + 1}.</span>
                                  <Body className={completado ? 'line-through text-ink-400' : ''}>
                                    {paso}
                                  </Body>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={aplicacionSeleccionada.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button color="matcha" size="lg">
                        📱 Descargar {aplicacionSeleccionada.nombre}
                      </Button>
                    </a>
                    <Button variant="outline" color="matcha" size="lg">
                      📋 Guía Detallada
                    </Button>
                  </div>
                </>
              )}
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="outlined">
            <H2 className="mb-6 text-center">🧠 Conceptos Clave de Seguridad</H2>
            <div className="grid md:grid-cols-2 gap-4">
              {protocolos.map((protocolo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-ink-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Body className="font-bold">{protocolo.nombre}</Body>
                    <Badge
                      color={
                        protocolo.importancia === 'CRÍTICA' ? 'persimmon' :
                        protocolo.importancia === 'ALTA' ? 'gold' : 'ocean'
                      }
                      size="sm"
                    >
                      {protocolo.importancia}
                    </Badge>
                  </div>
                  <Body size="sm" className="text-ink-600">{protocolo.descripcion}</Body>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card variant="elevated">
            <H2 className="mb-6 text-center">⚠️ Buenas Prácticas</H2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <H3 className="mb-2 text-matcha-700">🔍 Verificación</H3>
                <ul className="space-y-1">
                  <li><Body size="sm" className="text-ink-600">• Verifica números de seguridad</Body></li>
                  <li><Body size="sm" className="text-ink-600">• Confirma identidades en persona</Body></li>
                  <li><Body size="sm" className="text-ink-600">• Usa códigos QR para contactos</Body></li>
                </ul>
              </div>
              <div>
                <H3 className="mb-2 text-matcha-700">🗑️ Limpieza</H3>
                <ul className="space-y-1">
                  <li><Body size="sm" className="text-ink-600">• Activa desaparición de mensajes</Body></li>
                  <li><Body size="sm" className="text-ink-600">• Borra mensajes sensibles</Body></li>
                  <li><Body size="sm" className="text-ink-600">• Limpia notificaciones</Body></li>
                </ul>
              </div>
              <div>
                <H3 className="mb-2 text-matcha-700">🔒 Acceso</H3>
                <ul className="space-y-1">
                  <li><Body size="sm" className="text-ink-600">• Usa bloqueo con PIN/biométrico</Body></li>
                  <li><Body size="sm" className="text-ink-600">• Desactiva vista previa en notificaciones</Body></li>
                  <li><Body size="sm" className="text-ink-600">• Cierra sesión en dispositivos perdidos</Body></li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}