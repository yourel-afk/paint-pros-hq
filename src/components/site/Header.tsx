import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS } from "@/data/business";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/three-stage", label: "The Method" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 lg:px-12">
        <Link to="/" className="flex min-h-11 items-center" aria-label="Painter Melbourne — Mitcham HQ Home">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
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