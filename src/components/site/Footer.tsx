import { Link } from "@tanstack/react-router";
import { REGIONS, slugify, findSuburb } from "@/data/suburbs";
import { Logo } from "./Logo";
import { BUSINESS } from "@/data/business";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * Curated 12 primary service hubs surfaced in the footer matrix.
 * Keeps the footer feeling editorial rather than spammy. Full 97-suburb
 * list lives on the dedicated /locations directory page.
 */
/**
 * Each entry pairs the hub suburb with a varied, hyper-local SEO anchor.
 * Anchor text is intentionally non-uniform to avoid templated link-spam
 * patterns and to spread keyword authority across the suburb network.
 */
const PRIMARY_HUBS: { suburb: string; anchor: string }[] = [
  { suburb: "Mitcham", anchor: "Painters in Mitcham" },
  { suburb: "St Kilda", anchor: "St Kilda House Painters" },
  { suburb: "Brighton", anchor: "Brighton Exterior Restorations" },
  { suburb: "Berwick", anchor: "Professional Painting in Berwick" },
  { suburb: "Glen Waverley", anchor: "Glen Waverley Master Painters" },
  { suburb: "Frankston", anchor: "Painting Specialists Frankston" },
  { suburb: "Camberwell", anchor: "Heritage Painters Camberwell" },
  { suburb: "Doncaster", anchor: "Doncaster Residential Painting" },
  { suburb: "Mount Waverley", anchor: "Mount Waverley Interior Specialists" },
  { suburb: "Cheltenham", anchor: "Cheltenham Exterior Painting" },
  { suburb: "Bentleigh", anchor: "Bentleigh Period Restoration" },
  { suburb: "Box Hill", anchor: "Box Hill House Painters" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[oklch(0.13_0_0)] mt-32">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-foreground/70 max-w-sm leading-relaxed">
              High-end residential master painters serving 97 Melbourne suburbs from our Mitcham Office. 100% in-house crews. Zero subcontractors.
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
          <div className="lg:col-span-8">
            <div className="label-caps mb-6" style={{ color: "var(--gold)" }}>
              Areas We Serve
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
              {PRIMARY_HUBS.map(({ suburb, anchor }) => {
                const found = findSuburb(slugify(suburb));
                if (!found) return null;
                return (
                  <Link
                    key={suburb}
                    to="/locations/$region/$suburb"
                    params={{ region: found.region.id, suburb: slugify(suburb) }}
                    className="text-sm text-foreground/70 hover:text-gold transition-colors flex items-center min-h-9 py-1"
                  >
                    {anchor}
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                to="/locations"
                className="label-caps inline-flex items-center gap-2 min-h-11 hover:opacity-80 transition-opacity"
                style={{ color: "var(--gold)" }}
              >
                View all 97 Melbourne suburbs we serve →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {REGIONS.map((r) => (
                <Link
                  key={r.id}
                  to="/locations/$region"
                  params={{ region: r.id }}
                  className="text-xs label-caps text-foreground/55 hover:text-foreground transition-colors"
                >
                  {r.name}
                </Link>
              ))}
            </div>
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