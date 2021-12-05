module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          1416: "#14162C",
        },
        prpleInit: {
          272: "#272A75",
        },
        prpleEnd: {
          586: "#5861C4",
        },
        /* 'bg-dark-purple': "#14162C",
        'gr-purple-init': "#272A75",
        'gr-purple-end': "#5861C4" */
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
