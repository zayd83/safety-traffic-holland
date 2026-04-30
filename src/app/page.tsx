"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from "@/components/blocks/hero-gallery-scroll-animation";
import { Testimonial } from "@/components/ui/testimonial-card";
import CarouselCard from "@/components/ui/carousel-card-1";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { motion } from "framer-motion";
import {
  IconShield, IconUsers, IconMap, IconClock,
  IconPhone, IconCheck, IconWhatsApp,
} from "@/components/ui/icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const diensten = [
  {
    image: "/images/A7401932.jpg",
    title: "Werkzaamheden",
    desc: "Veilige verkeersafzettingen en begeleiding bij wegwerkzaamheden, rioleringswerkzaamheden en bouwprojecten. Onze verkeersregelaars zorgen voor een vlotte doorstroming.",
    href: "/diensten",
  },
  {
    image: "/images/A7401967.jpg",
    title: "Evenementen",
    desc: "Van kleine buurtfeesten tot grote publieksevenementen: wij regelen de complete verkeersafhandeling zodat uw evenement veilig en soepel verloopt.",
    href: "/diensten",
  },
  {
    image: "/images/A7401998.jpg",
    title: "Calamiteiten",
    desc: "Bij onverwachte situaties staan wij 24/7 paraat. Snel inzetbaar voor incidentmanagement en het veiligstellen van de omgeving bij calamiteiten.",
    href: "/diensten",
  },
];

const usps = [
  { icon: <IconShield className="w-7 h-7" />, title: "VCA-gecertificeerd", desc: "Onze verkeersregelaars zijn volledig VCA-gecertificeerd en werken volgens de geldende veiligheidsnormen." },
  { icon: <IconUsers className="w-7 h-7" />, title: "Vaste verkeersregelaars", desc: "U werkt altijd met ervaren, vaste medewerkers die de procedures kennen en professioneel optreden." },
  { icon: <IconMap className="w-7 h-7" />, title: "Heel Nederland", desc: "Wij zijn actief in het hele land en kunnen snel worden ingezet, van de Randstad tot de regio's." },
  { icon: <IconClock className="w-7 h-7" />, title: "24/7 bereikbaar", desc: "Dag en nacht bereikbaar voor planning, vragen of spoedopdrachten. Altijd iemand aan de lijn." },
];

const steps = [
  {
    num: "01",
    title: "Aanvraag",
    desc: "Neem contact op via het formulier, telefoon of WhatsApp. We reageren snel en denken direct mee.",
    icon: <IconPhone className="w-6 h-6" />,
    color: "#1B6FBE",
  },
  {
    num: "02",
    title: "Afstemming",
    desc: "We bespreken locatie, tijdstip en aantal verkeersregelaars. U ontvangt een heldere offerte.",
    icon: <IconUsers className="w-6 h-6" />,
    color: "#1B6FBE",
  },
  {
    num: "03",
    title: "Inzet",
    desc: "Onze gecertificeerde verkeersregelaars staan op de afgesproken plek. Altijd op tijd, altijd professioneel.",
    icon: <IconShield className="w-6 h-6" />,
    color: "#F5A623",
  },
  {
    num: "04",
    title: "Evaluatie",
    desc: "Na afloop evalueren we de inzet voor continue verbetering. Uw feedback maakt ons beter.",
    icon: <IconCheck className="w-6 h-6" />,
    color: "#F5A623",
  },
];

const testimonials = [
  { name: "Johan de Vries", role: "Projectleider Infrastructuur", company: "BAM Infra Nederland", rating: 5, image: "https://i.pravatar.cc/150?u=johan", testimonial: "Safety Traffic Holland heeft meerdere van onze wegwerkzaamheden begeleid. Altijd op tijd, professioneel en de verkeersregelaars kennen hun vak. Wij werken met plezier samen." },
  { name: "Anita van den Berg", role: "Coördinator Openbare Ruimte", company: "Gemeente Rotterdam", rating: 5, image: "https://i.pravatar.cc/150?u=anita", testimonial: "Betrouwbare partner voor verkeersafzettingen bij gemeentelijke projecten. Snelle communicatie en VCA-gecertificeerd personeel geeft ons het vertrouwen dat alles veilig verloopt." },
  { name: "Mark Kooistra", role: "Uitvoerder Wegenbouw", company: "Heijmans Infra", rating: 5, image: "https://i.pravatar.cc/150?u=mark", testimonial: "24/7 bereikbaar en altijd flexibel inzetbaar. Bij spoedopdrachten staan zij direct klaar. De samenwerking verloopt soepel en de kwaliteit is consistent hoog." },
];

const projectCards = [
  { id: 1, imgUrl: "/images/A7401968.jpg", content: "Wegwerkzaamheden A2 — Volledige verkeersafzetting en begeleiding bij asfaltrenovatie op de A2. Dag- en nachtdiensten voor minimale doorstromingshinder." },
  { id: 2, imgUrl: "/images/A7401934.jpg", content: "Rioleringswerkzaamheden Utrecht — Veilige afzetting van rijbanen tijdens grootschalige rioolrenovatie in de binnenstad. Inclusief verkeersomleiding en bewegwijzering." },
  { id: 3, imgUrl: "/images/A7402014.jpg", content: "Evenementenbegeleiding Rotterdam Marathon — Complete verkeersafhandeling voor 45.000 deelnemers. Coördinatie met gemeente, politie en hulpdiensten." },
  { id: 4, imgUrl: "/images/A7401952.jpg", content: "Calamiteitenbeheer snelweg — Spoedinzet na incident op de ring Amsterdam. Binnen 30 minuten ter plaatse voor veiligstelling van de rijbaan." },
  { id: 5, imgUrl: "/images/A7401975.jpg", content: "Bouwplaatsbegeleiding Schiphol — Langdurig project met dagelijkse verkeersregelaars voor bouwverkeer en veiligheid rondom uitbreiding luchthaven." },
  { id: 6, imgUrl: "/images/A7402052.jpg", content: "Gemeentelijk onderhoud Den Haag — Structurele samenwerking voor wekelijkse wegwerkzaamheden. Vaste verkeersregelaars die de omgeving en procedures kennen." },
];

const clients = [
  { name: "Rijkswaterstaat",    logo: "/images/logos/rijkswaterstaat.svg" },
  { name: "ProRail",            logo: "/images/logos/prorail.svg" },
  { name: "BAM Infra",          logo: "/images/logos/bam.svg" },
  { name: "Heijmans N.V.",      logo: "/images/logos/heijmans.svg" },
  { name: "Gemeente Rotterdam", logo: "/images/logos/rotterdam.svg" },
  { name: "Gemeente Amsterdam", logo: "/images/logos/amsterdam.svg" },
  { name: "Boskalis",           logo: "/images/logos/boskalis.svg" },
  { name: "VolkerWessels",      logo: "/images/logos/volkerwessels.svg" },
  { name: "DURA Vermeer",       logo: "/images/logos/duravermeer.svg" },
  { name: "TBI Infra",          logo: "/images/logos/tbi.svg" },
  { name: "Sweco Nederland",    logo: "/images/logos/sweco.svg" },
  { name: "Arcadis",            logo: "/images/logos/arcadis.svg" },
];

// ─── ClientLogoCard ───────────────────────────────────────────────────────────

function ClientLogoCard({ name, logo }: { name: string; logo: string }) {
  const [hovered, setHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  return (
    <div
      className="flex items-center justify-center px-6 bg-white border shrink-0 rounded-xl"
      style={{ height: "60px", minWidth: "130px", borderColor: "rgba(27,111,190,0.12)", boxShadow: "0 2px 8px rgba(27,111,190,0.06)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hasError ? (
        <span className="text-xs font-semibold whitespace-nowrap px-1 text-center" style={{ color: "#1A1A2E" }}>{name}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} style={{ height: "38px", width: "auto", maxWidth: "140px", objectFit: "contain", filter: hovered ? "grayscale(0%) opacity(1)" : "grayscale(100%) opacity(0.5)", transition: "filter 0.35s ease" }} onError={() => setHasError(true)} />
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#ffffff", color: "#1A1A2E" }}>
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ── */}
        <ContainerScroll
          className="h-[350vh]"
          style={{ background: "transparent", position: "relative", zIndex: 0 }}
        >
          <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-2 md:p-4" style={{ background: "linear-gradient(160deg, #0d1b2e 0%, #1A1A2E 50%, #0f2744 100%)" }}>
            {[
              { src: "/images/A7402006.jpg", alt: "Verkeersregelaar aan het werk" },
              { src: "/images/A7401932.jpg", alt: "Wegwerkzaamheden" },
              { src: "/images/A7401967.jpg", alt: "Evenementenbegeleiding" },
              { src: "/images/A7401998.jpg", alt: "Calamiteitenbeheer" },
              { src: "/images/Heel-nederland.png",     alt: "Verkeersbegeleiding heel Nederland" },
            ].map((img, i) => (
              <BentoCell key={i} className="relative overflow-hidden rounded-xl" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" priority={true} loading="eager" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(13,27,46,0.55) 0%, rgba(13,27,46,0.1) 50%, transparent 100%)" }} />
              </BentoCell>
            ))}
          </BentoGrid>

          <div className="sticky left-0 top-0 z-10 h-0 w-full pointer-events-none" style={{ marginTop: "-100vh" }}>
            <div className="h-screen w-full" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(13,27,46,0.45) 0%, rgba(13,27,46,0.15) 60%, transparent 100%)" }} />
          </div>

          <ContainerScale className="z-20 text-center" style={{ width: "min(92vw, 700px)" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 border border-white/20" style={{ backgroundColor: "rgba(27,111,190,0.25)", color: "#93c5fd" }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              VCA-gecertificeerd · 24/7 beschikbaar
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Professionele<br />
              <span style={{ color: "#F5A623" }}>verkeers&shy;begeleiding.</span><br />
              Veilig. Vlot. Betrouwbaar.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/75 mb-7 mx-auto" style={{ lineHeight: "1.75", maxWidth: "520px", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
              Wij begeleiden verkeer bij werkzaamheden, evenementen en calamiteiten — door heel Nederland. Met vaste, VCA-gecertificeerde verkeersregelaars altijd op de juiste plek.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400" style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}>
                Offerte aanvragen
              </Link>
              <Link href="/diensten" className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/30 hover:bg-white/10 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Bekijk onze diensten
              </Link>
            </div>
            <div className="border-t border-white/15 pt-5 flex flex-wrap items-center justify-center gap-5 md:gap-10">
              {["VCA-gecertificeerd", "Vaste verkeersregelaars", "Heel Nederland"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-medium">
                  <IconCheck className="w-4 h-4 shrink-0" style={{ color: "#F5A623" }} />
                  {item}
                </div>
              ))}
            </div>
          </ContainerScale>
        </ContainerScroll>

        {/* All sections below hero — own stacking context above hero z-index */}
        <div style={{ position: "relative", zIndex: 10, backgroundColor: "#ffffff" }}>

        {/* ── CLIENT SLIDER ── */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
            <p className="text-center text-xs font-semibold uppercase tracking-widest" style={{ color: "#1B6FBE" }}>
              Vertrouwd door toonaangevende opdrachtgevers
            </p>
          </div>
          <InfiniteSlider gap={28} duration={35} durationOnHover={80} className="w-full">
            {clients.map((client) => (
              <ClientLogoCard key={client.name} name={client.name} logo={client.logo} />
            ))}
          </InfiniteSlider>
        </section>

        {/* ── DIENSTEN ── */}
        <section id="diensten" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white" style={{ backgroundColor: "#1B6FBE" }}>Onze diensten</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1A1A2E", letterSpacing: "-0.02em" }}>Wat wij voor u doen</h2>
              <p className="text-base text-gray-500 max-w-xl mx-auto" style={{ lineHeight: "1.75" }}>Van gepland wegonderhoud tot calamiteiten: Safety Traffic Holland staat voor u klaar met de juiste mensen en middelen.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diensten.map((d) => (
                <div key={d.title} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 transition-transform hover:-translate-y-1" style={{ boxShadow: "0 4px 24px rgba(27,111,190,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image src={d.image} alt={d.title} fill loading="eager" className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#1A1A2E" }}>{d.title}</h3>
                    <p className="text-sm text-gray-500 mb-6" style={{ lineHeight: "1.75" }}>{d.desc}</p>
                    <Link href={d.href} className="inline-flex items-center text-sm font-semibold hover:opacity-80 focus-visible:outline-none" style={{ color: "#1B6FBE" }}>
                      Meer informatie →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTEN CAROUSEL ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white" style={{ backgroundColor: "#1B6FBE" }}>Onze projecten</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1A1A2E", letterSpacing: "-0.02em" }}>Projecten in beeld</h2>
              <p className="text-base text-gray-500 max-w-xl mx-auto" style={{ lineHeight: "1.75" }}>Van snelwegen tot binnensteden — bekijk een selectie van onze uitgevoerde opdrachten door heel Nederland.</p>
            </div>
            <CarouselCard data={projectCards} cardsPerView={3} />
          </div>
        </section>

        {/* ── WAAROM STH ── */}
        <section id="over-ons" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white" style={{ backgroundColor: "#1B6FBE" }}>Waarom Safety Traffic Holland</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1A1A2E", letterSpacing: "-0.02em" }}>Uw partner voor veilige verkeersafhandeling</h2>
                <p className="text-base text-gray-500 mb-6" style={{ lineHeight: "1.75" }}>Wij combineren vakkennis, certificering en persoonlijke service voor het beste resultaat.</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-14 shrink-0 rounded-xl overflow-hidden bg-white border border-gray-100 p-1" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <Image src="/images/vca.png" alt="VCA-gecertificeerd" fill loading="eager" className="object-contain p-1" sizes="96px" />
                  </div>
                  <p className="text-sm text-gray-500" style={{ lineHeight: "1.7" }}>VCA-gecertificeerd bedrijf. Al onze verkeersregelaars voldoen aan de landelijk geldende veiligheidsnormen.</p>
                </div>
              </div>
              <div className="relative w-full lg:w-[420px] h-72 lg:h-80 rounded-2xl overflow-hidden shrink-0" style={{ boxShadow: "0 8px 32px rgba(27,111,190,0.15)" }}>
                <Image src="/images/A7401959.jpg" alt="Verkeersregelaar aan het werk" fill loading="eager" className="object-cover" sizes="(max-width: 1024px) 100vw, 420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/50 to-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((u) => (
                <div key={u.title} className="rounded-2xl p-6 border border-gray-100 bg-white transition-transform hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(27,111,190,0.07)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}>{u.icon}</div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "#1A1A2E" }}>{u.title}</h3>
                  <p className="text-sm text-gray-500" style={{ lineHeight: "1.7" }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WERKWIJZE ── */}
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#1A1A2E" }}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(27,111,190,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 85% 50%, rgba(245,166,35,0.06) 0%, transparent 60%)",
          }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header — always visible, no opacity animation */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border" style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#93c5fd", borderColor: "rgba(27,111,190,0.3)" }}>Onze werkwijze</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
                Zo werkt het
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.75" }}>
                Duidelijke stappen, geen verrassingen. Van eerste contact tot succesvolle uitvoering.
              </p>
            </div>

            {/* Steps — desktop: horizontal timeline; mobile: vertical */}
            <div className="relative">
              {/* Horizontal connector line (desktop only) — always visible */}
              <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px z-0" style={{ backgroundColor: "rgba(27,111,190,0.35)" }} />

              {/* Mobile vertical line */}
              <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-px z-0" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 pb-10 lg:pb-0 lg:text-center"
                  >
                    {/* Icon badge */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                        style={{
                          backgroundColor: "#1A1A2E",
                          border: `2px solid ${s.color}`,
                          boxShadow: `0 0 0 6px rgba(${s.color === "#F5A623" ? "245,166,35" : "27,111,190"},0.08), 0 8px 24px rgba(0,0,0,0.3)`,
                          color: s.color,
                        }}
                      >
                        {s.icon}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="lg:mt-8 flex-1 lg:flex-none lg:px-2">
                      {/* Step number */}
                      <span
                        className="block text-xs font-bold tracking-widest mb-2"
                        style={{ color: s.color, opacity: 0.8 }}
                      >
                        STAP {s.num}
                      </span>
                      <h3
                        className="text-lg font-bold text-white mb-2"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.75" }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#1A1A2E",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Start uw aanvraag
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white" style={{ backgroundColor: "#1B6FBE" }}>Ervaringen</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1A1A2E", letterSpacing: "-0.02em" }}>Wat onze opdrachtgevers zeggen</h2>
              <p className="text-base text-gray-500 max-w-xl mx-auto" style={{ lineHeight: "1.75" }}>Wij werken voor gemeentes, aannemers en evenementenorganisatoren door heel Nederland. Dit zeggen zij over onze samenwerking.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => <Testimonial key={t.name} {...t} />)}
            </div>
          </div>
        </section>

        {/* ── SPLIT CTA ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-8 md:p-10 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #1B6FBE 0%, #1354a0 100%)", boxShadow: "0 8px 32px rgba(27,111,190,0.25)" }}>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/20 text-white">Voor opdrachtgevers</div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Verkeersbegeleiding nodig?</h3>
                  <p className="text-white/75 text-sm mb-6" style={{ lineHeight: "1.75" }}>Vraag vandaag nog een vrijblijvende offerte aan. Wij reageren snel en denken mee over de beste oplossing voor uw situatie.</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {["Snel geschakeld", "Transparante prijzen", "VCA-gecertificeerd personeel"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/85 font-medium">
                        <IconCheck className="w-4 h-4 shrink-0 text-yellow-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition-[opacity,transform] hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}>
                    Offerte aanvragen
                  </Link>
                  <a href="tel:+31641039393" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white border border-white/25 hover:bg-white/10 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                    <IconPhone className="w-4 h-4" />
                    Bel ons
                  </a>
                </div>
              </div>

              <div className="rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-gray-100" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #1f2952 100%)", boxShadow: "0 8px 32px rgba(26,26,46,0.18)" }}>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/20 text-white">Voor werkzoekenden</div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>Word verkeersregelaar</h3>
                  <p className="text-white/75 text-sm mb-6" style={{ lineHeight: "1.75" }}>Wij zijn op zoek naar gemotiveerde mensen die willen werken als verkeersregelaar. Geen ervaring nodig — wij verzorgen de volledige opleiding.</p>
                  <ul className="flex flex-col gap-2 mb-8">
                    {["Flexibele werktijden", "Volledige opleiding vergoed", "Landelijke inzet mogelijk"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/85 font-medium">
                        <IconCheck className="w-4 h-4 shrink-0" style={{ color: "#F5A623" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/vacatures" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-[opacity,transform] hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}>
                  Bekijk vacatures
                </Link>
              </div>
            </div>
          </div>
        </section>

        </div>{/* end hero stacking context wrapper */}

      </main>

      <Footer />
    </div>
  );
}
