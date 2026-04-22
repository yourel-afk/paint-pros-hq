import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Mitcham HQ Quote | Painter Melbourne" },
      {
        name: "description",
        content: "Request a fixed-price quote from Painter Melbourne's Mitcham HQ. Serving 93 high-end residential suburbs across Melbourne.",
      },
      { property: "og:title", content: "Contact — Painter Melbourne Mitcham HQ" },
      { property: "og:description", content: "Request your Mitcham HQ quote — 93 Melbourne suburbs covered." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Mitcham HQ · Quote Request</Eyebrow>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight max-w-4xl">
          Tell us about <span style={{ color: "var(--gold)" }}>your property.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/75 max-w-2xl">
          Every quote begins with a Mitcham HQ site visit by a senior master painter. No call centres, no high-pressure sales — just a fixed-price specification you can trust.
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
              {sent ? "Quote request received" : "Request Mitcham HQ Quote"}
            </button>
          </form>

          <div className="lg:col-span-5 border border-white/10 bg-[oklch(0.18_0_0)] p-10 space-y-6">
            <Info icon={<MapPin />} label="Mitcham HQ" value="Mitcham, VIC 3132" />
            <Info icon={<Phone />} label="Phone" value="1300 PM PAINT" />
            <Info icon={<Mail />} label="Email" value="quotes@paintermelbourne.com.au" />
            <Info icon={<Clock />} label="Hours" value="Mon–Sat · 7am – 6pm" />
          </div>
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

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="h-10 w-10 grid place-items-center border border-white/10" style={{ color: "var(--gold)" }}>
        {icon}
      </div>
      <div>
        <div className="label-caps text-foreground/60">{label}</div>
        <div className="mt-1 text-foreground">{value}</div>
      </div>
    </div>
  );
}