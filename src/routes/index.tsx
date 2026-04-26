import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, MapPin, Clock, Star, Instagram, Phone } from "lucide-react";
import heroImg from "@/assets/carne-banco.jpg";
import tartareImg from "@/assets/tartare.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macelleria Salumée — Macelleria e Paninoteca a Claro" },
      {
        name: "description",
        content:
          "Macelleria Salumée a Claro, Ticino. Macelleria e paninoteca, prodotti freschi e curati. Ala Ca Comunál 27 · 091 290 84 55.",
      },
      { property: "og:title", content: "Macelleria Salumée — Claro" },
      {
        property: "og:description",
        content: "Macelleria-Paninoteca a Claro, in Ticino.",
      },
    ],
  }),
  component: HomePage,
});

const reviews = [
  { when: "2 mesi fa", text: "Buoni prodotti e molto pulito." },
  { when: "4 mesi fa", text: null },
  { when: "5 mesi fa", text: null },
  { when: "5 mesi fa", text: null },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Macelleria · Paninoteca · Claro
            </div>

            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Macelleria{" "}
              <span className="italic text-primary">Salumée</span>,
              <br /> a Claro.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Macelleria e paninoteca in Ala Ca Comunál 27, 6702 Claro.
              Passa in bottega dal martedì al sabato.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+41912908455"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                091 290 84 55
              </a>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Indicazioni e orari
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-border/60 pt-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5,0</span> · 4
                recensioni Google
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border border-primary/20 lg:block" />
              <img
                src={heroImg}
                alt="Banco di carne fresca preparata in Macelleria Salumée a Claro"
                width={1600}
                height={1100}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl divide-y divide-border/60 px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-10">
          {[
            {
              icon: MapPin,
              label: "Dove siamo",
              value: "Ala Ca Comunál 27, 6702 Claro",
            },
            {
              icon: Clock,
              label: "Orari",
              value: "Mar–Ven 8:30–12:30 / 14:30–18:30 · Sab 8–16",
            },
            {
              icon: Phone,
              label: "Telefono",
              value: "091 290 84 55",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 py-6 lg:px-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {label}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMMAGINE + INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <img
              src={tartareImg}
              alt="Tartare confezionata della Macelleria Salumée"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — La bottega
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Macelleria e{" "}
              <span className="italic text-primary">paninoteca.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Salumée è una piccola macelleria-paninoteca a Claro. Trovi il
              banco carne, i prodotti del giorno e la possibilità di fermarti
              per un panino.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Per il dettaglio dei prodotti del giorno, segui i nostri canali
              social: aggiorniamo regolarmente le novità della bottega.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/salumee.bellinzona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:-translate-y-0.5 transition-transform"
              >
                <Instagram className="h-4 w-4" />
                @salumee.bellinzona
              </a>
              <Link
                to="/specialita"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                La bottega
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-cream/60">
              — Recensioni Google
            </div>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="mt-3 font-display text-2xl">5,0 · 4 recensioni</div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="rounded-2xl border border-cream/10 bg-cream/5 p-6"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                {r.text ? (
                  <p className="mt-4 font-display text-lg italic leading-snug">
                    “{r.text}”
                  </p>
                ) : (
                  <p className="mt-4 text-sm italic text-cream/50">
                    Recensione 5 stelle senza testo
                  </p>
                )}
                <div className="mt-4 text-xs uppercase tracking-[0.22em] text-cream/50">
                  {r.when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-10 shadow-sm lg:grid-cols-2 lg:p-16">
          <div>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Passa in bottega.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ti aspettiamo a Claro, dal martedì al sabato.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="tel:+41912908455"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              091 290 84 55
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Indicazioni e orari
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
