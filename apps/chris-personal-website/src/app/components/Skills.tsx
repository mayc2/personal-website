import styled from '@emotion/styled';
import { Reactjs } from 'grommet-icons';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';

const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const Skills = () => {
  return (
    <section className="skills">
      <Section primary direction="column" >
        <Heading primary={true}>Skills</Heading>
        <SkillsWrapper>
          <Reactjs a11yTitle="Reactjs" color="plain" size="large" />
          <p>Typescript</p>
        </SkillsWrapper>
      </Section>
    </section>
  );
};
