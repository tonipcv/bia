"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const cycleOptions = [
  {
    id: "regular",
    text: "Regular",
  },
  {
    id: "irregular",
    text: "Irregular",
  },
  {
    id: "no_cycle",
    text: "Não tenho ciclo (idade ou condição médica)",
  },
  {
    id: "prefer_not",
    text: "Prefiro não responder",
  }
];

export default function StepThirty() {
  const { setCurrentStep } = useQuizContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedOption(optionId);
    setTimeout(() => {
      setCurrentStep(31);
    }, 600);
  };

  return (
    <div className="pb-24 max-w-2xl mx-auto px-4">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Seu ciclo menstrual é:
          </h2>
        </div>

        <div className="space-y-3">
          {cycleOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={isTransitioning}
              className={`w-full p-4 rounded-xl border transition-all duration-200 text-left
                ${selectedOption === option.id 
                  ? "border-black bg-black text-white shadow-lg transform scale-[1.02]" 
                  : "border-gray-300 hover:border-black hover:bg-gray-50 text-gray-900 hover:shadow-md"
                }
                ${isTransitioning && selectedOption !== option.id ? "opacity-50" : ""}
              `}
            >
              <span className="text-lg font-medium">{option.text}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(29)}
          disabled={isTransitioning}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2 disabled:opacity-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
      </div>
    </div>
  );
} 