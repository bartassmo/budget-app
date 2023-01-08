/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '499px',
      md: '768px',
      lg: '1023px',
      xl: '1280px',
      fhd: '1440px',
    },
    colors: {
      'purple': '#7A26C1',
      'black': '#101419',
      'light': '#F5FBEF',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
