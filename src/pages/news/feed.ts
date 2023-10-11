import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

import { sortNews } from '@common/sorting';

import rss from '@astrojs/rss';

export async function GET({ site }: APIContext) {
  const news = await getCollection('news');
  return rss({
    title: 'ELEPHANT art film',
    description: 'We are an artistic group making short films',
    site: site as URL,
    items: news.sort(sortNews).map((item) => ({
      title: item.data.title,
      pubDate: item.data.publishDate,
      description: item.data.description,
      link: `/news/${item.slug}`,
    })),
  });
}
