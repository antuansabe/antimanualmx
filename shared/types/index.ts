// Tipos base para futuras funcionalidades backend

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  createdAt: Date;
  lastLogin?: Date;
  preferences: UserPreferences;
  progress: UserProgress;
}

export interface UserPreferences {
  notifications: {
    alerts: boolean;
    newsletter: boolean;
    security: boolean;
  };
  privacy: {
    profileVisible: boolean;
    locationSharing: boolean;
  };
  language: 'es' | 'en';
  theme: 'light' | 'dark' | 'auto';
}

export interface UserProgress {
  academia: {
    nivel1: CourseProgress;
    nivel2: CourseProgress;
    nivel3: CourseProgress;
  };
  herramientas: {
    [key: string]: {
      completed: boolean;
      lastUsed?: Date;
      timesUsed: number;
    };
  };
  certificados: Certificate[];
}

export interface CourseProgress {
  started: boolean;
  completed: boolean;
  progress: number; // 0-100
  currentModule: number;
  completedModules: string[];
  timeSpent: number; // en minutos
  lastAccessed?: Date;
}

export interface Certificate {
  id: string;
  type: 'nivel1' | 'nivel2' | 'nivel3' | 'workshop';
  issuedAt: Date;
  validUntil?: Date;
  verificationCode: string;
}

export interface Report {
  id: string;
  type: 'threat' | 'organization' | 'feedback' | 'bug';
  status: 'pending' | 'reviewing' | 'verified' | 'rejected';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  evidence?: string[];
  location?: {
    country: string;
    state?: string;
    city?: string;
  };
  reportedBy: string; // User ID o anónimo
  assignedTo?: string; // Admin/Moderator ID
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}

export interface EmailConfig {
  provider: 'smtp' | 'sendgrid' | 'mailgun';
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  apiKey?: string;
  from: string;
}

export interface AuthConfig {
  jwtSecret: string;
  jwtExpiration: string;
  refreshTokenExpiration: string;
  passwordMinLength: number;
  enableOAuth: boolean;
  oauthProviders: {
    google?: {
      clientId: string;
      clientSecret: string;
    };
    github?: {
      clientId: string;
      clientSecret: string;
    };
  };
}

// Configuración para futuras integraciones
export interface IntegrationConfig {
  analytics?: {
    enabled: boolean;
    provider: 'google' | 'plausible' | 'umami';
    trackingId: string;
  };
  monitoring?: {
    enabled: boolean;
    provider: 'sentry' | 'bugsnag';
    dsn: string;
  };
  storage?: {
    provider: 'local' | 's3' | 'cloudinary';
    bucket?: string;
    region?: string;
    accessKey?: string;
    secretKey?: string;
  };
}