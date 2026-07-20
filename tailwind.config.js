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
          DEFAULT: "#07080F",
          50:  "#0D0E18",
          100: "#12131E",
          200: "#181926",
          300: "#21222E",
          400: "#2A2B3A",
        },
        amber: {
          DEFAULT: "#E8820A",
          light:   "#F5A030",
          bright:  "#FFAA30",
          dim:     "#B5600A",
          glow:    "#E89020",
        },
      },
      fontFamily: {
        mono:    ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans:    ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Syne'", "system-ui", "sans-serif"],
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'spin-slow':    'spin-slow 20s linear infinite',
        'pulse-amber':  'pulseAmber 2s ease-in-out infinite',
        'shimmer':      'shimmer 4s linear infinite',
        'glow-pulse':   'glowPulse 2.2s ease-in-out infinite',
        'blink':        'blink 1.1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        pulseAmber: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232,130,10,0)' },
          '50%':      { boxShadow: '0 0 0 6px rgba(232,130,10,0.2)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% center' },
          to:   { backgroundPosition:  '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,130,10,0.7)' },
          '50%':      { boxShadow: '0 0 36px rgba(232,130,10,1), 0 0 65px rgba(232,130,10,0.35)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'amber-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(232,130,10,0.15) 50%, transparent 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
      },
      backdropBlur: {
        xs:     '2px',
        glass:  '20px',
        heavy:  '40px',
      },
      boxShadow: {
        'amber':       '0 0 22px rgba(232,130,10,0.28)',
        'amber-strong':'0 0 38px rgba(232,130,10,0.45), 0 0 90px rgba(232,130,10,0.18)',
        'glass':       '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glass-hover': '0 12px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':  '0 10px 44px rgba(0,0,0,0.55), 0 0 28px rgba(232,130,10,0.1)',
      },
    },
  },
  plugins: [],
}