import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { ThreeStage } from "@/components/site/ThreeStage";
import { Brush, Home, Building2, Palette, Droplets, Trees } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — High-End Residential Painting | Painter Melbourne" },
      {
        name: "description",
        content:
          "Interior, exterior, heritage restoration, coastal defense and bushland-grade coating systems delivered by Painter Melbourne's in-house master crews from Mitcham HQ.",
      },
      { property: "og:title", content: "Services — Painter Melbourne" },
      {
        property: "og:description",
        content: "Interior, exterior, heritage, coastal defense and bushland-grade systems by Mitcham HQ master painters.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Home, title: "Interior Masterworks", desc: "Whole-home repaints, feature walls, ceilings and trim — executed with dustless sanding systems and brand-grade Dulux finishes." },
  { icon: Building2, title: "Exterior Estate Painting", desc: "Render, weatherboard, brick and cement-sheet — sealed against Melbourne's four-season cycle with multi-coat elastomeric builds." },
  { icon: Palette, title: "Heritage & Period Restoration", desc: "Period-correct colour matching, lead-safe preparation and conservation-grade products for Victorian, Edwardian and Art Deco facades." },
  { icon: Droplets, title: "Coastal Defense Systems", desc: "Marine-grade elastomeric membranes and UV-reflective topcoats for Bayside salt-spray and humidity exposure." },
  { icon: Trees, title: "Bushland & BAL Coatings", desc: "Fire-rated systems and timber preservation for Eastern hills properties in BAL-12.5 to BAL-29 zones." },
  { icon: Brush, title: "Specialty Finishes", desc: "Limewash, Venetian plaster, micro-cement and bespoke architectural finishes for design-led residences." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Service Catalogue</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold max-w-4xl tracking-tight">
          Six disciplines. One <span style={{ color: "var(--gold)" }}>master crew.</span>
        </h1>
        <p className="mt-8 text-lg text-foreground/75 max-w-2xl">
          Every service below is delivered exclusively by Painter Melbourne employees — never subcontractors. Crews are dispatched from our Mitcham HQ with the climate-correct system pre-specified for your property.
        </p>
      </Section>

      <TrustBar />

      <Section>
        <Eyebrow>Service Disciplines</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl">
          The six disciplines of a Painter Melbourne master crew.
        </h2>
        <div className="mt-12 grid gap-px bg-white/10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <Icon className="h-10 w-10" style={{ color: "var(--gold)" }} />
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <ThreeStage />
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}