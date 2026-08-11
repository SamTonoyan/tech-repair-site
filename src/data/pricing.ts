export interface PriceItem {
  id: string;
  label: string;
  description: string;
  price: string;
  visible: boolean;
}

export const pricing: PriceItem[] = [
  {
    id: "diagnostic-ordinateur",
    label: "Diagnostic ordinateur",
    description: "Nous cherchons la cause du probleme et vous expliquons les options.",
    price: "20 EUR",
    visible: true,
  },
  {
    id: "installation-windows",
    label: "Installation Windows",
    description: "Installation propre, reglages essentiels et verification du demarrage.",
    price: "40 EUR",
    visible: true,
  },
  {
    id: "nettoyage-pc",
    label: "Nettoyage PC",
    description: "Nettoyage logiciel pour rendre l'utilisation plus fluide.",
    price: "30 EUR",
    visible: true,
  },
  {
    id: "installation-ssd",
    label: "Installation SSD",
    description: "Remplacement ou ajout d'un disque rapide selon votre appareil.",
    price: "A partir de 50 EUR",
    visible: true,
  },
  {
    id: "reparation-telephone",
    label: "Reparation telephone",
    description: "Verification du probleme avant commande de pieces si necessaire.",
    price: "Sur devis",
    visible: true,
  },
  {
    id: "recuperation-donnees",
    label: "Recuperation de donnees",
    description: "Analyse de la situation et estimation avant intervention.",
    price: "Sur devis",
    visible: true,
  },
];
