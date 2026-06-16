"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu, IconX } from "@/components/ui/icons";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Over ons",  href: "/over-ons" },
  { label: "Diensten",  href: "/diensten" },
  { label: "Vacatures", href: "/vacatures" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10"
      style={{ backgroundColor: "#1A1A2E" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Safety Traffic Holland"
            width={44}
            height={44}
            className="rounded-lg object-contain"
            style={{ background: "white" }}
          />
          <span className="text-white font-bold text-sm leading-tight hidden sm:block">
            Safety Traffic<br />
            <span style={{ color: "#F5A623" }}>Holland B.V.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-3 py-2 text-sm font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              style={{
                color: isActive(l.href) ? "#ffffff" : "rgba(255,255,255,0.75)",
                backgroundColor: isActive(l.href) ? "rgba(27,111,190,0.3)" : "transparent",
                transition: "color 0.2s ease, background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive(l.href)) {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(l.href)) {
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-[opacity,transform] hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}
          >
            Offerte aanvragen
          </Link>
          <button
            className="md:hidden p-2 text-white rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            style={{ transition: "background-color 0.2s ease" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-2" style={{ backgroundColor: "#1A1A2E" }}>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium rounded-md"
              style={{
                color: isActive(l.href) ? "#ffffff" : "rgba(255,255,255,0.75)",
                backgroundColor: isActive(l.href) ? "rgba(27,111,190,0.25)" : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90"
            style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}
          >
            Offerte aanvragen
          </Link>
        </div>
      )}
    </header>
  );
}
