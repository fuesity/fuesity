// pages/products/gtd.tsx
import Image from "next/image";
import Link from "next/link";
import { gtdProducts } from "@/lib/gtdProducts";

export default function GtdGrid() {
  return (
    <main style={{ maxWidth: 1100, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 24 }}>GTD Store</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {gtdProducts.map((p) => (
          <Link
            key={p.slug}
            href={`/products/gtd/${p.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,0,0,.06)",
            }}
          >
            <Image
              src={p.img}
              alt={p.name}
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <div style={{ fontWeight: 600 }}>{p.name}</div>
              <div style={{ color: "#2e7d32", marginTop: 4 }}>${p.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
