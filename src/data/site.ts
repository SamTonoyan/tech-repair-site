export const siteConfig = {
  name: "BytTec",
  tagline: "Reparation informatique, telephone et imprimante",
  description:
    "Un service local, clair et professionnel pour reparer vos appareils, installer vos logiciels et vous aider sans jargon.",
  phone: "06 98 42 12 00",
  phoneHref: "tel:+33698421200",
  whatsapp: "0698421200 ",
  whatsappHref: "https://wa.me/33698421200",
  email: "contact@byttec.fr",
  emailHref: "mailto:contact@example.fr",
  address: "Revel,31250",
  mapsHref: "https://www.google.com/maps/place/Revel/@43.4678912,1.9974716,13z/data=!3m1!4b1!4m6!3m5!1s0x12ae42a2496cd347:0xee74693e5c3e68a2!8m2!3d43.458611!4d2.004573!16zL20vMGNzc2x3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D",
  city: "Revel",
  ctaPrimary: "Voir nos services",
  ctaSecondary: "Nous contacter",
  replacementNote:
    "PLACEHOLDER: remplacez ces informations par les coordonnees reelles de votre entreprise.",
} as const;

export const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "A propos", href: "#a-propos" },
  { label: "Horaires", href: "#horaires" },
  { label: "Contact", href: "#contact" },
] as const;
