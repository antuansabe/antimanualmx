/**
 * Footer Component - Playful Harmony Design System
 * Footer minimalista con gradientes sutiles
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  herramientas: [
    { label: 'Detector de Phishing', href: '/herramientas/phishing-detector' },
    { label: 'Comunicación Cifrada', href: '/herramientas/comunicacion-cifrada' },
    { label: 'Borrado Seguro', href: '/herramientas/borrado-seguro' },
    { label: 'Botón de Pánico', href: '/herramientas/boton-panico' },
  ],
  recursos: [
    { label: 'Red de Apoyo', href: '/red' },
    { label: 'Alertas', href: '/red/alertas' },
    { label: 'Academia', href: '/academia' },
    { label: 'Observatorio', href: '/observatorio' },
  ],
  legal: [
    { label: 'Metodología', href: '/metodologia' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-washi via-cloud to-sakura-50 border-t border-mist">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sakura via-matcha via-ocean to-lavender opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <motion.span
                className="text-3xl"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                🛡️
              </motion.span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-sumi group-hover:text-sakura-500 transition-colors">
                  Antimanual MX
                </span>
                <span className="font-body text-sm text-charcoal">
                  Resistencia Digital
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-charcoal leading-relaxed">
              Guía de seguridad digital y activismo para defensores de derechos humanos en México.
            </p>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="font-display font-bold text-base text-sumi mb-4">
              Herramientas
            </h3>
            <ul className="space-y-2">
              {footerLinks.herramientas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-charcoal hover:text-sakura-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-matcha group-hover:bg-sakura-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-display font-bold text-base text-sumi mb-4">
              Recursos
            </h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-charcoal hover:text-ocean-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ocean group-hover:bg-ocean-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal y Contacto */}
          <div>
            <h3 className="font-display font-bold text-base text-sumi mb-4">
              Información
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-charcoal hover:text-lavender-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-lavender group-hover:bg-lavender-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-mist">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-charcoal text-center md:text-left">
              © {new Date().getFullYear()} Antimanual MX. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="font-body text-xs text-stone">Hecho con</span>
              <motion.span
                className="text-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                💜
              </motion.span>
              <span className="font-body text-xs text-stone">para la resistencia digital</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
