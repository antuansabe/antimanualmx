import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data de tendencias semanales
  const tendencias = {
    semanal: [
      { fecha: '2024-01-01', usuarios: 8234, herramientas: 3421, alertas: 45 },
      { fecha: '2024-01-08', usuarios: 8567, herramientas: 3654, alertas: 52 },
      { fecha: '2024-01-15', usuarios: 9123, herramientas: 3987, alertas: 48 },
      { fecha: '2024-01-22', usuarios: 9876, herramientas: 4321, alertas: 67 },
      { fecha: '2024-01-29', usuarios: 10234, herramientas: 4567, alertas: 72 },
      { fecha: '2024-02-05', usuarios: 10987, herramientas: 4876, alertas: 58 },
      { fecha: '2024-02-12', usuarios: 11543, herramientas: 5234, alertas: 63 },
      { fecha: '2024-02-19', usuarios: 12487, herramientas: 5892, alertas: 71 }
    ],
    amenazas: [
      { tipo: 'Phishing', cantidad: 234, porcentaje: 35 },
      { tipo: 'Vigilancia', cantidad: 189, porcentaje: 28 },
      { tipo: 'Censura', cantidad: 156, porcentaje: 23 },
      { tipo: 'Hackeo', cantidad: 67, porcentaje: 10 },
      { tipo: 'Otros', cantidad: 27, porcentaje: 4 }
    ],
    herramientas: [
      { nombre: 'Kit de Emergencia', usos: 1234, porcentaje: 27 },
      { nombre: 'Detector Phishing', usos: 987, porcentaje: 22 },
      { nombre: 'Comunicación Cifrada', usos: 876, porcentaje: 19 },
      { nombre: 'Borrado Seguro', usos: 765, porcentaje: 17 },
      { nombre: 'Botón de Pánico', usos: 654, porcentaje: 15 }
    ],
    actividad: {
      ultimasHoras: [
        { hora: '00:00', acciones: 23 },
        { hora: '04:00', acciones: 12 },
        { hora: '08:00', acciones: 45 },
        { hora: '12:00', acciones: 78 },
        { hora: '16:00', acciones: 89 },
        { hora: '20:00', acciones: 67 }
      ]
    }
  };

  return NextResponse.json(tendencias);
}