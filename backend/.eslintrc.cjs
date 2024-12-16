module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};