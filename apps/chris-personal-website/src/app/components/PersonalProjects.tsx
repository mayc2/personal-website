import { GridContainer } from '../common/styles/GridContainer';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';
// import { Card } from '../common/components/Card';
import { Carousel } from 'grommet';
import styled from '@emotion/styled';
import {
  PRIMARY_FONT_COLOR,
  PRIMARY_SELECTION_COLOR,
  SECONDARY_FONT_COLOR,
  UNSELECTED_COLOR,
} from '../common/constants/colors';

const CarouselWrapper = styled.div`
  height: 300px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const CarouselCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: ${SECONDARY_FONT_COLOR};
  background: ${UNSELECTED_COLOR};
  font-size: 2.5rem;
  border-radius: 4px;
  transition: all 500ms;
  padding: 10px;
  height: 280px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  // margin-top: 20px;
  margin-bottom: 40px;

  // &:hover {
  //   background: ${PRIMARY_SELECTION_COLOR};
  //   color: ${PRIMARY_FONT_COLOR};
  // }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const PersonalProjects = () => {
  return (
    <Section className='personal' direction='column'>
      <Heading primary={true} margin='0'>
        Personal Projects
      </Heading>
      {/* <GridContainer columns={1} margin='0'> */}
      <CarouselWrapper>
        <Carousel
          controls
          gridArea='columns'
          fill
          alignSelf='center'
          margin='small'
          play={3000}
        >
          <CarouselCard>
            <h3>Personal Website</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Spotify Clone</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>RNA Pseudoknot Predictions</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Craps Simulator</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Memory Management Simulator</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>File Storage Server</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Tic Tac Toe</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>BookList JS</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Task List JS</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Loan Calculator JS</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Number Guesser Game JS</h3>
          </CarouselCard>
          <CarouselCard>
            <h3>Github User Finder JS</h3>
          </CarouselCard>
        </Carousel>
      </CarouselWrapper>
      {/* </GridContainer> */}
    </Section>
  );
};
