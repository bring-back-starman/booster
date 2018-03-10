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
    'arrow-parens': ['error', 'always'],
    'no-console': 0,
    'no-unused-vars': 1,
    'trailing-space': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0
  },
};
