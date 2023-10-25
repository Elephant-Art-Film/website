import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().nonempty(),
    publishDate: z.date(),
    thumbnail: z.string().url(),
    image: z.string().url(),
    trailer: z.string().optional(), // youtube id
    order: z.number().optional(), // necessary when multiple news items are published on the same day
    description: z.string().optional(),
  }),
});

const filmCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().nonempty(),
    releaseOrder: z.number(),
    year: z.number(),
    cover: z.string().url(),
    poster: z.string().url(),
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
