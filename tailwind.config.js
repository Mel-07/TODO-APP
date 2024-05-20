/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'desktop-dark': "url('./src/assets/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('./src/assets/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('./src/assets/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('./src/assets/images/bg-mobile-light.jpg')",
      },
      colors:{
        'light-theme-light-gray':'#fafafa',
        'light-theme-very-light-grayish-blue':'#e4e5f1',
        'light-theme-bright-blue': '#3a7bfd',
        'light-theme-light-grayish-blue': '#d2d3db',
        'light-theme-dark-grayish-blue': '#9394a5',
        'light-theme-very-dark-grayish-blue': '#484b6a',
        // dark
        'dark-theme-very-dark-blue': '#161722',
        'dark-theme-very-dark-desaturated-blue': '#25273c',
        'dark-theme-light-grayish-blue': '#cacde8',
        'dark-theme-light-grayish-blue-hover': '#e4e5f1',
        'dark-theme-dark-grayish-blue': '#777a92',
        'dark-theme-very-dark-grayish-blue': '#4d5066',
        'dark-theme-very-dark-grayish-blue-two': '#393a4c',
      },
      backgroundColor:{
        'light-theme-very-light-gray':'#fafafa',
        'light-theme-very-light-grayish-blue':'#e4e5f1',
        'light-theme-bright-blue': '#3a7bfd',
        'light-theme-light-grayish-blue': '#d2d3db',
        'light-theme-dark-grayish-blue': '#9394a5',
        'light-theme-very-dark-grayish-blue': '#484b6a',
        // dark
        'dark-theme-very-dark-blue': '#161722',
        'dark-theme-very-dark-desaturated-blue': '#25273c',
        'dark-theme-light-grayish-blue': '#cacde8',
        'dark-theme-light-grayish-blue-hover': '#e4e5f1',
        'dark-theme-dark-grayish-blue': '#777a92',
        'dark-theme-very-dark-grayish-blue': '#4d5066',
        'dark-theme-very-dark-grayish-blue-two': '#393a4c',
      },
      fontFamily:{
        'josefinSans-Bold':['josefinSans-Bold',"open-san"],
        'josefinSans-Regular':['josefinSans-Regular',"open-san"]
      }
    },
  },
  plugins: [],
}
