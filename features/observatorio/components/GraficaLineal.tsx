'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

interface DatoGrafica {
  [key: string]: string | number;
}

interface GraficaLinealProps {
  datos: DatoGrafica[];
  titulo: string;
  lineas: {
    key: string;
    nombre: string;
    color: string;
  }[];
}

export function GraficaLineal({ datos, titulo, lineas }: GraficaLinealProps) {
  const CustomTooltip = ({ active, payload, label }: {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      color: string;
    }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-papel-base p-3 rounded-lg shadow-lg border border-papel-border">
          <p className="text-sm font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString('es-MX')}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-papel-base rounded-lg p-4 md:p-6 shadow-lg border border-papel-border"
    >
      <h3 className="text-lg md:text-xl font-bold typewriter mb-4">{titulo}</h3>
      
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={datos}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="fecha" 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const fecha = new Date(value);
                return fecha.toLocaleDateString('es-MX', { month: 'short', day: 'numeric' });
              }}
            />
            <YAxis 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString('es-MX')}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '14px' }}
              iconType="line"
            />
            
            {lineas.map((linea) => (
              <Line
                key={linea.key}
                type="monotone"
                dataKey={linea.key}
                name={linea.nombre}
                stroke={linea.color}
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}