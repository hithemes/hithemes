const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontWeight: {
      'extra-light': 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      'extra-bold': 800
    },
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        go: {
          50: '#E6EEED',
          100: '#D1E0DD',
          200: '#A2C0BC',
          300: '#74A19A',
          400: '#458178',
          500: '#176257',
          600: '#004B40',
          700: '#003C33',
          800: '#002D26',
          900: '#001E19'
        },
        aw: {
          50: '#F9EFE5',
          100: '#BFB7B0',
          200: '#7B7671',
          300: '#3D3B38'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
}
