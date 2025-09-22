'use client';

import { ReactNode } from 'react';

interface ExpedienteCardProps {
  children: ReactNode;
  variant?: 'default' | 'urgent' | 'classified' | 'approved';
  stamped?: boolean;
  clipped?: boolean;
  perforated?: boolean;
  className?: string;
}

const ExpedienteCard = ({
  children,
  variant = 'default',
  stamped = false,
  clipped = false,
  perforated = false,
  className = ''
}: ExpedienteCardProps) => {
  
  const getVariantStyles = () => {
    const styles = {
      default: 'bg-papel-oscuro border-papel-border',
      urgent: 'bg-papel-oscuro border-sello-rojo border-2 relative',
      classified: 'bg-papel-oscuro border-papel-border relative overflow-hidden',
      approved: 'bg-papel-oscuro border-verde-aprobado border-2'
    };
    return styles[variant];
  };

  const baseClasses = [
    'paper-container',
    'sombra-papel',
    'hover-papel',
    'rounded-sm',
    'p-6',
    'relative',
    'transition-all duration-300 ease-in-out',
    getVariantStyles(),
    perforated && 'perforaciones',
    clipped && 'clip-metal',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {/* Sello oficial si está marcado como stamped */}
      {stamped && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="stamp text-xs px-2 py-1">
            OFICIAL
          </div>
        </div>
      )}

      {/* Marca de agua para expedientes clasificados */}
      {variant === 'classified' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div 
            className="typewriter-bold text-6xl opacity-5 transform -rotate-45 select-none"
            style={{ color: 'var(--tinta-clara)' }}
          >
            PÚBLICO
          </div>
        </div>
      )}

      {/* Banda urgente */}
      {variant === 'urgent' && (
        <div className="absolute -top-1 -left-1 bg-sello-rojo text-white px-2 py-1 text-xs typewriter-bold transform -rotate-2 z-10">
          URGENTE
        </div>
      )}

      {/* Contenido del expediente */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default ExpedienteCard;