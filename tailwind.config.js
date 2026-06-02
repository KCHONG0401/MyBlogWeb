module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          purple: '#7c3aed',
          pink:   '#f472b6',
          red:    '#dc2626',
          blue:   '#2563eb',
        },
        space: {
          950: '#07070f',
          900: '#0d0d1a',
          800: '#14142a',
          700: '#1e1e3a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in':   'fadeIn 0.8s ease-out forwards',
        'slide-up':  'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
