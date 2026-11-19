import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@chrismay/ui';

type Role = {
  company: string;
  title: string;
  when: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

const EXPERIENCE: Role[] = [
  {
    company: 'Verantos',
    title: 'Technical Lead',
    when: '2023 – present',
    summary:
      'First engineer; built the research platform foundation and the AI Research Assistant, then grew the team that scaled it.',
    highlights: [
      'Evolved the Research Assistant into tool-orchestrated agents for study execution, feasibility and research insights.',
      'Provenance, input fingerprinting and fail-closed dependency checks so hours-long analyses are reused, not recomputed.',
      'Versioned agent state with compare-and-swap, replay, context slicing and compaction; generative UI streamed over SSE and sockets.',
      'Deterministic and LLM-as-judge evaluations; concept-set matching against ~500 expert reference sets at >80% precision.',
      'Built and managed a US–India team across backend, UI, pipelines and DevOps.',
    ],
    tags: [
      'Strands SDK',
      'LlamaIndex',
      'Bedrock',
      'FastAPI',
      'Snowflake',
      'React',
      'EKS',
    ],
  },
  {
    company: 'Verantos',
    title: 'Senior Software Engineer',
    when: '2021 – 2023',
    summary:
      'Platform foundations plus a domain-specific query language and visual interface for clinical research.',
    highlights: [
      'DSL and query builder with ANTLR, Python, FastAPI, React and TypeScript.',
      'Enterprise SSO and role-based access control; CI/CD, infrastructure as code, Argo CD and observability.',
    ],
    tags: ['ANTLR', 'Python', 'TypeScript', 'Auth0', 'Argo CD'],
  },
  {
    company: 'Workday',
    title: 'Software Engineer → Senior Software Development Engineer',
    when: '2016 – 2021',
    summary:
      'Prism Analytics, Student Financials, and Student Recruiting & Admissions.',
    highlights: [
      'Led an Nx monorepo migration across 7 production apps; standardized build/test, lint rules, conventional commits and semver.',
      'Built a React, Redux and TypeScript analytics app for configuring and visualizing tenant data.',
      'Development lead and Scrum Master for payment-adjustment refactors; shipped 1098-T tax reporting and student fee APIs.',
    ],
    tags: ['React', 'Redux', 'Nx', 'Java', 'REST'],
  },
];

const ADVISORY: Role[] = [
  {
    company: 'DrLullaby',
    title: 'Fractional CTO & Technical Advisor',
    when: 'Feb – Oct 2024',
    summary: 'Architecture guidance for a mental-health product.',
    highlights: [
      'Supported a website rebuild and optimization.',
      'Recruited and onboarded lead engineers.',
    ],
    tags: ['Architecture', 'Hiring'],
  },
];

const EDUCATION: Role[] = [
  {
    company: 'Rensselaer Polytechnic Institute',
    title: 'B.S. Computer Science, minor in Management Finance',
    when: '2016',
    summary:
      'Research in RNA pseudoknot prediction (SFold, Metropolis-Hastings sampling); contributed to an open-source distributed genetic algorithm library.',
    highlights: [],
    tags: ['RCOS', 'Computational biology'],
  },
];

const RoleCard = ({ role }: { role: Role }) => (
  <Card className='border-border/70 shadow-sm'>
    <CardHeader>
      <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
        <CardTitle className='font-display text-xl font-medium'>
          {role.company}
        </CardTitle>
        <span className='text-sm text-muted-foreground'>{role.when}</span>
      </div>
      <CardDescription className='text-base text-foreground/80'>
        {role.title}
      </CardDescription>
    </CardHeader>
    <CardContent className='space-y-4'>
      <p className='text-muted-foreground'>{role.summary}</p>
      {role.highlights.length > 0 && (
        <ul className='list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/90 marker:text-amber'>
          {role.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className='flex flex-wrap gap-1.5'>
        {role.tags.map((t) => (
          <Badge key={t} variant='secondary' className='font-normal'>
            {t}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const Experience = () => (
  <section id='experience' className='bg-paper-deep/60 py-20 sm:py-24'>
    <div className='mx-auto max-w-5xl px-4 sm:px-6'>
      <div className='mb-10 max-w-2xl'>
        <h2 className='text-3xl sm:text-4xl'>Experience</h2>
        <p className='mt-3 text-lg text-muted-foreground'>
          Ten years across enterprise platforms, most recently building agent
          systems for clinical research.
        </p>
      </div>
      <Tabs defaultValue='work'>
        <TabsList className='mb-6'>
          <TabsTrigger value='work'>Work</TabsTrigger>
          <TabsTrigger value='advisory'>Advisory</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
        </TabsList>
        <TabsContent value='work' className='grid gap-5'>
          {EXPERIENCE.map((r) => (
            <RoleCard key={`${r.company}-${r.title}`} role={r} />
          ))}
        </TabsContent>
        <TabsContent value='advisory' className='grid gap-5'>
          {ADVISORY.map((r) => (
            <RoleCard key={r.company} role={r} />
          ))}
        </TabsContent>
        <TabsContent value='education' className='grid gap-5'>
          {EDUCATION.map((r) => (
            <RoleCard key={r.company} role={r} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  </section>
);
