module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    REACT_APP_ENV: true,
  },
  rules: {
    complexity: 'off',
    'max-params': ['error', 4],
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
  },
}
