/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens:{
      'xxs':'280px',
      'xs':'350px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '2000px',
      '5xl': '2560px',
      '6xl': '3440px',
    },
    extend: {
      spacing: {
        'maxdesk': '1400px',
      },
      fontFamily: {
        josefS: ['Josefin+Sans'],
        robotoflex:['Roboto+Flex'],
        lato:['Lato'],
        mtcursive: ['MtCursiva'],
        inter: ["Inter", "sans-serif"],
      },
      colors:{
        primary:'#86654B',
        primarymobil:'#86654b',
        limaverdeoscuro:"#002E3B",
        limaverdesuave:"#017263",
        limaverdeclaro:"#2EB15D",
        limagris:"#DBD4DC",
        limalila:"#86654b",
        limalilabebe:"#B04BFF",
        limaamarillo:"#E5BC48",
        limaamarillolimom:"#FDC307",
        limalilafuerte:"#3C1D63",
        primarylima:'#4b188e',
        secundarylima:'#002e3b',
        terciarylima:'#f6c238',
        purple: "#794AFF",
        "main-black": "#101828",
        "main-gray": "#F3F4F9",
        "blue-seo": "#5D51F2",
        "black-seo": "#27272F",
        "gray-seo": "#F4F3FE",
        "ai-soft": "#0A0118",
        "buisness-red": "#D90A2C",
        "buisness-light-black": "#111013",
        "buisness-gray": "#F9F8FA",
        "buisness-dark-black": "#161519",
        green: "#161519",
        orange: "#F2844D",
        "green-dark": "#15362C",
        "it-blue": "#86654b",
        // "it-blue":"#5A2881", 
        "it-gray": "#F6F6F6",
        "it-black": "#150D21",
        "blue-sass": "#007AFF",
        "app-main": "#C6FE1E",
        "app-dark": "#10100E",
        "app-gray": "#F5F5F5",
        paragraph: "#6D6D6D",
        "paragraph-2": "#C5BAD3",
        "gray-69": "#696969",
        "caribbean-green": "#00DF8E",
        "dark-silver": "#707070",
        "auro-metal-saurus": "#6E7485",
      }
    },
  },
  plugins: ['nuxt-headlessui'],
  headlessui: {
    prefix: 'Headless'
}
}

