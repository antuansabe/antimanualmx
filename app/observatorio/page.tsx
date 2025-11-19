'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero, H2, H3, Card, Button, Badge } from '@/shared/ui';
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
    <div className="min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-32 bg-cloud rounded-2xl mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-96 bg-cloud rounded-2xl"></div>
          <div className="lg:col-span-1 h-96 bg-cloud rounded-2xl"></div>
        </div>
        <div className="mt-8 h-64 bg-cloud rounded-2xl"></div>
      </div>
    </div>
  );

  if (cargando) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card variant="outlined" padding="xl" className="text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <H2 className="mb-4">Error al cargar el observatorio</H2>
            <p className="text-persimmon mb-6">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              color="sakura"
              size="lg"
            >
              Reintentar
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="lg"
        title="Observatorio Digital"
        description="Monitoreo continuo del estado de libertades digitales en México"
        badge={
          <Badge color="lavender" variant="soft" size="lg">
            📊 Datos Abiertos
          </Badge>
        }
        illustration={
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="text-8xl"
          >
            📡
          </motion.div>
        }
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Grid Structure */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Section: Barómetro y Noticias */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Barómetro de Libertad */}
            <motion.section className="lg:col-span-2" variants={itemVariants}>
              <Barometro />
            </motion.section>

            {/* Noticias Relevantes */}
            <motion.section className="lg:col-span-1" variants={itemVariants}>
              <Card variant="elevated" className="h-full">
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge color="ocean" variant="soft">📰 Noticias</Badge>
                    </div>
                    <H3>Noticias Relevantes</H3>
                    <p className="text-sm text-charcoal mt-1">De nuestros aliados</p>
                  </div>

                  <div className="space-y-4">
                    <article className="p-4 bg-gradient-to-br from-washi to-cloud rounded-xl border border-mist hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">📊</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-display font-bold text-sumi leading-tight mb-2">
                            Vigilancia y censura: evaluación de libertades en Internet
                          </h4>
                          <p className="text-xs text-charcoal mb-3 line-clamp-2">
                            Freedom House documenta casos de vigilancia, espionaje y censura en México 2023-2024...
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge color="sakura" variant="soft" size="sm">R3D</Badge>
                            <a href="https://r3d.mx/2024/11/04/vigilancia-espionaje-y-censura-freedom-house-evalua-las-libertades-de-internet-en-mexico-en-2024/" target="_blank" rel="noopener noreferrer" className="text-xs text-ocean hover:underline">Leer más →</a>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="p-4 bg-gradient-to-br from-washi to-cloud rounded-xl border border-mist hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">📰</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-display font-bold text-sumi leading-tight mb-2">
                            Barreras informativas: desafíos para la prensa
                          </h4>
                          <p className="text-xs text-charcoal mb-3 line-clamp-2">
                            Informe 2024 documenta 639 agresiones contra periodistas, incremento del 13.9%...
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge color="sakura" variant="soft" size="sm">Artículo 19</Badge>
                            <a href="https://articulo19.org/barrerasinformativas/" target="_blank" rel="noopener noreferrer" className="text-xs text-ocean hover:underline">Leer más →</a>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article className="p-4 bg-gradient-to-br from-washi to-cloud rounded-xl border border-mist hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <span className="text-xl">🔒</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-display font-bold text-sumi leading-tight mb-2">
                            Comunicaciones seguras: guía práctica
                          </h4>
                          <p className="text-xs text-charcoal mb-3 line-clamp-2">
                            SocialTIC presenta herramientas para mantener comunicaciones seguras en línea...
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge color="sakura" variant="soft" size="sm">SocialTIC</Badge>
                            <a href="https://socialtic.org/blog/comunicaciones-seguras-facil-y-rapido-que-mas/" target="_blank" rel="noopener noreferrer" className="text-xs text-ocean hover:underline">Leer más →</a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="mt-6">
                    <Link href="/observatorio/noticias">
                      <Button variant="outline" color="ocean" fullWidth>
                        Ver más noticias →
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.section>
          </div>

          {/* Reportes Recientes */}
          <motion.section className="w-full" variants={itemVariants}>
            <div className="mb-8 text-center">
              <Badge color="matcha" variant="soft" size="lg" className="mb-4">
                📚 Reportes
              </Badge>
              <H2>Reportes Recientes</H2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="outlined" hoverable className="text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <H3 className="mb-2">Análisis Trimestral</H3>
                  <Badge color="gold" variant="soft" size="sm" className="mb-4">
                    Q3 2024
                  </Badge>
                  <p className="text-sm text-charcoal mb-6 leading-relaxed">
                    Evaluación comprehensiva del estado de libertades digitales durante el tercer trimestre del año.
                  </p>
                  <Button variant="ghost" disabled fullWidth>
                    🔒 Próximamente
                  </Button>
                </div>
              </Card>

              <Card variant="elevated" hoverable clickable>
                <Link href="/observatorio/estudio-especial">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔬</span>
                    </div>
                    <H3 className="mb-2">Estudio Especial</H3>
                    <Badge color="ocean" variant="soft" size="sm" className="mb-4">
                      Sep 2025
                    </Badge>
                    <p className="text-sm text-charcoal mb-6 leading-relaxed">
                      Investigación especializada sobre tendencias emergentes en vigilancia digital y contramedidas.
                    </p>
                    <Button color="ocean" fullWidth>
                      Ver Estudio →
                    </Button>
                  </div>
                </Link>
              </Card>

              <Card variant="elevated" hoverable clickable>
                <Link href="/metodologia">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-matcha-100 to-matcha-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">⚙️</span>
                    </div>
                    <H3 className="mb-2">Metodología</H3>
                    <Badge color="matcha" variant="soft" size="sm" className="mb-4">
                      2024
                    </Badge>
                    <p className="text-sm text-charcoal mb-6 leading-relaxed">
                      Marco metodológico y criterios técnicos utilizados para la evaluación y monitoreo continuo.
                    </p>
                    <Button color="matcha" fullWidth>
                      Ver Documento →
                    </Button>
                  </div>
                </Link>
              </Card>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}