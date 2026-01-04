export default function Certifications() {
  return (
    <section className="py-12 bg-black relative overflow-hidden">
      {/* background glow */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-10" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_60%)]" /> */}

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Certifications
        </h2>
        <p className="text-white/60 max-w-xl mb-14">
          Industry-recognized credentials that validate both technical depth and professional compliance.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* AWS */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-green-400/60 to-transparent hover:from-green-400 transition">
            <div className="rounded-2xl bg-black/70 backdrop-blur-xl p-8 h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs tracking-widest text-green-400 uppercase">
                  Cloud Certification
                </span>
                <span className="text-green-400 text-sm opacity-0 group-hover:opacity-100 transition">
                  Verified
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                AWS Certified Cloud Practitioner
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Demonstrates foundational knowledge of cloud concepts, AWS services,
                security, pricing models, and architectural best practices.
              </p>

              <div className="mt-6 h-[1px] bg-gradient-to-r from-green-400/60 to-transparent" />
            </div>
          </div>

          {/* AODA */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-green-400/60 to-transparent hover:from-green-400 transition">
            <div className="rounded-2xl bg-black/70 backdrop-blur-xl p-8 h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs tracking-widest text-green-400 uppercase">
                  Accessibility Compliance
                </span>
                <span className="text-green-400 text-sm opacity-0 group-hover:opacity-100 transition">
                  Certified
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                AODA Accessibility Certification
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                Trained in creating inclusive, accessible digital experiences in
                compliance with Ontario’s Accessibility for Ontarians with Disabilities Act.
              </p>

              <div className="mt-6 h-[1px] bg-gradient-to-r from-green-400/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
