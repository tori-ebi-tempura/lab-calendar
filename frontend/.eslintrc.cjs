module.exports = {
  extends: ["eslint:all", "prettier"],
  ignorePatterns: ["nuxt.config.ts"],
  rules: {
    "one-var": ["error", { initialized: "never" }],
    "id-length": "off",
    "sort-keys": "off",
    "sort-imports": "off",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/strict"],
      rules: {},
    },
    {
      files: ["*.vue"],
      extends: ["plugin:vue/vue3-recommended"],
      rules: {
        "vue/multi-word-component-names": "off",
        "no-undef": "off",
      },
    },
  ],
};
