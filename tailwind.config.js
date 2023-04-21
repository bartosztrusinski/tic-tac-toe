/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(text|bg|border)-(player-one|player-two)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        main: '#ec4899',
        accent: '#14b8a6',
        'player-one': '#9333ea',
        'player-two': '#fb923c',
      },
      fontFamily: {
        cursive: ['Silkscreen', 'cursive'],
      },
    },
  },
  plugins: [],
};
