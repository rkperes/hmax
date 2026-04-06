import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hydromax: {
          base: "#000000",
          hydro: "#3AA8C1",
          max: "#C4CBCF",
          dark: {
            50: "#F7F8F9",
            100: "#E8EAEC",
            200: "#D1D5D9",
            300: "#BABFC6",
            400: "#A3A9B3",
            500: "#8C93A0",
            600: "#6B7280",
            700: "#4A5568",
            800: "#2D3748",
            900: "#1A202C",
          },
          light: "#F9FAFB",
        },
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "48px" }],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      spacing: {
        gutter: "24px",
        section: "64px",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in",
        slideUp: "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "robustness-block": "linear-gradient(135deg, rgba(58, 168, 193, 0.1) 0%, rgba(58, 168, 193, 0.05) 100%)",
        "versatility-slash": "linear-gradient(45deg, transparent 45%, rgba(58, 168, 193, 0.15) 45%, rgba(58, 168, 193, 0.15) 55%, transparent 55%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
