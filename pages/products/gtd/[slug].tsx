import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from "react";
import { gtdProducts } from "@/lib/gtdProducts";

const wrap: CSSProperties = { padding: "32px 20px", maxWidth: 980, margin: "0 auto", fontFamily: "Inter, system-ui, Arial" };
const head: CSSProperties = { display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" };
const box: CSSProperties = { flex: "1 1 420px", border: "1px solid #eaeaea", borderRadius: 14, background: "#fff", overflow: "hidden",
  boxShadow: "0 6px 16px rgba(0,0,0,0.06)" };
const meta: CSSProperties = { flex: "1 1 300px" };
const title: CSSProperties = { margin: "6px 0 10px", fontSize: 28, fontWeight: 800 };
const price: CSSProperties = { color: "#0a7c2f", fontWeight: 800, fontSize: 22, marginBottom: 12 };
const btnRow: CSSProperties = { display: "flex", gap: 12, flexWrap: "wrap" };
const btn: CSSProperties = { padding: "10px 14px", borderRadius: 10, border: "1px solid #111", background: "#111", color: "#fff",
  textDecoration: "none", fontWeight: 700 };
const ghost: CSSProperties = { ...btn, background: "#fff", color: "#111" };

export default function GtdItemPage() {
  const { query } = useRouter();
  const slug = String(query.slug || "");
  const product = gtdProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main style={wrap}>
        <p>Not found.</p>
        <Link href="/products/gtd">← Back to GTD</Link>
      </main>
    );
  }

  return (
    <main style={wrap}>
      <div style={head}>
        <div style={box}>
          <Image
            src={product.img}
            alt={product.name}
            width={1100}
            height={1100}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>

        <div style={meta}>
          <h1 style={title}>{product.name}</h1>
          <div style={price}>${product.price}</div>

          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: 16 }}>
            Fast delivery. Message your Roblox username after purchase. 24-hour delivery guarantee.
          </p>

          <div style={btnRow}>
            {/* Hook this up to Stripe/checkout later */}
            <a href="#" style={btn}>Buy Now</a>
            <Link href="/products/gtd" style={ghost as CSSProperties}>Back to GTD</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
