"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Foundation", href: "/foundation" },
  { label: "Inner Circle", href: "/inner-circle" },
  { label: "The Four Symbols", href: "/symbols" },
  { label: "The Archive", href: "/archive" },
  { label: "Verified", href: "/verified" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push("/#contact");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-foreground/10 shadow-[0_1px_24px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
        }`}
    >
      <nav
        className="relative mx-auto max-w-7xl px-6 h-14 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Wordmark (Left) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group z-10"
          aria-label="ILLUM — Home"
        >
          <Image
            src="/images/logo.png"
            alt="Illuminati Foundation Logo"
            width={36}
            height={36}
            className="object-contain transition-all duration-300"
          />
          <span className="font-display text-xl tracking-[0.3em] uppercase text-foreground group-hover:text-accent transition-colors duration-300">
            666
          </span>
        </Link>

        {/* Centered Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center flex-nowrap gap-6 xl:gap-7 absolute left-1/2 -translate-x-1/2 w-max">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={label} className="whitespace-nowrap">
                <Link
                  href={href}
                  className={`font-mono text-[0.68rem] xl:text-[0.7rem] tracking-widest uppercase whitespace-nowrap transition-colors duration-200 relative py-1 inline-block ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Action (Contact Button on Desktop) */}
        <div className="hidden lg:flex items-center z-10">
          <Link
            href="/#contact"
            onClick={handleContactClick}
            className="font-mono text-[0.7rem] tracking-widest uppercase px-3 py-1.5 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-200"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 border-b border-foreground/10" : "max-h-0"
          } backdrop-blur-md bg-background/90`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-[0.7rem] tracking-widest uppercase transition-colors block ${isActive
                      ? "text-accent font-semibold pl-2 border-l-2 border-accent"
                      : "text-foreground/60 hover:text-foreground"
                    }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="font-mono text-[0.7rem] tracking-widest uppercase text-accent"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
