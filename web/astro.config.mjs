// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [solidJs()],
  vite: {
    plugins: [tailwindcss()],
    server: {
        // port: CONFIG.PORTS.FRONTEND,
        watch: {
            awaitWriteFinish: {
                stabilityThreshold: 700,
                pollInterval: 500,
            },
        },
    },
  },
});
