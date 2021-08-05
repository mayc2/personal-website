import styled from '@emotion/styled';
import { GithubIcon } from '../common/Icons/GithubIcon';
import { LinkedIn } from '../common/Icons/LinkedIn';
import { MailIcon } from '../common/Icons/MailIcon';
import { ResumeIcon } from '../common/Icons/ResumeIcon';
import { ContactIconWrapper } from '../common/styles/ContactIconWrapper';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';
import { SubHeading } from '../common/styles/SubHeading';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;

  svg {
    height: 48px;
    width: 48px;
  }

  @media screen and (max-width: 768px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

const ContactContainer = styled.div`
  margin-top: 10rem;
`;

const ContactFlexWrapper = styled.div`
  display: flex;
  flex: 1;
`

export const Contact = () => {
  return (
    <Section className="contact" >
      <ContactContainer>
        <Heading primary={true}>Wanna Say Hey?</Heading>
        <SubHeading>I’d love to hear from you!</SubHeading>
        <SubHeading>Pop me an email.</SubHeading>
      </ContactContainer>
      <ContactFlexWrapper>
        <ContactWrapper>
          <a
            href="https://www.linkedin.com/in/chrismhmay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIconWrapper>
              <LinkedIn />
            </ContactIconWrapper>
          </a>
          <a
            href="https://github.com/mayc2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIconWrapper>
              <GithubIcon />
            </ContactIconWrapper>
          </a>
          <a
            href="mailto:r16cmay@gmail.com?subject=Hey%20Chris%2C%20Let's%20Chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIconWrapper>
              <MailIcon />
            </ContactIconWrapper>
          </a>
          <a
            href="https://bit.ly/3i816sS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIconWrapper>
              <ResumeIcon />
            </ContactIconWrapper>
          </a>
        </ContactWrapper>
      </ContactFlexWrapper>
    </Section>
  );
};
