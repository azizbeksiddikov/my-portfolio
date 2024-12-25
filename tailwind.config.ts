import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-light": "#e0e7ff",
        "navbar-dark": "#1e1b4b",
        "content-light": "#f0f9ff",
        "content-dark": "#0f172a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
