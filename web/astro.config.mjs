// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
