import { MapPin, Clock, Truck } from "lucide-react";

/**
 * Logistics module — single approved narrative across every suburb and region page.
 * Decentralised crew model, 7am sharp starts, EastLink / Monash corridor coverage.
 */
export function MitchamLogistics({ suburb, region }: { suburb: string; region?: string }) {
  void region;
  return (
    <div className="border border-white/10 bg-[oklch(0.18_0_0)] p-8 lg:p-10">
      <div className="flex gap-6 items-start">
        <MapPin className="h-8 w-8 shrink-0" style={{ color: "var(--gold)" }} />
        <div className="flex-1">
          <div className="label-caps mb-3" style={{ color: "var(--gold)" }}>
            Strategically Based in Mitcham
          </div>
          <p className="text-foreground/85 leading-relaxed text-lg">
            Strategically based in Mitcham, our teams provide rapid coverage across
            Greater Melbourne via the EastLink and Monash corridors. Our decentralised
            crew model ensures on-time starts at 7:00 AM sharp in{" "}
            <strong className="text-foreground">{suburb}</strong>, regardless of your suburb.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
              <span className="text-sm text-foreground/80">7:00 AM sharp on-site starts</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
              <span className="text-sm text-foreground/80">EastLink &amp; Monash corridor coverage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}