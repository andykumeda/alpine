export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: [
    '@/assets/css/main.css',
  ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
});

