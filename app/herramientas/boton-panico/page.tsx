'use client';

import { Button, PaperContainer, Stamp } from '@/shared/ui';
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
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4">
          <Link href="/herramientas" className="flex items-center gap-2">
            <Stamp>ANTIMANUAL</Stamp>
            <span className="typewriter text-sm text-gray-600">
              / HERRAMIENTAS / BOTÓN DE PÁNICO
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {!iniciado ? (
          // Vista inicial
          <section>
            <PaperContainer aged>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">🚨</div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 typewriter text-red-700">
                  BOTÓN DE PÁNICO
                </h1>
                <p className="text-xl mb-6">
                  Protocolo de emergencia para borrar rastros digitales en 60 segundos
                </p>
                <Stamp className="sello-peligro">EMERGENCIAS SOLAMENTE</Stamp>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">⚠️</div>
                  <div>
                    <h3 className="font-bold text-red-800 mb-2">ANTES DE CONTINUAR:</h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• Este protocolo borrará datos de forma permanente</li>
                      <li>• Solo úsalo si estás en peligro real</li>
                      <li>• Ten ubicaciones seguras identificadas con anticipación</li>
                      <li>• Guarda información importante en lugares seguros</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 typewriter">PROTOCOLO COMPLETO:</h3>
                <div className="grid gap-4">
                  {pasos.map((paso) => (
                    <div key={paso.orden} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-red-700 min-w-[40px]">
                        {paso.orden}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold">{paso.titulo}</h4>
                        <p className="text-gray-600 text-sm">{paso.descripcion}</p>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded typewriter">
                          {paso.comando}
                        </code>
                      </div>
                      <div className="text-sm text-gray-500 typewriter">
                        {paso.tiempo}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={iniciarProtocolo}
                  size="lg"
                  className="sello-peligro hover:sello-peligro"
                >
                  🚨 INICIAR PROTOCOLO DE EMERGENCIA
                </Button>
              </div>
            </PaperContainer>
          </section>
        ) : !completado ? (
          // Vista del protocolo en ejecución
          <section>
            <PaperContainer className="border-red-500 border-2">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-pulse">🚨</div>
                <h2 className="text-2xl font-bold text-red-700 typewriter">
                  PROTOCOLO ACTIVO
                </h2>
                <p className="text-lg">
                  Paso {pasoActual + 1} de {pasos.length}
                </p>
              </div>

              <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                  <div 
                    className="sello-peligro h-4 rounded-full transition-all duration-300"
                    style={{ width: `${((pasoActual + 1) / pasos.length) * 100}%` }}
                  ></div>
                </div>

                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{pasos[pasoActual].orden}</div>
                  <h3 className="text-3xl font-bold mb-4 typewriter">
                    {pasos[pasoActual].titulo}
                  </h3>
                  <p className="text-xl text-gray-700 mb-4">
                    {pasos[pasoActual].descripcion}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg inline-block">
                    <code className="typewriter text-lg">
                      {pasos[pasoActual].comando}
                    </code>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={siguientePaso}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  ✅ COMPLETADO - SIGUIENTE PASO
                </Button>
              </div>
            </PaperContainer>
          </section>
        ) : (
          // Vista de protocolo completado
          <section>
            <PaperContainer className="border-green-500 border-2">
              <div className="text-center">
                <div className="text-8xl mb-4">✅</div>
                <h2 className="text-3xl font-bold text-green-700 typewriter mb-4">
                  PROTOCOLO COMPLETADO
                </h2>
                <p className="text-xl mb-8">
                  Has completado exitosamente el protocolo de emergencia
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 text-left">
                  <h3 className="font-bold text-green-800 mb-2">PRÓXIMOS PASOS:</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Mantente en un lugar seguro</li>
                    <li>• Contacta a personas de confianza</li>
                    <li>• Documenta cualquier amenaza recibida</li>
                    <li>• Considera contactar organizaciones de apoyo</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/red">
                    <Button variant="primary" size="lg">
                      CONTACTAR RED DE APOYO
                    </Button>
                  </Link>
                  <Link href="/herramientas">
                    <Button variant="secondary" size="lg">
                      VOLVER A HERRAMIENTAS
                    </Button>
                  </Link>
                </div>
              </div>
            </PaperContainer>
          </section>
        )}
      </main>
    </div>
  );
}