"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacybeleidPage() {
  return (
    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>
      <Navbar />

      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1A1A2E", minHeight: 280 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(27,111,190,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#1B6FBE" }}
          >
            Juridisch
          </span>
          <h1
            className="text-white font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Privacybeleid
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ backgroundColor: "#ffffff", border: "1px solid rgba(27,111,190,0.08)" }}
          >
            <div className="prose max-w-none" style={{ color: "#374151", lineHeight: 1.8 }}>

              <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Laatst bijgewerkt: juni 2026</p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>1. Wie zijn wij?</h2>
              <p>
                Safety Traffic Holland B.V. is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Wij zijn te bereiken via:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>E-mail: info@safetytrafficholland.nl</li>
                <li>Telefoon: +31 6 23 56 05 81</li>
              </ul>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>2. Welke gegevens verwerken wij?</h2>
              <p>Wij verwerken persoonsgegevens die u zelf aan ons verstrekt, bijvoorbeeld via ons contactformulier of sollicitatieformulier. Het gaat om de volgende gegevens:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Bedrijfsnaam (indien van toepassing)</li>
                <li>De inhoud van uw bericht of sollicitatie</li>
              </ul>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>3. Waarom verwerken wij deze gegevens?</h2>
              <p>Wij gebruiken uw gegevens uitsluitend voor de volgende doeleinden:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Het beantwoorden van uw contactverzoek of offerte-aanvraag</li>
                <li>Het verwerken van uw sollicitatie</li>
                <li>Het nakomen van wettelijke verplichtingen</li>
              </ul>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>4. Hoe lang bewaren wij uw gegevens?</h2>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld. Contactgegevens worden uiterlijk 12 maanden na het laatste contact verwijderd, tenzij een wettelijke bewaarplicht anders vereist.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>5. Delen wij uw gegevens?</h2>
              <p>
                Wij verkopen uw gegevens nooit aan derden. Wij delen uw gegevens alleen met derden indien dit noodzakelijk is voor de uitvoering van onze diensten of wanneer wij hier wettelijk toe verplicht zijn.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>6. Uw rechten</h2>
              <p>Op grond van de AVG heeft u de volgende rechten:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Recht op inzage in uw persoonsgegevens</li>
                <li>Recht op rectificatie van onjuiste gegevens</li>
                <li>Recht op verwijdering van uw gegevens</li>
                <li>Recht op beperking van de verwerking</li>
                <li>Recht op bezwaar tegen de verwerking</li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                U kunt uw verzoek indienen via info@safetytrafficholland.nl. Wij reageren binnen 30 dagen.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>7. Beveiliging</h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen verlies, ongeoorloofde toegang of misbruik.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>8. Klachten</h2>
              <p>
                Heeft u een klacht over de verwerking van uw persoonsgegevens? U heeft het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: "#1B6FBE" }}>autoriteitpersoonsgegevens.nl</a>.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>9. Wijzigingen</h2>
              <p>
                Wij behouden het recht dit privacybeleid te wijzigen. De meest actuele versie is altijd te vinden op deze pagina.
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
