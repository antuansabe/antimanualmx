'use client';

import { Button, PaperContainer, Stamp } from '@/shared/ui';
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
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <Link href="/herramientas" className="flex items-center gap-2">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / HERRAMIENTAS / BORRADO SEGURO
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="mb-8">
          <PaperContainer aged>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">🗑️</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter">
                BORRADO SEGURO
              </h1>
              <p className="text-xl mb-6">
                Elimina archivos, historiales y metadatos de forma permanente
              </p>
              <div className="flex justify-center gap-4">
                <Stamp className="bg-orange-500">LIMPIEZA PROFUNDA</Stamp>
                <Stamp className="text-xs">{elementosMarcados.size}/{totalElementos} ELEMENTOS</Stamp>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
              <div className="flex items-start">
                <div className="text-2xl mr-3">⚠️</div>
                <div>
                  <p className="font-bold text-orange-800">IMPORTANTE:</p>
                  <p className="text-orange-700 text-sm">
                    Los datos borrados con estos métodos no se pueden recuperar. 
                    Asegúrate de tener respaldos de información importante.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div 
                  className="bg-green-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${porcentajeCompletado}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-600">
                {porcentajeCompletado.toFixed(0)}% completado
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={marcarTodosAlta}
                variant="secondary"
                size="sm"
              >
                🎯 MARCAR PRIORIDAD ALTA
              </Button>
              <Button 
                onClick={() => setModoPanico(!modoPanico)}
                variant={modoPanico ? 'primary' : 'secondary'}
                size="sm"
                className={modoPanico ? 'sello-peligro hover:sello-peligro' : ''}
              >
                🚨 MODO PÁNICO {modoPanico ? 'ON' : 'OFF'}
              </Button>
            </div>
          </PaperContainer>
        </section>

        <section className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <PaperContainer>
              <h3 className="font-bold mb-4 typewriter">CATEGORÍAS</h3>
              <div className="space-y-2">
                {categorias.map((categoria) => {
                  const completados = categoria.elementos.filter(el => 
                    elementosMarcados.has(`${categoria.id}-${el.nombre}`)
                  ).length;
                  
                  return (
                    <button
                      key={categoria.id}
                      onClick={() => setCategoriaActiva(categoria.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        categoriaActiva === categoria.id
                          ? 'bg-red-100 border-l-4 border-red-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{categoria.icono}</span>
                          <span className="font-medium text-sm">{categoria.nombre}</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {completados}/{categoria.elementos.length}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </PaperContainer>
          </div>

          <div className="md:col-span-3">
            <PaperContainer>
              {categoriaSeleccionada && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{categoriaSeleccionada.icono}</span>
                    <h2 className="text-2xl font-bold typewriter">
                      {categoriaSeleccionada.nombre}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {categoriaSeleccionada.elementos.map((elemento) => {
                      const elementoId = `${categoriaSeleccionada.id}-${elemento.nombre}`;
                      const marcado = elementosMarcados.has(elementoId);
                      
                      return (
                        <div
                          key={elemento.nombre}
                          className={`border rounded-lg p-4 transition-all ${
                            marcado ? 'bg-green-50 border-green-500' : 'hover:border-gray-400'
                          } ${modoPanico && elemento.prioridad === 'alta' ? 'ring-2 ring-red-500' : ''}`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => toggleElemento(elementoId)}
                              className="mt-1"
                            >
                              <div className={`w-5 h-5 border-2 rounded transition-colors ${
                                marcado 
                                  ? 'bg-green-600 border-green-600' 
                                  : 'border-gray-400 hover:border-gray-600'
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
                                <h4 className="font-bold">{elemento.nombre}</h4>
                                <Stamp className={`text-xs ${
                                  elemento.prioridad === 'alta' ? 'sello-peligro' :
                                  elemento.prioridad === 'media' ? 'bg-orange-500' :
                                  'bg-gray-500'
                                }`}>
                                  {elemento.prioridad.toUpperCase()}
                                </Stamp>
                              </div>
                              <code className="text-sm bg-gray-100 px-2 py-1 rounded typewriter">
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
            </PaperContainer>
          </div>
        </section>

        <section className="mt-12">
          <PaperContainer>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 typewriter">
                HERRAMIENTAS RECOMENDADAS
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🧹</div>
                  <h4 className="font-bold mb-1">BleachBit</h4>
                  <p className="text-sm text-gray-600">
                    Limpiador de código abierto para Windows/Linux
                  </p>
                  <a href="https://www.bleachbit.org/" className="text-blue-600 underline text-sm">
                    bleachbit.org
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">🔐</div>
                  <h4 className="font-bold mb-1">DBAN</h4>
                  <p className="text-sm text-gray-600">
                    Borrado seguro de discos completos
                  </p>
                  <a href="https://dban.org/" className="text-blue-600 underline text-sm">
                    dban.org
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">📸</div>
                  <h4 className="font-bold mb-1">ExifCleaner</h4>
                  <p className="text-sm text-gray-600">
                    Elimina metadatos de imágenes
                  </p>
                  <a href="https://exifcleaner.com/" className="text-blue-600 underline text-sm">
                    exifcleaner.com
                  </a>
                </div>
              </div>
            </div>
          </PaperContainer>
        </section>
      </main>
    </div>
  );
}