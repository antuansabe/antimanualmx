// Utilidades para futuras llamadas API
import { APIResponse } from '../types';

// Configuración base para futuras APIs
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Wrapper para fetch con manejo de errores consistente
export async function apiCall<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  try {
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      }
    };
  }
}

// Funciones específicas para futuras APIs

export const userAPI = {
  async getProfile(userId: string) {
    return apiCall(`/users/${userId}`);
  },
  
  async updateProfile(userId: string, data: any) {
    return apiCall(`/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  
  async getProgress(userId: string) {
    return apiCall(`/users/${userId}/progress`);
  }
};

export const coursesAPI = {
  async getCourse(courseId: string) {
    return apiCall(`/courses/${courseId}`);
  },
  
  async updateProgress(userId: string, courseId: string, progress: any) {
    return apiCall(`/courses/${courseId}/progress`, {
      method: 'POST',
      body: JSON.stringify({ userId, progress })
    });
  }
};

export const reportsAPI = {
  async create(report: any) {
    return apiCall('/reports', {
      method: 'POST',
      body: JSON.stringify(report)
    });
  },
  
  async getAll(filters?: any) {
    const params = filters ? `?${new URLSearchParams(filters)}` : '';
    return apiCall(`/reports${params}`);
  }
};

export const alertsAPI = {
  async getActive() {
    return apiCall('/alerts/active');
  },
  
  async create(alert: any) {
    return apiCall('/alerts', {
      method: 'POST',
      body: JSON.stringify(alert)
    });
  }
};

export const organizationsAPI = {
  async getAll(filters?: any) {
    const params = filters ? `?${new URLSearchParams(filters)}` : '';
    return apiCall(`/organizations${params}`);
  },
  
  async getById(id: string) {
    return apiCall(`/organizations/${id}`);
  },
  
  async suggest(data: any) {
    return apiCall('/organizations/suggest', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

// Utilidad para validar datos antes de enviar
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('La contraseña debe tener al menos 8 caracteres');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Debe contener al menos una letra mayúscula');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Debe contener al menos una letra minúscula');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Debe contener al menos un número');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Función para generar IDs únicos temporales
export function generateTempId(): string {
  return `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Función para formatear fechas consistentemente
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Función para manejar errores de forma consistente
export function handleAPIError(error: any): string {
  if (error?.error?.message) {
    return error.error.message;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  return 'Ha ocurrido un error inesperado. Por favor, intenta de nuevo.';
}