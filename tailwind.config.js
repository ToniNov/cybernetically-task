/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#474955',
        grayLite: '#5A5C66',
        grayExtraLite: '#E3E6EC',
        green: '#7EBC3C',
      },
    },
  },
  plugins: [],
};
