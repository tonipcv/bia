"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const ratingOptions = [1, 2, 3, 4, 5];

export default function StepTwentySeven() {
  const { setCurrentStep } = useQuizContext();
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (value: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedRating(value);
    setTimeout(() => {
      setCurrentStep(28);
    }, 600);
  };

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Sua aparência afeta seus relacionamentos?
          </h2>
          <p className="text-gray-600">
            Em uma escala de 1 a 5, onde 1 é "Nada" e 5 é "Totalmente"
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          {ratingOptions.map((value) => (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              disabled={isTransitioning}
              className={`w-10 h-10 rounded-md border-2 transition-all duration-200 flex items-center justify-center text-gray-900 font-medium
                ${selectedRating === value 
                  ? "border-gray-900 bg-gray-900 text-white transform scale-110" 
                  : "border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                }
                ${isTransitioning && selectedRating !== value ? "opacity-50" : ""}
              `}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(23)}
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