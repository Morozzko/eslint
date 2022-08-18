module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/warnings'
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'import'
  ],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-empty-pattern': 'warn',
    'no-debugger': 'warn',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 160,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'avoid',
        semi: false,
        bracketSameLine: false
      }
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index'
        ],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: [
          'react'
        ],
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal'
          },
          {
            pattern: 'common',
            group: 'internal'
          },
          {
            pattern: 'routes/ **',
            group: 'internal'
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  overrides: [
    {
      files: [
        'src/**/*.ts',
        'src/**/*.tsx'
      ],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ]
}
