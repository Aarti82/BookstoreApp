module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Define your custom font family here
      },
    },
  },
  darkMode: 'class',
plugins: [require('daisyui')],

};
