module.exports = {
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    "no-undef": "off",
  },
  ignorePatterns: [
    "nuxt.config.ts",
  ]
}
