import Link from 'next/link';
import { GAMES } from '../lib/catalog';

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: '40px auto', padding: '0 16px' }}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:12}}>
        <img src="/logo.png" alt="Fuesity" width={48} height={48} />
        <h1 style={{ textAlign: 'center', margin: 0 }}>Fuesity — Game Shop</h1>
      </div>
      <p style={{ textAlign: 'center', marginTop: 0, color:'#444' }}>
        Choose a game to see available bundles.
      </p>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:16, marginTop:16}}>
        {GAMES.map(g => (
          <Link key={g.key} href={`/game/${g.key}`} style={{textDecoration:'none', color:'inherit'}}>
            <div style={{border:'1px solid #ddd', borderRadius:8, padding:16}}>
              <div style={{fontWeight:800, marginBottom:6}}>{g.name}</div>
              <div style={{fontSize:12, color:'#666'}}>Tap to view bundles</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{marginTop:28, fontSize:12, color:'#666', textAlign:'center'}}>
        Need help? Join our Discord after checkout to confirm delivery. By purchasing, you agree to delivery within 24–72 hours and no refunds after delivery.
      </div>
    </main>
  );
}
