import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@chrismay/ui';
import { Section, TextColumn } from './Prose';
import { ALSO, STACK, WORK, type Role } from '../content/site';

const RoleCard = ({ role }: { role: Role }) => (
  <Card className='border-border/70 shadow-none'>
    <CardHeader className='pb-3'>
      <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
        <CardTitle className='font-display text-lg font-medium leading-snug'>
          {role.company}
        </CardTitle>
        <span className='text-sm text-muted-foreground'>{role.when}</span>
      </div>
      <CardDescription className='text-sm text-foreground/80'>
        {role.title}
      </CardDescription>
    </CardHeader>
    <CardContent className='space-y-4'>
      <p className='text-sm text-muted-foreground'>{role.summary}</p>
      <ul className='list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/90 marker:text-sage'>
        {role.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <div className='flex flex-wrap gap-1.5'>
        {role.tags.map((t) => (
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
);

export const Work = () => (
  <Section id='work' title='Work'>
    <TextColumn className='max-w-[46rem]'>
      <div className='grid gap-4'>
        {WORK.map((r) => (
          <RoleCard key={`${r.company}-${r.title}`} role={r} />
        ))}
      </div>

      <dl className='mt-10 space-y-3 text-sm'>
        {ALSO.map(({ label, detail }) => (
          <div key={label} className='grid gap-x-6 sm:grid-cols-[11rem_1fr]'>
            <dt className='font-medium text-foreground'>{label}</dt>
            <dd className='text-muted-foreground'>{detail}</dd>
          </div>
        ))}
      </dl>

      <h3 className='mt-10 mb-3 font-sans text-sm font-medium tracking-wide text-muted-foreground uppercase'>
        Stack
      </h3>
      <dl className='space-y-2 text-sm'>
        {STACK.map(({ title, items }) => (
          <div key={title} className='grid gap-x-6 sm:grid-cols-[11rem_1fr]'>
            <dt className='font-medium text-foreground'>{title}</dt>
            <dd className='text-muted-foreground'>{items}</dd>
          </div>
        ))}
      </dl>
    </TextColumn>
  </Section>
);
