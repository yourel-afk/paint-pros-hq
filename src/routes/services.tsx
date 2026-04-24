import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { ThreeStage } from "@/components/site/ThreeStage";
import { Brush, Home, Building2, Palette, Droplets, Trees } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { NoSubbies } from "@/components/site/NoSubbies";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Painting Services | Interior, Exterior, Heritage &amp; Coastal | Painter Melbourne" },
      {
        name: "description",
        content:
      "Interior, exterior, heritage restoration, coastal defense and bushland-grade coating systems delivered by Painter Melbourne's in-house master crews. Strategically based in Mitcham.",
      },
      { property: "og:title", content: "Painting Services | Painter Melbourne" },
      {
        property: "og:description",
        content: "Interior, exterior, heritage, coastal defense and bushland-grade systems by our in-house master painters.",
      },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/services` }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Home,
    title: "Interior Repaints",
    desc:
      "Whole-home interiors done properly. Walls patched and gapped, trim sanded back with Festool dustless gear, ceilings rolled flat, doors and architraves cut in by hand. Two coats of premium top coats (Dulux Wash&Wear or Aquanamel on the trim) laid wet-edge so there's no lap marks under the lounge-room downlights.",
  },
  {
    icon: Building2,
    title: "Exterior Repaints",
    desc:
      "Render, weatherboard, brick, fibro and Hardie sheet. We pressure-wash, scrape, sand back to a sound substrate, spot-prime the bare timber and rusted fixings, fill every gap and split, then lay down two coats of Dulux Weathershield. Back rolled after spray so the film actually bonds. Built to outlast Melbourne's four-season punishment.",
  },
  {
    icon: Palette,
    title: "Heritage & Period Restoration",
    desc:
      "Victorian, Edwardian and Art Deco facades restored, not just repainted. Lead-safe scrape and containment on pre-1970 paintwork, conservation-grade fillers on damaged ornament, period-correct colour matching to council overlay requirements, and a sashed brush on every cornice and finial. Heritage permits respected. Original detail preserved.",
  },
  {
    icon: Droplets,
    title: "Coastal Defense Systems",
    desc:
      "Bayside-grade builds for properties taking the salt spray, onshore winds and reflected UV off Port Phillip. Marine-grade elastomeric membrane primer, two coats of UV-stable Weathershield top coat, sealed gap-and-fill on every joint. We pre-treat rust on every nail head and fitting, because that's where coastal failures actually start.",
  },
  {
    icon: Trees,
    title: "Bushland & BAL Coatings",
    desc:
      "Eastern hills properties in BAL-12.5 to BAL-29 zones get fire-rated systems on eaves, decks and timber cladding. Penetrating timber preservers underneath, decking oils that breathe, and CSIRO-tested intumescent systems where the BAL rating demands it. Every coat applied to spec. Your insurer's spec, not ours.",
  },
  {
    icon: Brush,
    title: "Specialty Finishes",
    desc:
      "Limewash on heritage brickwork, Venetian plaster on feature walls, micro-cement in wet areas, and bespoke architectural finishes for design-led builds. Hand-trowelled by the same in-house crew that runs the everyday work. No specialist subbies parachuted in for one wall.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Service Catalogue</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold max-w-4xl tracking-tight">
          Six trades. One <span style={{ color: "var(--gold)" }}>in-house crew.</span>
        </h1>
        <p className="mt-8 text-lg text-foreground/85 max-w-3xl leading-relaxed">
          We don't just paint your house. We restore the surface first, then we paint it. Every service below is delivered by Painter Melbourne employees, with the climate-correct system already specced for your property. <span className="text-foreground">No subbies. No shortcuts.</span>
        </p>
      </Section>

      <TrustBar />

      <Section>
        <Eyebrow>What We Actually Do On Site</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl">
          Surfaces restored, then top-coated. <span style={{ color: "var(--gold)" }}>In that order.</span>
        </h2>
        <p className="mt-4 text-foreground/70 max-w-2xl">
          70% of every job is the grunt work. Patching, gapping, sanding, priming. The paint is the easy bit.
        </p>
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
        <NoSubbies />
      </Section>

      <Section className="border-t border-white/10">
        <ThreeStage />
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}