module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1B2763',
        secondary: '#FFA64E',
        gray1: '#ECECEC',
        gray2: '#DFDFDF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
