import { GridContainer } from '../common/styles/GridContainer';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';
import { Card } from '../common/components/Card';

export const PersonalProjects = () => {
  return (
    <Section className="personal" direction="column">
      <Heading primary={true}>Personal Projects</Heading>
      <GridContainer>
        <Card>
          <h3>Project 1</h3>
        </Card>
        <Card>
          <h3>Project 2</h3>
        </Card>
        <Card>
          <h3>Project 3</h3>
        </Card>
        <Card>
          <h3>Project 4</h3>
        </Card>
        <Card>
          <h3>Project 5</h3>
        </Card>
        <Card>
          <h3>Project 6</h3>
        </Card>
      </GridContainer>
    </Section>
  );
};
