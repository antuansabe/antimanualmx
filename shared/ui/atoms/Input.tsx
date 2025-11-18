/**
 * Input Component - Playful Harmony Design System
 * Input fields con estilo minimalista y bordes redondeados
 */

'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'default' | 'filled' | 'flushed';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  variant?: InputVariant;
  error?: boolean;
  helperText?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-5 py-3 text-lg rounded-xl',
};

const variantStyles: Record<InputVariant, string> = {
  default: 'border-2 border-mist bg-white hover:border-stone focus:border-sakura-500',
  filled: 'border-2 border-transparent bg-cloud hover:bg-mist focus:bg-white focus:border-sakura-500',
  flushed: 'border-0 border-b-2 border-mist bg-transparent rounded-none hover:border-stone focus:border-sakura-500',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      error = false,
      helperText,
      label,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium font-body text-sumi">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              // Base styles
              'w-full font-body text-sumi placeholder:text-stone',
              'transition-all duration-normal ease-smooth',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              'disabled:opacity-50 disabled:cursor-not-allowed',

              // Variant styles
              variantStyles[variant],

              // Size styles
              sizeStyles[size],

              // Icon padding
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',

              // Error state
              error && 'border-persimmon focus:border-persimmon focus:ring-persimmon/20',

              // Focus ring
              !error && 'focus:ring-sakura-500/20',

              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal">
              {rightIcon}
            </div>
          )}
        </div>

        {helperText && (
          <p
            className={cn(
              'mt-1.5 text-sm font-body',
              error ? 'text-persimmon' : 'text-charcoal'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
