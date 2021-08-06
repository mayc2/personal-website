import styled from '@emotion/styled';
import { LinkPrevious } from 'grommet-icons';
import { Link } from 'react-router-dom';

import { AppBar } from '../common/components/AppBar';
import { HomeIcon } from '../common/components/HomeIcon';
import {
  EMPHASIS_FONT_COLOR,
  PRIMARY_FONT_COLOR,
  SECONDARY_FONT_COLOR,
} from '../common/constants/colors';
import { Hero } from '../common/styles/Hero';

const ResumeHeader = styled.h1`
    color: ${PRIMARY_FONT_COLOR};
    padding-left: 6rem;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      padding: 2rem;
      margin-left: 1rem;
      // margin-right: auto;
      // margin-left: auto;
      // padding: 20px;
    }
`;

const ReturnToHomeWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  flex-direction: row;
  cursor: pointer;
  color: ${SECONDARY_FONT_COLOR};

  &:hover {
    color: ${EMPHASIS_FONT_COLOR};
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
    transition: border-bottom 0.2s ease-in-out;

    svg {
      fill: ${EMPHASIS_FONT_COLOR};
      stroke: ${EMPHASIS_FONT_COLOR};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0 1rem;
    width: 3.5rem;
  }
`;

const ReturnToHome = styled.div`
  padding-left: 5px;
`;

const TroubleViewingPrompt = styled.p`
  color: ${SECONDARY_FONT_COLOR};
  padding-bottom: 3px;
  text-align: center;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${EMPHASIS_FONT_COLOR};
`;

const ObjectWrapper = styled.div`
  width: 75%;
  height: 95%;
`;

export const Resume = () => {
  return (
    <>
      <AppBar>
        <HomeIcon />
        <ResumeHeader>Chris May's Resume</ResumeHeader>
        <ReturnToHomeWrapper to="/">
          <LinkPrevious
            color={SECONDARY_FONT_COLOR}
            a11yTitle="Back To Home"
            cursor="pointer"
            size="medium"
          />
          <ReturnToHome>Return To Home</ReturnToHome>
        </ReturnToHomeWrapper>
      </AppBar>
      <Hero>
        <TroubleViewingPrompt>
          Having trouble viewing?{' '}
          <ExternalLink
            href="https://bit.ly/3i816sS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here.
          </ExternalLink>
        </TroubleViewingPrompt>

        <ObjectWrapper>
          <object
            data="../../assets/chris_may_2021_resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <embed
              src="../../assets/chris_may_2021_resume.pdf"
              type="application/pdf"
            />
          </object>
        </ObjectWrapper>
      </Hero>
    </>
  );
};
