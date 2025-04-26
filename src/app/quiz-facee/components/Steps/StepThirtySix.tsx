"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface PricingPlan {
  id: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  perDay: number;
  discountedPerDay: number;
  isPopular?: boolean;
  hasGift?: boolean;
}

const faqItems = [
  {
    question: "How long does it take to see results?",
    answer: "Most users start seeing initial results within 2-4 weeks of consistent practice. However, for optimal and lasting results, we recommend following the program for at least 12 weeks."
  },
  {
    question: "Is Face Yoga safe?",
    answer: "Yes, Face Yoga is completely safe when practiced correctly. Our program is designed by experts and includes detailed instructions to ensure proper technique."
  },
  {
    question: "How often should I practice?",
    answer: "For best results, we recommend practicing 10-15 minutes daily. Consistency is key to seeing improvements in facial tone and appearance."
  },
  {
    question: "Can Face Yoga replace cosmetic procedures?",
    answer: "While Face Yoga can provide natural lifting and toning effects, it works differently than cosmetic procedures. Many users find it a great natural alternative or complement to other treatments."
  }
];

export default function StepThirtySix() {
  const { setCurrentStep, currentStep, unit, targetWeightSt, targetWeightLbs, targetWeightKg } = useQuizContext();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showFaq, setShowFaq] = useState<string | null>(null);
  const [showMoneyBackPolicy, setShowMoneyBackPolicy] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: '1-week',
      duration: '1-WEEK PLAN',
      originalPrice: 18.66,
      discountedPrice: 7.28,
      perDay: 2.67,
      discountedPerDay: 1.04
    },
    {
      id: '4-week',
      duration: '4-WEEK PLAN',
      originalPrice: 40.90,
      discountedPrice: 15.95,
      perDay: 1.43,
      discountedPerDay: 0.57,
      isPopular: true
    },
    {
      id: '12-week',
      duration: '12-WEEK PLAN',
      originalPrice: 69.98,
      discountedPrice: 27.29,
      perDay: 0.82,
      discountedPerDay: 0.32,
      hasGift: true
    }
  ];

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

  // Handle payment function
  const handlePayment = async (planId: string) => {
    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          email,
          amount: pricingPlans.find(p => p.id === planId)?.discountedPrice,
          duration: pricingPlans.find(p => p.id === planId)?.duration,
        }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Failed to load Stripe');

      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) throw error;

    } catch (error) {
      console.error('Payment error:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="relative font-satoshi tracking-[-0.03em]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 px-2 sm:px-4 border-b border-gray-100">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between bg-gray-50 p-3 sm:p-4 rounded-lg">
            {/* Back Button */}
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="mx-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={25}
                className="h-auto w-auto object-contain brightness-0"
              />
            </div>

            {/* Timer */}
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="bg-gray-100 px-2 sm:px-3 py-1 rounded-lg">
                <div className="text-black text-base sm:text-lg font-bold">
                  {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </div>
              </div>

              {/* Get Plan Button */}
              <a href="#select-membership" className="bg-black text-white px-3 sm:px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-900 transition-colors">
                Get plan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-20 sm:mt-24 space-y-6 sm:space-y-8 px-2 sm:px-4 pb-8">
        {/* Progress Comparison */}
        <div className="bg-gray-50 p-3 sm:p-8 rounded-xl border border-gray-200">
          <h3 className="text-black text-center text-lg sm:text-xl font-bold mb-3 sm:mb-6">Your Body Transformation Journey</h3>
          <div className="grid grid-cols-2 gap-2 sm:gap-8">
            {/* Current State */}
            <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="text-black text-center text-sm sm:text-lg font-semibold mb-2 bg-gray-50 py-1 rounded-md">Current body</h3>
              <div className="relative">
                <Image
                  src="/P36-E1-flabby.webp"
                  alt="Current body"
                  width={200}
                  height={300}
                  className="mx-auto mb-2 sm:mb-4 rounded-md"
                  priority
                />
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-100 text-gray-900 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                  Before
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between items-center bg-gray-50 p-1.5 sm:p-2 rounded text-sm sm:text-base">
                  <span className="font-medium text-gray-700">Body fat</span>
                  <span className="font-bold text-black">30%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-1.5 sm:p-2 rounded text-sm sm:text-base">
                  <span className="font-medium text-gray-700">Healthy weight</span>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i <= 3 ? 'bg-black' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Target State */}
            <div className="bg-white p-2 sm:p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="text-black text-center text-sm sm:text-lg font-semibold mb-2 bg-gray-50 py-1 rounded-md">Target body</h3>
              <div className="relative">
                <Image
                  src="/P36-E2-fit.webp"
                  alt="Target body"
                  width={200}
                  height={300}
                  className="mx-auto mb-2 sm:mb-4 rounded-md"
                  priority
                />
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-100 text-gray-900 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                  After
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between items-center bg-gray-50 p-1.5 sm:p-2 rounded text-sm sm:text-base">
                  <span className="font-medium text-gray-700">Body fat</span>
                  <span className="font-bold text-black">20%</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 p-1.5 sm:p-2 rounded text-sm sm:text-base">
                  <span className="font-medium text-gray-700">Healthy weight</span>
                  <div className="flex gap-0.5 sm:gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight px-2">
          Your <span className="text-gray-900">Wall Pilates</span> plan for
          <br />
          women over 40 is ready!
        </h1>

        {/* Goals Card */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl grid grid-cols-2 gap-4 sm:gap-8 border border-gray-200">
          <div>
            <div className="mb-2">🏔️</div>
            <div className="text-sm text-gray-600">Goal</div>
            <div className="font-bold text-black">Toned Pilates body</div>
          </div>
          <div>
            <div className="mb-2">⚖️</div>
            <div className="text-sm text-gray-600">Target weight</div>
            <div className="font-bold text-black">
              {unit === 'imperial' 
                ? `${targetWeightSt}st ${targetWeightLbs}lbs`
                : `${targetWeightKg}kg`}
            </div>
          </div>
        </div>

        {/* Discount Timer */}
        <div className="bg-black text-white p-4 text-center rounded-lg mb-6">
          <span className="font-bold text-lg">60% discount expires in: </span>
          <span className="text-xl font-bold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
        </div>

        {/* Pricing Plans */}
        <div id="select-membership" className="space-y-3 sm:space-y-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative p-4 sm:p-6 rounded-xl cursor-pointer transition-all
                ${selectedPlan === plan.id 
                  ? 'bg-gray-50 border-2 border-black' 
                  : 'bg-white border border-gray-200'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-4 bg-black text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                  Most Popular
                </div>
              )}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600">{plan.duration}</div>
                  <div className="text-base sm:text-lg">
                    <span className="line-through text-gray-400">£{plan.originalPrice}</span>
                    {' '}
                    <span className="font-bold text-black">£{plan.discountedPrice}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="line-through text-gray-400 text-xs sm:text-sm">£{plan.perDay}/day</div>
                  <div className="text-2xl sm:text-4xl font-bold text-black">£{plan.discountedPerDay}</div>
                  <div className="text-xs sm:text-sm font-medium text-gray-900">per day</div>
                </div>
              </div>
              {plan.hasGift && (
                <div className="mt-2">
                  <span className="bg-gray-50 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-dashed border-gray-300">
                    +secret gift included🎁
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <button
          onClick={() => setShowMoneyBackPolicy(true)}
          className="text-center w-full text-lg font-medium text-black underline"
        >
          30-Day Money-Back Guarantee
        </button>

        {/* Select Membership Button - Only show when plan is selected */}
        {selectedPlan && (
          <>
            {/* Email Input */}
            <div className="bg-white rounded-xl p-6 mb-4 border border-gray-200">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to continue"
                className="w-full h-14 px-4 rounded-lg border border-gray-300 
                         placeholder-gray-400 focus:outline-none focus:border-black
                         text-black"
              />
            </div>

            {/* Confirmation Button */}
            <button
              disabled={!termsAgreed || !email}
              onClick={() => termsAgreed && email && setShowPaymentModal(true)}
              className={`w-full h-16 rounded-lg relative flex items-center justify-center
                text-white text-xl font-bold transition-all duration-300
                ${termsAgreed && email
                  ? 'bg-black hover:bg-gray-900' 
                  : 'bg-gray-300 cursor-not-allowed'}`}
            >
              CONFIRM SUBSCRIPTION
            </button>
          </>
        )}

        {/* Terms Agreement */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => setTermsAgreed(!termsAgreed)}
            className={`w-6 h-6 rounded border flex-shrink-0 flex items-center justify-center 
              transition-all duration-300 cursor-pointer
              ${termsAgreed 
                ? 'bg-black border-black' 
                : 'border-gray-300 bg-white hover:border-black'}`}
          >
            {termsAgreed && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <p className="text-gray-600 text-xs leading-relaxed">
            By clicking this, you agree to{' '}
            <button className="text-black underline">Terms of Service</button>
            {' '}and{' '}
            <button className="text-black underline">Privacy Policy</button>
            {' '}and to the £15.95 for the 4-week membership to Reverse Health...
          </p>
        </div>

        {/* App Screenshots */}
        <div>
          <h2 className="text-black text-3xl font-bold text-center mb-8">
            Use our easy-to-use mobile app to reach your goals
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <Image
              src="/P36-E3-fitness-screenshot-1.webp"
              alt="App screenshot 1"
              width={160}
              height={320}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/P36-E4-fitness-screenshot-2.webp"
              alt="App screenshot 2"
              width={200}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/P36-E5-fitness-screenshot-3.webp"
              alt="App screenshot 3"
              width={160}
              height={320}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-black text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl">
                <button
                  onClick={() => setShowFaq(showFaq === item.question ? null : item.question)}
                  className="w-full p-4 flex justify-between items-center text-black"
                >
                  <span>{item.question}</span>
                  <span>{showFaq === item.question ? '-' : '+'}</span>
                </button>
                {showFaq === item.question && (
                  <div className="p-4 bg-white rounded-b-xl text-gray-700 border-t border-gray-200">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee Card */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6">
          <h3 className="text-center font-bold mb-2 text-black">30-Day Money-Back Guarantee</h3>
          <p className="text-center mb-2 text-gray-700">
            Get 100% of your money back if you don't see visible results after following our program!
          </p>
          <button className="text-black text-center w-full underline">
            Money-back policy
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-4 sm:p-8 max-w-md w-full mx-auto">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h2 className="text-black text-2xl sm:text-3xl font-medium">
                Complete Your Purchase
              </h2>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Limited Spots Alert */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-black font-medium mb-1">Limited Spots Available!</p>
                <p className="text-sm text-gray-600">Only 7 spots left for today's enrollment</p>
              </div>
              
              <div className="text-center">
                <p className="text-black text-lg mb-2">
                  Selected Plan: {pricingPlans.find(p => p.id === selectedPlan)?.duration}
                </p>
                <p className="text-black text-3xl font-bold">
                  £{pricingPlans.find(p => p.id === selectedPlan)?.discountedPrice}
                </p>
              </div>
              
              <button
                onClick={() => selectedPlan && handlePayment(selectedPlan)}
                className="w-full h-14 bg-black hover:bg-gray-900 rounded-lg text-white font-medium
                         transition-all duration-300"
              >
                Secure Your Spot Now
              </button>
              
              <p className="text-center text-xs text-gray-500">
                By proceeding, you'll be redirected to our secure payment processor
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 