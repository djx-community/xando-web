module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-duplicate-imports': 'error',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'react/prop-types': 0
  }
};
