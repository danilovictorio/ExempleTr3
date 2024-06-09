const { browser } = require("globals");
const { recommended } = require("@eslint/eslintrc");
const { "flat/essential": vueEssential } = require("eslint-plugin-vue").configs;

module.exports = {
  languageOptions: { globals: browser },
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx,vue}"],
      extends: ["plugin:vue/essential", "eslint:recommended"],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
      },
      plugins: ["vue"],
      rules: {}
    }
  ]
};
