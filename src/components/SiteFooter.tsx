import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo-salumee.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Macelleria Salumée Claro"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <div className="font-display text-xl">Macelleria Salumée</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">
                Macelleria · Paninoteca · Claro
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
            Macelleria-Paninoteca a Claro, in Ticino. Passa in bottega o
            seguici online per scoprire i prodotti del giorno.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/salumee.bellinzona/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs text-cream/80 hover:border-accent hover:text-accent"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
            <a
              href="https://www.threads.com/@salumee.bellinzona"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs text-cream/80 hover:border-accent hover:text-accent"
            >
              Threads
            </a>
            <a
              href="https://www.local.ch/it/d/bellinzona/6500/macelleria/salumee-_wnwBOyAlGmtPtxbLmyxsQ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs text-cream/80 hover:border-accent hover:text-accent"
            >
              local.ch
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Bottega</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/specialita" className="hover:text-accent">Specialità</Link></li>
            <li><Link to="/chi-siamo" className="hover:text-accent">Chi siamo</Link></li>
            <li><Link to="/contatti" className="hover:text-accent">Contatti</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cream/50">Contatti</div>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>Ala Ca Comunál 27</li>
            <li>6702 Claro, TI</li>
            <li>
              <a href="tel:+41912908455" className="hover:text-accent">
                091 290 84 55
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-cream/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>© {new Date().getFullYear()} Macelleria Salumée · Claro</div>
          <div className="font-display italic">Macelleria · Paninoteca</div>
        </div>
      </div>
    </footer>
  );
}
