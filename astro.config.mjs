// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
	site: 'https://kingtallow.com',
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
	},
	integrations: [
		mdx({
			remarkPlugins: [remarkGfm],
		}),
		sitemap(),
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	markdown: {
		remarkPlugins: [remarkGfm],
	},
});
