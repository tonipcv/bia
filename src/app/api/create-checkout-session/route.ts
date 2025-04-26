import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Preços para o teste inicial
const TRIAL_PRICES = {
  5: {
    amount: 500, // R$ 5,00 em centavos
    currency: 'brl',
  },
  10: {
    amount: 1000, // R$ 10,00 em centavos
    currency: 'brl',
  },
  30: {
    amount: 3000, // R$ 30,00 em centavos
    currency: 'brl',
  }
};

// Preço da assinatura mensal após o período de teste
const SUBSCRIPTION_PRICE_ID = 'price_1RIF5YDghBHQr9d1K6fnyB1u'; // R$ 97/mês

// Base URL for different environments
const baseUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_DOMAIN || 'https://your-production-domain.com';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { amount, email } = body;

    // Validate amount
    if (!TRIAL_PRICES[amount as keyof typeof TRIAL_PRICES]) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const trialPrice = TRIAL_PRICES[amount as keyof typeof TRIAL_PRICES];

    // Criar um produto para o pagamento inicial
    const trialProduct = await stripe.products.create({
      name: `Período Teste - R$ ${amount},00`,
      description: 'Acesso inicial ao Cristão AI',
    });

    // Criar um preço único para o pagamento inicial
    const trialPayment = await stripe.prices.create({
      product: trialProduct.id,
      unit_amount: trialPrice.amount,
      currency: trialPrice.currency,
    });

    // Create a customer
    const customer = await stripe.customers.create({
      email: email,
      metadata: {
        trialAmount: amount
      }
    });

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: customer.id,
      line_items: [
        // Pagamento inicial
        {
          price: trialPayment.id,
          quantity: 1,
        },
        // Assinatura que começará após 14 dias
        {
          price: SUBSCRIPTION_PRICE_ID,
          quantity: 1,
          adjustable_quantity: {
            enabled: false,
          },
        }
      ],
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          trialAmount: amount
        }
      },
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}?canceled=true`,
      billing_address_collection: 'required',
      locale: 'pt-BR',
      allow_promotion_codes: true,
      consent_collection: {
        terms_of_service: 'required',
      },
      custom_text: {
        terms_of_service_acceptance: {
          message: 'Ao assinar, você concorda com os Termos de Serviço e reconhece que após o período de teste de 14 dias, sua assinatura será renovada automaticamente por R$ 97/mês.'
        }
      }
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 