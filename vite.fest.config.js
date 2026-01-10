import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public-fest',
  build: {
    outDir: '../dist-fest',
  },
  server: {
    port: 3001,
  },
});
