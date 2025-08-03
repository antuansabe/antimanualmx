'use client';

import { useSwipeNavigation } from '@/shared/hooks/useSwipeNavigation';
import { useState, useEffect } from 'react';

interface SwipeIndicatorProps {
  className?: string;
  showOnMobile?: boolean;
}

export default function SwipeIndicator({ 
  className = '', 
  showOnMobile = true 
}: SwipeIndicatorProps) {
  const { getNavigationInfo, pageOrder } = useSwipeNavigation();
  const navInfo = getNavigationInfo();
  const [isVisible, setIsVisible] = useState(true);
  const [justLoaded, setJustLoaded] = useState(true);

  // Solo mostrar en móvil si está habilitado
  if (!showOnMobile) return null;

  // Mapeo de páginas a nombres legibles
  const pageNames: { [key: string]: string } = {
    '/': 'INICIO',
    '/herramientas': 'HERRAMIENTAS',
    '/red': 'RED DE APOYO',
    '/academia': 'ACADEMIA',
    '/observatorio': 'OBSERVATORIO',
    '/contacto': 'CONTACTO'
  };

  // Auto-ocultar después de unos segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setJustLoaded(false);
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Mostrar temporalmente cuando se cambia de página
  useEffect(() => {
    setIsVisible(true);
    setJustLoaded(false);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navInfo.currentIndex]);

  return (
    <div 
      className={`
        fixed bottom-20 left-0 right-0 z-30 pointer-events-none md:hidden 
        transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${className}
      `}
    >
      <div className="flex justify-center">
        <div className="bg-papel-base/95 backdrop-blur-sm border border-papel-border rounded-full px-3 py-1.5 sombra-papel">
          <div className="flex items-center gap-2">
            {/* Indicadores de páginas */}
            <div className="flex gap-1">
              {pageOrder.map((page, index) => (
                <div
                  key={page}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === navInfo.currentIndex
                      ? 'bg-sello-rojo w-6'
                      : index === navInfo.currentIndex - 1 || index === navInfo.currentIndex + 1
                      ? 'bg-dorado-metal'
                      : 'bg-papel-border'
                  }`}
                  title={pageNames[page]}
                />
              ))}
            </div>
          </div>

          {/* Texto de ayuda (solo al inicio) */}
          {justLoaded && (
            <div className="text-xs typewriter text-tinta-clara text-center mt-1 opacity-70 animate-pulse">
              DESLIZAR ←→
            </div>
          )}
        </div>
      </div>
    </div>
  );
}