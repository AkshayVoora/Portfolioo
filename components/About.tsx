"use client";

import { motion } from "framer-motion";

const copy = `I like building things that people actually use. I've shipped products from zero to scale, and I care about clean code, clear communication, and leaving systems better than I found them. When I'm not coding, I'm usually reading or walking.`;

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          {copy}
        </motion.p>
      </div>
    </section>
  );
}
