import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Instagram, ArrowRight } from "lucide-react";
import carneImg from "@/assets/carne-banco.jpg";
import tartareImg from "@/assets/tartare.jpg";

export const Route = createFileRoute("/specialita")({
  head: () => ({
    meta: [
      { title: "La bottega — Macelleria Salumée Claro" },
      {
        name: "description",
        content:
          "Macelleria e paninoteca a Claro: banco carne, prodotti pronti e panini. Per il dettaglio del giorno seguici su Instagram @salumee.bellinzona.",
      },
      { property: "og:title", content: "La bottega — Macelleria Salumée" },
      {
        property: "og:description",
        content: "Macelleria-Paninoteca a Claro, Ticino.",
      },
    ],
  }),
  component: SpecialitaPage,
});

const sections = [
  {
    eyebrow: "Banco carne",
    title: "Carne fresca, preparata in bottega",
    img: carneImg,
    text: "Il banco propone tagli di carne freschi, preparati e pronti per la cottura. Per sapere cosa trovi oggi, passa in negozio o dai un'occhiata ai nostri canali social.",
  },
  {
    eyebrow: "Pronti & take away",
    title: "Tartare e specialità del giorno",
    img: tartareImg,
    text: "Trovi anche prodotti pronti, come tartare confezionata, da portare a casa. La selezione cambia: per le novità del giorno, Instagram è il posto giusto.",
  },
];

function SpecialitaPage() {
  return (
    <PageShell>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — La bottega
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Macelleria{" "}
            <span className="italic text-primary">e paninoteca.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Da Salumée trovi il banco carne, prodotti pronti e la possibilità
            di fermarti per un panino. La selezione cambia spesso: passa in
            bottega o seguici online.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/salumee.bellinzona/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              <Instagram className="h-4 w-4" />
              @salumee.bellinzona
            </a>
            <a
              href="https://www.threads.com/@salumee.bellinzona"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Threads
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="space-y-24 lg:space-y-32">
          {sections.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="text-xs uppercase tracking-[0.22em] text-primary">
                  {s.eyebrow}
                </div>
                <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-3xl border border-border bg-secondary/30 p-10 text-center lg:p-16">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Vuoi sapere cosa c'è oggi?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Chiama in bottega o scrivici su Instagram: ti diciamo subito cosa
            trovi al banco.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+41912908455"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              091 290 84 55
            </a>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Indicazioni
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
