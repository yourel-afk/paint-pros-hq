import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { NoSubbies } from "@/components/site/NoSubbies";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BUSINESS } from "@/data/business";
import { ArrowUpRight, Home } from "lucide-react";

export const Route = createFileRoute("/services/interior")({
  head: () => ({
    meta: [
      { title: "Interior House Painters Melbourne | Painter Melbourne" },
      {
        name: "description",
        content:
          "Interior repaints by Painter Melbourne's in-house master crew. Festool dustless prep, premium cutting in, low-VOC top coats and a 10-Year Masterpiece Guarantee.",
      },
      { property: "og:title", content: "Interior House Painters Melbourne" },
      {
        property: "og:description",
        content:
          "Festool dustless prep, premium cutting in, three-coat enamel on every trim. In-house master crew from our Mitcham Office.",
      },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/services/interior` }],
  }),
  component: InteriorPage,
});

const STEPS = [
  {
    title: "Walk-Through & Colour Brief",
    body: "We meet you on site, room by room. Lighting tested at the actual time of day you live in the space, sample boards drawn down on the wall, paint sheen matched to the substrate, not the swatch.",
  },
  {
    title: "Full Room Protection",
    body: "Furniture wrapped or relocated, floors covered with breathable canvas drop sheets (never plastic that traps moisture), skirts and architraves taped with low-tack heritage tape, art and electronics sealed off. We treat your home like our own.",
  },
  {
    title: "Plaster Repairs & Substrate Prep",
    body: "Cracks raked out and bedded with flexible filler, picture-hook holes patched, popped nails reset, water-stained ceilings stain-blocked. Minor plaster repairs blended back so they vanish under the topcoat.",
  },
  {
    title: "Festool Dustless Sanding",
    body: "Every surface sanded back with Festool extractors at the source. No airborne dust on your floors, no white film on your skirting boards, no sneeze-fest in the kitchen the next morning. Clean prep is fast prep.",
  },
  {
    title: "Spot Priming & Sealing",
    body: "Every bare patch, every plaster repair, every stain block primed with the right system for the substrate. Acrylic primer on plaster, oil-modified primer on bare timber, stain block on water marks. The topcoat is only as good as what sits underneath.",
  },
  {
    title: "Cutting In & Premium Top Coats",
    body: "Edges cut in by hand with a sashed brush. A razor-sharp line at every cornice, every architrave, every door reveal. Two coats of premium top coats laid wet-edge under the lounge-room downlights so there are no lap marks, no roller stipple in the wrong place.",
  },
  {
    title: "Final Walk-Through & Touch-Up",
    body: "We walk the home with you under the actual lighting you live with. Anything that catches the eye gets touched up on the spot. Sign-off only happens when you are happy, not when our truck is loaded.",
  },
];

function InteriorPage() {
  return (
    <SiteLayout>
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-16 lg:pt-28">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Interior Painting" },
              ]}
            />
          </div>
          <Eyebrow>Interior House Painters Melbourne</Eyebrow>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.05]">
            A premium interior repaint, finished by the same crew that{" "}
            <span style={{ color: "var(--gold)" }}>started it.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-foreground/85 max-w-3xl leading-relaxed">
            Walls, ceilings, trim, doors and feature joinery. Festool dustless prep, hand-cut detail and premium top coats laid wet-edge under your actual lighting. No subbies. No shortcuts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 label-caps"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              Book Your Interior Walk-Through <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/exterior"
              className="inline-flex items-center gap-2 border border-foreground/40 px-8 py-4 label-caps hover:bg-foreground hover:text-background transition-colors"
            >
              See Exterior Services
            </Link>
          </div>
        </div>
      </div>

      <TrustBar />

      <Section>
        <Eyebrow>Our Signature 7-Step Process</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl">
          Seven steps. Zero shortcuts. <span style={{ color: "var(--gold)" }}>One in-house crew.</span>
        </h2>
        <p className="mt-4 text-foreground/70 max-w-2xl">
          The same sequence, every interior, every time. Refined over a decade of high-end Melbourne homes.
        </p>
        <ol className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 border border-white/10">
          {STEPS.map((s, i) => (
            <li key={s.title} className="bg-background p-8 lg:p-10 flex gap-6">
              <div
                className="text-3xl font-bold shrink-0 leading-none"
                style={{ color: "var(--gold)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed text-[15px]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-white/10">
        <NoSubbies />
      </Section>

      <Section className="border-t border-white/10">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <Eyebrow>What You Get</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Walls, ceilings, trim and feature joinery, finished to a master standard.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Every interior repaint includes full plaster remediation, Festool dustless sanding, spot priming on all bare and patched substrates, two coats of premium washable wall paint and a three-coat enamel system on every architrave, skirt, door and window reveal.
              </p>
              <p>
                We cut in by hand. No tape lines that bleed. No roller stipple on the cornice. The crew who starts your job is the crew who finishes it, and your senior master painter signs off the final walk-through before we load the truck.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 border border-[var(--gold)] bg-[oklch(0.18_0_0)] p-8">
            <Home className="h-9 w-9" style={{ color: "var(--gold)" }} />
            <h3 className="mt-5 text-2xl font-bold">Premium Interior System</h3>
            <ul className="mt-5 space-y-3 text-foreground/85">
              <li>Premium washable wall paint, two coats</li>
              <li>Three-coat enamel on trim, doors and joinery</li>
              <li>Festool dustless sanding throughout</li>
              <li>Low-VOC systems for occupied family homes</li>
              <li>10-Year Masterpiece Guarantee on workmanship</li>
            </ul>
          </div>
        </div>
        <CTABlock title="Book your premium interior repaint." />
      </Section>
    </SiteLayout>
  );
}