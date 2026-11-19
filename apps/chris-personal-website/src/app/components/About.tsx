import { Section } from './Prose';

export const About = () => (
  <Section id='about' title='About'>
    <div className='space-y-4 text-base text-foreground/90'>
      <p>
        I grew up in a small town outside Annapolis, Maryland, went to college
        in upstate New York, and have lived in the Bay Area since. I like being
        outside: sports year round, hiking in summer, skiing and snowboarding in
        winter, and eating my way through Sonoma and Napa when I can.
      </p>
      <p>
        At work I split my time between building and leading. The parts I enjoy
        most are the ones where a careful system design makes something hard
        look obvious to the person using it.
      </p>
    </div>
  </Section>
);
