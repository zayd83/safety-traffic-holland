"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  IconPhone,
  IconMail,
  IconWhatsApp,
  IconMap,
  IconClock,
  IconCheck,
} from "@/components/ui/icons";

const contactInfo = [
  {
    icon: <IconPhone className="w-5 h-5" />,
    label: "Telefoon",
    value: "+31 6 41 03 93 93",
    href: "tel:+31641039393",
    color: "#1B6FBE",
    bg: "rgba(27,111,190,0.12)",
  },
  {
    icon: <IconMail className="w-5 h-5" />,
    label: "E-mail",
    value: "info@safetytrafficholland.nl",
    href: "mailto:info@safetytrafficholland.nl",
    color: "#1B6FBE",
    bg: "rgba(27,111,190,0.12)",
  },
  {
    icon: <IconWhatsApp className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+31 6 41 03 93 93",
    href: "https://wa.me/31641039393",
    color: "#25D366",
    bg: "rgba(37,211,102,0.12)",
  },
  {
    icon: <IconMap className="w-5 h-5" />,
    label: "Werkgebied",
    value: "Heel Nederland",
    href: null,
    color: "#1B6FBE",
    bg: "rgba(27,111,190,0.12)",
  },
  {
    icon: <IconClock className="w-5 h-5" />,
    label: "Bereikbaarheid",
    value: "24 uur per dag, 7 dagen per week",
    href: null,
    color: "#1B6FBE",
    bg: "rgba(27,111,190,0.12)",
  },
];

const aanvraagTypes = [
  "Selecteer een type",
  "Verkeersbegeleiding bij wegwerkzaamheden",
  "Verkeersbegeleiding bij evenement",
  "Calamiteitenbegeleiding",
  "Spoedopdracht",
  "Offerte / prijsaanvraag",
  "Overig",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
  const [form, setForm] = useState({
    naam: "",
    bedrijf: "",
    email: "",
    telefoon: "",
    type: "Selecteer een type",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.naam.trim()) e.naam = "Naam is verplicht";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Voer een geldig e-mailadres in";
    if (!form.bericht.trim()) e.bericht = "Bericht is verplicht";
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

  const inputCls = (field: string) => ({
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
              style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#1B6FBE" }}
            >
              Contact
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Neem contact op<br />
            <span style={{ color: "#F5A623" }}>we reageren binnen 4 uur</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            Heeft u een project, een evenement of een spoedgeval? Wij staan 24/7 voor u klaar.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: contact info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
              >
                <h2
                  className="font-bold mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.03em", color: "#1A1A2E" }}
                >
                  Contactgegevens
                </h2>
                <p className="mb-8" style={{ color: "#6b7280", lineHeight: 1.7 }}>
                  Bereik ons via telefoon, e-mail of WhatsApp. Voor spoedopdrachten bel of app ons direct.
                </p>

                <ul className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: "easeOut" as const }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-4 rounded-xl group"
                          style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid rgba(27,111,190,0.08)",
                            textDecoration: "none",
                            transition: "box-shadow 0.2s ease, transform 0.2s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(27,111,190,0.12)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                          <span
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: item.bg, color: item.color }}
                          >
                            {item.icon}
                          </span>
                          <div>
                            <p className="text-xs font-medium mb-0.5" style={{ color: "#9ca3af" }}>{item.label}</p>
                            <p className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div
                          className="flex items-center gap-4 p-4 rounded-xl"
                          style={{ backgroundColor: "#ffffff", border: "1px solid rgba(27,111,190,0.08)" }}
                        >
                          <span
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: item.bg, color: item.color }}
                          >
                            {item.icon}
                          </span>
                          <div>
                            <p className="text-xs font-medium mb-0.5" style={{ color: "#9ca3af" }}>{item.label}</p>
                            <p className="font-semibold text-sm" style={{ color: "#1A1A2E" }}>{item.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* WhatsApp CTA */}
                <div className="mt-8">
                  <a
                    href="https://wa.me/31641039393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm"
                    style={{
                      backgroundColor: "#25D366",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <IconWhatsApp className="w-5 h-5" />
                    Direct WhatsApp-en
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
              >
                <div
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: "#ffffff", border: "1px solid rgba(27,111,190,0.08)", boxShadow: "0 4px 32px rgba(27,111,190,0.06)" }}
                >
                  {submitted ? (
                    <div className="text-center py-12">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ backgroundColor: "rgba(27,111,190,0.1)" }}
                      >
                        <IconCheck className="w-10 h-10" style={{ color: "#1B6FBE" }} />
                      </div>
                      <h3 className="font-bold text-2xl mb-3" style={{ color: "#1A1A2E", letterSpacing: "-0.02em" }}>
                        Aanvraag verzonden!
                      </h3>
                      <p className="max-w-sm mx-auto" style={{ color: "#6b7280", lineHeight: 1.7 }}>
                        Bedankt voor uw bericht. We nemen binnen 4 uur contact met u op.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ naam: "", bedrijf: "", email: "", telefoon: "", type: "Selecteer een type", bericht: "" }); }}
                        className="mt-8 text-sm font-medium px-5 py-2 rounded-lg"
                        style={{ backgroundColor: "rgba(27,111,190,0.1)", color: "#1B6FBE", transition: "background-color 0.2s ease" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(27,111,190,0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(27,111,190,0.1)"; }}
                      >
                        Nieuw formulier
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2
                        className="font-bold mb-1"
                        style={{ fontSize: "1.25rem", color: "#1A1A2E", letterSpacing: "-0.02em" }}
                      >
                        Stuur ons een bericht
                      </h2>
                      <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
                        Velden met <span style={{ color: "#ef4444" }}>*</span> zijn verplicht
                      </p>

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                              Naam <span style={{ color: "#ef4444" }}>*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Voor- en achternaam"
                              value={form.naam}
                              onChange={(e) => setForm({ ...form, naam: e.target.value })}
                              style={inputCls("naam")}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = errors.naam ? "#ef4444" : "rgba(27,111,190,0.2)"; }}
                            />
                            {errors.naam && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.naam}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                              Bedrijfsnaam
                            </label>
                            <input
                              type="text"
                              placeholder="Bedrijf B.V."
                              value={form.bedrijf}
                              onChange={(e) => setForm({ ...form, bedrijf: e.target.value })}
                              style={inputCls("bedrijf")}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(27,111,190,0.2)"; }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                              E-mailadres <span style={{ color: "#ef4444" }}>*</span>
                            </label>
                            <input
                              type="email"
                              placeholder="naam@bedrijf.nl"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              style={inputCls("email")}
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
                              style={inputCls("telefoon")}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(27,111,190,0.2)"; }}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                            Type aanvraag
                          </label>
                          <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            style={{ ...inputCls("type"), cursor: "pointer" }}
                          >
                            {aanvraagTypes.map((opt) => (
                              <option key={opt} value={opt} disabled={opt === "Selecteer een type"}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>
                            Bericht <span style={{ color: "#ef4444" }}>*</span>
                          </label>
                          <textarea
                            rows={5}
                            placeholder="Beschrijf uw project, locatie, datum en eventuele bijzonderheden..."
                            value={form.bericht}
                            onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                            style={{ ...inputCls("bericht"), resize: "vertical" }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#1B6FBE"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = errors.bericht ? "#ef4444" : "rgba(27,111,190,0.2)"; }}
                          />
                          {errors.bericht && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.bericht}</p>}
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl font-semibold text-sm"
                          style={{
                            backgroundColor: "#1B6FBE",
                            color: "#ffffff",
                            transition: "opacity 0.2s ease, transform 0.2s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                          onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                          Verstuur bericht
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
