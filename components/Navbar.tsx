"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const sections = SECTIONS.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveId(id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 focus-ring rounded px-2 py-1"
        >
          Portfolio
        </a>
        <ul className="flex items-center gap-1">
          {SECTIONS.filter((s) => s.id !== "hero").map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`rounded px-3 py-2 text-sm font-medium transition-colors focus-ring ${
                  activeId === s.id
                    ? "text-accent dark:text-accent"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
