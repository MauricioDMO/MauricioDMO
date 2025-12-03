import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  redirects: {
    '/parcial': 'https://chatgpt.com/share/6930c610-7800-8009-84f1-451fafba8187'
  }
});
