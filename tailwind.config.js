module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '8': '25px',
      '23': '70px',
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/public/backgroundSide.png')"
        }
      }
    },
  },
  plugins: [],
}
