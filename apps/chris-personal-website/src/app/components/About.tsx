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

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const About = () => {
  return (
    <Section className='about' direction='row'>
      <AboutWrapper>
        <Heading primary={true}>A little about myself...</Heading>
        <ContentSection>
          <SubHeading>Professional</SubHeading>
          <TextSection>
            My most recent work experience has been developing the front-end
            codelines and build systems of Workday’s analytics platform.
          </TextSection>
          <TextSection>
            I have experience building enterprise level web applications that
            serve a broad range of Fortune 500 companies. I take pride in my
            contributions towards multiple product and platform go-lives. Thanks
            for your time!
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
            Otherwise you can catch me eating and drinking my way through the
            greater Bay Area and Sonoma/Napa Valley regions!
          </TextSection>
        </ContentSection>
      </AboutWrapper>
    </Section>
  );
};
