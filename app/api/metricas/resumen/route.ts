import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data - en producción vendría de una base de datos
  const resumen = {
    totalUsuarios: 12487,
    usuariosActivos: 3256,
    herramientasUsadas: 45892,
    alertasEmitidas: 234,
    organizacionesAliadas: 23,
    cursosCompletados: 8934,
    certificadosEmitidos: 6234,
    ultimaActualizacion: new Date().toISOString(),
    tendencia: {
      usuarios: '+12.4%',
      herramientas: '+23.8%',
      cursos: '+15.2%'
    }
  };

  return NextResponse.json(resumen);
}