"use client";

import React, { useEffect, useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepThirty() {
  const { setCurrentStep, currentStep } = useQuizContext();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[32px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight">
            <span className="text-gray-900">Maintain your optimal weight and get your </span>
            <span className="text-black">Pilates Body</span>
          </h1>
        </div>

        {/* Loading Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/P30-E1-loading-pilates-program.webp"
            alt="Loading Pilates Program"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Loading Progress */}
        <div className="space-y-4">
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300 ease-linear"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="text-center text-gray-900 text-lg">
            Your plan is ready!
          </p>
        </div>

        {/* Message */}
        <div className="text-gray-900 text-xl md:text-3xl font-medium leading-relaxed text-left">
          If you follow our plan, you significantly increase your chances of maintaining a healthy weight for the rest of your life.
        </div>

        {/* Continue Button */}
        <button
          onClick={() => setCurrentStep(currentStep + 1)}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
} 