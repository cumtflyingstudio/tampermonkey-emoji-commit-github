import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
    }),
  ],
  build: {
    minify: false,
    lib: {
      name: 'Tampermonkey',
      fileName: 'Tampermonkey',
      entry: './src/main.ts',
      formats: ['umd'],
    },
  },
});
