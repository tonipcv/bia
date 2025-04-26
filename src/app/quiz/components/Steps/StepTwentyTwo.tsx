"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepTwentyTwo() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="space-y-6 pb-24">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
          99% of exercise programs are
        </h2>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
          fantastic
        </h2>
      </div>

      <div className="bg-[#fcf9f0] p-4 sm:p-6 rounded-lg space-y-3">
        <p className="text-sm sm:text-base text-gray-700">
          However, they rarely focus on women's bodies changing needs over 40. Our program is designed to take into account these physiological changes so you can achieve your goals of your best body yet!
        </p>
      </div>

      <div className="relative w-full rounded-lg overflow-hidden">
        <Image
          src="/P22-E1-reached-goals-answer.avif"
          alt="Exercise program explanation"
          width={600}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={() => setCurrentStep(23)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
      >
        Continue
      </button>
    </div>
  );
} 