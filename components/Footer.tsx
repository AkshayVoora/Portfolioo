"use client";

import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-8 dark:border-neutral-800">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Built with Next.js
        </p>
        <div className="flex gap-6">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
