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
        "deep-space":  "#05050f",
        "space-card":  "rgba(15,15,30,0.85)",
        accent:        "#8b5cf6",
        "accent-cyan": "#06b6d4",
        "accent-pink": "#e879f9",
        "text-primary":"#f1f5f9",
        "text-muted":  "#94a3b8",
        "text-muted2": "#64748b",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg,#8b5cf6 0%,#06b6d4 50%,#e879f9 100%)",
        "card-gradient": "linear-gradient(135deg,rgba(139,92,246,.08) 0%,rgba(6,182,212,.04) 100%)",
      },
      animation: {
        shimmer:     "shimmer 5s linear infinite",
        float:       "float 6s ease-in-out infinite",
        "float-slow":"float 9s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        pulse2:      "pulse 3s cubic-bezier(.4,0,.6,1) infinite",
      },
      keyframes: {
        shimmer: {
          "from": { backgroundPosition: "200% center" },
          "to":   { backgroundPosition: "-200% center" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-18px)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira)", "monospace"],
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};

export default config;
