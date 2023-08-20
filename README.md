# Nuxt Directus starter

A template to quickly get started on your Nuxt 3 project with Directus ✨

## Features

- ✔️ Based on [nuxt-directus](https://github.com/becem-gharbi/nuxt-directus) module
- ✔️ Customizable UI layer based on Naive UI via [@bg-dev/nuxt-naiveui](https://github.com/becem-gharbi/nuxt-naiveui) module
- ✔️ Tailwindcss integration via [@nuxtjs/tailwindcss](https://github.com/nuxt-modules/tailwindcss) module
- ✔️ HTTP security via [nuxt-security](https://github.com/baroshem/nuxt-security) module
- ✔️ Error monitoring via [bugsnag-js](https://github.com/bugsnag/bugsnag-js) module

## Setup
1. If you do not have a running Directus app you can check `directus` folder
2. Rename `.example.env` to `.env` and set the environment variables
3. Make sure to install the dependencies

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

That's it! You can now get started on your project ✨

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
