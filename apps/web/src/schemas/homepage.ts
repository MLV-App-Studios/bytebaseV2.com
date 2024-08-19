import { z, defineCollection } from 'astro:content';

export default defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
})
