"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#accueil"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
          aria-label="Retour a l'accueil"
        >
          <Image
              src="/images/logo.svg"
              alt={siteConfig.name}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              />
          <Image
              src="/images/fullogo.svg"
              alt={siteConfig.name}
              width={150}
              height={45}
              className="h-10 w-auto object-contain"
              />
          <span className="leading-none">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-white">
              {siteConfig.name}
            </span>
            <span className="mt-1 block text-xs text-white/55">{siteConfig.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/68 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="hidden min-h-10 items-center border border-white/12 px-4 text-sm font-semibold text-white transition hover:border-mint/60 hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint md:inline-flex"
        >
          Appeler
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-white/14 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-ink px-5 py-5 md:hidden"
          aria-label="Navigation mobile"
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block min-h-11 px-1 py-3 text-base font-medium text-white/78 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappHref}
              className="mt-3 inline-flex min-h-12 items-center justify-center bg-mint px-5 text-sm font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
