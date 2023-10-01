import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().nonempty(),
    publishDate: z.date(),
    image: z.string(),
    description: z.string(),
  }),
});

const filmCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().nonempty(),
    year: z.number(),
    cover: z.string().url(),
    poster: z.string().url(),
    // thumbnail: z.string().url(),
    genre: z.array(z.string()),
    runtime: z.string(),
    aspectRatio: z.string(),
    color: z.enum(['color', 'black and white']),
    soundFormat: z.string(),
    imdbId: z
      .string()
      .regex(/^tt\d+$/)
      .optional(),
    trailer: z.string().optional(), // youtube id
    teasers: z.array(z.string()).optional(), // youtube ids
    stills: z.array(z.string().url()).optional(),
    awards: z.array(z.string()).optional(),
    pressPack: z.string().url().optional(),
  }),
});

export const collections = {
  films: filmCollection,
  news: newsCollection,
};
