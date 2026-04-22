import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, CTABlock } from "@/components/site/SiteLayout";
import { ThreeStage } from "@/components/site/ThreeStage";
import { TrustBar } from "@/components/site/TrustBar";

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
  }),
  component: () => (
    <SiteLayout>
      <Section>
        <ThreeStage />
      </Section>
      <TrustBar />
      <Section>
        <CTABlock title="Specify your project under the Three-Stage Method." />
      </Section>
    </SiteLayout>
  ),
});