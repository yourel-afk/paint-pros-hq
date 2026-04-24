import { Link } from "@tanstack/react-router";
import { REGIONS } from "@/data/suburbs";
import { Logo } from "./Logo";
import { BUSINESS } from "@/data/business";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[oklch(0.13_0_0)] mt-32">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-foreground/70 max-w-sm leading-relaxed">
              High-end residential master painters serving 93 Melbourne suburbs from our Mitcham Office. 100% in-house crews. Zero subcontractors.
            </p>
            <address className="mt-6 not-italic space-y-3 text-sm text-foreground/75">
              <div className="flex items-start gap-3 min-h-11">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                <span>Mitcham Office · {BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postcode}</span>
              </div>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 min-h-11 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <a href={BUSINESS.emailHref} className="flex items-center gap-3 min-h-11 hover:text-gold transition-colors break-all">
                <Mail className="h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
                <span>{BUSINESS.email}</span>
              </a>
            </address>
            <nav aria-label="Site" className="mt-8 grid grid-cols-2 gap-2 max-w-xs">
              {[
                { to: "/services", label: "Services" },
                { to: "/three-stage", label: "The Method" },
                { to: "/locations", label: "Locations" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="label-caps text-foreground/70 hover:text-gold flex items-center min-h-11"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {REGIONS.map((r) => (
              <div key={r.id}>
                <Link
                  to="/locations/$region"
                  params={{ region: r.id }}
                  className="label-caps text-gold inline-flex items-center min-h-11"
                  style={{ color: "var(--gold)" }}
                >
                  {r.name}
                </Link>
                <ul className="mt-3 space-y-1">
                  {r.suburbs.slice(0, 8).map((s) => (
                    <li key={s}>
                      <Link
                        to="/locations/$region/$suburb"
                        params={{ region: r.id, suburb: s.toLowerCase().replace(/[^a-z0-9]+/g, "-") }}
                        className="text-sm text-foreground/65 hover:text-foreground flex items-center min-h-9 py-1"
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                  {r.suburbs.length > 8 && (
                    <li>
                      <Link
                        to="/locations/$region"
                        params={{ region: r.id }}
                        className="text-xs label-caps mt-2 inline-flex items-center min-h-9"
                        style={{ color: "var(--gold)" }}
                      >
                        +{r.suburbs.length - 8} more →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/55">
          <div>
            © {new Date().getFullYear()} {BUSINESS.name}. {BUSINESS.abn} · VBA Licensed · $20M Public Liability · Dulux Accredited.
          </div>
          <div>{BUSINESS.guarantee}</div>
        </div>
        <p
          className="mt-4 text-[10px] leading-tight select-text"
          style={{ color: "oklch(0.13 0 0)" }}
        >
          {BUSINESS.legalDisclosure}
        </p>
      </div>
    </footer>
  );
}