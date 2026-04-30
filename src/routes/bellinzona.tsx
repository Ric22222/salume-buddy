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
  Sandwich,
  Utensils,
  Heart,
  MessageCircle,
} from "lucide-react";
import focacciaImg from "@/assets/focaccia-porchetta.jpg";
import bottegaImg from "@/assets/bottega-bellinzona.jpg";
import castelloImg from "@/assets/bellinzona-castello.jpg";
import logo from "@/assets/logo-salumee.png";

export const Route = createFileRoute("/bellinzona")({
  head: () => ({
    meta: [
      { title: "Salumée Bellinzona — Salumeria & Paninoteca a Bellinzona" },
      {
        name: "description",
        content:
          "Salumée Bellinzona: salumi italiani, focacce ripiene e panini d'autore. Viale Stazione 14a, 6500 Bellinzona. 4.9★ · 64 recensioni Google.",
      },
      { property: "og:title", content: "Salumée Bellinzona — Salumeria & Paninoteca" },
      {
        property: "og:description",
        content: "Focacce ripiene di porchetta, finocchiona e bufala. A 200m dalle mura del castello.",
      },
      { property: "og:image", content: "/src/assets/focaccia-porchetta.jpg" },
    ],
  }),
  component: BellinzonaPage,
});

const orari = [
  { g: "Lunedì", o: "09:30 – 15:30" },
  { g: "Martedì", o: "09:30 – 15:30" },
  { g: "Mercoledì", o: "09:30 – 17:30" },
  { g: "Giovedì", o: "09:30 – 15:30" },
  { g: "Venerdì", o: "09:30 – 17:30" },
  { g: "Sabato", o: "09:30 – 15:00" },
  { g: "Domenica", o: "Chiuso" },
];

const reviews = [
  {
    when: "5 mesi fa",
    text: "Super gentili e disponibili!! Panini super buoni, per poi non parlare della chinoise tagliata al coltello! Bravi!!",
    author: "Cliente Google",
  },
  {
    when: "un anno fa",
    text: "Vuoi un panino o una focaccia stra-buona? Ecco il posto che cerchi. Bancone pieno di salumi, musica in sottofondo e personale gentile. La focaccia con Finocchiona Toscana, Bufala e tarallo sbriciolato: buonissima!",
    author: "Cliente Google",
  },
  {
    when: "un anno fa",
    text: "Ottimo posto a Bellinzona dove trovi molti salumi e prelibatezze italiane. La focaccia con la porchetta di Ariccia è buonissima. Lo staff è molto gentile e il servizio top.",
    author: "Cliente Google",
  },
];

const focacce = [
  { nome: "Porchetta di Ariccia", desc: "La regina della casa. Lonza profumata, crosta croccante.", tag: "Best seller" },
  { nome: "Finocchiona Toscana", desc: "Salume al finocchio, bufala intera, tarallo sbriciolato." },
  { nome: "Chinoise al coltello", desc: "Tagliata fresca al momento. Esperienza di sala." },
  { nome: "Mortadella & Pistacchio", desc: "Mortadella di Bologna IGP e granella di pistacchio." },
];

function BellinzonaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <Link to="/bellinzona" className="flex items-center gap-3">
            <img src={logo} alt="Logo Salumée Bellinzona" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold text-foreground">Salumée</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Salumeria · Bellinzona</div>
            </div>
          </Link>
          <a
            href="https://wa.me/41764990322"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 transition-transform md:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <a
            href="tel:+41764990322"
            className="rounded-full bg-primary p-3 text-primary-foreground md:hidden"
            aria-label="Chiama"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-6 overflow-x-auto px-6 pb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
          <a href="#bottega" className="hover:text-primary">Bottega</a>
          <span className="text-border">·</span>
          <a href="#focacce" className="hover:text-primary">Focacce</a>
          <span className="text-border">·</span>
          <a href="#recensioni" className="hover:text-primary">Recensioni</a>
          <span className="text-border">·</span>
          <a href="#contatti" className="hover:text-primary">Contatti</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Decorative side stripes */}
        <div className="apron-stripes absolute left-0 top-0 hidden h-full w-3 opacity-90 md:block" />
        <div className="apron-stripes absolute right-0 top-0 hidden h-full w-3 opacity-90 md:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-20">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="butcher-tag inline-flex items-center gap-2 rounded-sm px-4 py-1.5 pl-5 text-[11px] font-semibold uppercase tracking-[0.28em]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Sede di Bellinzona · 6500
              </div>
              <div className="inline-flex items-center gap-1 rounded-sm bg-charcoal px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-cream">
                <Star className="h-3 w-3 fill-ochre text-ochre" /> 4.9 · Google
              </div>
            </div>

            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Salumeria{" "}
              <span className="italic text-primary">Salumée</span>,
              <br /> a Bellinzona.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A 200 metri dalle mura del castello. Salumi italiani,
              <span className="italic text-primary"> focacce stra-buone</span>,
              porchetta di Ariccia, chinoise tagliata al coltello.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/41764990322"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Ordina su WhatsApp
              </a>
              <a
                href="tel:+41764990322"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> 076 499 03 22
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-border/60 pt-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ochre text-ochre" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4,9</span> · 64 recensioni Google
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border-2 border-primary/30 lg:block" />
              <img
                src={focacciaImg}
                alt="Focaccia ripiena di porchetta di Ariccia, finocchiona e bufala"
                width={1080}
                height={1600}
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-charcoal/10"
              />
              <div className="sticker absolute -bottom-5 -right-5 hidden h-32 w-32 items-center justify-center rounded-full border-2 border-primary bg-cream text-center font-display text-primary shadow-xl sm:flex">
                <div className="leading-tight">
                  <div className="text-[9px] uppercase tracking-[0.25em]">★ ★ ★ ★ ★</div>
                  <div className="text-2xl italic">4,9</div>
                  <div className="text-[8px] uppercase tracking-[0.22em]">64 Google</div>
                  <div className="text-[8px] uppercase tracking-[0.22em]">recensioni</div>
                </div>
              </div>
              <div className="absolute -left-3 top-8 rotate-[-6deg] bg-charcoal px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-cream shadow-lg">
                Specialità della casa
              </div>
              <div className="absolute -right-2 top-1/3 rotate-[8deg] bg-primary px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary-foreground shadow-lg">
                Porchetta di Ariccia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y-2 border-primary/30 bg-primary py-4 overflow-hidden text-primary-foreground">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 px-10 font-display text-2xl italic">
              <span>Porchetta di Ariccia</span><span>✦</span>
              <span>Finocchiona Toscana</span><span>✦</span>
              <span>Bufala Campana</span><span>✦</span>
              <span>Mortadella IGP</span><span>✦</span>
              <span>Chinoise al coltello</span><span>✦</span>
              <span>Salumi italiani</span><span>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK INFO */}
      <section className="border-b border-border/60 bg-secondary/40 grain">
        <div className="mx-auto grid max-w-7xl divide-y divide-border/60 px-6 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-10">
          {[
            { icon: MapPin, label: "Dove siamo", value: "Viale Stazione 14a, 6500 Bellinzona" },
            { icon: Clock, label: "Orari", value: "Lun–Sab · vedi orari sotto" },
            { icon: Phone, label: "Telefono", value: "076 499 03 22" },
            { icon: Utensils, label: "Delivery", value: "Ordini su Uber Eats" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 py-6 lg:px-6">
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

      {/* MENU FOCACCE */}
      <section id="focacce" className="marble">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— Il menu del giorno</div>
            <h2 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">
              Focacce <span className="italic text-primary">ripiene.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Pane caldo, salumi tagliati al momento, ingredienti italiani selezionati.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {focacce.map((f) => (
              <div key={f.nome} className="group relative overflow-hidden rounded-3xl border-2 border-charcoal/10 bg-cream p-8 transition-all hover:border-primary hover:shadow-2xl">
                {f.tag && (
                  <div className="sticker absolute right-4 top-4 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground">
                    {f.tag}
                  </div>
                )}
                <Sandwich className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-3xl text-foreground">{f.nome}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="mt-6 h-px w-full bg-charcoal/10" />
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  <span>Salumée Bellinzona</span>
                  <span className="text-primary">★★★★★</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-muted-foreground">
            Il menu varia. Per il dettaglio del giorno chiamaci o scrivici su WhatsApp.
          </p>
        </div>
      </section>

      {/* PARALLAX CASTELLO */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={castelloImg}
          alt="Castello di Bellinzona, Ticino"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/80" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <div className="butcher-tag inline-flex items-center gap-2 rounded-sm bg-cream px-4 py-1.5 pl-5 text-[11px] font-semibold uppercase tracking-[0.28em]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> A 200m dalle mura
          </div>
          <h2 className="mt-6 font-display text-5xl leading-tight drop-shadow-2xl sm:text-7xl">
            All'ombra del <span className="italic text-ochre">castello.</span>
          </h2>
          <p className="mt-4 max-w-xl text-cream/80">
            Passa dalle mura di Castelgrande, gira l'angolo e ti accoglie il profumo della focaccia.
          </p>
        </div>
      </section>

      {/* BOTTEGA */}
      <section id="bottega" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <img
              src={bottegaImg}
              alt="Interno della Salumeria Salumée a Bellinzona"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="sticker absolute -bottom-6 -left-6 hidden h-28 w-28 items-center justify-center rounded-full bg-charcoal text-center font-display text-cream shadow-xl md:flex">
              <div className="leading-tight">
                <div className="text-[9px] uppercase tracking-[0.22em] text-ochre">Bottega</div>
                <div className="text-xl italic">dal vivo</div>
                <div className="text-[9px] uppercase tracking-[0.22em] text-ochre">Bellinzona</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— La bottega</div>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Salumi italiani <span className="italic text-primary">e prelibatezze.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Bancone pieno di salumi, musica in sottofondo, personale gentile.
              Una piccola panchetta fuori per gustare il panino con una bibita
              fresca, dentro l'atmosfera calda di una vera salumeria italiana.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              C'è sempre un po' di fila a pranzo, ma viene smaltita rapidamente.
              I prezzi sono onesti per la quantità di salumi che farciscono la
              focaccia.
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
              <a
                href="https://www.ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                <Utensils className="h-4 w-4" /> Uber Eats
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="kraft-dark text-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-cream/60">— Recensioni Google</div>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-ochre text-ochre" />
              ))}
            </div>
            <div className="mt-3 font-display text-4xl">4,9 · 64 recensioni</div>
            <p className="mt-2 text-sm text-cream/60">Una delle salumerie più amate di Bellinzona</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-cream/10 bg-cream/5 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-ochre text-ochre" />
                    ))}
                  </div>
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-4 font-display text-base italic leading-relaxed">"{r.text}"</p>
                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cream/50">
                  <span>{r.author}</span>
                  <span>{r.when}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?q=Salumée+Bellinzona"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-xs uppercase tracking-[0.22em] text-cream hover:border-ochre hover:text-ochre"
            >
              Leggi tutte le recensioni <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">— Vieni a trovarci</div>
        <h2 className="mt-4 max-w-2xl font-display text-4xl text-foreground sm:text-5xl">
          Viale Stazione 14a, <span className="italic text-primary">Bellinzona.</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl text-foreground">Indirizzo</h3>
              </div>
              <p className="mt-3 text-base text-muted-foreground">
                Viale Stazione 14a<br />6500 Bellinzona, Ticino
              </p>
              <a
                href="https://maps.google.com/?q=Viale+Stazione+14a,+6500+Bellinzona"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Navigation className="h-4 w-4" /> Indicazioni stradali
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl text-foreground">Contatti</h3>
              </div>
              <a href="tel:+41764990322" className="mt-3 block font-display text-3xl text-foreground hover:text-primary">
                076 499 03 22
              </a>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/41764990322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-[0.22em] text-primary-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/salumee.bellinzona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.22em] text-foreground"
                >
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </a>
              </div>
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
              <p className="mt-3 text-xs italic text-muted-foreground">Gli orari possono variare nelle festività.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mappa Salumée Bellinzona"
                src="https://www.google.com/maps?q=Viale+Stazione+14a,+6500+Bellinzona&output=embed"
                width="100%"
                height="600"
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
                <div className="font-display text-xl">Salumée Bellinzona</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">Salumeria · Paninoteca</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream/70">
              Salumi italiani, focacce ripiene e prelibatezze. A 200 metri dalle mura del castello.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Contatti</div>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>Viale Stazione 14a, 6500 Bellinzona</li>
              <li><a href="tel:+41764990322" className="hover:text-ochre">076 499 03 22</a></li>
              <li><a href="https://wa.me/41764990322" className="hover:text-ochre">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Altre sedi</div>
            <Link to="/claro" className="mt-4 inline-flex items-center gap-2 text-sm hover:text-ochre">
              Salumée Claro <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <br />
            <Link to="/" className="mt-2 inline-flex items-center gap-2 text-sm text-cream/60 hover:text-ochre">
              <ArrowLeft className="h-3.5 w-3.5" /> Torna alla scelta
            </Link>
          </div>
        </div>
        <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Salumée · Bellinzona
        </div>
      </footer>
    </div>
  );
}
