'use client';

import { ReactNode, CSSProperties } from 'react';

interface StampProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}

export function Stamp({ 
  children, 
  className = '', 
  animate = false,
  size = 'md',
  style
}: StampProps) {
  const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-1.5',
    lg: 'text-lg px-4 py-2'
  };

  return (
    <span 
      className={`stamp ${sizeClasses[size]} ${animate ? 'stamp-animate' : ''} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}