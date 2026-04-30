import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  Instagram,
  Phone,
  Navigation,
  Beef,
  Sandwich,
  Award,
} from "lucide-react";
import heroImg from "@/assets/carne-banco.jpg";
import tartareImg from "@/assets/tartare.jpg";
import claroImg from "@/assets/claro-paese.jpg";
import logo from "@/assets/logo-salumee.png";

export const Route = createFileRoute("/claro")({
  head: () => ({
    meta: [
      { title: "Salumée Claro — Macelleria & Paninoteca a Claro, Ticino" },
      {
        name: "description",
        content:
          "Macelleria-Paninoteca Salumée a Claro. Carni fresche, salumi della casa, panini d'autore. Ala Ca Comunál 27 · 091 290 84 55.",
      },
      { property: "og:title", content: "Salumée Claro — Macelleria & Paninoteca" },
      {
        property: "og:description",
        content: "Bottega artigiana a Claro, in Ticino. Carne, salumi e panini.",
      },
    ],
  }),
  component: ClaroPage,
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

const reviews = [
  { when: "2 mesi fa", text: "Buoni prodotti e molto pulito.", author: "Cliente Google" },
  { when: "4 mesi fa", text: "5 stelle senza testo.", author: "Cliente Google", silent: true },
  { when: "5 mesi fa", text: "5 stelle senza testo.", author: "Cliente Google", silent: true },
  { when: "5 mesi fa", text: "5 stelle senza testo.", author: "Cliente Google", silent: true },
];

const specialty = [
  { icon: Beef, title: "Banco carne", text: "Tagli freschi preparati in giornata, pronti per la cottura." },
  { icon: Sandwich, title: "Paninoteca", text: "Panini farciti con i nostri salumi e carni della casa." },
  { icon: Award, title: "Selezione del giorno", text: "Specialità e prodotti pronti che cambiano spesso." },
];

function ClaroPage() {
  return (
    <div className="paper min-h-screen text-foreground">
      {/* Top bar */}
      <div className="apron-stripes-thin h-2" />
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Cambia sede
          </Link>
          <Link to="/claro" className="flex items-center gap-3">
            <img src={logo} alt="Logo Salumée Claro" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-foreground">Salumée</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Macelleria · Claro</div>
            </div>
          </Link>
          <a
            href="tel:+41912908455"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 transition-transform md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" /> 091 290 84 55
          </a>
          <a
            href="tel:+41912908455"
            className="rounded-full bg-primary p-3 text-primary-foreground md:hidden"
            aria-label="Chiama"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-6 overflow-x-auto px-6 pb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
          <a href="#bottega" className="hover:text-primary">Bottega</a>
          <span className="text-border">·</span>
          <a href="#specialita" className="hover:text-primary">Specialità</a>
          <span className="text-border">·</span>
          <a href="#recensioni" className="hover:text-primary">Recensioni</a>
          <span className="text-border">·</span>
          <a href="#contatti" className="hover:text-primary">Contatti</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-20">
          <div className="lg:col-span-6">
            <div className="butcher-tag inline-flex items-center gap-2 rounded-sm px-4 py-1.5 pl-5 text-[11px] font-semibold uppercase tracking-[0.28em]">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Sede di Claro · 6702
            </div>

            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Macelleria{" "}
              <span className="italic text-primary">Salumée</span>,
              <br /> a Claro.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Macelleria e paninoteca in Ala Ca Comunál 27. Carne fresca,
              salumi della casa, panini farciti al momento. Passa dal martedì al sabato.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+41912908455"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> 091 290 84 55
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Indicazioni e orari <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-border/60 pt-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ochre text-ochre" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5,0</span> · 4 recensioni Google
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border-2 border-primary/30 lg:block" />
              <img
                src={heroImg}
                alt="Banco di carne fresca preparata in Macelleria Salumée a Claro"
                width={1600}
                height={1100}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-charcoal/10"
              />
              <div className="sticker absolute -bottom-5 -right-5 hidden h-28 w-28 items-center justify-center rounded-full border-2 border-primary bg-cream text-center font-display text-primary shadow-xl sm:flex">
                <div className="leading-tight">
                  <div className="text-[9px] uppercase tracking-[0.25em]">Bottega</div>
                  <div className="text-xl italic">Salumée</div>
                  <div className="text-[9px] uppercase tracking-[0.25em]">Claro · TI</div>
                </div>
              </div>
              <div className="absolute -left-3 top-8 rotate-[-6deg] bg-charcoal px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-cream shadow-lg">
                Fresco · Oggi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border/60 bg-charcoal py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-cream">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 px-10 font-display text-2xl italic">
              <span>Carne fresca</span><span className="text-ochre">✦</span>
              <span>Salumi della casa</span><span className="text-ochre">✦</span>
              <span>Panini d'autore</span><span className="text-ochre">✦</span>
              <span>Take away</span><span className="text-ochre">✦</span>
              <span>Tradizione ticinese</span><span className="text-ochre">✦</span>
              <span>Bottega di famiglia</span><span className="text-ochre">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK INFO */}
      <section className="border-b border-border/60 bg-secondary/40 grain">
        <div className="mx-auto grid max-w-7xl divide-y divide-border/60 px-6 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-10">
          {[
            { icon: MapPin, label: "Dove siamo", value: "Ala Ca Comunál 27, 6702 Claro" },
            { icon: Clock, label: "Orari", value: "Mar–Ven 8:30–18:30 · Sab 8–16" },
            { icon: Phone, label: "Telefono", value: "091 290 84 55" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 py-6 lg:px-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALITÀ */}
      <section id="specialita" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— Cosa trovi in bottega</div>
        <h2 className="mt-4 max-w-2xl font-display text-4xl text-foreground sm:text-5xl">
          Le nostre <span className="italic text-primary">specialità.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {specialty.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:scale-150" />
              <Icon className="relative h-8 w-8 text-primary" />
              <h3 className="relative mt-6 font-display text-2xl text-foreground">{title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="relative mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.22em] text-primary">
                Scopri <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rope-divider" />

      {/* BOTTEGA INTRO */}
      <section id="bottega" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
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
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— La bottega</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Macelleria e <span className="italic text-primary">paninoteca.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Salumée è una piccola macelleria-paninoteca a Claro. Trovi il
              banco carne, i prodotti del giorno e la possibilità di fermarti
              per un panino caldo.
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
                <Instagram className="h-4 w-4" /> @salumee.bellinzona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX VILLAGE */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={claroImg}
          alt="Il paese di Claro in Ticino"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/80" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <div className="butcher-tag inline-flex items-center gap-2 rounded-sm bg-cream px-4 py-1.5 pl-5 text-[11px] font-semibold uppercase tracking-[0.28em]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Cuore del Ticino
          </div>
          <h2 className="mt-6 font-display text-5xl leading-tight drop-shadow-2xl sm:text-7xl">
            Una bottega <span className="italic text-ochre">di paese.</span>
          </h2>
          <p className="mt-4 max-w-xl text-cream/80">
            Tra montagne e valli, una macelleria che è punto di ritrovo per la comunità.
          </p>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="kraft-dark text-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-cream/60">— Recensioni Google</div>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-ochre text-ochre" />
              ))}
            </div>
            <div className="mt-3 font-display text-3xl">5,0 · 4 recensioni</div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-ochre text-ochre" />
                  ))}
                </div>
                {r.silent ? (
                  <p className="mt-4 text-sm italic text-cream/50">Recensione 5 stelle senza testo</p>
                ) : (
                  <p className="mt-4 font-display text-lg italic leading-snug">"{r.text}"</p>
                )}
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cream/50">
                  <span>{r.author}</span>
                  <span>{r.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— Vieni a trovarci</div>
        <h2 className="mt-4 max-w-2xl font-display text-4xl text-foreground sm:text-5xl">
          Una porta aperta, <span className="italic text-primary">a Claro.</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl text-foreground">Indirizzo</h3>
              </div>
              <p className="mt-3 text-base text-muted-foreground">
                Ala Ca Comunál 27<br />6702 Claro, Ticino
              </p>
              <a
                href="https://maps.google.com/?q=Ala+Ca+Comunal+27,+6702+Claro"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Navigation className="h-4 w-4" /> Indicazioni stradali
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl text-foreground">Orari</h3>
              </div>
              <ul className="mt-4 divide-y divide-border text-sm">
                {orari.map(({ g, o }) => {
                  const closed = o === "Chiuso";
                  return (
                    <li key={g} className="flex items-center justify-between py-2.5">
                      <span className="font-medium text-foreground">{g}</span>
                      <span className={closed ? "italic text-muted-foreground" : "text-foreground"}>{o}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mappa Macelleria Salumée Claro"
                src="https://www.google.com/maps?q=Ala+Ca+Comunal+27,+6702+Claro&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-charcoal text-cream">
        <div className="apron-stripes-thin h-2 opacity-70" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <div className="font-display text-xl">Salumée Claro</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">Macelleria · Paninoteca</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream/70">
              Bottega artigiana a Claro. Carne, salumi e panini.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Contatti</div>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>Ala Ca Comunál 27, 6702 Claro</li>
              <li><a href="tel:+41912908455" className="hover:text-ochre">091 290 84 55</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Altre sedi</div>
            <Link to="/bellinzona" className="mt-4 inline-flex items-center gap-2 text-sm hover:text-ochre">
              Salumée Bellinzona <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <br />
            <Link to="/" className="mt-2 inline-flex items-center gap-2 text-sm text-cream/60 hover:text-ochre">
              <ArrowLeft className="h-3.5 w-3.5" /> Torna alla scelta
            </Link>
          </div>
        </div>
        <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Salumée · Claro
        </div>
      </footer>
    </div>
  );
}
