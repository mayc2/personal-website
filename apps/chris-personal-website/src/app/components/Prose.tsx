import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@chrismay/ui';

/** Page-wide column for layout (header, hero, cards). */
export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('mx-auto w-full max-w-5xl px-5 sm:px-8', className)}>
    {children}
  </div>
);

/** Narrow column for running text. */
export const TextColumn = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('max-w-[42rem]', className)}>{children}</div>
);

export const Section = ({
  id,
  title,
  aside,
  children,
  className,
}: PropsWithChildren<{
  id: string;
  title: string;
  aside?: ReactNode;
  className?: string;
}>) => (
  <section id={id} className={cn('scroll-mt-24 py-14 sm:py-20', className)}>
    <Container>
      <div className='mb-8 flex items-baseline justify-between gap-4'>
        <h2 className='text-[1.75rem] leading-tight sm:text-[2rem]'>{title}</h2>
        {aside}
      </div>
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
    className='font-medium text-foreground underline decoration-sage/60 decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-sage-deep hover:decoration-sage-deep'
  >
    {children}
  </a>
);
