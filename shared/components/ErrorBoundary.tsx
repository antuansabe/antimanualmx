/**
 * Error Boundary para capturar errores en componentes React
 * Previene que errores en un componente crasheen toda la app
 */

'use client';

import React, { Component, ReactNode } from 'react';
import { Button } from '@/shared/ui/Button';

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Componente fallback personalizado */
  fallback?: ReactNode;
  /** Callback cuando ocurre un error */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /** Título del error */
  errorTitle?: string;
  /** Descripción del error */
  errorDescription?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component con UI en estilo del proyecto
 *
 * @example
 * ```tsx
 * <ErrorBoundary>
 *   <ComponenteThatMightCrash />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
          <div className="liquid-card max-w-2xl w-full">
            <div className="liquid-card-header text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl typewriter-bold text-sello-rojo mb-2">
                {this.props.errorTitle || 'ERROR DEL SISTEMA'}
              </h2>
              <p className="texto-pequeno">
                CÓDIGO DE ERROR: {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
            </div>

            <div className="liquid-card-content">
              <div className="bg-papel-sombra border border-papel-border rounded-lg p-4 mb-6">
                <p className="texto-oficial text-center mb-4">
                  {this.props.errorDescription ||
                    'Ha ocurrido un error inesperado en la aplicación. El equipo técnico ha sido notificado.'}
                </p>

                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm typewriter-bold text-sello-rojo mb-2">
                      Detalles técnicos (solo en desarrollo)
                    </summary>
                    <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto max-h-40">
                      {this.state.error.toString()}
                      {'\n\n'}
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={this.handleReset}
                >
                  🔄 Reintentar
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => window.location.href = '/'}
                >
                  🏠 Ir al inicio
                </Button>
              </div>
            </div>

            <div className="liquid-card-footer text-center">
              <p className="texto-pequeno">
                Si el problema persiste, contacta al soporte técnico
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Error Boundary específico para secciones de página
 * Permite que el resto de la página funcione si una sección falla
 */
export function SectionErrorBoundary({
  children,
  sectionName
}: {
  children: ReactNode;
  sectionName: string;
}) {
  return (
    <ErrorBoundary
      errorTitle={`ERROR EN SECCIÓN: ${sectionName.toUpperCase()}`}
      errorDescription={`La sección "${sectionName}" encontró un problema. El resto de la página continúa funcionando.`}
      fallback={
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-4">
          <div className="text-center">
            <p className="text-red-800 typewriter-bold mb-2">
              ⚠️ Error en sección: {sectionName}
            </p>
            <p className="text-sm text-red-600">
              Esta sección no se pudo cargar correctamente
            </p>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
