import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import artigianoImg from "@/assets/artigiano.jpg";
import heroImg from "@/assets/hero-macelleria.jpg";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi siamo — Macelleria Salumée Claro" },
      {
        name: "description",
        content:
          "La storia della Macelleria Salumée: una bottega artigiana a Claro, dove tradizione ticinese e cura delle materie prime si incontrano da oltre trent'anni.",
      },
      { property: "og:title", content: "Chi siamo — Macelleria Salumée" },
      {
        property: "og:description",
        content: "La storia di una piccola macelleria-paninoteca nel cuore del Ticino.",
      },
    ],
  }),
  component: ChiSiamoPage,
});

const valori = [
  {
    n: "01",
    t: "Materie prime locali",
    d: "Lavoriamo con allevatori e produttori della regione. Sappiamo da dove viene ogni pezzo che vendiamo.",
  },
  {
    n: "02",
    t: "Lavorazione a mano",
    d: "Salatura, legatura, taglio: ogni gesto è ancora artigianale, come ci hanno insegnato.",
  },
  {
    n: "03",
    t: "Tempo giusto",
    d: "Le stagionature non si accorciano. Aspettare è parte della ricetta.",
  },
  {
    n: "04",
    t: "Rapporto diretto",
    d: "Un consiglio sul taglio, una ricetta per la cena: la bottega è anche conversazione.",
  },
];

function ChiSiamoPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — La nostra storia
            </div>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Una bottega,
              <br />
              <span className="italic text-primary">una famiglia,</span>
              <br />
              tre generazioni.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Salumée nasce a Claro come piccola macelleria di paese. Negli anni
              è cresciuta diventando anche paninoteca, ma il cuore è rimasto lo
              stesso: la cura del prodotto e il rispetto per chi lo mangia.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <img
              src={artigianoImg}
              alt="Le mani di un artigiano della Macelleria Salumée legano un salame con spago naturale"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Il valore di un{" "}
              <span className="italic text-primary">gesto antico.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                C'è un momento, in bottega, in cui le mani sanno meglio della
                testa. È quando si lega un salame, si affina un coltello, si
                sceglie il taglio giusto da consigliare al cliente.
              </p>
              <p>
                Quel momento, per noi, vale più di qualsiasi tecnologia. È il
                motivo per cui continuiamo a fare le cose come vent'anni fa:
                con calma, con pazienza, con passione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <h2 className="max-w-2xl font-display text-4xl text-foreground sm:text-5xl">
            I valori che ci{" "}
            <span className="italic text-primary">guidano.</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valori.map((v) => (
              <div
                key={v.n}
                className="border-t border-border pt-6"
              >
                <div className="font-display text-2xl italic text-accent">{v.n}</div>
                <h3 className="mt-3 font-display text-xl text-foreground">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">
            Vieni a{" "}
            <span className="italic text-primary">conoscerci.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Il modo migliore per capire chi siamo è varcare la porta della
            bottega. Ti aspettiamo a Claro.
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
            src={heroImg}
            alt="Banco di salumi della Macelleria Salumée"
            loading="lazy"
            className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>
    </PageShell>
  );
}
