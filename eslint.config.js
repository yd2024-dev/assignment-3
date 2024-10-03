/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    files: ['**/*.ts', '**/*.tsx'], // Specify TypeScript files
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        browser: true,
      },
      parser: require('@typescript-eslint/parser'), // Use the TypeScript parser
      parserOptions: {
        tsconfigRoot: './', // Adjust this if your tsconfig is located elsewhere
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Use the TypeScript plugin
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      // Add TypeScript-specific rules here, if needed
    },
  },
  {
    files: ['**/*.js'], // Specify JavaScript files if you need to lint them as well
  },
];

module.exports = config;
