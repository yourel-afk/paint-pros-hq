import { Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "./SiteLayout";
import { TrustBar } from "./TrustBar";
import { ThreeStage } from "./ThreeStage";
import { REGIONS } from "@/data/suburbs";
import { BUSINESS } from "@/data/business";
import easternImg from "@/assets/region-eastern.jpg";
import { MapPin, Truck, Building2, Phone } from "lucide-react";

export function MitchamFlagship() {
  return (
    <SiteLayout>
      {/* HQ HERO */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={easternImg}
            alt="Painter Melbourne Mitcham HQ headquarters — high-end residential master painting in Mitcham, Melbourne"
            title="Mitcham HQ — Painter Melbourne Headquarters"
            className="w-full h-full object-cover opacity-40"
            width={1600}
            height={1000>
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-28 lg:pt-28 lg:pb-40">
          <nav className="label-caps text-foreground/55 mb-6 flex flex-wrap items-center gap-3">
            <Link to="/locations" className="min-h-11 inline-flex items-center">Locations</Link>
            <span>/</span>
            <Link to="/locations/$region" params={{ region: "eastern-hills" }} className="min-h-11 inline-flex items-center">Eastern & Hills</Link>
            <span>/</span>
            <span className="text-foreground/85">Mitcham · HQ</span>
          </nav>
          <div className="inline-flex items-center gap-2 border border-[var(--gold)] px-3 py-1.5 label-caps mb-6" style={{ color: "var(--gold)" }}>
            <Building2 className="h-3.5 w-3.5" /> The Painter Melbourne Headquarters
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
            Painter <span style={{ color: "var(--gold)" }}>Mitcham</span>
            <br />
            <span className="text-foreground/85 text-3xl lg:text-5xl font-bold">You're not visiting a service area. You're at our HQ.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-foreground/85 max-w-2xl">
            Mitcham isn't a satellite suburb on a service map — it's the purpose-built headquarters from which every Painter Melbourne crew is dispatched. When you book a Mitcham project, you get the closest, fastest, most senior master painters we have.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-12 px-8 py-4 label-caps"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              Get a Mitcham HQ Quote
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 min-h-12 border border-foreground/40 px-8 py-4 label-caps hover:bg-foreground hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <TrustBar />

      {/* HQ NARRATIVE */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>The Logistical Heart · Mitcham HQ</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why a permanent Mitcham depot changes the standard.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                Most painting companies operate from a phone number and a ute. Painter Melbourne operates from a permanent, purpose-built depot in Mitcham — staffed seven days, stocked with climate-specific Dulux systems, and running a fleet that mobilises through the EastLink and Monash corridors before peak traffic.
              </p>
              <p>
                For Mitcham residents, this proximity is structural. Our senior master painters live in your postcode. Site visits are same-week, mobilisation is same-morning, and post-handover service is a ten-minute drive — not a callback queue.
              </p>
              <p>
                Mitcham is also our training ground. Every apprentice serves their first six months under a senior master on local Mitcham, Vermont, and Blackburn projects before being approved for unsupervised work elsewhere. The standard you receive in Mitcham is the standard the rest of Melbourne is measured against.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[var(--gold)] bg-[oklch(0.18_0_0)] p-8">
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 shrink-0" style={{ color: "var(--gold)" }} />
                <div>
                  <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>HQ Address</div>
                  <div className="text-foreground text-lg">{BUSINESS.street}</div>
                  <div className="text-foreground/75">{BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postcode}</div>
                  <a href={BUSINESS.phoneHref} className="mt-4 inline-flex items-center gap-2 label-caps min-h-11" style={{ color: "var(--gold)" }}>
                    <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-white/10 bg-[oklch(0.18_0_0)] p-8">
              <div className="flex items-start gap-4">
                <Truck className="h-8 w-8 shrink-0" style={{ color: "var(--gold)" }} />
                <div>
                  <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>Same-Morning Mobilisation</div>
                  <p className="text-foreground/85 leading-relaxed">
                    Mitcham crews depart the depot by 6:45am, on-site in {BUSINESS.locality} within 15 minutes — before the EastLink corridor congests.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-white/10 bg-[oklch(0.18_0_0)] p-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 shrink-0" style={{ color: "var(--gold)" }} />
                <div>
                  <div className="label-caps mb-2" style={{ color: "var(--gold)" }}>Heartland Suburbs</div>
                  <p className="text-foreground/85 leading-relaxed">
                    Vermont, Blackburn, Nunawading, Box Hill, Donvale, Ringwood, Heathmont — all serviced from this depot inside a 12-minute radius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <ThreeStage />
      </Section>

      {/* DISPATCH MAP */}
      <Section className="border-t border-white/10">
        <Eyebrow>From Mitcham, To Every Corridor</Eyebrow>
        <h2 className="text-3xl lg:text-4xl font-bold max-w-3xl">
          Four regional corridors. One dispatch point.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REGIONS.map((r) => (
            <Link
              key={r.id}
              to="/locations/$region"
              params={{ region: r.id }}
              className="block border border-white/10 bg-[oklch(0.18_0_0)] p-6 hover:border-[var(--gold)] transition-colors min-h-[140px]"
            >
              <div className="label-caps" style={{ color: "var(--gold)" }}>{r.tagline}</div>
              <div className="mt-3 text-xl font-bold">{r.name}</div>
              <div className="mt-2 text-sm text-foreground/65">{r.suburbs.length} suburbs</div>
            </Link>
          ))}
        </div>
        <CTABlock title="Book a Mitcham HQ master painter — closest crew, fastest mobilisation." />
      </Section>
    </SiteLayout>
  );
}
