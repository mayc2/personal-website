import { Link } from 'react-router-dom';
import { Container } from './Prose';
import { LINKS } from '../content/site';

const item =
  'text-sm text-muted-foreground transition-colors hover:text-foreground';

export const TopBar = () => (
  <header className='pt-8 sm:pt-12'>
    <Container className='flex items-baseline justify-between'>
      <Link to='/' className='font-display text-lg font-medium text-foreground'>
        Chris May<span className='text-amber'>.</span>
      </Link>
      <nav aria-label='Primary' className='flex gap-5'>
        <a href='/#work' className={item}>
          Work
        </a>
        <a href='/#projects' className={item}>
          Projects
        </a>
        <a
          href={LINKS.resume}
          target='_blank'
          rel='noopener noreferrer'
          className={item}
        >
          Resume
        </a>
      </nav>
    </Container>
  </header>
);
