import { Link } from "@tanstack/react-router";
import { REGIONS } from "@/data/suburbs";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[oklch(0.13_0_0)] mt-32">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-foreground/70 max-w-sm leading-relaxed">
              High-end residential master painters serving 93 Melbourne suburbs from our Mitcham HQ. 100% in-house crews. Zero subcontractors.
            </p>
            <div className="mt-6 space-y-1 text-sm text-foreground/70">
              <div>Mitcham HQ · Mitcham, VIC 3132</div>
              <div>1300 PM PAINT</div>
              <div>quotes@paintermelbourne.com.au</div>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {REGIONS.map((r) => (
              <div key={r.id}>
                <Link
                  to="/locations/$region"
                  params={{ region: r.id }}
                  className="label-caps text-gold"
                  style={{ color: "var(--gold)" }}
                >
                  {r.name}
                </Link>
                <ul className="mt-4 space-y-2">
                  {r.suburbs.slice(0, 6).map((s) => (
                    <li key={s}>
                      <Link
                        to="/locations/$region/$suburb"
                        params={{ region: r.id, suburb: s.toLowerCase().replace(/[^a-z0-9]+/g, "-") }}
                        className="text-xs text-foreground/60 hover:text-foreground"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/50">
          <div>© {new Date().getFullYear()} Painter Melbourne. VBA Licensed · $20M Public Liability · Dulux Accredited.</div>
          <div>10-Year Masterpiece Guarantee</div>
        </div>
      </div>
    </footer>
  );
}