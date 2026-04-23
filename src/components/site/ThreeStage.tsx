import stagePrep from "@/assets/stage-prep.jpg";
import stageApplication from "@/assets/stage-application.jpg";
import stageHandover from "@/assets/stage-handover.jpg";
import { Eyebrow } from "./SiteLayout";

const STAGES = [
  {
    n: "01",
    title: "The Grunt Work (Prep & Remediation)",
    lede: "70% of every job. Zero shortcuts.",
    desc:
      "This is where the 10-year guarantee actually comes from. Before a brush is loaded we're patching and gapping every crack, scraping and sanding every flake, dustless sanding with Festool gear so your home isn't a fog of silica, washing down with sugar soap, spot-priming bare timber and rusted nail-heads, and masking the job to the millimetre. If the substrate isn't sound, no top coat will save it — so we make it sound.",
    img: stagePrep,
    alt: "Painter Melbourne crew dustless sanding with Festool extractors and patching weatherboard during prep stage",
    bullets: [
      "Festool dustless sanding (HEPA-extracted)",
      "Patching, gapping & filler builds",
      "Sugar-soap wash-down + spot priming",
      "Lead-safe scrape on pre-1970 substrates",
      "Full mask-up: floors, glass, hardware",
    ],
  },
  {
    n: "02",
    title: "Precision Application (Cut In, Roll, Repeat)",
    lede: "Premium top coats, laid down properly.",
    desc:
      "Two coats minimum of premium top coats — Dulux Weathershield, Wash&Wear, Aquanamel — matched to the substrate and Melbourne's exposure. Cutting in by hand with a sashed brush, then back rolling to lay the film flat and even. No flashing, no lap marks, no holidays. Spray where it earns its place — large render facades, garage doors, ceilings — back-rolled or back-brushed straight after to bond the film into the surface.",
    img: stageApplication,
    alt: "Painter Melbourne master painter cutting in along ceiling line then back rolling premium Dulux top coat",
    bullets: [
      "Hand cut-in on every edge & cornice",
      "Back rolling after spray for film bond",
      "Two coats premium top coat (min.)",
      "Wet-edge discipline — no lap marks",
      "Climate-correct system per substrate",
    ],
  },
  {
    n: "03",
    title: "Signature Handover (Walk the Job)",
    lede: "We walk the job with you. Torch in hand.",
    desc:
      "Before we pack the van, a senior runs a 100-point check under raking site lighting — the harsh angle that exposes every roller mark, every dust nib, every missed cut. Anything that doesn't pass gets fixed on the spot, not on a callback. Then we walk the job with you, room by room, with a torch. You sign off when you're happy — not before.",
    img: stageHandover,
    alt: "Painter Melbourne senior walking the job with client under raking torch light during signature handover",
    bullets: [
      "100-point raking-light inspection",
      "Defects fixed on the spot",
      "Walk-through with the client",
      "Touch-up paint left labelled on site",
      "Written handover + guarantee certificate",
    ],
  },
];

export function ThreeStage() {
  return (
    <div>
      <Eyebrow>The Three-Stage Excellence Method</Eyebrow>
      <h2 className="text-4xl lg:text-6xl font-bold max-w-3xl">
        A proper finish is <span style={{ color: "var(--gold)" }}>70% prep</span>, 30% paint.
      </h2>
      <p className="mt-6 text-foreground/75 max-w-3xl text-lg leading-relaxed">
        Every Painter Melbourne job — Brighton heritage facade or Glen Waverley new-build — runs through the same three stages, in the same order, by the same in-house crew. <span className="text-foreground">No subbies. No shortcuts.</span> The crew you see in the morning is the crew that finishes the job. We don't sell your project to a lower bidder.
      </p>
      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {STAGES.map((s) => (
          <article key={s.n} className="border border-white/10 bg-[oklch(0.18_0_0)] flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                title={s.title}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col gap-5 flex-1">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-extrabold leading-none" style={{ color: "var(--gold)" }}>
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold leading-tight">{s.title}</h3>
                  <div className="mt-1 label-caps text-foreground/60">{s.lede}</div>
                </div>
              </div>
              <p className="text-foreground/75 leading-relaxed">{s.desc}</p>
              <ul className="mt-auto space-y-2 pt-4 border-t border-white/10">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/80">
                    <span style={{ color: "var(--gold)" }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}