/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            fontFamily: {
                'prompt': ['Prompt', 'sans-serif'],
              },
              
            colors: {
                'persianmosaic': {
                    100: '#d2dfe2',
                    200: '#bbcfd3',
                    300: '#a5c0c5',
                    400: '#90b0b7',
                    500: '#7aa1a9',
                    600: '#64929b',
                    700: '#64929b',
                    800: '#4e838e',
                    900: '#367480',            
                  },
            }
        }
    },
  };

