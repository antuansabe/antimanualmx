'use client';

import { useState } from 'react';
import { Organizacion } from '@/shared/data/organizaciones';
import { Button } from './Button';

export interface FiltrosState {
  busqueda: string;
  tipo: string;
  estado: string;
  especialidad: string;
  alcance: string;
}

interface FiltrosOrganizacionesProps {
  organizaciones: Organizacion[];
  onFiltrosChange: (filtros: FiltrosState) => void;
  onReset: () => void;
}

export default function FiltrosOrganizaciones({ 
  organizaciones, 
  onFiltrosChange, 
  onReset 
}: FiltrosOrganizacionesProps) {
  const [filtros, setFiltros] = useState<FiltrosState>({
    busqueda: '',
    tipo: '',
    estado: '',
    especialidad: '',
    alcance: ''
  });

  // Extraer opciones únicas de las organizaciones
  const tipos = [...new Set(organizaciones.map(org => org.tipo))];
  const estados = [...new Set(organizaciones.map(org => org.ubicacion.estado))];
  const especialidades = [...new Set(organizaciones.flatMap(org => org.especialidades))];
  const alcances = [...new Set(organizaciones.map(org => org.alcance))];

  const handleFiltroChange = (key: keyof FiltrosState, value: string) => {
    const nuevosFiltros = { ...filtros, [key]: value };
    setFiltros(nuevosFiltros);
    onFiltrosChange(nuevosFiltros);
  };

  const resetearFiltros = () => {
    const filtrosVacios: FiltrosState = {
      busqueda: '',
      tipo: '',
      estado: '',
      especialidad: '',
      alcance: ''
    };
    setFiltros(filtrosVacios);
    onReset();
  };

  const hayFiltrosActivos = Object.values(filtros).some(valor => valor !== '');

  return (
    <div className="space-y-4">
      {/* Búsqueda por texto */}
      <div>
        <label className="block text-sm font-bold mb-2 typewriter">
          🔍 BUSCAR ORGANIZACIÓN
        </label>
        <input
          type="text"
          placeholder="Nombre, descripción o especialidad..."
          value={filtros.busqueda}
          onChange={(e) => handleFiltroChange('busqueda', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 typewriter"
        />
      </div>

      {/* Filtros por categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tipo */}
        <div>
          <label className="block text-sm font-bold mb-2 typewriter">
            TIPO
          </label>
          <select
            value={filtros.tipo}
            onChange={(e) => handleFiltroChange('tipo', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 typewriter text-sm"
          >
            <option value="">Todos</option>
            {tipos.map(tipo => (
              <option key={tipo} value={tipo}>
                {tipo.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Estado */}
        <div>
          <label className="block text-sm font-bold mb-2 typewriter">
            UBICACIÓN
          </label>
          <select
            value={filtros.estado}
            onChange={(e) => handleFiltroChange('estado', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 typewriter text-sm"
          >
            <option value="">Todos</option>
            {estados.map(estado => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>

        {/* Especialidad */}
        <div>
          <label className="block text-sm font-bold mb-2 typewriter">
            ESPECIALIDAD
          </label>
          <select
            value={filtros.especialidad}
            onChange={(e) => handleFiltroChange('especialidad', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 typewriter text-sm"
          >
            <option value="">Todas</option>
            {especialidades.map(esp => (
              <option key={esp} value={esp}>
                {esp}
              </option>
            ))}
          </select>
        </div>

        {/* Alcance */}
        <div>
          <label className="block text-sm font-bold mb-2 typewriter">
            ALCANCE
          </label>
          <select
            value={filtros.alcance}
            onChange={(e) => handleFiltroChange('alcance', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 typewriter text-sm"
          >
            <option value="">Todos</option>
            {alcances.map(alcance => (
              <option key={alcance} value={alcance}>
                {alcance.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botón de reset */}
      {hayFiltrosActivos && (
        <div className="text-center">
          <Button
            onClick={resetearFiltros}
            variant="secondary"
            size="sm"
          >
            🗑️ LIMPIAR FILTROS
          </Button>
        </div>
      )}

      {/* Indicadores de filtros activos */}
      {hayFiltrosActivos && (
        <div className="flex flex-wrap gap-2">
          {filtros.busqueda && (
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs typewriter">
              Búsqueda: {filtros.busqueda}
            </span>
          )}
          {filtros.tipo && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs typewriter">
              Tipo: {filtros.tipo}
            </span>
          )}
          {filtros.estado && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs typewriter">
              Estado: {filtros.estado}
            </span>
          )}
          {filtros.especialidad && (
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs typewriter">
              Especialidad: {filtros.especialidad}
            </span>
          )}
          {filtros.alcance && (
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs typewriter">
              Alcance: {filtros.alcance}
            </span>
          )}
        </div>
      )}
    </div>
  );
}