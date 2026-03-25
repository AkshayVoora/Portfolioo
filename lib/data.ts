export const site = {
  name: "Akshay Voora",
  shortName: "AV",
  title: "Software engineer building fast, thoughtful products across web, data, and AI.",
  intro:
    "I’m a Computer Science student at Arizona State University focused on product-minded engineering. I care about interfaces that feel sharp, systems that scale cleanly, and shipping work that is both technically solid and genuinely useful.",
  location: "Tempe, Arizona",
  email: "akshayvoora06@gmail.com",
  phone: "(623) 217-7597",
  linkedin: "https://linkedin.com/in/avoora",
  github: "https://github.com/AkshayVoora",
  resume: "/Akshay_Voora_Resume.pdf",
  availability: "Seeking software engineering internships and new-grad opportunities",
};

export const metrics = [
  { label: "GPA", value: "4.0" },
  { label: "Internships", value: "3" },
  { label: "Focus areas", value: "Web + AI" },
];

export const spotlight = [
  "Full-stack product engineering",
  "Scalable systems and backend reliability",
  "AI workflows grounded in real utility",
];

export const education = {
  school: "Arizona State University",
  degree: "B.S. Computer Science",
  graduation: "May 2027",
  location: "Tempe, AZ",
  gpa: "4.0 / 4.0",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frameworks & Tech",
    items: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "LangChain",
      "Pinecone",
      "REST APIs",
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      "Docker",
      "Kubernetes",
      "Cloudflare Workers",
      "AWS",
      "GitHub Actions",
      "CI/CD",
      "Postman",
    ],
  },
];

export const certification = "AWS Certified Cloud Practitioner (CLF-02)";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Food Forest AI",
    role: "Software Engineering Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Philadelphia, PA",
    bullets: [
      "Built automated data pipelines using Node.js and n8n to segment and sync 500+ users to Firestore, cutting manual work by 60%.",
      "Built internal dashboards with Retool and custom SQL/JavaScript queries so 10+ team members could access product metrics directly, cutting query time from 30 minutes to under 5 minutes.",
      "Dockerized backend services and set up GitHub Actions CI/CD to deploy on AWS EC2, reducing release time from 1 hour to under 10 minutes and eliminating manual deployments.",
    ],
  },
  {
    company: "Blue Springs",
    role: "Software Engineering Intern",
    period: "May 2024 - Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      "Rebuilt key user-facing pages in React and fixed accessibility issues identified through SiteImprove audits, improving accessibility scores by 45% and reducing page load time by 30%.",
      "Optimized frontend performance and SEO by restructuring components, lazy loading assets, and improving metadata, increasing organic traffic and user engagement by about 25%.",
    ],
  },
  {
    company: "CareerEra",
    role: "Software Engineering Intern",
    period: "Jan 2023 - Mar 2023",
    location: "Hyderabad, India",
    bullets: [
      "Built reusable React components with Tailwind CSS to standardize the UI, reducing duplicate code and lowering UI-related bugs and rework.",
      "Developed backend APIs with Next.js and PostgreSQL and optimized slow queries by adding indexes, improving API response times and reliability.",
    ],
  },
];

export interface Project {
  title: string;
  period: string;
  stack: string[];
  summary: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    title: "QueueFlow",
    period: "Jan 2026",
    stack: ["TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker"],
    summary: "An asynchronous job processing system designed for reliability, scale, and low latency.",
    bullets: [
      "Reduced API response time to under 100ms by enqueueing long-running tasks in Redis with BullMQ and offloading execution to background workers.",
      "Implemented PostgreSQL job state tracking and exponential backoff retries with a maximum of 5 attempts, achieving a 99.9% success rate under 20% simulated failure conditions.",
      "Processed 1,000 jobs with parallel worker containers and used Docker Compose to manage multi-container deployment and horizontal scale.",
    ],
  },
  {
    title: "DealHawk AI",
    period: "Nov 2025",
    stack: ["Python", "LLaMA-3", "GPT-4", "Pinecone"],
    summary: "An AI pricing intelligence system for surfacing product listing anomalies in real time.",
    bullets: [
      "Fine-tuned LLaMA-3 using QLoRA on 10k+ historical product listings and built a Pinecone-backed RAG pipeline, improving price prediction accuracy by 20 to 30% while outperforming GPT-4.",
      "Built a Python service to scrape and embed live e-commerce data, process 1k+ searches, and trigger real-time alerts for price anomalies.",
    ],
  },
  {
    title: "Medium",
    period: "Oct 2025",
    stack: ["TypeScript", "Cloudflare Workers", "PostgreSQL", "React", "Prisma"],
    summary: "A full-stack blogging platform optimized for edge delivery and performance.",
    bullets: [
      "Built the platform using TypeScript and React and optimized performance with code-splitting, lazy loading, and dynamic routing, reducing page load times by 20%.",
      "Designed and deployed a serverless backend on Cloudflare Workers with PostgreSQL and Prisma, cutting API latency by 30% and enabling low-latency global delivery.",
    ],
  },
];

export const principles = [
  {
    title: "Build for usefulness",
    description:
      "I’m most interested in software that removes friction, saves time, or makes a hard workflow feel obvious.",
  },
  {
    title: "Move across the stack",
    description:
      "I’m comfortable switching between UI polish, backend systems, data flow, and deployment because product quality depends on all of them.",
  },
  {
    title: "Measure the outcome",
    description:
      "I like work with clear impact, whether that’s latency, reliability, accessibility, automation, or team speed.",
  },
];
