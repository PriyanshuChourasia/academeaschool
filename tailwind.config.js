/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile-xs':{'min':'200px','max':'400px'},
        'mobile-sm':{'min':'401px','max':'600px'},
        'mobile-md':{'min':'601px','max':'800px'},
        'tablet-xs':{'max':'450px'},
        'tablet-sm':{'max':'550px'},
        'tablet-md':{'max':'650px'},
        'tablet-lg':{'max':'850px'},
        'tablet-xl':{'max':'950px'},
        'tablet-2xl':{'max':'1050px'},
        'tablet-3xl':{'max':'1150px'},
        'desktop-xs':{'min':'801px','max':'1000px'},
        'desktop-sm':{'min':'1001px','max':'1100px'},
        'desktop-md':{'min':'1101px','max':'1200px'},
        'desktop-lg':{'min':'1201px','max':'1400px'},
        'desktop-xl':{'min':'1401px','max':'1600px'},
        'desktop-2xl':{'min':'1601px','max':'1800px'},
        
      },
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