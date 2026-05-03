import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18222f",
        muted: "#5b6472",
        wine: "#7a1f2b",
        gold: "#c9a24a",
        paper: "#f7f3ea"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 34, 47, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
