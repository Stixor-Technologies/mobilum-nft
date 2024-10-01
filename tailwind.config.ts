import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },

      fontFamily: {
        furore: ["var(--font-furore)"],
      },

      colors: {
        "light-green": "#7CFBB2",
        "medium-green": "#55F199",
        "dark-green": "#127058",
        "deep-green": "#171717",
        silver: "#B4B4B4",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-green": "linear-gradient(90deg, #55F199 0% ,#127058 100%)",
        "gradient-dark-green":
          "linear-gradient(90deg, #194338 0% ,#0C2E25 100%)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
            paddingLeft: "2.625rem",
            paddingRight: "2.625rem",
          },
          "@screen xl": {
            maxWidth: "100%",
            paddingLeft: "5.9375rem",
            paddingRight: "5.9375rem",
            // paddingLeft: "67px",
            // paddingRight: "67px",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
export default config;
