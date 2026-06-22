import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cotton: "#FFFDF7",
        parchment: "#F7F1E3",
        ink: "#1F2522",
        muted: "#6D6A61",
        border: "#E6DED0",
        primary: "#176B3A",
        "primary-dark": "#0F4F2B",
        gold: "#F2B705",
        heritage: "#B8322A",
        emblem: "#2557A7"
      },
      borderRadius: {
        card: "8px"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
