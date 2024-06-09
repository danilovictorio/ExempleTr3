import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ["**/*.{js,jsx,ts,tsx,vue}"], // Aquí especificamos los archivos a lintar
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
