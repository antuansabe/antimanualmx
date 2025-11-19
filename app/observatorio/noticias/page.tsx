'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero, H2, H3, Card, Button, Badge } from '@/shared/ui';

// Datos de noticias reales de aliados (últimos 2 años)
const noticias = [
  {
    id: 1,
    titulo: 'Vigilancia, espionaje y censura: Freedom House evalúa libertades de Internet',
    organizacion: 'R3D',
    fecha: 'Noviembre 2024',
    emoji: '📊',
    descripcion: 'Freedom House documenta casos de vigilancia, espionaje y censura en México entre 2023 y 2024, destacando la investigación de R3D sobre el "Ejército de bots".',
    url: 'https://r3d.mx/2024/11/04/vigilancia-espionaje-y-censura-freedom-house-evalua-las-libertades-de-internet-en-mexico-en-2024/',
    tags: ['Vigilancia', 'Censura', 'Derechos Digitales']
  },
  {
    id: 2,
    titulo: 'Ciberataque a Consejería Jurídica de Presidencia: filtran 200 GB',
    organizacion: 'R3D',
    fecha: 'Noviembre 2024',
    emoji: '🔓',
    descripcion: 'RansomHub liberó aproximadamente 206 GB de datos de la Consejería Jurídica de la Presidencia, incluyendo contratos y datos personales.',
    url: 'https://r3d.mx/2024/11/28/consejeria-juridica-de-la-presidencia-sufre-ciberataque-filtran-mas-de-200-gb-de-contratos-y-datos-personales/',
    tags: ['Ciberseguridad', 'Datos Personales', 'Gobierno']
  },
  {
    id: 3,
    titulo: 'Barreras informativas: desafíos para la libertad de expresión',
    organizacion: 'Artículo 19',
    fecha: 'Octubre 2024',
    emoji: '📰',
    descripcion: 'Informe anual 2024 que documenta 639 agresiones contra periodistas, un incremento del 13.9% respecto al año anterior.',
    url: 'https://articulo19.org/barrerasinformativas/',
    tags: ['Periodismo', 'Libertad de Expresión', 'Derechos Humanos']
  },
  {
    id: 4,
    titulo: 'R3D denuncia vigilancia del Ejército en audiencia de CIDH',
    organizacion: 'R3D',
    fecha: 'Agosto 2024',
    emoji: '⚠️',
    descripcion: 'R3D presenta denuncia sobre monitoreo y vigilancia ilegal del Ejército mexicano contra defensores de derechos humanos y periodistas.',
    url: 'https://r3d.mx/2024/08/01/r3d-denuncia-monitoreo-y-vigilancia-del-ejercito-mexicano-en-audiencia-de-cidh/',
    tags: ['Vigilancia', 'DDHH', 'Espionaje']
  },
  {
    id: 5,
    titulo: 'Comunicaciones seguras: herramientas y mejores prácticas',
    organizacion: 'SocialTIC',
    fecha: 'Julio 2024',
    emoji: '🔒',
    descripcion: 'Guía práctica sobre herramientas para mantener comunicaciones seguras y proteger la privacidad en línea.',
    url: 'https://socialtic.org/blog/comunicaciones-seguras-facil-y-rapido-que-mas/',
    tags: ['Seguridad Digital', 'Privacidad', 'Herramientas']
  },
  {
    id: 6,
    titulo: 'Audiencia CIDH: Inteligencia artificial y derechos humanos',
    organizacion: 'R3D',
    fecha: 'Marzo 2025',
    emoji: '🤖',
    descripcion: 'R3D participa en audiencia regional sobre los desafíos que la inteligencia artificial presenta para los derechos humanos en América Latina.',
    url: 'https://r3d.mx/2025/03/14/r3d-participa-en-la-audiencia-de-cidh-sobre-inteligencia-artificial-y-derechos-humanos/',
    tags: ['IA', 'Derechos Humanos', 'CIDH']
  },
  {
    id: 7,
    titulo: 'Filtración de base de datos de periodistas de Presidencia',
    organizacion: 'R3D',
    fecha: 'Enero 2024',
    emoji: '🗂️',
    descripcion: 'Más de 300 registros del Sistema de Acreditación de Prensa fueron publicados en foro de filtraciones, exponiendo datos de periodistas.',
    url: 'https://r3d.mx/2024/01/26/filtran-base-de-datos-de-periodistas-registrados-en-el-sistema-de-acreditacion-de-prensa-de-presidencia/',
    tags: ['Filtraciones', 'Periodismo', 'Privacidad']
  },
  {
    id: 8,
    titulo: 'Cuidados digitales para activistas y periodistas',
    organizacion: 'SocialTIC',
    fecha: 'Septiembre 2023',
    emoji: '🛡️',
    descripcion: 'Herramientas y estrategias desarrolladas con MPI CDMX para prevenir y enfrentar riesgos digitales para periodistas y defensores.',
    url: 'https://socialtic.org/blog/cuidados-digitales-periodistas-activistas-derechos-humanos/',
    tags: ['Protección Digital', 'Activismo', 'Periodismo']
  },
  {
    id: 9,
    titulo: 'Seguridad integral para periodistas',
    organizacion: 'Artículo 19',
    fecha: 'Agosto 2023',
    emoji: '📚',
    descripcion: 'Plataforma con herramientas sobre seguridad física, seguridad digital, normatividad y derecho a la información para periodistas.',
    url: 'https://seguridadintegral.articulo19.org/',
    tags: ['Seguridad', 'Capacitación', 'Recursos']
  },
  {
    id: 10,
    titulo: 'Coalición #MigrarSinVigilancia contra tecnologías invasivas',
    organizacion: 'R3D',
    fecha: 'Diciembre 2023',
    emoji: '🌎',
    descripcion: 'R3D se une a coalición latinoamericana de OSC contra el uso de tecnologías invasivas en control migratorio.',
    url: 'https://r3d.mx/2023/12/18/r3d-forma-parte-de-la-coalicion-latinoamericana-migrarsinvigilancia-junto-a-decenas-de-organizaciones-de-la-sociedad-civil/',
    tags: ['Migración', 'Vigilancia', 'América Latina']
  },
  {
    id: 11,
    titulo: 'Recomendaciones de seguridad para protestas y marchas',
    organizacion: 'SocialTIC',
    fecha: 'Junio 2023',
    emoji: '📱',
    descripcion: 'Guía de seguridad digital y física antes, durante y después de participar en manifestaciones y protestas.',
    url: 'https://socialtic.org/blog/recomendaciones-de-seguridad-para-antes-durante-y-despues-de-una-marcha-o-protesta/',
    tags: ['Seguridad', 'Protesta', 'Activismo']
  },
  {
    id: 12,
    titulo: '¿Qué es la neutralidad de la red y por qué está en riesgo?',
    organizacion: 'R3D',
    fecha: 'Febrero 2020',
    emoji: '🌐',
    descripcion: 'Análisis sobre los principios de neutralidad de la red y los riesgos que enfrenta en México con los nuevos lineamientos del IFT.',
    url: 'https://r3d.mx/2020/02/05/que-es-la-neutralidad-de-la-red-y-por-que-esta-en-riesgo-en-mexico/',
    tags: ['Neutralidad', 'Internet', 'Regulación']
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
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="lg"
        title="Noticias de Aliados"
        description="Últimas actualizaciones de organizaciones aliadas en defensa de libertades digitales"
        badge={
          <Badge color="ocean" variant="soft" size="lg">
            📰 Noticias
          </Badge>
        }
        illustration={
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-8xl"
          >
            📡
          </motion.div>
        }
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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
            >
              <Card variant="elevated" hoverable className="h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl">{noticia.emoji}</span>
                    <div className="flex-1">
                      <H3 className="text-lg mb-2 leading-tight">
                        {noticia.titulo}
                      </H3>
                      <div className="flex items-center gap-2 text-xs">
                        <Badge color="sakura" variant="soft" size="sm">
                          {noticia.organizacion}
                        </Badge>
                        <span className="text-charcoal">{noticia.fecha}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-charcoal mb-4 leading-relaxed flex-1">
                    {noticia.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {noticia.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        color="lavender"
                        variant="outlined"
                        size="sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={noticia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button color="ocean" fullWidth>
                      Leer más →
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {/* Back button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/observatorio">
            <Button variant="outline" color="matcha" size="lg">
              ← Volver al Observatorio
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
