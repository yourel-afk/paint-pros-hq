import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { NoSubbies } from "@/components/site/NoSubbies";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BUSINESS } from "@/data/business";
import { ArrowUpRight, Building2 } from "lucide-react";

export const Route = createFileRoute("/services/exterior")({
  head: () => ({
    meta: [
      { title: "Exterior House Painters Melbourne | Painter Melbourne" },
      {
        name: "description",
        content:
          "Exterior repaints engineered for Melbourne's four-season punishment. High-pressure prep, rot detection, 70% prep-first philosophy and a 10-Year Masterpiece Guarantee.",
      },
      { property: "og:title", content: "Exterior House Painters Melbourne" },
      {
        property: "og:description",
        content:
          "High-pressure wash, rot detection in weatherboards, marine-grade systems on coastal facades. In-house master crew from our Mitcham Office.",
      },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/services/exterior` }],
  }),
  component: ExteriorPage,
});

const STEPS = [
  {
    title: "Site Assessment & Substrate Audit",
    body: "We walk every elevation. North and west faces flagged for UV exposure, parapet caps checked for water pooling, every joint and reveal inspected. The system is specced to the home, not the catalogue.",
  },
  {
    title: "High-Pressure Wash & Decontamination",
    body: "The whole facade pressure-washed back to a sound, contaminant-free substrate. Mould, chalk, salt residue, spider webs and loose flaking material all removed before a single brush hits the wall. You can't paint over a problem.",
  },
  {
    title: "Rot Detection in Weatherboards & Timber",
    body: "Every weatherboard, fascia, sill, post and bargeboard sounded out with a probe. Soft spots cut out, rot pockets dug back, end-grain re-sealed and dutchman repairs scarfed in by a chippy on our crew. Painting over rot is what other companies do.",
  },
  {
    title: "Scrape, Sand & Lead-Safe Containment",
    body: "Flaking and chalking layers scraped back, edges feathered with Festool dustless sanding. Anything pre-1970 gets XRF-tested for lead first. If it's positive, we contain, dispose and document to compliance. Full stop.",
  },
  {
    title: "Patch, Gap & Spot Prime",
    body: "Every shrinkage split gap-filled with a flexible exterior sealant, every nail head and rusted fitting spot-primed with a metal-grade rust converter, every bare timber face primed with an oil-modified penetrating primer. The 70% of the job that the customer never sees.",
  },
  {
    title: "Two-Coat Premium Top Coat System",
    body: "Two coats of Dulux Weathershield (or marine-grade elastomeric on coastal facades) sprayed for film build and back-rolled for adhesion. UV-stable pigments, salt-tolerant where required, sealed at every junction. Built to outlast Melbourne's four-season punishment.",
  },
  {
    title: "Final Inspection & Site Reinstatement",
    body: "Senior master painter walks the perimeter with you. Drop sheets pulled, garden beds swept, driveway pressure-washed, every offcut removed. We leave the property cleaner than we found it. Sign-off only when you're happy.",
  },
];

function ExteriorPage() {
  return (
    <SiteLayout>
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-16 lg:pt-28">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Exterior Painting" },
              ]}
            />
          </div>
          <Eyebrow>Exterior House Painters Melbourne</Eyebrow>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.05]">
            70% prep, 30% paint. <span style={{ color: "var(--gold)" }}>That's where the 10-year guarantee comes from.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-foreground/85 max-w-3xl leading-relaxed">
            Render, weatherboard, brick, fibro and Hardie sheet. Pressure-washed, sounded for rot, scraped, sanded, gapped, primed and finished in two coats of premium top coats. Engineered for Melbourne's four-season punishment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 label-caps"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              Book Your Exterior Walk-Through <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/interior"
              className="inline-flex items-center gap-2 border border-foreground/40 px-8 py-4 label-caps hover:bg-foreground hover:text-background transition-colors"
            >
              See Interior Services
            </Link>
          </div>
        </div>
      </div>

      <TrustBar />

      <Section>
        <Eyebrow>Our Signature 7-Step Process</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl">
          Seven steps, in this exact order, on every facade.
        </h2>
        <p className="mt-4 text-foreground/70 max-w-2xl">
          We spend 70% of the job on prep because that's where the 10-year guarantee actually comes from.
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
              An exterior built to outlast Melbourne's four seasons.
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Every exterior repaint includes a full pressure wash, rot probe inspection on all timber, scarfed-in dutchman repairs where needed, lead-safe containment on pre-1970 substrates, gap and seal on every joint, spot priming on all bare and remediated faces, and a two-coat premium topcoat system applied spray and back-roll for film build and adhesion.
              </p>
              <p>
                Coastal facades within reach of Port Phillip salt-spray are upgraded to a marine-grade elastomeric system. Heritage and Federation timber gets oil-modified primers and hand-cut detail on every bracket, finial and dentil moulding.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 border border-[var(--gold)] bg-[oklch(0.18_0_0)] p-8">
            <Building2 className="h-9 w-9" style={{ color: "var(--gold)" }} />
            <h3 className="mt-5 text-2xl font-bold">Premium Exterior System</h3>
            <ul className="mt-5 space-y-3 text-foreground/85">
              <li>Pressure wash and substrate decontamination</li>
              <li>Rot probe and dutchman timber repairs</li>
              <li>Lead-safe XRF testing and containment, pre-1970 homes</li>
              <li>Two-coat Dulux Weathershield system, spray and back-roll</li>
              <li>Marine-grade elastomeric upgrade on coastal facades</li>
              <li>10-Year Masterpiece Guarantee on workmanship</li>
            </ul>
          </div>
        </div>
        <CTABlock title="Book your premium exterior repaint." />
      </Section>
    </SiteLayout>
  );
}