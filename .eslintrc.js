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
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'react/prop-types': 0,
    'linebreak-style': 0,
    'no-plusplus': 0,
    'max-len': ['warn', { code: 100 }]
  }
};
