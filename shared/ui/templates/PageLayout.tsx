/**
 * PageLayout Template - Playful Harmony Design System
 * Layout base para todas las páginas con Navigation y Footer
 */

'use client';

import React from 'react';
import { Navigation } from '../organisms/Navigation';
import { Footer } from '../organisms/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export function PageLayout({ children, showFooter = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
