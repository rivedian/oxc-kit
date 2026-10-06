# Changelog

## 0.2.0 - 2026-10-06

Relax opinionated rules and widen file patterns in presets.

**TypeScript preset**

- Turn off:
  - `import/group-exports`
  - `no-warning-comments`
  - `one-var`
  - `oxc/no-async-await`
  - `oxc/no-rest-spread-properties`
  - `sort-imports`
  - `typescript/promise-function-async`
  - `unicorn/no-array-for-each`
- Allow `t` as a short identifier in `id-length`
- Allow unassigned CSS imports in `import/no-unassigned-import`
- Ignore `0` in `no-magic-numbers`

**React preset**

- Apply to hook files matching `**/use*.ts` in addition to `*.tsx`

**Vitest preset**

- Apply to `*.test.tsx` files in addition to `*.test.ts`
- Allow Node.js module imports in tests (`import/no-nodejs-modules` off)

## 0.1.0 - 2026-09-30

Initial release
