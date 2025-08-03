'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

interface GraficaDonutProps {
  datos: {
    nombre: string;
    valor: number;
    porcentaje: number;
  }[];
  titulo: string;
  colores?: string[];
}

const COLORES_DEFAULT = [
  '#DC2626', // Rojo antimanual
  '#F59E0B', // Amarillo
  '#10B981', // Verde
  '#3B82F6', // Azul
  '#8B5CF6', // Morado
  '#EC4899', // Rosa
];

export function GraficaDonut({ datos, titulo, colores = COLORES_DEFAULT }: GraficaDonutProps) {
  const CustomTooltip = ({ active, payload }: {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      payload: {
        porcentaje: number;
      };
    }>;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-papel-base p-3 rounded-lg shadow-lg border border-papel-border">
          <p className="font-medium text-sm">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            {payload[0].value.toLocaleString('es-MX')} ({payload[0].payload.porcentaje}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = (entry: { porcentaje: number }) => {
    return `${entry.porcentaje}%`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-papel-base rounded-lg p-4 md:p-6 shadow-lg border border-papel-border"
    >
      <h3 className="text-lg md:text-xl font-bold typewriter mb-4">{titulo}</h3>
      
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={datos}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey="valor"
            >
              {datos.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value: string) => (
                <span className="text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}