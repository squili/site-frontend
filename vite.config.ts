import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  plugins: [solidPlugin(), htmlMinifier({minify: true})],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
