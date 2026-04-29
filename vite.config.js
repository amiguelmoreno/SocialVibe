import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function asyncCssPlugin() {
  return {
    name: 'async-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
        (_, href) =>
          `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
})
