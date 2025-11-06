import Link from "next/link";
import { CSSProperties } from "react";

const container: CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f7f7f7",
  padding: "40px",
  fontFamily: "Inter, system-ui, Arial, sans-serif",
};

const card: CSSProperties = {
  width: "100%",
  maxWidth: 560,
  background: "#fff",
  border: "1px solid #eaeaea",
  borderRadius: 16,
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  padding: "28px 28px 20px",
};

const title: CSSProperties = {
  textAlign: "center",
  fontSize: 28,
  fontWeight: 800,
  letterSpacing: 0.3,
  margin: "0 0 16px",
};

const subtitle: CSSProperties = {
  textAlign: "center",
  color: "#666",
  margin: "0 0 18px",
};

const list: CSSProperties = {
  display: "grid",
  gap: 12,
  margin: 0,
  padding: 0,
  listStyle: "none",
};

const itemLink: CSSProperties = {
  display: "block",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid #eaeaea",
  background: "#fafafa",
  textDecoration: "none",
  color: "#111",
  fontWeight: 600,
  textAlign: "center",
  transition: "transform 120ms ease, box-shadow 120ms ease, background 120ms ease",
} as CSSProperties;

const itemLinkHover: CSSProperties = {
  boxShadow: "0 8px 18px rgba(0,0,0,0.07)",
  background: "#fff",
  transform: "translateY(-1px)",
};

export default function Home() {
  const categories = [
    { name: "Steal A Brainrot", url: "/products/brainrot" },
    { name: "Murder Mystery 2", url: "/products/mm2" },
    { name: "Garden Tower Defense", url: "/products/gtd" },
    { name: "Adopt Me", url: "/products/adoptme" },
  ];

  return (
    <main style={container}>
      <section style={card}>
        <h1 style={title}>Fuesity Store</h1>
        <p style={subtitle}>Choose a category</p>

        <ul style={list}>
          {categories.map((c) => (
            <li key={c.url}>
              <Link
                href={c.url}
                style={itemLink}
                onMouseEnter={(e) =>
                  Object.assign((e.currentTarget as HTMLAnchorElement).style, itemLinkHover)
                }
                onMouseLeave={(e) =>
                  Object.assign((e.currentTarget as HTMLAnchorElement).style, itemLink)
                }
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
