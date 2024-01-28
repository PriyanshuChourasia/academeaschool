/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow:{
        'custom': '2px 2px 12px rgba(0, 0, 0, 0.5)'
      },
      boxShadow:{
        'medium':'3px 4px 9px 3px rgba(0,0,0,0.46)',
        'optionHover':'0px 0px 6px 4px rgba(0,0,0,0.26)',
        'activeHover':'0px 0px 4px 2px rgba(146,146,146,0.16)'
      },
      colors:{
        dark:{

        },
        light:{
          primary:'#078C41',
          secondary:'#F2F2F2',
          darkPrimary:'#012611',
          darkSecondary:'#01401C',
          textColor:'#02733F',
          cardColor:'#048C4C',
          buttonColor:'#01401C',
        }
      }
    },
  },
  corePlugins:{
    textShadow:true
  },
  plugins: [],
}