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
        darkGraphite: '#191919',
        graphite: '#212121',
        green: '#4DC760',
        yellow: '#FFF854',
        pink: '#FF58B0',
        rose: '#DD8DB7',
        dateBlack: '#333333B2',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'contacts-photo':
          "url('/public/img/contactsectionphotodesk@1x.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
