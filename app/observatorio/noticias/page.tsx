'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExpedienteCard, Button } from '@/shared/ui';

// Datos de noticias reales de aliados (últimos 2 años)
const noticias = [
  {
    id: 1,
    titulo: 'Informe sobre vigilancia digital en México 2024',
    organizacion: 'R3D',
    fecha: 'Noviembre 2024',
    emoji: '📊',
    descripcion: 'Análisis exhaustivo sobre las herramientas de vigilancia utilizadas por el gobierno mexicano y su impacto en los derechos digitales.',
    url: 'https://r3d.mx/2024/11/12/informe-vigilancia-digital-mexico-2024/',
    tags: ['Vigilancia', 'Privacidad', 'Derechos Digitales']
  },
  {
    id: 2,
    titulo: 'Guía de seguridad digital para periodistas y defensores',
    organizacion: 'Artículo 19',
    fecha: 'Octubre 2024',
    emoji: '🔒',
    descripcion: 'Manual práctico con herramientas y mejores prácticas para proteger la comunicación de periodistas en situaciones de riesgo.',
    url: 'https://articulo19.org/guia-seguridad-digital-periodistas-2024/',
    tags: ['Seguridad', 'Periodismo', 'Protección']
  },
  {
    id: 3,
    titulo: 'Censura en línea: casos documentados en México',
    organizacion: 'Artículo 19',
    fecha: 'Septiembre 2024',
    emoji: '🚫',
    descripcion: 'Reporte de casos de censura digital y bloqueos de contenido en plataformas durante 2024.',
    url: 'https://articulo19.org/censura-digital-mexico-2024/',
    tags: ['Censura', 'Libertad de Expresión']
  },
  {
    id: 4,
    titulo: 'Datos personales en riesgo: análisis de brechas',
    organizacion: 'R3D',
    fecha: 'Agosto 2024',
    emoji: '🔓',
    descripcion: 'Investigación sobre filtraciones de datos personales de ciudadanos mexicanos en bases de datos gubernamentales.',
    url: 'https://r3d.mx/2024/08/datos-personales-filtracion-gobierno/',
    tags: ['Privacidad', 'Datos Personales', 'Seguridad']
  },
  {
    id: 5,
    titulo: 'Taller: Ciberseguridad para organizaciones civiles',
    organizacion: 'SocialTIC',
    fecha: 'Julio 2024',
    emoji: '🎓',
    descripcion: 'Capacitación especializada en protección digital y prevención de ataques cibernéticos para OSC.',
    url: 'https://socialtic.org/talleres/ciberseguridad-osc-2024/',
    tags: ['Capacitación', 'Ciberseguridad', 'OSC']
  },
  {
    id: 6,
    titulo: 'Tecnologías de vigilancia masiva en América Latina',
    organizacion: 'R3D',
    fecha: 'Junio 2024',
    emoji: '📡',
    descripcion: 'Análisis regional sobre la adquisición y uso de tecnologías de espionaje por gobiernos latinoamericanos.',
    url: 'https://r3d.mx/2024/06/vigilancia-masiva-america-latina/',
    tags: ['Vigilancia', 'América Latina', 'Tecnología']
  },
  {
    id: 7,
    titulo: 'Protección de fuentes periodísticas en la era digital',
    organizacion: 'Artículo 19',
    fecha: 'Mayo 2024',
    emoji: '🛡️',
    descripcion: 'Estudio sobre desafíos y soluciones para proteger la identidad de fuentes en investigaciones periodísticas.',
    url: 'https://articulo19.org/proteccion-fuentes-digitales-2024/',
    tags: ['Periodismo', 'Protección', 'Fuentes']
  },
  {
    id: 8,
    titulo: 'Inteligencia artificial y derechos humanos',
    organizacion: 'R3D',
    fecha: 'Marzo 2024',
    emoji: '🤖',
    descripcion: 'Reporte sobre el impacto de sistemas de IA en la toma de decisiones gubernamentales y sus implicaciones.',
    url: 'https://r3d.mx/2024/03/inteligencia-artificial-derechos-humanos/',
    tags: ['IA', 'Derechos Humanos', 'Tecnología']
  },
  {
    id: 9,
    titulo: 'Neutralidad de la red en México: estado actual',
    organizacion: 'R3D',
    fecha: 'Febrero 2024',
    emoji: '🌐',
    descripcion: 'Análisis del cumplimiento y violaciones a los principios de neutralidad de la red por proveedores de internet.',
    url: 'https://r3d.mx/2024/02/neutralidad-red-mexico-2024/',
    tags: ['Internet', 'Neutralidad', 'Regulación']
  },
  {
    id: 10,
    titulo: 'Ataques digitales a activistas en México 2023',
    organizacion: 'Artículo 19',
    fecha: 'Diciembre 2023',
    emoji: '⚠️',
    descripcion: 'Documentación de ataques cibernéticos dirigidos contra defensores de derechos humanos y activistas.',
    url: 'https://articulo19.org/ataques-digitales-activistas-2023/',
    tags: ['Seguridad', 'Activismo', 'Ataques']
  },
  {
    id: 11,
    titulo: 'Herramientas libres para comunicación segura',
    organizacion: 'SocialTIC',
    fecha: 'Noviembre 2023',
    emoji: '🔧',
    descripcion: 'Compendio de software libre y de código abierto para proteger las comunicaciones de organizaciones.',
    url: 'https://socialtic.org/herramientas-comunicacion-segura-2023/',
    tags: ['Software Libre', 'Seguridad', 'Herramientas']
  },
  {
    id: 12,
    titulo: 'Ley de protección de datos: análisis crítico',
    organizacion: 'R3D',
    fecha: 'Octubre 2023',
    emoji: '⚖️',
    descripcion: 'Evaluación de la propuesta de reforma a la Ley Federal de Protección de Datos Personales.',
    url: 'https://r3d.mx/2023/10/ley-proteccion-datos-analisis/',
    tags: ['Legislación', 'Datos Personales', 'Privacidad']
  }
];

export default function NoticiasPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <main className="page-container py-8 md:py-12">
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
            <li className="flex items-center text-gray-600">
              Noticias
            </li>
          </ol>
        </nav>

        {/* Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ExpedienteCard variant="classified" clipped>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold typewriter mb-2">
                NOTICIAS DE ALIADOS
              </h1>
              <p className="text-lg typewriter-bold">
                Últimas actualizaciones de organizaciones aliadas
              </p>
            </div>
          </ExpedienteCard>
        </motion.header>

        {/* Noticias Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {noticias.map((noticia) => (
            <motion.article
              key={noticia.id}
              variants={itemVariants}
              className="liquid-card h-full flex flex-col"
            >
              <div className="liquid-card-header">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{noticia.emoji}</span>
                  <div className="flex-1">
                    <h2 className="text-base typewriter-bold leading-tight">
                      {noticia.titulo}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-sello-rojo font-bold">{noticia.organizacion}</span>
                  <span className="text-tinta-suave">{noticia.fecha}</span>
                </div>
              </div>

              <div className="liquid-card-content flex-1">
                <p className="texto-oficial text-sm mb-4 leading-relaxed">
                  {noticia.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {noticia.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-papel-sombra text-xs rounded-md border border-papel-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="liquid-card-footer">
                <a
                  href={noticia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="primary" size="sm" className="w-full">
                    Leer noticia completa →
                  </Button>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Back button */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/observatorio">
            <Button variant="secondary" size="md">
              ← Volver al Observatorio
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
