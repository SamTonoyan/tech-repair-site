import Image from "next/image";
import type { Service } from "@/data/services";
import { iconMap } from "@/lib/icons";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon ? iconMap[service.icon] : undefined;

  return (
    <article
      data-service-card
      className="group grid min-h-[390px] grid-rows-[auto_1fr_auto] border border-ink/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-soft"
    >
      <div className="flex items-center justify-between gap-5">
        <div className="grid h-12 w-12 place-items-center bg-cream text-ink">
          {Icon ? <Icon aria-hidden size={24} /> : null}
        </div>
        {service.price ? (
          <p className="text-right text-sm font-semibold text-steel">{service.price}</p>
        ) : null}
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-4 text-base leading-7 text-ink/64">{service.description}</p>
      </div>

      {service.image ? (
        <div className="mt-8 overflow-hidden border border-ink/8 bg-cream">
          <Image
            src={service.image}
            alt=""
            width={560}
            height={240}
            className="h-32 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
    </article>
  );
}
