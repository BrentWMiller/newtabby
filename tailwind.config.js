const plugin = require('tailwindcss/plugin');
const useVars = require('./use-vars');

const { root, varsConfig } = useVars({
  colors: {
    black: {
      500: '#040404',
      700: '#0D0417',
      800: '#090112',
      900: '#000000',
    },

    gray: {
      500: '#B7B7B7',
    },

    primary: {
      500: '#6E518D',
    },

    accent: {
      500: '#00FFD1',
    },
  },
});

module.exports = {
  theme: {
    fontSize: {
      16: ['1', 'auto'],
      18: ['1.125', 'auto'],
      24: ['1.5rem', 'auto'],
      32: ['2rem', 'auto'],
    },
    fontFamily: {
      body: ['Quicksand'],
      display: ['Quicksand'],
    },
    extend: {
      ...varsConfig,

      borderRadius: {
        15: '15px',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        ':root': {
          ...root,
        },
      });
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
  },
};
