import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import partytown from '@astrojs/partytown';
import { SITE } from './src/config.mjs';
import mdx from "@astrojs/mdx";
import m2dx from 'astro-m2dx';

import { remarkReadingTime } from './src/utils/frontmatter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  relativeImages: true,
};

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,
  output: 'static',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), image(),
  /* Disable this integration if you don't use Google Analytics (or other external script). */
  partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), mdx()],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      [m2dx, m2dxOptions]
    ],
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'nord',
      langs: ['javascript'],
      wrap: true
    },
  }
});