/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // IEM brand palette
        brand: {
          blue: '#1656c4',      // primary royal blue (buttons, links)
          bluedark: '#0d3a8a',  // darker blue
          navy: '#0b1f44',      // deep navy hero/footer overlays
          navy2: '#0a1834',
          gold: '#f4c430',      // hero highlight gold/yellow
          red: '#c0392b',       // logo accent red
          sky: '#3b82f6',
        },
        ink: {
          900: '#0f172a',
          700: '#334155',
          500: '#64748b',
          400: '#94a3b8',
        },
        surface: {
          base: '#ffffff',
          muted: '#f5f7fb',
          soft: '#eef3fb',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      boxShadow: {
        card: '0 6px 24px -6px rgba(15, 23, 42, 0.10)',
        cardhover: '0 16px 40px -8px rgba(15, 23, 42, 0.18)',
        soft: '0 2px 10px rgba(15, 23, 42, 0.06)',
        pill: '0 4px 14px rgba(22, 86, 196, 0.30)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(100deg, rgba(11,31,68,0.92) 0%, rgba(11,31,68,0.55) 45%, rgba(11,31,68,0.10) 100%)',
        'blue-cta': 'linear-gradient(120deg, #0d3a8a 0%, #1656c4 55%, #2a6fe0 100%)',
        'navy-band': 'linear-gradient(120deg, #0b1f44 0%, #112a5c 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(22px, -26px) scale(1.12)' },
          '66%': { transform: 'translate(-18px, 16px) scale(0.94)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
        'zoom-slow': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '80%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Logo blink for the intro loader
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.15' },
        },
        // Rotating conic border for the shiny trail on rank cards
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // Popping circles in the footer background
        'pop-circle': {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '40%': { opacity: '0.5' },
          '100%': { transform: 'scale(1.35)', opacity: '0' },
        },
        // Drifting particles / mesh in the hero
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(30px, -40px)' },
          '50%': { transform: 'translate(-20px, 30px)' },
          '75%': { transform: 'translate(24px, 18px)' },
        },
        'mesh-move': {
          '0%, 100%': { backgroundPosition: '0% 50%, 100% 50%' },
          '50%': { backgroundPosition: '100% 50%, 0% 50%' },
        },
        'loader-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        'ping-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'blob': 'blob 14s ease-in-out infinite',
        'zoom-slow': 'zoom-slow 18s ease-out forwards',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'blink': 'blink 1s ease-in-out infinite',
        'border-spin': 'border-spin 4s linear infinite',
        'pop-circle': 'pop-circle 4s ease-out infinite',
        'drift': 'drift 18s ease-in-out infinite',
        'mesh-move': 'mesh-move 16s ease-in-out infinite',
        'loader-bar': 'loader-bar 1.2s ease-in-out infinite',
        'ping-ring': 'ping-ring 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
}
