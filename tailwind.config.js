/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': "Barlow, sans-serif",
        'c-barlow': "Barlow Condensed, sans-serif"
      },
      colors: {
        'red': 'hsl(0, 100%, 68%)',
        'very-d-blue': 'hsl(230, 29%, 20%)',
        'dark-g-blue': 'hsl(230, 11%, 40%)',
        'grayish-blue': 'hsl(231, 7%, 65%)',
        'light-g-blue': 'hsl(207, 33%, 95%)'
      },
      screens: {
        '3xl': '1800px'
      }
    },
  },
  plugins: [],
}