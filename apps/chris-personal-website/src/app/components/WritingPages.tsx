import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container, TextColumn } from './Prose';
import { TopBar } from './TopBar';
import { Footer } from './Contact';
import { WritingList } from './Writing';
import { POSTS, formatDate } from '../content/posts';

export const WritingIndex = () => (
  <>
    <TopBar />
    <main className='py-12 sm:py-16'>
      <Container>
        <h1 className='text-[2rem] leading-[1.15]'>Writing</h1>
        <p className='mt-3 max-w-[36rem] text-base text-muted-foreground'>
          Occasional notes on agent systems, platforms, and whatever I’m
          figuring out.
        </p>
        <div className='mt-10 max-w-[46rem]'>
          <WritingList />
        </div>
      </Container>
    </main>
    <Footer />
  </>
);

export const PostPage = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  return (
    <>
      <TopBar />
      <main className='py-12 sm:py-16'>
        <Container>
          <TextColumn>
            <Link
              to='/writing'
              className='inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground'
            >
              <ArrowLeft className='size-3.5' aria-hidden='true' /> All writing
            </Link>
            {post ? (
              <article className='mt-8'>
                <time
                  dateTime={post.date}
                  className='text-sm text-muted-foreground'
                >
                  {formatDate(post.date)}
                </time>
                <h1 className='mt-2 text-[2rem] leading-[1.15] sm:text-[2.5rem]'>
                  {post.title}
                </h1>
                <div
                  className='prose mt-8 space-y-5 text-base text-foreground/90 [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-sage/60 [&_a]:underline-offset-[3px] [&_h2]:mt-10 [&_h2]:text-2xl [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold'
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </article>
            ) : (
              <p className='mt-8 text-base text-muted-foreground'>
                That post doesn’t exist.
              </p>
            )}
          </TextColumn>
        </Container>
      </main>
      <Footer />
    </>
  );
};
