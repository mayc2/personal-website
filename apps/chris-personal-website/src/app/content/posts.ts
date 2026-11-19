import { marked } from 'marked';

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  html: string;
};

const files = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const parseFrontMatter = (raw: string) => {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  if (!m) return { meta, body: raw };
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: m[2] };
};

export const POSTS: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontMatter(raw);
    const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
    return {
      slug,
      title: meta['title'] ?? slug,
      date: meta['date'] ?? '',
      summary: meta['summary'] ?? '',
      html: marked.parse(body, { async: false }) as string,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
