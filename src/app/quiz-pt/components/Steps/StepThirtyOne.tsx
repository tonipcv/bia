"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepThirtyOne() {
  const { setCurrentStep, currentStep } = useQuizContext();
  const [email, setEmail] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex items-center bg-gray-100 text-gray-900 px-4 py-2 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-bold">Top Rated 2025</span>
        </div>
        <h1 className="text-[32px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight mb-4">
          <span className="text-gray-900">The Best Women's Lifestyle</span>
          <br />
          <span className="text-black">& Fitness App in 2025</span>
        </h1>
        <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-sm mb-6">
          <p className="text-gray-900 text-lg font-medium tracking-[-0.03em] leading-relaxed">
            Join thousands of women who have transformed their lives with our award-winning app
          </p>
        </div>
      </div>

      {/* App Images with Captions */}
      <div className="space-y-6">
        <div className="rounded-2xl overflow-hidden shadow-lg relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <Image
            src="/P31-E2-best-fitness-app-women.avif"
            alt="Fitness app for women"
            width={600}
            height={400}
            className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <p className="text-white text-lg font-bold">Community Support</p>
            <p className="text-white/80 text-sm">Connect with women on the same journey</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={() => setCurrentStep(currentStep + 1)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
      >
        Continue
      </button>
    </div>
  );
} 