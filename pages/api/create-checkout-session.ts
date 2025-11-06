import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { CATALOG } from '../../lib/catalog';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  try {
    const { productId, username } = req.body as { productId: string; username: string };
    if (!productId || !username) return res.status(400).send('Missing productId or username');

    const prod = CATALOG.find(p => p.id === productId);
    if (!prod) return res.status(400).send('Invalid product');
    if (!prod.active) return res.status(400).send('Product not active');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: prod.title },
          unit_amount: prod.price_cents,
        },
        quantity: 1,
      }],
      metadata: { productId, username },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      automatic_tax: { enabled: false },
    });

    return res.status(200).json({ url: session.url });
  } catch (e: any) {
    console.error('create-checkout-session error', e);
    return res.status(500).send(e?.message ?? 'Server error');
  }
}
