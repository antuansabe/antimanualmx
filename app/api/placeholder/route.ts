// Placeholder para futuras rutas API
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API placeholder - Backend será implementado en el futuro',
    version: '1.0.0',
    status: 'development'
  });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({
    message: 'API placeholder - Backend será implementado en el futuro',
    received: await request.json()
  });
}