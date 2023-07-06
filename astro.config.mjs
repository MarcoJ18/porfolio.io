import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://marcoj18.github.io/porfolio.io',
  integrations: [tailwind()]
});