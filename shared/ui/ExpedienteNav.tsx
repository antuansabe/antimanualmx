'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState, useEffect } from 'react';

interface NavItem {
  href: string;
  label: string;
  stamped?: boolean;
  classified?: boolean;
}

interface ExpedienteNavProps {
  items: NavItem[];
  logo?: ReactNode;
  className?: string;
}

const ExpedienteNav = ({ items, logo, className = '' }: ExpedienteNavProps) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only apply scroll behavior on mobile
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`
        bg-papel-base border-b-2 border-papel-border sombra-papel relative
        fixed top-0 left-0 right-0 z-40
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${className}
      `}
    >
      {/* Membrete oficial */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sello-rojo via-dorado-metal to-sello-rojo opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo / Título */}
          <div className="flex items-center">
            {logo && (
              <div className="mr-4 md:mr-8">
                {logo}
              </div>
            )}
            
            {/* Logo/Marca principal - Antimanual */}
            <div className="flex items-center gap-2">
              <div className="typewriter-bold text-xl md:text-2xl text-sello-rojo tracking-wider">
                ANTIMANUAL
              </div>
            </div>
          </div>

          {/* Items de navegación - Hidden on mobile, shown on desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {items.map((item) => {
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3 lg:px-4 py-2 text-sm typewriter relative transition-all duration-200
                    ${active 
                      ? 'bg-papel-sombra text-tinta-oficial border-b-2 border-sello-rojo' 
                      : 'text-tinta-suave hover:text-tinta-oficial hover:bg-papel-sombra/50'
                    }
                    ${item.classified ? 'font-bold' : ''}
                  `}
                >
                  {/* Sello para items especiales */}
                  {item.stamped && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-sello-rojo rounded-full"></div>
                  )}

                  {item.label}

                  {/* Marca clasificado */}
                  {item.classified && (
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-sello-rojo"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile-only indicators */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="text-xs texto-suave typewriter">
              {new Date().toLocaleDateString('es-MX', {
                month: '2-digit',
                day: '2-digit'
              })}
            </div>
          </div>

          {/* Información del expediente - Desktop only */}
          <div className="hidden lg:block text-right">
            <div className="text-xs texto-suave typewriter">
              {new Date().toLocaleDateString('es-MX', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              })}
            </div>
            <div className="text-xs texto-suave typewriter opacity-70">
              FOLIO: #{Math.random().toString(36).substr(2, 8).toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Línea de perforación decorativa */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div 
          className="h-full opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, var(--papel-border) 0px, var(--papel-border) 8px, transparent 8px, transparent 16px)'
          }}
        ></div>
      </div>
    </nav>
  );
};

export default ExpedienteNav;