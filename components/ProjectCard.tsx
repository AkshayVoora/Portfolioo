"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-lg dark:hover:shadow-neutral-950/50"
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open ${project.title}: ${project.oneLiner}`}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-accent dark:text-accent">
        {project.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:underline decoration-accent underline-offset-2">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
        {project.oneLiner}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
