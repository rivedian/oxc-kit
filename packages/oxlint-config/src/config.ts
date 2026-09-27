import { type OxlintConfig, defineConfig } from 'oxlint';

export const config: OxlintConfig = defineConfig({
  overrides: [
    {
      files: ['*.config.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
});
