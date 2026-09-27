import { type OxfmtConfig, defineConfig } from 'oxfmt';

export const config: OxfmtConfig = defineConfig({
  arrowParens: 'avoid',
  singleQuote: true,
  sortImports: {
    newlinesBetween: false,
    customGroups: [
      {
        groupName: 'react',
        elementNamePattern: ['react', 'react-dom/*'],
      },
    ],
    groups: [
      'builtin',
      { newlinesBetween: true },
      'react',
      'external',
      { newlinesBetween: true },
      'internal',
      { newlinesBetween: true },
      'parent',
      'sibling',
      { newlinesBetween: true },
      'side_effect',
      { newlinesBetween: true },
      'side_effect_style',
    ],
  },
});
