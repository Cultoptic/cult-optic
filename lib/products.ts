export type Category = "lifestyle" | "lifestyle-sport" | "sport-tech" | "fashion";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: Category;
  cid: string;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
  colors: string[];
  featured?: boolean;
  new?: boolean;
  archive?: boolean;
}

export const products: Product[] = [
  // ── LIFESTYLE ─────────────────────────────────────────────────
  {
    id: "core",
    name: "CORE",
    tagline: "The balance between organic and geometric",
    price: 199,
    category: "lifestyle",
    cid: "A01",
    image: "",
    featured: true,
    specs: [
      { label: "MEDIDAS", value: "45□25-145" },
      { label: "ARMAZÓN", value: "Acetato-Metal" },
      { label: "CRISTAL", value: "1.1 Polarizado" },
      { label: "CID", value: "A01" },
    ],
    description:
      "The perfect balance between organic and geometric. CORE redefines the classic silhouette with sharp-angled lines that project a strong, decisive personality. Acetate-metal construction for those who understand that details define the path.",
    colors: ["C2 Black / Grey", "C4 Tortoise Shell"],
  },
  {
    id: "delta",
    name: "DELTA",
    tagline: "Resistance and lightness in balance",
    price: 175,
    category: "lifestyle",
    cid: "A02",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "49□21-149" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "1.1 TAC" },
      { label: "CID", value: "A02" },
    ],
    description:
      "Resistance and lightness in balance. DELTA is born from the strategic combination of lightweight and flexible materials, achieving a comfortable structure that never compromises style. Its technically-inspired design delivers all-day stability.",
    colors: ["C1 Black / Grey"],
  },
  {
    id: "pulse",
    name: "PULSE",
    tagline: "Contained energy in a precise silhouette",
    price: 169,
    category: "lifestyle",
    cid: "A03",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "46□23-147" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "1.1 TAC" },
      { label: "CID", value: "A03" },
    ],
    description:
      "Contained energy in a precise silhouette. PULSE combines a lightweight TR90 structure with soft lines and balanced proportions — comfortable, modern, effortless to wear. TAC lenses deliver clean visual clarity in high-light conditions.",
    colors: ["C2 Transparent Grey / Grey", "C32 Demi / Grey"],
  },
  {
    id: "lowtide",
    name: "LOWTIDE",
    tagline: "Calm clarity, defined character",
    price: 175,
    category: "lifestyle",
    cid: "A04",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "50□21-148" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "1.1 TAC" },
      { label: "CID", value: "A04" },
    ],
    description:
      "Calm clarity, defined character. LOWTIDE offers a clean fluid silhouette built for extended wear and a quiet, confident presence. Its lightweight structure favours daily use while the lenses reduce glare and provide full UV protection.",
    colors: ["C1 Black / Grey", "C3 Transparent Yellow Brownish / Brownish"],
  },
  {
    id: "horizon",
    name: "HORIZON",
    tagline: "Openness, clarity and direction",
    price: 195,
    category: "lifestyle",
    cid: "A05",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "52□20-145" },
      { label: "ARMAZÓN", value: "Acetato" },
      { label: "CRISTAL", value: "1.1 Polarizado" },
      { label: "CID", value: "A05" },
    ],
    description:
      "Openness, clarity and direction. HORIZON draws inspiration from wide-open landscapes to create a clean-profile frame with balanced proportions. Its acetate construction combines resistance and comfort for a natural all-day fit.",
    colors: ["C1 Black"],
  },
  {
    id: "nomad",
    name: "NOMAD",
    tagline: "Free movement with its own identity",
    price: 175,
    category: "lifestyle",
    cid: "A06",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "49□21-149" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "1.1 TAC" },
      { label: "CID", value: "A06" },
    ],
    description:
      "Free movement with its own identity. NOMAD features a comfortable structure designed for long journeys, shifting rhythms, and days that don't follow a script. Flexible and resistant in equal measure.",
    colors: ["C1 Black"],
  },
  {
    id: "solace",
    name: "SOLACE",
    tagline: "Balance, refuge and presence",
    price: 185,
    category: "lifestyle",
    cid: "A07",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "48□23-150" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "TAC" },
      { label: "CID", value: "A07" },
    ],
    description:
      "Balance, refuge and presence. SOLACE combines a clean silhouette with a lightweight, stable build, offering immediate comfort without losing character. Polarized lenses protect the eyes and soften intense light.",
    colors: ["C1 Black / Grey", "C2 Transparent Blue Grey / Grey"],
  },
  {
    id: "swell",
    name: "SWELL",
    tagline: "Constant motion, energy in balance",
    price: 195,
    category: "lifestyle",
    cid: "B01",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "52□20-140" },
      { label: "ARMAZÓN", value: "Acetato" },
      { label: "CRISTAL", value: "1.1 Polarizado" },
      { label: "CID", value: "B01" },
    ],
    description:
      "Constant motion, energy in balance. Inspired by the sea, SWELL delivers a fluid, enveloping silhouette in high-quality acetate. Polarized lenses offer total protection and clean visual clarity even under intense sun.",
    colors: ["C2 Black / Tortoise Shell"],
  },
  {
    id: "backside",
    name: "BACKSIDE",
    tagline: "Different perspective, defined character",
    price: 179,
    category: "lifestyle",
    cid: "B02",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "54□22-148" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "1.1 TAC" },
      { label: "CID", value: "B02" },
    ],
    description:
      "Different perspective, defined character. BACKSIDE presents a solid structure with bold lines in durable acetate. Polarized lenses reduce glare, delivering visual comfort during extended wear.",
    colors: ["C2 Transparent Gray / Gray", "C3 Black / Gradual Brownish"],
  },
  {
    id: "coral",
    name: "CORAL",
    tagline: "Organic and authentic in every detail",
    price: 195,
    category: "lifestyle",
    cid: "B03",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "54□19-145" },
      { label: "ARMAZÓN", value: "Acetato" },
      { label: "CRISTAL", value: "1.1 Polarizado" },
      { label: "CID", value: "B03" },
    ],
    description:
      "Organic and authentic in every detail. CORAL combines soft curves with a lightweight acetate structure for an all-day comfortable fit. Full UV protection lenses allow clear and protected vision in high-sun environments.",
    colors: ["C1 Bright / Black", "C3 Tortoise Shell / Brown"],
  },
  {
    id: "beachbrake",
    name: "BEACHBRAKE",
    tagline: "Where energy is released",
    price: 179,
    category: "lifestyle",
    cid: "B05",
    image: "",
    new: true,
    specs: [
      { label: "MEDIDAS", value: "52□22-148" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "1.1 TAC" },
      { label: "CID", value: "B05" },
    ],
    description:
      "Where energy is released. BEACHBRAKE is built to resist an active pace with durable materials and a comfortable structure suited to extended use. Lenses protect from UV radiation and improve visibility in open environments.",
    colors: ["C1 Black / Grey", "C17 Transparent Deep Green / Grey"],
  },

  // ── LIFESTYLE SPORT ───────────────────────────────────────────
  {
    id: "breakline",
    name: "BREAKLINE",
    tagline: "The point where everything changes",
    price: 229,
    category: "lifestyle-sport",
    cid: "C02",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "58□16-131" },
      { label: "ARMAZÓN", value: "PC" },
      { label: "CRISTAL", value: "Polarizado" },
      { label: "CID", value: "C02" },
    ],
    description:
      "The point where everything changes. BREAKLINE presents a robust polycarbonate build with defined lines and a secure fit. Polarized lenses reduce glare, improving the visual experience in both urban and natural settings.",
    colors: ["C3 Matte Tortoise Shell / Brown"],
  },
  {
    id: "drifter",
    name: "DRIFTER",
    tagline: "Freedom without limits",
    price: 215,
    category: "lifestyle-sport",
    cid: "C05",
    image: "",
    new: true,
    specs: [
      { label: "MEDIDAS", value: "59□11-140" },
      { label: "ARMAZÓN", value: "TR-90" },
      { label: "CRISTAL", value: "1.1 Polarizado" },
      { label: "CID", value: "C05" },
    ],
    description:
      "Freedom without limits. DRIFTER is built with lightweight TR-90 materials for extended, fatigue-free wear. Full-protection polarized lenses deliver clear vision outdoors. Made for those who move without a fixed destination.",
    colors: ["C1 Matte Black / Orange / Grey"],
  },
  {
    id: "marea",
    name: "MAREA",
    tagline: "Fluidity, resistance and constant adaptation",
    price: 219,
    category: "lifestyle-sport",
    cid: "C07",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "54□18-140" },
      { label: "ARMAZÓN", value: "TR-90" },
      { label: "CRISTAL", value: "1.1 Polarizado" },
      { label: "CID", value: "C07" },
    ],
    description:
      "Fluidity, resistance and constant adaptation. MAREA is designed to accompany movement — a lightweight TR-90 structure with flexibility and comfort for long wear. Inspired by the energy of the sea.",
    colors: ["C2 Matte Solid Grey / Green / Green"],
  },
  {
    id: "daybreak",
    name: "DAYBREAK",
    tagline: "New beginnings, clear vision",
    price: 199,
    category: "lifestyle-sport",
    cid: "C08",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "53□20-145" },
      { label: "ARMAZÓN", value: "PC" },
      { label: "CRISTAL", value: "Polarizado" },
      { label: "CID", value: "C08" },
    ],
    description:
      "New beginnings, clear vision. DAYBREAK combines lightness and protection in a comfortable polycarbonate structure for everyday use. Polarized lenses allow smooth transitions through changing light conditions.",
    colors: ["C1 Black / Grey"],
  },
  {
    id: "coastline",
    name: "COASTLINE",
    tagline: "Open horizon, functional design",
    price: 219,
    category: "lifestyle-sport",
    cid: "C09",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "57□17-135" },
      { label: "ARMAZÓN", value: "PC" },
      { label: "CRISTAL", value: "Polarizado" },
      { label: "CID", value: "C09" },
    ],
    description:
      "Open horizon, functional design. COASTLINE integrates resistant polycarbonate materials with high UV-protection lenses, achieving a balance between style and performance. Perfect for those who live between urban and natural environments.",
    colors: ["C1 Matte Black / Grey"],
  },

  // ── SPORT TECH ─────────────────────────────────────────────────
  {
    id: "vector",
    name: "VECTOR",
    tagline: "Clear direction, technical performance",
    price: 289,
    category: "sport-tech",
    cid: "E01",
    image: "/editorial/lentevector-1.png",
    featured: true,
    new: true,
    specs: [
      { label: "MEDIDAS", value: "142□0-129" },
      { label: "ARMAZÓN", value: "TR-90" },
      { label: "CRISTAL", value: "Polarizado" },
      { label: "CID", value: "E01" },
    ],
    description:
      "Clear direction, technical performance. VECTOR presents an aerodynamic structure with lightweight, resistant TR-90 materials. Its polarized lenses offer total protection and visual clarity in motion. Designed for those who move with purpose.",
    colors: ["C1 Black / Grey", "C3 Transparent / Grey"],
  },
  {
    id: "voltage",
    name: "VOLTAGE",
    tagline: "Energy and precision at high speed",
    price: 269,
    category: "sport-tech",
    cid: "E02",
    image: "",
    new: true,
    specs: [
      { label: "MEDIDAS", value: "132□0-125" },
      { label: "ARMAZÓN", value: "TR-90" },
      { label: "CRISTAL", value: "Polarizado" },
      { label: "CID", value: "E02" },
    ],
    description:
      "Energy and precision at high speed. VOLTAGE combines a firm TR-90 build with polarized lenses optimised for high-exposure conditions. Its design conveys intensity and control.",
    colors: ["C2 Black", "C4 White"],
  },

  // ── FASHION ─────────────────────────────────────────────────────
  {
    id: "midnight",
    name: "MIDNIGHT",
    tagline: "Depth and sophistication",
    price: 229,
    category: "fashion",
    cid: "D01",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "55□19-148" },
      { label: "ARMAZÓN", value: "TR90 + Acetato" },
      { label: "CRISTAL", value: "TAC" },
      { label: "CID", value: "D01" },
    ],
    description:
      "Depth and sophistication. MIDNIGHT features a solid TR90+acetate structure with lenses that reduce reflections in low-light conditions. An elegant model for those who prefer a restrained but characterful style.",
    colors: ["C1 Bright Black Grey"],
  },
  {
    id: "nightshift",
    name: "NIGHTSHIFT",
    tagline: "Ready for any rhythm",
    price: 219,
    category: "fashion",
    cid: "D03",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "67□15-148" },
      { label: "ARMAZÓN", value: "TR90 - Acetato" },
      { label: "CRISTAL", value: "2.0 Nylon" },
      { label: "CID", value: "D03" },
    ],
    description:
      "Ready for any rhythm. NIGHTSHIFT integrates resistance and lightness in a comfortable TR90-acetate structure with 2.0 nylon lenses optimised for visibility across changing light conditions.",
    colors: ["C1 Black / Grey", "C2 Grey / Grey"],
  },
  {
    id: "brat",
    name: "BRAT",
    tagline: "Attitude, unfiltered",
    price: 249,
    category: "fashion",
    cid: "G01",
    image: "/editorial/lentebrat-1.png",
    featured: true,
    specs: [
      { label: "MEDIDAS", value: "55□22-147" },
      { label: "ARMAZÓN", value: "Acetato" },
      { label: "CRISTAL", value: "TAC Polarizado" },
      { label: "CID", value: "G01" },
    ],
    description:
      "Attitude, unfiltered. BRAT stands out with its robust acetate structure and a disruptive design. TAC polarized lenses protect and maintain visual clarity. A model built for those who don't follow rules.",
    colors: ["C2 Bright Brown Tortoise Shell / Gradient Green", "C4 Bright Transparent / Deep Grey Tea"],
  },
  {
    id: "ventis",
    name: "VENTIS",
    tagline: "Geometric design with powerful presence",
    price: 259,
    category: "fashion",
    cid: "G02",
    image: "/editorial/lenteventis-1.png",
    new: true,
    specs: [
      { label: "MEDIDAS", value: "53□19-147" },
      { label: "ARMAZÓN", value: "Acetato" },
      { label: "CRISTAL", value: "TAC Polarizado" },
      { label: "CID", value: "G02" },
    ],
    description:
      "Geometric design with powerful presence. VENTIS stands out with firm, geometric lines in high-quality acetate. TAC polarized lenses make it a versatile model that elevates any look with a confident, contemporary attitude.",
    colors: ["C1 Bright Black / Grey", "C4 Bright Transparent Grey / Grey Green"],
  },
  {
    id: "boogie",
    name: "BOOGIE",
    tagline: "Retro-contemporary style, solid lines",
    price: 249,
    category: "fashion",
    cid: "G03",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "52□20-147" },
      { label: "ARMAZÓN", value: "Acetato" },
      { label: "CRISTAL", value: "TAC Polarizado" },
      { label: "CID", value: "G03" },
    ],
    description:
      "Retro-contemporary style with solid lines. BOOGIE offers an unmistakable presence with its durable acetate frame and TAC polarized lenses. Available in combinations from vibrant to pure minimalist black.",
    colors: ["C1 Bright Black / Grey", "C4 Bright Brown Floral / Grey"],
  },
  {
    id: "classy",
    name: "CLASSY",
    tagline: "Contemporary elegance",
    price: 239,
    category: "fashion",
    cid: "G04",
    image: "",
    specs: [
      { label: "MEDIDAS", value: "52□20-145" },
      { label: "ARMAZÓN", value: "TR + Acetato" },
      { label: "CRISTAL", value: "TAC Polarizado" },
      { label: "CID", value: "G04" },
    ],
    description:
      "Contemporary elegance. CLASSY combines premium TR+acetate materials with high-quality TAC lenses, achieving a perfect balance between sophistication and functionality. A timeless model for any occasion.",
    colors: ["C1 Bright Black Grey"],
  },
];

export const getProductsByCategory = (category: Category) =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const categoryLabels: Record<Category, string> = {
  lifestyle: "Lifestyle",
  "lifestyle-sport": "Lifestyle Sport",
  "sport-tech": "Sport Tech",
  fashion: "Fashion",
};

export const categoryDescriptions: Record<Category, string> = {
  lifestyle:
    "Everyday frames with soul. Premium acetate construction and polarized optics for life in constant motion.",
  "lifestyle-sport":
    "Where style meets performance. Polycarbonate and TR-90 frames engineered for active days in the sun.",
  "sport-tech":
    "Technical optics for athletes in motion. Aerodynamic TR-90 frames built for speed and precision.",
  fashion:
    "Bold silhouettes and premium acetate. Editorial frames for those who set the pace.",
};
