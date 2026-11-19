import { ArrowRight, Award as AwardIcon } from 'lucide-react';
import { Container } from './Prose';
import { AWARD } from '../content/site';

export const Award = () => (
  <Container className='pb-6'>
    <a
      href={AWARD.href}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center gap-5 rounded-2xl border border-border/70 bg-card px-6 py-5 transition-colors hover:border-sage/40'
    >
      <span className='flex size-11 shrink-0 items-center justify-center rounded-full bg-peach-soft text-accent-foreground'>
        <AwardIcon className='size-5' aria-hidden='true' />
      </span>
      <span className='min-w-0 flex-1'>
        <span className='block text-sm text-muted-foreground'>
          {AWARD.year} · Latest achievement
        </span>
        <span className='block text-base text-foreground'>
          <span className='font-medium'>{AWARD.title}</span> — {AWARD.detail}
        </span>
      </span>
      <ArrowRight
        className='size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5'
        aria-hidden='true'
      />
    </a>
  </Container>
);
