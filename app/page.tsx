"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { trackPageView } from "@/lib/analytics";
import {
  certification,
  education,
  experience,
  metrics,
  principles,
  projects,
  site,
  skillGroups,
  spotlight,
} from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  useEffect(() => {
    trackPageView("/");
  }, []);

  return (
    <main className="page-shell">
      <header className="floating-nav">
        <a href="#top" className="flex items-center gap-3">
          <span className="brand-mark">{site.shortName}</span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="text-xs text-[color:var(--muted)]">Software Engineer</p>
          </div>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="mb-6 flex gap-2 overflow-x-auto px-1 pb-1 text-sm sm:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-[color:var(--line)] bg-[rgba(255,248,241,0.8)] px-4 py-2"
          >
            {item.label}
          </a>
        ))}
      </div>

      <section id="top" className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="section hero-card"
        >
          <span className="hero-orb -right-16 top-12 h-44 w-44" aria-hidden />
          <span className="hero-orb left-12 top-48 h-28 w-28 opacity-60" aria-hidden />
          <p className="eyebrow">Portfolio / 2026</p>
          <h1 className="balanced-text mt-5 max-w-4xl text-5xl leading-none sm:text-6xl lg:text-[5.8rem]">
            Building products that feel intentional from the first interaction.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button-primary" href="#work">
              View selected projects
            </a>
            <a className="button-secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="mt-12 grid gap-4 border-t border-[color:var(--line)] pt-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-3xl font-semibold sm:text-4xl">{metric.value}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="section flex flex-col justify-between gap-8"
        >
          <div>
            <p className="eyebrow">Currently</p>
            <h2 className="mt-4 text-3xl leading-tight">{site.availability}</h2>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                Based in
              </p>
              <p className="mt-2 text-lg">{site.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                Reach me
              </p>
              <a className="mt-2 block text-lg hover:text-[color:var(--accent)]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="button-secondary" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button-secondary" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </motion.aside>
      </section>

      <motion.section {...fadeUp} className="section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="balanced-text">I enjoy building systems that are clean under the hood and calm on the surface.</h2>
          </div>
          <p className="section-note">
            My work spans front-end engineering, backend systems, automation, and applied AI.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {spotlight.map((item) => (
            <article
              key={item}
              className="rounded-[1.6rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.44)] p-5"
            >
              <span className="mb-6 block h-12 w-12 rounded-full bg-[rgba(180,83,60,0.12)]" />
              <p className="text-lg leading-8">{item}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="work" className="section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="balanced-text">Projects that show how I think about performance, reliability, and product value.</h2>
          </div>
          <p className="section-note">
            I like building work that can be explained clearly: what problem it solves, why the architecture matters, and what improved because of it.
          </p>
        </div>
        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-6 rounded-[1.8rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.48)] p-6 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  {project.period}
                </p>
                <h3 className="mt-3 text-3xl">{project.title}</h3>
                <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                  {project.summary}
                </p>
                <ul className="tag-row">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="experience" className="section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="balanced-text">Internships where I shipped measurable improvements, not just ticket volume.</h2>
          </div>
          <p className="section-note">
            The pattern across these roles is consistent: reduce manual work, improve reliability, and make systems easier for teams to use.
          </p>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-[1.8rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.46)] p-6"
            >
              <div className="flex flex-col gap-2 border-b border-[color:var(--line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-2xl">{item.role}</h3>
                </div>
                <div className="text-sm leading-7 text-[color:var(--muted)] sm:text-right">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.section>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.section {...fadeUp} className="section">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>{education.school}</h2>
          </div>
          <div className="space-y-4 text-[color:var(--muted)]">
            <div>
              <p className="text-lg font-medium text-[color:var(--text)]">{education.degree}</p>
              <p className="mt-1">Graduating {education.graduation}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.24em]">Location</p>
                <p className="mt-2 text-base text-[color:var(--text)]">{education.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em]">GPA</p>
                <p className="mt-2 text-base text-[color:var(--text)]">{education.gpa}</p>
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.42)] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                Certification
              </p>
              <p className="mt-2 text-base text-[color:var(--text)]">{certification}</p>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I reach for across the stack.</h2>
          </div>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.4rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.42)] p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  {group.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[rgba(180,83,60,0.08)] px-3 py-1 text-sm text-[color:var(--accent-deep)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.section {...fadeUp} className="section">
        <div className="section-heading">
          <p className="eyebrow">Approach</p>
          <h2 className="balanced-text">The kind of engineer I’m trying to become is shaped by a few simple habits.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-[1.6rem] border border-[color:var(--line)] bg-[rgba(255,255,255,0.44)] p-5"
            >
              <h3 className="text-2xl">{principle.title}</h3>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="contact" className="section">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="balanced-text mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              Looking for someone who can build fast, learn quickly, and care about the details.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
              I’m currently looking for internship and early-career software engineering opportunities where I can contribute across product, infrastructure, and implementation.
            </p>
          </div>
          <div className="space-y-3">
            <a className="button-primary w-full" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="button-secondary w-full" href={site.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="button-secondary w-full" href={site.github} target="_blank" rel="noreferrer">
              Browse GitHub
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
