'use client';

import { useState } from 'react';
import SelloAccion from '@/shared/ui/SelloAccion';

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
      <div className="text-center py-12 px-4">
        <div className="text-6xl mb-6">📜</div>
        <h3 className="text-xl md:text-2xl typewriter-bold mb-4 text-sello-rojo">¡MENSAJE REGISTRADO OFICIALMENTE!</h3>
        <div className="bg-papel-sombra border border-papel-border p-6 rounded mb-6 sombra-papel">
          <p className="typewriter text-sm text-tinta-suave leading-relaxed">
            {formData.urgency === 'critical' 
              ? 'TU MENSAJE DE EMERGENCIA HA SIDO REGISTRADO EN EL SISTEMA. RECIBIRÁS RESPUESTA EN LAS PRÓXIMAS HORAS.'
              : 'TU MENSAJE HA SIDO INGRESADO AL ARCHIVO OFICIAL. RECIBIRÁS RESPUESTA EN 1-2 DÍAS HÁBILES.'
            }
          </p>
          <div className="mt-4 pt-4 border-t border-papel-border">
            <p className="typewriter text-xs text-tinta-clara">
              FOLIO: #{Math.random().toString(36).substr(2, 8).toUpperCase()}
            </p>
          </div>
        </div>
        <SelloAccion 
          size="lg"
          className="w-full sm:w-auto touch-manipulation min-h-[48px]"
          onClick={() => { 
            setSubmitted(false); 
            setFormData({ name: '', email: '', phone: '', organization: '', subject: '', message: '', urgency: 'medium', category: '', anonymous: false }); 
          }}
        >
          📄 ENVIAR OTRO MENSAJE
        </SelloAccion>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-1">
      {organizationName && (
        <div className="bg-papel-sombra border-l-4 border-dorado-metal p-4 mb-6 sombra-papel">
          <p className="typewriter text-tinta-oficial">
            <span className="typewriter-bold">CONTACTANDO A:</span> {organizationName.toUpperCase()}
          </p>
        </div>
      )}

      {/* Checkbox para contacto anónimo */}
      <div className="flex items-center gap-3 p-4 bg-papel-sombra border border-papel-border rounded">
        <input
          type="checkbox"
          id="anonymous"
          checked={formData.anonymous}
          onChange={(e) => handleChange('anonymous', e.target.checked)}
          className="w-5 h-5 text-sello-rojo bg-papel-base border-papel-border rounded focus:ring-sello-rojo focus:ring-2"
        />
        <label htmlFor="anonymous" className="text-sm typewriter cursor-pointer">
          🔒 ENVIAR MENSAJE DE FORMA ANÓNIMA
        </label>
      </div>

      {/* Información personal (solo si no es anónimo) */}
      {!formData.anonymous && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block typewriter-bold text-sm mb-2">
              NOMBRE COMPLETO *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`input-oficial w-full ${errors.name ? 'border-sello-rojo' : ''}`}
              placeholder="Nombre completo del solicitante"
            />
            {errors.name && <p className="text-sello-rojo text-xs mt-1 typewriter">⚠ {errors.name}</p>}
          </div>

          <div>
            <label className="block typewriter-bold text-sm mb-2">
              CORREO ELECTRÓNICO *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`input-oficial w-full ${errors.email ? 'border-sello-rojo' : ''}`}
              placeholder="correo@dominio.mx"
            />
            {errors.email && <p className="text-sello-rojo text-xs mt-1 typewriter">⚠ {errors.email}</p>}
          </div>

          <div>
            <label className="block typewriter-bold text-sm mb-2">
              TELÉFONO (OPCIONAL)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="input-oficial w-full"
              placeholder="+52 55 1234 5678"
            />
          </div>

          <div>
            <label className="block typewriter-bold text-sm mb-2">
              ORGANIZACIÓN (OPCIONAL)
            </label>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => handleChange('organization', e.target.value)}
              className="input-oficial w-full"
              placeholder="Nombre de la organización"
            />
          </div>
        </div>
      )}

      {/* Nivel de urgencia */}
      <div>
        <label className="block typewriter-bold text-sm mb-2">
          NIVEL DE URGENCIA *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(urgencyOptions).map(([key, option]) => (
            <button
              key={key}
              type="button"
              onClick={() => handleChange('urgency', key)}
              className={`
                p-4 rounded border-2 transition-all duration-200 min-h-[60px] touch-manipulation
                ${formData.urgency === key
                  ? 'border-sello-rojo bg-papel-sombra sombra-papel'
                  : 'border-papel-border bg-papel-base hover:border-dorado-metal hover:bg-papel-sombra'
                }
              `}
            >
              <div className={`
                text-xs typewriter font-bold px-2 py-1 rounded mb-2
                ${formData.urgency === key ? 'bg-sello-rojo text-white' : option.color}
              `}>
                {option.label.toUpperCase()}
              </div>
              <div className="text-xs texto-suave typewriter leading-tight">
                {option.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Categoría */}
      <div>
        <label className="block typewriter-bold text-sm mb-2">
          CATEGORÍA DE LA SOLICITUD *
        </label>
        <select
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className={`input-oficial w-full ${errors.category ? 'border-sello-rojo' : ''}`}
        >
          <option value="">▼ Seleccionar categoría oficial</option>
          {categoryOptions[type].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-sello-rojo text-xs mt-1 typewriter">⚠ {errors.category}</p>}
      </div>

      {/* Asunto */}
      <div>
        <label className="block typewriter-bold text-sm mb-2">
          ASUNTO DE LA COMUNICACIÓN *
        </label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className={`input-oficial w-full ${errors.subject ? 'border-sello-rojo' : ''}`}
          placeholder="Resumen ejecutivo de la solicitud"
        />
        {errors.subject && <p className="text-sello-rojo text-xs mt-1 typewriter">⚠ {errors.subject}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block typewriter-bold text-sm mb-2">
          DESCRIPCIÓN DETALLADA DE LA SOLICITUD *
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={6}
          className={`input-oficial w-full resize-none ${errors.message ? 'border-sello-rojo' : ''}`}
          placeholder="Proporcione todos los detalles relevantes, antecedentes del caso, evidencia disponible y acciones requeridas. Sea específico y conciso en su exposición."
        />
        {errors.message && <p className="text-sello-rojo text-xs mt-1 typewriter">⚠ {errors.message}</p>}
        <div className="flex justify-between items-center mt-2">
          <p className="texto-pequeno">
            Caracteres utilizados: {formData.message.length}/2000
          </p>
          <div className="text-xs bg-papel-sombra px-2 py-1 rounded">
            <span className="typewriter">
              {formData.message.length < 1600 ? '📝 SUFICIENTE' : 
               formData.message.length < 1900 ? '⚠ EXTENSO' : '🚫 LÍMITE'}
            </span>
          </div>
        </div>
      </div>

      {/* Alertas según urgencia */}
      {formData.urgency === 'critical' && (
        <div className="bg-papel-base border-l-4 border-sello-rojo p-4 sombra-papel">
          <div className="flex items-start gap-3">
            <div className="text-2xl text-sello-rojo">🚨</div>
            <div>
              <p className="typewriter-bold text-sello-rojo mb-2">PROTOCOLO DE EMERGENCIA ACTIVADO:</p>
              <p className="typewriter text-xs text-tinta-suave leading-relaxed">
                SI ESTÁS EN PELIGRO INMEDIATO, CONSIDERA CONTACTAR TAMBIÉN: ARTÍCULO 19 (911) 
                O TU ORGANIZACIÓN LOCAL DE DERECHOS HUMANOS.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Información de privacidad */}
      <div className="bg-papel-sombra border border-papel-border p-4 rounded text-sm sombra-papel">
        <h4 className="typewriter-bold mb-3 text-tinta-oficial">🔒 PRIVACIDAD Y SEGURIDAD:</h4>
        <ul className="space-y-2 texto-suave">
          <li className="flex items-start gap-2">
            <span className="text-dorado-metal">•</span>
            <span className="typewriter text-xs">TU INFORMACIÓN SERÁ TRATADA DE FORMA CONFIDENCIAL</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-dorado-metal">•</span>
            <span className="typewriter text-xs">LOS MENSAJES CRÍTICOS TIENEN PRIORIDAD DE RESPUESTA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-dorado-metal">•</span>
            <span className="typewriter text-xs">PUEDES SOLICITAR COMUNICACIÓN POR CANALES CIFRADOS</span>
          </li>
          {formData.anonymous && (
            <li className="flex items-start gap-2">
              <span className="text-sello-rojo">•</span>
              <span className="typewriter text-xs text-sello-rojo">TU MENSAJE SERÁ ENVIADO DE FORMA ANÓNIMA</span>
            </li>
          )}
        </ul>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col gap-4">
        <SelloAccion
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className={`w-full touch-manipulation min-h-[48px] ${
            formData.urgency === 'critical' ? 'sello-urgente' : ''
          }`}
        >
          {isSubmitting ? '📄 PROCESANDO SOLICITUD...' : 
           formData.urgency === 'critical' ? '🚨 ENVIAR EMERGENCIA' : '📤 ENVIAR MENSAJE OFICIAL'}
        </SelloAccion>
        
        <SelloAccion
          type="button"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto touch-manipulation min-h-[44px]"
          onClick={() => setFormData({ name: '', email: '', phone: '', organization: '', subject: '', message: '', urgency: 'medium', category: '', anonymous: false })}
        >
          🗚 LIMPIAR FORMULARIO
        </SelloAccion>
      </div>
    </form>
  );
}