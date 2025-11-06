# Fuesity Shop — Multi-Game (Next.js + Stripe)

This version supports **categories/games** with editable products.

## Edit categories/products
Open `lib/catalog.ts` and edit:
- `GAMES` list — add/remove games.
- `CATALOG` array — add products, set `active: true` and `price_cents`.

Only products with `active: true` are purchasable.

## Pages
- `/` — game categories grid
- `/game/[slug]` — product list for a game
- `/api/create-checkout-session` — Stripe Checkout (Apple Pay / Google Pay enabled)
- `/api/stripe-webhook` — handle `checkout.session.completed`

## Deploy
Same steps as before (Vercel + Stripe webhook). Update `NEXT_PUBLIC_SITE_URL` and webhook URL if you use a custom domain.
