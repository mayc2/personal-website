import { Container, TextLink } from './Prose';
import { TopBar } from './TopBar';
import { Footer } from './Contact';
import { LINKS } from '../content/site';

export const Resume = () => (
  <>
    <TopBar />
    <main className='py-12'>
      <Container>
        <h1 className='text-[2rem] leading-[1.15]'>Resume</h1>
        <p className='mt-3 text-sm text-muted-foreground'>
          Having trouble viewing?{' '}
          <TextLink href={LINKS.resume} external>
            Open the PDF
          </TextLink>
          .
        </p>
        <object
          data={LINKS.resume}
          type='application/pdf'
          className='mt-6 h-[80vh] w-full rounded-2xl border border-border/70 bg-card'
          aria-label='Chris May resume PDF'
        >
          <embed src={LINKS.resume} type='application/pdf' />
        </object>
      </Container>
    </main>
    <Footer />
  </>
);
