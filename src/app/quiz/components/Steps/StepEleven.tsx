"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface FrequencyOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const frequencyOptions: FrequencyOption[] = [
  { id: "one_two", label: "1-2 times", emoji: "👍🏼", selected: false },
  { id: "three_four", label: "3-4 times", emoji: "💪🏼", selected: false },
  { id: "five_plus", label: "5+", emoji: "⚡️", selected: false },
];

export default function StepEleven() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<FrequencyOption[]>(frequencyOptions);

  useEffect(() => {
    // Recupera a resposta salva quando o componente é montado
    if (answers && answers[11]) {
      const savedAnswer = answers[11];
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
    setCurrentStep(12);
  };

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How many times per week do you want to exercise?
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