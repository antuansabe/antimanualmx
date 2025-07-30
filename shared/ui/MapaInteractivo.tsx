'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Organizacion } from '@/shared/data/organizaciones';

// Importación dinámica para evitar problemas de SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface MapaInteractivoProps {
  organizaciones: Organizacion[];
  onOrganizacionSelect?: (org: Organizacion) => void;
  altura?: string;
}

export default function MapaInteractivo({ 
  organizaciones, 
  onOrganizacionSelect,
  altura = '400px' 
}: MapaInteractivoProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        className="w-full bg-gray-100 rounded-lg flex items-center justify-center aged-paper"
        style={{ height: altura }}
      >
        <div className="text-center">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="typewriter text-gray-600">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  // Centro de México
  const centroMexico: [number, number] = [23.6345, -102.5528];

  return (
    <div className="w-full rounded-lg overflow-hidden border-2 border-red-200" style={{ height: altura }}>
      <MapContainer
        center={centroMexico}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {organizaciones.map((org) => (
          <Marker
            key={org.id}
            position={[org.ubicacion.coordenadas.lat, org.ubicacion.coordenadas.lng]}
            eventHandlers={{
              click: () => onOrganizacionSelect?.(org)
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-red-700 mb-2 typewriter">
                  {org.nombreCorto}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  {org.descripcion.substring(0, 100)}...
                </p>
                <div className="text-xs text-gray-600 mb-2">
                  📍 {org.ubicacion.ciudad}, {org.ubicacion.estado}
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  🏷️ {org.especialidades.slice(0, 2).join(', ')}
                </div>
                <div className="flex gap-2">
                  <a 
                    href={org.contacto.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700 transition-colors"
                  >
                    Visitar
                  </a>
                  <button 
                    onClick={() => onOrganizacionSelect?.(org)}
                    className="bg-gray-600 text-white px-2 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}