import { defineConfig } from 'oxlint';

import { typescript, config } from '@rivedian/oxlint-config';

export default defineConfig({
  extends: [typescript, config],
});
