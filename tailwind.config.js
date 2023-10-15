/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        milk: "#F5F5F8",
        grayDark: "#353844",
        blueDark: "#1B264F",
        primary: "#506BCA",
        brown: "#D2AD81",
      },
      fontSize: {
        base: "15px",
        md: "17px",
        '2xl': "24px",
        '5xl': "56px"
      },
      fontFamily: {
        poppinsBold: ["poppins-bold", "sans-serif"],
        nunitoBold: ["nunito-sans-bold", "sans-serif"],
        nunitoSemibold: ["nunito-sans-semibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
