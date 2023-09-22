/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '220': '55rem',
        '120': '30rem',
        '100': '25rem'
      },
      borderRadius: {
        '16': '4rem',
      },
      boxShadow: {
        'blue-btn': '0 0 1rem rgb(59, 130, 246)'
      },
      gridTemplateColumns: {
        'priceTable': 'repeat(auto, minmax(250px, 1fr))',
      },
      height: {
        '128': '32rem',
      }
    },
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
