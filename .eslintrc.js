module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    'trailing-space': 0,
    'consistent-return': 0,
  },
};
