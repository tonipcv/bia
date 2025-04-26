"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const areaOptions = [
  {
    id: "forehead",
    text: "Forehead",
    description: "Upper face region"
  },
  {
    id: "temples",
    text: "Temples",
    description: "Sides of forehead"
  },
  {
    id: "eyes",
    text: "Eyes",
    description: "Area around the eyes"
  },
  {
    id: "cheeks",
    text: "Cheeks",
    description: "Central face region"
  },
  {
    id: "jaw",
    text: "Jaw",
    description: "Jawline"
  },
  {
    id: "mouth",
    text: "Mouth",
    description: "Lip area"
  },
  {
    id: "chin",
    text: "Chin",
    description: "Lower face region"
  },
  {
    id: "neck",
    text: "Neck",
    description: "Neck region"
  },
  {
    id: "decolletage",
    text: "Décolletage",
    description: "Upper chest region"
  }
];

export default function StepSeventeen() {
  const { setCurrentStep } = useQuizContext();
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleArea = (id: string) => {
    setSelectedAreas(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleNext = () => {
    if (selectedAreas.length === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(18);
    }, 600);
  };

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Which areas would you like to focus on?
          </h2>
          <p className="text-gray-500">
            Select all that apply
          </p>
        </div>

        <div className="space-y-3">
          {areaOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleArea(option.id)}
              disabled={isTransitioning}
              className={`w-full p-4 rounded-xl border transition-all duration-200 text-left
                ${selectedAreas.includes(option.id)
                  ? "border-black bg-black text-white shadow-lg transform scale-[1.02]" 
                  : "border-gray-300 hover:border-black hover:bg-gray-50 text-gray-900 hover:shadow-md"
                }
                ${isTransitioning && !selectedAreas.includes(option.id) ? "opacity-50" : ""}
              `}
            >
              <div className="space-y-1">
                <p className="font-medium text-lg">
                  {option.text}
                </p>
                <p className={`text-sm ${selectedAreas.includes(option.id) ? "text-gray-300" : "text-gray-500"}`}>
                  {option.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="pt-6">
          <button
            onClick={handleNext}
            disabled={selectedAreas.length === 0 || isTransitioning}
            className={`w-full py-4 rounded-full font-medium transition-all duration-200
              ${selectedAreas.length > 0
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Continue
          </button>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(16)}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
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