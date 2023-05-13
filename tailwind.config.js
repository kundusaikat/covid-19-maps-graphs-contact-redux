module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "428px",
        md: "744px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1536px",
      },
      colors:{
        "pot-sky":"#52ADF8"
      },

      backgroundImage: theme => ({
        'headercolor': 'linear-gradient(90deg, #316B99 , #4180b4 , #316B99 )',
        'greenhalf': 'linear-gradient(0deg, rgb(187,71,70) 20%, rgb(187,71,70,0.2) )',
        'redhalf': 'linear-gradient(0deg, rgb(108,165,66) , rgb(108,165,66,0.2) )'
      }),
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
