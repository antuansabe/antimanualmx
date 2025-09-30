/**
 * Variantes de animación centralizadas para Framer Motion
 * Reduce duplicación de imports y definiciones en 12+ archivos
 * Mejora consistencia y reduce bundle size
 */

import { Variants } from 'framer-motion';

/**
 * Animación de contenedor con stagger children
 * Usado en: ObservatorioPage, AcademiaPage, RedPage
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Animación de items individuales (fade + slide up)
 * Usado en: Cards, Expedientes, ListItems
 */
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

/**
 * Fade in simple sin movimiento
 * Usado en: Headers, Títulos, Metadata
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    }
  },
};

/**
 * Fade in con delay
 * Usado en: Elementos secuenciales
 */
export const fadeInDelayed = (delay: number = 0.3): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
    }
  },
});

/**
 * Slide desde arriba
 * Usado en: Navegación, Modales, Alerts
 */
export const slideDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
};

/**
 * Slide desde abajo
 * Usado en: Bottom sheets, Footers
 */
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
};

/**
 * Scale in (zoom in)
 * Usado en: Badges, Stamps, Icons
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
};

/**
 * Pulse animation
 * Usado en: Indicadores activos, Alertas
 */
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },
};

/**
 * Hover scale effect
 * Usado en: Botones, Cards interactivas
 */
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  },
  whileTap: { scale: 0.95 }
};

/**
 * Rotate animation
 * Usado en: Loading spinners, Icons animados
 */
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  },
};

/**
 * Stagger list animation
 * Usado en: Listas de organizaciones, cursos, alertas
 */
export const staggerList: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/**
 * List item fade + slide
 * Para usar con staggerList
 */
export const listItem: Variants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  },
};

/**
 * Animación de modal/overlay
 * Usado en: Modales, Dropdowns, Overlays
 */
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: 'easeIn'
    }
  },
};

/**
 * Backdrop fade
 * Usado en: Backgrounds de modales
 */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15
    }
  },
};
