/** @type {import("eslint").FlatConfig[]} */
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn'
    },
  },
];

