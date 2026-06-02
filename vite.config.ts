import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({command}) => ({
  plugins: [react(), tailwindcss()],
  base:
    command === 'build' && process.env.GITHUB_PAGES === 'true'
      ? '/presentation-csu-practice/'
      : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
}));
