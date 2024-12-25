import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"], // Enable class-based dark mode
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main Colors
        main: {
          background: "var(--main-background)",
          subBackground: "var(--main-sub-background)",
          title: "var(--main-title)",
          subtitle: "var(--main-subtitle)",
          text: "var(--main-text)",
        },
        // Sidebar Colors
        sidebar: {
          background: "var(--sidebar-background)",
          title: "var(--sidebar-title)",
          subtitle: "var(--sidebar-subtitle)",
          text: "var(--sidebar-text)",
        },
        // Attention Color
        attention: "var(--attention)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
