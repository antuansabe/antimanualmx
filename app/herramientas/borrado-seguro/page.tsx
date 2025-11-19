'use client';

import { Hero, H2, H3, Card, Button, Badge, Body } from '@/shared/ui';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const categorias = [
  {
    id: 'navegacion',
    nombre: 'Historial de Navegación',
    icono: '🌐',
    elementos: [
      { nombre: 'Historial del navegador', comando: 'Ctrl+Shift+Delete', prioridad: 'alta' },
      { nombre: 'Cookies y datos de sitios', comando: 'Configuración > Privacidad', prioridad: 'alta' },
      { nombre: 'Caché de navegador', comando: 'Ctrl+Shift+Delete', prioridad: 'media' },
      { nombre: 'Descargas', comando: 'Ctrl+J / Cmd+Shift+J', prioridad: 'alta' },
      { nombre: 'Autocompletado de formularios', comando: 'Configuración > Autocompletado', prioridad: 'media' }
    ]
  },
  {
    id: 'archivos',
    nombre: 'Archivos y Documentos',
    icono: '📁',
    elementos: [
      { nombre: 'Papelera de reciclaje', comando: 'Vaciar papelera + Shift+Delete', prioridad: 'alta' },
      { nombre: 'Archivos temporales', comando: '%temp% (Windows) / ~/tmp (Mac/Linux)', prioridad: 'media' },
      { nombre: 'Documentos recientes', comando: 'Limpiar historial de documentos', prioridad: 'alta' },
      { nombre: 'Miniaturas y caché', comando: 'Limpiar caché del sistema', prioridad: 'baja' },
      { nombre: 'Archivos de intercambio', comando: 'Buscar *.swp, *.tmp', prioridad: 'media' }
    ]
  },
  {
    id: 'comunicaciones',
    nombre: 'Comunicaciones',
    icono: '💬',
    elementos: [
      { nombre: 'Conversaciones de WhatsApp', comando: 'Configuración > Chats > Historial', prioridad: 'alta' },
      { nombre: 'Mensajes de Telegram', comando: 'Configuración > Privacidad > Eliminar', prioridad: 'alta' },
      { nombre: 'Correos electrónicos', comando: 'Vaciar papelera y elementos enviados', prioridad: 'alta' },
      { nombre: 'Llamadas recientes', comando: 'Historial de llamadas del dispositivo', prioridad: 'media' },
      { nombre: 'SMS/MMS', comando: 'Eliminar conversaciones del dispositivo', prioridad: 'alta' }
    ]
  },
  {
    id: 'metadatos',
    nombre: 'Metadatos y Rastros',
    icono: '🔍',
    elementos: [
      { nombre: 'Metadatos de fotos', comando: 'Herramienta EXIF cleaner', prioridad: 'alta' },
      { nombre: 'Registros del sistema', comando: 'Visor de eventos / Console', prioridad: 'media' },
      { nombre: 'WiFi conocidas', comando: 'Olvidar redes WiFi guardadas', prioridad: 'alta' },
      { nombre: 'Dispositivos Bluetooth', comando: 'Eliminar dispositivos vinculados', prioridad: 'media' },
      { nombre: 'Ubicaciones guardadas', comando: 'Configuración > Privacidad > Ubicación', prioridad: 'alta' }
    ]
  }
];

export default function BorradoSeguroPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('navegacion');
  const [elementosMarcados, setElementosMarcados] = useState<Set<string>>(new Set());
  const [modoPanico, setModoPanico] = useState(false);

  const toggleElemento = (elemento: string) => {
    const nuevosElementos = new Set(elementosMarcados);
    if (nuevosElementos.has(elemento)) {
      nuevosElementos.delete(elemento);
    } else {
      nuevosElementos.add(elemento);
    }
    setElementosMarcados(nuevosElementos);
  };

  const marcarTodosAlta = () => {
    const elementosAlta = new Set<string>();
    categorias.forEach(cat => {
      cat.elementos
        .filter(el => el.prioridad === 'alta')
        .forEach(el => elementosAlta.add(`${cat.id}-${el.nombre}`));
    });
    setElementosMarcados(elementosAlta);
  };

  const categoriaSeleccionada = categorias.find(cat => cat.id === categoriaActiva);
  const totalElementos = categorias.reduce((acc, cat) => acc + cat.elementos.length, 0);
  const porcentajeCompletado = (elementosMarcados.size / totalElementos) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud via-washi to-lavender-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header with back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/herramientas" className="inline-flex items-center gap-2 text-ink-700 hover:text-lavender-600 transition-colors">
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
            title="🗑️ Borrado Seguro"
            description="Elimina archivos, historiales y metadatos de forma permanente"
            badge={
              <Badge color="lavender" variant="soft" size="lg">
                Limpieza Profunda
              </Badge>
            }
          />
        </motion.div>

        {/* Warning and Progress Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" className="bg-gold-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-3xl">⚠️</div>
              <div>
                <H3 className="mb-2 text-gold-800">Importante</H3>
                <Body className="text-ink-600">
                  Los datos borrados con estos métodos no se pueden recuperar.
                  Asegúrate de tener respaldos de información importante.
                </Body>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <Body className="font-bold">Progreso</Body>
                <Badge color="lavender">{elementosMarcados.size}/{totalElementos} Elementos</Badge>
              </div>
              <div className="w-full bg-washi rounded-full h-4">
                <div
                  className="bg-lavender-500 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${porcentajeCompletado}%` }}
                ></div>
              </div>
              <Body size="sm" className="text-center mt-2 text-ink-600">
                {porcentajeCompletado.toFixed(0)}% completado
              </Body>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={marcarTodosAlta}
                variant="outline"
                color="lavender"
              >
                🎯 Marcar Prioridad Alta
              </Button>
              <Button
                onClick={() => setModoPanico(!modoPanico)}
                variant={modoPanico ? 'solid' : 'outline'}
                color={modoPanico ? 'persimmon' : 'lavender'}
              >
                🚨 Modo Pánico {modoPanico ? 'ON' : 'OFF'}
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6"
        >
          <div className="md:col-span-1">
            <Card variant="outlined">
              <H3 className="mb-4">Categorías</H3>
              <div className="space-y-2">
                {categorias.map((categoria, index) => {
                  const completados = categoria.elementos.filter(el =>
                    elementosMarcados.has(`${categoria.id}-${el.nombre}`)
                  ).length;

                  return (
                    <motion.button
                      key={categoria.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onClick={() => setCategoriaActiva(categoria.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        categoriaActiva === categoria.id
                          ? 'bg-lavender-100 border-l-4 border-lavender-600'
                          : 'hover:bg-washi'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{categoria.icono}</span>
                          <Body className="font-medium">{categoria.nombre}</Body>
                        </div>
                        <Body size="sm" className="text-ink-500">
                          {completados}/{categoria.elementos.length}
                        </Body>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card variant="elevated">
              {categoriaSeleccionada && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{categoriaSeleccionada.icono}</span>
                    <H2>{categoriaSeleccionada.nombre}</H2>
                  </div>

                  <div className="space-y-3">
                    {categoriaSeleccionada.elementos.map((elemento) => {
                      const elementoId = `${categoriaSeleccionada.id}-${elemento.nombre}`;
                      const marcado = elementosMarcados.has(elementoId);

                      return (
                        <div
                          key={elemento.nombre}
                          className={`border rounded-lg p-4 transition-all ${
                            marcado ? 'bg-lavender-50 border-lavender-500' : 'border-ink-200 hover:border-ink-400'
                          } ${modoPanico && elemento.prioridad === 'alta' ? 'ring-2 ring-persimmon-500' : ''}`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => toggleElemento(elementoId)}
                              className="mt-1"
                            >
                              <div className={`w-5 h-5 border-2 rounded transition-colors ${
                                marcado
                                  ? 'bg-lavender-600 border-lavender-600'
                                  : 'border-ink-400 hover:border-ink-600'
                              }`}>
                                {marcado && (
                                  <svg className="w-full h-full text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </button>

                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Body className="font-bold">{elemento.nombre}</Body>
                                <Badge
                                  color={
                                    elemento.prioridad === 'alta' ? 'persimmon' :
                                    elemento.prioridad === 'media' ? 'gold' :
                                    'ocean'
                                  }
                                  size="sm"
                                >
                                  {elemento.prioridad.toUpperCase()}
                                </Badge>
                              </div>
                              <code className="text-sm bg-washi px-2 py-1 rounded font-mono">
                                {elemento.comando}
                              </code>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
          className="mt-12"
        >
          <Card variant="outlined">
            <H2 className="mb-6 text-center">Herramientas Recomendadas</H2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🧹</div>
                <H3 className="mb-1">BleachBit</H3>
                <Body size="sm" className="text-ink-600 mb-2">
                  Limpiador de código abierto para Windows/Linux
                </Body>
                <a href="https://www.bleachbit.org/" className="text-lavender-600 hover:text-lavender-700 underline text-sm">
                  bleachbit.org
                </a>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-2">🔐</div>
                <H3 className="mb-1">DBAN</H3>
                <Body size="sm" className="text-ink-600 mb-2">
                  Borrado seguro de discos completos
                </Body>
                <a href="https://dban.org/" className="text-lavender-600 hover:text-lavender-700 underline text-sm">
                  dban.org
                </a>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-2">📸</div>
                <H3 className="mb-1">ExifCleaner</H3>
                <Body size="sm" className="text-ink-600 mb-2">
                  Elimina metadatos de imágenes
                </Body>
                <a href="https://exifcleaner.com/" className="text-lavender-600 hover:text-lavender-700 underline text-sm">
                  exifcleaner.com
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}