import Image from "next/image";
import Link from "next/link";

const ITEMS = [
  { id: "witchleaf",        name: "Witchleaf",       price: 14, img: "/witchleaf.png" },
  { id: "prismleaf",        name: "Prismleaf",       price: 11, img: "/prismleaf.png" },
  { id: "chompman",         name: "Chomp Man",       price: 10, img: "/chompman.png" },
  { id: "blossom-barrage",  name: "Blossom Barrage", price: 10, img: "/blossom-barrage.png" },
  { id: "corrupted-stem",   name: "Corrupted Stem",  price: 7,  img: "/corrupted-stem.png" },
  { id: "confusion-plant",  name: "Confusion Plant", price: 6,  img: "/confusion-plant.png" },
  { id: "beehive",          name: "Beehive",         price: 6,  img: "/beehive.png" },
];

export default function GTD() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-4 flex items-center gap-3">
        <Link href="/" className="text-sm opacity-70">← Back</Link>
        <h1 className="text-lg font-bold">Garden Tower Defense Store</h1>
      </header>

      <section className="px-4 pb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {ITEMS.map((p) => (
          <div key={p.id} className="rounded-2xl bg-neutral-900 p-3 border border-neutral-800">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-800">
              <Image src={p.img} alt={p.name} fill className="object-cover" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-medium">{p.name}</span>
              <span className="text-sm font-semibold">${p.price.toFixed(2)}</span>
            </div>

            <button className="mt-3 w-full rounded-xl bg-white text-black py-2 text-sm font-semibold">
              Buy
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
