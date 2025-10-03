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
        background: "#F5F5FA",
        primary: {
          DEFAULT: "#0044B5",
          dark: "#003494",
          light: "#3366CC",
        },
        purple: "#9A00CD",
        green: {
          DEFAULT: "#156B4C",
          light: "#00B191",
        },
        teal: "#4ABDCD",
        red: "#FD372C",
        yellow: "#F9AE0B",
        dark: "#1A1A1A",
        gray: {
          50: "#F5F5FA",
          100: "#E5E5EA",
          200: "#CCCCCC",
          300: "#999999",
          400: "#666666",
          500: "#4A4A4A",
          600: "#333333",
          700: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h1: ["2.5rem", { lineHeight: "1.3", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        section: "5rem",
        "section-lg": "7.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(40px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        scaleIn: {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.8)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        pulseGlow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(0, 68, 181, 0.4)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(0, 68, 181, 0.8)" 
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;