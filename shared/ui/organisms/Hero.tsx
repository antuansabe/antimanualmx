/**
 * Hero Component - Playful Harmony Design System
 * Hero sections con gradientes y animaciones encantadoras
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/cn';
import { H1, Body } from '../atoms/Typography';
import { Button } from '../atoms/Button';

type HeroVariant = 'gradient' | 'minimal' | 'illustrated';
type HeroSize = 'md' | 'lg' | 'xl';

interface HeroProps {
  variant?: HeroVariant;
  size?: HeroSize;
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  illustration?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
}

const sizeStyles: Record<HeroSize, { container: string; spacing: string }> = {
  md: {
    container: 'py-12 md:py-16',
    spacing: 'gap-6',
  },
  lg: {
    container: 'py-16 md:py-24',
    spacing: 'gap-8',
  },
  xl: {
    container: 'py-24 md:py-32',
    spacing: 'gap-10',
  },
};

const variantStyles: Record<HeroVariant, string> = {
  gradient: 'bg-gradient-to-br from-sakura-50 via-cloud to-matcha-50',
  minimal: 'bg-washi',
  illustrated: 'bg-gradient-to-br from-ocean-50 via-lavender-50 to-sunset-50',
};

export function Hero({
  variant = 'gradient',
  size = 'lg',
  title,
  description,
  primaryAction,
  secondaryAction,
  illustration,
  badge,
  className,
}: HeroProps) {
  return (
    <section className={cn(variantStyles[variant], sizeStyles[size].container, className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
          !illustration && 'lg:grid-cols-1 text-center'
        )}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className={cn('flex flex-col', sizeStyles[size].spacing)}
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={!illustration ? 'mx-auto' : ''}
              >
                {badge}
              </motion.div>
            )}

            <H1 className={!illustration ? 'mx-auto' : ''}>
              {title}
            </H1>

            {description && (
              <Body
                color="secondary"
                className={cn('max-w-2xl', !illustration && 'mx-auto')}
              >
                {description}
              </Body>
            )}

            {(primaryAction || secondaryAction) && (
              <div className={cn(
                'flex flex-wrap gap-4',
                !illustration && 'justify-center'
              )}>
                {primaryAction && (
                  <Button
                    color="sakura"
                    size="lg"
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button
                    variant="outline"
                    color="matcha"
                    size="lg"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Illustration */}
          {illustration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="flex items-center justify-center"
            >
              {illustration}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
