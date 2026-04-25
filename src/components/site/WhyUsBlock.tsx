import { ShieldCheck, Clock, Award } from "lucide-react";

/**
 * Global "Why Us" conversion block. Rendered above the Footer on every
 * page via SiteLayout. Three clean cards, gold iconography, no dashes.
 */
const CARDS = [
  {
    Icon: ShieldCheck,
    title: "VBA Licensed & Insured",
    body: "Fully VBA licensed, with $20M Public Liability cover on every job. Real paperwork, real protection, real peace of mind.",
  },
  {
    Icon: Clock,
    title: "7:00 AM Sharp Starts",
    body: "Our decentralised crews start on time, every time. EastLink and Monash corridor coverage means we're on your driveway before peak traffic.",
  },
  {
    Icon: Award,
    title: "10-Year Guarantee",
    body: "We don't just paint. We elevate your property and protect your asset, backed by our full 10-Year Masterpiece Guarantee.",
  },
];

export function WhyUsBlock() {
  return (
    <section className="border-t border-white/10 bg-[oklch(0.13_0_0)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-24">
        <div className="label-caps mb-4" style={{ color: "var(--gold)" }}>
          The Painter Melbourne Difference
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl tracking-tight">
          Why Melbourne homeowners trust us with their largest asset.
        </h2>
        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-3 border border-white/10">
          {CARDS.map(({ Icon, title, body }) => (
            <div key={title} className="bg-background p-8 lg:p-10 flex flex-col">
              <Icon className="h-9 w-9" style={{ color: "var(--gold)" }} />
              <h3 className="mt-6 text-xl lg:text-2xl font-semibold leading-snug">
                {title}
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed text-[15px]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}