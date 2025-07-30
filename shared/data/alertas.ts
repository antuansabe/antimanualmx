export interface Alerta {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: 'phishing' | 'vigilancia' | 'censura' | 'violencia' | 'legislacion' | 'vulnerabilidad';
  severidad: 'baja' | 'media' | 'alta' | 'critica';
  ubicacion: {
    tipo: 'nacional' | 'estatal' | 'municipal';
    nombres: string[];
  };
  fechaCreacion: Date;
  fechaExpiracion?: Date;
  fuente: {
    organizacion: string;
    contacto?: string;
  };
  verificada: boolean;
  activa: boolean;
  etiquetas: string[];
  recursos?: string[];
  accionesRecomendadas: string[];
}

export const alertas: Alerta[] = [
  {
    id: 'alert-001',
    titulo: 'Campaña de phishing dirigida a activistas ambientales',
    descripcion: 'Se han detectado correos electrónicos maliciosos que suplantan la identidad de organizaciones ambientales reconocidas para robar credenciales de activistas. Los correos incluyen enlaces a sitios web falsos que replican las páginas de login de plataformas de comunicación segura.',
    categoria: 'phishing',
    severidad: 'alta',
    ubicacion: {
      tipo: 'nacional',
      nombres: ['México']
    },
    fechaCreacion: new Date(Date.now() - 2 * 60 * 60 * 1000), // Hace 2 horas
    fechaExpiracion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // En 7 días
    fuente: {
      organizacion: 'R3D',
      contacto: 'seguridad@r3d.mx'
    },
    verificada: true,
    activa: true,
    etiquetas: ['phishing', 'activistas', 'ambientalistas', 'credenciales'],
    recursos: [
      'https://r3d.mx/alertas/phishing-ambientalistas',
      'https://antimanual.mx/herramientas/phishing-detector'
    ],
    accionesRecomendadas: [
      'Verificar siempre la URL del remitente',
      'No hacer clic en enlaces sospechosos',
      'Usar autenticación de dos factores',
      'Reportar correos sospechosos a seguridad@r3d.mx'
    ]
  },
  {
    id: 'alert-002',
    titulo: 'Incremento en vigilancia digital durante elecciones locales',
    descripcion: 'Organizaciones de monitoreo reportan un aumento significativo en la vigilancia de redes sociales y aplicaciones de mensajería en zonas con elecciones locales. Se recomienda extremar precauciones en comunicaciones sensibles.',
    categoria: 'vigilancia',
    severidad: 'media',
    ubicacion: {
      tipo: 'estatal',
      nombres: ['Jalisco', 'Coahuila', 'Estado de México']
    },
    fechaCreacion: new Date(Date.now() - 24 * 60 * 60 * 1000), // Hace 1 día
    fechaExpiracion: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // En 14 días
    fuente: {
      organizacion: 'Artículo 19',
      contacto: 'seguridad@articulo19.org'
    },
    verificada: true,
    activa: true,
    etiquetas: ['vigilancia', 'elecciones', 'redes sociales', 'mensajería'],
    recursos: [
      'https://articulo19.org/alertas/vigilancia-electoral',
      'https://antimanual.mx/herramientas/comunicacion-cifrada'
    ],
    accionesRecomendadas: [
      'Usar aplicaciones de mensajería cifrada',
      'Evitar comunicaciones sensibles por redes sociales',
      'Activar notificaciones de inicio de sesión',
      'Revisar configuraciones de privacidad'
    ]
  },
  {
    id: 'alert-003',
    titulo: 'Nueva vulnerabilidad en aplicación de videoconferencias',
    descripcion: 'Se descubrió una vulnerabilidad crítica en una popular aplicación de videoconferencias que permite a atacantes acceder a cámaras y micrófonos sin autorización. La vulnerabilidad afecta principalmente a versiones anteriores a la 5.2.1.',
    categoria: 'vulnerabilidad',
    severidad: 'critica',
    ubicacion: {
      tipo: 'nacional',
      nombres: ['Global']
    },
    fechaCreacion: new Date(Date.now() - 6 * 60 * 60 * 1000), // Hace 6 horas
    fechaExpiracion: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // En 30 días
    fuente: {
      organizacion: 'SocialTIC',
      contacto: 'seguridad@socialtic.org'
    },
    verificada: true,
    activa: true,
    etiquetas: ['vulnerabilidad', 'videoconferencias', 'cámara', 'micrófono'],
    recursos: [
      'https://socialtic.org/alertas/vulnerabilidad-videoconferencias',
      'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-XXXX'
    ],
    accionesRecomendadas: [
      'Actualizar inmediatamente a la versión 5.2.1 o superior',
      'Revisar permisos de cámara y micrófono',
      'Considerar alternativas más seguras',
      'Deshabilitar auto-inicio de aplicaciones'
    ]
  },
  {
    id: 'alert-004',
    titulo: 'Propuesta de ley que limitaría el cifrado de extremo a extremo',
    descripcion: 'Se ha presentado una iniciativa de ley en el Congreso que obligaría a las empresas tecnológicas a proporcionar acceso a comunicaciones cifradas a las autoridades. Esta medida podría comprometer significativamente la privacidad digital.',
    categoria: 'legislacion',
    severidad: 'alta',
    ubicacion: {
      tipo: 'nacional',
      nombres: ['México']
    },
    fechaCreacion: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // Hace 3 días
    fechaExpiracion: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // En 60 días
    fuente: {
      organizacion: 'R3D',
      contacto: 'incidencia@r3d.mx'
    },
    verificada: true,
    activa: true,
    etiquetas: ['legislación', 'cifrado', 'privacidad', 'congreso'],
    recursos: [
      'https://r3d.mx/iniciativas/ley-cifrado-2024',
      'https://antimanual.mx/academia/nivel-2/legislacion'
    ],
    accionesRecomendadas: [
      'Contactar a representantes legislativos',
      'Participar en consultas públicas',
      'Difundir información sobre la importancia del cifrado',
      'Unirse a campañas de advocacy'
    ]
  },
  {
    id: 'alert-005',
    titulo: 'Aumento de ataques de doxing contra mujeres periodistas',
    descripcion: 'Las organizaciones de protección a periodistas reportan un incremento del 300% en casos de doxing contra mujeres que cubren temas de corrupción y derechos humanos. Los ataques incluyen publicación de datos personales y amenazas dirigidas.',
    categoria: 'violencia',
    severidad: 'critica',
    ubicacion: {
      tipo: 'nacional',
      nombres: ['México']
    },
    fechaCreacion: new Date(Date.now() - 12 * 60 * 60 * 1000), // Hace 12 horas
    fechaExpiracion: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // En 45 días
    fuente: {
      organizacion: 'Luchadoras',
      contacto: 'emergencias@luchadoras.mx'
    },
    verificada: true,
    activa: true,
    etiquetas: ['doxing', 'mujeres', 'periodistas', 'violencia digital'],
    recursos: [
      'https://luchadoras.mx/protocolo-doxing',
      'https://antimanual.mx/herramientas/boton-panico',
      'https://articulo19.org/proteccion-periodistas'
    ],
    accionesRecomendadas: [
      'Activar protocolos de seguridad digital',
      'Reportar inmediatamente a autoridades',
      'Contactar organizaciones de protección',
      'Documentar todas las amenazas recibidas'
    ]
  },
  {
    id: 'alert-006',
    titulo: 'Bloqueo de sitios web de organizaciones civiles',
    descripcion: 'Múltiples proveedores de internet están bloqueando el acceso a sitios web de organizaciones de la sociedad civil sin orden judicial aparente. Los bloqueos afectan principalmente a organizaciones que monitorean derechos humanos.',
    categoria: 'censura',
    severidad: 'alta',
    ubicacion: {
      tipo: 'estatal',
      nombres: ['Veracruz', 'Guerrero']
    },
    fechaCreacion: new Date(Date.now() - 18 * 60 * 60 * 1000), // Hace 18 horas
    fechaExpiracion: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // En 21 días
    fuente: {
      organizacion: 'R3D',
      contacto: 'censura@r3d.mx'
    },
    verificada: true,
    activa: true,
    etiquetas: ['censura', 'bloqueo', 'sitios web', 'organizaciones civiles'],
    recursos: [
      'https://r3d.mx/reportes/censura-organizaciones',
      'https://antimanual.mx/herramientas/navegacion-anonima'
    ],
    accionesRecomendadas: [
      'Usar VPN para acceder a sitios bloqueados',
      'Reportar bloqueos a organizaciones de derechos digitales',
      'Documentar evidencia del bloqueo',
      'Considerar espejos y sitios alternativos'
    ]
  }
];

// Función para obtener alertas activas por severidad
export const getAlertasPorSeveridad = (severidad: Alerta['severidad']) => {
  return alertas.filter(alerta => alerta.activa && alerta.severidad === severidad);
};

// Función para obtener alertas por ubicación
export const getAlertasPorUbicacion = (ubicacion: string) => {
  return alertas.filter(alerta => 
    alerta.activa && (
      alerta.ubicacion.nombres.includes(ubicacion) ||
      alerta.ubicacion.tipo === 'nacional'
    )
  );
};

// Función para obtener alertas recientes (últimos 7 días)
export const getAlertasRecientes = () => {
  const hace7Dias = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  return alertas.filter(alerta => 
    alerta.activa && alerta.fechaCreacion >= hace7Dias
  );
};