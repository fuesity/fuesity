// pages/products/gtd/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gtdProducts } from "../../../lib/gtdProducts";

export default function GtdList() {
  return (
    <>
      <Head><title>GTD Store</title></Head>

      <main style={{ maxWidth: 1100, margin: "40px auto", padding: "0 16px" }}>
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>GTD Store</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 24,
        }}>
          {gtdProducts.map((p) => (
            <Link key={p.slug} href={`/products/gtd/${p.slug}`} legacyBehavior passHref>
              <a style={{
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 14,
                boxShadow: "0 2px 10px rgba(0,0,0,.06)",
                display: "block",
                background: "#fff",
                cursor: "pointer",
              }}>
                <Image
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  style={{ width: "100%", height: "auto", borderRadius: 12 }}
                />
                <div style={{ textAlign: "center", marginTop: 12 }}>
                  <h3 style={{ margin: 0 }}>{p.name}</h3>
                  <div style={{ fontSize: 18, marginTop: 6, color: "#2ecc71" }}>${p.price}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
