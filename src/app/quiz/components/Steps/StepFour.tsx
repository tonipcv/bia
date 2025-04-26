"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepFour() {
  const { setCurrentStep } = useQuizContext();

  const handleContinue = () => {
    setCurrentStep(5);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          KTX Pilates - the most effective exercise for women over 40
        </h2>
      </div>

      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src="/P4-E1-why-pilates.avif"
          alt="Wall Pilates Exercise"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6 text-gray-700">
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-lg leading-relaxed">
            Wall Pilates is a gentle yet powerful form of exercise that combines the principles of traditional Pilates with the support and stability of a wall. It's particularly effective for women over 40 because:
          </p>
        </div>
        
        <div className="grid gap-3">
          {[
            "Low impact on joints while building strength",
            "Improves posture and balance",
            "Helps prevent osteoporosis",
            "Reduces back pain and muscle tension",
            "Perfect for all fitness levels"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                <span className="text-sm font-medium text-black">{index + 1}</span>
              </div>
              <span className="text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleContinue}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
      >
        Continue
      </button>
    </div>
  );
} 