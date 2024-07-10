import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxPragma: null,  // This will tell ESLint that the jsxPragma is null, i.e., React 17+
      },
    },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: {
      react: {
        pragma: "React", // This is the default pragma, which you can keep
        version: "detect", // Automatically detect the react version
      },
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // This rule can be turned off for React 17+.
    },
  },
];
