"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    photo: "/images/A7402006.jpg",
    name: "Ahmed El Fassi",
    function: "Senior Verkeersregelaar",
    experience: "4 jaar in dienst",
    quote:
      "Je staat elke dag tussen het verkeer en de mensen die veilig willen werken. Dat gevoel van verantwoordelijkheid — dat geeft energie.",
    story:
      "Ahmed begon bij Safety Traffic Holland zonder ervaring in de sector. Binnen een jaar groeide hij uit tot een van de meest gevraagde verkeersregelaars voor complexe wegwerkzaamheden. Hij werkte aan projecten bij Schiphol, de A2 en diverse gemeentelijke projecten door heel Nederland.",
    highlight:
      "De vaste gezichten in het team. Je kent elkaar, je vertrouwt elkaar — dat merk je direct op de werkvloer.",
  },
  {
    photo: "/images/A7401959.jpg",
    name: "Kevin de Groot",
    function: "Verkeersregelaar Evenementen",
    experience: "2 jaar in dienst",
    quote:
      "Bij een evenement met 50.000 bezoekers moet alles kloppen. Die druk maakt het juist uitdagend en leuk.",
    story:
      "Kevin werkte eerder in de beveiliging maar zocht meer variatie en verantwoordelijkheid. Bij Safety Traffic Holland vond hij precies dat. Hij is gespecialiseerd in grote publieksevenementen en werkte onder andere bij de Rotterdam Marathon en meerdere festivals.",
    highlight:
      "Elke dag is anders. De ene dag sta je bij wegwerkzaamheden, de andere dag bij een groot evenement. Nooit saai.",
  },
  {
    photo: "https://placehold.co/600x700/1A1A2E/ffffff?text=Foto+volgt",
    name: "Fatima Ouali",
    function: "Verkeersregelaar & Teamcoach",
    experience: "3 jaar in dienst",
    quote:
      "Ik ben hier begonnen als verkeersregelaar en ben nu ook verantwoordelijk voor het inwerken van nieuwe collega's. Die groei had ik niet verwacht.",
    story:
      "Fatima stapte over vanuit de detailhandel en was in eerste instantie sceptisch over werken in het verkeer. Maar de professionele begeleiding en het sterke teamgevoel bij Safety Traffic Holland overtuigden haar al snel. Nu is ze zelf degene die nieuwe collega's wegwijs maakt.",
    highlight:
      "Safety Traffic Holland investeert echt in je. Je wordt niet zomaar de weg op gestuurd — je wordt klaargestoomd.",
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── StoryCard ────────────────────────────────────────────────────────────────

function StoryCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const isExternal = member.photo.startsWith("http");

  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden"
      style={{ boxShadow: "0 8px 40px rgba(27,111,190,0.10), 0 2px 8px rgba(0,0,0,0.06)" }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "380px" }}>
        {isExternal ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          />
        ) : (
          <div className="w-full h-full overflow-hidden">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover object-top group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)" }}
            />
          </div>
        )}
        {/* Gradient at bottom of photo */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%)" }}
        />
        {/* Experience badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
          style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}
        >
          {member.experience}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-7 pb-8 pt-2 gap-5">
        {/* Name + function */}
        <div>
          <h2 className="text-xl font-bold" style={{ color: "#1A1A2E", letterSpacing: "-0.02em" }}>
            {member.name}
          </h2>
          <p className="text-sm font-medium mt-0.5" style={{ color: "#1B6FBE" }}>
            {member.function}
          </p>
        </div>

        {/* Quote */}
        <blockquote
          className="pl-4 italic text-base leading-relaxed"
          style={{
            borderLeft: "3px solid #F5A623",
            color: "#1A1A2E",
            fontStyle: "italic",
            lineHeight: "1.7",
          }}
        >
          &ldquo;{member.quote}&rdquo;
        </blockquote>

        {/* Story */}
        <p className="text-sm leading-relaxed" style={{ color: "#4b5563", lineHeight: "1.75" }}>
          {member.story}
        </p>

        {/* Highlight block */}
        <div
          className="rounded-2xl px-5 py-4 mt-auto"
          style={{ backgroundColor: "#1B6FBE" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
            Wat ik het meest waardeer aan STH
          </p>
          <p className="text-sm font-medium text-white leading-relaxed" style={{ lineHeight: "1.6" }}>
            &ldquo;{member.highlight}&rdquo;
          </p>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OnsTeamPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#F4F6F9", color: "#1A1A2E" }}
    >
      <Navbar />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1A1A2E 50%, #0f2744 100%)" }}
        >
          {/* Radial glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(27,111,190,0.18) 0%, transparent 70%), " +
                "radial-gradient(ellipse 40% 40% at 80% 30%, rgba(245,166,35,0.06) 0%, transparent 60%)",
            }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-white/20"
                style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#93c5fd" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Ons team · VCA-gecertificeerd
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
                style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                De mensen achter<br />
                <span style={{ color: "#F5A623" }}>Safety Traffic Holland</span>
              </h1>

              <p
                className="text-lg text-white/70 max-w-2xl mx-auto"
                style={{ lineHeight: "1.75" }}
              >
                Geen nummers, maar echte mensen. Leer de verkeersregelaars kennen die dagelijks
                zorgen voor veiligheid op de weg.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── VERHALEN GRID ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, i) => (
              <StoryCard key={member.name} member={member} index={i} />
            ))}
          </motion.div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1A1A2E 60%, #1a3a5c 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(27,111,190,0.2) 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                Herken jij jezelf hierin?
              </h2>
              <p className="text-lg text-white/70 mb-10" style={{ lineHeight: "1.75" }}>
                Wij zijn altijd op zoek naar gemotiveerde mensen die het verschil willen maken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vacatures"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400"
                  style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}
                >
                  Bekijk vacatures
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/25 hover:bg-white/10 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Neem contact op
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
