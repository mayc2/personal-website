import styled from '@emotion/styled';
import { Card } from '../common/components/Card';
import { GridContainer } from '../common/styles/GridContainer';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';

const ROLES: { company: string; role: string; when: string }[] = [
  {
    company: 'Verantos',
    role: 'Technical Lead · first engineer',
    when: '2021 – present',
  },
  { company: 'DrLullaby', role: 'Fractional CTO & advisor', when: '2024' },
  {
    company: 'Workday',
    role: 'Software Engineer I → Senior',
    when: '2016 – 2021',
  },
  { company: 'Becton Dickinson', role: 'Software engineering', when: '' },
  {
    company: 'Harvard Management Company',
    role: 'Software engineering',
    when: '',
  },
  {
    company: 'Rensselaer Center for Open Source',
    role: 'Open-source research',
    when: '',
  },
];

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CardMeta = styled.p`
  font-size: 1.1rem;
  line-height: 1.3;
  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const ProfessionalPortfolio = () => {
  return (
    <Section className='professional' primary>
      <Heading primary={true} margin='0'>
        Professional Portfolio
      </Heading>
      <GridContainer>
        {ROLES.map(({ company, role, when }) => (
          <Card key={company}>
            <CardBody>
              <h3>{company}</h3>
              <CardMeta>
                {role}
                {when ? ` · ${when}` : ''}
              </CardMeta>
            </CardBody>
          </Card>
        ))}
      </GridContainer>
    </Section>
  );
};
