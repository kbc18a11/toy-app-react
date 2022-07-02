module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'react-hooks/rules-of-hooks': [
      'error',
    ],
    'react-hooks/exhaustive-deps': [
      'error',
    ],
    semi: ['error', 'always'],
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
  overrides: [
    {
      files: ['**/vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
