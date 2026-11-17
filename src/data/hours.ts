export interface OpeningHour {
  day: string;
  hours: string;
  open: boolean;
}

export const openingHours: OpeningHour[] = [
  { day: "Lundi", hours: "Ferme", open: false },
  { day: "Mardi", hours: "10:00 - 12:00 / 14:30 - 18:00", open: true },
  { day: "Mercredi", hours: "10:00 - 12:00 / 14:30 - 18:00", open: true },
  { day: "Jeudi", hours: "10:00 - 12:00 / 14:30 - 18:00", open: true },
  { day: "Vendredi", hours: "10:00 - 12:00 / 14:30 - 18:00", open: true },
  { day: "Samedi", hours: "10:00 - 12:00", open: true },
  { day: "Dimanche", hours: "Ferme", open: false },
];
