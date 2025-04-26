import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

export async function GET() {
  try {
    // Create or retrieve the product
    let product = await stripe.products.create({
      name: 'FaceKorea Protocol UK',
      description: 'Complete facial protocol with support and guarantee',
    });

    // Create prices for different subscription intervals
    const prices = {
      monthly: await stripe.prices.create({
        product: product.id,
        unit_amount: 7900, // £79.00
        currency: 'gbp',
        recurring: {
          interval: 'month',
        },
        metadata: {
          type: 'monthly'
        }
      }),
      semiannual: await stripe.prices.create({
        product: product.id,
        unit_amount: 23400, // £234.00 (£39 * 6)
        currency: 'gbp',
        recurring: {
          interval: 'month',
          interval_count: 6
        },
        metadata: {
          type: 'semiannual'
        }
      }),
      annual: await stripe.prices.create({
        product: product.id,
        unit_amount: 22800, // £228.00 (£19 * 12)
        currency: 'gbp',
        recurring: {
          interval: 'month',
          interval_count: 12
        },
        metadata: {
          type: 'annual'
        }
      })
    };

    // Update the product with the default price (monthly)
    await stripe.products.update(product.id, {
      default_price: prices.monthly.id
    });

    return NextResponse.json({ product, prices });
  } catch (error) {
    console.error('Error setting up Stripe products:', error);
    return NextResponse.json(
      { error: 'Failed to setup Stripe products' },
      { status: 500 }
    );
  }
} 