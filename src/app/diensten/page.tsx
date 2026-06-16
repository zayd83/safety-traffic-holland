"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { IconShield, IconCheck, IconArrowRight } from "@/components/ui/icons";

const diensten = [
  {
    id: "wegwerkzaamheden",
    title: "Verkeerbegeleiding bij Wegwerkzaamheden",
    subtitle: "Veilige doorstroming tijdens infrastructuurprojecten",
    img: "/images/A7401932.jpg",
    imgAlt: "Verkeersbegeleiding bij wegwerkzaamheden",
    desc: "Of het nu gaat om asfaltering, rioolwerkzaamheden, kabels en leidingen, of groot onderhoud — veilige verkeersbegeleiding is essentieel. Onze VCA-gecertificeerde verkeersregelaars zorgen voor een vlotte en veilige doorstroming, zodat zowel werknemers als weggebruikers beschermd zijn.",
    features: [
      "VCA-gecertificeerde verkeersregelaars",
      "Vaste en representatieve verkeersregelaars",
      "Snelle inzet bij geplande werkzaamheden en calamiteiten",
      "Flexibele inzet, ook buiten reguliere werktijden",
      "Regionale dekking in Zeeland, Noord-Brabant, Zuid-Holland, Noord-Holland, Utrecht, Flevoland en Gelderland",
      "Veiligheid, kwaliteit en betrouwbaarheid voorop",
    ],
    flip: false,
  },
  {
    id: "evenementen",
    title: "Verkeerbegeleiding bij Evenementen",
    subtitle: "Veilig en vlot in- en uitstromen",
    img: "/images/A7401967.jpg",
    imgAlt: "Verkeersbegeleiding bij evenementen",
    desc: "Grote evenementen brengen veel verkeersbewegingen met zich mee. Safety Traffic Holland regelt de verkeersstroom vóór, tijdens en na uw evenement. Van festivals en sportwedstrijden tot braderieën en beurzen — wij zorgen dat bezoekers veilig arriveren en vertrekken.",
    features: [
      "Verkeersplan op maat",
      "Parkeerregulering en bezoekersleiding",
      "Afstemming met gemeente en politie",
      "Inzet van meerdere verkeersregelaars tegelijk",
      "Flexibel inzetbaar bij last-minute wijzigingen",
    ],
    flip: true,
  },
  {
    id: "calamiteiten",
    title: "Calamiteitenbegeleiding",
    subtitle: "24/7 beschikbaar wanneer het erop aankomt",
    img: "/images/A7401998.jpg",
    imgAlt: "Calamiteitenbegeleiding",
    desc: "Bij onverwachte situaties zoals ongevallen, wateroverlast, gaslekkages of andere calamiteiten is snel handelen essentieel. Safety Traffic Holland is 24 uur per dag, 7 dagen per week bereikbaar voor spoedopdrachten en kan op korte termijn verkeersregelaars inzetten om de situatie veilig en beheersbaar te houden.",
    features: [
      "24/7 bereikbaar via telefoon en WhatsApp",
      "Snelle inzet bij calamiteiten en spoedopdrachten",
      "Direct schakelen bij onverwachte verkeerssituaties",
      "Ondersteuning bij tijdelijke verkeersmaatregelen",
      "Focus op veiligheid en bereikbaarheid",
    ],
    flip: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function DienstenPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1A1A2E", minHeight: 380 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(27,111,190,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 30%, rgba(245,166,35,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#1B6FBE" }}
            >
              Onze diensten
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Professionele verkeersbegeleiding<br />
            <span style={{ color: "#F5A623" }}>voor elk project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Van wegwerkzaamheden tot grootschalige evenementen. Wij zorgen voor veiligheid op de weg, door heel Nederland.
          </motion.p>
          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {diensten.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="text-sm px-4 py-2 rounded-lg font-medium"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(27,111,190,0.3)"; e.currentTarget.style.color = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
              >
                {d.title.split(" bij ")[1] || d.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dienst sections */}
      {diensten.map((dienst, i) => (
        <section
          key={dienst.id}
          id={dienst.id}
          className="py-20 md:py-28"
          style={{ backgroundColor: i % 2 === 0 ? "#F4F6F9" : "#ffffff" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${dienst.flip ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: dienst.flip ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "4/3", boxShadow: "0 24px 60px rgba(27,111,190,0.12), 0 4px 16px rgba(0,0,0,0.08)" }}
                >
                  <Image
                    src={dienst.img}
                    alt={dienst.imgAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(26,26,46,0.1) 0%, transparent 35%)" }}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: dienst.flip ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}
                >
                  {dienst.subtitle}
                </span>
                <h2
                  className="font-bold mb-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.03em", color: "#1A1A2E", lineHeight: 1.2 }}
                >
                  {dienst.title}
                </h2>
                <p className="mb-6" style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "1rem" }}>
                  {dienst.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {dienst.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(27,111,190,0.12)" }}
                      >
                        <IconCheck className="w-3 h-3" style={{ color: "#1B6FBE" }} />
                      </span>
                      <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{
                    backgroundColor: "#1B6FBE",
                    color: "#ffffff",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Offerte aanvragen
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA banner */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ backgroundColor: "rgba(27,111,190,0.12)", border: "1px solid rgba(27,111,190,0.2)" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <IconShield className="w-5 h-5" style={{ color: "#F5A623" }} />
                <span style={{ color: "#F5A623", fontWeight: 700, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>VCA-gecertificeerd</span>
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2" style={{ letterSpacing: "-0.02em" }}>
                Klaar voor uw volgende project?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
                Vraag een vrijblijvende offerte aan. We reageren binnen 4 uur.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#1A1A2E",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Offerte aanvragen
                <IconArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+31641039393"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
              >
                +31 6 41 03 93 93
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
