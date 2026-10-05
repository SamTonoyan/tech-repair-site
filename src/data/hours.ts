export interface OpeningHour {
  day: string;
  hours: string;
  open: boolean;
}

export const openingHours: OpeningHour[] = [
  { day: "Lundi", hours: "Ferme", open: false },
  { day: "Mardi", hours: "09:30 - 12:00 / 14:30 - 18:30", open: true },
  { day: "Mercredi", hours: "09:30 - 12:00 / 14:30 - 18:30", open: true },
  { day: "Jeudi", hours: "09:30 - 12:00 / 14:30 - 18:30", open: true },
  { day: "Vendredi", hours: "09:30 - 12:00 / 14:30 - 18:30", open: true },
  { day: "Samedi", hours: "10:00 - 12:30", open: true },
  { day: "Dimanche", hours: "Ferme", open: false },
];
