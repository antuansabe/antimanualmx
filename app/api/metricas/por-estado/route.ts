import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data por estado de México
  const porEstado = [
    { estado: 'CDMX', codigo: 'MX-CMX', usuarios: 3421, alertas: 45, actividad: 89 },
    { estado: 'Jalisco', codigo: 'MX-JAL', usuarios: 2134, alertas: 23, actividad: 76 },
    { estado: 'Nuevo León', codigo: 'MX-NLE', usuarios: 1876, alertas: 19, actividad: 72 },
    { estado: 'Estado de México', codigo: 'MX-MEX', usuarios: 1654, alertas: 38, actividad: 68 },
    { estado: 'Puebla', codigo: 'MX-PUE', usuarios: 987, alertas: 12, actividad: 54 },
    { estado: 'Guanajuato', codigo: 'MX-GUA', usuarios: 876, alertas: 15, actividad: 51 },
    { estado: 'Veracruz', codigo: 'MX-VER', usuarios: 765, alertas: 28, actividad: 48 },
    { estado: 'Chiapas', codigo: 'MX-CHP', usuarios: 543, alertas: 34, actividad: 45 },
    { estado: 'Oaxaca', codigo: 'MX-OAX', usuarios: 432, alertas: 22, actividad: 42 },
    { estado: 'Yucatán', codigo: 'MX-YUC', usuarios: 321, alertas: 8, actividad: 38 },
    { estado: 'Quintana Roo', codigo: 'MX-ROO', usuarios: 298, alertas: 5, actividad: 35 },
    { estado: 'Sonora', codigo: 'MX-SON', usuarios: 276, alertas: 7, actividad: 32 },
    { estado: 'Chihuahua', codigo: 'MX-CHH', usuarios: 254, alertas: 9, actividad: 30 },
    { estado: 'Coahuila', codigo: 'MX-COA', usuarios: 198, alertas: 4, actividad: 28 },
    { estado: 'Sinaloa', codigo: 'MX-SIN', usuarios: 176, alertas: 11, actividad: 25 },
    { estado: 'Michoacán', codigo: 'MX-MIC', usuarios: 154, alertas: 18, actividad: 23 },
    { estado: 'Querétaro', codigo: 'MX-QUE', usuarios: 143, alertas: 3, actividad: 22 },
    { estado: 'San Luis Potosí', codigo: 'MX-SLP', usuarios: 132, alertas: 6, actividad: 20 },
    { estado: 'Baja California', codigo: 'MX-BCN', usuarios: 121, alertas: 4, actividad: 18 },
    { estado: 'Tamaulipas', codigo: 'MX-TAM', usuarios: 109, alertas: 8, actividad: 16 },
    { estado: 'Guerrero', codigo: 'MX-GRO', usuarios: 98, alertas: 15, actividad: 15 },
    { estado: 'Hidalgo', codigo: 'MX-HID', usuarios: 87, alertas: 2, actividad: 14 },
    { estado: 'Morelos', codigo: 'MX-MOR', usuarios: 76, alertas: 3, actividad: 12 },
    { estado: 'Aguascalientes', codigo: 'MX-AGU', usuarios: 65, alertas: 1, actividad: 10 },
    { estado: 'Durango', codigo: 'MX-DUR', usuarios: 54, alertas: 2, actividad: 8 },
    { estado: 'Zacatecas', codigo: 'MX-ZAC', usuarios: 43, alertas: 1, actividad: 6 },
    { estado: 'Nayarit', codigo: 'MX-NAY', usuarios: 32, alertas: 1, actividad: 5 },
    { estado: 'Tabasco', codigo: 'MX-TAB', usuarios: 28, alertas: 2, actividad: 4 },
    { estado: 'Campeche', codigo: 'MX-CAM', usuarios: 21, alertas: 0, actividad: 3 },
    { estado: 'Tlaxcala', codigo: 'MX-TLA', usuarios: 18, alertas: 0, actividad: 2 },
    { estado: 'Colima', codigo: 'MX-COL', usuarios: 12, alertas: 0, actividad: 2 },
    { estado: 'Baja California Sur', codigo: 'MX-BCS', usuarios: 9, alertas: 0, actividad: 1 }
  ];

  return NextResponse.json(porEstado);
}