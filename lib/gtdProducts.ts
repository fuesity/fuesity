// lib/gtdProducts.ts

export type GtdProduct = {
  slug: string;
  name: string;
  price: number;
  img: string; // path under /public
};

export const gtdProducts: GtdProduct[] = [
  { slug: "witchleaf", name: "Witchleaf", price: 14, img: "/witchleaf.png" },
  { slug: "prismleaf", name: "Prismleaf", price: 11, img: "/prismleaf.png" },
  { slug: "chomp-man", name: "Chomp Man", price: 10, img: "/chompman.png" },
  { slug: "blossom-barrage", name: "Blossom Barrage", price: 10, img: "/blossom-barrage.png" },
  { slug: "corrupted-stem", name: "Corrupted Stem", price: 7, img: "/corrupted-stem.png" },
  { slug: "confusion-plant", name: "Confusion Plant", price: 6, img: "/confusion-plant.png" },
  { slug: "beehive", name: "Beehive", price: 6, img: "/beehive.png" },
];
