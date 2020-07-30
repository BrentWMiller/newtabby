const plugin = require("tailwindcss/plugin");
const useVars = require("./use-vars");

const { root, varsConfig } = useVars({
  colors: {
    black: {
      500: "#040404",
      900: "#000000"
    },

    primary: {
      500: "#febe02"
    }
  }
});

module.exports = {
  theme: {
    fontFamily: {
      body: ["Quicksand"],
      display: ["Quicksand"]
    },
    extend: {
      ...varsConfig
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        ":root": {
          ...root
        }
      });
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
