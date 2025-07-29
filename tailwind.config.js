/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      colors: {
        gray: {
          850: '#1f2937',
          950: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}