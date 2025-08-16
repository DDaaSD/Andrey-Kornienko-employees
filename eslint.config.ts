import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
    },
  },
  {
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'react/prop-types': 'off',
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-unused-vars': 'off',
    }
  },
  pluginReact.configs.flat.recommended,
])
