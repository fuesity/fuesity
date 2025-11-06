import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import { gtdProducts } from "@/lib/gtdProducts";

const wrap: CSSProperties = { padding: "32px 20px", maxWidth: 1200, margin: "0 auto" };
const title: CSSProperties = { textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 18 };

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: 18,
};

const card: CSSProperties = {
  border: "1px solid #eaeaea",
  borderRadius: 14,
  background: "#fff",
  overflow: "hidden",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
  transition: "transform 120ms ease, box-shadow 120ms ease",
};

const cardBody: CSSProperties = { padding: "12px 14px 16px", textAlign: "center" };
const name: CSSProperties = { margin: "10px 0 6px", fontWeight: 700 };
const price: CSSProperties = { color: "#0a7c2f", fontWeight: 700 };

export default function GTDList() {
  return (
    <main style={wrap}>
      <h1 style={title}>GTD Store</h1>

      <div style={grid}>
        {gtdProducts.map((p) => (
          <Link key={p.slug} href={`/products/gtd/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <article style={card as CSSProperties}>
              <Image
                src={p.img}
                alt={p.name}
                width={900}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
              <div style={cardBody}>
                <div style={name}>{p.name}</div>
                <div style={price}>${p.price}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
