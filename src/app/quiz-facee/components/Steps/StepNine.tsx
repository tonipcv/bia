"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepNine() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/dep2.jpeg"
            alt="Resultados Naturais"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Boost your confidence with a unique combination of Face Yoga exercises and a personalized skincare routine
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 space-y-6 border border-gray-100">
          <p className="text-gray-600 text-lg leading-relaxed text-center font-light">
            Increase your confidence with a unique combination of Face Yoga exercises and a personalized skincare routine.
          </p>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <span className="text-gray-900 font-light">Targeted facial exercises</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <span className="text-gray-900 font-light">Personalized skincare routine</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-1 h-6 bg-black rounded-full"></div>
              <span className="text-gray-900 font-light">Long-lasting and natural results</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4 space-y-4">
        <button
          onClick={() => setCurrentStep(10)}
          className="w-full py-4 rounded-full font-light text-white bg-black hover:bg-gray-900 transition-all duration-300"
        >
          I want to start now
        </button>

        <button
          onClick={() => setCurrentStep(8)}
          className="mx-auto text-gray-400 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 font-light"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
} 