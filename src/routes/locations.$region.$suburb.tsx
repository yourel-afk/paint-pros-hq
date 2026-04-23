import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { MitchamLogistics } from "@/components/site/MitchamLogistics";
import { ThreeStage } from "@/components/site/ThreeStage";
import { findRegion, findSuburb, slugify } from "@/data/suburbs";
import { BUSINESS } from "@/data/business";
import { MitchamFlagship } from "@/components/site/MitchamFlagship";

export const Route = createFileRoute("/locations/$region/$suburb")({
  loader: ({ params }) => {
    const region = findRegion(params.region);
    if (!region) throw notFound();
    const found = findSuburb(params.suburb);
    if (!found || found.region.id !== region.id) throw notFound();
    return { region, suburb: found.suburb };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Suburb — Painter Melbourne" }] };
    const { region, suburb } = loaderData;
    const title = `Painter ${suburb} — ${region.tagline} Specialists | Mitcham HQ`;
    const description = `High-end residential painters serving ${suburb}, ${region.name}. ${region.specialty}. 10-year masterpiece guarantee from Painter Melbourne's Mitcham HQ.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: region.image },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "High-end residential painting",
            provider: {
              "@type": "LocalBusiness",
              name: BUSINESS.name,
              telephone: BUSINESS.phoneE164,
              email: BUSINESS.email,
              url: BUSINESS.url,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.street,
                addressLocality: BUSINESS.locality,
                addressRegion: BUSINESS.region,
                postalCode: BUSINESS.postcode,
                addressCountry: BUSINESS.country,
              },
            },
            areaServed: { "@type": "City", name: `${suburb}, Melbourne` },
            description,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <h1 className="text-4xl font-bold">Suburb not found</h1>
        <Link to="/locations" className="mt-6 inline-block label-caps" style={{ color: "var(--gold)" }}>
          ← All locations
        </Link>
      </Section>
    </SiteLayout>
  ),
  component: SuburbPage,
});

function SuburbPage() {
  const { region, suburb } = Route.useLoaderData();
  const isHQ = region.id === "eastern-hills" && suburb === "Mitcham";
  const nearby = region.suburbs.filter((s: string) => s !== suburb).slice(0, 8);

  if (isHQ) return <MitchamFlagship />;

  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={region.image}
            alt={`Residential painting in ${suburb}, Melbourne — Painter Melbourne`}
            title={`Professional painting results in ${suburb} — Mitcham HQ Specialists`}
            className="w-full h-full object-cover opacity-45"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-28 lg:pt-28 lg:pb-40">
          <nav className="label-caps text-foreground/55 mb-6">
            <Link to="/locations">Locations</Link>
            <span className="mx-3">/</span>
            <Link to="/locations/$region" params={{ region: region.id }}>{region.name}</Link>
            <span className="mx-3">/</span>
            <span className="text-foreground/85">{suburb}</span>
          </nav>
          <div className="label-caps mb-4" style={{ color: "var(--gold)" }}>
            {region.tagline} · {suburb}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
            Painter <span style={{ color: "var(--gold)" }}>{suburb}</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-foreground/85 max-w-2xl">
            High-end residential painting in {suburb}, delivered exclusively by Painter Melbourne's in-house master crew from our Mitcham HQ. Backed by the 10-Year Masterpiece Guarantee.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex bg-gold px-8 py-4 label-caps"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              Get a Mitcham HQ Quote
            </Link>
            <Link
              to="/three-stage"
              className="inline-flex border border-foreground/40 px-8 py-4 label-caps hover:bg-foreground hover:text-background transition-colors"
            >
              The Three-Stage Method
            </Link>
          </div>
        </div>
      </div>

      <TrustBar />

      {/* Local narrative */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Local Knowledge · {suburb}</Eyebrow>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Why {suburb} homes demand a {region.name.toLowerCase()} specialist.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>{region.narrative}</p>
              <p>
                In {suburb} specifically, our crews regularly work on properties exposed to {region.id === "bayside" ? "salt-laden onshore winds, intense UV reflection off the bay, and humidity that punishes lesser coatings" : region.id === "inner-se" ? "heritage overlays, ornate Victorian and Edwardian detail, and the colour-correctness expectations of period purists" : region.id === "se-growth" ? "large-format render facades, dark feature walls and the high-build film thicknesses required by contemporary architectural specifications" : "leafy bushland micro-climates, dappled UV exposure, and BAL-rated fire-resistance requirements"}.
              </p>
              <p>
                Every {suburb} project is specified, scoped and signed off by a senior Painter Melbourne master painter — never a subcontractor, never a quote-bot. Your finish is our reputation.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <MitchamLogistics suburb={suburb} />
            <div className="mt-8 border border-white/10 bg-[oklch(0.18_0_0)] p-8">
              <div className="label-caps mb-4" style={{ color: "var(--gold)" }}>
                Specialty for {region.name}
              </div>
              <p className="text-foreground/80">{region.specialty}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <ThreeStage />
      </Section>

      {/* Nearby */}
      <Section className="border-t border-white/10">
        <Eyebrow>Also Servicing in {region.name}</Eyebrow>
        <h2 className="text-3xl lg:text-4xl font-bold">Nearby suburbs from Mitcham HQ</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {nearby.map((s: string) => (
            <Link
              key={s}
              to="/locations/$region/$suburb"
              params={{ region: region.id, suburb: slugify(s) }}
              className="bg-background p-6 min-h-[88px] hover:bg-[oklch(0.20_0_0)] transition-colors block"
            >
              <div className="label-caps text-foreground/55">Painter</div>
              <div className="mt-2 text-lg font-semibold">{s}</div>
            </Link>
          ))}
        </div>
        <CTABlock title={`Secure your ${suburb} property's finish.`} />
      </Section>
    </SiteLayout>
  );
}