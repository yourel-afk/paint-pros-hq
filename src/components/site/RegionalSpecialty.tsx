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
        headline: `Salt, sun and sea spray engineered out of every ${suburb} facade.`,
        paragraphs: [
          `${suburb} sits inside Port Phillip Bay's salt-spray corridor. Onshore winds carry chloride-laden mist hundreds of metres inland, embedding salt crystals into render, weatherboard and rendered brick. Standard acrylics fail inside three to five years. Chalking, blistering and hairline cracking around window reveals and parapet caps.`,
          `Our Coastal Defense System is built for it. We prime bare and remediated substrates with a salt-tolerant alkali-resistant sealer, then apply a two-coat elastomeric membrane that flexes with thermal movement and bridges the micro-cracks that open up when render expands under the bay's reflected UV. The topcoat is a UV-stable 100% acrylic with high-grade titanium dioxide and inorganic pigments. Colours hold true through a decade of unfiltered sun off the water.`,
          `On ${suburb} homes specifically, we pay extra attention to north and west elevations facing the bay, parapet caps that pool salt water, and any rendered surface within 500m of the foreshore.`,
        ],
        specs: [
          { label: "Membrane", value: "Elastomeric, salt-tolerant, crack-bridging to 2mm" },
          { label: "Pigment system", value: "UV-stable inorganic plus high-grade TiO₂ topcoats" },
          { label: "Engineered for", value: "Port Phillip Bay salt-spray and reflected UV" },
        ],
      };
    case "eastern-hills":
      return {
        Icon: TreePine,
        eyebrow: "Heritage & Weatherboard Mastery",
        headline: `Federation timber, four-season movement and lead-safe restoration in ${suburb}.`,
        paragraphs: [
          `Most ${suburb} homes carry a century of Federation, Edwardian and Interwar timber. Weatherboards, fascias, ornate brackets and original window joinery move with every Melbourne season. Cold June mornings contract the boards, hot February afternoons swell them back out, and standard repaints crack along every join inside two years.`,
          `We treat the substrate first, then we paint it. 70% of the project is prep: hand-stripping flaking layers, dustless sanding with Festool extractors, gapping every shrinkage split, sounding out rot in sill ends, and spot-priming every bare timber face with a penetrating oil-modified primer. That primer layer is what lets the system breathe through the four-season swing without cracking back to bare wood.`,
          `Anything pre-1970 is a lead-paint candidate. We XRF-test before we sand. Full stop. Once cleared, ornate Federation trim, turned posts, fretwork, finials and dentil moulding all get cut in by hand with a sashed brush. No spray shortcuts that bridge the detail. ${suburb} heritage is worth the extra hours.`,
        ],
        specs: [
          { label: "Lead-safe protocol", value: "XRF testing on every pre-1970 substrate" },
          { label: "Prep-first standard", value: "70% of the project is sanding, gapping, priming" },
          { label: "Federation trim", value: "Hand-cut fretwork, brackets and dentil moulding" },
        ],
      };
    case "se-growth":
      return {
        Icon: Building2,
        eyebrow: "Modern Residential Performance",
        headline: `UV-reflective coatings and modern render protection in ${suburb}.`,
        paragraphs: [
          `${suburb} is Melbourne's contemporary new-build belt. Large-format render facades, two-storey elevations, dark feature walls and the high sun exposure that comes with treeless estate streetscapes. Heat load on dark render can exceed 70°C in summer, the exact temperature at which standard dark colours fade, chalk and warp the render behind them.`,
          `We specify UV-reflective coatings on every dark elevation. Infrared-reflective pigments drop surface temperatures by 10 to 15 degrees and protect both the colour and the substrate. Modern render gets a dedicated alkali-resistant primer plus two coats of premium acrylic membrane, sealed at every parapet junction and control joint to keep moisture out of the wall system.`,
          `On every ${suburb} project, the same in-house crew handles facade, eaves, fascia and the full interior repaint. Low-VOC enamel systems on every architrave and skirt, brush-cut detail on window reveals, and a three-coat film build on every exterior elevation. No subbies handed the keys halfway through the job.`,
        ],
        specs: [
          { label: "UV-reflective system", value: "IR pigments, 10 to 15 degree surface drop" },
          { label: "Modern render protection", value: "Alkali primer plus two-coat acrylic membrane" },
          { label: "Interior finish", value: "Low-VOC three-coat enamel on trim and joinery" },
        ],
      };
    case "inner-se":
      return {
        Icon: Sparkles,
        eyebrow: "Period Restoration",
        headline: `Victorian, Edwardian and Art Deco facades, colour-correct in ${suburb}.`,
        paragraphs: [
          `${suburb} sits across a dense band of Victorian terraces, Edwardian villas, California bungalows and Art Deco apartments. Every period has its own correct colour palette, its own substrate quirks, and for many properties a council heritage overlay that dictates what's allowed.`,
          `Our heritage crew works to period-correct National Trust palettes when required, hand-matches existing pigments under raking light, and prepares substrates lead-safe on anything pre-1970. Render, lime mortar, original timber and pressed-metal detail each get their own primer system. There is no one-coat shortcut on a ${suburb} period facade.`,
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