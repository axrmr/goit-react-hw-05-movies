import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/goit-react-hw-05-movies/',
  plugins: [react()],
  resolve: {
    alias: {
      '~': '/src/',
      components: '/src/components',
      services: '/src/services',
      helpers: '/src/helpers',
      pages: '/src/pages',
      hooks: '/src/hooks',
    },
  },
});
