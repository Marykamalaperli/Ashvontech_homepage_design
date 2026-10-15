
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // GitHub Pages repository path for production
  base: process.env.NODE_ENV === 'production'
    ? '/Ashvontech_homepage_design/'
    : '/',

  server: {
    port: 3000,
    open: false
  }
});
