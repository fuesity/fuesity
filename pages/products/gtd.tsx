import Image from "next/image";

export default function GTD() {
  const products = [
    { name: "Witchleaf", price: 14, img: "/witchleaf.png" },
    { name: "Prismleaf", price: 11, img: "/prismleaf.png" },
    { name: "Chomp Man", price: 10, img: "/chompman.png" },
    { name: "Blossom Barrage", price: 10, img: "/blossom-barrage.png" },
    { name: "Corrupted Stem", price: 7, img: "/corrupted-stem.png" },
    { name: "Confusion Plant", price: 6, img: "/confusion-plant.png" },
    { name: "Beehive", price: 6, img: "/beehive.png" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-6">GTD Store</h1>

      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
        {products.map((item) => (
          <div key={item.name} className="rounded-xl bg-neutral-900 p-4">
            <Image
              src={item.img}
              alt={item.name}
              width={500}
              height={500}
              className="rounded-lg mb-3"
            />
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.name}</span>
              <span className="opacity-70">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
