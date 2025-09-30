'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExpedienteCard, Stamp, Button } from '@/shared/ui';
import Barometro from '@/components/observatorio/Barometro';

// Tipos centralizados importados
import type { 
  MetricasResumen, 
  TendenciasData, 
  EstadoData, 
  ObservatorioState 
} from '@/shared/types/observatorio';

// SEO metadata se maneja en layout.tsx o mediante generateMetadata


/**
 * Página principal del observatorio digital
 * Muestra métricas y tendencias de libertades digitales en México
 */
export default function ObservatorioPage() {
  const [state, setState] = useState<ObservatorioState>({
    metricas: null,
    tendencias: null,
    porEstado: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    /**
     * Obtiene datos del observatorio de las APIs
     * Implementa manejo robusto de errores
     */
    const fetchData = async () => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        const [resumen, trends, estados] = await Promise.all([
          fetch('/api/metricas/resumen').then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
            return res.json();
          }),
          fetch('/api/metricas/tendencias').then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
            return res.json();
          }),
          fetch('/api/metricas/por-estado').then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
            return res.json();
          }),
        ]);
        
        setState({
          metricas: resumen,
          tendencias: trends,
          porEstado: estados,
          loading: false,
          error: null,
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido al cargar datos';
        console.error('Error fetching observatorio data:', error);
        setState(prev => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
      }
    };
    
    fetchData();
  }, []);

  const { metricas, tendencias, porEstado, loading: cargando, error } = state;

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="min-h-screen bg-amber-50 text-amber-900/80 p-2 md:p-4 lg:p-6 max-w-7xl mx-auto animate-pulse">
      <div className="h-8 bg-amber-200 rounded w-1/2 mb-6 mx-auto"></div> {/* Header title */}
      <div className="space-y-4">
        {/* Top section skeleton */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          {/* Barometer Skeleton */}
          <div className="xl:col-span-3 h-80 bg-amber-200 rounded-sm"></div>
          {/* Alerts Skeleton */}
          <div className="xl:col-span-1 h-80 bg-amber-200 rounded-sm"></div>
        </div>
        {/* Reports Skeleton */}
        <div className="w-full h-48 bg-amber-200 rounded-sm"></div>
      </div>
    </div>
  );

  if (cargando) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-amber-50 text-amber-900/80 p-2 md:p-4 lg:p-6 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error al cargar el observatorio</h1>
          <p className="text-red-600 mb-4">{error}</p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="primary"
            size="md"
          >
            Reintentar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="page-container py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-3">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/observatorio" className="text-blue-600 hover:underline">Observatorio</Link>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <motion.header
          className="mb-6"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <ExpedienteCard variant="classified" clipped>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold typewriter mb-2"> {/* Smaller font for mobile */}
                OBSERVATORIO DIGITAL
              </h1>
              <p className="text-base md:text-lg lg:text-xl typewriter-bold"> {/* Smaller font for mobile */}
                Monitoreo de libertades digitales en México
              </p>
            </div>
          </ExpedienteCard>
        </motion.header>

        {/* Main Grid Structure - Optimized Layout */}
        <motion.main
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Section: Barómetro prominente con Noticias relevantes al lado */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Barómetro de Libertad (Prominente - Ocupa más espacio) */}
            <motion.section className="lg:col-span-2" variants={itemVariants}>
              <Barometro />
            </motion.section>

            {/* Noticias Relevantes (Sidebar) */}
            <motion.section className="lg:col-span-1" variants={itemVariants}>
              <div className="liquid-card h-full">
                <div className="liquid-card-header">
                  <h2 className="text-base md:text-lg typewriter-bold text-center">NOTICIAS RELEVANTES</h2>
                  <p className="texto-pequeno text-center mt-1">De nuestros aliados</p>
                </div>
                <div className="liquid-card-content flex-1 overflow-hidden">
                  <div className="space-y-3">
                    <article className="bg-papel-sombra border border-papel-border rounded-lg p-3 hover:bg-papel-base transition-colors">
                      <div className="flex items-start gap-2">
                        <span className="text-sm">📊</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold typewriter leading-tight mb-1">
                            Vigilancia y censura: evaluación de libertades en Internet
                          </h3>
                          <p className="text-xs text-tinta-clara mb-2 line-clamp-2">
                            Freedom House documenta casos de vigilancia, espionaje y censura en México 2023-2024...
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-tinta-suave">R3D</span>
                            <a href="https://r3d.mx/2024/11/04/vigilancia-espionaje-y-censura-freedom-house-evalua-las-libertades-de-internet-en-mexico-en-2024/" target="_blank" rel="noopener noreferrer" className="text-xs text-sello-rojo hover:underline">Leer más</a>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="bg-papel-sombra border border-papel-border rounded-lg p-3 hover:bg-papel-base transition-colors">
                      <div className="flex items-start gap-2">
                        <span className="text-sm">📰</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold typewriter leading-tight mb-1">
                            Barreras informativas: desafíos para la prensa
                          </h3>
                          <p className="text-xs text-tinta-clara mb-2 line-clamp-2">
                            Informe 2024 documenta 639 agresiones contra periodistas, incremento del 13.9%...
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-tinta-suave">Artículo 19</span>
                            <a href="https://articulo19.org/barrerasinformativas/" target="_blank" rel="noopener noreferrer" className="text-xs text-sello-rojo hover:underline">Leer más</a>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="bg-papel-sombra border border-papel-border rounded-lg p-3 hover:bg-papel-base transition-colors">
                      <div className="flex items-start gap-2">
                        <span className="text-sm">🔒</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold typewriter leading-tight mb-1">
                            Comunicaciones seguras: guía práctica
                          </h3>
                          <p className="text-xs text-tinta-clara mb-2 line-clamp-2">
                            SocialTIC presenta herramientas para mantener comunicaciones seguras en línea...
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-tinta-suave">SocialTIC</span>
                            <a href="https://socialtic.org/blog/comunicaciones-seguras-facil-y-rapido-que-mas/" target="_blank" rel="noopener noreferrer" className="text-xs text-sello-rojo hover:underline">Leer más</a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="liquid-card-footer">
                  <Link href="/observatorio/noticias">
                    <Button variant="secondary" size="sm" className="w-full text-xs">
                      Ver más noticias
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Bottom Section: Reportes Recientes (Ancho completo) */}
          <motion.section className="w-full" variants={itemVariants}>
            <div className="liquid-card">
              <div className="liquid-card-header">
                <h2 className="text-xl md:text-2xl typewriter-bold text-center">REPORTES RECIENTES</h2>
              </div>
              <div className="liquid-card-content">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="expediente-liquid-card text-center h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-papel-sombra rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="font-bold typewriter-bold text-lg mb-2">Análisis Trimestral</h3>
                      <p className="text-sm text-tinta-clara mb-4">Q3 2024</p>
                      <p className="texto-oficial text-sm mb-4 leading-relaxed">
                        Evaluación comprehensiva del estado de libertades digitales durante el tercer trimestre del año.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link href="#" className="inline-block bg-sello-rojo text-white px-4 py-2 rounded-lg text-sm typewriter hover:bg-red-700 transition-colors">
                        📄 Ver PDF
                      </Link>
                    </div>
                  </div>

                  <div className="expediente-liquid-card text-center h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-papel-sombra rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🔬</span>
                      </div>
                      <h3 className="font-bold typewriter-bold text-lg mb-2">Estudio Especial</h3>
                      <p className="text-sm text-tinta-clara mb-4">Oct 2024</p>
                      <p className="texto-oficial text-sm mb-4 leading-relaxed">
                        Investigación especializada sobre tendencias emergentes en vigilancia digital y contramedidas.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link href="#" className="inline-block bg-sello-rojo text-white px-4 py-2 rounded-lg text-sm typewriter hover:bg-red-700 transition-colors">
                        📄 Ver PDF
                      </Link>
                    </div>
                  </div>

                  <div className="expediente-liquid-card text-center h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-papel-sombra rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h3 className="font-bold typewriter-bold text-lg mb-2">Metodología</h3>
                      <p className="text-sm text-tinta-clara mb-4">2024</p>
                      <p className="texto-oficial text-sm mb-4 leading-relaxed">
                        Marco metodológico y criterios técnicos utilizados para la evaluación y monitoreo continuo.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link href="/metodologia" className="inline-block bg-sello-rojo text-white px-4 py-2 rounded-lg text-sm typewriter hover:bg-red-700 transition-colors">
                        📖 Ver Documento
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.main>
      </main>
    </div>
  );
}