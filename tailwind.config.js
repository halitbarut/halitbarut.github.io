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
    },
  },
  plugins: [],
};
