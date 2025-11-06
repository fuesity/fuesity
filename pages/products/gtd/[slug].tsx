// pages/products/gtd/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gtdProducts, type GtdProduct } from "@/lib/gtdProducts";

type Props = { product: GtdProduct };

export default function GtdProductPage({ product }: Props) {
  return (
    <>
      <Head>
        <title>{product.name} | GTD Store</title>
      </Head>

      <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
        <Link href="/products/gtd" style={{ textDecoration: "none" }}>
          ← Back to GTD
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) 1fr",
            gap: 24,
            alignItems: "start",
            marginTop: 16,
          }}
        >
          <Image
            src={product.img}
            alt={product.name}
            width={800}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: 12 }}
            priority
          />

          <section>
            <h1 style={{ margin: "0 0 8px" }}>{product.name}</h1>
            <div style={{ fontSize: 24, color: "#2e7d32", marginBottom: 16 }}>
              ${product.price}
            </div>

            <p style={{ lineHeight: 1.6 }}>
              Instant delivery after purchase. If you want a custom amount or
              bundle, message me and I’ll set it up for you.
            </p>

            {/* Replace this with your real checkout flow when ready */}
            <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
              <a
                href="https://discord.com/users/your-handle" // <- your contact/checkout link
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  background: "#111",
                  color: "#fff",
                  borderRadius: 8,
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
                }}
              >
                Keep shopping
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: gtdProducts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false, // 404 for unknown slugs
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const product = gtdProducts.find((p) => p.slug === slug);
  if (!product) return { notFound: true };
  return { props: { product } };
};
