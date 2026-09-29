import { type OxlintConfig, defineConfig } from 'oxlint';

export const config: OxlintConfig = defineConfig({
  overrides: [
    {
      files: ['*.config.ts'],
      env: {
        node: true,
      },
      rules: {
        'import/no-default-export': 'off',
        'import/no-nodejs-modules': 'off',
      },
    },
  ],
});
