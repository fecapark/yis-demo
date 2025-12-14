import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const config = defineConfig([
  globalIgnores(['public', 'dist', 'node_modules', '**/*.d.ts', '**/__generated__', '**/*.gen.*']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      perfectionist.configs['recommended-natural'],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          selector: 'variableLike',
        },
        {
          format: ['PascalCase'],
          selector: ['typeLike', 'enumMember'],
        },
        {
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'typeProperty',
          trailingUnderscore: 'allow',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      curly: 'error',
      // Below rules are for code that can affect runtime behavior.
      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-maps': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'side-effect',
            'unknown',
          ],
          newlinesBetween: 'always',
          customGroups: {
            type: {},
            value: {},
          },
        },
      ],
      // Turn off because it can overlap with perfectionist's sorting.
      'sort-imports': 'off',
      'object-shorthand': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/display-name': [1, { ignoreTranspilerName: false }],
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
      'import/external-module-folders': ['node_modules'],
      react: {
        version: 'detect',
      },
    },
  },
]);

export default config;
