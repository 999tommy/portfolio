/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0c0d14",
          50: "#12131b",
          100: "#181922",
          200: "#20212b",
          300: "#282a35",
          400: "#323442",
          500: "#3d4052",
        },
        gold: {
          DEFAULT: "#D4A843",
          light: "#F0C040",
          bright: "#FFD700",
          dim: "#A07828",
          glow: "#E8B84B",
          muted: "#8a6a20",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          border: "rgba(212,168,67,0.2)",
          "border-strong": "rgba(212,168,67,0.4)",
          hover: "rgba(255,255,255,0.07)",
        },
        terminal: {
          DEFAULT: "#0a0c10",
          light: "#111318",
        }
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,168,67,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212,168,67,0.6), 0 0 80px rgba(212,168,67,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(212,168,67,0.2)' },
          '50%': { borderColor: 'rgba(212,168,67,0.5)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.15) 50%, transparent 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,168,67,0.08) 0%, transparent 70%)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
        'heavy': '40px',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212,168,67,0.25)',
        'gold-strong': '0 0 40px rgba(212,168,67,0.4), 0 0 80px rgba(212,168,67,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-hover': '0 12px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(212,168,67,0.15)',
        'inner-gold': 'inset 0 0 20px rgba(212,168,67,0.05)',
      },
    },
  },
  plugins: [],
}