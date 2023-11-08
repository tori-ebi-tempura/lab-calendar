module.exports = {
  extends: ["eslint:all"],
  ignorePatterns: ["nuxt.config.ts"],
  rules: {
    "one-var": ["error", { initialized: "never" }],
    "id-length": "off",
    "no-console": "off",
    "sort-keys": "off",
    "sort-imports": "off",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: ["plugin:@typescript-eslint/strict", "prettier"],
      rules: {},
    },
    {
      files: ["*.vue"],
      extends: [
        "plugin:vue/vue3-strongly-recommended",
        "@nuxtjs/eslint-config-typescript",
        "prettier",
      ],
      rules: {
        "vue/multi-word-component-names": "off",
        "no-undef": "off",
      },
    },
  ],
};
