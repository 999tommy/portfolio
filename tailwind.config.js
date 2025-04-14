/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Slightly brighter dark blue background
          light: "#1e293b", // Lighter blue for sections with better visibility
          dark: "#020617", // Darker blue for contrast
        },
        accent: {
          DEFAULT: "#38bdf8", // Brighter blue accent color for better visibility
          light: "#7dd3fc", // Lighter variant
          dark: "#0284c7", // Darker variant
        },
        text: {
          DEFAULT: "#f8fafc", // Brighter white text for better contrast
          secondary: "#cbd5e1", // Lighter secondary text for better visibility
          dark: "#94a3b8", // Muted text color
        },
        highlight: {
          purple: "#a78bfa", // Brighter purple highlight
          pink: "#f472b6", // Brighter pink highlight
          blue: "#60a5fa", // Brighter blue highlight
        }
      },
      fontFamily: {
        mono: ["'Source Code Pro'", "monospace"],
        sans: ["'Source Sans Pro'", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}