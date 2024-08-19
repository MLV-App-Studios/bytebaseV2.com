import { z, defineCollection } from 'astro:content';

const homepage = defineCollection({
  type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
	})
})

export default homepage
