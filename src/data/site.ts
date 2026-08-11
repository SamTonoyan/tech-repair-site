export const siteConfig = {
  name: "YOUR BUSINESS NAME",
  tagline: "Reparation informatique, telephone et imprimante",
  description:
    "Un service local, clair et professionnel pour reparer vos appareils, installer vos logiciels et vous aider sans jargon.",
  phone: "06 XX XX XX XX",
  phoneHref: "tel:+33600000000",
  whatsapp: "06 XX XX XX XX",
  whatsappHref: "https://wa.me/33600000000",
  email: "contact@example.fr",
  emailHref: "mailto:contact@example.fr",
  address: "YOUR ADDRESS, 75000 Paris",
  mapsHref: "https://maps.google.com/?q=YOUR%20ADDRESS%2075000%20Paris",
  city: "Paris",
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
