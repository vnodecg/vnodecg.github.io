/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "*/index.html"
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Lexend', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries')
  ],
}

export default tailwindConfig;