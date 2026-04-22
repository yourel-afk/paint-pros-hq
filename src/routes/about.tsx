import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mitcham HQ Master Painters | Painter Melbourne" },
      {
        name: "description",
        content: "Painter Melbourne is an in-house master crew operating from Mitcham HQ. Zero subcontractors. 10-year masterpiece guarantee on every project.",
      },
      { property: "og:title", content: "About Painter Melbourne — Mitcham HQ" },
      { property: "og:description", content: "In-house master crew. Zero subcontractors. 10-year masterpiece guarantee." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>About Painter Melbourne</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold max-w-4xl tracking-tight">
          A purpose-built HQ. A single crew. <span style={{ color: "var(--gold)" }}>Zero compromises.</span>
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Painter Melbourne was founded on a single conviction: the highest tier of residential painting in Melbourne could not be delivered by a network of subcontractors. It required a permanent crew, a permanent HQ, and a permanent standard.
            </p>
            <p>
              From our purpose-built headquarters in Mitcham, we dispatch employees — not contractors — to projects across the Bayside, Inner South-East, South-East Growth and Eastern corridors. Every painter on site has been trained on our Three-Stage Excellence Method and is personally accountable to the 10-Year Masterpiece Guarantee.
            </p>
            <p>
              We are Dulux Accredited, VBA Licensed, and carry $20M public liability — but those are baselines. The real differentiator is what happens between Diagnostic Prep and Signature Handover: the patient, repeatable craft of a master painter at work.
            </p>
          </div>
          <div className="lg:col-span-5 border border-white/10 p-10 bg-[oklch(0.18_0_0)]">
            <div className="label-caps mb-6" style={{ color: "var(--gold)" }}>By The Numbers</div>
            <dl className="space-y-6">
              {[
                ["93", "Melbourne suburbs serviced"],
                ["10 yr", "Masterpiece Guarantee"],
                ["100%", "In-house master painters"],
                ["0", "Subcontractors. Ever."],
                ["$20M", "Public liability cover"],
              ].map(([k, v]) => (
                <div key={v} className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-4 last:border-0">
                  <dt className="text-3xl font-bold" style={{ color: "var(--gold)" }}>{k}</dt>
                  <dd className="text-right text-sm text-foreground/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
      <TrustBar />
      <Section>
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}