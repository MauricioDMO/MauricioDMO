import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  redirects: {
    '/parcial': 'https://chatgpt.com/share/69028dfc-c82c-8009-b747-0efdfb33778f'
  }
});