"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface WalkingOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const walkingOptions: WalkingOption[] = [
  { id: "less_than_20", label: "Less than 20 mins", emoji: "🚶🏻‍♀️", selected: false },
  { id: "twenty_to_sixty", label: "20-60 mins", emoji: "🚶🏻‍♀️🚶🏻‍♀️", selected: false },
  { id: "more_than_60", label: "More than 60 mins", emoji: "🚶🏻‍♀️🚶🏻‍♀️🚶🏻‍♀️", selected: false },
];

export default function StepSeventeen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<WalkingOption[]>(walkingOptions);

  useEffect(() => {
    if (answers && answers[17]) {
      const savedAnswer = answers[17];
      setOptions(prev => prev.map(option => ({
        ...option,
        selected: option.id === savedAnswer
      })));
    }
  }, [answers]);

  const handleSelect = (id: string) => {
    setOptions(prev => prev.map(option => ({
      ...option,
      selected: option.id === id
    })));
    setCurrentStep(18);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How much walking do you
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          get in on a typical day?
        </h2>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              option.selected
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-700">{option.label}</span>
              <span className="text-2xl">{option.emoji}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 