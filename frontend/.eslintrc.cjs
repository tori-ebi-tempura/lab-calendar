module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    semi: "error",
  },
  ignorePatterns: [
    "nuxt.config.ts",
  ]
}