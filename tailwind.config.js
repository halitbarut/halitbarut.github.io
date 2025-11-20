/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0D1B2A',
        'secondary': '#1B263B',
        'accent': '#415A77',
        'highlight': '#778DA9',
        'text-primary': '#E0E1DD',
        'text-secondary': '#B0B0B0',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.5'
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-10px) translateX(-10px)',
            opacity: '0.8'
          },
          '75%': { 
            transform: 'translateY(-30px) translateX(5px)',
            opacity: '0.6'
          }
        },
        glow: {
          'from': {
            'box-shadow': '0 0 20px rgba(168, 85, 247, 0.4)'
          },
          'to': {
            'box-shadow': '0 0 40px rgba(168, 85, 247, 0.8), 0 0 80px rgba(6, 182, 212, 0.4)'
          }
        },
        'glow-pulse': {
          '0%, 100%': {
            opacity: '0.5',
            filter: 'blur(40px)'
          },
          '50%': {
            opacity: '0.8',
            filter: 'blur(60px)'
          }
        },
        shimmer: {
          '0%': {
            'background-position': '-200% center'
          },
          '100%': {
            'background-position': '200% center'
          }
        },
        shine: {
          '0%': {
            left: '-100%'
          },
          '100%': {
            left: '100%'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
