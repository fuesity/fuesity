// pages/index.tsx
import Link from "next/link";

export default function Home() {
  const cats = [
    { slug: "brainrot", title: "Steal A Brainrot" },
    { slug: "mm2", title: "Murder Mystery 2" },
    { slug: "gtd", title: "Garden Tower Defense" },
    { slug: "adoptme", title: "Adopt Me" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-4 text-center text-2xl font-bold">fuesity</header>

      <section className="px-4 pb-8 grid gap-4 max-w-md mx-auto">
        {cats.map((c) => (
          <Link
            key={c.slug}
            href={`/c/${c.slug}`}
            className="rounded-2xl h-20 flex items-center justify-center text-lg font-semibold bg-neutral-900 border border-neutral-800 active:scale-[0.98] transition"
          >
            {c.title}
          </Link>
        ))}
      </section>
    </main>
  );
}
