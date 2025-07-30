'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui';

interface ContactFormProps {
  organizationId?: string;
  organizationName?: string;
  type: 'general' | 'emergency' | 'collaboration' | 'report';
  onSubmit?: (data: ContactFormData) => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject: string;
  message: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  anonymous: boolean;
  attachments?: File[];
}

const urgencyOptions = {
  low: { label: 'Baja', color: 'bg-green-100 text-green-800', description: 'Consulta general o información' },
  medium: { label: 'Media', color: 'bg-yellow-100 text-yellow-800', description: 'Necesito apoyo pero no es urgente' },
  high: { label: 'Alta', color: 'bg-orange-100 text-orange-800', description: 'Situación que requiere atención pronta' },
  critical: { label: 'Crítica', color: 'bg-red-100 text-red-800', description: 'Emergencia o riesgo inmediato' }
};

const categoryOptions = {
  general: ['Información general', 'Consulta sobre servicios', 'Recursos educativos'],
  emergency: ['Amenazas directas', 'Vigilancia detectada', 'Violencia digital', 'Ataque cibernético'],
  collaboration: ['Propuesta de colaboración', 'Invitación a evento', 'Alianza estratégica'],
  report: ['Reportar amenaza', 'Denunciar violación', 'Información sobre incidente']
};

export default function ContactForm({ organizationId, organizationName, type, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    urgency: 'medium',
    category: '',
    anonymous: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.anonymous && !formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.anonymous && !formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!formData.anonymous && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    if (!formData.category) {
      newErrors.category = 'Selecciona una categoría';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Aquí iría la llamada a la API cuando esté implementada
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (onSubmit) {
        onSubmit(formData);
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error sending form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-4 typewriter">¡MENSAJE ENVIADO!</h3>
        <p className="text-gray-600 mb-6">
          {formData.urgency === 'critical' 
            ? 'Tu mensaje de emergencia ha sido enviado. Recibirás respuesta en las próximas horas.'
            : 'Tu mensaje ha sido enviado correctamente. Recibirás respuesta en 1-2 días hábiles.'
          }
        </p>
        <Button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', organization: '', subject: '', message: '', urgency: 'medium', category: '', anonymous: false }); }}>
          ENVIAR OTRO MENSAJE
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {organizationName && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-800">
            <strong>Contactando:</strong> {organizationName}
          </p>
        </div>
      )}

      {/* Checkbox para contacto anónimo */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="anonymous"
          checked={formData.anonymous}
          onChange={(e) => handleChange('anonymous', e.target.checked)}
          className="w-4 h-4"
        />
        <label htmlFor="anonymous" className="text-sm">
          Enviar mensaje de forma anónima
        </label>
      </div>

      {/* Información personal (solo si no es anónimo) */}
      {!formData.anonymous && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tu nombre completo"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="tu@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="+52 55 1234 5678"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              Organización (opcional)
            </label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => handleChange('organization', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Nombre de tu organización"
            />
          </div>
        </div>
      )}

      {/* Nivel de urgencia */}
      <div>
        <label className="block text-sm font-bold mb-2">
          Nivel de urgencia *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(urgencyOptions).map(([key, option]) => (
            <button
              key={key}
              type="button"
              onClick={() => handleChange('urgency', key)}
              className={`p-3 rounded-lg border-2 text-sm transition-colors ${
                formData.urgency === key
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className={`text-xs px-2 py-1 rounded mb-1 ${option.color}`}>
                {option.label}
              </div>
              <div className="text-xs text-gray-600">
                {option.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Categoría */}
      <div>
        <label className="block text-sm font-bold mb-2">
          Categoría *
        </label>
        <select
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className={`w-full p-3 border rounded-lg ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Selecciona una categoría</option>
          {categoryOptions[type].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
      </div>

      {/* Asunto */}
      <div>
        <label className="block text-sm font-bold mb-2">
          Asunto *
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={`w-full p-3 border rounded-lg ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Describe brevemente tu consulta"
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-sm font-bold mb-2">
          Mensaje *
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={6}
          className={`w-full p-3 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Proporciona todos los detalles relevantes sobre tu situación o consulta..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        <p className="text-xs text-gray-500 mt-1">
          Caracteres: {formData.message.length}/2000
        </p>
      </div>

      {/* Alertas según urgencia */}
      {formData.urgency === 'critical' && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex items-start">
            <div className="text-2xl mr-3">🚨</div>
            <div>
              <p className="font-bold text-red-800">EMERGENCIA:</p>
              <p className="text-red-700 text-sm">
                Si estás en peligro inmediato, considera contactar también: Artículo 19 (911) 
                o tu organización local de derechos humanos.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Información de privacidad */}
      <div className="bg-gray-50 p-4 rounded-lg text-sm">
        <h4 className="font-bold mb-2">🔒 Privacidad y seguridad:</h4>
        <ul className="space-y-1 text-gray-600">
          <li>• Tu información será tratada de forma confidencial</li>
          <li>• Los mensajes críticos tienen prioridad de respuesta</li>
          <li>• Puedes solicitar comunicación por canales cifrados</li>
          {formData.anonymous && (
            <li className="text-blue-600">• Tu mensaje será enviado de forma anónima</li>
          )}
        </ul>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className={formData.urgency === 'critical' ? 'bg-red-600 hover:bg-red-700' : ''}
        >
          {isSubmitting ? 'ENVIANDO...' : 
           formData.urgency === 'critical' ? '🚨 ENVIAR EMERGENCIA' : 'ENVIAR MENSAJE'}
        </Button>
        
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={() => setFormData({ name: '', email: '', phone: '', organization: '', subject: '', message: '', urgency: 'medium', category: '', anonymous: false })}
        >
          LIMPIAR FORMULARIO
        </Button>
      </div>
    </form>
  );
}