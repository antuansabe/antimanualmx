'use client';

import { useSwipeNavigation } from '@/shared/hooks/useSwipeNavigation';
import SwipeIndicator from './SwipeIndicator';
import { ReactNode } from 'react';

interface SwipeNavigationWrapperProps {
  children: ReactNode;
}

export default function SwipeNavigationWrapper({ children }: SwipeNavigationWrapperProps) {
  // Activar el hook de swipe navigation
  useSwipeNavigation({ 
    enabled: true,
    threshold: 80,
    velocityThreshold: 0.4
  });

  return (
    <div className="page-swipeable swipe-transition">
      {children}
      <SwipeIndicator />
    </div>
  );
}