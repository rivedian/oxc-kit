import { type OxlintConfig, defineConfig } from 'oxlint';

export const typescript: OxlintConfig = defineConfig({
  categories: {
    correctness: 'error',
    nursery: 'error',
    pedantic: 'error',
    perf: 'error',
    restriction: 'error',
    style: 'error',
    suspicious: 'error',
  },
  plugins: ['typescript', 'eslint', 'oxc', 'unicorn', 'import', 'promise'],
  options: {
    typeAware: true,
    typeCheck: true,
    denyWarnings: true,
    reportUnusedDisableDirectives: 'error',
  },
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',
    'sort-keys': 'off',
    'typescript/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
  },
});
