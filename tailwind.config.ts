import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "color-border": "rgba(0, 0, 0, .1)",
      "color-gray": { 1: "#5f5f5f", 2: "#8c8d92", 3: "#f4f4f8" },
      "color-black": { 1: "#212529", 2: "#14161B", 3: "#000000" },
      "color-green": "#43B369",
      "color-blue": "#4965F0",
      "color-red": "#E40536",
      "color-white": "#ffffff",
      "color-gold": "#DC9E46",
      "color-light-brown": "rgb(225, 215, 213)",
    },
    fontFamily: {
      londrinaSolid: ["var(--font-londrinasolid)"],
      ptSans: ["var(--font-ptsans)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
