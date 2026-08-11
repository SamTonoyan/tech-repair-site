import { services } from "@/data/services";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  const visibleServices = services.filter((service) => service.visible);

  return (
    <section id="services" className="bg-cream px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Des reparations et reglages expliques clairement."
          description="Chaque intervention commence par une verification simple. Vous savez ce que nous faisons, pourquoi nous le faisons et combien cela peut couter."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
