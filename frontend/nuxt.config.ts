// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/eslint-module"],
  eslint: {
    cache: false,
  },
  devtools: { enabled: true },
});
