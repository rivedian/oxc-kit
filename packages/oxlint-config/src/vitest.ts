import { type OxlintConfig, defineConfig } from 'oxlint';

export const vitest: OxlintConfig = defineConfig({
  overrides: [
    {
      files: ['*.test.ts'],
      env: {
        node: true,
      },
      plugins: ['vitest'],
      rules: {
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-describe-function-title': 'off',
        'vitest/prefer-expect-assertions': 'off',
        'vitest/require-test-timeout': 'off',
      },
    },
  ],
});
