'use client';

import { motion } from 'framer-motion';

export function SelloHero() {
  return (
    <motion.div 
      className="sello-hero"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1.5,
        type: "spring",
        bounce: 0.4 
      }}
    >
      <div className="sello-exterior">
        <svg viewBox="0 0 200 200" className="sello-svg">
          {/* Círculo exterior */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="#B91C1C" strokeWidth="3"/>
          
          {/* Texto circular */}
          <defs>
            <path id="texto-circular" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"/>
          </defs>
          <text className="texto-sello">
            <textPath href="#texto-circular" startOffset="0%">
              ACTIVISMO DIGITAL COLECTIVO • RESISTENCIA CIUDADANA •
            </textPath>
          </text>
          
          {/* Centro del sello */}
          <circle cx="100" cy="100" r="60" fill="#B91C1C"/>
          <text x="100" y="90" textAnchor="middle" className="texto-centro">
            ANTI
          </text>
          <text x="100" y="110" textAnchor="middle" className="texto-centro">
            MANUAL
          </text>
          
          {/* Estrellas decorativas */}
          <text x="100" y="130" textAnchor="middle" className="estrellas">★ ★ ★</text>
        </svg>
      </div>
      
      {/* Efecto de brillo animado */}
      <motion.div 
        className="brillo"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity 
        }}
      />
    </motion.div>
  );
}

export default SelloHero;