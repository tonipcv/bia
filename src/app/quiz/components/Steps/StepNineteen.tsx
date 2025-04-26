"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface DietOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const dietOptions: DietOption[] = [
  { id: "everything", label: "I eat everything", emoji: "🥘", selected: false },
  { id: "low_carb", label: "I eat low-carb", emoji: "🥑", selected: false },
  { id: "vegetarian", label: "I'm a vegetarian", emoji: "🥬", selected: false },
  { id: "vegan", label: "I'm a vegan", emoji: "🍆", selected: false },
  { id: "pescatarian", label: "I'm a pescatarian", emoji: "🐟", selected: false },
  { id: "carnitarian", label: "I'm a carnitarian", emoji: "🥩", selected: false },
];

export default function StepNineteen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<DietOption[]>(dietOptions);

  useEffect(() => {
    if (answers && answers[19]) {
      const savedAnswer = answers[19];
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
    setCurrentStep(20);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How would you define
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          your diet?
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