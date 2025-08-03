import Link from 'next/link';
import { Stamp } from './Stamp';

export function FooterGlobal() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-papel-sombra border-t-2 border-papel-border mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Stamp className="text-xl">ANTIMANUAL</Stamp>
            </div>
            <p className="texto-oficial text-sm max-w-md">
              Plataforma de <span className="highlight">activismo digital colectivo</span> que 
              transforma el miedo en poder ciudadano a través de herramientas prácticas, 
              educación accesible y organización comunitaria.
            </p>
            <p className="margin-note mt-4">
              &ldquo;Cada línea de código es un acto de resistencia&rdquo;
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="typewriter-bold text-sm mb-4">ENLACES RÁPIDOS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/herramientas" className="texto-suave hover:text-sello-rojo transition-colors">
                  → Kit de Emergencia
                </Link>
              </li>
              <li>
                <Link href="/red" className="texto-suave hover:text-sello-rojo transition-colors">
                  → Directorio de Organizaciones
                </Link>
              </li>
              <li>
                <Link href="/academia" className="texto-suave hover:text-sello-rojo transition-colors">
                  → Academia Activista
                </Link>
              </li>
              <li>
                <Link href="/observatorio" className="texto-suave hover:text-sello-rojo transition-colors">
                  → Observatorio de Libertades
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto seguro */}
          <div>
            <h3 className="typewriter-bold text-sm mb-4">CONTACTO SEGURO</h3>
            <ul className="space-y-2 text-sm texto-suave">
              <li className="flex items-center gap-2">
                <span className="text-sello-verde">🔒</span>
                <a href="mailto:seguridad@antimanual.mx" className="hover:text-sello-rojo transition-colors">
                  seguridad@antimanual.mx
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sello-verde">🔐</span>
                <span>Signal: +52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sello-verde">🔑</span>
                <a href="#" className="hover:text-sello-rojo transition-colors">
                  Llave PGP
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-papel-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright y licencia */}
            <div className="text-center sm:text-left">
              <p className="texto-pequeno">
                ANTIMANUAL {currentYear} | CÓDIGO ABIERTO | GPL-3.0
              </p>
              <p className="texto-pequeno mt-1">
                Hecho con ❤️ y rabia por activistas para activistas
              </p>
            </div>

            {/* Enlaces legales */}
            <div className="flex gap-4 text-xs">
              <a 
                href="https://github.com/antimanualmx/antimanual" 
                target="_blank" 
                rel="noopener noreferrer"
                className="texto-suave hover:text-sello-rojo transition-colors"
              >
                GitHub
              </a>
              <span className="texto-suave">•</span>
              <Link href="/privacidad" className="texto-suave hover:text-sello-rojo transition-colors">
                Privacidad
              </Link>
              <span className="texto-suave">•</span>
              <Link href="/terminos" className="texto-suave hover:text-sello-rojo transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>

        {/* Sello de verificación */}
        <div className="mt-8 text-center">
          <div className="inline-block">
            <div className="classified text-xs">
              VERIFICADO POR EL PUEBLO
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}