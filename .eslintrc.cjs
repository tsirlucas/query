// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.base.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error', { prefer: 'type-imports' }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error', { ignoreParameters: true },
    ],
    'import/default': 'off',
    'import/export': 'off',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'off',
    'import/no-unresolved': ['error', { ignore: ['^@tanstack/'] }],
    'import/no-unused-modules': ['off', { unusedExports: true }],
    'no-redeclare': 'off',
    'no-shadow': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 'off',
      },
    },
  ],
}