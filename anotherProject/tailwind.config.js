/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#249a41",
        primaryDeep:"#264a2a",
        secondary:"#777777",
        tertiary:"#272626",
        gray:{
          30:'#7b7b7b',
          50:'#585858'
        }
      },
      // screens:{
      //   xs:"400px",

      // },
      // backgroundImage:{
      //   hero:"url(src/assets/bg.png)"
      // },
      fontFamily:{
        roboto:["roboto","cursive"]
      }
    },
  },
  plugins: [],
}