import styled from '@emotion/styled';
import { Heading } from '../common/styles/Heading';
import { Section } from '../common/styles/Section';
import {
  EMPHASIS_FONT_COLOR,
  SECONDARY_FONT_COLOR,
} from '../common/constants/colors';

const SKILL_GROUPS: { title: string; items: string }[] = [
  {
    title: 'AI stack',
    items: 'Strands SDK, LlamaIndex, Amazon Bedrock, Anthropic Claude, OpenAI',
  },
  {
    title: 'Agent systems',
    items:
      'Tool/provider abstractions, versioned state, CAS, replay, context and memory management, deterministic and LLM-as-judge evaluations, Langfuse',
  },
  {
    title: 'Retrieval',
    items: 'RAG, embeddings, vector search, OpenSearch, Snowflake Cortex',
  },
  {
    title: 'Backend & data',
    items: 'Python, FastAPI, PostgreSQL, SQL, Snowflake, DynamoDB, Redis',
  },
  {
    title: 'Product engineering',
    items:
      'TypeScript, React, Redux, generative UI, design systems, SSE, sockets, ANTLR, Auth0',
  },
  {
    title: 'Cloud',
    items:
      'AWS ECS, EKS/Kubernetes, Lambda, S3, SQS; containerized and serverless architectures',
  },
  {
    title: 'Developer experience',
    items:
      'Nx monorepos, GitHub Actions, Argo CD, CI/CD, infrastructure as code, build/test automation',
  },
];

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 80%;
  max-width: 1100px;
  margin: 0 auto 4rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    gap: 1.25rem;
  }
`;

const SkillGroup = styled.div`
  text-align: left;
`;

const SkillTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${EMPHASIS_FONT_COLOR};
`;

const SkillItems = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${SECONDARY_FONT_COLOR};
`;

export const Skills = () => {
  return (
    <section className='skills'>
      <Section primary direction='column'>
        <Heading primary={true}>Skills</Heading>
        <SkillsGrid>
          {SKILL_GROUPS.map(({ title, items }) => (
            <SkillGroup key={title}>
              <SkillTitle>{title}</SkillTitle>
              <SkillItems>{items}</SkillItems>
            </SkillGroup>
          ))}
        </SkillsGrid>
      </Section>
    </section>
  );
};
