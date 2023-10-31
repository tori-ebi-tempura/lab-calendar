module.exports = {
  extends: [
    "eslint:all",
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
