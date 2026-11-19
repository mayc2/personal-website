import { ArrowUpRight } from 'lucide-react';
import { Section } from './Prose';
import { PROJECTS } from '../content/site';

export const Projects = () => (
  <Section id='projects' title='Projects'>
    <ul className='divide-y divide-border/70'>
      {PROJECTS.map((p) => (
        <li key={p.name} className='py-4 first:pt-0'>
          <div className='flex items-baseline justify-between gap-4'>
            <a
              href={p.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex items-center gap-1 font-medium text-foreground underline decoration-amber decoration-[1.5px] underline-offset-[3px] hover:decoration-accent-foreground'
            >
              {p.name}
              <ArrowUpRight
                className='size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px'
                aria-hidden='true'
              />
            </a>
            {p.meta && (
              <span className='shrink-0 text-sm text-muted-foreground'>
                {p.meta}
              </span>
            )}
          </div>
          <p className='mt-1 text-sm text-muted-foreground'>{p.detail}</p>
        </li>
      ))}
    </ul>
  </Section>
);
