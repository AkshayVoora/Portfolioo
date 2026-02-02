"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.dialog
            open={!!project}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-2xl"
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
          >
            <div className="max-h-[85vh] overflow-y-auto">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h2 id="modal-title" className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h2>
              <p id="modal-desc" className="mt-2 text-neutral-600 dark:text-neutral-400">
                {project.oneLiner}
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Problem</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">What I built</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{project.whatIBuilt}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Tech stack</h3>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {project.techStack.join(", ")}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Key wins</h3>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-neutral-700 dark:text-neutral-300">
                    {project.keyWins.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-sm font-medium text-accent underline underline-offset-2 hover:no-underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-sm font-medium text-accent underline underline-offset-2 hover:no-underline"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 rounded p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              aria-label="Close modal"
            >
              <span className="text-xl leading-none" aria-hidden>×</span>
            </button>
          </motion.dialog>
        </>
      )}
    </AnimatePresence>
  );
}
