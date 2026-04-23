import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS } from "@/data/business";
import { REGIONS } from "@/data/suburbs";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/three-stage", label: "The Method" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 lg:px-12">
        <Link to="/" className="flex min-h-11 items-center" aria-label="Painter Melbourne — Mitcham HQ Home">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/services"
            className="label-caps text-foreground/80 hover:text-gold transition-colors inline-flex items-center min-h-11 px-1"
            activeProps={{ style: { color: "var(--gold)" } }}
          >
            Services
          </Link>
          <Link
            to="/three-stage"
            className="label-caps text-foreground/80 hover:text-gold transition-colors inline-flex items-center min-h-11 px-1"
            activeProps={{ style: { color: "var(--gold)" } }}
          >
            The Method
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setRegionsOpen(true)}
            onMouseLeave={() => setRegionsOpen(false)}
          >
            <Link
              to="/locations"
              className="label-caps text-foreground/80 hover:text-gold transition-colors inline-flex items-center min-h-11 px-1"
              activeProps={{ style: { color: "var(--gold)" } }}
              aria-haspopup="true"
              aria-expanded={regionsOpen}
            >
              Locations ▾
            </Link>
            {regionsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 min-w-[260px]">
                <div className="border border-white/10 bg-[oklch(0.13_0_0)] shadow-2xl">
                  <Link
                    to="/locations"
                    className="block px-5 py-3 label-caps text-foreground/85 hover:bg-[oklch(0.18_0_0)] hover:text-gold border-b border-white/10"
                  >
                    All 93 Suburbs →
                  </Link>
                  {REGIONS.map((r) => (
                    <Link
                      key={r.id}
                      to="/locations/$region"
                      params={{ region: r.id }}
                      className="flex items-center justify-between gap-4 px-5 py-3 hover:bg-[oklch(0.18_0_0)] border-b border-white/5 last:border-b-0 group"
                    >
                      <div>
                        <div className="label-caps text-foreground/85 group-hover:text-gold">{r.name}</div>
                        <div className="text-xs text-foreground/55 mt-0.5">{r.tagline}</div>
                      </div>
                      <span className="text-xs text-foreground/40">{r.suburbs.length}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-caps text-foreground/80 hover:text-gold transition-colors inline-flex items-center min-h-11 px-1"
              activeProps={{ style: { color: "var(--gold)" } }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="label-caps text-foreground/80 hover:text-gold inline-flex items-center gap-2 min-h-11"
            aria-label={`Call Painter Melbourne Mitcham HQ on ${BUSINESS.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-11 px-6 py-3 label-caps text-gold-foreground hover:bg-foreground transition-colors"
            style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
          >
            Get a Mitcham HQ Quote
          </Link>
        </div>
        <button
          className="lg:hidden text-foreground inline-flex items-center justify-center h-11 w-11 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background">
          <div className="flex flex-col gap-1 px-6 py-4">
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="label-caps text-foreground/85 flex items-center min-h-12 border-b border-white/5"
            >
              Services
            </Link>
            <Link
              to="/three-stage"
              onClick={() => setOpen(false)}
              className="label-caps text-foreground/85 flex items-center min-h-12 border-b border-white/5"
            >
              The Method
            </Link>
            <Link
              to="/locations"
              onClick={() => setOpen(false)}
              className="label-caps text-foreground/85 flex items-center min-h-12 border-b border-white/5"
            >
              Locations · All 93 Suburbs
            </Link>
            <div className="grid grid-cols-2 gap-2 py-2 border-b border-white/5">
              {REGIONS.map((r) => (
                <Link
                  key={r.id}
                  to="/locations/$region"
                  params={{ region: r.id }}
                  onClick={() => setOpen(false)}
                  className="text-xs label-caps text-foreground/65 flex items-center min-h-11 px-2"
                  style={{ color: "var(--gold)" }}
                >
                  → {r.name} ({r.suburbs.length})
                </Link>
              ))}
            </div>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="label-caps text-foreground/85 flex items-center min-h-12 border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="label-caps text-foreground/85 flex items-center gap-3 min-h-12 border-b border-white/5"
              aria-label={`Call Painter Melbourne on ${BUSINESS.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" style={{ color: "var(--gold)" }} /> {BUSINESS.phoneDisplay}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center min-h-12 px-6 py-3 label-caps text-gold-foreground"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              Get a Mitcham HQ Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}