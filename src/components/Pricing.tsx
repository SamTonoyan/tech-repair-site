import { pricing } from "@/data/pricing";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  const visiblePrices = pricing.filter((item) => item.visible);

  return (
    <section id="tarifs" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des prix indicatifs pour vous aider a decider."
          description="Les prix exacts dependent parfois de l'etat de l'appareil et des pieces necessaires. Nous confirmons toujours avant intervention."
        />
        <div data-reveal className="mt-12 overflow-hidden border border-ink/10">
          {visiblePrices.map((item) => (
            <div
              key={item.id}
              className="grid gap-3 border-b border-ink/10 p-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink">{item.label}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/58">{item.description}</p>
              </div>
              <p className="text-xl font-semibold text-ink sm:text-right">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
