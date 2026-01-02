"use client";

import { motion } from "framer-motion";
import DevModel from "./DevModel";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-22 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — STORY */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-green-500 mb-6">
            Engineering, Not Just Coding
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-green-400 font-semibold">Hatim Materwala</span> —
            a developer who treats software as a system, not a script.
            I care about how things scale, break, recover, and evolve.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            From building full-stack platforms to solving data-structure problems
            under constraints, my focus has always been the same:
            <span className="text-green-400"> clarity, performance, and reliability</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I’m currently preparing for <span className="text-green-400 font-semibold">
            Summer 2026 Software Engineering Internships</span>,
            strengthening my foundations through real projects,
            LeetCode problem-solving, and production-level architecture.
          </p>
        </motion.div>

        {/* RIGHT — 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-90 rounded-2xl border border-green-900/40"
        >
          <DevModel />
        </motion.div>
      </div>

      {/* PROOF STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8"
      >
        <ProofCard
          title="50+ LeetCode Problems"
          desc="Consistent problem-solving across arrays, trees, recursion, and system thinking."
        />
        <ProofCard
          title="Real-World Experience"
          desc="Hands-on work in engineering and IT support environments — not just tutorials."
        />
        <ProofCard
          title="System-First Mindset"
          desc="I design with scalability, failure, and maintainability in mind."
        />
      </motion.div>
    </section>
  );
}

function ProofCard({ title, desc }) {
  return (
    <div className="border border-green-900/40 rounded-xl p-6  hover:border-green-500 transition">
      <h4 className="text-green-400 font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
