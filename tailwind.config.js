/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 screens: {
      xs: { max: '639px' },
      // Other breakpoints...
    },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        "main-bg": "#EEECE8;",
        light: "#F6F2EA",
        danger: "#B3121F",
        "thrive-green":"#12B37E",
        "light-grey":"#EEEEEE",
        "mid-grey": "#B8B8B8",
        "dark-grey": "#655C5B",
        "dark-off-white":"#CDC5B4",

        "light-pink":"#ECDFDE",
        "light-off-white": "#FDFAF3",

        "grey-border": "#C4C4C4",
        "grey-text":"#757575",
        "thrive-dark-blue":"#415AAA"
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
