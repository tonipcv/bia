"use client";

import React from "react";
import { QuizProvider } from "./components/Quiz/QuizProvider";
import QuizSteps from "./components/Quiz/QuizSteps";
import Image from "next/image";
import { useQuizContext } from "./components/Quiz/QuizProvider";

function QuizContent() {
  const { currentStep, setCurrentStep } = useQuizContext();

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

    return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
          </button>
                <Image
                  src="/logo.png"
            alt="QuizHealtly Logo"
                  width={120}
            height={36}
            className="invert"
            priority
                />
          <div className="w-10" /> {/* Spacer for alignment */}
              </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <QuizSteps />
          </div>
        </div>
      </div>
    );
}

export default function Quiz() {
    return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}
