/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        primary : ['Plus Jakarta Sans']
      },
      animation: {
        "loop-scroll" : "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
}

