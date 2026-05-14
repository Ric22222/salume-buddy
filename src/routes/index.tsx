import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star } from "lucide-react";
import claroImg from "@/assets/claro-paese.jpg";
import bellinzonaImg from "@/assets/bottega-bellinzona.jpg";
import logo from "@/assets/logo-salumee.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salumée — Macellerie a Claro e Bellinzona" },
      {
        name: "description",
        content:
          "Salumée, due botteghe in Ticino: Macelleria-Paninoteca a Claro e Salumeria-Paninoteca a Bellinzona. Scegli la sede e scopri di più.",
      },
      { property: "og:title", content: "Salumée — Claro & Bellinzona" },
      {
        property: "og:description",
        content: "Due botteghe, una passione. Carne, salumi e panini in Ticino.",
      },
    ],
  }),
  component: ChooserPage,
});

function ChooserPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-charcoal text-cream">
      {/* Top brand bar */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="tricolor-bar opacity-80" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Salumée"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full bg-cream object-cover ring-2 ring-cream/30"
            />
            <div className="leading-tight">
              <div className="font-display text-xl text-cream">Salumée</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                Bottega · Ticino
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Star className="h-4 w-4 fill-ochre text-ochre" />
            <span className="text-xs uppercase tracking-[0.22em] text-cream/70">
              Dal 1900 · Tradizione di famiglia
            </span>
          </div>
        </div>
      </header>

      {/* Title — always in document flow, never overlaps the split */}
      <div className="relative z-20 px-6 pb-8 pt-24 text-center md:pt-28 lg:pb-10">
        <div className="butcher-tag mx-auto inline-flex items-center gap-2 rounded-sm bg-cream px-4 py-1.5 pl-5 text-[10px] font-semibold uppercase tracking-[0.28em] md:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Scegli la tua bottega
        </div>
        <h1 className="mt-4 font-display text-4xl leading-[0.95] text-cream drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl">
          Due <span className="italic text-ochre">botteghe</span>,
          <span className="md:hidden"><br /></span>
          <span className="hidden md:inline"> </span>
          una <span className="italic text-primary">passione</span>.
        </h1>
        <div className="mx-auto mt-5 hidden h-px w-32 bg-cream/40 md:block" />
        <p className="mt-4 text-[11px] uppercase tracking-[0.32em] text-cream/70 md:mt-5 md:text-sm">
          Claro · Bellinzona
        </p>
      </div>

      {/* Split */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* CLARO */}
        <Link
          to="/claro"
          className="group relative flex min-h-[60vh] items-end overflow-hidden md:min-h-screen"
        >
          <img
            src={claroImg}
            alt="Claro, Ticino"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30 transition-opacity group-hover:from-primary/80 group-hover:via-charcoal/60" />
          <div className="absolute inset-0 grain opacity-40 mix-blend-overlay" />

          {/* Vertical label */}
          <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.4em] text-cream/60 md:block">
            Sede · 01
          </div>

          <div className="relative z-10 w-full p-8 md:p-14 lg:p-20">
            <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-cream/70">
              <MapPin className="h-3 w-3" /> 6702 · Ticino
            </div>
            <div className="font-display text-[10vw] leading-[0.85] text-cream sm:text-[80px] md:text-[88px] lg:text-[120px]">
              Claro
            </div>
            <div className="mt-4 max-w-sm text-base text-cream/80">
              <span className="italic text-ochre">Macelleria</span> &
              Paninoteca. Banco carne, panini d'autore, prodotti del giorno.
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-cream backdrop-blur-sm transition-all group-hover:bg-cream group-hover:text-primary">
              Entra in bottega
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* BELLINZONA */}
        <Link
          to="/bellinzona"
          className="group relative flex min-h-[60vh] items-end overflow-hidden border-l border-cream/10 md:min-h-screen"
        >
          <img
            src={bellinzonaImg}
            alt="Bellinzona, Ticino"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30 transition-opacity group-hover:from-primary/80 group-hover:via-charcoal/60" />
          <div className="absolute inset-0 grain opacity-40 mix-blend-overlay" />

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.4em] text-cream/60 md:block">
            Sede · 02
          </div>

          <div className="relative z-10 w-full p-8 md:p-14 lg:p-20">
            <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-cream/70">
              <MapPin className="h-3 w-3" /> 6500 · Ticino
            </div>
            <div className="font-display text-[10vw] leading-[0.85] text-cream sm:text-[80px] md:text-[88px] lg:text-[120px]">
              Bellinzona
            </div>
            <div className="mt-4 max-w-sm text-base text-cream/80">
              <span className="italic text-ochre">Salumeria</span> &
              Paninoteca. Focacce ripiene, salumi italiani, prelibatezze.
            </div>
            <div className="mt-4 flex items-center gap-1 text-sm text-cream/70">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-ochre text-ochre" />
              ))}
              <span className="ml-2 text-xs uppercase tracking-[0.2em]">
                4.9 · 64 recensioni Google
              </span>
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-cream backdrop-blur-sm transition-all group-hover:bg-cream group-hover:text-primary">
              Entra in bottega
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom strip */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="apron-stripes-thin h-2 opacity-80" />
        <div className="bg-charcoal/90 px-6 py-4 text-center text-[10px] uppercase tracking-[0.32em] text-cream/60 backdrop-blur-sm">
          Carne · Salumi · Panini · Tradizione
        </div>
      </div>
    </div>
  );
}
