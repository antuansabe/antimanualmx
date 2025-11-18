import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colores - Playful Harmony Palette
      colors: {
        // Primarios
        sakura: {
          50: 'var(--color-sakura-50)',
          100: 'var(--color-sakura-100)',
          200: 'var(--color-sakura-200)',
          300: 'var(--color-sakura-300)',
          DEFAULT: 'var(--color-sakura)',
          500: 'var(--color-sakura-500)',
          600: 'var(--color-sakura-600)',
        },
        matcha: {
          50: 'var(--color-matcha-50)',
          100: 'var(--color-matcha-100)',
          300: 'var(--color-matcha-300)',
          DEFAULT: 'var(--color-matcha)',
          500: 'var(--color-matcha-500)',
          600: 'var(--color-matcha-600)',
        },
        ocean: {
          50: 'var(--color-ocean-50)',
          100: 'var(--color-ocean-100)',
          300: 'var(--color-ocean-300)',
          DEFAULT: 'var(--color-ocean)',
          500: 'var(--color-ocean-500)',
          600: 'var(--color-ocean-600)',
        },
        sunset: {
          50: 'var(--color-sunset-50)',
          100: 'var(--color-sunset-100)',
          300: 'var(--color-sunset-300)',
          DEFAULT: 'var(--color-sunset)',
          500: 'var(--color-sunset-500)',
        },
        lavender: {
          50: 'var(--color-lavender-50)',
          100: 'var(--color-lavender-100)',
          300: 'var(--color-lavender-300)',
          DEFAULT: 'var(--color-lavender)',
          500: 'var(--color-lavender-500)',
        },

        // Neutrales
        washi: 'var(--color-washi)',
        cloud: 'var(--color-cloud)',
        mist: 'var(--color-mist)',
        stone: 'var(--color-stone)',
        charcoal: 'var(--color-charcoal)',
        sumi: 'var(--color-sumi)',
        ink: 'var(--color-ink)',

        // Acentos
        persimmon: 'var(--color-persimmon)',
        bamboo: 'var(--color-bamboo)',
        indigo: 'var(--color-indigo)',
        gold: 'var(--color-gold)',

        // Semánticos
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',

        // Backgrounds
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-elevated': 'var(--bg-elevated)',
      },

      // Tipografía
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        sans: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },

      // Sombras
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        sakura: 'var(--shadow-sakura)',
        matcha: 'var(--shadow-matcha)',
        ocean: 'var(--shadow-ocean)',
      },

      // Border radius
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        full: '9999px',
      },

      // Transiciones
      transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
      },

      transitionTimingFunction: {
        smooth: 'var(--easing-smooth)',
        gentle: 'var(--easing-gentle)',
        spring: 'var(--easing-spring)',
      },

      // Spacing adicional
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },

      // Backdrop blur
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config