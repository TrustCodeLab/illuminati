import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import EyeGlyph from "@/components/EyeGlyph";

export const metadata: Metadata = {
  title: "Verified & Safety Warnings — Illuminati Foundation",
  description:
    "Official verification, safety directives, and anti-fraud warnings issued by the Illuminati Foundation. Protect yourself from unauthorized imposters.",
};

function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.65rem] tracking-[0.3em] text-accent/80 uppercase font-semibold mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-full h-px bg-foreground/10 my-16" />;
}

export default function VerifiedPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* ══════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════ */}
      <header className="pt-12 pb-12 border-b border-foreground/15 mb-12">
        <ScrollReveal>
          <PageLabel>06 — Verified / Warnings</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-semibold leading-tight mb-6">
            Official Verification &amp; Safety Directives
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/75 leading-relaxed bg-accent/10 border-l-2 border-accent p-4">
            <strong>NOTICE:</strong> This page is issued directly by the
            Illuminati Foundation to protect the public from unauthorized
            imposters, fraudulent recruiters, and criminal networks misusing our
            name and identity.
          </p>
        </ScrollReveal>
      </header>

      {/* ══════════════════════════════════════════
          OFFICIAL STATEMENT
      ══════════════════════════════════════════ */}
      <section className="space-y-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium mb-4">
            Official Statement of Authenticity
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            The Illuminati Foundation is the sole legitimate body operating
            under this name and insignia. Our operations, communications, and
            directives are distributed exclusively through verified and
            authenticated channels. Any entity soliciting on our behalf through
            unauthorized means is acting without sanction.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            Our identity, symbols, and communications are protected. We do not
            operate through social media recruitment pages, unsolicited direct
            messages, or third-party intermediaries of any kind.
          </p>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          SCAM & SAFETY WARNING
      ══════════════════════════════════════════ */}
      <section className="space-y-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-accent font-medium mb-4">
            Protection Against Imposters & Fraud
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            Criminal networks routinely exploit our name to conduct advance-fee
            fraud, phishing operations, and social engineering campaigns across
            social media, messaging platforms, and email. These actors have no
            affiliation with the Foundation and represent a direct threat to
            public safety.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            The Foundation will never solicit money, personal credentials, or
            private information through anonymous internet channels. If you have
            been contacted by someone claiming to represent us, do not engage —
            report it immediately to your local authorities.
          </p>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          DO NOT SEND ANYTHING
      ══════════════════════════════════════════ */}
      <section className="space-y-6">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium">
            Strict Safety Directives: Do Not Send Anything
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/70 mb-4">
            Under no circumstances should you submit or transmit any of the
            following to anyone claiming to represent this Foundation or any
            affiliated group. Anyone who requests these items is an imposter:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="space-y-3 font-mono text-sm text-foreground/85 list-disc list-inside bg-foreground/[0.03] border border-foreground/15 p-6 rounded-none">
            <li className="leading-relaxed">
              <strong className="text-foreground">Financial Assets:</strong> Do
              not send money, wire transfers, credit card details, or
              cryptocurrency of any kind.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">
                Personal Identification:
              </strong>{" "}
              Do not share government IDs, passport scans, national ID cards, or
              birth certificates.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Security Credentials:</strong>{" "}
              Do not disclose passwords, private keys, seed phrases, or
              authentication tokens under any pretext.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Location Data:</strong>{" "}
              Do not provide home addresses, daily routines, phone numbers, or
              private location information.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Unlawful Acts:</strong>{" "}
              Do not engage in, finance, or commit to any illegal activity on
              behalf of any person claiming Foundation authority.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          VERIFICATION INTEGRITY
      ══════════════════════════════════════════ */}
      <section className="space-y-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium mb-4">
            Verification Integrity
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            All legitimate communications from the Illuminati Foundation are
            traceable to this domain and issued through authenticated internal
            channels. Our sigil, protocols, and chain of communication are
            subject to strict internal verification standards that no impersonator
            can replicate.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            If you are uncertain whether a communication is genuine, do not
            respond. Contact us only through the official channels listed on
            this site.
          </p>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER / BACK NAVIGATION
      ══════════════════════════════════════════ */}
      <section className="pt-16 pb-12 text-center border-t border-foreground/15 mt-16">
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <EyeGlyph size={48} className="text-foreground/40" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-xs text-foreground/50 tracking-wider mb-8">
            Officially Verified • End of Directives
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Return to Home
            </Link>
            <Link
              href="/archive"
              className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-foreground/20 text-foreground/60 hover:border-foreground/50 hover:text-foreground transition-all duration-300"
            >
              View The Archive
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}
