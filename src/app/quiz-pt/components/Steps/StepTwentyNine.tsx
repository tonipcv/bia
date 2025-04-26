"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { ArrowRight } from "lucide-react";

export default function StepTwentyNine() {
  const { 
    setCurrentStep, 
    currentStep, 
    unit, 
    weightSt, 
    weightLbs, 
    weightKg, 
    targetWeightSt, 
    targetWeightLbs, 
    targetWeightKg 
  } = useQuizContext();

  // Calculate weights for display
  const currentWeightDisplay = unit === 'imperial'
    ? `${weightSt}st ${weightLbs}lbs`
    : `${weightKg}kg`;

  const targetWeightDisplay = unit === 'imperial'
    ? `${targetWeightSt}st ${targetWeightLbs}lbs`
    : `${targetWeightKg}kg`;

  // Add new state variable for loading progress
  const [step30LoadingProgress, setStep30LoadingProgress] = useState(0);

  // Add useEffect for loading animation
  useEffect(() => {
    if (currentStep === 29) {
      const timer = setInterval(() => {
        setStep30LoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(timer);
    } else {
      setStep30LoadingProgress(0); // Reset quando sair do step
    }
  }, [currentStep]);

  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex items-center bg-gray-100 text-black px-4 py-2 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-bold">12-Week Program</span>
        </div>
        <h1 className="text-black text-3xl md:text-4xl font-bold tracking-[-0.03em] leading-tight mb-4">
          Your Potential Improvement
        </h1>
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="text-gray-900 text-xl font-medium tracking-[-0.03em] mb-2">
            We estimate that you can potentially reach:
          </p>
          <div className="text-black text-4xl font-bold my-3">
            {targetWeightDisplay}
          </div>
          <p className="text-gray-900 text-lg">target weight</p>
        </div>
      </div>

      {/* Weight Progress Visualization */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-black text-lg font-bold">Your achievable weight:</h3>
          <div className="bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
            12 weeks
          </div>
        </div>
      
        <div className="relative h-[200px]">
          {/* Curved Progress Line */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 300 200">
              <path
                d="M 50,50 C 100,50 200,150 250,150"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Current Weight Label */}
          <div className="absolute top-[40px] left-[40px]">
            <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              {currentWeightDisplay}
            </div>
            <div className="h-20 border-l-2 border-dashed border-gray-300 ml-6 mt-2">
              <span className="text-gray-900 text-xs block mt-2">W1</span>
            </div>
          </div>

          {/* Target Weight Label with Tooltip */}
          <div className="absolute bottom-[40px] right-[40px]">
            <div className="relative">
              <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                {targetWeightDisplay}
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-black rounded-full" />
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded">
                      Your weight after 12 weeks
                    </div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-20 border-l-2 border-dashed border-gray-300 ml-6 mt-2">
              <span className="text-gray-900 text-xs block mt-2">W12</span>
            </div>
          </div>

          {/* "Weight Stays Off" Arrow */}
          <div className="absolute bottom-[100px] right-[20px] transform rotate-[-30deg]">
            <div className="flex items-center">
              <span className="text-gray-900 text-sm mr-2">The weight stays off!</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
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