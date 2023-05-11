import path from 'path'

export default defineNuxtConfig({
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
        }
    },

  extends: './themes/alpine-theme',
  themes: [
    {
      name: 'alpine-theme', // the name of your theme
      src: path.resolve(__dirname, 'themes/alpine-theme'), // the path to your theme directory
      // any other options you want to pass to the theme module
    }
  ],

  css: [
    '/assets/css/main.css'
  ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
});

