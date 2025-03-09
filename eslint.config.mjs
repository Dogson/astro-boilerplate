import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginReact from "eslint-plugin-react";

export default [
  // Add the base Astro rule set
  ...eslintPluginAstro.configs.recommended,

  // Apply React rules only to .ts and .tsx files
  {
    files: ["*.ts", "*.tsx"],
    plugins: {
      react: eslintPluginReact.configs.flat["jsx-runtime"],
    },
  },

  // Other configuration...
  {
    rules: {},
  },
];
