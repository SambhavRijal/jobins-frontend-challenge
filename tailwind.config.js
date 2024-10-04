/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      xs: '3px 7px 7px 0px rgba(125, 125, 125, 0.26)',
      sm: ' 16px 30px 42px 0px rgba(125, 125, 125, 0.26);',
      md: '0px 8px 16px 0px rgba(17, 17, 17, 0.06);',
      lg: '0px 32px 64px 0px rgba(17, 17, 17, 0.13);',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
    },
    screens: {
      xs: '480px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '992px',

      // lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      xxl: '1440px',

      '2xl': '1536px',

      mobile: '320px',
      tablet: '768px',
      laptop: '1024px'

      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      herotitle: '3.375rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },

    fontFamily: {
      // quicksand: ['Quicksand', 'sans-serif'],
      // outfit: ['Outfit', 'sans-serif'],
      // poppin: ['Poppins'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900'
    },
    colors: {
      ...colors,
      primary: {
        default: '#F5F5F5',
        gray: '#8B909A',
        border: '#DBDADE',
        dark: '#23272E',
        light: '#F1F2F6'
      },
      secondary: {
        default: '#ffffff',
        gray: '#E9E7FD',
        blue: '#0F60FF',
        orange: '#FFC600',
        light: '#F3F4F8'
      },

      success: {
        default: '#1EB564',
        pending: '#B0BA00'
      },
      danger: {
        default: '#EA5455'
      },

      buttonColor: {
        500: '#147AA6'
      },
      borderColor: {
        500: '#C1C1C1'
      }
    },

    spacing: {
      none: 0,
      xxs: '4px',
      xs: '8px',
      msm: '12px',
      inputgap: '10px',
      sm: '16px',
      normal: '20px',
      md: '24px',
      lg: '32px',
      lgx: '40px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '72px',
      '4xl': '84px',
      '5xl': '96px',
      '6xl': '108px',
      '7xl': '124px',
      med: '3.75rem'
    },
    extend: {
      keyframes: {
        'pop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        'fade-in-down': 'pop-in 0.4s ease-out'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
