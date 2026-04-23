import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow, CTABlock } from "@/components/site/SiteLayout";
import { ThreeStage } from "@/components/site/ThreeStage";
import { TrustBar } from "@/components/site/TrustBar";
import { BUSINESS } from "@/data/business";
import { NoSubbies } from "@/components/site/NoSubbies";

export const Route = createFileRoute("/three-stage")({
  head: () => ({
    meta: [
      { title: "The Three-Stage Excellence Method | Painter Melbourne" },
      {
        name: "description",
        content:
          "Diagnostic Prep, Precision Application and Signature Handover — the proprietary three-stage protocol behind every Painter Melbourne project.",
      },
      { property: "og:title", content: "The Three-Stage Excellence Method" },
      { property: "og:description", content: "Painter Melbourne's proprietary protocol: Diagnostic Prep, Precision Application, Signature Handover." },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/three-stage` }],
  }),
  component: () => (
    <SiteLayout>
      <Section>
        <Eyebrow>How A Proper Job Actually Runs</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
          The <span style={{ color: "var(--gold)" }}>Three-Stage Excellence</span> Method.
        </h1>
        <p className="mt-6 text-lg text-foreground/85 max-w-3xl leading-relaxed">
          We spend 70% of our time on prep because that's where the 10-year guarantee actually comes from. The painting bit is the reward at the end — and we don't take shortcuts on either side of it. Same crew, day one to handover. <span className="text-foreground">No subbies.</span>
        </p>
      </Section>
      <Section className="border-t border-white/10">
        <ThreeStage />
      </Section>
      <Section className="border-t border-white/10">
        <NoSubbies />
      </Section>
      <TrustBar />
      <Section>
        <CTABlock title="Specify your project under the Three-Stage Method." />
      </Section>
    </SiteLayout>
  ),
});