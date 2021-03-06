module.exports = {
  content: [
    "./docs/index.html",
    "./docs/codehance.html",
    "./docs/ttc.html",
    "./docs/table-booker.html",
    "./docs/jobplus.html",
    "./docs/portfolio.html",
  ],
  theme: {
    container: {
      center: true,
      maxwidth: '900rem',
      flex: true,    
    },
    colors: {
      'background': '#EFECEA',
      'amber': '#DAA355',
      'alert': '#F22F4D',
      'light': '#FFFFFF',
      'grayish': '#625959',
      'button': '#DBAC94',
      'dark': '#000000'
    },
    fontFamily: {
      'lora': ['Lora'],
      'opensans': ['Open Sans'],
      'roboto': ['Roboto'],
      'rubik': ['Rubik'],
      'alexbrush': ['Alex Brush']

    },

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
      extend: {
          display: ["group-hover"],
      },
},

};