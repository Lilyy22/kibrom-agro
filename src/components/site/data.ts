import sesame from "@/assets/sesame.jpg";
import coffee from "@/assets/coffee.jpg";
import pulses from "@/assets/pulses.jpg";
import spices from "@/assets/spices.jpg";

export type ProductItem = { name: string; specs: string[] };
export type Category = { slug: string; name: string; image: string; tagline: string; items: ProductItem[] };

export const categories: Category[] = [
  {
    slug: "oil-seeds",
    name: "Oil Seeds",
    image: sesame,
    tagline: "Rich oil content, globally sought.",
    items: [
      { name: "Sesame Seeds (Humera)", specs: ["Purity 99% min", "Oil 50% min", "Moisture 7% max"] },
      { name: "Sesame Seeds (Wolega)", specs: ["Purity 98.5% min", "Oil 52% min", "Moisture 7% max"] },
      { name: "Castor Seeds", specs: ["Machine cleaned", "High oil yield"] },
      { name: "Niger Seeds", specs: ["Premium grade", "Cold-press ready"] },
      { name: "Flax Seeds", specs: ["Purity 98.5% min", "Oil 45% min"] },
    ],
  },
  {
    slug: "coffee",
    name: "Arabica Coffee",
    image: coffee,
    tagline: "Highland-grown, distinctive flavor.",
    items: [
      { name: "Washed — Sidamo Gr 1 & 2", specs: ["Bright, floral", "Clean cup"] },
      { name: "Washed — Yirgacheffe Gr 1 & 2", specs: ["Citrus, jasmine", "World-class"] },
      { name: "Natural — Sidamo & Yirgacheffe Gr 1", specs: ["Sun-dried", "Berry-forward"] },
      { name: "Natural — Nekempt Gr 4 & 5", specs: ["Full body"] },
      { name: "Natural — Djimma Gr 4 & 5", specs: ["Earthy, balanced"] },
    ],
  },
  {
    slug: "pulses",
    name: "Pulses",
    image: pulses,
    tagline: "Protein and fiber powerhouses.",
    items: [
      { name: "White Pea Beans", specs: ["Purity 98% min", "Moisture 13% max"] },
      { name: "Red Speckled Kidney Beans", specs: ["Sortex cleaned + HPS"] },
      { name: "Red Kidney Beans", specs: ["Wolkite & South types"] },
      { name: "Kabuli Chick Peas", specs: ["Size 7–10mm"] },
      { name: "Desi Chick Peas", specs: ["Size 4–5mm"] },
      { name: "Pinto Beans", specs: ["Premium export"] },
      { name: "Lupin Beans", specs: ["Sweet variety"] },
      { name: "Green Mung Beans", specs: ["Sprouts well"] },
      { name: "Faba Beans", specs: ["Protein 38% min"] },
      { name: "Black Beans", specs: ["Sortex grade"] },
    ],
  },
  {
    slug: "spices",
    name: "Spices",
    image: spices,
    tagline: "Potent flavor, traditional roots.",
    items: [
      { name: "Turmeric (Whole Finger)", specs: ["Double polished", "Moisture 12% max"] },
      { name: "Black Cumin", specs: ["Purity 98%", "Gluten & lactose free"] },
    ],
  },
];

export const countries = ["UK", "Italy", "China", "Germany", "El Salvador", "Russia", "Indonesia", "Dubai", "India"];

export const testimonials = [
  { from: "Eric Feng — Sinopharm Fortune Way, China", quote: "Dear Kibrom, your shipments arrive on time and at the quality we expect. A reliable partner." },
  { from: "Li — China Citexic Corporation", quote: "Soybean contract signed. We will open the LC according to the contract and arrange the delivery." },
];
