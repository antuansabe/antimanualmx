'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface SwipeNavigationOptions {
  enabled?: boolean;
  threshold?: number;
  velocityThreshold?: number;
}

// Definir orden de páginas principales para navegación
const PAGE_ORDER = [
  '/',
  '/herramientas',
  '/red',
  '/academia',
  '/observatorio',
  '/contacto'
];

export function useSwipeNavigation(options: SwipeNavigationOptions = {}) {
  const {
    enabled = true,
    threshold = 50,
    velocityThreshold = 0.3
  } = options;

  const router = useRouter();
  const pathname = usePathname();
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchStartTime = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
      touchStartTime.current = Date.now();
      isScrolling.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX.current) return;
      
      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartX.current);
      const deltaY = Math.abs(touch.clientY - touchStartY.current);
      
      // Si el movimiento vertical es mayor, es scroll
      if (deltaY > deltaX) {
        isScrolling.current = true;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || isScrolling.current) {
        touchStartX.current = 0;
        return;
      }

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX.current;
      const deltaTime = Date.now() - touchStartTime.current;
      const velocity = Math.abs(deltaX) / deltaTime;

      // Solo procesar si el swipe es suficientemente largo o rápido
      if (Math.abs(deltaX) < threshold && velocity < velocityThreshold) {
        touchStartX.current = 0;
        return;
      }

      // Encontrar página actual
      const currentIndex = PAGE_ORDER.findIndex(page => {
        if (page === '/' && pathname === '/') return true;
        if (page !== '/' && pathname.startsWith(page)) return true;
        return false;
      });

      if (currentIndex === -1) {
        touchStartX.current = 0;
        return;
      }

      let nextIndex = currentIndex;

      // Swipe right (siguiente página)
      if (deltaX > 0 && currentIndex < PAGE_ORDER.length - 1) {
        nextIndex = currentIndex + 1;
      }
      // Swipe left (página anterior)
      else if (deltaX < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      // Navegar si hay cambio
      if (nextIndex !== currentIndex) {
        router.push(PAGE_ORDER[nextIndex]);
        
        // Haptic feedback si está disponible
        if ('vibrate' in navigator) {
          navigator.vibrate(10);
        }
      }

      touchStartX.current = 0;
    };

    // Solo agregar listeners en móvil
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (isMobile) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [enabled, threshold, velocityThreshold, router, pathname]);

  // Función para obtener página siguiente/anterior
  const getNavigationInfo = () => {
    const currentIndex = PAGE_ORDER.findIndex(page => {
      if (page === '/' && pathname === '/') return true;
      if (page !== '/' && pathname.startsWith(page)) return true;
      return false;
    });

    return {
      currentIndex,
      hasNext: currentIndex < PAGE_ORDER.length - 1,
      hasPrevious: currentIndex > 0,
      nextPage: currentIndex < PAGE_ORDER.length - 1 ? PAGE_ORDER[currentIndex + 1] : null,
      previousPage: currentIndex > 0 ? PAGE_ORDER[currentIndex - 1] : null,
      totalPages: PAGE_ORDER.length
    };
  };

  return {
    getNavigationInfo,
    pageOrder: PAGE_ORDER
  };
}