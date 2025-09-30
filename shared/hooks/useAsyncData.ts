/**
 * Custom hook para manejar estados de carga asíncrona
 * Reduce duplicación de useState/useEffect patterns en 23+ archivos
 */

import { useState, useEffect, useCallback } from 'react';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface UseAsyncDataOptions {
  /** Ejecutar fetch automáticamente al montar */
  immediate?: boolean;
  /** Callback cuando hay éxito */
  onSuccess?: (data: any) => void;
  /** Callback cuando hay error */
  onError?: (error: Error) => void;
}

/**
 * Hook para manejar fetch de datos con estados de loading/error
 *
 * @example
 * ```tsx
 * const { data, loading, error, refetch } = useAsyncData(
 *   () => fetch('/api/metricas').then(r => r.json()),
 *   { immediate: true }
 * );
 * ```
 */
export function useAsyncData<T>(
  fetchFn: () => Promise<T>,
  options: UseAsyncDataOptions = {}
) {
  const { immediate = true, onSuccess, onError } = options;

  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const result = await fetchFn();
      setState({
        data: result,
        loading: false,
        error: null,
      });
      onSuccess?.(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setState({
        data: null,
        loading: false,
        error: errorMessage,
      });
      onError?.(err as Error);
      throw err;
    }
  }, [fetchFn, onSuccess, onError]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate, execute]);

  return {
    ...state,
    refetch: execute,
    reset: () => setState({ data: null, loading: false, error: null }),
  };
}

/**
 * Hook simplificado para fetch de API
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useFetch<MetricasResumen>('/api/metricas/resumen');
 * ```
 */
export function useFetch<T>(url: string, options: UseAsyncDataOptions = {}) {
  return useAsyncData<T>(
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    },
    options
  );
}

/**
 * Hook para múltiples llamadas paralelas
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useParallelFetch([
 *   '/api/metricas/resumen',
 *   '/api/metricas/tendencias',
 *   '/api/metricas/por-estado'
 * ]);
 * ```
 */
export function useParallelFetch<T extends any[]>(
  urls: string[],
  options: UseAsyncDataOptions = {}
) {
  return useAsyncData<T>(
    async () => {
      const responses = await Promise.all(
        urls.map(url =>
          fetch(url).then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
            return res.json();
          })
        )
      );
      return responses as T;
    },
    options
  );
}
