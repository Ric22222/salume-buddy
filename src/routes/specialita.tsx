import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import salumiImg from "@/assets/salumi.jpg";
import paninoImg from "@/assets/panino.jpg";
import artigianoImg from "@/assets/artigiano.jpg";

export const Route = createFileRoute("/specialita")({
  head: () => ({
    meta: [
      { title: "Specialità — Macelleria Salumée Claro" },
      {
        name: "description",
        content:
          "Salumi della casa, carni selezionate e panini d'autore: scopri le specialità della Macelleria Salumée a Claro.",
      },
      { property: "og:title", content: "Specialità — Macelleria Salumée" },
      {
        property: "og:description",
        content: "Salumi stagionati, carni e panini artigianali nel cuore del Ticino.",
      },
    ],
  }),
  component: SpecialitaPage,
});

const sections = [
  {
    eyebrow: "Salumi",
    title: "Stagionati nella nostra cantina",
    img: salumiImg,
    text: "Coppa, salametti, bresaola e mortadelle nostrane. Ricette di famiglia, tempi lunghi e materie prime selezionate. Ogni pezzo viene curato a mano, dalla salatura alla legatura con spago naturale.",
    items: [
      "Coppa stagionata 90 giorni",
      "Salametti nostrani",
      "Bresaola della Valle",
      "Mortadella di fegato",
    ],
  },
  {
    eyebrow: "Paninoteca",
    title: "Il pranzo, fatto bene",
    img: paninoImg,
    text: "Pane fresco ogni mattina, salumi tagliati al momento, verdure di stagione. La nostra paninoteca è la pausa pranzo che cerchi: veloce, ma con il rispetto dell'artigianato.",
    items: [
      "Panino con coppa & rucola",
      "Bresaola, grana e limone",
      "Salametto e cetriolini",
      "Veggie di stagione",
    ],
  },
  {
    eyebrow: "Banco carni",
    title: "Selezione del territorio",
    img: artigianoImg,
    text: "Lavoriamo con allevatori della regione che condividono il nostro modo di fare. Tagli classici, frollature attente e tutti i consigli per portare a casa il meglio.",
    items: [
      "Manzo ticinese frollato",
      "Vitello di latte",
      "Pollo ruspante",
      "Tagli per grigliata e brasato",
    ],
  },
];

function SpecialitaPage() {
  return (
    <PageShell>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Le nostre specialità
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Dal banco al piatto,{" "}
            <span className="italic text-primary">solo cose buone.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tre mondi diversi sotto lo stesso tetto: salumi della casa, carni
            selezionate e una paninoteca per la pausa di mezzogiorno.
          </p>
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
                <ul className="mt-8 space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-border/60 pb-3 text-sm text-foreground"
                    >
                      <span className="font-display text-xs italic text-accent">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
