"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface TimeOption {
  id: string;
  label: string;
  emoji: string;
}

const timeOptions: TimeOption[] = [
  { id: "less_than_1", label: "Less than 1 year", emoji: "😅" },
  { id: "1_to_3", label: "1-3 years", emoji: "😳" },
  { id: "3_to_5", label: "3-5 years", emoji: "😔" },
  { id: "more_than_5", label: "More than 5 years", emoji: "😢" },
];

export default function StepSix() {
  const { setCurrentStep } = useQuizContext();

  const handleSelect = () => {
    setCurrentStep(7);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How long has it been since you've felt good in your body?
        </h2>
      </div>

      <div className="grid gap-4">
        {timeOptions.map((option) => (
          <button
            key={option.id}
            onClick={handleSelect}
            className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-black/50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{option.emoji}</span>
              <span className="text-lg text-gray-700">{option.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 