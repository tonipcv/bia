"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { ArrowLeft, Check } from "lucide-react";

// Initialize Stripe
const stripePromise = loadStripe('pk_live_51RH370CodiLHkuBGaLVJROzrS9Onq2e3qXiEw7wCt5hwIstqAF9hP5MsnhrYGnDZ339MRWfasK9m0pkSAuI7nSfw00hZaVXWZL');

const defaultPlans = [
  {
    name: "Annual",
    price: "19",
    pricePerDay: "0.63",
    period: "per month",
    priceId: "",
    popular: true,
    features: [
      "Everything in the semi-annual plan",
      "Save £720 annually",
      "Lifetime access",
      "Individual mentoring"
    ]
  },
  {
    name: "Monthly",
    price: "79",
    pricePerDay: "2.63",
    period: "per month",
    priceId: "",
    features: [
      "Complete protocol access",
      "WhatsApp support",
      "Monthly updates",
      "7-day guarantee"
    ]
  },
  {
    name: "Semi-annual",
    price: "39",
    pricePerDay: "1.30",
    period: "per month",
    priceId: "",
    features: [
      "Everything in monthly plan",
      "Save £240",
      "Exclusive bonuses",
      "Extended guarantee"
    ]
  }
];

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState(defaultPlans);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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
    fetch('/api/setup-stripe-products')
      .then(response => response.json())
      .then(data => {
        if (data.prices) {
          setPlans(plans.map((plan, index) => ({
            ...plan,
            priceId: index === 0 ? data.prices.annual.id :
                     index === 1 ? data.prices.monthly.id :
                     data.prices.semiannual.id
          })));
        }
      })
      .catch(error => console.error('Error fetching prices:', error));
  }, []);

  const handleSubscribe = async (priceId: string) => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/uk/protocol-face`,
        }),
      });

      const { sessionId } = await response.json();
      
      const stripe = await stripePromise;
      const result = await stripe?.redirectToCheckout({
        sessionId
      });

      if (result?.error) {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
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
              <div className="bg-gray-100 px-3 py-1.5 rounded text-sm font-medium">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              FaceKorea Protocol
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Choose your plan
            </h2>
            <p className="text-lg text-gray-600">
              Start your transformation today
            </p>
          </div>

          {/* Discount Timer */}
          <div className="bg-black text-white p-4 rounded-xl text-center mb-8">
            <span className="font-medium">60% discount expires in: </span>
            <span className="font-bold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
          </div>

          {/* Pricing Plans */}
          <div id="select-membership" className="space-y-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-200
                  ${selectedPlan === plan.name 
                    ? 'ring-2 ring-black shadow-lg scale-[1.02]' 
                    : 'hover:shadow-md border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex items-center justify-between sm:block">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">{plan.name}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="line-through text-gray-400 text-sm">£{parseInt(plan.price) * 2}</span>
                        <span className="text-lg sm:text-xl font-bold text-gray-900">£{plan.price}</span>
                        <span className="text-sm text-gray-500">/month</span>
                      </div>
                    </div>
                    
                    <div className="sm:hidden">
                      <div className="text-sm font-medium text-gray-500 mb-1">Only</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900">£{plan.pricePerDay}</span>
                        <span className="text-sm text-gray-500">/day</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block sm:text-right">
                    <div className="text-sm font-medium text-gray-500 mb-1">Only</div>
                    <div className="flex items-baseline gap-1 sm:justify-end">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">£{plan.pricePerDay}</span>
                      <span className="text-sm text-gray-500">/day</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center">
                        <Check className="w-3 h-3 text-gray-900" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    plan.priceId && handleSubscribe(plan.priceId);
                  }}
                  disabled={loading || !plan.priceId}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all duration-200
                    ${plan.popular
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'bg-white text-gray-900 border-2 border-black hover:bg-black hover:text-white'
                    } ${(loading || !plan.priceId) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Processing...' : 'Choose plan'}
                </button>
              </div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-8 bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">7-Day Money-Back Guarantee</h3>
            <p className="text-gray-600">
              Get 100% of your money back if you don't see visible results following our program!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 