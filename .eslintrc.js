const OFF = 0;
const ERROR = 2;

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier', 'import'],
  parser: 'babel-eslint',
  // stop eslint from looking for a config file in parent folders
  root: true,
  rules: {
    indent: ['error', 2],
    'prettier/prettier': 'error',
    'linebreak-style': [0, 'unix'],
    'import/newline-after-import': OFF,
    quotes: ['error', 'single'],
    semi: OFF,
    'react/forbid-prop-types': OFF,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': OFF,
    'jsx-a11y/label-has-for': OFF,
    'react/require-default-props': OFF,
    'import/no-extraneous-dependencies': OFF,
    'no-nested-ternary': OFF,
    'jsx-a11y/no-autofocus': OFF,
    'react/prop-types': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  env: {
    browser: true,
  },
};
