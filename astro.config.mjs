// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://JqSilva.github.io',
  base: 'landing-copy',
  vite: {
    plugins: [tailwindcss()]
  },
});