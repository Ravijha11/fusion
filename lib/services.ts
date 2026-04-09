/**
 * Service definitions for Smart Pro
 * Each service has consistent data for SEO, content, and routing
 */

export interface ServiceData {
  slug: string
  name: string
  shortName: string
  description: string
  longDescription: string
  heroHeadline: string // Must match ad headline exactly
  startingPrice: string
  commonFaults: string[]
  steps: {
    title: string
    description: string
  }[]
  seoTitle: string
  seoDescription: string
  imagePrompts: {
    hero: string
    stepPanels: string[]
    icon: string
  }
}

export const services: ServiceData[] = [
  {
    slug: 'refrigerator',
    name: 'Refrigerator Repair',
    shortName: 'Refrigerator',
    description: 'Expert refrigerator repair for all makes and models. Same-day options when available.',
    longDescription:
      'We handle common refrigerator issues, from cooling problems to leaks and ice maker faults. We service major brands and confirm parts and scheduling before repairs begin.',
    heroHeadline: 'Refrigerator Repair — New York',
    startingPrice: '$89',
    commonFaults: [
      'Refrigerator not cooling properly',
      'Ice maker not working',
      'Water leaking on the floor',
      'Strange noises or humming',
      'Freezer not freezing',
      'Temperature fluctuations',
      'Door seal problems',
      'Light not turning on',
    ],
    steps: [
      { title: 'Book Online or Call', description: 'Schedule your visit in minutes. Same-day options may be available.' },
      { title: 'Diagnosis & Estimate', description: 'The technician diagnoses the issue and provides a written estimate before repairs begin.' },
      { title: 'Repair (If Approved)', description: 'If you approve the estimate, the technician completes the repair when possible.' },
    ],
    seoTitle: 'Refrigerator Repair — New York | Smart Pro',
    seoDescription:
      'Expert refrigerator repair service in New York. Same-day options when available. Qualified technicians (licensing where required). Starting at $89. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior woman smiling in kitchen while a friendly uniformed technician kneels repairing a stainless refrigerator, clear tools, bright natural light, US apartment, warm tones.',
      stepPanels: [
        'Senior calling on phone to book appliance repair, bright kitchen background',
        'Technician arriving at front door with toolbox, friendly greeting',
        'Fridge door open showing fixed interior, satisfied senior customer',
      ],
      icon: 'Close-up of fridge temperature dial with large readable label and green check mark, simple clean design.',
    },
  },
  {
    slug: 'washing-machine',
    name: 'Washing Machine Repair',
    shortName: 'Washer',
    description: 'Professional washing machine repair. Front-load and top-load models.',
    longDescription: 'From simple drum issues to complex motor problems, our technicians fix all washing machine brands. We carry common replacement parts for faster repairs.',
    heroHeadline: 'Washing Machine Repair — New York',
    startingPrice: '$79',
    commonFaults: [
      'Machine not spinning',
      'Water not draining',
      'Excessive vibration or shaking',
      'Machine not filling with water',
      'Door/lid won\'t lock',
      'Strange odors',
      'Leaking water',
      'Error codes displayed',
    ],
    steps: [
      { title: 'Book Online or Call', description: 'Schedule your visit in minutes. Same-day options may be available.' },
      { title: 'Diagnosis & Estimate', description: 'After diagnosis, you receive a written estimate for parts and labor before repairs begin.' },
      { title: 'Repair (If Approved)', description: 'If you approve the estimate, the technician proceeds with the repair based on parts availability.' },
    ],
    seoTitle: 'Washing Machine Repair — New York | Smart Pro',
    seoDescription:
      'Professional washing machine repair in New York. All brands serviced. Same-day options when available. Starting at $79. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior man watching technician fix front-load washer, technician shows part, laundry room tidy, friendly interaction, clear expressions.',
      stepPanels: [
        'Senior booking repair on tablet, laundry room background',
        'Technician diagnosing washing machine drum',
        'Washing machine spinning with Done label, happy customer',
      ],
      icon: 'Washing machine drum icon with simple Start button highlighted, clean minimal design.',
    },
  },
  {
    slug: 'dryer',
    name: 'Dryer Repair',
    shortName: 'Dryer',
    description: 'Fast dryer repair service. Gas and electric models.',
    longDescription: 'We repair all dryer types including gas, electric, and ventless models. Safety is our priority with proper ventilation checks included.',
    heroHeadline: 'Dryer Repair — New York',
    startingPrice: '$79',
    commonFaults: [
      'Dryer not heating',
      'Takes too long to dry',
      'Drum not turning',
      'Unusual noises',
      'Burning smell',
      'Dryer won\'t start',
      'Overheating',
      'Lint trap issues',
    ],
    steps: [
      { title: 'Book Your Repair', description: 'Easy online booking or call us directly.' },
      { title: 'Expert Inspection', description: 'Technician inspects all components including lint trap and vent.' },
      { title: 'Safe & Working', description: 'Your dryer runs efficiently and safely again.' },
    ],
    seoTitle: 'Dryer Repair — New York | Smart Pro',
    seoDescription:
      'Expert dryer repair in New York. Gas and electric models. Same-day options when available. Starting at $79. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior woman relieved as technician replaces dryer belt, dryer door open, lint trap visible, safe posture, bright laundry room.',
      stepPanels: [
        'Senior booking dryer repair service',
        'Technician inspects lint trap safely',
        'Dryer running with clothes dry',
      ],
      icon: 'Dryer control knob with Dry label and green check, simple design.',
    },
  },
  {
    slug: 'oven-range',
    name: 'Oven & Range Repair',
    shortName: 'Oven',
    description: 'Oven, range, and cooktop repair. Gas and electric.',
    longDescription: 'From burner issues to oven temperature problems, we fix all cooking appliances. Gas appliance repairs include safety checks.',
    heroHeadline: 'Oven & Range Repair — New York',
    startingPrice: '$89',
    commonFaults: [
      'Oven not heating',
      'Uneven cooking',
      'Burners not igniting',
      'Temperature inaccurate',
      'Self-clean not working',
      'Door won\'t close properly',
      'Strange smells',
      'Control panel issues',
    ],
    steps: [
      { title: 'Schedule Service', description: 'Book online or call to request the earliest available appointment.' },
      { title: 'Diagnosis & Estimate', description: 'The technician runs checks and provides a written estimate before repairs begin.' },
      { title: 'Repair (If Approved)', description: 'If approved, repairs are completed when possible; some jobs require parts ordering.' },
    ],
    seoTitle: 'Oven & Range Repair — New York | Smart Pro',
    seoDescription:
      'Professional oven and range repair in New York. Gas and electric. Same-day options when available. Starting at $89. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior couple watching technician test oven temperature with thermometer, kitchen stove in background, safety emphasis.',
      stepPanels: [
        'Senior calling to schedule oven repair',
        'Technician tests oven temperature safely',
        'Oven heating with delicious meal cooking',
      ],
      icon: 'Oven dial with Bake label and simple thermometer icon, clean design.',
    },
  },
  {
    slug: 'dishwasher',
    name: 'Dishwasher Repair',
    shortName: 'Dishwasher',
    description: 'Dishwasher repair for all major brands. Same-day options when available.',
    longDescription: 'We fix dishwashers that won\'t clean, won\'t drain, or have other issues. Most repairs completed in a single visit.',
    heroHeadline: 'Dishwasher Repair — New York',
    startingPrice: '$79',
    commonFaults: [
      'Dishes not getting clean',
      'Water not draining',
      'Leaking water',
      'Won\'t start',
      'Strange noises',
      'Door latch problems',
      'Soap dispenser issues',
      'Bad odors',
    ],
    steps: [
      { title: 'Book Repair', description: 'Schedule online or by phone. Same-day options may be available.' },
      { title: 'Diagnosis & Estimate', description: 'After diagnosis, you receive a written estimate for parts and labor before repairs begin.' },
      { title: 'Repair (If Approved)', description: 'If you approve the estimate, the technician completes the repair when possible.' },
    ],
    seoTitle: 'Dishwasher Repair — New York | Smart Pro',
    seoDescription:
      'Expert dishwasher repair in New York. All brands serviced. Same-day options when available. Starting at $79. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior woman smiling as technician replaces dishwasher spray arm, clean dishes visible, kitchen sink area tidy.',
      stepPanels: [
        'Senior booking dishwasher repair',
        'Technician replacing dishwasher part',
        'Dishes clean and stacked in dishwasher',
      ],
      icon: 'Dishwasher rack icon with sparkling dishes symbol, clean design.',
    },
  },
  {
    slug: 'microwave',
    name: 'Microwave Repair',
    shortName: 'Microwave',
    description: 'Microwave oven repair. Countertop and built-in models.',
    longDescription: 'We repair all microwave issues safely. Our technicians are trained in microwave-specific safety procedures.',
    heroHeadline: 'Microwave Repair — New York',
    startingPrice: '$69',
    commonFaults: [
      'Not heating food',
      'Turntable not spinning',
      'Sparking inside',
      'Buttons not responding',
      'Door won\'t close',
      'Light not working',
      'Unusual noises',
      'Display issues',
    ],
    steps: [
      { title: 'Schedule Service', description: 'Quick booking online or by phone.' },
      { title: 'Diagnosis & Estimate', description: 'The technician diagnoses the issue and shares a written estimate before repairs begin.' },
      { title: 'Repair (If Approved)', description: 'If approved, the technician completes the repair following standard safety practices.' },
    ],
    seoTitle: 'Microwave Repair — New York | Smart Pro',
    seoDescription:
      'Professional microwave repair in New York. Safe service. Same-day options when available. Starting at $69. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior man using microwave after repair, technician points to simple control panel, large readable buttons.',
      stepPanels: [
        'Senior scheduling microwave repair',
        'Technician opens microwave and inspects',
        'Senior uses simple preset button on microwave',
      ],
      icon: 'Microwave with one large 1-Press button highlighted, simple design.',
    },
  },
  {
    slug: 'air-conditioner',
    name: 'Air Conditioner Repair',
    shortName: 'AC',
    description: 'AC repair and maintenance. Window and central units.',
    longDescription: 'Stay cool with our fast AC repair service. We service window units, central air systems, and mini-splits.',
    heroHeadline: 'Air Conditioner Repair — New York',
    startingPrice: '$99',
    commonFaults: [
      'Not cooling properly',
      'Not turning on',
      'Refrigerant leaks',
      'Strange noises',
      'Bad smells',
      'Ice forming on unit',
      'Thermostat issues',
      'Poor airflow',
    ],
    steps: [
      { title: 'Book AC Service', description: 'Schedule your repair quickly.' },
      { title: 'Full Inspection', description: 'Technician checks all components thoroughly.' },
      { title: 'Cool Comfort', description: 'Your home is comfortable again.' },
    ],
    seoTitle: 'Air Conditioner Repair — New York | Smart Pro',
    seoDescription:
      'Expert AC repair in New York. Window and central units. Same-day options when available. Starting at $99. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior woman pointing at wall AC while technician on ladder outside services unit, safety harness, clear outdoor home setting.',
      stepPanels: [
        'Senior calling for AC service',
        'Technician services outdoor unit safely',
        'Cool air symbol in comfortable home',
      ],
      icon: 'AC unit icon with snowflake and fan symbol, clean design.',
    },
  },
  {
    slug: 'television',
    name: 'Television Repair',
    shortName: 'TV',
    description: 'TV repair for all brands. LED, OLED, and Smart TVs.',
    longDescription: 'From picture problems to sound issues, we repair all TV types. Smart TV software troubleshooting included.',
    heroHeadline: 'Television Repair — New York',
    startingPrice: '$79',
    commonFaults: [
      'No picture',
      'No sound',
      'Screen flickering',
      'Dark spots on screen',
      'Won\'t turn on',
      'HDMI port issues',
      'Smart features not working',
      'Remote not responding',
    ],
    steps: [
      { title: 'Schedule Repair', description: 'Book online or call us.' },
      { title: 'Expert Diagnosis', description: 'Technician diagnoses the issue quickly.' },
      { title: 'Picture Perfect', description: 'Enjoy your favorite shows again.' },
    ],
    seoTitle: 'Television Repair — New York | Smart Pro',
    seoDescription:
      'Professional TV repair in New York. All brands and types. Same-day options when available. Starting at $79. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior couple watching technician adjust TV settings, remote in hand, clear before/after brightness.',
      stepPanels: [
        'Senior booking TV repair',
        'Technician fixes TV connection',
        'TV shows clear picture, happy couple',
      ],
      icon: 'TV screen icon with play symbol and clarity lines, clean design.',
    },
  },
  {
    slug: 'computer',
    name: 'Computer & Laptop Repair',
    shortName: 'Computer',
    description: 'Computer and laptop repair. Hardware and software.',
    longDescription: 'We fix computers and laptops of all brands. From slow performance to hardware failures, we can help.',
    heroHeadline: 'Computer Repair — New York',
    startingPrice: '$69',
    commonFaults: [
      'Slow performance',
      'Won\'t start',
      'Blue screen errors',
      'Virus removal',
      'Battery not charging',
      'Broken screen',
      'Keyboard issues',
      'WiFi problems',
    ],
    steps: [
      { title: 'Book Service', description: 'Schedule at your convenience.' },
      { title: 'On-Site Repair', description: 'Technician comes to your home.' },
      { title: 'Back Online', description: 'Your computer works smoothly again.' },
    ],
    seoTitle: 'Computer Repair — New York | Smart Pro',
    seoDescription:
      'Expert computer and laptop repair in New York. All brands. Same-day options when available. Starting at $69. Call 555-123-4567.',
    imagePrompts: {
      hero: 'Senior man handing laptop to friendly technician at home desk, technician explains with simple gestures, calm environment.',
      stepPanels: [
        'Senior booking computer repair',
        'Technician repairs laptop',
        'Senior uses email/zoom easily',
      ],
      icon: 'Laptop icon with wrench and check mark, clean design.',
    },
  },
]

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug)
}

// Get featured services (first 6 for homepage)
export function getFeaturedServices(): ServiceData[] {
  return services.slice(0, 6)
}

// Get priority services (for initial image generation)
export function getPriorityServices(): ServiceData[] {
  return services.filter(s => 
    ['refrigerator', 'washing-machine', 'television'].includes(s.slug)
  )
}
