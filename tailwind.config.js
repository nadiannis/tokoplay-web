/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'screen-12xl': '1920px',
      },
      backgroundImage: {
        'thumbnail-text':
          'linear-gradient(rgba(20, 25, 30, 0) 0%, rgba(20, 25, 30, 0.8) 100%)',
      },
      colors: {
        shade: {
          300: '#b3b7bd',
          800: '#13161f',
          900: '#0e111a',
        },
      },
      boxShadow: {
        video:
          '0 5px 10px 3px rgba(49, 46, 129, 0.3), 0 25px 50px -12px rgba(49, 46, 129, 0.4)',
      },
    },
  },
  plugins: [require('daisyui')],
};
