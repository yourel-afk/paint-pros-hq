import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { MitchamLogistics } from "@/components/site/MitchamLogistics";
import { findRegion, slugify } from "@/data/suburbs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/data/business";

export const Route = createFileRoute("/locations/$region/")({
  loader: ({ params }) => {
    const region = findRegion(params.region);
    if (!region) throw notFound();
    return { region };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Region — Painter Melbourne" }] };
    const r = loaderData.region;
    const title = `${r.name} Painters | ${r.tagline} | Painter Melbourne`;
    const description = `${r.narrative.slice(0, 155)}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: r.image },
      ],
      links: [{ rel: "canonical", href: `${BUSINESS.url}/locations/${r.id}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Locations", url: "/locations" },
              { name: r.name, url: `/locations/${r.id}` },
            ]),
          ),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <h1 className="text-4xl font-bold">Region not found</h1>
        <Link to="/locations" className="mt-6 inline-block label-caps" style={{ color: "var(--gold)" }}>
          ← All locations
        </Link>
      </Section>
    </SiteLayout>
  ),
  component: RegionPage,
});

function RegionPage() {
  const { region } = Route.useLoaderData();
  return (
    <SiteLayout>
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={region.image}
            alt={`${region.name} Melbourne residential painting — ${region.specialty}`}
            title={`Professional painting in ${region.name} — Mitcham HQ specialists`}
            className="w-full h-full object-cover opacity-50"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-24 pb-32 lg:pt-32 lg:pb-44">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Locations", to: "/locations" },
                { label: region.name },
              ]}
            />
          </div>
          <div className="label-caps mb-6" style={{ color: "var(--gold)" }}>{region.tagline}</div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
            {region.name} Painters
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-foreground/85 max-w-2xl">
            {region.narrative}
          </p>
        </div>
      </div>

      <TrustBar />

      <Section>
        <Eyebrow>{region.suburbs.length} Suburbs Serviced</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl">
          Master painters dispatched directly to your suburb.
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {region.suburbs.map((s: string) => (
            <Link
              key={s}
              to="/locations/$region/$suburb"
              params={{ region: region.id, suburb: slugify(s) }}
              className="bg-background p-6 min-h-[100px] hover:bg-[oklch(0.20_0_0)] transition-colors block"
            >
              <div className="label-caps text-foreground/55">Painter</div>
              <div className="mt-2 text-lg font-semibold">{s}</div>
              <div className="mt-3 text-xs" style={{ color: "var(--gold)" }}>View suburb →</div>
            </Link>
          ))}
        </div>
        <div className="mt-16">
          <MitchamLogistics suburb={region.name} region={region.name} />
        </div>
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}