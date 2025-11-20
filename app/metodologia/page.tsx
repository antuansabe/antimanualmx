/**
 * Metodología Page - Playful Harmony Design
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero, H2, H3, Body, Card, Button, Badge } from '@/shared/ui';

const factoresEvaluacion = [
  {
    categoria: "Acceso a Internet",
    peso: "25%",
    color: 'sakura' as const,
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
    color: 'ocean' as const,
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
    color: 'matcha' as const,
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
    color: 'lavender' as const,
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
    color: 'sunset' as const,
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
    color: 'indigo' as const,
    criterios: [
      "Inversión en I+D tecnológico",
      "Startups tecnológicas",
      "Patentes tecnológicas",
      "Ecosistema de innovación"
    ]
  }
];

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen">
      <Hero
        variant="gradient"
        size="md"
        title="Metodología del Índice"
        description="Documento técnico que explica la construcción y cálculo del Índice de Libertad Digital para México"
        badge={<Badge color="gold" variant="soft">📊 Observatorio</Badge>}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Introducción */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card variant="outlined" padding="lg">
              <H2 className="mb-4">Introducción</H2>
              <Body className="mb-4">
                El Índice de Libertad Digital es una medida compuesta que evalúa el estado de las libertades
                digitales en México. Se basa en una escala de 0 a 100 puntos, donde 100 representa el nivel
                más alto de libertad digital.
              </Body>
              <Body>
                Este índice combina indicadores cuantitativos y cualitativos de múltiples fuentes para
                proporcionar una evaluación integral del ecosistema digital mexicano.
              </Body>
            </Card>
          </motion.div>

          {/* Criterios */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <H2 className="mb-6 text-center">Criterios de Evaluación</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {factoresEvaluacion.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card variant="elevated" padding="md" className="h-full">
                    <div className="flex justify-between items-start mb-4">
                      <H3 className="text-lg">{factor.categoria}</H3>
                      <Badge color={factor.color} variant="soft">{factor.peso}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {factor.criterios.map((criterio, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <Body className="text-sm">{criterio}</Body>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Escala */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <H2 className="mb-6 text-center">Escala de Valoración</H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <Card variant="outlined" padding="lg" className="text-center border-2 border-persimmon h-full">
                <H3 className="text-persimmon mb-2">CRÍTICO</H3>
                <Body className="text-5xl font-display font-bold text-persimmon mb-3">0-40</Body>
                <Body className="text-sm">
                  Restricciones severas a las libertades digitales
                </Body>
              </Card>
              <Card variant="outlined" padding="lg" className="text-center border-2 border-gold h-full">
                <H3 className="text-gold mb-2">LIMITADO</H3>
                <Body className="text-5xl font-display font-bold text-gold mb-3">41-70</Body>
                <Body className="text-sm">
                  Algunas limitaciones significativas presentes
                </Body>
              </Card>
              <Card variant="outlined" padding="lg" className="text-center border-2 border-bamboo h-full">
                <H3 className="text-bamboo mb-2">LIBRE</H3>
                <Body className="text-5xl font-display font-bold text-bamboo mb-3">71-100</Body>
                <Body className="text-sm">
                  Alto nivel de libertades digitales garantizadas
                </Body>
              </Card>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center pt-8">
            <Link href="/observatorio">
              <Button color="ocean" size="lg">
                ← Regresar al Observatorio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
