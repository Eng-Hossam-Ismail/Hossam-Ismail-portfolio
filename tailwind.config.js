/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'Tajawal', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      colors: {
        // Steel — primary engineering brand color
        steel: {
          50: '#f0f5f8',
          100: '#dbe7ee',
          200: '#bcd3df',
          300: '#8eb6c8',
          400: '#5a8fa9',
          500: '#3d728d',
          600: '#305b73',
          700: '#294b5e',
          800: '#253f4f',
          900: '#223543',
          950: '#16242f',
        },
        // Accent — restrained copper/amber, used sparingly
        copper: {
          50: '#fdf7f0',
          100: '#faecd9',
          200: '#f4d4ad',
          300: '#ecb576',
          400: '#e2913f',
          500: '#d9761f',
          600: '#bf5d15',
          700: '#9d4516',
          800: '#803919',
          900: '#6a3018',
          950: '#3c1809',
        },
        success: {
          50: '#f0faf4', 100: '#d6f5e1', 200: '#b0e9c8', 300: '#7dd6a8',
          400: '#43bd82', 500: '#1fa067', 600: '#128051', 700: '#0f6642',
          800: '#105137', 900: '#0d432d', 950: '#042719',
        },
        warning: {
          50: '#fff9eb', 100: '#ffefc6', 200: '#ffe088', 300: '#ffc94a',
          400: '#ffb320', 500: '#f99007', 600: '#dd6d02', 700: '#b74f06',
          800: '#943e0c', 900: '#7a330d', 950: '#461a02',
        },
        error: {
          50: '#fdf2f2', 100: '#fce4e4', 200: '#facece', 300: '#f8aaa9',
          400: '#f37372', 500: '#e84847', 600: '#d31f1f', 700: '#b01516',
          800: '#921516', 900: '#7a171a', 950: '#430809',
        },
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'elevate': '0 1px 2px rgba(15, 30, 40, 0.04), 0 4px 12px rgba(15, 30, 40, 0.06)',
        'elevate-md': '0 2px 4px rgba(15, 30, 40, 0.05), 0 8px 24px rgba(15, 30, 40, 0.08)',
        'elevate-lg': '0 4px 8px rgba(15, 30, 40, 0.06), 0 16px 40px rgba(15, 30, 40, 0.12)',
        'glow': '0 0 0 1px rgba(58, 114, 141, 0.18), 0 8px 32px rgba(58, 114, 141, 0.18)',
      },
      backgroundImage: {
        'blueprint': "linear-gradient(rgba(58,114,141,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,114,141,0.06) 1px, transparent 1px)",
        'blueprint-dark': "linear-gradient(rgba(142,182,200,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(142,182,200,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'draw-line': 'draw-line 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      transitionTimingFunction: {
        'precise': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
