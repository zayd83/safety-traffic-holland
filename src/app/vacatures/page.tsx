"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  IconShield,
  IconUsers,
  IconClock,
  IconCheck,
  IconArrowRight,
} from "@/components/ui/icons";

const voordelen = [
  {
    icon: <IconShield className="w-6 h-6" />,
    title: "VCA-certificering vergoed",
    desc: "Wij vergoeden uw VCA-opleiding volledig. U investeert in uw carrière, wij investeren in u.",
  },
  {
    icon: <IconUsers className="w-6 h-6" />,
    title: "Vast team",
    desc: "U werkt in een hecht team met ervaren collega's. Geen roulerende ploegen — vaste gezichten.",
  },
  {
    icon: <IconClock className="w-6 h-6" />,
    title: "Flexibele roosters",
    desc: "Dag-, avond- en weekenddiensten mogelijk. We stemmen het rooster af op uw beschikbaarheid.",
  },
  {
    icon: <IconArrowRight className="w-6 h-6" />,
    title: "Doorgroeimogelijkheden",
    desc: "Van verkeersregelaar naar ploegcoördinator of projectleider. Uw ambitie bepaalt uw pad.",
  },
];

const profiel = [
  "U heeft een geldig rijbewijs B",
  "U bent communicatief vaardig en stressbestendig",
  "U bent bereid om VCA-certificering te behalen",
  "U bent beschikbaar voor dag- en/of avonddiensten",
  "U spreekt Nederlands",
  "Ervaring als verkeersregelaar is een pré, geen vereiste",
];

const hoeGevondenOptions = [
  "Selecteer een optie",
  "Via een vriend of collega",
  "Via Indeed / LinkedIn",
  "Via Google",
  "Via sociale media",
  "Via een uitzendbureau",
  "Anders",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function VacaturesPage() {
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    motivatie: "",
    hoeGevonden: "Selecteer een optie",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.naam.trim()) e.naam = "Naam is verplicht";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Voer een geldig e-mailadres in";
    if (!form.motivatie.trim()) e.motivatie = "Motivatie is verplicht";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: `1.5px solid ${errors[field] ? "#ef4444" : "rgba(27,111,190,0.2)"}`,
    backgroundColor: "#ffffff",
    color: "#1A1A2E",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  });

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
              style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "#F5A623" }}
            >
              Werken bij STH
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Werken bij Safety<br />
            <span style={{ color: "#F5A623" }}>Traffic Holland</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Word onderdeel van een professioneel team. Wij zoeken gemotiveerde mensen die willen bijdragen aan veiligheid op de Nederlandse wegen.
          </motion.p>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}
            >
              Waarom STH?
            </span>
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#1A1A2E" }}
            >
              Wat wij bieden
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {voordelen.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(27,111,190,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1A1A2E", fontSize: "1.05rem" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate profile */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE" }}
              >
                Wie zoeken wij?
              </span>
              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#1A1A2E" }}
              >
                Herken jij jezelf hierin?
              </h2>
              <p className="mb-6" style={{ color: "#6b7280", lineHeight: 1.8 }}>
                We zoeken enthousiaste mensen die oog hebben voor veiligheid en graag buiten werken. Ervaring is geen vereiste — wij investeren in uw opleiding.
              </p>
              <ul className="space-y-3">
                {profiel.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(27,111,190,0.12)" }}
                    >
                      <IconCheck className="w-3 h-3" style={{ color: "#1B6FBE" }} />
                    </span>
                    <span style={{ color: "#374151", fontSize: "0.9375rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Open sollicitatie form */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            >
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#F4F6F9", border: "1px solid rgba(27,111,190,0.1)" }}
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "rgba(27,111,190,0.12)" }}
                    >
                      <IconCheck className="w-8 h-8" style={{ color: "#1B6FBE" }} />
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ color: "#1A1A2E" }}>
                      Sollicitatie ontvangen!
                    </h3>
                    <p style={{ color: "#6b7280", lineHeight: 1.7 }}>
                      Bedankt voor uw interesse. We nemen zo snel mogelijk contact met u op.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ naam: "", email: "", telefoon: "", motivatie: "", hoeGevonden: "Selecteer een optie" }); }}
                      className="mt-6 text-sm font-medium"
                      style={{ color: "#1B6FBE" }}
                    >
                      Nieuw formulier invullen
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-bold text-lg mb-6" style={{ color: "#1A1A2E" }}>
                      Open sollicitatie
                    </h3>
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                          Naam <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Voor- en achternaam"
                          value={form.naam}
                          onChange={(e) => setForm({ ...form, naam: e.target.value })}
                          style={inputStyle("naam")}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = errors.naam ? "#ef4444" : "rgba(27,111,190,0.2)"; }}
                        />
                        {errors.naam && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.naam}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                          E-mailadres <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="naam@voorbeeld.nl"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          style={inputStyle("email")}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "rgba(27,111,190,0.2)"; }}
                        />
                        {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          placeholder="+31 6 00 00 00 00"
                          value={form.telefoon}
                          onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                          style={inputStyle("telefoon")}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(27,111,190,0.2)"; }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                          Hoe heeft u ons gevonden?
                        </label>
                        <select
                          value={form.hoeGevonden}
                          onChange={(e) => setForm({ ...form, hoeGevonden: e.target.value })}
                          style={{ ...inputStyle("hoeGevonden"), cursor: "pointer" }}
                        >
                          {hoeGevondenOptions.map((opt) => (
                            <option key={opt} value={opt} disabled={opt === "Selecteer een optie"}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                          Motivatie <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Vertel ons waarom u bij Safety Traffic Holland wilt werken..."
                          value={form.motivatie}
                          onChange={(e) => setForm({ ...form, motivatie: e.target.value })}
                          style={{ ...inputStyle("motivatie"), resize: "vertical" }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = errors.motivatie ? "#ef4444" : "rgba(27,111,190,0.2)"; }}
                        />
                        {errors.motivatie && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.motivatie}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-semibold text-sm"
                        style={{
                          backgroundColor: "#F5A623",
                          color: "#1A1A2E",
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                        onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                      >
                        Verstuur sollicitatie
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14" style={{ backgroundColor: "#F4F6F9", borderTop: "1px solid rgba(27,111,190,0.1)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ color: "#6b7280", fontSize: "0.9375rem" }}>
            Heeft u vragen over werken bij ons?{" "}
            <Link href="/contact" style={{ color: "#1B6FBE", fontWeight: 600, textDecoration: "none" }}>
              Neem contact op
            </Link>{" "}
            of bel{" "}
            <a href="tel:+31641039393" style={{ color: "#1B6FBE", fontWeight: 600, textDecoration: "none" }}>
              +31 6 41 03 93 93
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
