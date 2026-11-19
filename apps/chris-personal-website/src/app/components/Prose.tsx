import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@chrismay/ui';

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('mx-auto w-full max-w-[42rem] px-5 sm:px-6', className)}>
    {children}
  </div>
);

export const Section = ({
  id,
  title,
  children,
  className,
}: PropsWithChildren<{ id: string; title: string; className?: string }>) => (
  <section id={id} className={cn('scroll-mt-24 py-12 sm:py-16', className)}>
    <Container>
      <h2 className='mb-6 text-[1.375rem] leading-tight'>{title}</h2>
      {children}
    </Container>
  </section>
);

export const TextLink = ({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className='font-medium text-foreground underline decoration-amber decoration-[1.5px] underline-offset-[3px] transition-colors hover:decoration-accent-foreground'
  >
    {children}
  </a>
);
