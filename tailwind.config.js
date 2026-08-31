/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        surface: '#0B1120',
        'surface-elevated': '#0f172a',
        primary: '#39ff14',
        'on-primary': '#020617',
        accent: '#2563eb', // True Royal Blue
        'on-accent': '#FFFFFF',
        cyan: '#2563eb', // Overwrite cyan just in case to blue
        foreground: '#F8FAFC',
        'muted-foreground': '#94A3B8',
        border: 'rgba(255, 255, 255, 0.08)',
        destructive: '#DC2626',
        'on-destructive': '#FFFFFF',
        ring: '#39ff14',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
