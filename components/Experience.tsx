"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
        >
          Experience
        </motion.h2>
        <div className="mt-12 space-y-0">
          {experience.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative border-l-2 border-neutral-200 pl-8 pb-12 last:pb-0 dark:border-neutral-700"
            >
              <span className="absolute left-0 top-0 -translate-x-[5px] h-3 w-3 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.role}
                </h3>
                <span className="text-neutral-500 dark:text-neutral-400">at {item.company}</span>
                <span className="text-sm text-neutral-400 dark:text-neutral-500">
                  {item.period}
                </span>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-600 dark:text-neutral-400">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
