/* The aluplast range as we market it in Mizoram. Names and figures come from
   aluplast's own India brochures in _handoff/brochures/ (uPVC Windows 2024-25
   and the "German Specialist" portfolio 2023-24, both marked "may be subject
   to change") — re-check there before editing any number. */

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
      "aluplast's core casement platform, in three steps. IDEAL 1000: a 54 mm, 3-chamber, made-in-India system for outward-opening windows. IDEAL 2000: 60 mm, 3 chambers, glazing to 35 mm and sound insulation to 43 dB. IDEAL 4000: the flagship 70 mm, 5-chamber profile — glazing to 41 mm, 45 dB sound insulation, burglary resistance up to RC2.",
    specs: [
      ["Profile depth", "54 / 60 / 70 mm (IDEAL 1000 / 2000 / 4000)"],
      ["Chambers", "3 to 5"],
      ["Glazing", "up to 24 / 35 / 41 mm by system"],
      ["Thermal insulation", "Uf down to 1.3 W/m²K (IDEAL 4000)"],
      ["Sound insulation", "up to 45 dB, class 4 (IDEAL 4000)"],
      ["Security", "up to RC2 (IDEAL 4000)"],
    ],
    bestFor:
      "Bedrooms and living rooms facing weather — a compressed-gasket casement is the tightest seal against wind-driven rain.",
    diagram: "casement",
  },
  {
    slug: "sliding",
    photos: "https://www.aluplast.net/in/uPVC-window-and-door/sliding-door/",
    name: "Sliding windows",
    kicker: "prima-slide · mono-slide · easy-slide",
    summary:
      "Horizontal sliders on smooth-running track profiles — no swing space needed inside or out. The made-in-India prima-slide runs 2 or 3 tracks (plus a mesh-track option) on a 54 mm frame; mono-slide combines fixed and sliding panels on the standardized 60 mm system; easy-slide takes glazing up to 20 mm with steel reinforcement in both frame and sash.",
    specs: [
      ["Systems", "prima-slide, mono-slide, easy-slide"],
      ["Frame", "54–60 mm"],
      ["Tracks", "2- and 3-track, with additional-track option"],
      ["Glazing", "up to 8 / 11 / 20 mm by system"],
      ["Sealing", "exchangeable gaskets, PVC interlock"],
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
    kicker: "70 mm front door",
    summary:
      "Hinged single and double doors on a reinforced 70 mm door profile with weldable corner connectors for extra stability — panelled or glazed up to 41 mm, burglary resistance up to RC2, multi-point locking, and decors or aluskin aluminium shells to match the windows.",
    specs: [
      ["Construction depth", "70 mm"],
      ["Thermal insulation", "Uf 1.5, Ud down to 0.88 W/m²K"],
      ["Glazing / panel", "up to 41 mm"],
      ["Security", "up to RC2, multi-point locking"],
      ["Corners", "weldable connectors"],
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
      "aluplast's modern slider — the comfort of a lift-slide at a sliding-door price, with convenient self-closing and a gasket seal rather than brushes. A 70 mm construction depth, Uf of 1.4 W/m²K, concealed hardware, and glazing or panels up to 41 mm, single- to triple-glazed.",
    specs: [
      ["Construction depth", "70 mm"],
      ["Thermal insulation", "Uf 1.4 W/m²K"],
      ["Glazing / panel", "up to 41 mm, single- to triple-glazed"],
      ["Hardware", "concealed, self-closing convenience"],
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
      "The workhorse sliding system for wide openings — robust 2- or 3-track running with a stable aluminium interlock, concealed drainage, and excellent statics even on tall elements. Takes woodec and aludec finishes.",
    specs: [
      ["Configuration", "2-track and 3-track"],
      ["Glazing", "4 to 24 mm"],
      ["Interlock", "stable, aluminium-reinforced"],
      ["Drainage", "concealed drainage and aeration option"],
      ["Finishes", "woodec, aludec and decor foils"],
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
      "The flagship: turn the handle and the whole panel lifts on its rollers, glides aside, then drops back onto its seal. An 85 mm modular system for panoramic glass walls — glazing up to 51 mm, sound insulation to 44 dB, burglary resistance up to RC2, and a barrier-free flat threshold (DIN 18040). The fixframe option slims the fixed pane for even more glass.",
    specs: [
      ["Construction depth", "85 mm"],
      ["Glazing", "up to 51 mm"],
      ["Sound insulation", "up to 44 dB, class 4"],
      ["Security", "up to RC2"],
      ["Threshold", "barrier-free option (DIN 18040)"],
      ["Operation", "lift-and-glide, sealed when dropped"],
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
    ["1982", "Founded in Karlsruhe, Germany by Manfred J. Seitz — family-owned, now in its second generation."],
    ["24+", "Production sites and sales offices worldwide, including an extrusion plant in Vadodara, Gujarat."],
    ["Tropical", "A special UV-resistant \u201ctropical\u201d uPVC compound, weathering-tested to AAMA requirements for high-radiation climates like India\u2019s."],
    ["Certified", "Profiles to EN 12608, tested by ift Rosenheim and SKZ, RAL quality mark \u2014 stabilized 100% lead-free."],
  ] as [string, string][],
};

/* The finish programme, from the Design pages of the brochures. Swatch hexes
   are our own approximations for the flat chips on this site — the real
   surfaces (wood grain, metallic) are on the linked aluplast pages. */

export type FinishGroup = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  url: string;
  swatches: { name: string; hex: string }[];
};

export const FINISH_GROUPS: FinishGroup[] = [
  {
    slug: "woodec",
    name: "woodec",
    tagline: "Inspired by nature",
    blurb:
      "A convincingly real wood look and feel on a uPVC window — grain you can see and touch, with none of wood's upkeep.",
    url: "https://www.aluplast.net/in/added-values/design/woodec/",
    swatches: [
      { name: "sheffield oak alpine", hex: "#cdc5b6" },
      { name: "sheffield oak concrete", hex: "#a3a099" },
      { name: "turner oak malt", hex: "#c0a077" },
      { name: "turner oak amber", hex: "#a37743" },
      { name: "turner oak walnut", hex: "#6d4b32" },
      { name: "turner oak toffee", hex: "#503c2d" },
    ],
  },
  {
    slug: "aludec",
    name: "aludec",
    tagline: "Inspired by style",
    blurb:
      "The high-quality look of an aluminium shell with the pleasant feel of uPVC — the architectural greys and blacks.",
    url: "https://www.aluplast.net/in/added-values/design/aludec-aluminium-upvc-windows/",
    swatches: [
      { name: "traffic white", hex: "#e9e9e5" },
      { name: "window grey", hex: "#9c9d9a" },
      { name: "umbra grey", hex: "#4a453e" },
      { name: "basalt grey", hex: "#4c5456" },
      { name: "DB703", hex: "#494c50" },
      { name: "anthracite grey", hex: "#34383b" },
      { name: "jet black", hex: "#121316" },
    ],
  },
  {
    slug: "decor",
    name: "Decor foils",
    tagline: "Natura series & more",
    blurb:
      "Classic laminated woodgrains and colours for an individual look — plus brilliant white as the colour-proof standard.",
    url: "https://www.aluplast.net/in/added-values/design/dekor/",
    swatches: [
      { name: "white (standard)", hex: "#f2f1ee" },
      { name: "golden oak", hex: "#b0793a" },
      { name: "nut tree", hex: "#7a5638" },
      { name: "mahogany", hex: "#5f3222" },
      { name: "vermont oak", hex: "#96703f" },
      { name: "black brown", hex: "#392e26" },
      { name: "alux DB703", hex: "#4d5157" },
    ],
  },
  {
    slug: "aluskin",
    name: "aluskin",
    tagline: "Real aluminium shells",
    blurb:
      "Actual aluminium shells clipped onto the uPVC profile — an aluminium facade outside, warm uPVC inside, in effectively any RAL colour.",
    url: "https://www.aluplast.net/in/added-values/design/aluskin/",
    swatches: [],
  },
];
