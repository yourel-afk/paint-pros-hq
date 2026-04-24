import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { BUSINESS } from "@/data/business";
import { NoSubbies } from "@/components/site/NoSubbies";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Painter Melbourne | Mitcham-Based Master Painters" },
      {
        name: "description",
        content: "Painter Melbourne is an in-house master crew operating from Mitcham HQ. Zero subcontractors. 10-year masterpiece guarantee on every project.",
      },
      { property: "og:title", content: "About Painter Melbourne | Mitcham-Based Master Painters" },
      { property: "og:description", content: "In-house master crew. Zero subcontractors. 10-year masterpiece guarantee." },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>About Painter Melbourne</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold max-w-4xl tracking-tight">
          One crew. One HQ. <span style={{ color: "var(--gold)" }}>No subbies.</span>
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Painter Melbourne started for one reason: the top end of Melbourne residential work was being subcontracted to whoever could turn up cheapest, and the finish was showing it. Heritage trim being whipped over with one coat. Coastal facades flashing inside two summers. Clients chasing callbacks that nobody owned.
            </p>
            <p>
              So we built it the other way. A permanent depot in Mitcham. A permanent crew on the books — employees, not labour-hire, not subbies. The same painters you meet on quote day are the painters cutting in your cornices three weeks later.
            </p>
            <p>
              We spend 70% of our time on prep — patching, gapping, dustless sanding with Festool gear, sugar-soap wash-down, spot priming — because that's where the 10-year guarantee actually comes from. The premium top coats are the easy part. Anyone can roll Dulux. Not everyone earns the surface underneath it.
            </p>
            <p>
              Yes, we're Dulux Accredited, VBA Licensed and carry $20M public liability. Those are the baseline. The real differentiator is the bloke standing on your scaffold at 7am — and the fact that he's the same bloke standing there at 5pm, three weeks later, walking the job with you under a torch.
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
      <Section className="border-t border-white/10">
        <NoSubbies />
      </Section>
      <Section>
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}