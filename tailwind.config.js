/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      primary: '#96BA7B',
      primaryLight: '#B5CFA3',
      primaryDark: '#678E4A',
      secondary: '#FEBC94',
      tertiary: '#E74040',
      bgColored: '#FDF3F1',
      bgFooter: '#FAFAFA',
      bgInput: '#F9F9F9',
      title: '#252B42',
      text: '#737373',
      textSuccess: '#96BA7B',
      textError: '#E74040',
      border: '#E6E6E6',
    },
    extend: {
      fontSize: {
        sm: ['0.875rem', '1.4286rem'],
        base: ['1rem', '1.7143rem'],
        lg: ['1.4286rem', '2rem'],
        xl: ['1.7143rem', '2.2857rem'],
        '2xl': ['2.8571rem', '3.5714rem'],
        '3xl': ['4.1429rem', '5.7143rem'],
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        sm: '5px',
        lg: '20px',
      },
      backgroundImage: {
        'bgImage': "url('src/assets/images/bg-image.png')",
      },
      boxShadow: {
        card: '0 13px 19px 0 rgba(0, 0, 0, 0.07)',
      },
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        moveRight: 'moveRight 0.5s ease-in-out infinite alternate',
      },
    },
  },
};


