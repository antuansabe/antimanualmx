/**
 * Herramientas Page - Playful Harmony Design
 * Kit de emergencia digital con protocolos de autodefensa
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero } from '@/shared/ui';
import { H2, H3, Body } from '@/shared/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Badge } from '@/shared/ui';

const herramientas = [
  {
    id: 'boton-panico',
    nombre: 'Botón de Pánico',
    descripcion: 'Procedimiento de emergencia para eliminación de rastros digitales en 60 segundos',
    icono: '🚨',
    color: 'persimmon' as const,
    urgencia: 'URGENTE',
    tiempo: '1-2 min',
    nivel: 'Crítico',
  },
  {
    id: 'phishing-detector',
    nombre: 'Detector de Phishing',
    descripcion: 'Sistema de entrenamiento para detección de ataques de ingeniería social',
    icono: '🎣',
    color: 'ocean' as const,
    urgencia: 'ALTA',
    tiempo: '5-10 min',
    nivel: 'Preventivo',
  },
  {
    id: 'comunicacion-cifrada',
    nombre: 'Comunicación Cifrada',
    descripcion: 'Manual de configuración e implementación de comunicaciones seguras',
    icono: '🔐',
    color: 'matcha' as const,
    urgencia: 'ALTA',
    tiempo: '10-15 min',
    nivel: 'Esencial',
  },
  {
    id: 'borrado-seguro',
    nombre: 'Borrado Seguro',
    descripcion: 'Protocolos para eliminación permanente de información sensible',
    icono: '🗑️',
    color: 'lavender' as const,
    urgencia: 'MEDIA',
    tiempo: '15-20 min',
    nivel: 'Importante',
  },
];

const valorCards = [
  {
    icon: '⚡',
    title: 'Gratuito',
    description: 'Acceso libre sin registro',
  },
  {
    icon: '🔓',
    title: 'Open Source',
    description: 'Código abierto y auditable',
  },
  {
    icon: '✓',
    title: 'Verificado',
    description: 'Probado por la comunidad',
  },
];

export default function HerramientasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="lg"
        title="Kit de Emergencia Digital"
        description="Protocolos de autodefensa digital para situaciones de riesgo. Herramientas verificadas, gratuitas y de acceso inmediato."
        badge={
          <Badge color="persimmon" variant="solid" size="lg">
            🚨 Emergencia Digital
          </Badge>
        }
        illustration={
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl"
          >
            🛡️
          </motion.div>
        }
      />

      {/* Aviso de Seguridad */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-sunset-50 to-persimmon/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="filled" padding="lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 text-4xl">⚠️</div>
              <div className="flex-1">
                <H3 className="mb-2">
                  Aviso de Seguridad
                </H3>
                <Body color="secondary">
                  Estas herramientas están diseñadas para situaciones de riesgo real.
                  Recomendamos realizar pruebas en entorno controlado antes de usar en emergencias.
                </Body>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valorCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card variant="outlined" padding="md" className="text-center h-full">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <H3 className="mb-2">
                    {item.title}
                  </H3>
                  <Body color="secondary" className="text-sm">
                    {item.description}
                  </Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cloud via-washi to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge color="sakura" variant="soft" size="lg" className="mb-4">
              Protocolos Disponibles
            </Badge>
            <H2>Herramientas de Autodefensa</H2>
            <Body color="secondary" className="mt-4 max-w-2xl mx-auto">
              Acceso inmediato a protocolos verificados por la comunidad
            </Body>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {herramientas.map((herramienta, index) => (
              <motion.div
                key={herramienta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/herramientas/${herramienta.id}`} className="h-full block">
                  <Card variant="elevated" hoverable clickable className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl">{herramienta.icono}</div>
                        <Badge color={herramienta.color} variant="soft" size="sm">
                          {herramienta.urgencia}
                        </Badge>
                      </div>
                      <CardTitle>{herramienta.nombre}</CardTitle>
                      <CardDescription>{herramienta.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="text-charcoal">⏱️</span>
                          <Body color="secondary" className="text-sm">
                            {herramienta.tiempo}
                          </Body>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-charcoal">📊</span>
                          <Body color="secondary" className="text-sm">
                            {herramienta.nivel}
                          </Body>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" color={herramienta.color} fullWidth>
                        Acceder →
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sakura-100 to-matcha-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="glass" padding="xl" className="text-center">
            <H2 className="mb-4">¿Necesitas Ayuda Inmediata?</H2>
            <Body className="text-lg mb-8">
              Si estás en una situación de riesgo, contacta con nuestra red de apoyo
            </Body>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button color="persimmon" size="lg" onClick={() => window.location.href = '/red'}>
                📞 Red de Apoyo
              </Button>
              <Button
                variant="outline"
                color="ocean"
                size="lg"
                onClick={() => window.location.href = '/academia'}
              >
                📚 Aprender Más
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
