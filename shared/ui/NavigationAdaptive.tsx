'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const menuItems = [
  { href: '/', label: 'INICIO', icon: '🏠', mobileLabel: 'Inicio' },
  { href: '/herramientas', label: 'HERRAMIENTAS', icon: '🔧', mobileLabel: 'Herramientas' },
  { href: '/red', label: 'RED DE APOYO', icon: '🤝', mobileLabel: 'Red' },
  { href: '/academia', label: 'ACADEMIA', icon: '🎓', mobileLabel: 'Academia' },
  { href: '/observatorio', label: 'OBSERVATORIO', icon: '📊', mobileLabel: 'Datos' }
];

export function NavigationAdaptive() {
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };
    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Desktop Navigation (>1024px)
  if (windowWidth > 1024) {
    return (
      <nav className="nav-desktop">
        <div className="nav-container">
          {/* Logo/Sello a la izquierda */}
          <Link href="/" className="logo-link" aria-label="Antimanual - Ir al inicio">
            <div className="sello-nav" role="img" aria-label="Logo oficial Antimanual">
              <span className="texto-sello" aria-hidden="true">ANTIMANUAL</span>
            </div>
          </Link>
          
          {/* Menú horizontal */}
          <div className="menu-horizontal">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`menu-item ${pathname === item.href ? 'activo' : ''}`}
              >
                <span className="texto-menu">{item.label}</span>
                {pathname === item.href && (
                  <motion.div 
                    className="indicador-activo"
                    layoutId="indicador"
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Info del documento */}
          <div className="info-documento">
            <div className="fecha-actual">
              {new Date().toLocaleDateString('es-MX', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
            </div>
            <div className="folio">
              FOLIO: #{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  // Tablet Navigation (768px - 1024px)
  if (windowWidth >= 768 && windowWidth <= 1024) {
    return (
      <nav className="nav-tablet">
        <div className="nav-container">
          <Link href="/" className="logo-compacto" aria-label="Antimanual - Ir al inicio">
            <span aria-hidden="true">ANTIMANUAL</span>
          </Link>
          
          <div className="menu-tablet">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`menu-item-tablet ${pathname === item.href ? 'activo' : ''}`}
              >
                <span className="icono">{item.icon}</span>
                <span className="label-corto">{item.mobileLabel}</span>
                {pathname === item.href && (
                  <motion.div 
                    className="indicator-tablet"
                    layoutId="indicator-tablet"
                    transition={{ type: "spring" }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          <div className="fecha-tablet">
            {new Date().toLocaleDateString('es-MX', {
              month: '2-digit',
              day: '2-digit'
            })}
          </div>
        </div>
      </nav>
    );
  }
  
  // Mobile Navigation (<768px) - Bottom Navigation
  return (
    <>
      {/* Top bar móvil minimalista */}
      <nav className="nav-mobile-top">
        <Link href="/" className="logo-mobile" aria-label="Antimanual - Ir al inicio">
          <span aria-hidden="true">ANTIMANUAL</span>
        </Link>
        <div className="fecha-mobile">
          {new Date().toLocaleDateString('es-MX', {
            month: '2-digit',
            day: '2-digit'
          })}
        </div>
      </nav>
      
      {/* Bottom Navigation */}
      <nav className="nav-mobile">
        {menuItems.slice(0, 4).map((item) => ( // Solo 4 items principales en móvil
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item-mobile ${pathname === item.href ? 'activo' : ''}`}
          >
            <span className="icono-mobile">{item.icon}</span>
            <span className="label-mobile">{item.mobileLabel}</span>
            {pathname === item.href && (
              <motion.div 
                className="punto-activo"
                layoutId="punto"
                transition={{ type: "spring" }}
              />
            )}
          </Link>
        ))}
        
        {/* Menú "Más" para items adicionales */}
        <button 
          className={`nav-item-mobile mas-menu ${showMoreMenu ? 'activo' : ''}`}
          onClick={() => setShowMoreMenu(!showMoreMenu)}
        >
          <span className="icono-mobile">⋯</span>
          <span className="label-mobile">Más</span>
        </button>
        
        {/* Menú desplegable "Más" */}
        {showMoreMenu && (
          <motion.div 
            className="more-menu-overlay"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="more-menu-content">
              {menuItems.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="more-menu-item"
                  onClick={() => setShowMoreMenu(false)}
                >
                  <span className="icono">{item.icon}</span>
                  <span>{item.mobileLabel}</span>
                </Link>
              ))}
              <Link
                href="/contacto"
                className="more-menu-item"
                onClick={() => setShowMoreMenu(false)}
              >
                <span className="icono">📞</span>
                <span>Contacto</span>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}

export default NavigationAdaptive;