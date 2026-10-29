import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anaelisabelezafacial.com.br',
  trailingSlash: 'always',
  integrations: [react(), sitemap({ filter: (page) => !page.endsWith('/404/'), lastmod: new Date() })],
  vite: {
    ssr: {
      // styled-components / framer-motion precisam ser processados pelo Vite no SSR
      noExternal: ['framer-motion'],
    },
  },
});
