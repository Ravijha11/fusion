export interface ServiceItem {
  id: string;
  title: string;
  href: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "refrigerator",
    title: "Refrigeration",
    items: [
      { id: "ref-repair", title: "Refrigerator Repair", href: "/services/refrigerator", description: "Complete diagnosis and cooling restoration." },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen Appliances",
    items: [
      { id: "oven-repair", title: "Oven & Range Repair", href: "/services/oven-range", description: "Calibrating heat and fixing ignition systems." },
      { id: "dishwasher", title: "Dishwasher Repair", href: "/services/dishwasher", description: "Draining and cleaning cycle restoration." },
      { id: "microwave", title: "Microwave Repair", href: "/services/microwave", description: "Magnetron and door sensor replacements." },
    ],
  },
  {
    id: "laundry",
    title: "Laundry Systems",
    items: [
      { id: "washer-repair", title: "Washer Repair", href: "/services/washing-machine", description: "Drum balance and pump troubleshooting." },
      { id: "dryer-repair", title: "Dryer Repair", href: "/services/dryer", description: "Heating element and vent cleaning." },
    ],
  },
  {
    id: "climate",
    title: "Climate Control",
    items: [
      { id: "ac-repair", title: "AC Repair", href: "/services/air-conditioner", description: "Refrigerant recharge and fan motor fix." },
    ],
  },
];
