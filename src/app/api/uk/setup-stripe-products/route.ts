import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with test key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia'
});

export async function GET() {
  try {
    // First try to find existing product
    const existingProducts = await stripe.products.list({
      limit: 1,
      active: true
    });

    let product;
    if (existingProducts.data.length > 0 && existingProducts.data[0].name === 'FaceKorea Protocol UK') {
      product = existingProducts.data[0];
      
      // Get existing prices
      const existingPrices = await stripe.prices.list({
        product: product.id,
        active: true
      });

      // If prices exist, return them
      if (existingPrices.data.length > 0) {
        const prices = {
          monthly: existingPrices.data.find(p => p.metadata.plan === 'monthly'),
          semiannual: existingPrices.data.find(p => p.metadata.plan === 'semiannual'),
          annual: existingPrices.data.find(p => p.metadata.plan === 'annual')
        };

        if (prices.monthly && prices.semiannual && prices.annual) {
          return NextResponse.json({ 
            success: true,
            product,
            prices
          });
        }
      }
    } else {
      // Create new product if it doesn't exist
      product = await stripe.products.create({
        name: 'FaceKorea Protocol UK',
        description: 'Complete facial exercise protocol with expert guidance',
      });
    }

    // Create new prices
    const prices = {
      monthly: await stripe.prices.create({
        product: product.id,
        currency: 'gbp',
        unit_amount: 7900, // £79.00
        recurring: {
          interval: 'month'
        },
        metadata: {
          plan: 'monthly'
        }
      }),
      semiannual: await stripe.prices.create({
        product: product.id,
        currency: 'gbp',
        unit_amount: 3900, // £39.00
        recurring: {
          interval: 'month'
        },
        metadata: {
          plan: 'semiannual'
        }
      }),
      annual: await stripe.prices.create({
        product: product.id,
        currency: 'gbp',
        unit_amount: 1900, // £19.00
        recurring: {
          interval: 'month'
        },
        metadata: {
          plan: 'annual'
        }
      })
    };

    return NextResponse.json({ 
      success: true,
      product,
      prices
    });

  } catch (error) {
    console.error('Error setting up Stripe products:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to setup Stripe products'
    }, { status: 500 });
  }
} 