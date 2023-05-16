import path from 'path'


export default defineNuxtConfig({
  build: {
    html: {
      experimentalPayloadParsing: 'false'
    }
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
    }
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
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],


});

