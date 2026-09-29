# Rivedian Oxc Kit

Shared packages for [Oxc](https://oxc.rs) — the Rust-powered linter and formatter.

Drop in a few lines of config and get a strict linter and a consistent formatter.

## Packages

| Package                                             | Description                                                                               |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`@rivedian/oxlint-config`](packages/oxlint-config) | Strict, type-aware [oxlint](https://oxc.rs/docs/guide/usage/linter) config for TypeScript |
| [`@rivedian/oxfmt-config`](packages/oxfmt-config)   | Opinionated [oxfmt](https://oxc.rs/docs/guide/usage/formatter) config with import sorting |

Each package works on its own — install only the ones you need.

## Why

- **Strict by default.** A broad, type-aware ruleset that treats problems as errors, so nothing slips through quietly.
- **Consistent.** Imports are sorted into predictable groups and code is formatted the same way everywhere — no more style debates in code review.
- **Minimal setup.** Extend a preset or re-export a config — no rules to copy around. Override anything you need with plain oxlint/oxfmt options.

## Quick start

Install packages together with their peer dependencies:

```sh
npm add -D @rivedian/oxlint-config @rivedian/oxfmt-config oxlint oxlint-tsgolint oxfmt
```

Create `oxlint.config.ts`. The `typescript` preset is type-aware, so the project needs a `tsconfig.json`:

```ts
import { react, typescript, vitest } from '@rivedian/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [typescript, react, vitest],
});
```

Create `oxfmt.config.ts`:

```ts
export { config as default } from '@rivedian/oxfmt-config';
```

Run them:

```sh
oxlint          # lint
oxlint --fix    # fix lint issues
oxfmt           # fix formatting
oxfmt --check   # check formatting
```

See each package's README for all available presets and customization options.

## Contributing

Thank you for considering contributing to this project! Read the [contribution guide](.github/CONTRIBUTING.md) to get started.

## License

This project is open-sourced under the [MIT license](LICENSE).
