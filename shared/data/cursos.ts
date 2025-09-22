export interface Modulo {
  id: string;
  titulo: string;
  descripcion: string;
  duracion: number; // en minutos
  orden: number;
  contenido: ContenidoModulo[];
  ejercicios?: Ejercicio[];
  recursos: Recurso[];
}

export interface ContenidoModulo {
  tipo: 'texto' | 'video' | 'imagen' | 'lista' | 'alerta' | 'codigo';
  contenido: string;
  titulo?: string;
  metadata?: any;
}

export interface Ejercicio {
  id: string;
  tipo: 'quiz' | 'practica' | 'reflexion';
  pregunta: string;
  opciones?: string[];
  respuestaCorrecta?: number;
  explicacion: string;
}

export interface Recurso {
  titulo: string;
  tipo: 'enlace' | 'descarga' | 'herramienta';
  url: string;
  descripcion: string;
}

export interface Curso {
  id: string;
  nivel: number;
  titulo: string;
  descripcion: string;
  duracionTotal: number; // en minutos
  modulos: Modulo[];
  prerequisitos: string[];
  objetivos: string[];
  certificado: boolean;
}

// Curso Nivel 1: Activista Digital Básico
export const cursoNivel1: Curso = {
  id: 'nivel-1-activista-digital-basico',
  nivel: 1,
  titulo: 'Activista Digital Básico',
  descripcion: 'Fundamentos de seguridad digital y primeros pasos en el activismo',
  duracionTotal: 180, // 3 horas
  prerequisitos: [],
  objetivos: [
    'Comprender los riesgos básicos de la vigilancia digital',
    'Conocer herramientas fundamentales de seguridad',
    'Identificar organizaciones de apoyo en México',
    'Desarrollar hábitos básicos de autodefensa digital'
  ],
  certificado: true,
  modulos: [
    {
      id: 'modulo-1-historia-resistencia',
      titulo: 'Historia de la Resistencia Digital',
      descripcion: 'Contexto histórico del activismo digital en México y el mundo',
      duracion: 45,
      orden: 1,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Introducción: ¿Por qué la resistencia digital?',
          contenido: `En la era digital, nuestras comunicaciones, movimientos y asociaciones dejan rastros que pueden ser monitoreados, analizados y utilizados en nuestra contra. La resistencia digital no es paranoia, es una necesidad para cualquier persona que busque ejercer sus derechos fundamentales sin temor a la represión.

El activismo digital en México tiene raíces profundas que se remontan a los movimientos estudiantiles, donde los activistas siempre han buscado formas de comunicarse de manera segura y organizarse sin ser detectados por las autoridades.`
        },
        {
          tipo: 'alerta',
          contenido: 'México es uno de los países más peligrosos para defensores de derechos humanos, con más de 300 asesinatos documentados en los últimos 10 años.'
        },
        {
          tipo: 'texto',
          titulo: 'Casos históricos relevantes',
          contenido: `**1968 - Movimiento Estudiantil**
Los estudiantes utilizaron redes clandestinas de comunicación para coordinar protestas, anticipando las técnicas modernas de organización digital.

**2014 - Caso Ayotzinapa**
El uso de redes sociales para documentar y difundir información se convirtió en una herramienta fundamental para mantener viva la búsqueda de justicia.

**2017 - Sismos de septiembre**
La organización ciudadana a través de plataformas digitales demostró el poder de la tecnología para la movilización social constructiva.`
        },
        {
          tipo: 'texto',
          titulo: 'El contexto global',
          contenido: `La resistencia digital no es exclusiva de México. Desde la Primavera Árabe hasta los movimientos #MeToo y Black Lives Matter, hemos visto cómo la tecnología puede ser tanto una herramienta de liberación como de opresión.

**Casos internacionales clave:**
- **Túnez (2010)**: Uso de redes sociales para coordinar protestas
- **Hong Kong (2014-2019)**: Aplicaciones como FireChat para comunicación sin internet
- **Bielorrusia (2020)**: Telegram como herramienta de organización masiva`
        },
        {
          tipo: 'lista',
          titulo: 'Herramientas históricas de resistencia',
          contenido: `• **Radio clandestina**: Transmisiones secretas durante dictaduras
• **Samizdat**: Distribución clandestina de literatura en la URSS
• **Redes de comunicación física**: Mensajeros y códigos secretos
• **Primeras BBS**: Sistemas de boletines electrónicos en los 80s
• **Criptografía**: Desde códigos simples hasta PGP moderno`
        }
      ],
      ejercicios: [
        {
          id: 'quiz-historia-1',
          tipo: 'quiz',
          pregunta: '¿Cuál fue uno de los primeros usos masivos de redes sociales para el activismo en México?',
          opciones: [
            'Las protestas por Ayotzinapa en 2014',
            'El movimiento estudiantil de 1968',
            'Los sismos de septiembre de 2017',
            'Las elecciones de 2018'
          ],
          respuestaCorrecta: 0,
          explicacion: 'El caso de Ayotzinapa marcó un punto de inflexión en el uso de redes sociales para mantener casos en la opinión pública y presionar por justicia.'
        }
      ],
      recursos: [
        {
          titulo: 'Documental: Ayotzinapa, el paso de la tortuga',
          tipo: 'enlace',
          url: 'https://www.netflix.com/title/81640670',
          descripcion: 'Documental sobre el caso Ayotzinapa y el papel de las redes sociales'
        },
        {
          titulo: 'Libro: "Redes de Resistencia" - Zeynep Tufekci',
          tipo: 'enlace',
          url: 'https://www.goodreads.com/book/show/35696431-twitter-and-tear-gas',
          descripcion: 'Análisis académico sobre movimientos sociales y tecnología'
        }
      ]
    },
    {
      id: 'modulo-2-derechos-digitales',
      titulo: 'Derechos Digitales en México',
      descripcion: 'Marco legal y derechos fundamentales en el entorno digital mexicano',
      duracion: 45,
      orden: 2,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Marco constitucional',
          contenido: `La Constitución Política de los Estados Unidos Mexicanos garantiza varios derechos que se extienden al ámbito digital:

**Artículo 6°** - Derecho a la información y libertad de expresión
**Artículo 7°** - Libertad de imprenta (aplicable a medios digitales)
**Artículo 8°** - Derecho de petición
**Artículo 16°** - Derecho a la privacidad y protección de datos personales`
        },
        {
          tipo: 'texto',
          titulo: 'Ley General de Protección de Datos Personales',
          contenido: `Desde 2010, México cuenta con una ley específica para proteger datos personales. Esta ley establece:

• **Principios**: Licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad
• **Derechos ARCO**: Acceso, Rectificación, Cancelación y Oposición
• **Obligaciones** para quienes manejan datos personales
• **Sanciones** por incumplimiento`
        },
        {
          tipo: 'alerta',
          contenido: 'El INAI (Instituto Nacional de Transparencia) es la autoridad encargada de proteger tus datos personales. Puedes presentar denuncias sin costo.'
        },
        {
          tipo: 'texto',
          titulo: 'Casos relevantes de violaciones',
          contenido: `**Espionaje con Pegasus (2017)**
Investigaciones revelaron el uso de software espía contra periodistas, activistas y defensores de derechos humanos en México.

**Filtración de datos del Padrón Electoral (2019)**
Exposición de datos de más de 90 millones de mexicanos por parte de empresas privadas.

**Vigilancia durante manifestaciones (2020)**
Uso de tecnología de reconocimiento facial y geolocalización durante protestas feministas.`
        },
        {
          tipo: 'lista',
          titulo: 'Tus derechos digitales fundamentales',
          contenido: `• **Privacidad**: Nadie puede acceder a tus comunicaciones privadas sin orden judicial
• **Anonimato**: Derecho a expresarte de forma anónima en línea
• **Acceso a internet**: Reconocido como derecho humano por la SCJN
• **Neutralidad de red**: Internet sin bloqueos ni discriminación
• **Protección de datos**: Control sobre tu información personal
• **Libertad de expresión**: Derecho a opinar sin censura previa`
        }
      ],
      ejercicios: [
        {
          id: 'quiz-derechos-1',
          tipo: 'quiz',
          pregunta: '¿Qué significan las siglas ARCO en protección de datos?',
          opciones: [
            'Acceso, Registro, Control, Organización',
            'Acceso, Rectificación, Cancelación, Oposición',
            'Archivo, Respaldo, Cifrado, Organización',
            'Análisis, Registro, Clasificación, Orden'
          ],
          respuestaCorrecta: 1,
          explicacion: 'Los derechos ARCO son fundamentales para el control de tus datos personales: Acceso (consultar), Rectificación (corregir), Cancelación (eliminar), Oposición (no procesar).'
        }
      ],
      recursos: [
        {
          titulo: 'INAI - Portal de Derechos ARCO',
          tipo: 'enlace',
          url: 'https://www.inai.org.mx/',
          descripcion: 'Sitio oficial para ejercer tus derechos de protección de datos'
        },
        {
          titulo: 'R3D - Guía de Derechos Digitales',
          tipo: 'enlace',
          url: 'https://r3d.mx/derechos-digitales/',
          descripcion: 'Recursos educativos sobre derechos digitales en México'
        }
      ]
    },
    {
      id: 'modulo-3-primeros-pasos-seguros',
      titulo: 'Primeros Pasos Seguros',
      descripcion: 'Medidas básicas de seguridad digital que todo activista debe conocer',
      duracion: 60,
      orden: 3,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Evaluación de riesgos personal',
          contenido: `Antes de implementar medidas de seguridad, es crucial entender tu perfil de riesgo:

**Nivel de exposición pública**
- ¿Eres una figura pública conocida?
- ¿Tu activismo es visible en redes sociales?
- ¿Has recibido amenazas anteriormente?

**Tipo de activismo**
- Derechos humanos, medio ambiente, anticorrupción tienen diferentes niveles de riesgo
- Algunos temas son más sensibles que otros según el contexto político

**Adversarios potenciales**
- Gobierno local, estatal o federal
- Empresas privadas
- Grupos criminales organizados
- Trolls y acosadores en línea`
        },
        {
          tipo: 'alerta',
          contenido: 'No existe seguridad perfecta. El objetivo es hacer que atacarte sea más costoso que los beneficios que obtendrían los adversarios.'
        },
        {
          tipo: 'texto',
          titulo: 'Seguridad básica de dispositivos',
          contenido: `**1. Contraseñas y autenticación**
- Usa contraseñas únicas y complejas para cada cuenta
- Habilita autenticación de dos factores (2FA) en todo
- Considera usar un gestor de contraseñas (Bitwarden, 1Password)

**2. Actualizaciones de software**
- Mantén tu sistema operativo actualizado
- Actualiza aplicaciones regularmente
- Usa software de fuentes confiables

**3. Cifrado de dispositivos**
- Activa cifrado completo del disco (FileVault en Mac, BitLocker en Windows)
- Usa bloqueo de pantalla con PIN/biométrico
- Configura borrado automático tras múltiples intentos fallidos`
        },
        {
          tipo: 'codigo',
          titulo: 'Configuración básica de privacidad en navegador',
          contenido: `// Configuraciones recomendadas para Firefox:

1. Ir a Configuración > Privacidad y seguridad
2. Activar "Estricta" en Protección contra rastreo
3. Configurar cookies: "Eliminar cookies y datos del sitio al cerrar Firefox"
4. DNS sobre HTTPS: Activar con proveedor seguro (Cloudflare)
5. Instalar extensiones:
   - uBlock Origin (bloqueador de anuncios)
   - Privacy Badger (anti-rastreo)
   - HTTPS Everywhere (forzar conexiones seguras)`
        },
        {
          tipo: 'lista',
          titulo: 'Checklist de seguridad básica',
          contenido: `□ Contraseñas únicas en todas las cuentas importantes
□ 2FA activado en redes sociales y email
□ Cifrado de dispositivo habilitado
□ Navegador configurado para privacidad
□ Respaldos regulares de información importante
□ VPN instalada y configurada
□ Signal instalado para comunicaciones sensibles
□ Configuración de privacidad revisada en redes sociales`
        }
      ],
      ejercicios: [
        {
          id: 'practica-contraseña',
          tipo: 'practica',
          pregunta: 'Crea una contraseña segura para una cuenta importante usando la técnica de frase de contraseña',
          explicacion: 'Una buena frase de contraseña combina palabras memorables con números y símbolos: "CaféMañana2024!" es más segura y memorable que "k9@mL$x2"'
        }
      ],
      recursos: [
        {
          titulo: 'Bitwarden - Gestor de contraseñas gratuito',
          tipo: 'herramienta',
          url: 'https://bitwarden.com/',
          descripcion: 'Gestor de contraseñas de código abierto y gratuito'
        },
        {
          titulo: 'Signal - Mensajería cifrada',
          tipo: 'herramienta',
          url: 'https://signal.org/',
          descripcion: 'App de mensajería con cifrado de extremo a extremo'
        }
      ]
    },
    {
      id: 'modulo-4-casos-exito',
      titulo: 'Casos de Éxito Locales',
      descripcion: 'Historias inspiradoras de activismo digital efectivo en México',
      duracion: 30,
      orden: 4,
      contenido: [
        {
          tipo: 'texto',
          titulo: 'Verificado 2018: Combatiendo desinformación electoral',
          contenido: `Durante las elecciones presidenciales de 2018, una coalición de medios y organizaciones civiles creó "Verificado 2018", una iniciativa para combatir noticias falsas.

**Metodología:**
- Verificación colaborativa de contenido viral
- Uso de tecnología para detectar patrones de desinformación
- Transparencia total en sus procesos de verificación

**Resultados:**
- Más de 600 verificaciones realizadas
- Alcance de millones de personas
- Modelo replicado en otros países de América Latina`
        },
        {
          tipo: 'texto',
          titulo: '#MiPrimerAcoso: Visibilizando violencia de género',
          contenido: `La campaña #MiPrimerAcoso, iniciada por la periodista Estefanía Veloz, utilizó redes sociales para visibilizar la normalización del acoso sexual.

**Estrategia digital:**
- Hashtag que generó conversación masiva
- Testimonios anónimos para proteger a las víctimas
- Colaboración con influencers y medios tradicionales

**Impacto:**
- Miles de testimonios compartidos
- Cambio en la conversación pública sobre acoso
- Inspiró legislación y políticas públicas`
        },
        {
          tipo: 'texto',
          titulo: 'Fracking en México: Organización digital territorial',
          contenido: `Las comunidades afectadas por el fracking han utilizado herramientas digitales para documentar impactos ambientales y organizarse.

**Herramientas utilizadas:**
- Mapeo colaborativo de pozos y daños ambientales
- WhatsApp para coordinación entre comunidades
- Facebook Live para transmitir asambleas y protestas

**Logros:**
- Suspensión temporal del fracking por la Suprema Corte
- Creación de redes de apoyo entre comunidades
- Documentación que sirvió como evidencia legal`
        },
        {
          tipo: 'lista',
          titulo: 'Factores de éxito identificados',
          contenido: `• **Narrativa clara**: Mensaje simple y poderoso que resuena
• **Coaliciones amplias**: Unión de diferentes sectores y organizaciones
• **Uso estratégico de plataformas**: Cada red social para diferentes objetivos
• **Documentación rigurosa**: Evidencia que respalda las denuncias
• **Seguridad digital**: Protección de activistas y fuentes
• **Persistencia**: Campañas sostenidas en el tiempo, no solo virales`
        }
      ],
      ejercicios: [
        {
          id: 'reflexion-casos',
          tipo: 'reflexion',
          pregunta: '¿Qué elementos de estos casos de éxito podrías aplicar en tu propio contexto de activismo? Describe una estrategia específica.',
          explicacion: 'Reflexiona sobre cómo adaptar estas estrategias a tu causa específica, considerando tu audiencia, recursos disponibles y objetivos.'
        }
      ],
      recursos: [
        {
          titulo: 'Verificado - Metodología de verificación',
          tipo: 'enlace',
          url: 'https://verificado.mx/',
          descripcion: 'Recursos sobre verificación de información y combate a desinformación'
        },
        {
          titulo: 'Cartilla de Derechos Digitales para Mujeres',
          tipo: 'descarga',
          url: 'https://luchadoras.mx/cartilla-derechos-digitales/',
          descripcion: 'Guía específica para mujeres activistas'
        }
      ]
    }
  ]
};

export const cursosDisponibles = [cursoNivel1];