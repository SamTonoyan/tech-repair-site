import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { TechVisual } from "./TechVisual";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate min-h-screen overflow-hidden bg-ink pt-28 text-white sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_18%,rgba(78,221,183,0.17),transparent_28%),linear-gradient(180deg,#08110f_0%,#101719_62%,#f5f3ee_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p data-reveal className="text-sm font-semibold uppercase tracking-[0.22em] text-mint">
            Service local clair et professionnel
          </p>
          <h1
            data-reveal
            className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] text-balance sm:text-6xl lg:text-7xl"
          >
            Votre technologie fonctionne. Nous nous occupons du reste.
          </h1>
          <p
            data-reveal
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
          >
            Ordinateur lent, telephone casse, imprimante bloquee ou installation compliquee :
            nous expliquons simplement le probleme, le prix et la solution.
          </p>
          <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-mint px-6 text-sm font-bold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              {siteConfig.ctaPrimary}
              <ArrowRight aria-hidden size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/18 px-6 text-sm font-bold text-white transition hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              {siteConfig.ctaSecondary}
            </a>
          </div>
          <ul data-reveal className="mt-9 grid gap-3 text-sm text-white/68 sm:grid-cols-3">
            {["Prix expliques avant intervention", "Aide sans jargon", "Contact rapide par telephone"].map(
              (item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 text-mint" aria-hidden size={17} />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div data-hero-visual className="lg:justify-self-end">

  <Image
    src="/images/fullogo.svg"
    alt="BYTTEC"
    width={220}
    height={70}
    className="mb-6 h-auto w-[220px] object-contain"
  />

  <TechVisual />

</div>
      </div>
    </section>
  );
}
