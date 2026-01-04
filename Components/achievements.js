"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Achievements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="achievements"
      className="relative w-full bg-black px-4 sm:px-6 py-20 overflow-hidden"
    >
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-16" />
      <div className="absolute inset-0 bg-green-500/5 blur-3xl opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Achievements
        </h2>

        <p className="text-white/50 max-w-xl mb-14 text-sm sm:text-base">
          Academic recognition, leadership, and milestones that reflect growth
          and consistency.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FEATURED – HONOR LIST */}
          <div className="md:col-span-2 relative rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-2xl" />

            <div className="mb-4 rounded-xl overflow-hidden border border-white/10 max-h-[220px] sm:max-h-none">
              <Image
                src="/assets/img/honor_list.jpg"
                width={900}
                height={500}
                alt="President’s Honor List"
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
              President’s Honor List – Seneca Polytechnic
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              Recognized for strong academic performance and consistency
              throughout the semester.
            </p>
          </div>

          {/* FEATURED – SEC */}
          <div className="relative rounded-2xl p-5 sm:p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-400/70 rounded-l-2xl" />

            <div className="mb-4 rounded-xl overflow-hidden border border-white/10 max-h-[220px] sm:max-h-none">
              <Image
                src="/assets/img/SEC-2.jpg"
                width={900}
                height={500}
                alt="SEC 2024 Nominee"
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">
              SEC 2024 – Nominee
            </h3>

            <p className="text-white/70 text-sm leading-relaxed">
              Shortlisted among 12 teams in the Seneca Engineering Competition.
              Built and delivered the complete solution independently after my
              teammate dropped out, receiving positive feedback for execution,
              UI/UX, and ownership under pressure.
            </p>
          </div>

          {/* SUPPORTING */}
          {[
            {
              title: "International Student Levy Bursary",
              desc:
                "Awarded institutional bursary support based on eligibility and academic standing.",
            },
            {
              title: "President – Tech Interview Prep Club",
              desc:
                "Leading structured interview preparation sessions with a focus on consistency and peer learning.",
            },
            {
              title: "Member – Software Developer Club",
              desc:
                "Active participant in collaborative software development initiatives.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:-translate-y-1"
            >
              <h4 className="text-white font-medium mb-1 text-sm sm:text-base">
                {item.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
