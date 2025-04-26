"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepTwentySeven() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Health index
        </h2>
        <p className="text-gray-700 mb-8">
          Your fitness declines with age, but it's not too late to reverse it.
        </p>
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/P27-E1-health-index.avif"
            alt="Health index explanation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={() => setCurrentStep(28)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
      >
        Continue
      </button>
    </div>
  );
} 