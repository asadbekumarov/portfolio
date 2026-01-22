/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: '#0F172A',
        primary: '#0284C7',
        'primary-hover': '#0369A1',
        main: '#E2E8F0',
        muted: '#94A3B8',
        border: '#1E293B',
        'sapphire-1': '#E7F0FA',
        'sapphire-2': '#7BA4D0',
        'sapphire-3': '#2E5E99',
        'sapphire-4': '#0D2440',
      },
      fontFamily: {
        code: ["Fira Code", "monospace"],
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
