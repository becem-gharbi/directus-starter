import type { ModuleOptions } from "@bg-dev/nuxt-directus";

export const directus: Partial<ModuleOptions> = {
  rest: {
    baseUrl: process.env.DIRECTUS_REST_BASE_URL || "http://localhost:8055",
    nuxtBaseUrl:
      process.env.DIRECTUS_REST_NUXT_BASE_URL || "http://localhost:3000",
  },

  graphql: {
    enabled: true,
    httpEndpoint:
      process.env.DIRECTUS_GRAPHQL_HTTP_ENDPOINT ||
      "http://localhost:8055/graphql",
    wsEndpoint:
      process.env.DIRECTUS_GRAPHQL_WS_ENDPOINT || "ws://localhost:8055/graphql",
  },

  auth: {
    enabled: true,
    enableGlobalAuthMiddleware: true,
    redirect: {
      callback: "/auth/callback",
      home: "/",
      login: "/auth/login",
      logout: "/auth/login",
      resetPassword: "/auth/reset-password",
    },
  },
};
