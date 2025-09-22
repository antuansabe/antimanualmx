import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BadgeSystem, badgesIniciales } from '@/shared/ui/BadgeSystem';

// Mock de framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('BadgeSystem', () => {
  const mockBadges = [
    {
      id: 'test-1',
      nombre: 'Badge Test 1',
      descripcion: 'Descripción del badge 1',
      icono: '🎯',
      color: 'from-blue-400 to-blue-600',
      desbloqueado: true,
      fechaDesbloqueo: new Date(),
      requisitos: 'Requisitos del badge 1'
    },
    {
      id: 'test-2',
      nombre: 'Badge Test 2',
      descripcion: 'Descripción del badge 2',
      icono: '🏆',
      color: 'from-red-400 to-red-600',
      desbloqueado: false,
      requisitos: 'Requisitos del badge 2'
    }
  ];

  it('renderiza correctamente los badges', () => {
    render(<BadgeSystem badges={mockBadges} />);
    
    expect(screen.getByText('Badge Test 1')).toBeInTheDocument();
    expect(screen.getByText('Badge Test 2')).toBeInTheDocument();
  });

  it('muestra badges desbloqueados con estilo correcto', () => {
    render(<BadgeSystem badges={mockBadges} />);
    
    const badge1 = screen.getByText('Badge Test 1').closest('div');
    const badge2 = screen.getByText('Badge Test 2').closest('div');
    
    expect(badge1?.parentElement).toHaveClass('cursor-pointer');
    expect(badge2?.parentElement).toHaveClass('cursor-not-allowed');
  });

  it('abre modal al hacer clic en badge desbloqueado', () => {
    render(<BadgeSystem badges={mockBadges} />);
    
    const badge1 = screen.getByText('Badge Test 1');
    fireEvent.click(badge1);
    
    // Verificar que el modal se abre con la información correcta
    expect(screen.getByText('Descripción del badge 1')).toBeInTheDocument();
    expect(screen.getByText('Requisitos del badge 1')).toBeInTheDocument();
  });

  it('no abre modal al hacer clic en badge bloqueado', () => {
    render(<BadgeSystem badges={mockBadges} />);
    
    const badge2 = screen.getByText('Badge Test 2');
    fireEvent.click(badge2);
    
    // No debería mostrar el modal
    expect(screen.queryByText('Descripción del badge 2')).not.toBeInTheDocument();
  });

  it('cierra modal al hacer clic en el botón cerrar', () => {
    render(<BadgeSystem badges={mockBadges} />);
    
    const badge1 = screen.getByText('Badge Test 1');
    fireEvent.click(badge1);
    
    const closeButton = screen.getByText('CERRAR');
    fireEvent.click(closeButton);
    
    // El modal debería cerrarse
    expect(screen.queryByText('Descripción del badge 1')).not.toBeInTheDocument();
  });

  it('renderiza badges iniciales correctamente', () => {
    render(<BadgeSystem badges={badgesIniciales} />);
    
    expect(screen.getByText('Primera Línea')).toBeInTheDocument();
    expect(screen.getByText('Defensor Digital')).toBeInTheDocument();
    expect(screen.getByText('Estudioso')).toBeInTheDocument();
  });
});