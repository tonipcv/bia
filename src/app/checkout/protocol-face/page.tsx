"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { ArrowLeft, Check } from "lucide-react";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const defaultPlans = [
  {
    name: "Plano de 28 dias",
    price: "112",
    pricePerDay: "4,00",
    period: "28 dias",
    priceId: "",
    popular: true,
    features: [
      "Protocolo Coreano Completo",
      "Acesso ao App Exclusivo",
      "Suporte via WhatsApp",
      "Garantia de 7 dias"
    ]
  },
  {
    name: "Plano de 90 dias",
    price: "180",
    pricePerDay: "2,00",
    period: "90 dias",
    priceId: "",
    features: [
      "Protocolo Coreano Completo",
      "Acesso ao App Exclusivo",
      "Suporte via WhatsApp",
      "Atualizações e Bônus",
      "Garantia de 7 dias"
    ]
  },
  {
    name: "Plano de 7 dias",
    price: "63",
    pricePerDay: "9,00",
    period: "7 dias",
    priceId: "",
    features: [
      "Protocolo Coreano Básico",
      "Suporte via WhatsApp",
      "Acesso por 7 dias",
      "Garantia de 7 dias"
    ]
  }
];

interface StripePrice {
  id: string;
  nickname: string;
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [plans, setPlans] = useState(defaultPlans);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    // Track page view for checkout
    if (typeof window !== 'undefined') {
      // Facebook Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView');
        (window as any).fbq('track', 'InitiateCheckout', {
          content_category: 'Protocol Face',
          content_name: 'Checkout Page',
          currency: 'BRL'
        });
      }

      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'begin_checkout', {
          currency: 'BRL',
          event_category: 'ecommerce',
          event_label: 'Protocol Face Checkout'
        });
      }
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    setLoadingPrices(true);
    fetch('/api/setup-stripe-products-brl')
      .then(response => response.json())
      .then((data) => {
        console.log('Received prices data:', data); // Debug log
        if (data && data.prices) {
          const ninetyDaysPrice = data.prices.ninetyDays?.id || "";
          const sevenDaysPrice = data.prices.sevenDays?.id || "";
          const twentyEightDaysPrice = data.prices.twentyEightDays?.id || "";

          setPlans(plans.map((plan, index) => ({
            ...plan,
            priceId: index === 0 ? twentyEightDaysPrice :
                     index === 1 ? ninetyDaysPrice :
                     sevenDaysPrice
          })));
        } else {
          console.error('Invalid prices data:', data);
          setPlans(defaultPlans);
        }
      })
      .catch(error => {
        console.error('Error fetching prices:', error);
        setPlans(defaultPlans);
      })
      .finally(() => setLoadingPrices(false));
  }, []);

  const handleSubscribe = async (priceId: string) => {
    try {
      if (!priceId) {
        console.error('No price ID provided');
        return;
      }

      setLoading(true);
      console.log('Starting checkout with priceId:', priceId); // Debug log
      
      // Track initiate checkout event
      if (typeof window !== 'undefined') {
        const selectedPlanDetails = plans.find(plan => plan.priceId === priceId);
        
        // Facebook Pixel
        if ((window as any).fbq) {
          (window as any).fbq('track', 'InitiateCheckout', {
            content_category: 'Protocol Face',
            content_name: selectedPlanDetails?.name || '',
            content_type: 'product',
            value: parseFloat(selectedPlanDetails?.price || '0'),
            currency: 'BRL',
            num_items: 1
          });
        }

        // Google Analytics
        if ((window as any).gtag) {
          (window as any).gtag('event', 'add_to_cart', {
            currency: 'BRL',
            value: parseFloat(selectedPlanDetails?.price || '0'),
            items: [{
              item_id: priceId,
              item_name: selectedPlanDetails?.name || '',
              price: parseFloat(selectedPlanDetails?.price || '0'),
              quantity: 1
            }],
            event_category: 'ecommerce',
            event_label: selectedPlanDetails?.name || ''
          });
        }
      }
      
      const domain = window.location.origin;
      
      const response = await fetch('/api/create-checkout-session-brl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${domain}/checkout/success`,
          cancelUrl: `${domain}/checkout/protocol-face`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      
      if (!data.sessionId) {
        throw new Error('No session ID returned');
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe not initialized');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId
      });

      if (error) {
        console.error('Stripe redirect error:', error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-[#D6D2D3]/80 backdrop-blur-lg z-50 border-b border-gray-100/20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/face-protocol" className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={30}
                className="h-8 w-auto object-contain brightness-0"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#35426A] px-3 py-1.5 rounded text-white text-sm font-medium">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#35426A] mb-2">
              Protocolo FaceKorea
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#35426A] mb-3">
              Escolha seu plano
            </h2>
            <p className="text-lg text-[#7286B2]">
              Comece sua transformação hoje mesmo
            </p>
          </div>

          {/* Discount Timer */}
          <div className="bg-[#35426A] text-white p-4 rounded-xl text-center mb-8">
            <span className="font-medium">Oferta especial expira em: </span>
            <span className="font-bold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
          </div>

          {/* Pricing Plans */}
          <div id="select-membership" className="space-y-4">
            {loadingPrices ? (
              // Loading skeleton
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                  <div className="space-y-3">
                    {Array(4).fill(0).map((_, j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded w-full"></div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              plans.map((plan) => (
                <div
                  key={plan.name}
                  onClick={() => !loading && setSelectedPlan(plan.name)}
                  className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-200
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                    ${selectedPlan === plan.name 
                      ? 'ring-2 ring-[#35426A] shadow-lg scale-[1.02]' 
                      : 'hover:shadow-md border border-gray-200'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-[#35426A] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Vantajoso
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center justify-between sm:block">
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-[#35426A]">{plan.name}</div>
                      </div>
                      
                      <div className="sm:hidden">
                        <div className="text-sm font-medium text-gray-500 mb-1">Apenas</div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#35426A]">R${plan.pricePerDay}</span>
                          <span className="text-sm text-gray-500">/dia</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block sm:text-right">
                      <div className="text-sm font-medium text-gray-500 mb-1">Apenas</div>
                      <div className="flex items-baseline gap-1 sm:justify-end">
                        <span className="text-3xl sm:text-4xl font-bold text-[#35426A]">R${plan.pricePerDay}</span>
                        <span className="text-sm text-gray-500">/dia</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#35426A]/5 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#35426A]" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!loading && plan.priceId) {
                        console.log('Clicked plan:', plan.name, 'with priceId:', plan.priceId); // Debug log
                        handleSubscribe(plan.priceId);
                      } else {
                        console.log('Button clicked but disabled:', { loading, priceId: plan.priceId }); // Debug log
                      }
                    }}
                    disabled={loading || !plan.priceId}
                    className={`w-full mt-6 py-3 px-4 rounded-lg text-white font-medium transition-all
                      ${selectedPlan === plan.name ? 'bg-[#35426A] hover:bg-[#35426A]/90' : 'bg-[#35426A]/90 hover:bg-[#35426A]'}
                      ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Processando...' : 'Selecionar este plano'}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-8 bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">Garantia de 7 dias</h3>
            <p className="text-gray-600">
              Receba 100% do seu dinheiro de volta se não ver resultados visíveis seguindo nosso programa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 