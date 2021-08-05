import styled from '@emotion/styled';
import { Section } from '../common/styles/Section';
import { Heading } from '../common/styles/Heading';


const AboutWrapper = styled.div`
    padding: 0 12rem 0 12rem;
  font-size: 20px;
  text-align: center;
  
  @media screen and (max-width: 960px) {
    padding: 0 8rem 0 8rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 3rem 0 3rem;
  }
`;

export const About = () => {
  return (
    <Section className="about" direction="row">
      <Heading primary={true}>A Little about myself...</Heading>
      <AboutWrapper>
        <p>
          <br />
          My most recent work experience has been developing the front-end
          codelines and build systems of Workday’s analytics platform.
          <br />I have experience building enterprise level web applications
          that serve a broad range of Fortune 500 companies. I take pride in my
          contributions towards multiple product and platform go-lives. Thanks
          for your time!
        </p>
      </AboutWrapper>
    </Section>
  );
};
