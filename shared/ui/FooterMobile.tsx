'use client';

export function FooterMobile() {
  return (
    <footer className="footer-mobile">
      {/* Sección de información */}
      <div className="info-section">
        <p className="lema">
          &ldquo;Cada línea de código es un acto de resistencia&rdquo;
        </p>
        <p className="creditos">
          Hecho con ❤️ y rabia por activistas digitales
        </p>
      </div>
      
      {/* Links mínimos */}
      <div className="links-minimos">
        <a href="/privacidad">Privacidad</a>
        <span className="bullet">•</span>
        <a href="https://github.com/antimanual" target="_blank" rel="noopener noreferrer">Código Abierto</a>
        <span className="bullet">•</span>
        <a href="/contacto">Contacto</a>
      </div>
      
      {/* Versión */}
      <div className="version">
        ANTIMANUAL v1.0.0 • {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default FooterMobile;