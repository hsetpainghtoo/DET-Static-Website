const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ["Montserrat,sans-serif"],
        serif : ["Roboto,sans-serif"]
      },
      keyframes: {
        bounceY:{
          '0%,100%': { transform: 'translateY(2px)' },
          '50%': { transform: 'translateY(80px)' },
        }
      }
    },
  },
  plugins: [flowbite.plugin()],
}

