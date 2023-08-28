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
    extend: {
      backgroundImage: {
        'phoneBG': "rgba(13, 110, 253, 0.05)",
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}