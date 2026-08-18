export type NavLink = {
  href: string;
  label: string;
};

export type TimelineStage = {
  id: string;
  phase: string;
  title: string;
  window: string;
  status: "complete" | "in-progress" | "upcoming";
  description: string;
};

export type UnitSpec = {
  id: string;
  use: string;
  zoning: string;
  sizeRange: string;
  ceiling: string;
  availability: string;
  highlights: string[];
};

export type Amenity = {
  id: string;
  title: string;
  metric: string;
  description: string;
  icon: "map" | "parking" | "transit" | "access" | "dining" | "security";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type MediaTab = {
  id: "floor-plans" | "site-plans" | "renderings";
  label: string;
  kicker: string;
  title: string;
  description: string;
  captions: string[];
};

export type UnitOption = {
  id: string;
  name: string;
  use: string;
  size: string;
  deposit: string;
  occupancy: string;
};

export const company = {
  name: "PLG",
  legalName: "PLG Commercial Holdings",
  tagline: "Landmark commercial destinations, leased with intention.",
  phone: "(212) 555-0148",
  email: "leasing@plg.com",
  address: "400 Meridian Boulevard, Suite 100",
  city: "New York, NY 10013",
  hours: "Weekdays 8:30am – 6:00pm ET",
};

export const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#development", label: "Development" },
  { href: "#units", label: "Units" },
  { href: "#media", label: "Media" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
  { href: "#inquire", label: "Inquire" },
];

export const heroStats = [
  { label: "Total GLA", value: "186,000 SF" },
  { label: "Est. occupancy", value: "Q2 2027" },
  { label: "Parking stalls", value: "420" },
  { label: "Approved uses", value: "4" },
];

export const existingProperty = {
  name: "Harbor Court Campus",
  location: "Seaport District",
  leased: "98%",
  size: "240,000 SF",
  tenants: "32",
  narrative:
    "Harbor Court established PLG’s operating standard: disciplined underwriting, tenant-first amenities, and architecture that still photographs well a decade later. The campus remains fully leased to a mix of professional services, specialty retail, and outpatient care.",
};

export const timelineStages: TimelineStage[] = [
  {
    id: "site",
    phase: "01",
    title: "Site & entitlements",
    window: "Completed 2024",
    status: "complete",
    description:
      "Rezoning, environmental clearance, and utility coordination closed. The site is shovel-ready with all municipal approvals in hand.",
  },
  {
    id: "structure",
    phase: "02",
    title: "Structure & envelope",
    window: "Completed 2025",
    status: "complete",
    description:
      "Foundations, steel, and the weather-tight envelope are complete. Core vertical circulation and the parking podium are in place.",
  },
  {
    id: "interiors",
    phase: "03",
    title: "Core, shell & interiors",
    window: "In progress",
    status: "in-progress",
    description:
      "MEP rough-in, storefront systems, and base-building interiors are underway. Tenant improvement packages can now be scoped.",
  },
  {
    id: "fitout",
    phase: "04",
    title: "Tenant fit-out window",
    window: "Q4 2026",
    status: "upcoming",
    description:
      "Priority-list tenants begin coordinated TI. Early reservations receive first selection of street-front and corner suites.",
  },
  {
    id: "occupancy",
    phase: "05",
    title: "Certificate of occupancy",
    window: "Q2 2027",
    status: "upcoming",
    description:
      "Phased occupancy begins. Deposit-backed reservations convert to executed leases with first-month rent credit applied.",
  },
];

export const unitSpecs: UnitSpec[] = [
  {
    id: "retail",
    use: "Retail",
    zoning: "C2-4 / Street-level commercial",
    sizeRange: "1,200 – 4,800 SF",
    ceiling: "16' clear",
    availability: "8 suites",
    highlights: [
      "Double-height storefronts on Meridian Boulevard",
      "Independent HVAC and grease-ready wet stacks on select bays",
      "After-hours loading from the service court",
    ],
  },
  {
    id: "office",
    use: "Office",
    zoning: "Commercial office",
    sizeRange: "2,000 – 12,000 SF",
    ceiling: "10'6\" finished",
    availability: "11 suites",
    highlights: [
      "Column-light floor plates with full-height glazing",
      "Divisible wings for growing professional firms",
      "Shared conference and client arrival lobby",
    ],
  },
  {
    id: "medical",
    use: "Medical",
    zoning: "Outpatient / medical office",
    sizeRange: "1,800 – 6,500 SF",
    ceiling: "9'6\" clinical",
    availability: "6 suites",
    highlights: [
      "Dedicated patient drop-off and elevator bank",
      "Enhanced HVAC filtration and backup power-ready",
      "Pre-planned lead-lined and procedure rooms",
    ],
  },
  {
    id: "industrial",
    use: "Light industrial",
    zoning: "M1 compatible / maker & logistics",
    sizeRange: "3,500 – 15,000 SF",
    ceiling: "18' – 22' clear",
    availability: "4 bays",
    highlights: [
      "Grade-level overhead doors and 32' truck court",
      "3-phase power and oversized wet utilities",
      "Street presence suitable for showroom-workshop hybrids",
    ],
  },
];

export const amenities: Amenity[] = [
  {
    id: "access",
    title: "Regional access",
    metric: "4 min",
    description:
      "Direct ramps to the FDR and two signalized approaches from Meridian Boulevard keep employee and customer arrival predictable.",
    icon: "access",
  },
  {
    id: "parking",
    title: "On-site parking",
    metric: "420 stalls",
    description:
      "Structured parking with 28 ADA spaces, EV-ready stalls, and reserved medical drop-off along the south podium.",
    icon: "parking",
  },
  {
    id: "transit",
    title: "Transit links",
    metric: "3 lines",
    description:
      "Two subway stops within a five-minute walk plus a dedicated shuttle layover for private tenant coaches.",
    icon: "transit",
  },
  {
    id: "map",
    title: "Trade area",
    metric: "1.2M people",
    description:
      "Daytime population within a 15-minute drive supports retail, outpatient, and professional occupancy year-round.",
    icon: "map",
  },
  {
    id: "dining",
    title: "Local amenities",
    metric: "60+",
    description:
      "Dining, hotels, and civic institutions surround the campus, giving tenants a complete weekday environment.",
    icon: "dining",
  },
  {
    id: "security",
    title: "Campus operations",
    metric: "24 / 7",
    description:
      "On-site security, monitored cameras, and a staffed leasing office maintain a quiet, professional address.",
    icon: "security",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "when",
    question: "When can tenants occupy The Meridian?",
    answer:
      "Base-building delivery is scheduled for Q2 2027, with a tenant-improvement window opening in Q4 2026 for priority-list reservations. Early reservations receive first selection of suites and a coordinated TI schedule with the general contractor.",
  },
  {
    id: "uses",
    question: "Which uses are approved at the property?",
    answer:
      "The Meridian is entitled for street-level retail, professional office, outpatient medical, and light industrial / maker uses. Specific suites are pre-assigned to a use to preserve parking ratios, loading, and building systems. Cross-use combinations can be reviewed during inquiry.",
  },
  {
    id: "deposit",
    question: "How does the reservation deposit work?",
    answer:
      "A refundable reservation deposit holds a specific suite through lease negotiation. Upon lease execution, the full deposit is credited toward first month’s rent. If PLG cannot deliver the reserved suite, the deposit is returned in full.",
  },
  {
    id: "ti",
    question: "Are tenant improvements included?",
    answer:
      "A competitive TI allowance is offered on multi-year leases and scales with term and credit. Medical and light-industrial suites include enhanced base-building provisions (power, HVAC, and wet utilities) so allowances go further into the space.",
  },
  {
    id: "parking-faq",
    question: "Is parking included with a lease?",
    answer:
      "Each lease includes a stall allocation based on use and square footage. Additional monthly stalls, reserved medical drop-off, and EV charging can be contracted separately. Visitor parking is unbundled and operated by the campus.",
  },
  {
    id: "tour",
    question: "Can we tour the site before signing?",
    answer:
      "Yes. Hard-hat site walks are available by appointment for qualified prospects on the priority list. A digital leasing package with floor plans, a site plan, and current renderings is sent immediately after you request it.",
  },
  {
    id: "process",
    question: "What is the leasing process from inquiry to keys?",
    answer:
      "Inquire or join the priority list, receive the leasing package, tour or reserve a suite, execute a letter of intent, and complete lease documentation. Reservation deposits are processed through the secure portal and applied at occupancy.",
  },
];

export const mediaTabs: MediaTab[] = [
  {
    id: "floor-plans",
    label: "Floor Plans",
    kicker: "Plate studies",
    title: "Efficient, divisible floor plates",
    description:
      "Typical plans show street-level retail bays, a two-story office wing, and a medical / industrial podium with independent service access.",
    captions: ["Level 01 — Retail & arrival", "Level 02 — Office wing", "Podium — Medical / industrial"],
  },
  {
    id: "site-plans",
    label: "Site Plans",
    kicker: "Campus geometry",
    title: "Clear circulation from curb to suite",
    description:
      "The site plan organizes public arrival, reserved parking, a truck court, and a landscaped pedestrian spine along Meridian Boulevard.",
    captions: ["Arrival court", "Parking podium", "Service & loading"],
  },
  {
    id: "renderings",
    label: "Renderings",
    kicker: "Design intent",
    title: "A civic face with commercial gravitas",
    description:
      "Masonry, bronze-toned metal, and a rhythmic colonnade give The Meridian a landmark silhouette without sacrificing storefront flexibility.",
    captions: ["Boulevard elevation", "Dusk arrival", "Courtyard colonnade"],
  },
];

export const unitOptions: UnitOption[] = [
  {
    id: "r-104",
    name: "Suite R-104",
    use: "Retail",
    size: "2,150 SF",
    deposit: "$8,600",
    occupancy: "Q2 2027",
  },
  {
    id: "o-210",
    name: "Suite O-210",
    use: "Office",
    size: "4,800 SF",
    deposit: "$14,400",
    occupancy: "Q2 2027",
  },
  {
    id: "m-120",
    name: "Suite M-120",
    use: "Medical",
    size: "3,200 SF",
    deposit: "$12,800",
    occupancy: "Q2 2027",
  },
  {
    id: "i-01",
    name: "Bay I-01",
    use: "Light industrial",
    size: "8,400 SF",
    deposit: "$16,800",
    occupancy: "Q3 2027",
  },
];

export const intendedUses = [
  "Retail / restaurant",
  "Professional office",
  "Medical / outpatient",
  "Light industrial / maker",
  "Undecided — advise me",
];
