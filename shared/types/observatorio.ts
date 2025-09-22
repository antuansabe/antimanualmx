/**
 * Tipos centralizados para el módulo del observatorio
 */

/** Métricas de tendencia semanal */
export interface TendenciaItem {
  fecha: string;
  valor: number;
  variacion: number;
}

/** Métricas de amenazas detectadas */
export interface AmenazaMetrica {
  tipo: string;
  cantidad: number;
  porcentaje: number;
}

/** Métricas de uso de herramientas */
export interface HerramientaMetrica {
  nombre: string;
  usos: number;
  porcentaje: number;
}

/** Resumen general de métricas */
export interface MetricasResumen {
  totalUsuarios: number;
  herramientasUsadas: number;
  cursosCompletados: number;
  alertasEmitidas: number;
  tendencia: {
    usuarios: 'subiendo' | 'bajando' | 'estable';
    herramientas: 'subiendo' | 'bajando' | 'estable';
    cursos: 'subiendo' | 'bajando' | 'estable';
  };
  ultimaActualizacion: string;
}

/** Datos de tendencias completos */
export interface TendenciasData {
  semanal: TendenciaItem[];
  amenazas: AmenazaMetrica[];
  herramientas: HerramientaMetrica[];
}

/** Datos por estado geográfico */
export interface EstadoData {
  name: string;
  value: number;
}

/** Estado general del observatorio */
export interface ObservatorioState {
  metricas: MetricasResumen | null;
  tendencias: TendenciasData | null;
  porEstado: EstadoData[];
  loading: boolean;
  error: string | null;
}

/** Acciones del reducer del observatorio */
export type ObservatorioAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: { metricas: MetricasResumen; tendencias: TendenciasData; porEstado: EstadoData[] } }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'RESET' };