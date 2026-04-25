import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { BUSINESS } from "@/data/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Mitcham Office Quote | Painter Melbourne" },
      {
        name: "description",
        content: "Request a fixed-price quote from Painter Melbourne's Mitcham Office. Serving 97 high-end residential suburbs across Melbourne.",
      },
      { property: "og:title", content: "Contact Painter Melbourne | Mitcham-Based Master Painters" },
      { property: "og:description", content: "Request your fixed-price quote. 97 Melbourne suburbs covered." },
    ],
    links: [{ rel: "canonical", href: `${BUSINESS.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Mitcham Office · Quote Request</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
          Tell us about <span style={{ color: "var(--gold)" }}>your property.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
          Every quote begins with a site visit by a senior master painter. No call centres, no high-pressure sales. Just a fixed-price specification you can trust.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <form
            className="lg:col-span-7 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Property suburb" name="suburb" required />
            <div>
              <label className="label-caps text-foreground/70 block mb-3">Project scope</label>
              <textarea
                name="scope"
                rows={5}
                className="w-full bg-transparent border-b border-white/20 focus:border-gold py-3 text-foreground outline-none"
                style={{ borderColor: "var(--border)" }}
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center bg-gold px-8 py-4 label-caps disabled:opacity-50"
              style={{ backgroundColor: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              {sent ? "Quote request received" : "Request Mitcham Office Quote"}
            </button>
          </form>

          <address className="not-italic lg:col-span-5 border border-white/10 bg-[oklch(0.18_0_0)] p-10 space-y-6">
            <Info icon={<MapPin />} label="Mitcham Office" value={`${BUSINESS.locality}, ${BUSINESS.region} ${BUSINESS.postcode}`} />
            <Info icon={<Phone />} label="Phone" value={BUSINESS.phoneDisplay} href={BUSINESS.phoneHref} />
            <Info icon={<Mail />} label="Email" value={BUSINESS.email} href={BUSINESS.emailHref} />
            <Info icon={<Clock />} label="Hours" value={BUSINESS.hours} />
          </address>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="label-caps text-foreground/70 block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/20 py-3 text-foreground outline-none focus:border-gold"
      />
    </div>
  );
}

function Info({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4 items-start min-h-11">
      <div className="h-11 w-11 grid place-items-center border border-white/10 shrink-0" style={{ color: "var(--gold)" }}>
        {icon}
      </div>
      <div>
        <div className="label-caps text-foreground/60">{label}</div>
        <div className="mt-1 text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-gold transition-colors">
      {inner}
    </a>
  ) : (
    inner
  );
}