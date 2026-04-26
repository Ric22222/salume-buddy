import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import heroImg from "@/assets/hero-macelleria.jpg";
import salumiImg from "@/assets/salumi.jpg";
import paninoImg from "@/assets/panino.jpg";
import artigianoImg from "@/assets/artigiano.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macelleria Salumée — Bottega artigiana a Claro, Ticino" },
      {
        name: "description",
        content:
          "Macelleria-Paninoteca a Claro: carni selezionate, salumi della casa e panini preparati al momento. Tradizione ticinese dal 1985.",
      },
      { property: "og:title", content: "Macelleria Salumée — Bottega artigiana a Claro" },
      {
        property: "og:description",
        content: "Carni selezionate, salumi della casa e panini d'autore nel cuore del Ticino.",
      },
    ],
  }),
  component: HomePage,
});

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
              Il gusto della{" "}
              <span className="italic text-primary">bottega</span>,
              <br /> tagliato a mano.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Da oltre trent'anni selezioniamo carni della regione, stagioniamo
              i nostri salumi e prepariamo panini d'autore nel piccolo angolo
              gastronomico di Ala Ca Comunál.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/specialita"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Scopri le specialità
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Vieni a trovarci
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
                alt="Salumi stagionati e coppa affettata sul tagliere della Macelleria Salumée"
                width={1600}
                height={1100}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-4 max-w-[260px] rounded-2xl border border-border bg-card p-5 shadow-xl lg:-right-6">
                <div className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Specialità della casa
                </div>
                <div className="mt-2 font-display text-xl text-foreground">
                  Coppa stagionata
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Affinata 90 giorni nelle nostre cantine.
                </div>
              </div>
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
              icon: Star,
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

      {/* SPECIALITÀ TEASER */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — La nostra bottega
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Tre mestieri,
              <br />
              <span className="italic text-primary">una sola passione.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Macellai, salumieri e panettieri del gusto. Ogni mattina il banco
              cambia volto secondo la stagione, ma una cosa resta sempre:
              ingredienti veri, lavorati con le nostre mani.
            </p>
            <Link
              to="/specialita"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.22em] text-primary"
            >
              Tutte le specialità
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                img: salumiImg,
                title: "Salumi della casa",
                desc: "Stagionati nelle nostre cantine secondo ricette di famiglia.",
              },
              {
                img: paninoImg,
                title: "Paninoteca",
                desc: "Pane fresco, salumi tagliati al momento. Veloce, ma artigianale.",
              },
              {
                img: artigianoImg,
                title: "Carni selezionate",
                desc: "Filiera corta, allevamenti del Ticino e della regione.",
              },
              {
                img: heroImg,
                title: "Servizio su misura",
                desc: "Tagli speciali, piatti per cene, taglieri per ogni occasione.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-foreground">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / REVIEW */}
      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="mt-8 font-display text-3xl leading-tight italic text-cream sm:text-4xl">
            “Una piccola macelleria con prodotti di altissima qualità.
            I panini sono una delizia, sembra di mangiare a casa della nonna.”
          </blockquote>
          <div className="mt-6 text-sm uppercase tracking-[0.22em] text-cream/60">
            — Recensione Google
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
              Ti aspettiamo a Claro, dal martedì al sabato. Per ordini speciali
              o taglieri su misura, una telefonata basta.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="tel:+41912908455"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
            >
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
