"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface SleepOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const sleepOptions: SleepOption[] = [
  { id: "less_than_5", label: "Fewer than 5", emoji: "🫣", selected: false },
  { id: "five_six", label: "5-6", emoji: "🥱", selected: false },
  { id: "seven_eight", label: "7-8", emoji: "😴", selected: false },
  { id: "eight_plus", label: "8+", emoji: "😊", selected: false },
];

export default function StepFifteen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<SleepOption[]>(sleepOptions);

  useEffect(() => {
    if (answers && answers[15]) {
      const savedAnswer = answers[15];
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
    setCurrentStep(16);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How many hours do you sleep per night?
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
            <div className="flex items-center gap-4">
              <span className="text-2xl">{option.emoji}</span>
              <span className={`text-lg ${option.selected ? "text-black" : "text-gray-700"}`}>
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 