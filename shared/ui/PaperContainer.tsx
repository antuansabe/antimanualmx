'use client';

import { ReactNode } from 'react';

interface PaperContainerProps {
  children: ReactNode;
  className?: string;
  aged?: boolean;
}

export function PaperContainer({ children, className = '', aged = false }: PaperContainerProps) {
  return (
    <div className={`${aged ? 'aged-paper' : 'paper-container'} rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}