/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mini: "200px",
      // => @media (min-width: 200px) { ... }
      xs: "380px",
      // => @media (min-width: 380px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      minHeight: { 96: "24rem" },
      height: {
        "half-screen": "50vh",
        "40vh-screen": "40vh",
        "80vh-screen": "80vh",
        "quarter-screen": "25vh",
        "10vh-screen": "10vh",
        "20vh-screen": "20vh",
      },
      minWidth: {
        "w-32": "8rem",
        "w-40": "10rem",
      },
      colors: {
        linkedinShade: "#0072b1",
        linkedinShadeDark: "#004D77",
        navbarShade1: "#1b1d1f",
        navbarShade2: "#8C8B88",
        navbarShade3: "#4F5459",
        navbarShade4: "#666D73",
        customPrimary: "#5b733b",
        customDark: "#222730",
        customSecondary: "#EEF2E6",
        customAccent: "#8C833E",
      },
      fontFamily: {
        smooch: ["Smooch", "cursive"],
        splash: ["Splash", "cursive"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },
      dropShadow: {
        divider: "0 50px 50px -50px rgba(0, 0, 0, 0.25)",
      },
      borderWidth: {
        thin: "1px",
      },
      zIndex: {
        max: "9999",
      },
      fontSize: {
        mini: "0.65rem",
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        marquee2: "marquee2 100s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
