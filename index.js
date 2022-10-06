module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/warnings',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": "error",
    "prefer-template": "error",
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty-pattern': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    "react/jsx-curly-brace-presence": ['error', { "props": "never", "children": "ignore" }],
    "newline-before-return": "error",
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'avoid',
        semi: false,
        bracketSameLine: false,
      },
    ],
    "import/no-default-export": "error",
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'routes/ **',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  }
}
