/**
 * Button Component - Playful Harmony Design System
 * Botones con estilo minimalista japonés y micro-animaciones encantadoras
 */

'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonColor = 'sakura' | 'matcha' | 'ocean' | 'sunset' | 'lavender' | 'persimmon' | 'gold' | 'indigo';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'color'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'shadow-md hover:shadow-lg active:shadow-sm',
  secondary: 'text-sumi bg-cloud hover:bg-mist shadow-sm hover:shadow-md',
  outline: 'bg-transparent border-2 shadow-sm hover:shadow-md',
  ghost: 'bg-transparent hover:bg-cloud/50',
  danger: 'text-white bg-persimmon hover:bg-persimmon/90 shadow-md hover:shadow-lg',
};

const colorStyles: Record<ButtonColor, { primary: string; outline: string; ghost: string }> = {
  sakura: {
    primary: 'bg-sakura-500 hover:bg-sakura-600 text-white',
    outline: 'border-sakura text-sakura-500 hover:bg-sakura-50',
    ghost: 'text-sakura-500 hover:text-sakura-600',
  },
  matcha: {
    primary: 'bg-matcha-500 hover:bg-matcha-600 text-white',
    outline: 'border-matcha text-matcha-500 hover:bg-matcha-50',
    ghost: 'text-matcha-500 hover:text-matcha-600',
  },
  ocean: {
    primary: 'bg-ocean-500 hover:bg-ocean-600 text-white',
    outline: 'border-ocean text-ocean-500 hover:bg-ocean-50',
    ghost: 'text-ocean-500 hover:text-ocean-600',
  },
  sunset: {
    primary: 'bg-sunset-500 hover:bg-sunset-600 text-sumi',
    outline: 'border-sunset text-sunset-500 hover:bg-sunset-50',
    ghost: 'text-sunset-500 hover:text-sunset/80',
  },
  lavender: {
    primary: 'bg-lavender-500 hover:bg-lavender-600 text-white',
    outline: 'border-lavender text-lavender-500 hover:bg-lavender-50',
    ghost: 'text-lavender-500 hover:text-lavender/80',
  },
  persimmon: {
    primary: 'bg-persimmon hover:bg-persimmon/90 text-white',
    outline: 'border-persimmon text-persimmon hover:bg-persimmon/10',
    ghost: 'text-persimmon hover:text-persimmon/80',
  },
  gold: {
    primary: 'bg-gold-500 hover:bg-gold-600 text-sumi',
    outline: 'border-gold text-gold-500 hover:bg-gold-50',
    ghost: 'text-gold-500 hover:text-gold-600',
  },
  indigo: {
    primary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    outline: 'border-indigo text-indigo-500 hover:bg-indigo-50',
    ghost: 'text-indigo-500 hover:text-indigo-600',
  },
};

const sizeStyles: Record<ButtonSize, { button: string; icon: string }> = {
  sm: {
    button: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
    icon: 'w-4 h-4',
  },
  md: {
    button: 'px-4 py-2 text-base rounded-lg gap-2',
    icon: 'w-5 h-5',
  },
  lg: {
    button: 'px-6 py-3 text-lg rounded-xl gap-2.5',
    icon: 'w-6 h-6',
  },
  xl: {
    button: 'px-8 py-4 text-xl rounded-2xl gap-3',
    icon: 'w-7 h-7',
  },
};

const buttonAnimation = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export function Button({
  variant = 'primary',
  size = 'md',
  color = 'sakura',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  // Determinar el estilo de color según la variante
  const getColorClass = () => {
    if (variant === 'danger') return '';
    if (variant === 'secondary') return '';
    if (variant === 'outline') return colorStyles[color].outline;
    if (variant === 'ghost') return colorStyles[color].ghost;
    return colorStyles[color].primary; // primary variant
  };

  return (
    <motion.button
      variants={buttonAnimation}
      initial="rest"
      whileHover={!isDisabled ? "hover" : undefined}
      whileTap={!isDisabled ? "tap" : undefined}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      disabled={isDisabled}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'font-display font-medium',
        'transition-all duration-normal ease-smooth',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',

        // Variant styles
        variantStyles[variant],

        // Color styles
        getColorClass(),

        // Size styles
        sizeStyles[size].button,

        // Full width
        fullWidth && 'w-full',

        // Focus ring color
        variant === 'danger' ? 'focus-visible:ring-persimmon' : `focus-visible:ring-${color}-500`,

        className
      )}
      {...props}
    >
      {loading && (
        <motion.div
          className={cn('animate-spin', sizeStyles[size].icon)}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </motion.div>
      )}

      {!loading && leftIcon && (
        <span className={cn('flex-shrink-0', sizeStyles[size].icon)}>
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {!loading && rightIcon && (
        <span className={cn('flex-shrink-0', sizeStyles[size].icon)}>
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
}

// Botones pre-configurados para casos comunes
export const PrimaryButton = (props: Omit<ButtonProps, 'variant'>) =>
  <Button variant="primary" {...props} />;

export const SecondaryButton = (props: Omit<ButtonProps, 'variant'>) =>
  <Button variant="secondary" {...props} />;

export const OutlineButton = (props: Omit<ButtonProps, 'variant'>) =>
  <Button variant="outline" {...props} />;

export const GhostButton = (props: Omit<ButtonProps, 'variant'>) =>
  <Button variant="ghost" {...props} />;

export const DangerButton = (props: Omit<ButtonProps, 'variant'>) =>
  <Button variant="danger" {...props} />;
