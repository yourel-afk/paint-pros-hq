import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="block" aria-label="Painter Melbourne — Home">
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="label-caps text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ style: { color: "var(--gold)" } }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-gold px-6 py-3 label-caps text-gold-foreground hover:bg-foreground transition-colors"
            style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
          >
            Get a Mitcham HQ Quote
          </Link>
        </div>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="label-caps text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-gold px-6 py-3 label-caps text-gold-foreground"
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