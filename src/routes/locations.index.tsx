import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { REGIONS, slugify } from "@/data/suburbs";
import { BUSINESS } from "@/data/business";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Service Locations | 93 Melbourne Suburbs | Painter Melbourne" },
      {
        name: "description",
        content: "Painter Melbourne services 93 high-end residential suburbs across Bayside, Inner South-East, South-East Growth and Eastern Melbourne corridors from our Mitcham HQ.",
      },
      { property: "og:title", content: "Service Locations | Painter Melbourne" },
      { property: "og:description", content: "93 Melbourne suburbs across four regional corridors, dispatched from Mitcham HQ." },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/locations` }],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>The 93-Suburb Service Map</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
          Where Mitcham HQ <span style={{ color: "var(--gold)" }}>dispatches.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
          Four regional corridors. Ninety-three high-end residential suburbs. Every project led by an in-house master painter, every time.
        </p>

        <div className="mt-16 space-y-16">
          {REGIONS.map((r) => (
            <div key={r.id} className="border-t border-white/10 pt-12">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="label-caps" style={{ color: "var(--gold)" }}>{r.tagline}</div>
                  <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{r.name}</h2>
                  <p className="mt-4 text-foreground/70">{r.specialty}</p>
                  <Link
                    to="/locations/$region"
                    params={{ region: r.id }}
                    className="mt-6 inline-block label-caps border-b border-gold pb-1"
                    style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
                  >
                    Region overview →
                  </Link>
                </div>
                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                  {r.suburbs.map((s) => (
                    <Link
                      key={s}
                      to="/locations/$region/$suburb"
                      params={{ region: r.id, suburb: slugify(s) }}
                      className="text-foreground/85 hover:text-gold transition-colors flex items-center min-h-11 py-1"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}