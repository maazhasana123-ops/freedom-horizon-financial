import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        fhf: {
          /* ── Real brand palette (from logo/assets) ── */
          navy:          "#1a2d5a",
          blue:          "#2e6db4",
          sky:           "#7ab8d9",
          "sky-light":   "#b8d9ed",
          white:         "#ffffff",
          "off-white":   "#f5f8fc",
          "light-bg":    "#eaf3f9",
          rule:          "#c5d8e8",
          ink:           "#1a2d5a",
          "ink-mid":     "#2e4a7a",
          "ink-light":   "#5a7a9a",
          /* ── Luminous Horizon surface tokens ── */
          surface:         "#f4faff",
          "surface-low":   "#ecf5fb",
          "surface-card":  "#ffffff",
          "surface-high":  "#e0e9ef",
          "surface-highest": "#dbe4ea",
          /* Luminous Horizon brand blues */
          "lh-primary":    "#004ac6",
          "lh-primary-c":  "#2563eb",
          /* Legacy aliases — do not remove */
          "primary-dark":  "#1a2d5a",
          primary:         "#2e6db4",
          "primary-light": "#7ab8d9",
          gold:            "#2e6db4",
          "gold-light":    "#7ab8d9",
          "gold-pale":     "#eaf3f9",
          cream:           "#f5f8fc",
        },
        border:     "hsl(var(--border))",
        input:      "hsl(var(--input))",
        ring:       "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body:    ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        sans:    ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        serif:   ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
