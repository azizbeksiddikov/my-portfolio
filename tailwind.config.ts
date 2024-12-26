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
          resume: "var(--main-resume)",
        },
        // Sidebar Colors
        sidebar: {
          background: "var(--sidebar-background)",
          title: "var(--sidebar-title)",
          subtitle: "var(--sidebar-subtitle)",
          text: "var(--sidebar-text)",
          active: "var(--sidebar-active)",
          hover: "var(--sidebar-hover)",
        },
        // Attention Color
        attention: "var(--attention)",
        projects: {
          category: "var(--projects-category)",
          cat_instance: "var(--projects-cat_instance)",
          text: "var(--projects-text)",
          tech: "var(--projects-tech)",
          ring: "var(--projects-ring)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
