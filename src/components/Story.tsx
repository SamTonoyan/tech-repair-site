const steps = [
  "Votre ordinateur est lent ou ne demarre plus.",
  "Nous trouvons la cause du probleme.",
  "Nous vous expliquons la solution et le prix.",
  "Vous repartez avec un appareil pret a utiliser.",
];

export function Story() {
  return (
    <section id="methode" className="bg-ink px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div data-reveal className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-mint">
            Methode
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Une intervention qui reste simple du debut a la fin.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
            Notre objectif ne consiste pas de vous impressionner avec des mots compliques.
            Notre objectif est que vous compreniez ce qui se passe et ce que vous payez.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px bg-white/14" />
          <div
            data-story-line
            className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px scale-y-0 bg-mint"
          />
          <ol className="grid gap-10">
            {steps.map((step, index) => (
              <li key={step} data-story-step className="relative pl-12">
                <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center border border-mint/50 bg-ink text-sm font-bold text-mint">
                  {index + 1}
                </span>
                <p className="max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
