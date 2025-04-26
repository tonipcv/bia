import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia',
});

export async function GET() {
  try {
    // First, try to find existing product
    const existingProducts = await stripe.products.list({
      limit: 1,
      active: true,
    });

    let product;
    let prices;

    if (existingProducts.data.length > 0) {
      // Use existing product
      product = existingProducts.data[0];
      
      // Get existing prices
      const existingPrices = await stripe.prices.list({
        product: product.id,
        active: true,
      });

      prices = {
        ninetyDays: existingPrices.data.find(p => p.recurring?.interval === 'day' && p.recurring.interval_count === 90),
        sevenDays: existingPrices.data.find(p => p.recurring?.interval === 'day' && p.recurring.interval_count === 7),
        twentyEightDays: existingPrices.data.find(p => p.recurring?.interval === 'day' && p.recurring.interval_count === 28),
      };

      // Only create missing prices
      if (!prices.sevenDays) {
        prices.sevenDays = await stripe.prices.create({
          product: product.id,
          unit_amount: 6300,
          currency: 'brl',
          recurring: { 
            interval: 'day',
            interval_count: 7
          },
          metadata: { 
            type: 'seven_days',
            price_per_day: '9.00'
          }
        });
      }

      if (!prices.twentyEightDays) {
        prices.twentyEightDays = await stripe.prices.create({
          product: product.id,
          unit_amount: 11200,
          currency: 'brl',
          recurring: { 
            interval: 'day',
            interval_count: 28
          },
          metadata: { 
            type: 'twenty_eight_days',
            price_per_day: '4.00'
          }
        });
      }

      if (!prices.ninetyDays) {
        prices.ninetyDays = await stripe.prices.create({
          product: product.id,
          unit_amount: 18000,
          currency: 'brl',
          recurring: { 
            interval: 'day',
            interval_count: 90
          },
          metadata: { 
            type: 'ninety_days',
            price_per_day: '2.00'
          }
        });
      }
    } else {
      // Create new product and prices if none exist
      product = await stripe.products.create({
        name: 'Protocolo FaceKorea',
        description: 'Protocolo facial coreano para rejuvenescimento',
      });

      prices = {
        sevenDays: await stripe.prices.create({
          product: product.id,
          unit_amount: 6300, // R$63,00
          currency: 'brl',
          recurring: { 
            interval: 'day',
            interval_count: 7
          },
          metadata: { 
            type: 'seven_days',
            price_per_day: '9.00'
          }
        }),
        twentyEightDays: await stripe.prices.create({
          product: product.id,
          unit_amount: 11200, // R$112,00
          currency: 'brl',
          recurring: { 
            interval: 'day',
            interval_count: 28
          },
          metadata: { 
            type: 'twenty_eight_days',
            price_per_day: '4.00'
          }
        }),
        ninetyDays: await stripe.prices.create({
          product: product.id,
          unit_amount: 18000, // R$180,00
          currency: 'brl',
          recurring: { 
            interval: 'day',
            interval_count: 90
          },
          metadata: { 
            type: 'ninety_days',
            price_per_day: '2.00'
          }
        })
      };

      // Set default price
      await stripe.products.update(product.id, {
        default_price: prices.ninetyDays.id
      });
    }

    return NextResponse.json({ product, prices });
  } catch (error) {
    console.error('Error setting up Stripe products:', error);
    return NextResponse.json(
      { error: 'Failed to setup Stripe products' },
      { status: 500 }
    );
  }
} 