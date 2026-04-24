import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./SiteLayout";
import federationImg from "@/assets/project-federation.jpg";
import baysideImg from "@/assets/project-bayside.jpg";
import epoxyImg from "@/assets/project-epoxy.jpg";
import modernImg from "@/assets/project-modern.jpg";
import interiorImg from "@/assets/project-interior.jpg";
import heritageImg from "@/assets/project-heritage.jpg";

const PROJECTS = [
  {
    image: federationImg,
    title: "Full Exterior Refresh in Mitcham",
    body: "Restoring sun-damaged Federation weatherboards. Lead-paint XRF tested, hand-sanded, oil-primed and finished in heritage Dulux Weathershield.",
  },
  {
    image: baysideImg,
    title: "Coastal Defense Repaint in Brighton",
    body: "Salt-spray exposed render rebuilt with marine-grade elastomeric membrane. UV-stable topcoat engineered for Port Phillip's prevailing weather.",
  },
  {
    image: epoxyImg,
    title: "High-Gloss Epoxy in Berwick",
    body: "Industrial-grade flake epoxy floor system over a moisture-tested slab. Slip-rated, chemical resistant, decade-grade durability for the daily-driver garage.",
  },
  {
    image: modernImg,
    title: "Two-Storey Render Refresh in Pakenham",
    body: "IR-reflective dark render system over a high-exposure new build. Spray and back-roll for film build, low-VOC throughout for an occupied family home.",
  },
  {
    image: interiorImg,
    title: "Full Interior Repaint in Hampton",
    body: "Walls, ceilings, trim and a deep-navy feature wall. Festool dustless sanding, three-coat enamel system on every architrave and skirt.",
  },
  {
    image: heritageImg,
    title: "Edwardian Restoration in Elwood",
    body: "National Trust period palette, hand-cut detail on cast-iron lacework and original timber lattice. Heritage overlay liaison handled in-house.",
  },
];

export function RecentTransformations() {
  return (
    <div>
      <Eyebrow>Recent Transformations</Eyebrow>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-4xl lg:text-6xl font-bold max-w-3xl leading-[1.05]">
          Real homes. Real suburbs. Signed off by a master.
        </h2>
        <Link
          to="/gallery"
          className="label-caps inline-flex items-center gap-2 text-foreground/80 hover:text-gold"
        >
          View Full Gallery <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col border border-white/10 bg-[oklch(0.16_0_0)] overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={896}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-xl lg:text-2xl font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed text-[15px] flex-1">
                {p.body}
              </p>
              <Link
                to="/gallery"
                className="mt-6 inline-flex items-center gap-2 label-caps text-gold"
                style={{ color: "var(--gold)" }}
              >
                View Project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
