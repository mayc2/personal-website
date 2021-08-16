import { Card } from '../common/components/Card';
import { GridContainer } from '../common/styles/GridContainer';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';

export const ProfessionalPortfolio = () => {
  return (
    <Section className='professional' primary>
      <Heading primary={true} margin='0'>
        Professional Portfolio
      </Heading>
      <GridContainer>
        <Card>
          <h3>Workday</h3>
        </Card>
        <Card>
          <h3>Becton Dickinson</h3>
        </Card>
        <Card>
          <h3>Harvard Management Company</h3>
        </Card>
        <Card>
          <h3>Rensselaer Center for Open Source</h3>
        </Card>
      </GridContainer>
    </Section>
  );
};
