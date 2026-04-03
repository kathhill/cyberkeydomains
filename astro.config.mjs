// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // temp github pages deployment
    site: 'https://kathhill.github.io',
    base: '/cyberkeydomains',
    // end temp github page deployment
  vite: {
    plugins: [tailwindcss()]
  }
});