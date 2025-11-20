/**
 * Home Page - Playful Harmony Design
 * Página de inicio con diseño minimalista japonés
 */

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero } from '@/shared/ui';
import { H2, H3, Body } from '@/shared/ui';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Badge } from '@/shared/ui';

const features = [
  {
    id: 'herramientas',
    icon: '🚨',
    title: 'Herramientas de Emergencia',
    description: 'Protocolos de respuesta inmediata ante amenazas digitales',
    href: '/herramientas',
    color: 'sakura' as const,
    badge: 'Acceso 24/7',
  },
  {
    id: 'red',
    icon: '🤝',
    title: 'Red de Apoyo',
    description: 'Directorio verificado de 23 organizaciones aliadas',
    href: '/red',
    color: 'matcha' as const,
    badge: '23 Organizaciones',
  },
  {
    id: 'academia',
    icon: '🎓',
    title: 'Academia Activista',
    description: 'Formación certificada en seguridad digital',
    href: '/academia',
    color: 'ocean' as const,
    badge: 'Certificación',
  },
  {
    id: 'observatorio',
    icon: '📊',
    title: 'Observatorio',
    description: 'Métricas públicas del estado de libertades digitales',
    href: '/observatorio',
    color: 'lavender' as const,
    badge: 'Datos Abiertos',
  },
];

const manifesto = [
  'El estado actual de vulnerabilidad digital de la ciudadanía',
  'El miedo digital paraliza a la ciudadanía mexicana ante amenazas cibernéticas',
  'La vigilancia gubernamental y corporativa viola sistemáticamente nuestros derechos fundamentales',
  'El conocimiento técnico se mantiene deliberadamente inaccesible para las mayorías',
];

const declarations = [
  'Cada ciudadano tiene derecho irrenunciable a la privacidad digital sin vigilancia ni censura',
  'Transformaremos el miedo en poder colectivo a través de herramientas prácticas y educación accesible',
  'Ningún activista digital navegará solo en esta lucha por las libertades digitales fundamentales',
  'Este conocimiento será siempre libre, gratuito y accesible para todas las personas',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="xl"
        title="Antimanual MX"
        description="Manifiesto de Liberación Digital • Activismo Digital Colectivo • Iniciativa Ciudadana Independiente"
        badge={
          <Badge color="persimmon" variant="soft" size="lg">
            🛡️ Resistencia Digital
          </Badge>
        }
        primaryAction={{
          label: '🚀 Comenzar Ahora',
          onClick: () => window.location.href = '/academia',
        }}
        secondaryAction={{
          label: 'Ver Herramientas',
          onClick: () => window.location.href = '/herramientas',
        }}
        illustration={
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-9xl"
          >
            🛡️
          </motion.div>
        }
      />

      {/* Manifiesto Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <Badge color="gold" variant="soft" size="lg" className="mb-4">
                Manifiesto v1.0
              </Badge>
              <H2 className="mb-4">Considerando</H2>
            </div>

            <div className="space-y-6 mb-16">
              {manifesto.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-sakura to-matcha flex items-center justify-center text-white font-display font-bold">
                    {index + 1}
                  </div>
                  <Body color="secondary" className="flex-1">
                    {item}
                  </Body>
                </motion.div>
              ))}
            </div>

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 px-8 py-3 bg-gradient-to-r from-sakura-100 via-matcha-100 to-ocean-100 rounded-2xl">
                <H3>Por lo tanto, declaramos:</H3>
              </div>
            </div>

            <div className="space-y-6">
              {declarations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start p-6 bg-gradient-to-br from-washi to-cloud rounded-2xl border border-mist shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 text-3xl">
                    {['🔒', '💪', '🤝', '📖'][index]}
                  </div>
                  <Body className="flex-1">
                    <span className="font-display font-bold text-sakura-500">
                      {['I.', 'II.', 'III.', 'IV.'][index]}
                    </span>{' '}
                    {item}
                  </Body>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Body color="tertiary" className="italic">
                Dado en el territorio digital de México •{' '}
                {new Date().toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Body>
              <Body className="mt-4 font-display font-bold text-lg bg-gradient-to-r from-sakura-500 via-matcha-500 to-ocean-500 bg-clip-text text-transparent">
                "Cada línea de código es un acto de resistencia"
              </Body>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cloud via-washi to-sakura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge color="indigo" variant="soft" size="lg" className="mb-4">
              Expedientes Disponibles
            </Badge>
            <H2>Recursos para la Resistencia</H2>
            <Body color="secondary" className="mt-4 max-w-2xl mx-auto">
              Acceso libre y gratuito a herramientas, educación y comunidad
            </Body>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={feature.href} className="h-full block">
                  <Card variant="elevated" hoverable clickable className="h-full">
                    <CardHeader>
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge color={feature.color} variant="soft">
                        {feature.badge}
                      </Badge>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" color={feature.color} fullWidth>
                        Explorar →
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-sakura-100 via-matcha-100 to-ocean-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" padding="xl" className="text-center">
              <H2 className="mb-6">Únete al Movimiento</H2>
              <Body className="text-xl mb-8">
                Ya somos{' '}
                <span className="font-display font-bold text-4xl bg-gradient-to-r from-sakura-500 to-persimmon bg-clip-text text-transparent">
                  500+
                </span>{' '}
                activistas construyendo el futuro digital que merecemos
              </Body>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button color="sakura" size="xl" onClick={() => window.location.href = '/academia'}>
                  🚀 Comenzar Ahora
                </Button>
                <Button
                  variant="outline"
                  color="matcha"
                  size="xl"
                  onClick={() => window.location.href = '/red'}
                >
                  Ver Red de Apoyo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
