import { Clock } from "lucide-react";
import { openingHours } from "@/data/hours";

export function OpeningHours() {
  return (
    <section id="horaires" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-steel">
            Horaires
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Passez ou contactez-nous pendant les heures ouverture.
          </h2>
        </div>
        <div data-reveal className="border border-ink/10">
          <div className="flex items-center gap-3 border-b border-ink/10 bg-cream p-5">
            <Clock aria-hidden className="text-steel" />
            <p className="font-semibold text-ink">Horaires indicatifs</p>
          </div>
          <div>
            {openingHours.map((item) => (
              <div
                key={item.day}
                className="grid grid-cols-[1fr_auto] gap-4 border-b border-ink/10 px-5 py-4 last:border-b-0"
              >
                <p className="font-medium text-ink">{item.day}</p>
                <p className={item.open ? "font-semibold text-ink" : "font-semibold text-ink/42"}>
                  {item.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
