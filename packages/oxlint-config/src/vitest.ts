import { type OxlintConfig, defineConfig } from 'oxlint';

export const vitest: OxlintConfig = defineConfig({
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        node: true,
      },
      plugins: ['vitest'],
      rules: {
        'import/no-nodejs-modules': 'off',
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-describe-function-title': 'off',
        'vitest/prefer-expect-assertions': 'off',
        'vitest/require-test-timeout': 'off',
      },
    },
  ],
});
