"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface ExerciseOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const exerciseOptions: ExerciseOption[] = [
  { id: "yes", label: "Yes, I was able to reach my goals", emoji: "👍🏼", selected: false },
  { id: "somewhat", label: "Somewhat", emoji: "😬", selected: false },
  { id: "no", label: "No, nothing has helped", emoji: "❌", selected: false },
  { id: "not_tried", label: "I haven't tried anything else", emoji: "🙄", selected: false },
];

export default function StepTwentyOne() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<ExerciseOption[]>(exerciseOptions);

  useEffect(() => {
    if (answers && answers[21]) {
      const savedAnswer = answers[21];
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
    setCurrentStep(22);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Has any other excercise
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          program helped you to
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          reach goals over 40?
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