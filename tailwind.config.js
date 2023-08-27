/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '2rem',
        xl: '3rem',
      },
    },
    fontFamily: {
      'Poppins':['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}