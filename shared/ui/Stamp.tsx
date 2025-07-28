'use client';

import { ReactNode } from 'react';

interface StampProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function Stamp({ children, className = '', animate = false }: StampProps) {
  return (
    <span 
      className={`stamp ${animate ? 'stamp-animate' : ''} ${className}`}
    >
      {children}
    </span>
  );
}