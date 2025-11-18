/**
 * Navigation Component - Playful Harmony Design System
 * Navegación minimalista japonesa con animaciones suaves
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/shared/utils/cn';

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Herramientas', href: '/herramientas' },
  { label: 'Red', href: '/red' },
  { label: 'Academia', href: '/academia' },
  { label: 'Observatorio', href: '/observatorio' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-mist shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <motion.span
                className="text-2xl md:text-3xl"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                🛡️
              </motion.span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl text-sumi group-hover:text-sakura-500 transition-colors">
                  Antimanual MX
                </span>
                <span className="font-body text-xs text-charcoal hidden sm:block">
                  Resistencia Digital
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg font-display font-medium text-sm',
                    'transition-all duration-normal ease-smooth',
                    'hover:bg-cloud',
                    isActive(link.href)
                      ? 'text-sakura-500'
                      : 'text-charcoal hover:text-sumi'
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sakura via-matcha to-ocean rounded-full"
                      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-cloud transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={mobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center gap-1.5"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="w-full h-0.5 bg-sumi rounded-full origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-full h-0.5 bg-sumi rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="w-full h-0.5 bg-sumi rounded-full origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-sumi/20 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="fixed top-16 right-0 bottom-0 z-50 w-64 bg-white shadow-xl md:hidden"
            >
              <nav className="flex flex-col p-6 gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-xl font-display font-medium',
                        'transition-all duration-normal ease-smooth',
                        isActive(link.href)
                          ? 'bg-gradient-to-r from-sakura-100 to-matcha-100 text-sakura-600 shadow-sm'
                          : 'text-charcoal hover:bg-cloud hover:text-sumi'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer para evitar que el contenido quede debajo del nav fijo */}
      <div className="h-16 md:h-20" />
    </>
  );
}
