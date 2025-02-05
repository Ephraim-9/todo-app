import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error', // Highlight Prettier issues as ESLint errors
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },
  pluginJs.configs.recommended,
  prettierConfig, // Add Prettier config to disable conflicting ESLint rules
];
