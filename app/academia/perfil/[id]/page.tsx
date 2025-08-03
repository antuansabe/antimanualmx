import { ExpedienteCard, Stamp } from '@/shared/ui';
import Link from 'next/link';

export default async function PerfilPublicoPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-8">
        <Link href="/" className="flex items-center gap-4">
          <Stamp>ANTIMANUAL</Stamp>
          <span className="typewriter text-sm text-gray-600">
            / PERFIL PÚBLICO
          </span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        <ExpedienteCard variant="default">
          <div className="text-center">
            <div className="text-6xl mb-6">🛡️</div>
            
            <h1 className="text-2xl font-bold typewriter mb-4">
              ACTIVISTA #{id.toUpperCase()}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Este activista es parte del movimiento de resistencia digital.
            </p>
            
            <div className="bg-papel-resaltado rounded-lg p-6 mb-8 inline-block">
              <p className="text-sm text-gray-600 mb-2">
                Para ver más detalles sobre este perfil, únete a la plataforma:
              </p>
              <Link href="/academia">
                <button className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors font-bold">
                  ÚNETE AL MOVIMIENTO
                </button>
              </Link>
            </div>
            
            <div className="text-sm text-gray-500">
              <p className="margin-note">
                &ldquo;Nadie se defiende solo&rdquo;
              </p>
            </div>
          </div>
        </ExpedienteCard>
      </main>
    </div>
  );
}