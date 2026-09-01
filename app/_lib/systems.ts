/* The aluplast range as we market it in Mizoram. Names and figures come from
   aluplast's published India material (aluplast.net/in) — IDEAL series,
   smart-slide, vario-slide, lift-slide 85, entrance doors — plus their
   published system specs. Re-check against the current aluplast catalogue
   before printing any of this. */

export type System = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  /* Spec rows shown in the table — label/value pairs, only figures we can
     stand behind. */
  specs: [string, string][];
  /* Product photos on aluplast's India site — shown under the diagram until we
     have our own shots. Every URL verified live; re-check if aluplast
     restructures their site. */
  photos: string;
  bestFor: string;
  diagram:
    | "casement"
    | "sliding"
    | "tiltturn"
    | "fixed"
    | "casement-door"
    | "slide-door"
    | "lift-slide"
    | "mesh"
    | "glazing";
};

export const WINDOW_SYSTEMS: System[] = [
  {
    slug: "ideal-casement",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/casement-window-door/",
    name: "IDEAL series casement",
    kicker: "IDEAL 1000 · 2000 · 4000",
    summary:
      "aluplast's core casement platform — outward or inward opening sashes on multi-chamber profiles with galvanized steel reinforcement and double gasket sealing. The IDEAL 4000 tops the series with a 70 mm, 5-chamber profile that takes glazing up to 41 mm.",
    specs: [
      ["Profile depth", "60–70 mm across the series"],
      ["Chambers", "up to 5 (IDEAL 4000)"],
      ["Glazing", "single or double, up to 41 mm on IDEAL 4000"],
      ["Sealing", "double EPDM gaskets"],
      ["Reinforcement", "galvanized steel"],
    ],
    bestFor:
      "Bedrooms and living rooms facing weather — a compressed-gasket casement is the tightest seal against wind-driven rain.",
    diagram: "casement",
  },
  {
    slug: "sliding",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/sliding-door/",
    name: "Sliding windows",
    kicker: "2 & 3 track",
    summary:
      "Horizontal sliders on smooth-running track profiles — no swing space needed inside or out, with an optional dedicated track for a mosquito-mesh panel.",
    specs: [
      ["Configuration", "2-track and 3-track"],
      ["Mesh", "optional dedicated mesh track"],
      ["Glazing", "single or double"],
      ["Locking", "touch locks / multi-point options"],
    ],
    bestFor:
      "Kitchens, corridors and rooms that open onto verandas, where a swinging sash would be in the way.",
    diagram: "sliding",
  },
  {
    slug: "tilt-turn",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/casement-window-door/ideal/ideal-4000/",
    name: "Tilt & turn",
    kicker: "IDEAL platform",
    summary:
      "One handle, two movements: tilt the sash inward from the top for secure trickle ventilation, or swing it fully inward for cleaning and the whole opening. Concealed European hardware, multi-point locking as standard.",
    specs: [
      ["Opening", "inward tilt + inward turn"],
      ["Hardware", "concealed multi-point"],
      ["Ventilation", "secure tilted position"],
      ["Cleaning", "full inward access from inside"],
    ],
    bestFor:
      "Upper floors and hillside elevations where the outside of the glass is unreachable — every Aizawl building has a few of those.",
    diagram: "tiltturn",
  },
  {
    slug: "fixed",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/",
    name: "Fixed & villa glazing",
    kicker: "Picture windows",
    summary:
      "Non-opening panels for light and the view, combined freely with casement and sliding sashes into villa windows, corner glazing and full-height compositions.",
    specs: [
      ["Format", "made to size, combined with openable sashes"],
      ["Glazing", "single, double or laminated"],
      ["Use", "stairwells, gables, view frontages"],
    ],
    bestFor:
      "The valley-facing wall. Fix the view, open only the sashes you actually use.",
    diagram: "fixed",
  },
];

export const DOOR_SYSTEMS: System[] = [
  {
    slug: "casement-doors",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/entrance-doors/",
    name: "Casement & entrance doors",
    kicker: "70 mm · 85 mm",
    summary:
      "Hinged single and double doors on reinforced door profiles — aluplast builds entrance doors in 70 mm and 85 mm depths with multi-point locking and heavy-duty hinges, panelled or fully glazed.",
    specs: [
      ["Profile depth", "70 mm or 85 mm"],
      ["Locking", "multi-point"],
      ["Leaf", "panelled, half or fully glazed"],
      ["Threshold", "weather-sealed"],
    ],
    bestFor: "Main entrances, balcony doors and bathroom doors that see water.",
    diagram: "casement-door",
  },
  {
    slug: "smart-slide",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/sliding-door/smart-slide.php",
    name: "smart-slide",
    kicker: "70 mm sliding",
    summary:
      "aluplast's modern slider — the comfort of a lift-slide at a sliding-door price. A 70 mm construction depth, a Uf value of 1.3 W/m²K and panels that take glazing up to 41 mm, closing with a gasket seal rather than brushes.",
    specs: [
      ["Construction depth", "70 mm"],
      ["Thermal insulation", "Uf 1.3 W/m²K"],
      ["Glazing", "up to 41 mm"],
      ["Sealing", "compressed gasket close"],
    ],
    bestFor:
      "Living rooms opening to a balcony — wide glass, tight seal, easy one-hand operation.",
    diagram: "slide-door",
  },
  {
    slug: "vario-slide",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/sliding-door/vario-slide.php",
    name: "vario-slide",
    kicker: "2 & 3 track sliding",
    summary:
      "The workhorse sliding door for wide openings — robust multi-track running, flexible panel layouts, and an integrated track for a mesh shutter.",
    specs: [
      ["Configuration", "2-track and 3-track layouts"],
      ["Mesh", "integrated mesh-shutter track"],
      ["Panels", "flexible layouts for wide openings"],
    ],
    bestFor: "Verandas and shopfronts that need a big, simple, durable slider.",
    diagram: "sliding",
  },
  {
    slug: "lift-slide-85",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/sliding-door/lift-and-slide-85mm/",
    name: "lift-slide 85",
    kicker: "Panoramic",
    summary:
      "The flagship: turn the handle and the whole panel lifts on its rollers, glides aside, then drops back onto its seal. An 85 mm system for panoramic glass walls with a low, barrier-free threshold — effortless even at very large panel sizes.",
    specs: [
      ["Construction depth", "85 mm"],
      ["Threshold", "low, barrier-free"],
      ["Operation", "lift-and-glide, sealed when dropped"],
      ["Format", "panoramic glass walls"],
    ],
    bestFor:
      "The showpiece opening — a living room that becomes one frame around the hills.",
    diagram: "lift-slide",
  },
];

export const EXTRAS: System[] = [
  {
    slug: "mesh",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/",
    name: "Mosquito mesh",
    kicker: "Insect screens",
    summary:
      "Mesh sashes and sliding mesh panels made for the same frames — on sliding systems they run in their own track, on casements they sit as a separate sash.",
    specs: [],
    bestFor: "Every openable sash in Mizoram, honestly.",
    diagram: "mesh",
  },
  {
    slug: "glazing",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/casement-window-door/ideal/ideal-4000/",
    name: "Double glazing",
    kicker: "Glass options",
    summary:
      "Two panes with a sealed air gap — the single biggest upgrade for street noise and condensation. Clear, tinted, frosted, laminated and toughened options, up to 41 mm units on the deeper systems.",
    specs: [],
    bestFor: "Roadside bedrooms and any room you want genuinely quiet.",
    diagram: "glazing",
  },
];

/* Brand facts used on the homepage and about page. */
export const ALUPLAST = {
  name: "aluplast",
  url: "https://www.aluplast.net/in/",
  facts: [
    ["1982", "Founded in Karlsruhe, Germany — family-owned since."],
    ["25+", "Countries with aluplast operations, across Europe, the USA, Australia and India."],
    ["India", "aluplast India Pvt. Ltd. extrudes and supports the range locally from Vadodara, Gujarat."],
    ["Certified", "RAL quality mark, ISO 9001 (TÜV SÜD) and CE-compliant systems."],
  ] as [string, string][],
};
