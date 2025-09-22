'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExpedienteCard, Button } from '@/shared/ui';

export default function MetodologiaPage() {
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

  const factoresEvaluacion = [
    {
      categoria: "Acceso a Internet",
      peso: "25%",
      criterios: [
        "Velocidad promedio de conexión",
        "Cobertura de banda ancha",
        "Asequibilidad de servicios",
        "Infraestructura de telecomunicaciones"
      ]
    },
    {
      categoria: "Privacidad y Seguridad",
      peso: "20%",
      criterios: [
        "Marco legal de protección de datos",
        "Incidentes de seguridad reportados",
        "Uso de encriptación",
        "Transparencia gubernamental"
      ]
    },
    {
      categoria: "Libertad de Expresión",
      peso: "20%",
      criterios: [
        "Censura en línea",
        "Bloqueo de sitios web",
        "Restricciones a redes sociales",
        "Libertad de prensa digital"
      ]
    },
    {
      categoria: "Participación Digital",
      peso: "15%",
      criterios: [
        "Gobierno electrónico",
        "Servicios públicos digitales",
        "Transparencia y datos abiertos",
        "Participación ciudadana en línea"
      ]
    },
    {
      categoria: "Educación Digital",
      peso: "10%",
      criterios: [
        "Alfabetización digital",
        "Acceso a educación en línea",
        "Competencias tecnológicas",
        "Brecha digital educativa"
      ]
    },
    {
      categoria: "Innovación Tecnológica",
      peso: "10%",
      criterios: [
        "Inversión en I+D tecnológico",
        "Startups tecnológicas",
        "Patentes tecnológicas",
        "Ecosistema de innovación"
      ]
    }
  ];

  const fuentesDatos = [
    "Instituto Nacional de Estadística y Geografía (INEGI)",
    "Instituto Federal de Telecomunicaciones (IFT)",
    "Instituto Nacional de Transparencia (INAI)",
    "Organizaciones de la sociedad civil",
    "Reportes de libertades digitales internacionales",
    "Datos de proveedores de servicios de internet",
    "Encuestas ciudadanas especializadas"
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900/80 p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/observatorio" className="text-blue-600 hover:underline">Observatorio</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-tinta-clara">Metodología</span>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <motion.header
          className="mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <ExpedienteCard variant="classified" clipped>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold typewriter mb-2">
                METODOLOGÍA DEL ÍNDICE
              </h1>
              <h2 className="text-xl md:text-2xl typewriter-bold">
                DE LIBERTAD DIGITAL
              </h2>
              <p className="text-base md:text-lg mt-4 texto-oficial">
                Documento técnico que explica la construcción y cálculo del Índice de Libertad Digital para México
              </p>
            </div>
          </ExpedienteCard>
        </motion.header>

        <motion.main
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introducción */}
          <motion.section variants={itemVariants}>
            <ExpedienteCard>
              <h2 className="text-2xl typewriter-bold mb-4 text-center">INTRODUCCIÓN</h2>
              <div className="texto-oficial space-y-4">
                <p>
                  El Índice de Libertad Digital es una medida compuesta que evalúa el estado de las libertades 
                  digitales en México. Se basa en una escala de 0 a 100 puntos, donde 100 representa el nivel 
                  más alto de libertad digital.
                </p>
                <p>
                  Este índice combina indicadores cuantitativos y cualitativos de múltiples fuentes para 
                  proporcionar una evaluación integral del ecosistema digital mexicano desde la perspectiva 
                  de los derechos fundamentales.
                </p>
              </div>
            </ExpedienteCard>
          </motion.section>

          {/* Criterios de Evaluación */}
          <motion.section variants={itemVariants}>
            <ExpedienteCard>
              <h2 className="text-2xl typewriter-bold mb-6 text-center">CRITERIOS DE EVALUACIÓN</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {factoresEvaluacion.map((factor, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-papel-sombra rounded-sm border border-papel-border"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="typewriter-bold text-lg">{factor.categoria}</h3>
                      <span className="text-sm bg-sello-rojo text-white px-2 py-1 rounded typewriter">
                        {factor.peso}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {factor.criterios.map((criterio, idx) => (
                        <li key={idx} className="text-sm texto-oficial flex items-start">
                          <span className="text-tinta-clara mr-2">•</span>
                          {criterio}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ExpedienteCard>
          </motion.section>

          {/* Escala de Valoración */}
          <motion.section variants={itemVariants}>
            <ExpedienteCard>
              <h2 className="text-2xl typewriter-bold mb-6 text-center">ESCALA DE VALORACIÓN</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-red-100 border border-red-300 rounded-sm">
                  <h3 className="typewriter-bold text-red-700 mb-2">CRÍTICO</h3>
                  <p className="text-3xl font-bold text-red-800 mb-2">0-40</p>
                  <p className="text-sm texto-oficial">
                    Restricciones severas a las libertades digitales
                  </p>
                </div>
                <div className="text-center p-6 bg-yellow-100 border border-yellow-300 rounded-sm">
                  <h3 className="typewriter-bold text-yellow-700 mb-2">LIMITADO</h3>
                  <p className="text-3xl font-bold text-yellow-800 mb-2">41-70</p>
                  <p className="text-sm texto-oficial">
                    Algunas limitaciones significativas presentes
                  </p>
                </div>
                <div className="text-center p-6 bg-green-100 border border-green-300 rounded-sm">
                  <h3 className="typewriter-bold text-green-700 mb-2">LIBRE</h3>
                  <p className="text-3xl font-bold text-green-800 mb-2">71-100</p>
                  <p className="text-sm texto-oficial">
                    Alto nivel de libertades digitales garantizadas
                  </p>
                </div>
              </div>
            </ExpedienteCard>
          </motion.section>

          {/* Fuentes de Datos */}
          <motion.section variants={itemVariants}>
            <ExpedienteCard>
              <h2 className="text-2xl typewriter-bold mb-6 text-center">FUENTES DE DATOS</h2>
              <div className="texto-oficial">
                <p className="mb-4">
                  El índice se construye a partir de datos recopilados de múltiples fuentes oficiales y 
                  organizaciones reconocidas:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {fuentesDatos.map((fuente, index) => (
                    <li key={index} className="flex items-start p-3 bg-papel-sombra rounded-sm border border-papel-border">
                      <span className="text-tinta-clara mr-3 typewriter-bold">▶</span>
                      <span className="text-sm">{fuente}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ExpedienteCard>
          </motion.section>

          {/* Proceso de Cálculo */}
          <motion.section variants={itemVariants}>
            <ExpedienteCard>
              <h2 className="text-2xl typewriter-bold mb-6 text-center">PROCESO DE CÁLCULO</h2>
              <div className="texto-oficial space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-papel-sombra rounded-sm border border-papel-border">
                    <div className="text-2xl typewriter-bold text-azul-info mb-2">1</div>
                    <h4 className="typewriter-bold mb-2">RECOLECCIÓN</h4>
                    <p className="text-sm">Obtención de datos de fuentes primarias</p>
                  </div>
                  <div className="text-center p-4 bg-papel-sombra rounded-sm border border-papel-border">
                    <div className="text-2xl typewriter-bold text-azul-info mb-2">2</div>
                    <h4 className="typewriter-bold mb-2">NORMALIZACIÓN</h4>
                    <p className="text-sm">Conversión a escalas comparables</p>
                  </div>
                  <div className="text-center p-4 bg-papel-sombra rounded-sm border border-papel-border">
                    <div className="text-2xl typewriter-bold text-azul-info mb-2">3</div>
                    <h4 className="typewriter-bold mb-2">PONDERACIÓN</h4>
                    <p className="text-sm">Aplicación de pesos por categoría</p>
                  </div>
                  <div className="text-center p-4 bg-papel-sombra rounded-sm border border-papel-border">
                    <div className="text-2xl typewriter-bold text-azul-info mb-2">4</div>
                    <h4 className="typewriter-bold mb-2">AGREGACIÓN</h4>
                    <p className="text-sm">Cálculo del índice compuesto final</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-sm">
                  <h4 className="typewriter-bold mb-2">FÓRMULA DE CÁLCULO:</h4>
                  <p className="font-mono text-sm bg-white p-2 border rounded">
                    ILD = Σ(Wi × Ni) donde Wi = peso de categoría i, Ni = valor normalizado de categoría i
                  </p>
                </div>
              </div>
            </ExpedienteCard>
          </motion.section>

          {/* Actualización y Revisión */}
          <motion.section variants={itemVariants}>
            <ExpedienteCard>
              <h2 className="text-2xl typewriter-bold mb-6 text-center">ACTUALIZACIÓN Y REVISIÓN</h2>
              <div className="texto-oficial space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="typewriter-bold mb-3">FRECUENCIA DE ACTUALIZACIÓN</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-verde-aprobado mr-2">•</span>
                        Datos principales: mensual
                      </li>
                      <li className="flex items-start">
                        <span className="text-verde-aprobado mr-2">•</span>
                        Indicadores cualitativos: trimestral
                      </li>
                      <li className="flex items-start">
                        <span className="text-verde-aprobado mr-2">•</span>
                        Revisión metodológica: anual
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="typewriter-bold mb-3">PROCESO DE VALIDACIÓN</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-azul-info mr-2">•</span>
                        Revisión por expertos externos
                      </li>
                      <li className="flex items-start">
                        <span className="text-azul-info mr-2">•</span>
                        Consulta pública anual
                      </li>
                      <li className="flex items-start">
                        <span className="text-azul-info mr-2">•</span>
                        Auditoría metodológica independiente
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ExpedienteCard>
          </motion.section>

          {/* Botón de regreso */}
          <motion.section 
            variants={itemVariants}
            className="text-center pt-8 border-t border-papel-border"
          >
            <Link href="/observatorio">
              <Button variant="stamp" size="lg" className="mx-auto">
                ← REGRESAR AL OBSERVATORIO
              </Button>
            </Link>
            <p className="text-sm text-tinta-clara mt-4">
              Última actualización: {new Date().toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.section>
        </motion.main>
      </div>
    </div>
  );
}