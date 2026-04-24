import { Eyebrow } from "./SiteLayout";
import { ShieldCheck, Users, HardHat } from "lucide-react";

/**
 * "No Subbies. No Shortcuts." USP module — drops onto Services, Three-Stage,
 * About, and the homepage to hammer the in-house crew differentiator in
 * trade-authentic voice.
 */
export function NoSubbies() {
  return (
    <div className="border border-[var(--gold)]/40 bg-[oklch(0.16_0_0)] p-8 lg:p-12">
      <Eyebrow>The In-House Promise</Eyebrow>
      <h2 className="mt-2 text-3xl lg:text-5xl font-extrabold tracking-tight">
        No Subbies. <span style={{ color: "var(--gold)" }}>No Shortcuts.</span>
      </h2>
      <p className="mt-6 text-lg text-foreground/85 max-w-3xl leading-relaxed">
        The crew you see in the morning is the crew that finishes the job. We don't sell your project to a lower bidder, we don't pad the quote and farm it out, and we don't disappear once the deposit clears. Every painter on your site is on our books, in our uniform, trained on our gear, and personally backed by our 10-Year Masterpiece Guarantee.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          {
            icon: Users,
            title: "Same crew, day one to handover",
            body: "Same names, same faces, same standard from prep day through to your final walk-through.",
          },
          {
            icon: HardHat,
            title: "Employees, not labour-hire",
            body: "Every painter is a Painter Melbourne employee. Trained in-house, paid by us, accountable to you.",
          },
          {
            icon: ShieldCheck,
            title: "One throat to choke",
            body: "If anything goes sideways, you call Mitcham Office. Not a 1300 number. Not a subbie's voicemail.",
          },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="border border-white/10 bg-background p-6">
            <Icon className="h-8 w-8" style={{ color: "var(--gold)" }} />
            <div className="mt-4 font-semibold text-foreground">{title}</div>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}