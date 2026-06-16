"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  IconShield,
  IconUsers,
  IconCheck,
  IconArrowRight,
  IconClock,
} from "@/components/ui/icons";

const waarden = [
  {
    icon: <IconShield className="w-6 h-6" />,
    title: "Veiligheid eerst",
    desc: "Elk project start met een veiligheidsanalyse. Onze medewerkers zijn VCA-gecertificeerd en handelen altijd conform de geldende wet- en regelgeving.",
  },
  {
    icon: <IconCheck className="w-6 h-6" />,
    title: "Kwaliteit boven kwantiteit",
    desc: "We nemen liever minder opdrachten aan dan dat we inleveren op kwaliteit. Elk project krijgt de aandacht en inzet die het verdient.",
  },
  {
    icon: <IconUsers className="w-6 h-6" />,
    title: "Vaste gezichten",
    desc: "U werkt met dezelfde verkeersregelaars. Zo kennen zij uw locatie, uw procedures en uw verwachtingen — en u hen.",
  },
  {
    icon: <IconClock className="w-6 h-6" />,
    title: "Continue verbetering",
    desc: "Na elk project evalueren we onze werkwijze. Feedback van opdrachtgevers en medewerkers is de motor achter onze kwaliteitsverbetering.",
  },
];

const werkwijzeSteps = [
  { num: "01", title: "Aanvraag", desc: "U neemt contact op via telefoon, WhatsApp of het contactformulier. We reageren binnen 4 uur op uw aanvraag." },
  { num: "02", title: "Inventarisatie", desc: "We bespreken de locatie, het tijdstip, de duur en eventuele bijzonderheden. Zo kunnen we een passende oplossing voorstellen." },
  { num: "03", title: "Offerte", desc: "U ontvangt een heldere offerte met een vaste prijs per dag of per uur. Geen verborgen kosten." },
  { num: "04", title: "Uitvoering", desc: "Op de afgesproken dag staan onze VCA-gecertificeerde verkeersregelaars klaar. U kunt ons altijd bereiken voor updates." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function OverOnsPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1A1A2E", minHeight: 380 }}
      >
        {/* Background gradient blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(27,111,190,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 30%, rgba(245,166,35,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#1B6FBE" }}
            >
              Over ons
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-white font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Over Safety Traffic<br />
            <span style={{ color: "#F5A623" }}>Holland B.V.</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Professionele verkeersbegeleiding door heel Nederland. VCA-gecertificeerd, betrouwbaar en 24/7 bereikbaar voor uw project.
          </motion.p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(27,111,190,0.12)", color: "#1B6FBE" }}
              >
                Ons verhaal
              </span>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#1A1A2E", lineHeight: 1.15 }}
              >
                Veiligheid begint met de juiste mensen op de juiste plek
              </h2>
              <div style={{ color: "#374151", lineHeight: 1.8, fontSize: "1rem" }} className="space-y-4">
                <p>
                  Safety Traffic Holland B.V. is opgericht vanuit een duidelijke missie: veilige werkomgevingen creëren voor wegwerkers, omstanders en bestuurders. We weten uit ervaring dat professionele verkeersbegeleiding het verschil maakt tussen een vlot lopend project en een gevaarlijke situatie.
                </p>
                <p>
                  Wij geloven dat veiligheid begint met de juiste mensen op de juiste plek. Daarom selecteren, trainen en certificeren we onze verkeersregelaars zorgvuldig. Elk teamlid beschikt over een geldig VCA-certificaat en is getraind in zowel technische als communicatieve vaardigheden.
                </p>
                <p>
                  Van kleinschalige gemeentelijke werkzaamheden tot grootschalige infrastructuurprojecten — Safety Traffic Holland staat klaar. Met onze landelijke dekking en 24/7 bereikbaarheid bent u altijd verzekerd van professionele ondersteuning.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
              className="relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "380px", boxShadow: "0 24px 60px rgba(27,111,190,0.15), 0 4px 16px rgba(0,0,0,0.1)" }}
              >
                <Image
                  src="/images/A7401984.jpg"
                  alt="Safety Traffic Holland verkeersregelaar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="eager"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,26,46,0.5) 0%, transparent 50%)" }}
                />
              </div>
              {/* VCA badge */}
              <div
                className="absolute -bottom-6 -left-6 rounded-xl px-5 py-4 flex items-center gap-3"
                style={{ backgroundColor: "#1A1A2E", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(27,111,190,0.2)" }}
                >
                  <IconShield className="w-5 h-5" style={{ color: "#1B6FBE" }} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">VCA-gecertificeerd</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>Alle medewerkers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onze waarden */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}
            >
              Onze waarden
            </span>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#1A1A2E" }}
            >
              Waar wij voor staan
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waarden.map((w, i) => (
              <motion.div
                key={w.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "#F4F6F9",
                  border: "1px solid rgba(27,111,190,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(27,111,190,0.12)", color: "#1B6FBE" }}
                >
                  {w.icon}
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "#1A1A2E", fontSize: "1.05rem" }}
                >
                  {w.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.7 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}
            >
              Onze aanpak
            </span>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#1A1A2E" }}
            >
              Hoe wij werken
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werkwijzeSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(27,111,190,0.08)" }}
              >
                <span
                  className="text-5xl font-black mb-4 block leading-none"
                  style={{ color: "rgba(27,111,190,0.12)", letterSpacing: "-0.05em" }}
                >
                  {step.num}
                </span>
                <h3 className="font-bold mb-2" style={{ color: "#1A1A2E", fontSize: "1.05rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VCA certificering */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            style={{ backgroundColor: "rgba(27,111,190,0.12)", border: "1px solid rgba(27,111,190,0.2)" }}
          >
            <div className="shrink-0">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Image
                  src="/images/vca.png"
                  alt="VCA certificering"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-xl mb-2">VCA-gecertificeerd</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                Alle medewerkers van Safety Traffic Holland beschikken over een geldig VCA-certificaat. Dit certificaat garandeert dat onze verkeersregelaars zijn opgeleid in veilig werken op en rondom de openbare weg. VCA staat voor Veiligheid, Gezondheid en Milieu Checklist Aannemers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#1A1A2E" }}
          >
            Benieuwd wat wij voor u kunnen betekenen?
          </motion.h2>
          <p className="mb-8" style={{ color: "#6b7280", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Neem vandaag nog contact op en ontvang binnen 4 uur een vrijblijvende offerte.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base"
            style={{
              backgroundColor: "#1B6FBE",
              color: "#ffffff",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Neem contact op
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
