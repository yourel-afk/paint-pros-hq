import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhyUsBlock } from "./WhyUsBlock";
import { ReactNode } from "react";
import { BUSINESS } from "@/data/business";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <WhyUsBlock />
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="label-caps mb-4" style={{ color: "var(--gold)" }}>
      {children}
    </div>
  );
}

export function CTABlock({
  title = "Secure Your Property's Finish",
  subtitle = "Every project begins with a Mitcham Office site visit. No subcontractors. No shortcuts.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="border border-white/10 bg-[oklch(0.18_0_0)] p-10 lg:p-16 mt-16">
      <div className="grid gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-8">
          <h3 className="text-3xl lg:text-4xl font-bold">{title}</h3>
          <p className="mt-4 text-foreground/75 max-w-xl">{subtitle}</p>
        </div>
        <div className="lg:col-span-4 lg:text-right flex flex-col gap-3 lg:items-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center min-h-12 px-8 py-4 label-caps"
            style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
          >
            Get a Mitcham Office Quote
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center min-h-11 px-6 label-caps text-foreground/85 hover:text-gold"
            aria-label={`Call Mitcham Office on ${BUSINESS.phoneDisplay}`}
          >
            or call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}