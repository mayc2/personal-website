export const LINKS = {
  email: 'mailto:r16cmay@gmail.com',
  github: 'https://github.com/mayc2',
  linkedin: 'https://www.linkedin.com/in/chrismhmay/',
  resume: '/assets/chris_may_2026_resume.pdf',
};

export type Role = {
  company: string;
  title: string;
  when: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const WORK: Role[] = [
  {
    company: 'Verantos',
    title: 'Technical Lead',
    when: '2023 – present',
    summary:
      'First engineer. Built the research platform foundation and the AI Research Assistant, then grew the team that scaled it.',
    highlights: [
      'Evolved the Research Assistant into tool-orchestrated agents for study execution, feasibility and research insights.',
      'Provenance, input fingerprinting and fail-closed dependency checks so hours-long analyses are reused rather than recomputed.',
      'Versioned agent state with compare-and-swap, replay, context slicing and compaction; generative UI streamed over SSE and sockets.',
      'Deterministic and LLM-as-judge evaluations; concept-set matching against ~500 expert reference sets at over 80% precision.',
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

export const ALSO = [
  {
    label: 'DrLullaby',
    detail:
      'Fractional CTO and technical advisor for a mental-health product, 2024.',
  },
  {
    label: 'Rensselaer Polytechnic Institute',
    detail:
      'B.S. Computer Science, minor in Management Finance, 2016. Research in RNA pseudoknot prediction; open-source distributed genetic algorithms.',
  },
  {
    label: 'Recognition',
    detail:
      'Verantos Evidence Platform won the 2026 Fierce AI Innovation Award in Real-World Evidence & Data Analytics.',
  },
];

export const STACK: { title: string; items: string }[] = [
  {
    title: 'AI',
    items: 'Strands SDK, LlamaIndex, Amazon Bedrock, Claude, OpenAI, Langfuse',
  },
  {
    title: 'Agents',
    items:
      'tool/provider abstractions, versioned state, replay, context and memory management, evaluations',
  },
  {
    title: 'Data',
    items:
      'Python, FastAPI, PostgreSQL, Snowflake, DynamoDB, Redis, OpenSearch',
  },
  {
    title: 'Product',
    items:
      'TypeScript, React, Redux, generative UI, design systems, SSE and sockets',
  },
  {
    title: 'Cloud',
    items: 'AWS ECS, EKS, Lambda, S3, SQS, Argo CD, GitHub Actions, Nx',
  },
];

export type Project = {
  name: string;
  href?: string;
  detail: string;
  meta?: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Wedding website & guestbook',
    detail:
      'React + Vite on Cloudflare with a Sanity studio for content; guestbook, schedule, travel and FAQ.',
    meta: '2025 – 2026 · private',
  },
  {
    name: 'This site',
    href: 'https://github.com/mayc2/personal-website',
    detail: 'Nx, Vite, React 19 and a small shadcn-based component library.',
    meta: '2021 – 2026',
  },
  {
    name: 'Spotify clone',
    href: 'https://github.com/mayc2/spot-clone',
    detail: 'Web player UI against the Spotify API.',
    meta: '2026',
  },
  {
    name: 'YouTube clone',
    href: 'https://github.com/mayc2/youtube-clone-react',
    detail: 'React front end over the YouTube Data API.',
    meta: '2024',
  },
  {
    name: 'RNA pseudoknot prediction',
    href: 'https://github.com/mayc2/PseudoKnot_research',
    detail:
      'SFold and Metropolis-Hastings sampling; undergraduate research at RPI.',
    meta: '2016',
  },
  {
    name: 'Memory management simulator',
    href: 'https://github.com/mayc2/MemoryManagementSimu',
    detail: 'Paging and allocation strategies, visualized.',
    meta: '2015',
  },
];
