import Image from "next/image";
import Link from "next/link";
import { IconPhone, IconMail, IconWhatsApp } from "@/components/ui/icons";

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Diensten",  href: "/diensten" },
  { label: "Vacatures", href: "/vacatures" },
  { label: "Contact",   href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A2E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Safety Traffic Holland"
                width={44}
                height={44}
                className="rounded-lg object-contain"
                style={{ background: "white" }}
              />
              <span className="text-white font-bold text-sm leading-tight">
                Safety Traffic<br />
                <span style={{ color: "#F5A623" }}>Holland B.V.</span>
              </span>
            </div>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.7" }}>
              Professionele verkeersbegeleiding door heel Nederland. VCA-gecertificeerd en 24/7 bereikbaar.
            </p>
            <a
              href="https://wa.me/31641039393"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-[opacity,transform] hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <IconWhatsApp className="w-4 h-4" />
              WhatsApp ons
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigatie</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white focus-visible:outline-none focus-visible:underline"
                    style={{ color: "rgba(255,255,255,0.55)", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+31623560581"
                  className="flex items-center gap-3 text-sm group focus-visible:outline-none focus-visible:underline"
                  style={{ color: "rgba(255,255,255,0.55)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(27,111,190,0.25)" }}>
                    <IconPhone className="w-4 h-4" style={{ color: "#1B6FBE" }} />
                  </span>
                  +31 6 23 56 05 81
                </a>
              </li>
              <li>
                <a
                  href="tel:+31641039393"
                  className="flex items-center gap-3 text-sm group focus-visible:outline-none focus-visible:underline"
                  style={{ color: "rgba(255,255,255,0.55)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(27,111,190,0.25)" }}>
                    <IconPhone className="w-4 h-4" style={{ color: "#1B6FBE" }} />
                  </span>
                  +31 6 41 03 93 93
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@safetytrafficholland.nl"
                  className="flex items-center gap-3 text-sm group focus-visible:outline-none focus-visible:underline"
                  style={{ color: "rgba(255,255,255,0.55)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(27,111,190,0.25)" }}>
                    <IconMail className="w-4 h-4" style={{ color: "#1B6FBE" }} />
                  </span>
                  info@safetytrafficholland.nl
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31641039393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm group focus-visible:outline-none focus-visible:underline"
                  style={{ color: "rgba(255,255,255,0.55)", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(37,211,102,0.2)" }}>
                    <IconWhatsApp className="w-4 h-4" style={{ color: "#25D366" }} />
                  </span>
                  WhatsApp: +31 6 41 03 93 93
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Safety Traffic Holland B.V. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacybeleid" className="text-xs hover:text-white focus-visible:outline-none focus-visible:underline" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
              Privacybeleid
            </Link>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <Link href="/algemene-voorwaarden" className="text-xs hover:text-white focus-visible:outline-none focus-visible:underline" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
