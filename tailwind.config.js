/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    spacing: {
      none: '0px',
      tiny: '0.125rem', // 2px
      min: '0.25rem', // 4px
      xsm: '0.5rem', // 8px
      sm: '0.75rem', // 12px
      base: '1rem', // 16px
      md: '1.5rem', // 24px
      lg: '2rem', // 32px
      xl: '3rem', // 48px
      '2xl': '4rem', // 64px
      '3xl': '5rem', // 80px
      '4xl': '6rem', // 96px
      '5xl': '8rem', // 128px
      '6xl': '10rem', // 160px
      '7xl': '12rem', // 192px
      '8xl': '14rem', // 224px
      '9xl': '16rem', // 256px
      '10xl': '18rem' // 288px
    },
    screens: {
      mobile: '320px',
      // => @media (min-width: 320px) { ... }

      lgMobile: '480px',
      // => @media (min-width: 480px) { ... }

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      lgTablet: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      lgDesktop: '1440px'
      // => @media (min-width: 1440px) { ... }
    },

    colors: {
      transparent: 'transparent', // For transparent areas and overlays.
      black: '#212121', // Main text and dark UI components in dark mode.
      white: '#F5F5F5', // Backgrounds and light UI components in light mode.
      primary: '#3949AB', // Primary buttons, highlighted text, and active UI elements.
      secondary: '#00ACC1' // Secondary buttons, less emphasized UI components.
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
