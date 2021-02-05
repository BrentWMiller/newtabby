const plugin = require('tailwindcss/plugin');
const useVars = require('./use-vars');

const { root, varsConfig } = useVars({
  colors: {
    black: {
      400: '#130622',
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
      500: '#97fe02',
    },
  },
});

module.exports = {
  theme: {
    fontSize: {
      16: ['1', '1.2'],
      18: ['1.125', '1.2'],
      24: ['1.5rem', '1.2'],
      32: ['2rem', '1.2'],
      48: ['3rem', '1.2'],
    },
    fontFamily: {
      body: ['Quicksand'],
      display: ['Quicksand'],
    },
    extend: {
      ...varsConfig,

      borderRadius: {
        '4px': '0.25rem',
        '15px': '0.9375rem',
      },
      borderWidth: {
        '3px': '3px'
      },
      inset: (theme) => ({
        ...theme('spacing'),
        ...theme('width'),
        ...theme('margin'),
      }),
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
