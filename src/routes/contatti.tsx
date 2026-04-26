import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e orari — Macelleria Salumée Claro" },
      {
        name: "description",
        content:
          "Macelleria Salumée: Ala Ca Comunál 27, 6702 Claro. Telefono 091 290 84 55. Orari di apertura e indicazioni stradali.",
      },
      { property: "og:title", content: "Contatti — Macelleria Salumée" },
      {
        property: "og:description",
        content: "Indirizzo, orari e telefono della Macelleria Salumée a Claro.",
      },
    ],
  }),
  component: ContattiPage,
});

const orari = [
  { g: "Lunedì", o: "Chiuso" },
  { g: "Martedì", o: "08:30 – 12:30 · 14:30 – 18:30" },
  { g: "Mercoledì", o: "08:30 – 12:30 · 14:30 – 18:30" },
  { g: "Giovedì", o: "08:30 – 12:30 · 14:30 – 18:30" },
  { g: "Venerdì", o: "08:30 – 12:30 · 14:30 – 18:30" },
  { g: "Sabato", o: "08:00 – 16:00" },
  { g: "Domenica", o: "Chiuso" },
];

function ContattiPage() {
  return (
    <PageShell>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Vieni a trovarci
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Una porta aperta,{" "}
            <span className="italic text-primary">a Claro.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Una telefonata, un saluto, una passata in bottega. Siamo qui per te
            dal martedì al sabato.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl text-foreground">Indirizzo</h2>
              </div>
              <p className="mt-3 text-base text-muted-foreground">
                Ala Ca Comunál 27
                <br />
                6702 Claro, Ticino
              </p>
              <a
                href="https://maps.google.com/?q=Ala+Ca+Comunal+27,+6702+Claro"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                <Navigation className="h-4 w-4" />
                Indicazioni stradali
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl text-foreground">Telefono</h2>
              </div>
              <a
                href="tel:+41912908455"
                className="mt-3 block font-display text-3xl text-foreground hover:text-primary"
              >
                091 290 84 55
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Per ordini speciali, taglieri o consigli: chiamaci, ti rispondiamo
                con piacere.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="flex items-center gap-3 border-b border-border bg-secondary/40 px-8 py-6">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl text-foreground">Orari di apertura</h2>
              </div>
              <ul className="divide-y divide-border">
                {orari.map(({ g, o }) => {
                  const closed = o === "Chiuso";
                  return (
                    <li
                      key={g}
                      className="flex items-center justify-between px-8 py-5"
                    >
                      <span className="font-display text-lg text-foreground">{g}</span>
                      <span
                        className={`text-sm ${
                          closed ? "italic text-muted-foreground" : "text-foreground"
                        }`}
                      >
                        {o}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mappa Macelleria Salumée Claro"
                src="https://www.google.com/maps?q=Ala+Ca+Comunal+27,+6702+Claro&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
