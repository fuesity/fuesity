export type SKU = '100k' | '250k' | '500k' | '1000k';

export type GameKey = 'steal-a-brainrot' | 'murder-mystery-2' | 'adopt-me' | 'garden-tower-defense';

export type Product = {
  id: string; // e.g., 'garden-tower-defense:100k'
  game: GameKey;
  sku: SKU;
  title: string;
  price_cents: number;
  active: boolean;
};

export const GAMES: { key: GameKey; name: string; description?: string }[] = [
  { key: 'steal-a-brainrot', name: 'Steal A Brainrot' },
  { key: 'murder-mystery-2', name: 'Murder Mystery 2' },
  { key: 'adopt-me', name: 'Adopt Me' },
  { key: 'garden-tower-defense', name: 'Garden Tower Defense' },
];

// Editable catalog: toggle active=true when ready to sell for that game.
export const CATALOG: Product[] = [
  // Garden Tower Defense (active)
  { id: 'garden-tower-defense:100k', game: 'garden-tower-defense', sku: '100k', title: 'GTD — 100K Seeds — $9.99', price_cents: 999, active: true },
  { id: 'garden-tower-defense:250k', game: 'garden-tower-defense', sku: '250k', title: 'GTD — 250K Seeds — $22.99', price_cents: 2299, active: true },
  { id: 'garden-tower-defense:500k', game: 'garden-tower-defense', sku: '500k', title: 'GTD — 500K Seeds — $34.99', price_cents: 3499, active: true },
  { id: 'garden-tower-defense:1000k', game: 'garden-tower-defense', sku: '1000k', title: 'GTD — 1,000,000 Seeds — $49.99', price_cents: 4999, active: true },

  // Placeholders for other games (set active: true and set prices when ready)
  { id: 'steal-a-brainrot:pack-a', game: 'steal-a-brainrot', sku: '100k', title: 'SAB — Pack A (edit me)', price_cents: 999, active: false },
  { id: 'murder-mystery-2:pack-a', game: 'murder-mystery-2', sku: '100k', title: 'MM2 — Pack A (edit me)', price_cents: 999, active: false },
  { id: 'adopt-me:pack-a', game: 'adopt-me', sku: '100k', title: 'Adopt Me — Pack A (edit me)', price_cents: 999, active: false },
];
