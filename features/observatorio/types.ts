export interface MetricasResumen {
  totalUsuarios: number;
  usuariosActivos: number;
  herramientasUsadas: number;
  alertasEmitidas: number;
  organizacionesAliadas: number;
  cursosCompletados: number;
  certificadosEmitidos: number;
  ultimaActualizacion: string;
  tendencia: {
    usuarios: string;
    herramientas: string;
    cursos: string;
  };
}

export interface TendenciasSemanal {
  fecha: string;
  usuarios: number;
  herramientas: number;
  alertas: number;
  [key: string]: string | number;
}

export interface TipoAmenaza {
  tipo: string;
  cantidad: number;
  porcentaje: number;
}

export interface HerramientaUso {
  nombre: string;
  usos: number;
  porcentaje: number;
}

export interface ActividadHora {
  hora: string;
  acciones: number;
}

export interface TendenciasData {
  semanal: TendenciasSemanal[];
  amenazas: TipoAmenaza[];
  herramientas: HerramientaUso[];
  actividad: {
    ultimasHoras: ActividadHora[];
  };
}

export interface EstadoData {
  estado: string;
  codigo: string;
  usuarios: number;
  alertas: number;
  actividad: number;
}