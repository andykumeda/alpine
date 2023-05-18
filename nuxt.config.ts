export default defineNuxtConfig({

  experimental: {
    payloadExtraction: 'false'
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'UTF-8',
    },
  },

  extends: 'themes/alpine',

  css: [
    'assets/css/main.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/device',
    '@vueuse/nuxt',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-SDEPZ5L75B'
  },

});

