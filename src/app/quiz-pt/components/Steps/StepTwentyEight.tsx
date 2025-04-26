"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function StepTwentyEight() {
  const { setCurrentStep, currentStep } = useQuizContext();

  return (
    <div className="min-h-screen pb-32">
      <div className="space-y-8">
        {/* Title with Alert Badge */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gray-100 text-black px-4 py-2 rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">Action Required</span>
          </div>
          <h1 className="text-black text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
            Body Mass Index
          </h1>
          <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-lg border-l-4 border-black shadow-sm">
            <p className="text-gray-900 text-lg font-medium tracking-[-0.03em] leading-relaxed">
              Based on your quiz answers, your BMI shows that your weight may increase if you don't act now!
            </p>
          </div>
        </div>

        {/* BMI Image with Interactive Elements */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <Image
            src="/P28-E1-body-mass-index.avif"
            alt="Body mass index"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-gray-900 font-medium">Your current BMI</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <p className="text-gray-900 font-medium">Target BMI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
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