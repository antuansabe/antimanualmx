'use client';

import { useState, useEffect } from 'react';

interface TypewriterTitleProps {
  text: string;
  className?: string;
  speed?: number;
}

const TypewriterTitle = ({ 
  text, 
  className = '', 
  speed = 120 
}: TypewriterTitleProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Verificar si ya se ejecutó la animación
    const hasPlayed = localStorage.getItem('antimanual-typewriter-played');
    
    // Verificar preferencias de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (hasPlayed === 'true' || prefersReducedMotion) {
      // Mostrar texto completo inmediatamente
      setDisplayText(text);
      setIsComplete(true);
      setShowCursor(false);
      return;
    }

    // Ejecutar animación de escritura
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        // Marcar como ejecutado en localStorage
        localStorage.setItem('antimanual-typewriter-played', 'true');
        
        // Iniciar animación de cursor parpadeante
        setTimeout(() => {
          setShowCursor(true);
        }, 100);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  // Animación de cursor parpadeante
  useEffect(() => {
    if (!isComplete) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Parpadeo cada ~530ms

    return () => clearInterval(cursorInterval);
  }, [isComplete]);

  return (
    <span className={`${className} relative`}>
      {displayText}
      {isComplete && (
        <span 
          className={`inline-block w-0.5 h-[1em] bg-current ml-1 transition-opacity duration-75 ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ verticalAlign: 'text-top' }}
        />
      )}
    </span>
  );
};

export default TypewriterTitle;