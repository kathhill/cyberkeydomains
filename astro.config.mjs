// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cyberkeydomains.com',
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Montserrat",
    cssVariable: "--font-montserrat",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Montserrat-VariableFont_wght.ttf'],
        weight: '100 900',
        style: 'normal',        
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "Montserrat Italic",
    cssVariable: "--font-montserrat-italic",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'],
        weight: '100 900',
        style: 'italic',        
      }]
    }
  }]
});