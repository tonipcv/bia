"use client";

import React from "react";
import { QuizProvider } from "./components/Quiz/QuizProvider";
import QuizSteps from "./components/Quiz/QuizSteps";
import Image from "next/image";
import { useQuizContext } from "./components/Quiz/QuizProvider";
import { ArrowLeft } from "lucide-react";

function QuizContent() {
  const { currentStep, setCurrentStep } = useQuizContext();

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF] py-12 px-4 sm:px-6 lg:px-8 font-normal tracking-[-0.03em]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`p-2 hover:bg-[#35426A]/10 rounded-full transition-colors ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeft className="w-5 h-5 text-[#35426A]" />
          </button>
          <Image
            src="/logo.png"
            alt="VUOM"
            width={120}
            height={36}
            className="brightness-0"
            priority
          />
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-100/20">
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
