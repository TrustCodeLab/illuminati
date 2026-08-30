"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

interface BenefitItem {
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  imageAlt: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const benefits: BenefitItem[] = [
  {
    number: "01",
    title: "FAME",
    subtitle: "Global Renown & Immortal Legacy",
    tag: "INFLUENCE: SUPREME",
    image: "/images/dfg.jpg",
    imageAlt: "World leaders, tech titans and global prominence",
    description:
      "Ascend from obscurity to the pinnacle of international recognition. Whether in arts, politics, business, or media, the Foundation amplifies your presence so your name commands reverence across continents and eras.",
    highlights: [
      "Instant elevation in elite cultural & global circles",
      "Global media positioning & strategic visibility",
      "Enduring historical legacy that outlives generations",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500"
      >
        {/* Crown / Radiance Star */}
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        <circle cx="12" cy="12" r="3" className="fill-accent/20" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "WEALTH",
    subtitle: "Sovereign Riches & Infinite Abundance",
    tag: "PROSPERITY: INFINITE",
    image: "/images/ca-times.brightspotcdn.jpg",
    imageAlt: "Bespoke architectural estate, fleet of luxury supercars, and sovereign abundance",
    description:
      "Unlock access to sovereign financial architectures, high yield global syndicate channels, and inexhaustible liquid abundance. In the Brotherhood, wealth is not merely pursued it flows as an unyielding law of nature.",
    highlights: [
      "Direct conduits to sovereign wealth & international banking",
      "Generational trusts safeguarding asset immunity",
      "Uncapped financial backing for approved members",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500"
      >
        {/* Pyramid / Treasury Sigil */}
        <polygon points="12 2 2 22 22 22" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <line x1="9.5" y1="7" x2="14.5" y2="7" />
        <circle cx="12" cy="9.5" r="1.5" className="fill-accent" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "POWER",
    subtitle: "Architectural Control & Global Authority",
    tag: "AUTHORITY: SOVEREIGN",
    image: "/images/inner_circle.png",
    imageAlt: "Grand assembly and strategic world command",
    description:
      "Command the unseen levers of civilization. Initiate members wield strategic authority across industries, governance, and markets, directing modern history from behind the impenetrable veil of mastery.",
    highlights: [
      "Strategic decision dominance in high-stakes arenas",
      "Private council with world leaders & Grand Masters",
      "Unilateral leverage across global institutional channels",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500"
      >
        {/* All-Seeing Eye Scepter / Keystone */}
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" className="fill-accent/30" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "PROTECTION",
    subtitle: "Impenetrable Aegis & Lineage Shield",
    tag: "SANCTUARY: ABSOLUTE",
    image: "/images/vault.png",
    imageAlt: "Fortified underground archive and permanent sanctuary",
    description:
      "Walk the world under an inviolable shield. An omnipresent global intelligence network, elite legal defenses, and diplomatic sanctuary guarantee the safety, privacy, and sovereignty of you and your bloodline.",
    highlights: [
      "24/7 global intelligence shielding & counter-surveillance",
      "Absolute privacy cloaking & non-disclosure defense",
      "Multi-jurisdictional sanctuary & lineage security",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500"
      >
        {/* Shield of Providence */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="2" className="fill-accent" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-accent/40 bg-accent/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent font-semibold">
              THE FOUR PILLARS OF INITIATION
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.05] mb-6">
            FAME · WEALTH · POWER · PROTECTION
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm sm:text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            The unyielding benefits bestowed upon the chosen who pass beyond the veil.
            Once initiated into the Illuminati Foundation, the limits of ordinary humanity dissolve.
          </p>
        </ScrollReveal>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {benefits.map((item, idx) => (
          <ScrollReveal key={item.title} delay={0.08 * (idx + 1)}>
            <div className="group relative h-full flex flex-col justify-between p-8 sm:p-10 bg-background/60 border border-foreground/15 hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(138,31,31,0.25)]">
              {/* Corner decorative notch */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/40 group-hover:border-accent group-hover:w-5 group-hover:h-5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/40 group-hover:border-accent group-hover:w-5 group-hover:h-5 transition-all duration-300" />

              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent font-bold tracking-widest px-2 py-0.5 border border-accent/30 bg-accent/5">
                      {item.number}
                    </span>
                    <span className="font-mono text-[0.6rem] tracking-[0.25em] text-foreground/40 uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-2 border border-foreground/10 group-hover:border-accent/40 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-accent/80 tracking-wider mb-5 italic">
                  {item.subtitle}
                </p>

                {/* Atmospheric Pillar Image Card */}
                <div className="relative w-full h-48 sm:h-52 mb-6 border border-foreground/15 group-hover:border-accent/50 overflow-hidden shadow-md transition-colors duration-500">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center brightness-95 contrast-105 group-hover:brightness-105 group-hover:contrast-110 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/25" />
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-background/80 border border-foreground/10 text-[0.55rem] font-mono tracking-widest uppercase text-foreground/50">
                    ARCHIVE #{item.number}
                  </div>
                </div>

                <p className="font-mono text-sm text-foreground/65 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Bottom: Highlights */}
              <div className="pt-6 border-t border-foreground/10">
                <ul className="space-y-2.5">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span className="font-mono text-xs text-foreground/75 leading-normal">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Call to Action Banner */}
      <ScrollReveal delay={0.4}>
        <div className="relative p-8 sm:p-10 border border-accent/40 bg-accent/[0.04] text-center max-w-3xl mx-auto shadow-[0_0_40px_rgba(138,31,31,0.15)]">
          <p className="font-mono text-[0.65rem] tracking-[0.35em] text-accent uppercase mb-2 font-semibold">
            THE PRIVILEGE AWAITS
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
            Claim Your Place Among the Enlightened.
          </h3>
          <p className="font-mono text-xs sm:text-sm text-foreground/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Initiation is not offered to the multitudes. It is bestowed only upon those possessing the vision to command their reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto font-mono text-xs tracking-[0.25em] uppercase px-8 py-3.5 border border-accent text-foreground bg-accent hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(138,31,31,0.4)]"
            >
              Begin Initiation Protocol
            </a>
            <Link
              href="/foundation"
              className="w-full sm:w-auto font-mono text-xs tracking-[0.25em] uppercase px-8 py-3.5 border border-foreground/25 text-foreground/70 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Read The Mandate
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
