import type { ModuleOptions } from '@bg-dev/nuxt-directus'

export const directus: Partial<ModuleOptions> = {
  rest: {
    baseUrl: process.env.DIRECTUS_REST_BASE_URL!,
    nuxtBaseUrl: process.env.DIRECTUS_REST_NUXT_BASE_URL!
  },

  graphql: {
    enabled: true,
    httpEndpoint: process.env.DIRECTUS_GRAPHQL_HTTP_ENDPOINT!,
    wsEndpoint: process.env.DIRECTUS_GRAPHQL_WS_ENDPOINT
  },

  auth: {
    enabled: true,
    mode: 'cookie',
    enableGlobalAuthMiddleware: true,
    redirect: {
      callback: '/auth/callback',
      home: '/',
      login: '/auth/login',
      logout: '/auth/login',
      resetPassword: '/auth/reset-password'
    }
  }
}
