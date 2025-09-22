'use client';

import { useEffect, useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Stamp } from './Stamp';
import confetti from 'canvas-confetti';

interface CertificadoGeneratorProps {
  nombreUsuario: string;
  curso: string;
  nivel: number;
  fecha: Date;
  onClose?: () => void;
}

export function CertificadoGenerator({ 
  nombreUsuario, 
  curso, 
  nivel, 
  fecha,
  onClose 
}: CertificadoGeneratorProps) {
  const certificadoRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [verificacionCode] = useState(() => {
    // Generar código único de verificación
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `ANT-${timestamp}-${random}`.toUpperCase();
  });

  useEffect(() => {
    // Lanzar confetti al montar
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const descargarPDF = async () => {
    if (!certificadoRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificadoRef.current, {
        scale: 2,
        backgroundColor: '#FAF8F3'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`certificado-antimanual-${nombreUsuario.toLowerCase().replace(' ', '-')}.pdf`);
    } catch (error) {
      console.error('Error generando PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const compartir = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `¡Completé el ${curso} en Antimanual!`,
          text: `Acabo de completar el ${curso} - Nivel ${nivel} en Antimanual. ¡Únete al movimiento de activismo digital!`,
          url: typeof window !== 'undefined' ? window.location.origin : ''
        });
      } catch (error) {
        console.error('Error compartiendo:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto">
      <div className="bg-papel-base rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="p-3 sm:p-4 md:p-8">
          {/* Certificado para renderizar */}
          <div 
            ref={certificadoRef}
            className="bg-papel-base p-4 sm:p-8 md:p-12 border-4 sm:border-8 border-double border-tinta-oficial relative overflow-hidden"
            style={{ aspectRatio: '297/210' }}
          >
            {/* Marca de agua de fondo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="text-[200px] font-bold transform rotate-45">
                ANTIMANUAL
              </div>
            </div>
            
            {/* Encabezado */}
            <div className="text-center mb-8 relative z-10">
              <div className="mb-4">
                <Stamp className="text-4xl mx-auto">ANTIMANUAL</Stamp>
              </div>
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold typewriter mb-2">
                CERTIFICADO DE COMPLETACIÓN
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-red-700 font-bold tracking-wider">
                ACTIVISMO DIGITAL COLECTIVO
              </p>
            </div>

            {/* Contenido principal */}
            <div className="text-center space-y-6 relative z-10">
              <p className="text-sm sm:text-lg md:text-xl">
                Por medio del presente documento se certifica que:
              </p>
              
              <div className="py-4">
                <p className="text-lg sm:text-2xl md:text-4xl font-bold typewriter text-red-700 mb-2">
                  {nombreUsuario.toUpperCase()}
                </p>
                <div className="w-32 sm:w-48 h-1 bg-tinta-oficial mx-auto"></div>
              </div>

              <p className="text-sm sm:text-lg md:text-xl">
                Ha completado satisfactoriamente el curso:
              </p>

              <div className="bg-papel-resaltado p-3 sm:p-4 md:p-6 rounded-lg inline-block">
                <p className="text-base sm:text-xl md:text-2xl font-bold mb-2">{curso}</p>
                <p className="text-sm sm:text-lg text-red-700">Nivel {nivel}</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 gap-4 sm:gap-8">
                <div className="text-center">
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2">FECHA DE EMISIÓN</p>
                  <p className="text-xs sm:text-sm font-bold">{fecha.toLocaleDateString('es-MX', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-1 sm:mb-2">
                    <Stamp className="text-xl sm:text-2xl">VERIFICADO</Stamp>
                  </div>
                  <p className="text-xs">Firma Digital Antimanual</p>
                </div>

                <div className="text-center">
                  <p className="text-xs sm:text-sm mb-1 sm:mb-2">CÓDIGO DE VERIFICACIÓN</p>
                  <p className="font-mono text-xs sm:text-sm bg-gray-100 px-2 sm:px-3 py-1 rounded">
                    {verificacionCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Pie de página */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500">
              <p className="margin-note">
                "Cada línea de código es un acto de resistencia"
              </p>
              <p className="mt-1">
                Verifica este certificado en antimanual.mx/verificar
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={descargarPDF}
              disabled={isGenerating}
              className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors
                       font-bold tracking-wider"
            >
              {isGenerating ? 'GENERANDO...' : '📥 DESCARGAR PDF'}
            </button>
            
            <button
              onClick={compartir}
              className="px-6 py-3 bg-papel-base border-2 border-red-700 text-red-700 
                       rounded-lg hover:bg-red-50 transition-colors font-bold tracking-wider"
            >
              📢 COMPARTIR LOGRO
            </button>
            
            {onClose && (
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg 
                         hover:bg-gray-300 transition-colors font-bold tracking-wider"
              >
                CERRAR
              </button>
            )}
          </div>

          {/* Mensaje motivacional */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-2">
              🎓 ¡Felicidades! Ya eres parte del movimiento de resistencia digital.
            </p>
            <p>
              Continúa tu formación y ayuda a otros a proteger sus derechos digitales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}