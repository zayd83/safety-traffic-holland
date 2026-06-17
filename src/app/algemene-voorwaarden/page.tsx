import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AlgemeneVoorwaardenPage() {
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
            Algemene Voorwaarden
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

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>1. Identiteit</h2>
              <p>
                Safety Traffic Holland B.V.<br />
                E-mail: info@safetytrafficholland.nl<br />
                Telefoon: +31 6 23 56 05 81
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>2. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten tussen Safety Traffic Holland B.V. en de opdrachtgever. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>3. Offertes en totstandkoming overeenkomst</h2>
              <p>
                Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders aangegeven. Een overeenkomst komt tot stand na schriftelijke of mondelinge bevestiging door Safety Traffic Holland B.V.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>4. Uitvoering van de dienst</h2>
              <p>
                Safety Traffic Holland B.V. voert de opdracht naar beste inzicht en vermogen uit. Onze verkeersregelaars zijn VCA-gecertificeerd en werken conform de geldende wet- en regelgeving. Wij behouden het recht de opdracht te weigeren of te annuleren indien de veiligheid van medewerkers of derden in gevaar is.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>5. Annulering</h2>
              <p>Bij annulering door de opdrachtgever gelden de volgende kosten:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Annulering meer dan 48 uur voor aanvang: geen kosten</li>
                <li>Annulering tussen 24 en 48 uur voor aanvang: 50% van de opdracht</li>
                <li>Annulering minder dan 24 uur voor aanvang: 100% van de opdracht</li>
              </ul>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>6. Betaling</h2>
              <p>
                Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij schriftelijk anders overeengekomen. Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en zijn wettelijke rente en incassokosten verschuldigd.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>7. Aansprakelijkheid</h2>
              <p>
                De aansprakelijkheid van Safety Traffic Holland B.V. is beperkt tot het bedrag dat in het desbetreffende geval door de aansprakelijkheidsverzekering wordt uitbetaald. Wij zijn niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>8. Overmacht</h2>
              <p>
                In geval van overmacht — waaronder extreme weersomstandigheden, calamiteiten of overheidsmaatregelen — is Safety Traffic Holland B.V. niet gehouden tot nakoming van de overeenkomst. Partijen treden dan in overleg over een alternatieve oplossing.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>9. Toepasselijk recht en geschillen</h2>
              <p>
                Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Safety Traffic Holland B.V. gevestigd is.
              </p>

              <h2 style={{ color: "#1A1A2E", fontSize: "1.25rem", fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem" }}>10. Wijzigingen</h2>
              <p>
                Safety Traffic Holland B.V. behoudt het recht deze algemene voorwaarden te wijzigen. De meest actuele versie is altijd te vinden op deze pagina.
              </p>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
