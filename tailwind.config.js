const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'term': {
          'bg': '#2E3436',
          'fg': '#D3D7CF',
          0: '#000000',
          1: '#CD0000',
          2: '#00CD00',
          3: '#CDCD00',
          4: '#0000EE',
          5: '#CD00CD',
          6: '#00CDCD',
          7: '#E5E5E5',
          8: '#7F7F7F',
          9: '#FF0000',
          10: '#00FF00',
          11: '#FFFF00',
          12: '#5C5CFF',
          13: '#FF00FF',
          14: '#00FFFF',
          15: '#FFFFFF'
        }
      },
      keyframes: {
        blink: {
          'to': { visibility: 'hidden' }
        }
      },
      animation: {
        'blink': 'blink 1s steps(2, start) infinite'
      }
    },
  },
  plugins: [],
}
