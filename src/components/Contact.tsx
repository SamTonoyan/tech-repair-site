import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type React from "react";
import { openingHours } from "@/data/hours";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-5 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-mint">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-balance sm:text-5xl">
            Expliquez-nous le probleme. Nous vous guidons.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/64">
            Un appel ou un message suffit pour commencer. Dites simplement quel appareil
            pose probleme et ce que vous voyez a l ecran.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-mint px-6 text-sm font-bold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              <Phone aria-hidden size={18} />
              Appeler maintenant
            </a>
            <a
              href={siteConfig.whatsappHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/18 px-6 text-sm font-bold text-white transition hover:border-mint/60 hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              <MessageCircle aria-hidden size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        <div data-reveal className="grid gap-4">
          <ContactLine icon={<Phone aria-hidden size={20} />} label="Telephone" href={siteConfig.phoneHref}>
            {siteConfig.phone}
          </ContactLine>
          <ContactLine icon={<Mail aria-hidden size={20} />} label="Email" href={siteConfig.emailHref}>
            {siteConfig.email}
          </ContactLine>
          <ContactLine icon={<MapPin aria-hidden size={20} />} label="Adresse" href={siteConfig.mapsHref}>
            {siteConfig.address}
          </ContactLine>
          <div className="border border-white/12 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mint">
              Aujourd hui
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {openingHours[0]?.hours}
            </p>
            <a
              href={siteConfig.mapsHref}
              className="mt-5 inline-flex text-sm font-semibold text-mint underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              Ouvrir Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactLineProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  children: React.ReactNode;
}

function ContactLine({ icon, label, href, children }: ContactLineProps) {
  return (
    <a
      href={href}
      className="group grid grid-cols-[auto_1fr] gap-4 border border-white/12 p-5 transition hover:border-mint/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
    >
      <span className="mt-1 text-mint">{icon}</span>
      <span>
        <span className="block text-sm font-bold uppercase tracking-[0.16em] text-white/45">
          {label}
        </span>
        <span className="mt-1 block text-lg font-semibold text-white group-hover:text-mint">
          {children}
        </span>
      </span>
    </a>
  );
}
