module.exports = {
  purge: ['./screens/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
