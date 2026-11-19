import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, TextColumn } from './Prose';
import { POSTS, formatDate } from '../content/posts';

export const WritingList = ({ limit }: { limit?: number }) => (
  <ul className='divide-y divide-border/70'>
    {POSTS.slice(0, limit).map((post) => (
      <li
        key={post.slug}
        className='grid gap-1 py-5 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-6'
      >
        <time dateTime={post.date} className='text-sm text-muted-foreground'>
          {formatDate(post.date)}
        </time>
        <div>
          <h3 className='text-lg leading-snug'>
            <Link
              to={`/writing/${post.slug}`}
              className='text-foreground hover:text-sage-deep'
            >
              {post.title}
            </Link>
          </h3>
          <p className='mt-1 text-sm text-muted-foreground'>{post.summary}</p>
        </div>
      </li>
    ))}
  </ul>
);

export const Writing = () => (
  <Section
    id='writing'
    title='Writing'
    aside={
      <Link
        to='/writing'
        className='inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground'
      >
        All posts <ArrowRight className='size-3.5' aria-hidden='true' />
      </Link>
    }
  >
    <TextColumn className='max-w-[46rem]'>
      <WritingList limit={3} />
    </TextColumn>
  </Section>
);
