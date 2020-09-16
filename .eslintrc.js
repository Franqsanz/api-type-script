module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'franqsanz',
    'prettier',
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 0,
    eqeqeq: 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'node/no-missing-import': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 1,
    'node/no-unsupported-features/es-syntax': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-var-requires': 1,
  },
};
