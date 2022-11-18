/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/Theme/colors.js');
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screen: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    extend: {
      colors: colors,
      transformOrigin: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      },
      transitionProperty: {
        height: 'height',
      },
      keyframes: {
        heightModalAnimation: {
          '0%': {
            maxHeight: '0px',

            opacity: 0,
          },

          '100%': {
            maxHeight: '1080px',

            opacity: 1,
          },
        },
        fadeInAnimation: {
          '0%': { opacity: 0 },

          '100%': { opacity: 1 },
        },
      },

      animation: {
        heightModalAnimation: 'heightModalAnimation 500ms ease-in-out',
        fadeInAnimation: ' fadeInAnimation 200ms ease-in-out',
      },
    },
  },
  plugins: [],
};
