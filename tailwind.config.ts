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
        background: "#0a0a0a",
        foreground: "#e8e8e3",
        accent: "#8a1f1f",
        blood: "#6b0000",
        ember: "#ff2d2d",
        crimson: "#dc143c",
        shadow: "#1a0000",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      animation: {
        glitch: "glitch 0.3s ease-in-out",
        "glitch-loop": "glitch 3s ease-in-out infinite",
        flicker: "flicker 0.15s ease-in-out",
        "flicker-slow": "flicker-slow 4s ease-in-out infinite",
        "blood-pulse": "bloodPulse 3s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        "float-up": "floatUp 12s linear infinite",
        drift: "drift 20s ease-in-out infinite",
        "pupil-dilate": "pupilDilate 5s ease-in-out infinite",
        "fog-drift": "fogDrift 25s ease-in-out infinite",
        "screen-flicker": "screenFlicker 8s ease-in-out infinite",
        "blood-drip": "bloodDrip 3s ease-in forwards",
        "typewriter-cursor": "typewriterCursor 1s steps(1) infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)", filter: "none" },
          "20%": { transform: "translate(-2px, 1px)", filter: "hue-rotate(90deg)" },
          "40%": { transform: "translate(2px, -1px)", filter: "hue-rotate(-90deg)" },
          "60%": { transform: "translate(-1px, -2px)" },
          "80%": { transform: "translate(1px, 2px)", filter: "hue-rotate(45deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "flicker-slow": {
          "0%, 93%, 95%, 97%, 100%": { opacity: "1" },
          "94%": { opacity: "0.6" },
          "96%": { opacity: "0.8" },
        },
        bloodPulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(107,0,0,0.3), inset 0 0 15px rgba(107,0,0,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(107,0,0,0.6), inset 0 0 30px rgba(107,0,0,0.2)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        floatUp: {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-10vh) scale(1)", opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(-5%) translateY(0)" },
          "25%": { transform: "translateX(3%) translateY(-2%)" },
          "50%": { transform: "translateX(-2%) translateY(3%)" },
          "75%": { transform: "translateX(5%) translateY(-1%)" },
        },
        pupilDilate: {
          "0%, 85%, 100%": { r: "7" },
          "90%": { r: "10" },
          "95%": { r: "5" },
        },
        fogDrift: {
          "0%, 100%": { transform: "translateX(-10%) skewX(-5deg)", opacity: "0.03" },
          "50%": { transform: "translateX(10%) skewX(5deg)", opacity: "0.06" },
        },
        screenFlicker: {
          "0%, 92%, 94%, 96%, 100%": { opacity: "1" },
          "93%": { opacity: "0.85" },
          "95%": { opacity: "0.9" },
        },
        bloodDrip: {
          "0%": { height: "0px", opacity: "1" },
          "70%": { height: "20px", opacity: "1" },
          "100%": { height: "30px", opacity: "0" },
        },
        typewriterCursor: {
          "0%, 50%": { borderColor: "rgba(138,31,31,0.8)" },
          "51%, 100%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
