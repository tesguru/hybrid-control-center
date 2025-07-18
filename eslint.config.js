// eslint.config.js
import js from '@eslint/js';
import next from 'eslint-plugin-next';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  next.configs.recommended,
  {
    ignores: ['.next', 'node_modules'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off', // turn off the base rule
    },
  },
];
