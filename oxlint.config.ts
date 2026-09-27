import { config, typescript } from '@rivedian/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [typescript, config],
});
