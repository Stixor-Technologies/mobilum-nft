import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        furore: ["var(--font-furore)"],
      },

      colors: {
        "light-green": "#7CFBB2",
        "medium-green": "#55F199",
        "dark-green": "#127058",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-green": "linear-gradient(90deg, #55F199 0% ,#127058 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
