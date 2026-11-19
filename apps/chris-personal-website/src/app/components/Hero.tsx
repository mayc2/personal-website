import { Container, TextLink } from './Prose';
import { LINKS } from '../content/site';

export const Hero = () => (
  <section id='top' className='pt-16 pb-4 sm:pt-20'>
    <Container>
      <h1 className='text-[2rem] leading-[1.15]'>Chris May</h1>
      <p className='mt-5 text-base text-foreground/90'>
        Applied AI engineer and technical lead. I was the first engineer at{' '}
        <TextLink href='https://www.verantos.com' external>
          Verantos
        </TextLink>
        , where I built the research platform and the AI Research Assistant,
        then grew the team that turned it into tool-orchestrated agents for
        clinical research.
      </p>
      <p className='mt-4 text-base text-foreground/90'>
        Before that, five years at Workday on analytics and student systems. I
        care about agent reliability, evaluation, and interfaces that make
        complex work feel simple. Based in the San Francisco Bay Area.
      </p>
      <p className='mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm'>
        <TextLink href={LINKS.resume} external>
          Resume
        </TextLink>
        <TextLink href={LINKS.email}>Email</TextLink>
        <TextLink href={LINKS.github} external>
          GitHub
        </TextLink>
        <TextLink href={LINKS.linkedin} external>
          LinkedIn
        </TextLink>
      </p>
    </Container>
  </section>
);
