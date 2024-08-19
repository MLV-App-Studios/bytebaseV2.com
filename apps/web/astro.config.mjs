import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import tailwindcssNesting from 'tailwindcss/nesting'


import cloudflare from "@astrojs/cloudflare";
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
		tailwind({
			applyBaseStyles: false,
		}), 
		react(), 
		markdoc(), 
		mdx(), 
		keystatic()
	],
  output: "hybrid",
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true
    }
  }),
	vite: {
		css: {
			postcss: {
				plugins: [tailwindcssNesting()]
			}
		}
	}
});
