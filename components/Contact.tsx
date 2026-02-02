"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data";

const links = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "LinkedIn", href: site.linkedin, value: "Profile" },
  { label: "GitHub", href: site.github, value: "Profile" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-neutral-600 dark:text-neutral-400"
        >
          Open to new opportunities and conversations.
        </motion.p>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="focus-ring group inline-flex flex-col rounded-lg px-4 py-2 text-neutral-700 hover:text-accent dark:text-neutral-300 dark:hover:text-accent"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {link.label}
              </span>
              <span className="mt-0.5 border-b border-transparent group-hover:border-accent transition-colors">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
