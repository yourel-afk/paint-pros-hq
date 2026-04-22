import stagePrep from "@/assets/stage-prep.jpg";
import stageApplication from "@/assets/stage-application.jpg";
import stageHandover from "@/assets/stage-handover.jpg";
import { Eyebrow } from "./SiteLayout";

const STAGES = [
  {
    n: "01",
    title: "Diagnostic Prep",
    desc: "Surface remediation, moisture testing and structural masking. We map every defect before a brush is loaded.",
    img: stagePrep,
    alt: "Master painter cutting in a perfect line during diagnostic prep",
  },
  {
    n: "02",
    title: "Precision Application",
    desc: "Multi-coat execution using climate-specific formulations matched to substrate, exposure and Melbourne micro-climate.",
    img: stageApplication,
    alt: "Spray application of premium coating in dustless workspace",
  },
  {
    n: "03",
    title: "Signature Handover",
    desc: "100-point inspection under harsh raking site lighting. Final client sign-off only after every line passes.",
    img: stageHandover,
    alt: "Painter inspecting flawless finish with raking torch under site lighting",
  },
];

export function ThreeStage() {
  return (
    <div>
      <Eyebrow>The Three-Stage Excellence Method</Eyebrow>
      <h2 className="text-4xl lg:text-6xl font-bold max-w-3xl">
        A masterpiece is the result of <span style={{ color: "var(--gold)" }}>method</span>, not luck.
      </h2>
      <p className="mt-6 text-foreground/70 max-w-2xl text-lg">
        Every Painter Melbourne project — from a Brighton heritage facade to a Glen Waverley new-build — moves through the same proprietary three-stage protocol.
      </p>
      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {STAGES.map((s) => (
          <article key={s.n} className="border border-white/10 bg-[oklch(0.18_0_0)]">
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
            <div className="p-8">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-extrabold" style={{ color: "var(--gold)" }}>
                  {s.n}
                </span>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}