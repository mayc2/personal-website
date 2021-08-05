import styled from '@emotion/styled';
import { ContactIconWrapper } from '../common/styles/ContactIconWrapper';
import {
  EMPHASIS_FONT_COLOR,
  SECONDARY_FONT_COLOR,
} from '../common/constants/colors';
import { Hero } from '../common/styles/Hero';
import { LinkedIn } from '../common/Icons/LinkedIn';
import { GithubIcon } from '../common/Icons/GithubIcon';
import { MailIcon } from '../common/Icons/MailIcon';

const ImageWrapper = styled.img`
  box-shadow: 0px 0px;
  max-width: 100%;
  max-height: 100%;
  height: 80vh;
  position: absolute;
  bottom: 0;
  margin-left: 30rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    height: 50vh;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;
  padding: 50px 30px 50px 50px;
  
  @media screen and (max-width: 960px) {
    padding: 0;
    padding-top: 50px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-bottom: 17rem;
  }
`;

const IntroHeadingFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 50px;
  width: 50%;
  z-index: 10;

  @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
`;

const IntroHeadingWrapper = styled.div`
  position: relative;
  padding: 20px 50px 20px 50px;
  font-size: 2rem;

  &:before {
    padding: 50px;
    content: '';
    position: absolute;
    left: 50px;
    bottom: 0;
    height: 1px;
    width: 40%;
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
  }

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 15px 50px 15px 50px;
  }
`;

const IntroSubHeadingWrapper = styled.div`
  padding: 20px 50px 20px 50px;
  position: relative;
  color: ${SECONDARY_FONT_COLOR};

  @media screen and (max-width: 768px) {
    padding: 15px 50px 15px 50px;
    font-size: 12px;
  }
`;

const ContactWrapper = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex: 1;
  flex-wrap: wrap;
  margin: 0 auto 0 5rem;

  svg {
    height: 48px;
    width: 48px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 10px;
    margin: 0 auto 0 2rem;

  }

  @media screen and (max-width: 768px) {
    margin: 0 auto 0 2rem;

    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

export const Intro = () => {
  return (
    <section className="hero">
      <Hero primary direction="row">
        <IntroWrapper>
          <IntroHeadingFlexWrapper>
            <IntroHeadingWrapper>
              <h1>Chris May</h1>
              <h2>Full-Stack Developer</h2>
            </IntroHeadingWrapper>
            <IntroSubHeadingWrapper>
              <h2>Product-Focused &#183; Pragmatic</h2>
              <p>San Francisco, CA</p>
            </IntroSubHeadingWrapper>
          </IntroHeadingFlexWrapper>
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
          </ContactWrapper>
        </IntroWrapper>
        <ImageWrapper src="../assets/Chris.png" />
      </Hero>
    </section>
  );
};
