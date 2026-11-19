import { ArrowUpRight } from 'lucide-react';
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@chrismay/ui';
import { Section } from './Prose';
import { PROJECTS, type Project } from '../content/site';

const Title = ({ p }: { p: Project }) =>
  p.href ? (
    <a
      href={p.href}
      target='_blank'
      rel='noopener noreferrer'
      className='group/link flex items-start justify-between gap-3 after:absolute after:inset-0'
    >
      <span>{p.name}</span>
      <ArrowUpRight
        className='mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover/link:-translate-y-px group-hover/link:translate-x-px'
        aria-hidden='true'
      />
    </a>
  ) : (
    <span>{p.name}</span>
  );

export const Projects = () => (
  <Section id='projects' title='Selected projects'>
    <ul className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
      {PROJECTS.map((p) => (
        <li key={p.name}>
          <Card className='relative flex h-full flex-col border-border/70 shadow-none transition-colors hover:border-sage/40'>
            <CardHeader className='pb-2'>
              <CardTitle className='font-display text-lg font-medium leading-snug'>
                <Title p={p} />
              </CardTitle>
              {p.meta && (
                <CardDescription className='text-[13px]'>
                  {p.meta}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className='flex flex-1 flex-col gap-4'>
              <p className='text-sm text-muted-foreground'>{p.detail}</p>
              <div className='mt-auto flex flex-wrap gap-1.5'>
                {p.tags.map((t) => (
                  <Badge
                    key={t}
                    variant='secondary'
                    className='text-[13px] font-normal'
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  </Section>
);
