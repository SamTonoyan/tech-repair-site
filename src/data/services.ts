export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon?: string;
  image?: string;
  visible: boolean;
}

export const services: Service[] = [
  {
    id: "ordinateurs",
    title: "Ordinateurs",
    description:
      "Nous trouvons pourquoi votre ordinateur est lent, bloque ou ne demarre plus, puis nous vous expliquons la solution simplement.",
    price: "Diagnostic 20 EUR",
    icon: "Laptop",
    image: "/images/services/ordinateurs.svg",
    visible: true,
  },
  {
    id: "telephones",
    title: "Telephones",
    description:
      "Ecran casse, batterie fatiguee, probleme de charge ou telephone bloque : nous verifions ce qui est possible avant toute reparation.",
    price: "Sur devis",
    icon: "Smartphone",
    image: "/images/services/telephones.svg",
    visible: true,
  },
  {
    id: "imprimantes",
    title: "Imprimantes",
    description:
      "Nous aidons a remettre votre imprimante en service, la connecter au Wi-Fi et resoudre les impressions bloquees.",
    price: "A partir de 25 EUR",
    icon: "Printer",
    image: "/images/services/imprimantes.svg",
    visible: true,
  },
  {
    id: "installation-configuration",
    title: "Installation & configuration",
    description:
      "Nous installons Windows, vos logiciels essentiels, votre messagerie, votre Wi-Fi et vos appareils pour que tout soit pret a utiliser.",
    price: "A partir de 40 EUR",
    icon: "Settings",
    image: "/images/services/installation.svg",
    visible: true,
  },
  {
    id: "recuperation-donnees",
    title: "Recuperation de donnees",
    description:
      "Photos, documents, fichiers importants : nous verifions les options de recuperation et vous indiquons clairement les chances de reussite.",
    price: "Sur devis",
    icon: "HardDrive",
    image: "/images/services/donnees.svg",
    visible: true,
  },
  {
    id: "assistance",
    title: "Assistance informatique",
    description:
      "Besoin d'aide pour comprendre un message d'erreur, proteger votre appareil ou utiliser un service en ligne ? Nous vous accompagnons pas a pas.",
    price: "A partir de 30 EUR",
    icon: "Handshake",
    image: "/images/services/assistance.svg",
    visible: true,
  },
];
