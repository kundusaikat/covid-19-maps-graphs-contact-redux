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

      backgroundImage: theme => ({
        'topbarcolor': 'linear-gradient(90deg, #316B99 , #4180b4 , #316B99 )',
      }),
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
