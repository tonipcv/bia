"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

interface WaterOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const waterOptions: WaterOption[] = [
  { id: "only_coffee", label: "Only coffee, tea or soda", emoji: "☕️", selected: false },
  { id: "less_than_2", label: "Less than 2 glasses", emoji: "🚰", selected: false },
  { id: "two_six", label: "2-6 glasses", emoji: "💧", selected: false },
  { id: "seven_ten", label: "7-10 glasses", emoji: "💦", selected: false },
  { id: "more_than_10", label: "More than 10 glasses", emoji: "🌊", selected: false },
];

export default function StepSixteen() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<WaterOption[]>(waterOptions);

  useEffect(() => {
    if (answers && answers[16]) {
      const savedAnswer = answers[16];
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
    setCurrentStep(17);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How much water
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          do you drink daily?
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