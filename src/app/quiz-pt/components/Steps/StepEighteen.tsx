"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface MenopauseOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const menopauseOptions: MenopauseOption[] = [
  { id: "perimenopause", label: "I'm in perimenopause", emoji: "🙋🏻‍♀", selected: false },
  { id: "menopause", label: "I'm in menopause", emoji: "🙋🏼‍♀️", selected: false },
  { id: "postmenopause", label: "I'm in postmenopause", emoji: "🙋🏽‍♀️", selected: false },
  { id: "none", label: "None of the above", emoji: "❌", selected: false },
];

export default function StepEighteen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<MenopauseOption[]>(menopauseOptions);

  useEffect(() => {
    if (answers && answers[18]) {
      const savedAnswer = answers[18];
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
    setCurrentStep(19);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Are you currently going
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          through menopause?
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