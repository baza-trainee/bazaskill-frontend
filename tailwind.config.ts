import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': 'var(--font-open-sans)',
        tahoma: 'var(--font-tahoma)',
        mont: 'var(--font-mont)',
      },
      colors: {
        white: '#FEFFFE',
        black: '#020202',
        gray: '#8E8D8D',
        inputBgGray: '#EEEEEE',
        darkGraphite: '#191919',
        graphite: '#212121',
        green: '#4DC760',
        yellow: '#FFF854',
        pink: '#FF58B0',
        rose: '#DD8DB7',
        error: '#FF0000',
        dateBlack: '#020202',
        lightGreen: '#EEFFF1',
        lightGray: '#FEFFFE',
        greenBg: '#4DC760',
      },
      screens: {
        xs: '320px',
        sm: '420px',
        md: '768px',
        xl: '1280px',
        '2xl': '1368px',
        '3xl': '1440px',
        '4xl': '1536px',
        '5xl': '1920px',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'contacts-photo':
          "url('/public/img/workprocessdesk@1x.jpg')",
        'contacts-tablet':
          "url('/public/img/contactstablet.jpg')"
      },
      backgroundPosition: {
        'pos-0': '100% 0%',
        'pos-100': '0% 0%',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      textDecoration: {
        'none': 'none',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;