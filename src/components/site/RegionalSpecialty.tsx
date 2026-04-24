import { Waves, TreePine, Building2, Sparkles } from "lucide-react";
import type { Region } from "@/data/suburbs";

/**
 * Region-specific deep-dive module injected into every suburb page.
 * Hammers the local technical narrative so each of the 93 pages reads
 * hyper-local rather than templated.
 */
export function RegionalSpecialty({ region, suburb }: { region: Region; suburb: string }) {
  const content = getRegionalContent(region.id, suburb);

  return (
    <div className="border border-white/10 bg-[oklch(0.16_0_0)] p-8 lg:p-12">
      <div className="flex items-start gap-5">
        <content.Icon className="h-10 w-10 shrink-0" style={{ color: "var(--gold)" }} />
        <div className="flex-1">
          <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>
            {content.eyebrow} · {suburb}
          </div>
          <h3 className="text-2xl lg:text-4xl font-bold tracking-tight">
            {content.headline}
          </h3>
          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
            {content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.specs.map((s) => (
              <div key={s.label} className="border border-white/10 bg-background p-5">
                <div className="label-caps text-foreground/55 text-xs">{s.label}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type RegionalContent = {
  Icon: typeof Waves;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  specs: { label: string; value: string }[];
};

function getRegionalContent(regionId: Region["id"], suburb: string): RegionalContent {
  switch (regionId) {
    case "bayside":
      return {
        Icon: Waves,
        eyebrow: "Coastal Defense System",
        headline: `Salt, sun and sea spray — engineered out of every ${suburb} facade.`,
        paragraphs: [
          `${suburb} sits inside Port Phillip Bay's salt-spray corridor. Onshore winds carry chloride-laden mist hundreds of metres inland, embedding salt crystals into render, weatherboard and rendered brick. Standard acrylics fail inside three to five years — chalking, blistering and hairline cracking around window reveals and parapet caps.`,
          `Our Coastal Defense System is built for it. We prime bare and remediated substrates with a salt-tolerant alkali-resistant sealer, then apply a two-coat elastomeric membrane that flexes with thermal movement and bridges the micro-cracks that open up when render expands under the bay's reflected UV. The topcoat is a UV-stable 100% acrylic with high-grade titanium dioxide and inorganic pigments — colours hold true through a decade of unfiltered sun off the water.`,
          `On ${suburb} homes specifically, we pay extra attention to north and west elevations facing the bay, parapet caps that pool salt water, and any rendered surface within 500m of the foreshore.`,
        ],
        specs: [
          { label: "Membrane", value: "Elastomeric, salt-tolerant, crack-bridging to 2mm" },
          { label: "Pigment system", value: "UV-stable inorganic + high-grade TiO₂ topcoats" },
          { label: "Engineered for", value: "Port Phillip Bay salt-spray + reflected UV" },
        ],
      };
    case "eastern-hills":
      return {
        Icon: TreePine,
        eyebrow: "Heritage & Timber Mastery",
        headline: `Federation timber, four-season movement, lead-safe restoration in ${suburb}.`,
        paragraphs: [
          `Many ${suburb} properties date from the Federation, Edwardian and Interwar periods — meaning original weatherboards, fascias, ornate brackets and timber window joinery that has been painted, repainted and patched for a century. Anything from before 1970 is a lead-paint candidate, and we test before we sand. Full stop.`,
          `Once cleared, we hand-strip flaking layers, sound-out rot in sill ends and bracket returns, splice in matched timber where the original is past saving, and re-establish profile detail with two-pack epoxy fillers. Every bare timber surface gets a penetrating oil-modified primer before the first finish coat — that's what lets the system breathe with Melbourne's four-season swings without cracking back to bare wood.`,
          `For ornate Federation trim — turned posts, fretwork, finials, dentil moulding — we cut in by hand. No spray shortcuts that bridge the detail. ${suburb} heritage is worth the extra hours.`,
        ],
        specs: [
          { label: "Lead-safe", value: "Pre-sanding XRF testing on every pre-1970 substrate" },
          { label: "Timber prep", value: "Hand strip, splice, epoxy fill, oil-modified prime" },
          { label: "Detail work", value: "Hand-cut fretwork, brackets and dentil mouldings" },
        ],
      };
    case "se-growth":
      return {
        Icon: Building2,
        eyebrow: "Modern Residential Performance",
        headline: `New-build render, dark feature walls and low-VOC systems for ${suburb}.`,
        paragraphs: [
          `${suburb} is Melbourne's contemporary new-build belt — large-format render, two-storey facades, dark feature walls, and the high exposure that comes with treeless estate streetscapes. Heat load on dark render can exceed 70°C in summer, which is exactly the temperature at which standard dark colours fade, chalk and warp the substrate.`,
          `We specify UV-reflective heat-management coatings on every dark elevation — formulated with infrared-reflective pigments that drop surface temperatures by 10–15°C and protect both the colour and the render behind it. On lighter facades and full repaints, we apply premium low-VOC acrylic systems that meet Green Building Council standards — safe for new-build occupancy and indoor-air-quality conscious families.`,
          `For ${suburb} repaints on five-to-ten-year-old estate homes, we typically remediate developer-grade render hairlines, re-flash parapet junctions, and upgrade the original builder's spec to a true ten-year system.`,
        ],
        specs: [
          { label: "Heat management", value: "IR-reflective pigments — 10–15°C surface drop" },
          { label: "Indoor air quality", value: "Low-VOC acrylic systems, GBCA-compliant" },
          { label: "Estate-grade upgrade", value: "Developer-render remediation + 10-year spec" },
        ],
      };
    case "inner-se":
      return {
        Icon: Sparkles,
        eyebrow: "Period Restoration",
        headline: `Victorian, Edwardian and Art Deco facades — colour-correct in ${suburb}.`,
        paragraphs: [
          `${suburb} sits across a dense band of Victorian terraces, Edwardian villas, California bungalows and Art Deco apartments. Every period has its own correct colour palette, its own substrate quirks, and — for many properties — a council heritage overlay that dictates what's allowed.`,
          `Our heritage crew works to period-correct National Trust palettes when required, hand-matches existing pigments under raking light, and prepares substrates lead-safe on anything pre-1970. Render, lime mortar, original timber and pressed-metal detail each get their own primer system — there is no one-coat shortcut on a ${suburb} period facade.`,
          `We also liaise directly with Glen Eira and Bayside heritage officers when overlays apply, so colour cards and product specifications are signed off before the first drop of paint hits the wall.`,
        ],
        specs: [
          { label: "Heritage palettes", value: "National Trust period-correct colour matching" },
          { label: "Substrate-specific", value: "Lime, render, timber, pressed-metal primers" },
          { label: "Council liaison", value: "Heritage overlay sign-off before application" },
        ],
      };
  }
}