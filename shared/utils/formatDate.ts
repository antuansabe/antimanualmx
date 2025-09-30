/**
 * Utilidades centralizadas para formateo de fechas
 * Elimina duplicación de código en 7+ archivos
 */

/**
 * Formatea fecha actual en formato mexicano largo
 * @returns Fecha formateada: "30 de septiembre de 2025"
 */
export const formatMexicanDate = (): string => {
  return new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Formatea fecha actual en formato corto para headers
 * @returns Fecha formateada: "30/09/2025"
 */
export const formatShortDate = (): string => {
  return new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

/**
 * Formatea fecha actual en formato mes/día para vistas compactas
 * @returns Fecha formateada: "09/30"
 */
export const formatCompactDate = (): string => {
  return new Date().toLocaleDateString('es-MX', {
    month: '2-digit',
    day: '2-digit'
  });
};

/**
 * Obtiene año actual para folios y documentos
 * @returns Año actual: "2025"
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

/**
 * Genera folio único basado en fecha y random
 * @returns Folio: "DNA-2025-A7K9X2"
 */
export const generateFolio = (prefix: string = 'DNA'): string => {
  const year = getCurrentYear();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${year}-${random}`;
};
