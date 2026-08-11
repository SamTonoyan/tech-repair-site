export interface OpeningHour {
  day: string;
  hours: string;
  open: boolean;
}

export const openingHours: OpeningHour[] = [
  { day: "Lundi", hours: "09:00 - 18:30", open: true },
  { day: "Mardi", hours: "09:00 - 18:30", open: true },
  { day: "Mercredi", hours: "09:00 - 18:30", open: true },
  { day: "Jeudi", hours: "09:00 - 18:30", open: true },
  { day: "Vendredi", hours: "09:00 - 18:30", open: true },
  { day: "Samedi", hours: "10:00 - 16:00", open: true },
  { day: "Dimanche", hours: "Ferme", open: false },
];
