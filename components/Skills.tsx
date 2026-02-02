"use client";

import { motion } from "framer-motion";
import { skillsByGroup } from "@/lib/data";

const groups = Object.entries(skillsByGroup);

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {groups.map(([groupName, skills], i) => (
            <motion.div
              key={groupName}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-5 dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {groupName}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill}>
                    <span className="rounded-md bg-white px-2.5 py-1 text-sm text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-neutral-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
