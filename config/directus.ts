import type { ModuleOptions } from "@bg-dev/nuxt-directus";

export const directus: Partial<ModuleOptions> = {
  rest: {
    baseUrl: process.env.DIRECTUS_REST_BASE_URL || "http://127.0.0.1:8055",
    nuxtBaseUrl:
      process.env.DIRECTUS_REST_NUXT_BASE_URL || "http:127.0.0.1:3000",
  },

  graphql: {
    enabled: true,
    httpEndpoint:
      process.env.DIRECTUS_GRAPHQL_HTTP_ENDPOINT ||
      "http://127.0.0.1:8055/graphql",
  },

  auth: {
    enabled: true,
    accessTokenCookieName: "access_token",
    refreshTokenCookieName: "refresh_token",
    enableGlobalAuthMiddleware: true,
    msRefreshBeforeExpires: 3000,
    redirect: {
      callback: "/auth/callback",
      home: "/",
      login: "/auth/login",
      logout: "/auth/login",
      resetPassword: "/auth/reset-password",
    },
  },
};
