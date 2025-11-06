// pages/products/gtd/[slug].tsx
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gtdProducts } from "../../../lib/gtdProducts";

export default function GtdProductPage() {
  const { query } = useRouter();
  const slug = String(query.slug || "");
  const product = gtdProducts.find((p) => p.slug === slug);

  return (
    <>
      <Head><title>{product ? `${product.name} | GTD` : "GTD Item"}</title></Head>

      <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
        <Link href="/products/gtd" style={{ textDecoration: "none", color: "#555" }}>
          ← Back to GTD
        </Link>

        {!product ? (
          <p style={{ marginTop: 20 }}>Loading… (If this doesn’t load, the slug might not match your data.)</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) 1fr",
            gap: 24, alignItems: "start", marginTop: 16
          }}>
            <Image
              src={product.img}  // e.g. "/witchleaf.png"
              alt={product.name}
              width={800}
              height={800}
              style={{ width: "100%", height: "auto", borderRadius: 12 }}
              priority
            />

            <section>
              <h1 style={{ margin: "0 0 8px" }}>{product.name}</h1>
              <div style={{ fontSize: 24, color: "#2e7d32", marginBottom: 16 }}>${product.price}</div>

              <p style={{ lineHeight: 1.6 }}>
                Fast delivery. Message your username after purchase. 24-hour delivery guarantee.
              </p>

              <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                <a
                  href="https://discord.com/users/your-handle"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "10px 16px",
                    background: "#111",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Buy / DM on Discord
                </a>
                <Link
                  href="/products/gtd"
                  style={{
                    display: "inline-block",
                    padding: "10px 16px",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  Keep shopping
                </Link>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
}
