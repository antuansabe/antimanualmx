/**
 * Componente LiquidCard centralizado
 * Elimina duplicación de 50+ instancias de markup similar
 */

import { ReactNode } from 'react';

export interface LiquidCardProps {
  /** Contenido del header (título y metadatos) */
  header?: ReactNode;
  /** Contenido principal del card */
  children: ReactNode;
  /** Contenido del footer (botones, metadata) */
  footer?: ReactNode;
  /** Variante visual del card */
  variant?: 'default' | 'expediente' | 'classified' | 'academia';
  /** Clases CSS adicionales */
  className?: string;
}

/**
 * Card con estética liquid glass usado en todo el proyecto
 * Centraliza el diseño de cards para mantener consistencia
 */
export function LiquidCard({
  header,
  children,
  footer,
  variant = 'default',
  className = ''
}: LiquidCardProps) {
  const variantClasses = {
    default: 'liquid-card',
    expediente: 'expediente-liquid-card',
    classified: 'liquid-card classified-variant',
    academia: 'academia-card-unified'
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {header && (
        <div className="liquid-card-header">
          {header}
        </div>
      )}

      <div className="liquid-card-content">
        {children}
      </div>

      {footer && (
        <div className="liquid-card-footer">
          {footer}
        </div>
      )}
    </div>
  );
}

/**
 * Header component para usar dentro de LiquidCard
 */
export interface LiquidCardHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function LiquidCardHeader({
  title,
  subtitle,
  className = ''
}: LiquidCardHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-lg md:text-xl typewriter-bold">{title}</h2>
      {subtitle && (
        <p className="texto-pequeno mt-1">{subtitle}</p>
      )}
    </div>
  );
}

/**
 * Footer component para usar dentro de LiquidCard
 */
export interface LiquidCardFooterProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function LiquidCardFooter({
  children,
  className = '',
  centered = true
}: LiquidCardFooterProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {children}
    </div>
  );
}
