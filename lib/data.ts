export const site = {
  name: "Your Name",
  tagline: "Building products that matter.",
  location: "San Francisco, CA",
  email: "hello@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "",
};

export type ProjectCategory = "Full-stack" | "AI" | "Frontend" | "Backend";

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  problem: string;
  whatIBuilt: string;
  techStack: string[];
  keyWins: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Taskflow",
    oneLiner: "Team task management with real-time sync.",
    problem: "Teams needed a simple way to track work without enterprise bloat.",
    whatIBuilt: "A real-time collaborative task board with drag-and-drop and inline comments.",
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Tailwind"],
    keyWins: ["Shipped in 6 weeks", "50+ active teams in first month", "Sub-100ms sync latency"],
    githubUrl: "https://github.com/example/taskflow",
    demoUrl: "https://taskflow.demo.com",
    category: "Full-stack",
  },
  {
    id: "2",
    title: "Doc Summarizer",
    oneLiner: "Summarize long docs with one click.",
    problem: "Legal and research teams spent hours skimming long PDFs.",
    whatIBuilt: "An AI pipeline that chunks documents, summarizes sections, and outputs structured summaries.",
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI"],
    keyWins: ["80% time saved on first read", "Handles 50+ page docs", "Structured output for downstream tools"],
    githubUrl: "https://github.com/example/doc-summarizer",
    demoUrl: "https://doc-summarizer.demo.com",
    category: "AI",
  },
  {
    id: "3",
    title: "Design System",
    oneLiner: "Component library and design tokens.",
    problem: "Product and eng were out of sync on components and spacing.",
    whatIBuilt: "A React component library with Storybook, design tokens, and accessibility docs.",
    techStack: ["React", "TypeScript", "Storybook", "Tailwind"],
    keyWins: ["Single source of truth", "WCAG 2.1 AA", "Adopted across 4 products"],
    githubUrl: "https://github.com/example/design-system",
    category: "Frontend",
  },
  {
    id: "4",
    title: "API Gateway",
    oneLiner: "Rate limiting and auth for internal APIs.",
    problem: "Internal services had no unified way to enforce limits and API keys.",
    whatIBuilt: "A lightweight gateway with configurable rate limits, API key validation, and request logging.",
    techStack: ["Go", "Redis", "PostgreSQL"],
    keyWins: ["P99 latency under 5ms", "Zero-downtime config reload", "Cut abuse by 90%"],
    githubUrl: "https://github.com/example/api-gateway",
    category: "Backend",
  },
  {
    id: "5",
    title: "Analytics Dashboard",
    oneLiner: "Internal metrics and alerts.",
    problem: "Stakeholders had to ask eng for every metric.",
    whatIBuilt: "A read-only dashboard that pulls from our data warehouse with saved views and Slack alerts.",
    techStack: ["Next.js", "dbt", "BigQuery", "Tailwind"],
    keyWins: ["Self-serve for 20+ teams", "Alerts reduced on-call pages", "Refreshes every 15 min"],
    githubUrl: "https://github.com/example/analytics-dashboard",
    demoUrl: "https://analytics.demo.com",
    category: "Full-stack",
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "1",
    role: "Senior Engineer",
    company: "Tech Co",
    period: "2022 – Present",
    bullets: [
      "Led migration of core API to Go; improved P99 latency by 40%.",
      "Shipped real-time collaboration features used by 10k+ daily users.",
      "Mentored 3 engineers; established front-end review standards.",
    ],
  },
  {
    id: "2",
    role: "Software Engineer",
    company: "Startup Inc",
    period: "2020 – 2022",
    bullets: [
      "Built and maintained customer-facing dashboard and internal tools.",
      "Introduced E2E tests; reduced production bugs by 30%.",
      "Collaborated with design on a new design system rollout.",
    ],
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "Agency Ltd",
    period: "2018 – 2020",
    bullets: [
      "Developed client websites and small web apps in React and Node.",
      "Learned CI/CD and deployment practices on AWS.",
    ],
  },
];

export const skillsByGroup = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"],
  DevOps: ["Docker", "AWS", "Vercel", "GitHub Actions"],
  AI: ["LangChain", "OpenAI API", "RAG", "Structured outputs"],
};
