import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        solutions: resolve(__dirname, 'solutions.html'),
      },
    },
  },
  server: {
    // Middleware for clean URLs in dev mode
    proxy: {},
    middlewareMode: false,
  },
  plugins: [
    {
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.html')) {
            res.writeHead(301, { Location: req.url.replace(/\.html$/, '') });
            return res.end();
          }
          next();
        });
      },
    },
  ],
  appType: 'mpa',
});
