/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark' : "#480CA8",
        'primary-light' : "#FFFFFF",
        'secondary-1' : "#5E60CE",
        'secondary-2' : "#5390D9",
        'secondary-3' : "#4EA8DE",
        'secondary-4' : "#48BFE3",
      },
      screens: {
        'laptop': '1330px',
      },
      fontFamily: {
        'cond-light': ['INTRO-COND-LIGHT','sans-serif'],
        'cond-black': ['INTRO-COND-black','sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"), 'gatsby-plugin-postcss'],
};
