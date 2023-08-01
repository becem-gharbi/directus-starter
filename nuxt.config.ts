import { naiveui, tailwindcss, directus } from "./config";

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Directus starter",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap",
        },
      ],
    },
  },

  gtag: {
    id: process.env.GTAG_MEASUREMENT_ID,
  },

  css: ["~/assets/styles/main.css"],

  modules: [
    "@bg-dev/nuxt-naiveui",
    "@bg-dev/nuxt-directus",
    "@nuxtjs/tailwindcss",
    "nuxt-security",
    "nuxt-gtag",
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
          "https://ui-avatars.com",
          "https://www.googletagmanager.com",
          process.env.DIRECTUS_REST_BASE_URL || "http://127.0.0.1:8055",
        ],
      },
    },
  },

  runtimeConfig: {
    public: {
      defaultRoleId: process.env.DIRECTUS_DEFAULT_ROLE_ID,
      bugsnag: {
        enabled: false,
        apiKey: process.env.BUGSNAG_API_KEY,
      },
    },
  },
});
