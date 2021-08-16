import { GridContainer } from '../common/styles/GridContainer';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';
import { Card } from '../common/components/Card';

export const PersonalProjects = () => {
  return (
    <Section className='personal' direction='column'>
      <Heading primary={true} margin='0'>
        Personal Projects
      </Heading>
      <GridContainer columns={6} margin='0'>
        <Card>
          <h3>Personal Website</h3>
        </Card>
        <Card>
          <h3>Spotify Clone</h3>
        </Card>
        <Card>
          <h3>RNA Pseudoknot Predictions</h3>
        </Card>
        <Card>
          <h3>Craps Simulator</h3>
        </Card>
        <Card>
          <h3>Memory Management Simulator</h3>
        </Card>
        <Card>
          <h3>File Storage Server</h3>
        </Card>
        <Card>
          <h3>Tic Tac Toe</h3>
        </Card>
        <Card>
          <h3>BookList JS</h3>
        </Card>
        <Card>
          <h3>Task List JS</h3>
        </Card>
        <Card>
          <h3>Loan Calculator JS</h3>
        </Card>
        <Card>
          <h3>Number Guesser Game JS</h3>
        </Card>
        <Card>
          <h3>Github User Finder JS</h3>
        </Card>
      </GridContainer>
    </Section>
  );
};
