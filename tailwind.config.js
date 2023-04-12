/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // Primary color
          'main-blue': '#0078D3',
          'light-blue-1': '#0A95FF',
          'light-blue-2': '#33A7FF',
          'light-blue-3': '#ADDCFF',
          'light-blue-4': '#EBF6FF',
          
          //Secondary color
          'dark-blue-1': '#002E52',
          'dark-blue-2': '#00518F',
          'dark-blue-3': '#0068B8',

          //Notification color
          'success-green': '#009C22',
          'error-red': '#FA3030',

          //Neutral color
          'black': '#212121',
          'neutral-light-1': '#A3A3A3',
          'neutal-light-2': '#CCCCCC',
          'neutral-light-3': '#F8F8F8',
          'neutral-dark-1': '#3D3D3D',
         'neutral-dark-2': '#525252',
          'neutral-main': '#8F8F8F',
          'white': '#FFFFFF',
      },

      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
      },
      height: {
        '13vh': '13vh',
      },
      minHeight: {
        'minheight10': '10vh',
        'minheight20': '20vh',
        'minheight70': '70vh',
        'minheight80': '80vh',
      },
      maxHeight: {
        'maxheight10': '10vh',
        'maxheight20': '20vh',
        'maxheight70': '70vh',
        'maxheight80': '80vh',
      },
      spacing: {
        '85': '85%',
        '90': '90%',
      },
    },
  },
  plugins: [],
}