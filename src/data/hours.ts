export interface OpeningHour {
  day: string;
  hours: string;
  open: boolean;
}

export const openingHours: OpeningHour[] = [
  { day: "Lundi", hours: "Ferme", open: false },
  { day: "Mardi", hours: "10:00 - 12:30 / 14:30 - 18:30", open: true },
  { day: "Mercredi", hours: "10:00 - 12:30 / 14:30 - 18:30", open: true },
  { day: "Jeudi", hours: "10:00 - 12:30 / 14:30 - 18:30", open: true },
  { day: "Vendredi", hours: "10:00 - 12:30 / 14:30 - 18:30", open: true },
  { day: "Samedi", hours: "9:30 - 12:30", open: true },
  { day: "Dimanche", hours: "Ferme", open: false },
];
