# @rivedian/oxfmt-config

Shared [oxfmt](https://oxc.rs/docs/guide/usage/formatter) configuration.

Includes opinionated defaults:

- 120 character print width
- Single quotes
- Arrow function parens omitted when possible
- Import sorting in blank-line-separated groups: builtins, external packages (with React packages sorted first), internal, relative, side effects, and styles

## Installation

```sh
npm add -D @rivedian/oxfmt-config oxfmt
# or
pnpm add -D @rivedian/oxfmt-config oxfmt
```

## Usage

Create an `oxfmt.config.ts` at the root of your project:

```ts
export { config as default } from '@rivedian/oxfmt-config';
```

Then run the formatter:

```sh
# Check formatting
oxfmt --check

# Fix formatting
oxfmt --write
```

## License

This project is open-sourced under the MIT license.
