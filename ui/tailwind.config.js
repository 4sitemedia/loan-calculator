/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        100: '25rem',
        120: '30rem',
        216: '54rem',
      },
    },
  },
  plugins: [],
};
