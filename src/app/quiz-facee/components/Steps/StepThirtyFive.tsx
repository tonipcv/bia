"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function StepThirtyFive() {
  const { setCurrentStep, currentStep } = useQuizContext();

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
          Our Face Yoga plan requires only <span className="font-bold">10-15min</span> per day.
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
            Yes, I will do my first Face Yoga session tomorrow
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
            Yes! I will do my first Face Yoga session today!
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