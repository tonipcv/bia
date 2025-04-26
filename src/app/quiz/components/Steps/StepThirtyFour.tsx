"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

export default function StepThirtyFour() {
  const { setCurrentStep, currentStep } = useQuizContext();

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-[32px] md:text-[38px] font-medium tracking-[-0.03em] leading-tight">
          <span className="text-gray-900">Our program and coaches</span>
          <br />
          <span className="text-black">featured in</span>
        </h1>
      </div>

      {/* Media Logos - First Row */}
      <div className="grid grid-cols-3 gap-6 max-w-[600px] mx-auto px-4">
        <div className="flex items-center justify-center">
          <Image
            src="/P34-E1-daily_mirror.png"
            alt="Daily Mirror"
            width={120}
            height={30}
            className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/P34-E2-forbeshealth.png"
            alt="Forbes Health"
            width={120}
            height={30}
            className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/P34-E3-yahoofinance.png"
            alt="Yahoo Finance"
            width={120}
            height={30}
            className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      {/* Media Logos - Second Row */}
      <div className="grid grid-cols-3 gap-6 max-w-[600px] mx-auto px-4">
        <div className="flex items-center justify-center">
          <Image
            src="/P34-E4-sky.png"
            alt="Sky"
            width={120}
            height={30}
            className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/P34-E5-theguardian.png"
            alt="The Guardian"
            width={120}
            height={30}
            className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/P34-E6-oregon-1.png"
            alt="Oregon"
            width={120}
            height={30}
            className="h-auto w-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      {/* Workouts Info Card */}
      <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-6 text-center max-w-[600px] mx-auto">
        <p className="text-sm">
          <span className="text-black font-medium">Over 200+</span>
          {' '}
          <span className="text-gray-600">
            personalized workouts made by globally recognized experts.
          </span>
        </p>
      </div>

      {/* Testimonials Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src="/P34-E7-authority-related-testimonials.avif"
          alt="Authority related testimonials"
          fill
          className="object-cover"
          priority
        />
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