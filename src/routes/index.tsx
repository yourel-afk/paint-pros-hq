import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { ThreeStage } from "@/components/site/ThreeStage";
import { PricingTiers } from "@/components/site/PricingTiers";
import { REGIONS } from "@/data/suburbs";
import { BUSINESS } from "@/data/business";
import heroImg from "@/assets/hero-mansion.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painter Melbourne | High-End Residential Master Painters" },
      {
        name: "description",
        content:
          "Melbourne's master painters for high-end residential. 100% in-house crews from our Mitcham Office, 10-year masterpiece guarantee, serving 93 suburbs.",
      },
      { property: "og:title", content: "Painter Melbourne | High-End Residential Master Painters" },
      {
        property: "og:description",
        content: "Mitcham Office master painters. Zero subcontractors. 10-year guarantee. Serving 93 Melbourne suburbs.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
      { property: "twitter:title", content: "Painter Melbourne | High-End Residential Master Painters" },
      { property: "twitter:description", content: "Mitcham Office master painters. Zero subcontractors. 10-year guarantee. 93 Melbourne suburbs." },
    ],
    links: [
      { rel: "canonical", href: `${BUSINESS.url}/` },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Luxury Melbourne residential mansion freshly painted by Painter Melbourne master crew"
            title="Mitcham Office — High-End Residential Painting Melbourne"
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-24 pb-32 lg:pt-40 lg:pb-56">
          <div className="label-caps mb-8" style={{ color: "var(--gold)" }}>
            Mitcham Office · Established Master Painters
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.02]">
            High-end residential painting,
            <br />
            <span style={{ color: "var(--gold)" }}>backed by a 10-year masterpiece guarantee.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-foreground/80 leading-relaxed">
            100% in-house master painters. Zero subcontractors. Strategically based in Mitcham, covering 93 Melbourne suburbs across the Bayside, Inner South-East, South-East Growth and Eastern corridors via the EastLink and Monash networks.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 label-caps"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              Get a Mitcham Office Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/three-stage"
              className="inline-flex items-center gap-2 border border-foreground/40 px-8 py-4 label-caps text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              See The Method
            </Link>
          </div>
        </div>
      </div>

      <TrustBar />

      <Section>
        <ThreeStage />
      </Section>

      {/* REGIONS */}
      <Section className="border-t border-white/10">
        <Eyebrow>The 93-Suburb Service Map</Eyebrow>
        <h2 className="text-4xl lg:text-6xl font-bold max-w-3xl">
          One Office. Four corridors. Ninety-three Melbourne suburbs.
        </h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {REGIONS.map((r) => (
            <Link
              key={r.id}
              to="/locations/$region"
              params={{ region: r.id }}
              className="group relative overflow-hidden border border-white/10 aspect-[16/10] block"
            >
              <img
                src={r.image}
                alt={`${r.name} Melbourne residential painting — ${r.specialty}`}
                title={`Professional painting in ${r.name} — Mitcham Office specialists`}
                loading="lazy"
                width={1600}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>
                  {r.tagline}
                </div>
                <div className="text-3xl lg:text-4xl font-bold">{r.name}</div>
                <div className="mt-2 text-foreground/80 text-sm">
                  {r.suburbs.length} suburbs · {r.specialty}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <PricingTiers />
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}
