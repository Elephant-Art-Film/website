import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().nonempty(),
		publishDate: z.date(),
	}),
});

export const collections = {
	news: newsCollection,
};
