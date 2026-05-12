import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#243042",
        skysoft: "#E6F6FF",
        mintsoft: "#EAF8EF",
        peachsoft: "#FFF1DE",
        rosegood: "#FFECEF"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(36, 48, 66, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
