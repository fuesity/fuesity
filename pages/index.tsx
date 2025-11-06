import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Steal A Brainrot", url: "/products/brainrot" },
    { name: "Murder Mystery 2", url: "/products/mm2" },
    { name: "Garden Tower Defense", url: "/products/gtd" },
    { name: "Adopt Me", url: "/products/adoptme" },
  ];

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "40px" }}>
      <h1>Fuesity Store</h1>
      <p>Select a category:</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}>
        {categories.map((c, i) => (
          <Link key={i} href={c.url} style={{
            display: "block",
            border: "2px solid black",
            padding: "40px 20px",
            borderRadius: "12px",
            fontSize: "20px",
            background: "#f4f4f4",
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}>
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
