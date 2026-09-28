# Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Submitting a fix
- Proposing new features

## We develop with GitHub

We use GitHub to host code, to track issues and feature requests, and to accept pull requests.

## Contributions are MIT licensed

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](../LICENSE) that covers the project. Feel free to [contact us](mailto:github@rivedian.com) if that's a concern.

## Issues

Issues are very valuable to this project:

- Ideas suggest improvements others can contribute
- Problems show where this project is lacking
- Questions show where the user experience can improve

Thank you for creating them. People _love_ thorough bug reports.

When you open a new issue, choose the **Bug Report** or **Feature Request** template. Each one walks you through what to include.

## Development setup

This project uses [pnpm](https://pnpm.io). The required Node.js and pnpm versions are declared under `devEngines` in [`package.json`](../package.json) and are downloaded automatically if missing. Running `pnpm install` installs dependencies and sets up the git hooks.

## Pull requests

1. Fork the repo and create your branch from `main`. If `main` has moved on, rebase before opening your pull request. If it doesn't merge cleanly, you may be asked to rebase your changes.
2. Keep commits as small as possible while ensuring each one is correct on its own (i.e., each commit should pass `pnpm verify`).
3. Write commit messages that follow the [commitlint](../commitlint.config.ts) rules. The git hooks check them when you commit.

## Code of Conduct

This project and everyone participating in it are governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
