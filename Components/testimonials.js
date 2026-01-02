"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Sugi",
    salutation: "TTC Supervisor",
    image: "/assets/img/person1.jpg",
    text:
      "Hatim is easy to work with. He listens carefully, asks questions when something isn’t clear, and takes responsibility seriously. That made him someone we could rely on during his time with us.",
  },
  {
    name: "Chris Alexander",
    salutation: "System Design Prof",
    image: "/assets/img/person2.jpg",
    text:
      "In system design discussions, Hatim consistently stands out for his structured thinking. He identifies constraints early, justifies architectural decisions, and translates design into clean, reliable implementations.",
  },
  {
    name: "Ashish Tandon",
    salutation: "Scotiabank Technical Lead",
    image: "/assets/img/person3.jpg",
    text:
      "What impressed me most was Hatim’s consistency. He shows up every day with the same intensity and hunger to improve.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black py-6 px-6">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent my-15" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          What People Have to Say
        </h2>
        <p className="text-white/50 max-w-xl mb-16">
          A few words from people I’ve worked with and learned alongside.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl
                ${index === 1 ? "md:-translate-y-6" : ""}
              `}
            >
              <div className="absolute inset-0 rounded-2xl bg-green-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  “{item.text}”
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-green-400/40">
                    <Image
                      src={item.image}
                      width={48}
                      height={48}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-green-400 text-xs">{item.salutation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
