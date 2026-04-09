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
      { id: "ice-maker", title: "Ice Maker Repair", href: "/services/ice-maker", description: "Fixing leaks, jams, and production issues." },
      { id: "freezer", title: "Freezer Repair", href: "/services/freezer", description: "Frost buildup and temperature control fixes." },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen Appliances",
    items: [
      { id: "oven-repair", title: "Oven & Range Repair", href: "/services/oven", description: "Calibrating heat and fixing ignition systems." },
      { id: "dishwasher", title: "Dishwasher Repair", href: "/services/dishwasher", description: "Draining and cleaning cycle restoration." },
      { id: "microwave", title: "Microwave Repair", href: "/services/microwave", description: "Magnetron and door sensor replacements." },
    ],
  },
  {
    id: "laundry",
    title: "Laundry Systems",
    items: [
      { id: "washer-repair", title: "Washer Repair", href: "/services/washer", description: "Drum balance and pump troubleshooting." },
      { id: "dryer-repair", title: "Dryer Repair", href: "/services/dryer", description: "Heating element and vent cleaning." },
    ],
  },
  {
    id: "hvac",
    title: "Climate Control",
    items: [
      { id: "ac-repair", title: "AC Repair", href: "/services/ac", description: "Refrigerant recharge and fan motor fix." },
      { id: "hvac-main", title: "HVAC Maintenance", href: "/services/hvac", description: "Seasonal tune-ups for peak performance." },
    ],
  },
];
