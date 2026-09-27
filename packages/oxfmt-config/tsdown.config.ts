import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  sourcemap: true,
  outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
});
