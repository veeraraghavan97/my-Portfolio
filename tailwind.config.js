/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1C',
        surface: '#111827',
        surface2: '#161F33',
        border: '#23304A',
        ink: '#E6EBF5',
        muted: '#8B96AA',
        cyan: '#4FD8C4',
        amber: '#F2A93B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(79,216,196,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(79,216,196,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
    },
  },
  plugins: [],
}
