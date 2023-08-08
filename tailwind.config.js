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
          900: '#0e111a',
        },
      },
    },
  },
  plugins: [],
};
