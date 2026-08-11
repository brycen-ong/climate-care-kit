// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  svgo: {
    defaultImport: 'component',
  },
  snackbar: {
    bottom: true,
    duration: 5000,
    success: '#00A89B',
    error: '#FF7255',
  },
  modules: ['@vueuse/nuxt', 'nuxt-svgo', 'nuxt-snackbar'],
  app: {
    head: {
      title: 'Climate Care Kit',
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:'' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap' },
      ],
      script: [
        { src: 'https://kit.fontawesome.com/52b01bb338.js', crossorigin: 'anonymous'},
      ]
    }
  },
})