import logo from "@/assets/pm-icon.png";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Painter Melbourne — Mitcham Office"
        width={size}
        height={size}
        className="block"
        style={{ width: size, height: size }}
      />
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-display font-extrabold tracking-tight text-foreground text-base" style={{ fontFamily: "var(--font-display)" }}>
          PAINTER MELBOURNE
        </span>
        <span className="label-caps text-gold mt-1" style={{ color: "var(--gold)" }}>
          Mitcham Office · Est. Masterworks
        </span>
      </div>
    </div>
  );
}