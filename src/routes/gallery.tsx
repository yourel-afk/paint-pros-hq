import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { TrustBar } from "@/components/site/TrustBar";
import { RecentTransformations } from "@/components/site/RecentTransformations";
import { BUSINESS } from "@/data/business";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Painter Melbourne Recent Transformations" },
      {
        name: "description",
        content:
          "Recent residential painting transformations across Melbourne. Heritage restorations, coastal facades and modern estate repaints, all by our in-house Mitcham Office crew.",
      },
      { property: "og:title", content: "Project Gallery | Painter Melbourne" },
      {
        property: "og:description",
        content: "Recent residential painting transformations across Melbourne by our in-house Mitcham Office crew.",
      },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/gallery` }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-16 lg:pt-28">
          <Eyebrow>Project Gallery</Eyebrow>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.05]">
            A working portfolio of <span style={{ color: "var(--gold)" }}>recent Melbourne homes.</span>
          </h1>
          <p className="mt-6 text-foreground/80 max-w-2xl text-lg">
            Every project below was delivered by our in-house crew from the Mitcham Office. No subbies, no labour-hire, no ghost contractors. <Link to="/contact" className="text-gold underline-offset-4 hover:underline" style={{ color: "var(--gold)" }}>Book your own walk-through.</Link>
          </p>
        </div>
      </div>
      <TrustBar />
      <Section>
        <RecentTransformations />
        <CTABlock />
      </Section>
    </SiteLayout>
  );
}
