import styled from '@emotion/styled';
import { Card } from '../common/components/Card';
import { GridContainer } from '../common/styles/GridContainer';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';

export const ProfessionalPortfolio = () => {
  return (
    <Section className="professional" primary>
      <Heading primary={true}>Professional Projects</Heading>
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
      </GridContainer>
    </Section>
  );
};
