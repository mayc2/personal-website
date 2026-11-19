import { Section, TextLink } from './Prose';
import { LINKS } from '../content/site';

export const Contact = () => (
  <Section id='contact' title='Contact' className='pb-20'>
    <p className='text-base text-foreground/90'>
      The best way to reach me is{' '}
      <TextLink href={`${LINKS.email}?subject=Hey%20Chris%2C%20Let's%20Chat`}>
        email
      </TextLink>
      . I’m also on{' '}
      <TextLink href={LINKS.linkedin} external>
        LinkedIn
      </TextLink>{' '}
      and{' '}
      <TextLink href={LINKS.github} external>
        GitHub
      </TextLink>
      , and my{' '}
      <TextLink href={LINKS.resume} external>
        resume
      </TextLink>{' '}
      is one click away.
    </p>
    <p className='mt-12 text-sm text-muted-foreground'>
      © {new Date().getFullYear()} Chris May
    </p>
  </Section>
);
