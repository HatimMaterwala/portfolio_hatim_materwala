"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Achievements() {
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])

    if(!mounted) return null;
    
  return (
    <section id="achievements" className="relative w-full bg-black px-6 overflow-hidden">
    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-15" />
      <div className="absolute inset-0 bg-green-500/5 blur-3xl opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          Achievements
        </h2>
        <p className="text-white/50 max-w-xl mb-16">
          Academic recognition, leadership, and milestones that reflect growth
          and consistency.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {/* FEATURED – PRESIDENT’S HONOR LIST */}
          <div className="md:col-span-2 relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-2xl" />

            <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/assets/img/honor_list.jpg"
                width={900}
                height={500}
                alt="President’s Honor List"
                className="object-cover"
              />
            </div>

            <h3 className="text-white text-xl font-semibold mb-2">
              President’s Honor List – Seneca Polytechnic
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Recognized for strong academic performance and consistency
              throughout the semester.
            </p>
          </div>

          {/* FEATURED – SEC 2024 - Nominee */}
          <div
            className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-green-400/70 rounded-l-2xl" />

            <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/assets/img/SEC-2.jpg"
                width={900}
                height={500}
                alt="President’s Honor List"
                className="object-cover"
              />
            </div>

            <h3 className="text-white text-lg font-semibold mb-2">
              SEC 2024 – Nominee
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Nominated for the finals of the Seneca Engineering Competition,
              competing among 12 shortlisted teams. The challenge involved
              building a financial services solution for mortgages, loans, and
              interest analysis using 10 years of historical data. Despite my
              teammate not showing up, I independently designed and delivered
              the entire project, competing against teams of up to four members.
              The solution received positive feedback for its seamless UI/UX and
              smooth user experience, demonstrating strong ownership and
              execution under pressure. This experience highlighted my ability
              to perform under constraints, adapt quickly, and deliver
              production-ready results independently.
            </p>
          </div>

          {/* SUPPORTING ACHIEVEMENTS */}
          <div
            className={"relative rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"}
          >
            <h4 className="text-white font-medium mb-1">
              International Student Levy Bursary
            </h4>
            <p className="text-white/60 text-sm">
              Awarded institutional bursary support based on eligibility and
              academic standing.
            </p>
          </div>

          <div
            className="relative rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md
            transition-all duration-300 hover:-translate-y-1"
          >
            <h4 className="text-white font-medium mb-1">
              President – Tech Interview Prep Club
            </h4>
            <p className="text-white/60 text-sm">
              Leading a student-driven initiative focused on technical interview
              preparation, structured practice, and peer learning.
            </p>
          </div>

          <div
            className="relative rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md
            transition-all duration-300 hover:-translate-y-1"
          >
            <h4 className="text-white font-medium mb-1">
              Member – Software Developer Club
            </h4>
            <p className="text-white/60 text-sm">
              Actively engaged in a collaborative environment focused on
              software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
