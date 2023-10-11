import { CollectionEntry } from 'astro:content';

export function sortNews(a: CollectionEntry<'news'>, b: CollectionEntry<'news'>) {
  let dateDiff = b.data.publishDate.getTime() - a.data.publishDate.getTime();
  if (dateDiff !== 0) return dateDiff;

  if (a.data.order && b.data.order) return b.data.order - a.data.order;

  return 0;
}
