# @rivedian/oxlint-config

Shared [oxlint](https://oxc.rs/docs/guide/usage/linter) configurations.

## Installation

```sh
npm add -D @rivedian/oxlint-config oxlint oxlint-tsgolint
# or
pnpm add -D @rivedian/oxlint-config oxlint oxlint-tsgolint
```

## Usage

Create an `oxlint.config.ts` in your project and import the desired config:

### TypeScript projects

The `typescript` export enables a strict, type-aware ruleset for TypeScript projects. It requires a `tsconfig.json` in the project:

```ts
import { typescript } from '@rivedian/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [typescript],
});
```

### Config file overrides

The `config` export relaxes rules that conflict with the conventions of tool config files (e.g. `vite.config.ts`). Add it after your main preset:

```ts
import { config, typescript } from '@rivedian/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [typescript, config],
});
```

### Extending

Use `extends` together with additional rules to customize the config:

```ts
import { typescript } from '@rivedian/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [typescript],
  rules: {
    'no-console': 'off',
  },
});
```

## License

This project is open-sourced under the MIT license.
