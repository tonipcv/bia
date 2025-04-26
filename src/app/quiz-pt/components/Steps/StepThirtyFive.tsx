"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

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

export default function StepThirtyFive() {
  const { setCurrentStep, currentStep } = useQuizContext();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showFaq, setShowFaq] = useState<string | null>(null);
  const [showMoneyBackPolicy, setShowMoneyBackPolicy] = useState(false);

  // Add pricing plans data
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

  // Add FAQ data
  const faqItems = [
    {
      question: "Why do women over 40 need a different approach to reach their fitness goals?",
      answer: "When women are getting older, the female hormone estrogen drops and women lose lean muscle mass and increase body fat. In order to reverse this process, it's time to change up your routine. Follow our custom-made exercise program and diet, including supplements for women over 40."
    }
  ];

  // Add countdown timer effect
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

  return (
    <div className="space-y-10">
      {/* Status Bar */}
      <div className="h-14 bg-gray-50 rounded-lg flex items-center justify-center px-6 border border-gray-200">
        <span className="text-lg font-medium text-black">Almost done!</span>
        <span className="ml-2 text-2xl animate-bounce">🎉</span>
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-black">
          Are you ready to commit?
        </h1>
      </div>

      {/* Description */}
      <div className="text-center bg-gray-50 rounded-lg p-4 border border-gray-200">
        <p className="text-lg md:text-xl font-medium tracking-[-0.03em] text-black">
          Our Wall Pilates plan requires only <span className="font-bold">10-15min</span> per day.
        </p>
      </div>

      {/* Commitment Options */}
      <div className="space-y-6">
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-20 rounded-lg flex items-center justify-between px-6
                   bg-gray-50 hover:bg-gray-100
                   border-2 border-gray-200 hover:border-gray-300
                   transition-all duration-300"
        >
          <span className="text-xl font-medium text-black">
            Yes, I will do my first Wall Pilates session tomorrow
          </span>
          <span className="text-4xl">💪🏼</span>
        </button>

        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-20 rounded-lg flex items-center justify-between px-6
                   bg-black hover:bg-gray-900
                   border-2 border-black
                   transition-all duration-300"
        >
          <span className="text-xl font-medium text-white">
            Yes! I will do my first Wall Pilates session today!
          </span>
          <span className="text-4xl">🙌🏼</span>
        </button>

        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="w-full h-20 rounded-lg flex items-center justify-between px-6
                   bg-white hover:bg-gray-50
                   border-2 border-gray-200 hover:border-gray-300
                   transition-all duration-300"
        >
          <span className="text-xl font-medium text-black">
            I'm not sure if I'm ready yet…
          </span>
          <span className="text-4xl">😅</span>
        </button>
      </div>
    </div>
  );
} 