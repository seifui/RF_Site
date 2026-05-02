import type { Config } from "tailwindcss";

/**
 * Design tokens from Figma file: Rangi-Fernando-web (node 1:19).
 * Colors are hex literals for Tailwind utilities; pair with HSL CSS variables in globals.css for Shadcn.
 */
export default {
  theme: {
    extend: {
      colors: {
        shell: "#26766e",
        surface: "#f1fdf5",
        brand: {
          DEFAULT: "#39988c",
          foreground: "#ffffff",
        },
        ink: {
          DEFAULT: "#0f1729",
          muted: "#66748a",
        },
        line: "#cedbd3",
        deep: "#032920",
        card: {
          soft: "#e1f0e6",
          softer: "#e0ede4",
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "xs-ui": [
          "14px",
          { lineHeight: "normal", fontWeight: "700" },
        ],
        caption: [
          "16px",
          { lineHeight: "normal", fontWeight: "500" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "normal", fontWeight: "500" },
        ],
        "title-sm": [
          "20px",
          { lineHeight: "normal", fontWeight: "700" },
        ],
        "title-md": [
          "24px",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-xs": [
          "32px",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        logo: [
          "28px",
          {
            lineHeight: "1",
            letterSpacing: "-0.06em",
            fontWeight: "500",
          },
        ],
        "display-sm": [
          "44px",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-md": [
          "48px",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        display: [
          "56px",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      borderRadius: {
        shell: "32px",
        card: "20px",
        video: "18.825px",
        pill: "9999px",
      },
      spacing: {
        4.5: "18px",
        7.5: "30px",
        17: "68px",
        29: "29px",
        35: "140px",
        69: "69px",
      },
      maxWidth: {
        content: "1140px",
        frame: "1400px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
} satisfies Config;
