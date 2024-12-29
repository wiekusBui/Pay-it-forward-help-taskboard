import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for deployment
  build: {
    outDir: 'dist', // Directory where the build files will be generated
  },
});
