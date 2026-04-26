import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Instagram, MapPin } from "lucide-react";
import carneImg from "@/assets/carne-banco.jpg";
import tartareImg from "@/assets/tartare.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Macelleria Salumée Claro" },
      {
        name: "description",
        content:
          "Macelleria Salumée è una macelleria-paninoteca a Claro, in Ticino. Indirizzo, contatti e canali social ufficiali.",
      },
      { property: "og:title", content: "Chi siamo — Macelleria Salumée" },
      {
        property: "og:description",
        content: "Macelleria-Paninoteca a Claro, Ticino.",
      },
    ],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — Chi siamo
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Macelleria{" "}
              <span className="italic text-primary">Salumée,</span>
              <br />
              a Claro.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Salumée è una macelleria-paninoteca con sede a Claro, in Ticino.
              Trovi il banco carne, prodotti pronti e la possibilità di
              fermarti per un panino.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <img
              src={carneImg}
              alt="Carne fresca preparata in Macelleria Salumée"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Dove ci{" "}
              <span className="italic text-primary">trovi.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Siamo in Ala Ca Comunál 27, 6702 Claro. Aperti dal martedì al
                sabato.
              </p>
              <p>
                Per il dettaglio dei prodotti del giorno e per le novità della
                bottega, il modo più semplice è seguirci su Instagram.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <MapPin className="h-4 w-4" />
                Indicazioni
              </Link>
              <a
                href="https://www.instagram.com/salumee.bellinzona/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" />
                @salumee.bellinzona
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <h2 className="max-w-2xl font-display text-4xl text-foreground sm:text-5xl">
            Seguici{" "}
            <span className="italic text-primary">online.</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            I canali ufficiali di Macelleria Salumée:
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <a
              href="https://www.instagram.com/salumee.bellinzona/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <Instagram className="h-5 w-5 text-primary" />
              <div className="mt-4 font-display text-xl text-foreground">Instagram</div>
              <div className="mt-1 text-sm text-muted-foreground">
                @salumee.bellinzona
              </div>
            </a>
            <a
              href="https://www.threads.com/@salumee.bellinzona"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="font-display text-xl italic text-primary">@</div>
              <div className="mt-4 font-display text-xl text-foreground">Threads</div>
              <div className="mt-1 text-sm text-muted-foreground">
                @salumee.bellinzona
              </div>
            </a>
            <a
              href="https://www.local.ch/it/d/bellinzona/6500/macelleria/salumee-_wnwBOyAlGmtPtxbLmyxsQ"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <div className="mt-4 font-display text-xl text-foreground">local.ch</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Scheda dell'attività
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">
            Vieni a{" "}
            <span className="italic text-primary">trovarci.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Ti aspettiamo in bottega, a Claro. Per qualsiasi richiesta, una
            telefonata basta.
          </p>
          <Link
            to="/contatti"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Trova la bottega
          </Link>
        </div>
        <div className="lg:col-span-7">
          <img
            src={tartareImg}
            alt="Tartare confezionata della Macelleria Salumée"
            loading="lazy"
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>
    </PageShell>
  );
}
