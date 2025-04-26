"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepThirtyThree() {
  const { setCurrentStep, currentStep, unit, weightSt, weightLbs, weightKg } = useQuizContext();

  // Calculate estimated weight loss (about 1-2% of current weight for first week)
  const calculateEstimatedLoss = () => {
    if (unit === 'imperial') {
      const totalLbs = (parseInt(weightSt) * 14) + parseInt(weightLbs);
      const weeklyLossLbs = Math.round(totalLbs * 0.015); // 1.5% loss
      return `${weeklyLossLbs} lbs`;
    } else {
      const weeklyLossKg = Math.round(parseInt(weightKg) * 0.015 * 10) / 10; // 1.5% loss, rounded to 1 decimal
      return `${weeklyLossKg} kg`;
    }
  };

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-[32px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight">
          <span className="text-gray-900">Estimated results in</span>
          <br />
          <span className="text-black">first 7 days</span>
        </h1>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-gray-900 text-lg font-medium tracking-[-0.03em] leading-relaxed">
          If you are active with our program,
          <br />
          we estimate that you can lose
        </p>
      </div>

      {/* Results Image with Dynamic Text */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src="/P33-E1-.avif"
          alt="Estimated results"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center">
          <div className="text-black text-5xl font-bold">
            {calculateEstimatedLoss()}
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