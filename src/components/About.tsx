import Image from "next/image";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="a-propos" className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div data-reveal className="overflow-hidden border border-ink/10 bg-white p-4">
          <Image
            src="/images/about/workbench.svg"
            alt="Illustration d'un espace de travail de reparation"
            width={900}
            height={720}
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-steel">
            A propos
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Un service humain pour des problemes du quotidien.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/64">
            {siteConfig.name} aide les particuliers et petites entreprises a remettre leurs
            appareils en etat, configurer leurs outils et comprendre les bonnes decisions a
            prendre.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Clair", "Nous expliquons sans jargon."],
              ["Prudent", "Nous validons avant d'agir."],
              ["Local", `Service situe a ${siteConfig.city}.`],
            ].map(([title, text]) => (
              <div key={title} className="border-l border-ink/14 pl-4">
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
