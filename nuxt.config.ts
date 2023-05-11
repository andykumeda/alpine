export default defineNuxtConfig({
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
        }
    },

  extends: '@nuxt-themes/alpine',
  css: [
    '@/assets/css/main.css'
  ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
});

