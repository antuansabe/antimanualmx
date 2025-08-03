import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CertificadoGenerator } from '@/shared/ui/CertificadoGenerator';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Mock de las librerías
jest.mock('html2canvas');
jest.mock('jspdf');
jest.mock('canvas-confetti');

describe('CertificadoGenerator', () => {
  const mockProps = {
    nombreUsuario: 'Juan Pérez',
    curso: 'Activista Digital Básico',
    nivel: 1,
    fecha: new Date('2024-01-15'),
    onClose: jest.fn(),
  };

  const mockCanvas = {
    toDataURL: jest.fn().mockReturnValue('data:image/png;base64,test'),
  };

  const mockPdf = {
    internal: {
      pageSize: {
        getWidth: jest.fn().mockReturnValue(297),
        getHeight: jest.fn().mockReturnValue(210),
      },
    },
    addImage: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (html2canvas as jest.Mock).mockResolvedValue(mockCanvas);
    (jsPDF as jest.Mock).mockReturnValue(mockPdf);
  });

  it('renderiza el certificado correctamente', () => {
    render(<CertificadoGenerator {...mockProps} />);
    
    expect(screen.getByText('CERTIFICADO DE COMPLETACIÓN')).toBeInTheDocument();
    expect(screen.getByText('JUAN PÉREZ')).toBeInTheDocument();
    expect(screen.getByText('Activista Digital Básico')).toBeInTheDocument();
    expect(screen.getByText('Nivel 1')).toBeInTheDocument();
  });

  it('genera y descarga el PDF al hacer clic en descargar', async () => {
    render(<CertificadoGenerator {...mockProps} />);
    
    const downloadButton = screen.getByText(/DESCARGAR PDF/);
    fireEvent.click(downloadButton);
    
    await waitFor(() => {
      expect(html2canvas).toHaveBeenCalled();
      expect(mockPdf.save).toHaveBeenCalledWith('certificado-antimanual-juan-pérez.pdf');
    });
  });

  it('muestra estado de carga mientras genera el PDF', async () => {
    render(<CertificadoGenerator {...mockProps} />);
    
    const downloadButton = screen.getByText(/DESCARGAR PDF/);
    fireEvent.click(downloadButton);
    
    expect(screen.getByText('GENERANDO...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/DESCARGAR PDF/)).toBeInTheDocument();
    });
  });

  it('genera código de verificación único', () => {
    const { rerender } = render(<CertificadoGenerator {...mockProps} />);
    const code1 = screen.getByText(/ANT-/).textContent;
    
    rerender(<CertificadoGenerator {...mockProps} />);
    const code2 = screen.getByText(/ANT-/).textContent;
    
    expect(code1).not.toBe(code2);
  });

  it('llama a onClose cuando se hace clic en cerrar', () => {
    render(<CertificadoGenerator {...mockProps} />);
    
    const closeButton = screen.getByText('CERRAR');
    fireEvent.click(closeButton);
    
    expect(mockProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('comparte el certificado cuando navigator.share está disponible', async () => {
    const mockShare = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', {
      value: mockShare,
      configurable: true,
    });
    
    render(<CertificadoGenerator {...mockProps} />);
    
    const shareButton = screen.getByText(/COMPARTIR LOGRO/);
    fireEvent.click(shareButton);
    
    await waitFor(() => {
      expect(mockShare).toHaveBeenCalledWith({
        title: '¡Completé el Activista Digital Básico en Antimanual!',
        text: expect.stringContaining('Nivel 1'),
        url: expect.any(String),
      });
    });
  });
});