"use client";

import Image from "next/image";

export default function WorkHistory() {
  return (
    <section id="experience" className="bg-black px-4">
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-15" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">
          Work History
        </h2>
        <p className="text-green-400 mb-8">
          Real-world experience, ownership, and impact.
        </p>

        <div className="space-y-10">
          {/* ================= TTC ================= */}
          <div className="rounded-3xl border border-green-500/20 p-8 bg-gradient-to-br from-green-900/10 to-black">
            <div className="grid md:grid-cols-2 gap-5">
              
              {/* Images */}
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/assets/img/ttc-1.jpg"
                  width={500}
                  height={200}
                  alt="TTC Internship"
                  className="rounded-xl object-cover hover:scale-105 transition"
                />
                {/* <Image
                  src="/assets/img/ttc-2.jpg"
                  width={500}
                  height={200}
                  alt="TTC Team"
                  className="rounded-xl object-cover hover:scale-105 transition"
                /> */}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  TTC — Summer Student Intern
                </h3>
                <p className="text-green-400 mt-1">Summer Internship</p>

                <ul className="mt-6 space-y-3 text-gray-300">
                  <li>• Maintained subway stations for passenger safety.</li>
                  <li>• Collaborated with teams to resolve hazards.</li>
                  <li>• Ensured facility cleanliness and equipment upkeep.</li>
                </ul>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-green-400/40 text-green-300 bg-green-900/20">
                  🏆 Teamwork Nomination Award
                </div>
              </div>
            </div>
          </div>

          {/* ================= ACENET ================= */}
          <div className="rounded-3xl border border-white/10 p-8 bg-gradient-to-br from-white/5 to-black">
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  IT Support — Acenet Wireless
                </h3>
                <p className="text-green-400 mt-1">
                  Hardware & Software Support
                </p>

                <ul className="mt-6 space-y-3 text-gray-300">
                  <li>• Hardware troubleshooting (phones, accessories)</li>
                  <li>• Software diagnostics and OS-level fixes</li>
                  <li>• Network, SIM, and connectivity support</li>
                  <li>• Fast-paced real-time customer problem solving</li>
                </ul>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/assets/img/acenet-1.jpg"
                  width={500}
                  height={200}
                  alt="Acenet Store"
                  className="rounded-xl object-cover hover:scale-105 transition"
                />
                {/* <Image
                  src="/assets/img/acenet-2.jpg"
                  width={400}
                  height={300}
                  alt="Device Repair"
                  className="rounded-xl object-cover hover:scale-105 transition"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
