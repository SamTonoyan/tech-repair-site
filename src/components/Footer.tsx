import { socialLinks } from "@/data/socials";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  const visibleSocials = socialLinks.filter((item) => item.visible);

  return (
    <footer className="bg-ink px-5 pb-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/52">
              {siteConfig.description}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white/72">Navigation</p>
              <div className="mt-3 grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-white/52 hover:text-mint">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white/72">Social</p>
              <div className="mt-3 grid gap-2">
                {visibleSocials.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-white/52 hover:text-mint">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/38">
          Placeholder website. Remplacez les informations avant publication.
        </p>
      </div>
    </footer>
  );
}
