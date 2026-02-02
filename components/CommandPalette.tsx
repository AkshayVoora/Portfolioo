"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACTIONS = [
  { id: "hero", label: "Go to Home", href: "#hero" },
  { id: "about", label: "Go to About", href: "#about" },
  { id: "projects", label: "Go to Projects", href: "#projects" },
  { id: "skills", label: "Go to Skills", href: "#skills" },
  { id: "experience", label: "Go to Experience", href: "#experience" },
  { id: "contact", label: "Go to Contact", href: "#contact" },
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = query
    ? ACTIONS.filter(
        (a) =>
          a.label.toLowerCase().includes(query.toLowerCase()) ||
          a.id.toLowerCase().includes(query.toLowerCase())
      )
    : ACTIONS;

  const select = useCallback(
    (action: (typeof ACTIONS)[0]) => {
      window.location.href = action.href;
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => (s + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => (s - 1 + filtered.length) % filtered.length);
      }
      if (e.key === "Enter" && filtered[selected]) {
        e.preventDefault();
        select(filtered[selected]);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, selected, onClose, select]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[20%] z-50 w-full max-w-md -translate-x-1/2 rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
            role="dialog"
            aria-label="Quick jump"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Jump to section..."
              className="w-full border-b border-neutral-200 bg-transparent px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none dark:border-neutral-800 dark:text-neutral-100"
              autoFocus
              aria-label="Search sections"
            />
            <ul className="max-h-64 overflow-y-auto py-2">
              {filtered.length ? (
                filtered.map((action, i) => (
                  <li key={action.id}>
                    <a
                      href={action.href}
                      onClick={(e) => {
                        e.preventDefault();
                        select(action);
                      }}
                      className={`block px-4 py-2 text-sm focus:outline-none focus-visible:bg-neutral-100 dark:focus-visible:bg-neutral-800 ${
                        i === selected ? "bg-neutral-100 dark:bg-neutral-800" : ""
                      }`}
                    >
                      {action.label}
                    </a>
                  </li>
                ))
              ) : (
                <li className="px-4 py-4 text-sm text-neutral-500">No matches</li>
              )}
            </ul>
            <p className="border-t border-neutral-200 px-4 py-2 text-xs text-neutral-500 dark:border-neutral-800">
              ↑↓ to move, Enter to select, Esc to close
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
