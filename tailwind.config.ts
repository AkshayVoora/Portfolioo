import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6",
        surface: "#0a0a0a",
        border: "#262626",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
