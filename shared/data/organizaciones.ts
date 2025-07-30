export interface Organizacion {
  id: string;
  nombre: string;
  nombreCorto: string;
  descripcion: string;
  mision: string;
  especialidades: string[];
  tipo: 'ong' | 'colectivo' | 'academia' | 'periodismo' | 'legal';
  ubicacion: {
    estado: string;
    ciudad: string;
    coordenadas: {
      lat: number;
      lng: number;
    };
  };
  contacto: {
    sitioWeb: string;
    email?: string;
    twitter?: string;
    facebook?: string;
    telegram?: string;
    whatsapp?: string;
  };
  servicios: string[];
  alcance: 'nacional' | 'regional' | 'local';
  fechaFundacion: number;
  estado: 'activa' | 'inactiva' | 'nueva';
  verificada: boolean;
  logros: string[];
  colaboraciones: string[];
}

export const organizaciones: Organizacion[] = [
  {
    id: 'r3d',
    nombre: 'Red en Defensa de los Derechos Digitales',
    nombreCorto: 'R3D',
    descripcion: 'Organización de la sociedad civil que promueve y defiende los derechos digitales en México a través de investigación, incidencia en políticas públicas y litigio estratégico.',
    mision: 'Promover el respeto y garantía de los derechos humanos en el entorno digital',
    especialidades: ['Litigio estratégico', 'Transparencia', 'Privacidad', 'Vigilancia'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://r3d.mx',
      email: 'contacto@r3d.mx',
      twitter: '@R3Dmx',
      facebook: 'R3Dmx'
    },
    servicios: ['Asesoría legal', 'Investigación', 'Capacitación', 'Incidencia política'],
    alcance: 'nacional',
    fechaFundacion: 2015,
    estado: 'activa',
    verificada: true,
    logros: [
      'Casos exitosos ante SCJN sobre vigilancia',
      'Impulso a Ley General de Protección de Datos',
      'Monitoreo de compras de tecnología de vigilancia'
    ],
    colaboraciones: ['Privacy International', 'EFF', 'Access Now']
  },
  {
    id: 'articulo19',
    nombre: 'Artículo 19 México y Centroamérica',
    nombreCorto: 'Artículo 19',
    descripcion: 'Organización de derechos humanos que trabaja en todo el mundo para defender y promover el derecho a la libertad de expresión y el derecho a la información.',
    mision: 'Defender la libertad de expresión como base fundamental de la democracia',
    especialidades: ['Libertad de expresión', 'Protección a periodistas', 'Acceso a la información'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4285, lng: -99.1277 }
    },
    contacto: {
      sitioWeb: 'https://articulo19.org',
      email: 'mexico@articulo19.org',
      twitter: '@article19mex',
      facebook: 'ARTICLE19Mexico'
    },
    servicios: ['Protección a periodistas', 'Asesoría legal', 'Documentación de violaciones', 'Capacitación'],
    alcance: 'nacional',
    fechaFundacion: 2006,
    estado: 'activa',
    verificada: true,
    logros: [
      'Mecanismo de Protección para Personas Defensoras',
      'Casos emblemáticos de libertad de prensa',
      'Observatorio de agresiones'
    ],
    colaboraciones: ['UNESCO', 'CIDH', 'Reporteros Sin Fronteras']
  },
  {
    id: 'socialtic',
    nombre: 'SocialTIC',
    nombreCorto: 'SocialTIC',
    descripcion: 'Organización mexicana que impulsa el uso estratégico de la tecnología digital y la innovación cívica para el fortalecimiento de la sociedad civil.',
    mision: 'Fortalecer organizaciones civiles mediante tecnología y innovación social',
    especialidades: ['Tecnología cívica', 'Innovación social', 'Capacitación digital', 'Seguridad digital'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4150, lng: -99.1020 }
    },
    contacto: {
      sitioWeb: 'https://socialtic.org',
      email: 'hola@socialtic.org',
      twitter: '@socialtic',
      facebook: 'socialtic.org'
    },
    servicios: ['Capacitación tecnológica', 'Desarrollo de herramientas', 'Investigación', 'Consultoría'],
    alcance: 'nacional',
    fechaFundacion: 2013,
    estado: 'activa',
    verificada: true,
    logros: [
      'Plataforma TechSoup México',
      'Programa de Seguridad Digital',
      'Laboratorio de innovación cívica'
    ],
    colaboraciones: ['Fundación Ford', 'Open Society', 'Mozilla']
  },
  {
    id: 'luchadoras',
    nombre: 'Luchadoras MX',
    nombreCorto: 'Luchadoras',
    descripcion: 'Colectiva feminista transdisciplinaria que trabaja para contrarrestar la violencia contra las mujeres en línea mediante investigación, incidencia y acompañamiento.',
    mision: 'Eliminar la violencia de género en internet mediante resistencia feminista',
    especialidades: ['Violencia digital de género', 'Ciberfeminismo', 'Autodefensa digital'],
    tipo: 'colectivo',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4340, lng: -99.1437 }
    },
    contacto: {
      sitioWeb: 'https://luchadoras.mx',
      email: 'hola@luchadoras.mx',
      twitter: '@luchadoras_mx',
      telegram: '@luchadorasmx'
    },
    servicios: ['Acompañamiento legal', 'Talleres de autodefensa', 'Investigación', 'Documentación'],
    alcance: 'nacional',
    fechaFundacion: 2015,
    estado: 'activa',
    verificada: true,
    logros: [
      'Ley Olimpia en varios estados',
      'Observatorio de violencia digital',
      'Protocolo de acompañamiento'
    ],
    colaboraciones: ['Inmujeres', 'ONU Mujeres', 'Association for Progressive Communications']
  },
  {
    id: 'cencos',
    nombre: 'Centro Nacional de Comunicación Social',
    nombreCorto: 'CENCOS',
    descripcion: 'Organización que promueve el derecho a la información y la comunicación democrática en México.',
    mision: 'Democratizar la comunicación y fortalecer el derecho a la información',
    especialidades: ['Derecho a la información', 'Medios comunitarios', 'Democratización mediática'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4215, lng: -99.1519 }
    },
    contacto: {
      sitioWeb: 'https://cencos.org',
      email: 'cencos@cencos.org',
      twitter: '@cencos_org',
      facebook: 'cencos.ac'
    },
    servicios: ['Capacitación en comunicación', 'Investigación mediática', 'Incidencia política'],
    alcance: 'nacional',
    fechaFundacion: 1983,
    estado: 'activa',
    verificada: true,
    logros: [
      'Ley Federal de Telecomunicaciones',
      'Observatorio de medios',
      'Formación de comunicadores populares'
    ],
    colaboraciones: ['AMARC', 'WACC', 'Observacom']
  },
  {
    id: 'derechosdigitales',
    nombre: 'Derechos Digitales',
    nombreCorto: 'DD',
    descripcion: 'Organización latinoamericana independiente que trabaja en la defensa, promoción y desarrollo de los derechos humanos en el entorno digital.',
    mision: 'Promover los derechos fundamentales en el espacio digital',
    especialidades: ['Derechos digitales', 'Privacidad', 'Libertad de expresión', 'Acceso a internet'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Regional',
      ciudad: 'América Latina',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://derechosdigitales.org',
      email: 'contacto@derechosdigitales.org',
      twitter: '@derechosdig'
    },
    servicios: ['Investigación', 'Litigio', 'Incidencia regional', 'Capacitación'],
    alcance: 'regional',
    fechaFundacion: 2005,
    estado: 'activa',
    verificada: true,
    logros: [
      'Declaración de Principios sobre Internet',
      'Red regional de organizaciones',
      'Informes sobre vigilancia en la región'
    ],
    colaboraciones: ['EFF', 'Privacy International', 'Access Now']
  },
  {
    id: 'tedic',
    nombre: 'Tecnología, Educación, Derechos, Internet y Ciudadanía',
    nombreCorto: 'TEDIC',
    descripcion: 'Organización que promueve los derechos humanos en el entorno digital desde Paraguay, con trabajo regional.',
    mision: 'Defender los derechos humanos en el entorno digital',
    especialidades: ['Derechos digitales', 'Educación digital', 'Transparencia'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Regional',
      ciudad: 'Asunción',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://tedic.org',
      email: 'contacto@tedic.org',
      twitter: '@TEDICpy'
    },
    servicios: ['Investigación', 'Capacitación', 'Incidencia', 'Desarrollos tecnológicos'],
    alcance: 'regional',
    fechaFundacion: 2013,
    estado: 'activa',
    verificada: true,
    logros: [
      'Ley de Transparencia Paraguay',
      'Observatorio de derechos digitales',
      'Herramientas de transparencia'
    ],
    colaboraciones: ['Derechos Digitales', 'IPANDETEC', 'Fundación Karisma']
  },
  {
    id: 'internetlibre',
    nombre: 'Internet Libre',
    nombreCorto: 'Internet Libre',
    descripcion: 'Colectivo mexicano que promueve un internet libre, abierto y sin censura.',
    mision: 'Mantener internet libre de censura y restricciones',
    especialidades: ['Anti-censura', 'Neutralidad de red', 'Software libre'],
    tipo: 'colectivo',
    ubicacion: {
      estado: 'Nacional',
      ciudad: 'México',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://internetlibre.mx',
      twitter: '@internetlibremx',
      telegram: '@internetlibremx'
    },
    servicios: ['Activismo digital', 'Herramientas anticensura', 'Capacitación técnica'],
    alcance: 'nacional',
    fechaFundacion: 2018,
    estado: 'activa',
    verificada: true,
    logros: [
      'Campañas contra censura',
      'Herramientas de evasión',
      'Comunidad técnica activa'
    ],
    colaboraciones: ['Tor Project', 'EFF', 'Colectivos internacionales']
  },
  {
    id: 'redes-ac',
    nombre: 'Redes por la Diversidad, Equidad y Sustentabilidad',
    nombreCorto: 'Redes AC',
    descripcion: 'Organización mexicana que trabaja por la justicia socioambiental y los derechos humanos, incluyendo derechos digitales.',
    mision: 'Promover la justicia social y ambiental mediante la participación ciudadana',
    especialidades: ['Justicia socioambiental', 'Participación digital', 'Comunicación popular'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Michoacán',
      ciudad: 'Morelia',
      coordenadas: { lat: 19.7069, lng: -101.1946 }
    },
    contacto: {
      sitioWeb: 'https://redes.org.mx',
      email: 'contacto@redes.org.mx',
      twitter: '@RedesAC'
    },
    servicios: ['Comunicación popular', 'Incidencia ambiental', 'Formación ciudadana'],
    alcance: 'nacional',
    fechaFundacion: 1993,
    estado: 'activa',
    verificada: true,
    logros: [
      'Red de comunicación popular',
      'Campañas ambientales exitosas',
      'Formación de liderazgos'
    ],
    colaboraciones: ['AMARC', 'Red Nacional de Radios Comunitarias']
  },
  {
    id: 'fundar',
    nombre: 'Fundar, Centro de Análisis e Investigación',
    nombreCorto: 'Fundar',
    descripcion: 'Think tank mexicano que realiza investigación aplicada en políticas públicas, incluyendo temas de transparencia y derechos digitales.',
    mision: 'Democratizar la toma de decisiones públicas mediante investigación',
    especialidades: ['Políticas públicas', 'Transparencia', 'Rendición de cuentas', 'Datos abiertos'],
    tipo: 'academia',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4097, lng: -99.1678 }
    },
    contacto: {
      sitioWeb: 'https://fundar.org.mx',
      email: 'contacto@fundar.org.mx',
      twitter: '@FundarMexico'
    },
    servicios: ['Investigación', 'Análisis de políticas', 'Capacitación', 'Consultoría'],
    alcance: 'nacional',
    fechaFundacion: 1999,
    estado: 'activa',
    verificada: true,
    logros: [
      'Ley de Transparencia México',
      'Observatorio del gasto público',
      'Plataforma de datos abiertos'
    ],
    colaboraciones: ['Transparencia Mexicana', 'IMCO', 'México Evalúa']
  },
  {
    id: 'propuesta-civica',
    nombre: 'Propuesta Cívica',
    nombreCorto: 'Propuesta Cívica',
    descripcion: 'Asociación civil apartidista que impulsa la participación ciudadana y el uso de tecnología para fortalecer la democracia.',
    mision: 'Fortalecer la democracia mediante participación ciudadana y tecnología',
    especialidades: ['Participación ciudadana', 'Tecnología cívica', 'Transparencia electoral'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4200, lng: -99.1400 }
    },
    contacto: {
      sitioWeb: 'https://propuestacivica.org.mx',
      email: 'contacto@propuestacivica.org.mx',
      twitter: '@PropuestaCivica'
    },
    servicios: ['Observación electoral', 'Plataformas digitales', 'Capacitación cívica'],
    alcance: 'nacional',
    fechaFundacion: 1994,
    estado: 'activa',
    verificada: true,
    logros: [
      'Observación electoral ciudadana',
      'Plataformas de participación',
      'Promoción del voto informado'
    ],
    colaboraciones: ['Alianza Cívica', 'Red Nacional de Organismos Civiles']
  },
  {
    id: 'horizontal',
    nombre: 'Horizontal',
    nombreCorto: 'Horizontal',
    descripcion: 'Medio de comunicación independiente especializado en periodismo de investigación y derechos humanos.',
    mision: 'Informar sobre violaciones a derechos humanos y promover la justicia',
    especialidades: ['Periodismo de investigación', 'Derechos humanos', 'Transparencia'],
    tipo: 'periodismo',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://horizontal.mx',
      email: 'contacto@horizontal.mx',
      twitter: '@horizontalmx'
    },
    servicios: ['Investigación periodística', 'Capacitación', 'Documentación'],
    alcance: 'nacional',
    fechaFundacion: 2014,
    estado: 'activa',
    verificada: true,
    logros: [
      'Investigaciones de impacto',
      'Premios de periodismo',
      'Colaboraciones internacionales'
    ],
    colaboraciones: ['ICIJ', 'PODER', 'Mexicanos Contra la Corrupción']
  },
  {
    id: 'indela',
    nombre: 'Instituto de Liderazgo Simone de Beauvoir',
    nombreCorto: 'INDELA',
    descripcion: 'Organización feminista que trabaja por la igualdad de género y los derechos de las mujeres, incluyendo seguridad digital con perspectiva de género.',
    mision: 'Promover el liderazgo de las mujeres y la igualdad de género',
    especialidades: ['Liderazgo femenino', 'Seguridad digital feminista', 'Violencia de género digital'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4342, lng: -99.1472 }
    },
    contacto: {
      sitioWeb: 'https://www.debeauvoir.org.mx',
      email: 'contacto@debeauvoir.org.mx',
      twitter: '@INDELA_AC'
    },
    servicios: ['Capacitación en liderazgo', 'Autodefensa digital feminista', 'Investigación de género'],
    alcance: 'nacional',
    fechaFundacion: 2000,
    estado: 'activa',
    verificada: true,
    logros: [
      'Formación de líderes feministas',
      'Investigación sobre violencia digital',
      'Red nacional de mujeres'
    ],
    colaboraciones: ['Luchadoras MX', 'ONU Mujeres', 'Red Nacional de Refugios']
  },
  {
    id: 'comunicacion-comunitaria',
    nombre: 'Red de Comunicación Comunitaria',
    nombreCorto: 'RCC',
    descripcion: 'Red de medios comunitarios y alternativos que promueve el derecho a la comunicación desde las bases.',
    mision: 'Democratizar la comunicación y fortalecer medios comunitarios',
    especialidades: ['Medios comunitarios', 'Comunicación popular', 'Radios libres'],
    tipo: 'colectivo',
    ubicacion: {
      estado: 'Nacional',
      ciudad: 'Red Nacional',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://redcomunicacioncomunitaria.org',
      email: 'info@redcomunicacioncomunitaria.org',
      twitter: '@RedComunitaria'
    },
    servicios: ['Capacitación en medios', 'Defensa del espectro radioeléctrico', 'Comunicación alternativa'],
    alcance: 'nacional',
    fechaFundacion: 2008,
    estado: 'activa',
    verificada: true,
    logros: [
      'Red de 150+ medios comunitarios',
      'Defensa legal del espectro',
      'Formación de comunicadores populares'
    ],
    colaboraciones: ['AMARC', 'CENCOS', 'Redes AC']
  },
  {
    id: 'data-civica',
    nombre: 'Data Cívica',
    nombreCorto: 'Data Cívica',
    descripcion: 'Organización que utiliza datos abiertos y tecnología para resolver problemas sociales y promover la transparencia.',
    mision: 'Usar datos y tecnología para generar impacto social positivo',
    especialidades: ['Datos abiertos', 'Tecnología cívica', 'Análisis de datos', 'Transparencia algorítmica'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4124, lng: -99.1625 }
    },
    contacto: {
      sitioWeb: 'https://datacivica.org',
      email: 'hola@datacivica.org',
      twitter: '@DataCivica'
    },
    servicios: ['Análisis de datos', 'Desarrollo de herramientas', 'Capacitación técnica', 'Consultoría'],
    alcance: 'nacional',
    fechaFundacion: 2016,
    estado: 'activa',
    verificada: true,
    logros: [
      'Plataformas de transparencia',
      'Análisis de gasto público',
      'Herramientas de participación ciudadana'
    ],
    colaboraciones: ['Fundar', 'México Evalúa', 'Open Knowledge México']
  },
  {
    id: 'conectas',
    nombre: 'Conectas Derechos Humanos',
    nombreCorto: 'Conectas',
    descripcion: 'Organización internacional de derechos humanos con trabajo en América Latina, incluyendo México.',
    mision: 'Promover el respeto a los derechos humanos y la justicia social',
    especialidades: ['Derechos humanos', 'Incidencia internacional', 'Seguridad para defensores'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Regional',
      ciudad: 'São Paulo/México',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://conectas.org',
      email: 'conectas@conectas.org',
      twitter: '@conectas'
    },
    servicios: ['Protección a defensores', 'Incidencia internacional', 'Litigio estratégico'],
    alcance: 'regional',
    fechaFundacion: 1999,
    estado: 'activa',
    verificada: true,
    logros: [
      'Casos ante sistema interamericano',
      'Protección de defensores en riesgo',
      'Incidencia en ONU'
    ],
    colaboraciones: ['FIDH', 'OMCT', 'Red Nacional de Organismos Civiles']
  },
  {
    id: 'equis',
    nombre: 'Équis Justicia para las Mujeres',
    nombreCorto: 'ÉQUIS',
    descripcion: 'Organización feminista que trabaja por el acceso de las mujeres a la justicia, incluyendo casos de violencia digital.',
    mision: 'Transformar las instituciones de justicia con perspectiva de género',
    especialidades: ['Justicia con perspectiva de género', 'Violencia contra las mujeres', 'Acceso a la justicia'],
    tipo: 'ong',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.3910, lng: -99.1725 }
    },
    contacto: {
      sitioWeb: 'https://equis.org.mx',
      email: 'contacto@equis.org.mx',
      twitter: '@EquisJusticia'
    },
    servicios: ['Litigio estratégico', 'Capacitación judicial', 'Investigación aplicada'],
    alcance: 'nacional',
    fechaFundacion: 2013,
    estado: 'activa',
    verificada: true,
    logros: [
      'Casos emblemáticos de violencia de género',
      'Capacitación a operadores de justicia',
      'Investigaciones sobre feminicidio'
    ],
    colaboraciones: ['ONU Mujeres', 'INMUJERES', 'Red Nacional de Refugios']
  },
  {
    id: 'rdc',
    nombre: 'Red de Defensoras de Derechos Humanos en México',
    nombreCorto: 'RDC',
    descripcion: 'Red nacional que articula defensoras de derechos humanos para su protección y fortalecimiento.',
    mision: 'Fortalecer la protección y el trabajo de las defensoras de derechos humanos',
    especialidades: ['Protección a defensoras', 'Seguridad integral', 'Articulación feminista'],
    tipo: 'colectivo',
    ubicacion: {
      estado: 'Nacional',
      ciudad: 'Red Nacional',
      coordenadas: { lat: 19.4326, lng: -99.1332 }
    },
    contacto: {
      sitioWeb: 'https://reddefensorasmx.org',
      email: 'info@reddefensorasmx.org',
      twitter: '@RedDefensorasMx'
    },
    servicios: ['Protección integral', 'Acompañamiento legal', 'Formación en seguridad'],
    alcance: 'nacional',
    fechaFundacion: 2010,
    estado: 'activa',
    verificada: true,
    logros: [
      'Red de 300+ defensoras',
      'Protocolos de seguridad integral',
      'Incidencia en mecanismo de protección'
    ],
    colaboraciones: ['Consorcio Oaxaca', 'IM-Defensoras', 'JASS']
  },
  {
    id: 'asilegal',
    nombre: 'Asistencia Legal por los Derechos Humanos',
    nombreCorto: 'AsiLegal',
    descripcion: 'Organización que brinda asistencia legal gratuita a víctimas de violaciones de derechos humanos.',
    mision: 'Garantizar el acceso a la justicia a víctimas de violaciones de derechos humanos',
    especialidades: ['Asistencia legal gratuita', 'Litigio de interés público', 'Derechos de víctimas'],
    tipo: 'legal',
    ubicacion: {
      estado: 'Ciudad de México',
      ciudad: 'Ciudad de México',
      coordenadas: { lat: 19.4285, lng: -99.1597 }
    },
    contacto: {
      sitioWeb: 'https://asilegal.org.mx',
      email: 'contacto@asilegal.org.mx',
      twitter: '@AsiLegalMx'
    },
    servicios: ['Asesoría jurídica gratuita', 'Representación legal', 'Litigio estratégico'],
    alcance: 'nacional',
    fechaFundacion: 2005,
    estado: 'activa',
    verificada: true,
    logros: [
      'Miles de casos atendidos',
      'Precedentes judiciales importantes',
      'Red de abogados voluntarios'
    ],
    colaboraciones: ['CMDPDH', 'Centro Prodh', 'Idheas']
  }
];