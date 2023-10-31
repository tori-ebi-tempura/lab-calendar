module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
  },
  ignorePatterns: [
    "nuxt.config.ts",
  ]
}
