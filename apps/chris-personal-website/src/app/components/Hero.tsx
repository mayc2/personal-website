import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@chrismay/ui';
import { Container } from './Prose';
import { HEADLINE, LINKS } from '../content/site';

export const Hero = () => (
  <section id='top' className='py-14 sm:py-20'>
    <Container className='grid items-center gap-12 lg:grid-cols-[1fr_auto]'>
      <div className='max-w-[36rem]'>
        <p className='text-[13px] font-medium tracking-[0.14em] text-muted-foreground uppercase'>
          {HEADLINE.kicker}
        </p>
        <h1 className='mt-5 text-[2.5rem] leading-[1.08] sm:text-[3.5rem]'>
          {HEADLINE.line1}
          <br />
          <span className='text-sage'>{HEADLINE.line2}</span>
        </h1>
        <p className='mt-6 max-w-[32rem] text-lg leading-relaxed text-muted-foreground'>
          {HEADLINE.intro}
        </p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <Button asChild size='lg'>
            <a href={`${LINKS.email}?subject=Hey%20Chris%2C%20Let's%20Chat`}>
              Say hello
            </a>
          </Button>
          <Button
            asChild
            size='lg'
            variant='secondary'
            className='bg-sage-soft text-sage-deep hover:bg-sage-soft/70'
          >
            <a href='#about'>
              About me <ArrowRight aria-hidden='true' />
            </a>
          </Button>
        </div>
        <p className='mt-8 flex items-center gap-2 text-sm text-muted-foreground'>
          <MapPin className='size-4' aria-hidden='true' />
          {HEADLINE.location}
        </p>
      </div>

      <div
        className='relative mx-auto h-[300px] w-[300px] overflow-hidden sm:h-[380px] sm:w-[380px]'
        aria-hidden='false'
      >
        <div className='absolute inset-x-0 top-3 bottom-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--peach-soft),var(--sage-soft)_75%)]' />
        <img
          src='/assets/Chris.png'
          alt='Chris May with a hiking backpack'
          className='absolute bottom-0 left-1/2 h-[104%] max-w-none -translate-x-1/2 object-contain object-bottom'
          width={380}
          height={395}
        />
      </div>
    </Container>
  </section>
);
