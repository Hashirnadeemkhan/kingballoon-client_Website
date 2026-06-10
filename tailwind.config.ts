/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand gold — slightly deepened so it stays readable on white
        gold: {
          DEFAULT: "#C8A24B",
          light: "#E3C66B",
          dark: "#9A7A2E",
        },
        // Black / charcoal family (the "black" of the palette)
        ink: {
          DEFAULT: "#161310",
          soft: "#3a352b",
          mute: "#6f6757",
        },
        // Warm white / cream backgrounds (the "white" of the palette)
        cream: {
          DEFAULT: "#FBF8F1",
          deep: "#F3ECDD",
        },
        // Legacy tokens remapped to the light theme so existing utilities keep working
        king: {
          dark: "#161310",   // used for dark text on gold buttons + dark sections
          card: "#FFFFFF",   // light cards
          border: "#EAE1CD", // hairline borders
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 28px -8px rgba(22,19,16,0.12)",
        gold: "0 10px 30px -10px rgba(200,162,75,0.45)",
        lift: "0 20px 50px -16px rgba(22,19,16,0.22)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-right": "slideRight 0.7s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
