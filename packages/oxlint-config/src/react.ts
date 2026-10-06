import { type OxlintConfig, defineConfig } from 'oxlint';

export const react: OxlintConfig = defineConfig({
  overrides: [
    {
      files: ['*.tsx', '**/use*.ts'],
      env: {
        browser: true,
      },
      plugins: ['react', 'react-perf', 'jsx-a11y'],
      rules: {
        'react/function-component-definition': ['error', { namedComponents: ['arrow-function'] }],
        'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],
        'react/jsx-max-depth': ['error', { max: 5 }],
        'react/jsx-props-no-spreading': 'off',
        'react/forbid-component-props': 'off',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
});
