import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@chrismay/ui';
import { Container } from './Prose';
import { LINKS } from '../content/site';

const ICONS = [
  {
    href: `${LINKS.email}?subject=Hey%20Chris%2C%20Let's%20Chat`,
    label: 'Email',
    Icon: Mail,
  },
  { href: LINKS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: LINKS.github, label: 'GitHub', Icon: Github },
];

export const Contact = () => (
  <section id='contact' className='scroll-mt-24 py-14 sm:py-20'>
    <Container>
      <div className='rounded-3xl bg-sage-soft/70 px-6 py-14 text-center sm:px-12'>
        <h2 className='text-[1.75rem] leading-tight sm:text-[2rem]'>
          Wanna say hey?
        </h2>
        <p className='mx-auto mt-3 max-w-md text-base text-muted-foreground'>
          Whether it’s agents, platforms or a good restaurant in Napa, I’d love
          to hear from you.
        </p>
        <Button asChild size='lg' className='mt-8'>
          <a href={`${LINKS.email}?subject=Hey%20Chris%2C%20Let's%20Chat`}>
            Pop me an email
          </a>
        </Button>
      </div>
    </Container>
  </section>
);

export const Footer = () => (
  <footer className='border-t border-border/70 py-8'>
    <Container className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
      <p className='text-sm text-muted-foreground'>
        © {new Date().getFullYear()} Chris May · San Francisco Bay Area
      </p>
      <ul className='flex gap-2'>
        {ICONS.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className='flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-sage/50 hover:text-foreground'
            >
              <Icon className='size-4' aria-hidden='true' />
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </footer>
);
