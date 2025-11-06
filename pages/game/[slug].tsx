import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { CATALOG, GAMES } from '../../lib/catalog';

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [username, setUsername] = useState<string>('');
  const [selected, setSelected] = useState<string>('');

  const game = useMemo(() => GAMES.find(g => g.key === slug), [slug]);
  const products = useMemo(() => CATALOG.filter(p => p.game === slug), [slug]);

  async function checkout() {
    if (!username.trim()) {
      alert('Please enter your exact Roblox username (not display name).');
      return;
    }
    if (!selected) {
      alert('Please select a bundle.');
      return;
    }
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: selected, username })
    });
    if (!res.ok) {
      const msg = await res.text();
      alert('Error creating checkout: ' + msg);
      return;
    }
    const data = await res.json();
    window.location.href = data.url;
  }

  if (!game) return null;

  return (
    <main style={{ maxWidth: 680, margin: '40px auto', padding: '0 16px' }}>
      <a href="/" style={{textDecoration:'none'}}>&larr; All Games</a>
      <h1 style={{marginTop:8}}>{game.name}</h1>

      <label style={{ display: 'block', marginTop: 10, marginBottom: 6, fontWeight: 600 }}>
        Roblox Username
      </label>
      <input
        placeholder="Exact Roblox username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #ccc' }}
      />

      <div style={{ height: 12 }} />

      <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
        Choose Bundle
      </label>

      <div>
        {products.map(p => (
          <ProductCard
            key={p.id}
            title={p.title + (p.active ? '' : ' — (coming soon)')}
            selected={selected === p.id}
            onClick={() => p.active && setSelected(p.id)}
            disabled={!p.active}
          />
        ))}
      </div>

      <button
        onClick={checkout}
        style={{
          marginTop: 12,
          width: '100%',
          padding: '14px 16px',
          border: 'none',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
          background: '#ff1391',
          color: 'white'
        }}
      >
        Pay (Card / Apple Pay / Google Pay)
      </button>

      <p style={{ fontSize: 12, color: '#555', marginTop: 12 }}>
        By checking out, you agree to delivery within 24–72 hours and no refunds after delivery.
      </p>
    </main>
  );
}
