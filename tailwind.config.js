/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        '18': '4.5rem'
      },
      fontSize: {
        '4.5xl': '2.8rem'
      },
      animation: {
        'bounce-slow': 'bounce 1.3s infinite',
      },
    },
  },
  plugins: [],
}

