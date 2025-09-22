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
      colors: {
        'papel-base': 'var(--papel-base)',
        'papel-sombra': 'var(--papel-sombra)',
        'papel-oscuro': 'var(--papel-oscuro)',
        'papel-border': 'var(--papel-border)',
        'tinta-oficial': 'var(--tinta-oficial)',
        'tinta-suave': 'var(--tinta-suave)',
        'tinta-clara': 'var(--tinta-clara)',
        'sello-rojo': 'var(--sello-rojo)',
        'azul-info': 'var(--azul-info)',
        'verde-aprobado': 'var(--verde-aprobado)',
        'naranja-pendiente': 'var(--naranja-pendiente)',
      },
      fontFamily: {
        'oficial': 'var(--font-oficial-base)',
        'texto': 'var(--font-texto)',
      },
    },
  },
  plugins: [],
}

export default config