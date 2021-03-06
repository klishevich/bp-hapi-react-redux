module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'jest'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jest/no-identical-title': 'error',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/prop-types': [2],
    'import/prefer-default-export': [0],
    'class-methods-use-this': [0],
    'object-curly-newline': [0],
    'arrow-parens': [0]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    },
    react: {
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
    }
  }
};
