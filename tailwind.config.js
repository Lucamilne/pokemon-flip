/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fire': {
          light: '#F9C190',
          DEFAULT: '#F89030',
          dark: '#C06921'
        },
        'water': {
          light: '#C9D8F9',
          DEFAULT: '#6898f8',
          dark: '#3170C1'
        },
        'grass': {
          light: '#D9F0C1',
          DEFAULT: '#90E880',
          dark: '#58B848'
        },
        'electric': {
          light: '#F9F0D1',
          DEFAULT: '#E0E000',
          dark: '#B1A910'
        },
        'psychic': {
          light: '#F998D9',
          DEFAULT: '#F838A8',
          dark: '#C12889'
        },
        'fighting': {
          light: '#F8A8A8',
          DEFAULT: '#F87070',
          dark: '#D14140'
        },
        'normal': {
          light: '#E9E9D8',
          DEFAULT: '#B8B8A8',
          dark: '#989078'
        },
        'theme': {
          DEFAULT: '#e61919',
          '100': '#c20a0a',
          '200': '#901a22'
        }
      }
    },
  },
  plugins: [],
}

