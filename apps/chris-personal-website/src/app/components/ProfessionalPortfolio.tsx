import styled from '@emotion/styled';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const SubSection = styled.div`
  text-align: center;
`

export const ProfessionalPortfolio = () => {
  return (
    <Section className='professional' primary>
      <SubSection>
        <Heading primary={true}>Professional Projects</Heading>
        <FlexContainer>
          <div><h1>Project 1</h1></div>
          <div><h1>Project 2</h1></div>
          <div><h1>Project 3</h1></div>
        </FlexContainer>
      </SubSection>
    </Section>
  );
};
