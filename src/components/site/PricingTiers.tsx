import { Check } from "lucide-react";
import { Eyebrow } from "./SiteLayout";

const TIERS = [
  {
    name: "Standard Masterwork",
    range: "$8,400 – $18,500",
    scope: "Full interior repaint · 3-bed home",
    features: [
      "Diagnostic prep & moisture mapping",
      "Two-coat premium Dulux system",
      "100-point handover inspection",
      "10-year workmanship guarantee",
    ],
  },
  {
    name: "Premium Estate",
    range: "$22,000 – $65,000+",
    scope: "Full exterior + interior · 4-5 bed estate",
    features: [
      "Climate-specific elastomeric system",
      "Heritage / coastal / bushland formulations",
      "Three-coat build with primer-sealer",
      "Dedicated project manager · in-house crew",
      "10-year masterpiece guarantee",
    ],
    featured: true,
  },
];

export function PricingTiers() {
  return (
    <div>
      <Eyebrow>Transparent Investment</Eyebrow>
      <h2 className="text-4xl lg:text-5xl font-bold max-w-2xl">
        What a Mitcham HQ project actually costs.
      </h2>
      <p className="mt-6 text-foreground/70 max-w-2xl">
        Indicative ranges for high-end Melbourne residential. Every quote is fixed-price after a Mitcham HQ site visit — no variations, no surprises.
      </p>
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className="border p-10 bg-[oklch(0.18_0_0)]"
            style={{
              borderColor: t.featured ? "var(--gold)" : "oklch(1 0 0 / 0.12)",
            }}
          >
            <div className="label-caps" style={{ color: t.featured ? "var(--gold)" : undefined }}>
              {t.name}
            </div>
            <div className="mt-6 text-4xl lg:text-5xl font-bold">{t.range}</div>
            <div className="mt-2 text-foreground/60">{t.scope}</div>
            <ul className="mt-8 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}