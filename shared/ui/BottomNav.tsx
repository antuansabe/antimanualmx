'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Stamp } from './Stamp';

interface NavItem {
  href: string;
  icon: string;
  label: string;
  stamped?: boolean;
  classified?: boolean;
}

const navItems: NavItem[] = [
  { href: '/', icon: '📄', label: 'INICIO' },
  { href: '/herramientas', icon: '🚨', label: 'EMERGENCIA', stamped: true },
  { href: '/red', icon: '🤝', label: 'RED' },
  { href: '/academia', icon: '🎓', label: 'ACADEMIA' },
  { href: '/observatorio', icon: '📊', label: 'DATOS', classified: true }
];

export function BottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Spacer to prevent content from being hidden behind bottom nav */}
      <div className="h-20 md:hidden" />
      
      {/* Bottom Navigation */}
      <nav 
        className={`
          fixed bottom-0 left-0 right-0 z-50 md:hidden
          bg-papel-base border-t-2 border-papel-border
          transition-transform duration-300 ease-in-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center justify-center
                  px-2 py-2 rounded-lg
                  transition-all duration-200
                  ${active 
                    ? 'bg-papel-sombra transform scale-105' 
                    : 'hover:bg-papel-sombra/50'
                  }
                `}
              >
                <div className="relative mb-1">
                  <span className={`text-lg ${active ? 'scale-110' : ''} transition-transform`}>
                    {item.icon}
                  </span>
                  
                  {/* Status indicators */}
                  {item.stamped && (
                    <div className="absolute -top-1 -right-1">
                      <Stamp className="text-xs bg-sello-rojo text-white transform rotate-12 scale-75">
                        !
                      </Stamp>
                    </div>
                  )}
                  
                  {item.classified && (
                    <div className="absolute -top-1 -right-1">
                      <Stamp className="text-xs bg-azul-info text-white transform -rotate-12 scale-75">
                        C
                      </Stamp>
                    </div>
                  )}
                </div>
                
                <span 
                  className={`
                    text-xs typewriter font-bold leading-tight text-center
                    ${active ? 'text-sello-rojo' : 'text-tinta-clara'}
                  `}
                >
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {active && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-sello-rojo rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
        
        {/* Government authentication bar */}
        <div className="bg-papel-border px-4 py-1">
          <div className="flex items-center justify-center gap-2">
            <Stamp className="text-xs transform rotate-1">REPÚBLICA DIGITAL</Stamp>
            <span className="texto-pequeno">•</span>
            <span className="texto-pequeno">ACCESO MÓVIL AUTORIZADO</span>
          </div>
        </div>
      </nav>
    </>
  );
}