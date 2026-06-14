"use client";

const items = [
  "Artificial Intelligence",
  "Blockchain",
  "Web Engineering",
  "Mobile Apps",
  "Cybersecurity",
  "Cloud & DevOps",
  "Brand & Marketing",
  "Game Development",
];

export default function MarqueeBand() {
  // Triple the items so the loop is seamless
  const all = [...items, ...items, ...items];

  return (
    <section className="relative py-12 sm:py-16 border-y border-white/5 bg-[rgba(10,9,7,0.4)]">
      <div className="fade-x overflow-hidden">
        <div className="flex animate-marquee gap-8 sm:gap-12 whitespace-nowrap">
          {all.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-8 sm:gap-12 shrink-0"
            >
              <span className="font-serif-italic text-3xl sm:text-5xl lg:text-6xl text-[#f5f1ea]/85 tracking-tight">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full brand-gradient-bg shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
