"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface DurationOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const durationOptions: DurationOption[] = [
  { id: "ten_fifteen", label: "10-15 min", emoji: "😌", selected: false },
  { id: "fifteen_twenty", label: "15-20 min", emoji: "😊", selected: false },
  { id: "twenty_thirty", label: "20-30 min", emoji: "💪", selected: false },
  { id: "thirty_plus", label: "30+ min", emoji: "⚡️", selected: false },
];

export default function StepTwelve() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<DurationOption[]>(durationOptions);

  useEffect(() => {
    if (answers && answers[12]) {
      const savedAnswer = answers[12];
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
    setCurrentStep(13);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How long would you like your sessions to be?
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