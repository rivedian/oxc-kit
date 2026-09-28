import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const maxLineLength = 100;

export default {
  rules: {
    'header-case': [RuleConfigSeverity.Error, 'always', ['sentence-case']],
    'header-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'header-max-length': [RuleConfigSeverity.Error, 'always', maxLineLength],
    'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
    'body-case': [RuleConfigSeverity.Error, 'always', ['sentence-case']],
    'body-full-stop': [RuleConfigSeverity.Error, 'always', '.'],
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', maxLineLength],
    'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
    'footer-max-line-length': [RuleConfigSeverity.Error, 'always', maxLineLength],
  },
} satisfies UserConfig;
