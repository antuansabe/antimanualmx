'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

interface SelloAccionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'urgent' | 'approved' | 'stamp';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  children: React.ReactNode;
}

const SelloAccion = forwardRef<HTMLButtonElement, SelloAccionProps>(
  ({ 
    className = '', 
    variant = 'primary', 
    size = 'md', 
    animate = false,
    disabled,
    children, 
    ...props 
  }, ref) => {

    const getVariantStyles = () => {
      const styles = {
        primary: 'btn-stamp sello-oficial transform -rotate-1 hover:rotate-0 hover:scale-105',
        secondary: 'sello-secundario border-2 sombra-papel hover:sombra-elevada transform hover:scale-105',
        urgent: 'btn-stamp sello-urgente transform -rotate-2 hover:rotate-0 hover:scale-110 animate-pulse',
        approved: 'btn-stamp sello-aprobado transform rotate-1 hover:rotate-0 hover:scale-105',
        stamp: 'btn-stamp sello-oficial transform -rotate-3 hover:-rotate-1 hover:scale-105'
      };
      return styles[variant];
    };

    const getSizeStyles = () => {
      const styles = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl'
      };
      return styles[size];
    };

    const combinedClasses = [
      // Base classes
      'inline-flex items-center justify-center',
      'typewriter-bold',
      'transition-all duration-200 ease-in-out',
      'cursor-pointer select-none',
      'focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-30',
      'active:scale-95',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
      // Variant styles
      getVariantStyles(),
      // Size styles
      getSizeStyles(),
      // Animation
      animate && 'stamp-effect',
      // Custom className
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        className={combinedClasses}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SelloAccion.displayName = 'SelloAccion';

export default SelloAccion;