import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [tailwind()]
});