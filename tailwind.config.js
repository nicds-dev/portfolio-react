/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '18': '4.5rem'
      },
      animation: {
        'bounce-slow': 'bounce 1.3s infinite',
      },
    },
  },
  plugins: [],
}

