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
        className="w-full bg-papel-base border-2 border-papel-border flex items-center justify-center"
        style={{ height: altura }}
      >
        <div className="text-center p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <p className="typewriter" style={{color: '#1A1A1A'}}>CARGANDO CARTOGRAFÍA NACIONAL...</p>
          <div className="mt-4 border-t border-papel-border pt-4">
            <p className="texto-pequeno" style={{color: '#1A1A1A'}}>INSTITUTO CARTOGRÁFICO DIGITAL</p>
          </div>
        </div>
      </div>
    );
  }

  // Centro de México
  const centroMexico: [number, number] = [23.6345, -102.5528];

  return (
    <div className="w-full overflow-hidden border-2 border-papel-border vintage-map" style={{ height: altura }}>
      <MapContainer
        center={centroMexico}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        className="z-0 vintage-map-container"
      >
        <TileLayer
          attribution='INSTITUTO CARTOGRÁFICO DIGITAL • REPÚBLICA DE MÉXICO'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="vintage-tiles"
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
              <div className="p-4 min-w-[250px] bg-papel-base border border-papel-border">
                <div className="border-b border-papel-border pb-2 mb-3">
                  <p className="texto-pequeno mb-1" style={{color: '#1A1A1A'}}>EXPEDIENTE ORG-{org.id.toUpperCase()}</p>
                  <h3 className="font-bold typewriter" style={{ color: '#B91C1C' }}>
                    {org.nombreCorto}
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{color: '#1A1A1A', fontFamily: 'Georgia, serif'}}>
                  {org.descripcion.substring(0, 120)}...
                </p>
                <div className="space-y-1 mb-4">
                  <div className="text-xs" style={{color: '#1A1A1A'}}>
                    📍 <strong>Ubicación:</strong> {org.ubicacion.ciudad}, {org.ubicacion.estado}
                  </div>
                  <div className="text-xs" style={{color: '#1A1A1A'}}>
                    🏷️ <strong>Especialidad:</strong> {org.especialidades.slice(0, 2).join(', ')}
                  </div>
                  <div className="text-xs" style={{color: '#1A1A1A'}}>
                    📡 <strong>Alcance:</strong> {org.alcance}
                  </div>
                </div>
                <div className="flex gap-2 border-t border-papel-border pt-3">
                  <a
                    href={org.contacto.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sello-rojo text-white px-3 py-1 text-xs typewriter transform -rotate-1 hover:rotate-0 transition-all"
                  >
                    SITIO OFICIAL
                  </a>
                  <button
                    onClick={() => onOrganizacionSelect?.(org)}
                    className="bg-papel-sombra border border-papel-border px-3 py-1 text-xs typewriter transform rotate-1 hover:rotate-0 transition-all"
                    style={{color: '#1A1A1A'}}
                  >
                    EXPEDIENTE
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