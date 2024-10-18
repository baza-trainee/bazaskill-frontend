import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default antfu({
  type: 'app',
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
  },
  ignores: ['**/migrations/*'],
}, {
  rules: {
    'no-console': ['off'],
    'ts/no-require-imports': ['off'],
    'ts/no-explicit-any': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['off'],
    'regexp/no-obscure-range': ['off'],
    'regexp/no-unused-capturing-group': ['off'],
    'no-alert': ['off'],
    'ts/no-unused-expressions': ['off'],
    'array-callback-return': 'off',
    'perfectionist/sort-imports': ['error', {
      internalPattern: ['@/**'],
    }],
    'unicorn/filename-case': ['off', {
      case: 'kebabCase',
      ignore: ['README.md'],
    }],
  },
}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'off',
    'tailwindcss/no-unnecessary-arbitrary-value': 'off',
  },
}));
