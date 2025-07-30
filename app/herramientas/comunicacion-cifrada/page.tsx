'use client';

import { Button, PaperContainer, Stamp } from '@/shared/ui';
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
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <Link href="/herramientas" className="flex items-center gap-2">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / HERRAMIENTAS / COMUNICACIÓN CIFRADA
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-8">
          <PaperContainer aged>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">🔐</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                COMUNICACIÓN CIFRADA
              </h1>
              <p className="text-xl mb-6">
                Configura Signal y otras apps seguras paso a paso
              </p>
              <div className="flex justify-center gap-4">
                <Stamp className="bg-green-600">CIFRADO E2E</Stamp>
                <Stamp className="text-xs">{Math.round(progreso)}% CONFIGURADO</Stamp>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <div className="flex items-start">
                <div className="text-2xl mr-3">🛡️</div>
                <div>
                  <p className="font-bold text-blue-800">¿POR QUÉ ES IMPORTANTE?</p>
                  <p className="text-blue-700 text-sm">
                    Las comunicaciones sin cifrar pueden ser interceptadas por gobiernos, 
                    empresas o atacantes. El cifrado de extremo a extremo protege tu privacidad.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setModoComparacion(!modoComparacion)}
                variant={modoComparacion ? 'primary' : 'secondary'}
                size="sm"
              >
                📊 {modoComparacion ? 'OCULTAR' : 'COMPARAR'} APLICACIONES
              </Button>
            </div>
          </PaperContainer>
        </section>

        {modoComparacion && (
          <section className="mb-8">
            <PaperContainer>
              <h2 className="text-2xl font-bold mb-6 typewriter text-center">
                📊 COMPARACIÓN DE APLICACIONES
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">App</th>
                      <th className="text-center p-2">Seguridad</th>
                      <th className="text-center p-2">Facilidad</th>
                      <th className="text-center p-2">Plataformas</th>
                      <th className="text-left p-2">Ideal para</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aplicaciones.map((app) => (
                      <tr key={app.id} className="border-b hover:bg-gray-50">
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{app.logo}</span>
                            <strong>{app.nombre}</strong>
                          </div>
                        </td>
                        <td className="text-center p-2">
                          <Stamp className={`text-xs ${
                            app.seguridad === 'MÁXIMA' ? 'bg-green-600' : 'bg-blue-600'
                          }`}>
                            {app.seguridad}
                          </Stamp>
                        </td>
                        <td className="text-center p-2">
                          <Stamp className={`text-xs ${
                            app.facilidad === 'FÁCIL' ? 'bg-green-600' : 
                            app.facilidad === 'MEDIA' ? 'bg-orange-500' : 'bg-red-600'
                          }`}>
                            {app.facilidad}
                          </Stamp>
                        </td>
                        <td className="text-center p-2 text-xs">
                          {app.plataformas.join(', ')}
                        </td>
                        <td className="p-2 text-xs text-gray-600">
                          {app.notas}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PaperContainer>
          </section>
        )}

        <section className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-1">
            <PaperContainer>
              <h3 className="font-bold mb-4 typewriter">SELECCIONAR APP</h3>
              <div className="space-y-2">
                {aplicaciones.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => {
                      setAppSeleccionada(app.id);
                      setPasosCompletados(new Set());
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      appSeleccionada === app.id
                        ? 'bg-blue-100 border-l-4 border-blue-600'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{app.logo}</span>
                      <span className="font-medium text-sm">{app.nombre}</span>
                    </div>
                    <div className="flex gap-1">
                      <Stamp className={`text-xs ${
                        app.seguridad === 'MÁXIMA' ? 'bg-green-600' : 'bg-blue-600'
                      }`}>
                        {app.seguridad}
                      </Stamp>
                      <Stamp className={`text-xs ${
                        app.facilidad === 'FÁCIL' ? 'bg-green-600' : 
                        app.facilidad === 'MEDIA' ? 'bg-orange-500' : 'bg-red-600'
                      }`}>
                        {app.facilidad}
                      </Stamp>
                    </div>
                  </button>
                ))}
              </div>
            </PaperContainer>
          </div>

          <div className="md:col-span-3">
            <PaperContainer>
              {aplicacionSeleccionada && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{aplicacionSeleccionada.logo}</span>
                    <div>
                      <h2 className="text-2xl font-bold typewriter">
                        {aplicacionSeleccionada.nombre}
                      </h2>
                      <p className="text-gray-600">{aplicacionSeleccionada.descripcion}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-bold mb-2">Plataformas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {aplicacionSeleccionada.plataformas.map((plat) => (
                          <span key={plat} className="bg-gray-100 text-xs px-2 py-1 rounded">
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Funciones:</h4>
                      <div className="flex flex-wrap gap-1">
                        {aplicacionSeleccionada.funciones.map((func) => (
                          <span key={func} className="bg-blue-100 text-xs px-2 py-1 rounded">
                            {func}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">Progreso de configuración:</h4>
                      <span className="text-sm text-gray-600">{Math.round(progreso)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progreso}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Pasos de configuración:</h4>
                    <div className="space-y-3">
                      {aplicacionSeleccionada.configuracion.map((paso, index) => {
                        const pasoId = `${aplicacionSeleccionada.id}-${index}`;
                        const completado = pasosCompletados.has(pasoId);
                        
                        return (
                          <div
                            key={index}
                            className={`border rounded-lg p-3 transition-all ${
                              completado ? 'bg-green-50 border-green-500' : 'hover:border-gray-400'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() => togglePaso(pasoId)}
                                className="mt-0.5"
                              >
                                <div className={`w-5 h-5 border-2 rounded transition-colors ${
                                  completado 
                                    ? 'bg-green-600 border-green-600' 
                                    : 'border-gray-400 hover:border-gray-600'
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
                                  <span className="font-bold text-red-700">{index + 1}.</span>
                                  <span className={completado ? 'line-through text-gray-500' : ''}>
                                    {paso}
                                  </span>
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
                      <Button size="lg">
                        📱 DESCARGAR {aplicacionSeleccionada.nombre.toUpperCase()}
                      </Button>
                    </a>
                    <Button variant="secondary" size="lg">
                      📋 GUÍA DETALLADA
                    </Button>
                  </div>
                </>
              )}
            </PaperContainer>
          </div>
        </section>

        <section className="mb-8">
          <PaperContainer>
            <h3 className="text-2xl font-bold mb-6 typewriter text-center">
              🧠 CONCEPTOS CLAVE DE SEGURIDAD
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {protocolos.map((protocolo, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold">{protocolo.nombre}</h4>
                    <Stamp className={`text-xs ${
                      protocolo.importancia === 'CRÍTICA' ? 'bg-red-600' :
                      protocolo.importancia === 'ALTA' ? 'bg-orange-500' : 'bg-gray-500'
                    }`}>
                      {protocolo.importancia}
                    </Stamp>
                  </div>
                  <p className="text-sm text-gray-600">{protocolo.descripcion}</p>
                </div>
              ))}
            </div>
          </PaperContainer>
        </section>

        <section>
          <PaperContainer>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 typewriter">
                ⚠️ BUENAS PRÁCTICAS
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-bold mb-2 text-red-700">🔍 VERIFICACIÓN</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Verifica números de seguridad</li>
                    <li>• Confirma identidades en persona</li>
                    <li>• Usa códigos QR para contactos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-red-700">🗑️ LIMPIEZA</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Activa desaparición de mensajes</li>
                    <li>• Borra mensajes sensibles</li>
                    <li>• Limpia notificaciones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-red-700">🔒 ACCESO</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Usa bloqueo con PIN/biométrico</li>
                    <li>• Desactiva vista previa en notificaciones</li>
                    <li>• Cierra sesión en dispositivos perdidos</li>
                  </ul>
                </div>
              </div>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}