/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rolex: {
          green: '#006039',
          gold: '#CCA355',
          darkgreen: '#004C2C',
          hover: '#007346',
        },
      },
      fontSize: {
        xxs: '0.645rem', // 10px
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
