import { ShieldCheck, Award, FileCheck2, Hammer } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Dulux Accredited" },
  { icon: ShieldCheck, label: "VBA Licensed" },
  { icon: FileCheck2, label: "$20M Public Liability" },
  { icon: Hammer, label: "10-Year Masterpiece Guarantee" },
];

export function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-[oklch(0.18_0_0)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5" style={{ color: "var(--gold)" }} />
            <span className="label-caps text-foreground/85">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}