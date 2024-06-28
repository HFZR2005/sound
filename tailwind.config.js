module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // add noise background image 

      backgroundImage: {
        'noise': "url('../public/images/noise.png')",
      },
      backgroundColor: {
        'pred': '#ef694d',
        'secondary': '#fff9e9',
        'tertiary': '#e4e18d',
        'quaternary': '#c4d8d1',
      },
    }
  },
  plugins: [],
};
