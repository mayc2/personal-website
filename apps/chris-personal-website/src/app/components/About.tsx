import styled from '@emotion/styled';
import { Section } from '../common/styles/Section';
import { Heading } from '../common/styles/Heading';
import { SubHeading } from '../common/styles/SubHeading';

const AboutWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TextSection = styled.p`
  font-size: 25px;
  max-width: 52rem;
  margin: 0 auto 1rem;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const About = () => {
  return (
    <Section id='about' className='about' direction='row'>
      <AboutWrapper>
        <Heading primary={true}>A little about myself...</Heading>
        <ContentSection>
          <SubHeading>Professional</SubHeading>
          <TextSection>
            I’m a hands-on technical lead with 10+ years in enterprise
            software. As Verantos’s first engineer I built the research
            platform foundation and the first-generation AI Research
            Assistant, then brought on a multidisciplinary team to scale the
            platform into tool-orchestrated agents for clinical research.
          </TextSection>
          <TextSection>
            I focus on agent reliability, analytical performance, evaluation
            and intuitive user experiences. The Verantos Evidence Platform won
            the 2026 Fierce AI Innovation Award in Real-World Evidence &amp;
            Data Analytics. Before Verantos I spent five years at Workday,
            most recently on the front end and build systems of Prism
            Analytics.
          </TextSection>
        </ContentSection>
        <ContentSection>
          <SubHeading>Personal</SubHeading>
          <TextSection>
            I grew up in a small town outside of Annapolis, MD. I moved to
            upstate New York for college and now reside in the San Francisco Bay
            Area.
          </TextSection>
          <TextSection>
            I enjoy all things active! You will catch me playing sports year
            round, hiking during the summer and ski/snowboarding in the winter.
          </TextSection>
          <TextSection>
            Otherwise, you can catch me eating and drinking my way through the
            greater Bay Area and Sonoma/Napa Valley regions!
          </TextSection>
        </ContentSection>
      </AboutWrapper>
    </Section>
  );
};
