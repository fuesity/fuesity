// pages/products/gtd/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gtdProducts } from "../../../lib/gtdProducts";

export default function GtdProductPage({ product }: { product: any }) {
  return (
    <>
      <Head>
        <title>{product.name} | GTD Store</title>
      </Head>

      <main
        style={{
          maxWidth: 800,
          margin: "40px auto",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        <Link href="/products/gtd" style={{ textDecoration: "none", color: "#555" }}>
          ← Back to GTD Store
        </Link>

        <h1 style={{ marginTop: 20 }}>{product.name}</h1>

        <Image
          src={product.img}
          alt={product.name}
          width={800}
          height={800}
          style={{ width: "100%", height: "auto", borderRadius: 12, marginTop: 16 }}
        />

        <p style={{ fontSize: 20, marginTop: 24 }}>
          <strong>Price:</strong> ${product.price}
        </p>

        <button
          style={{
            marginTop: 20,
            background: "#2ecc71",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={() => alert("Checkout coming soon!")}
        >
          Buy Now
        </button>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: gtdProducts.map((p) => ({
    params: { slug: p.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    product: gtdProducts.find((p) => p.slug === params?.slug),
  },
});
