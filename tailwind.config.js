/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-end': '#624DF3',
        'bg-start':'#4A0077'
    },
    fontFamily:{
      'heading':["Archivo Black", 'sans-serif']
    }
  },
  },
  plugins: [],
}

