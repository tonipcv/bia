// /components/Quiz/Steps/Step1.tsx
"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepOne() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-20">
      <div className="space-y-10">
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold mb-3 tracking-[-0.03em]">
            Korean Protocol for Rejuvenation
          </h1>
          <p className="text-gray-600 text-xl font-bold max-w-[75%] mx-auto leading-snug tracking-[-0.03em]">
            28-Day Personalized Plan
          </p>
        </div>

        <div className="w-[75%] mx-auto">
          <Image
            src="/ad-vuom.png"
            alt="Korean Protocol"
            width={600}
            height={338}
            className="w-full h-auto rounded-xl shadow-md"
            priority
          />
        </div>

        <div className="text-center">
          <h2 className="text-gray-600 text-xl font-bold leading-tight tracking-[-0.03em]">
            Discover how to transform your skin
            <br />
            and boost your self-esteem with VUOM™'s
            <br />
            personalized Korean protocol
          </h2>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setCurrentStep(2)}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
        >
          Create plan now!
        </button>
      </div>
    </div>
  );
}
