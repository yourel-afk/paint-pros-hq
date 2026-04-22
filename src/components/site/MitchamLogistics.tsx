import { MapPin } from "lucide-react";

export function MitchamLogistics({ suburb }: { suburb: string }) {
  return (
    <div className="border border-white/10 bg-[oklch(0.18_0_0)] p-8 lg:p-10 flex gap-6 items-start">
      <MapPin className="h-8 w-8 shrink-0" style={{ color: "var(--gold)" }} />
      <div>
        <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>
          Mitcham HQ · Logistics Module
        </div>
        <p className="text-foreground/85 leading-relaxed">
          Our Mitcham HQ crews utilise the EastLink and Monash corridors for rapid,
          on-time mobilisation to <strong className="text-foreground">{suburb}</strong>,
          ensuring local-expert arrival for high-end residential projects.
        </p>
      </div>
    </div>
  );
}