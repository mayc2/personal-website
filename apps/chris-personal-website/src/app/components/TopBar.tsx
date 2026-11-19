import { Link } from 'react-router-dom';
import { Button } from '@chrismay/ui';
import { Container } from './Prose';
import { LINKS } from '../content/site';

const NAV = [
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#projects', label: 'Projects' },
  { href: '/writing', label: 'Writing', route: true },
];

const item =
  'text-sm text-muted-foreground transition-colors hover:text-foreground';

export const TopBar = () => (
  <header className='border-b border-border/70'>
    <Container className='flex h-16 items-center justify-between'>
      <Link to='/' className='flex items-center gap-3 text-foreground'>
        <span
          className='flex size-8 items-center justify-center rounded-full bg-sage font-display text-[13px] font-semibold text-primary-foreground'
          aria-hidden='true'
        >
          CM
        </span>
        <span className='font-display text-lg font-medium'>Chris May</span>
      </Link>
      <nav aria-label='Primary' className='flex items-center gap-5 sm:gap-7'>
        {NAV.map(({ href, label, route }) =>
          route ? (
            <Link key={href} to={href} className={`${item} hidden sm:inline`}>
              {label}
            </Link>
          ) : (
            <a key={href} href={href} className={`${item} hidden sm:inline`}>
              {label}
            </a>
          )
        )}
        <Button asChild size='sm'>
          <a href={LINKS.resume} target='_blank' rel='noopener noreferrer'>
            Resume
          </a>
        </Button>
      </nav>
    </Container>
  </header>
);
