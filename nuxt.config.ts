import { naiveui, tailwindcss, directus } from "./config";

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Directus starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/styles/main.css"],

  modules: [
    "@bg-dev/nuxt-naiveui",
    "@bg-dev/nuxt-directus",
    "@nuxtjs/tailwindcss",
    "nuxt-security",
  ],

  naiveui,
  tailwindcss,
  directus,

  security: {
    corsHandler: {
      origin: process.env.DIRECTUS_REST_NUXT_BASE_URL,
      methods: "*",
    },
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "https://*.googleusercontent.com",
          "https://ui-avatars.com",
          "https://www.googletagmanager.com",
        ],
      },
    },
  },

  runtimeConfig: {
    public: {
      bugsnag: {
        enabled: false,
        apiKey: process.env.BUGSNAG_API_KEY,
      },
    },
  },
});
