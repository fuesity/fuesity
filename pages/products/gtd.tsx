import React from "react";
import Image from "next/image";

export default function GTD() {
  const products = [
    { name: "Witchleaf", price: 14, image: "/witchleaf.png" },
    { name: "Prismleaf", price: 11, image: "/prismleaf.png" },
    { name: "Chomp Man", price: 10, image: "/chompman.png" },
    { name: "Blossom Barrage", price: 10, image: "/blossom-barrage.png" },
    { name: "Corrupted Stem", price: 7, image: "/corrupted-stem.png" },
    { name: "Confusion Plant", price: 6, image: "/confusion-plant.png" },
    { name: "Beehive", price: 6, image: "/beehive.png" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GTD Store</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.name} style={styles.card}>
            <Image
              src={p.image}
              alt={p.name}
              width={300}
              height={300}
              style={{ borderRadius: 10 }}
            />
            <p style={styles.text}>{p.name}</p>
            <p style={styles.price}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fafafa",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #ddd",
  },
  text: {
    fontSize: "20px",
    marginTop: "10px",
    fontWeight: 700,
  },
  price: {
    color: "green",
    fontSize: "18px",
    marginTop: "5px",
  },
};
