/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'background0': "url('../Images/school_logo-nobg.jpg')",
        'background1': "url('../Images/schoollogo.jpg')",
        'background2': "url('../Images/library.jpg')",
      },
    },
  },
  plugins: [],
  
}

