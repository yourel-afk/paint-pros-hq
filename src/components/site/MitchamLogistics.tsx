import { MapPin } from "lucide-react";

export function MitchamLogistics({ suburb, region }: { suburb: string; region?: string }) {
  return (
    <div className="border border-white/10 bg-[oklch(0.18_0_0)] p-8 lg:p-10 flex gap-6 items-start">
      <MapPin className="h-8 w-8 shrink-0" style={{ color: "var(--gold)" }} />
      <div>
        <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>
          Mitcham HQ · Logistics Module
        </div>
        <p className="text-foreground/85 leading-relaxed">
          Mobilising from our Mitcham HQ, our crews utilise the EastLink and Monash
          corridors for rapid, on-time service to{" "}
          <strong className="text-foreground">{suburb}</strong>
          {region ? (
            <>
              {" "}and across the{" "}
              <strong className="text-foreground">{region}</strong> region
            </>
          ) : null}
          — local-expert arrival for high-end residential projects.
        </p>
      </div>
    </div>
  );
}