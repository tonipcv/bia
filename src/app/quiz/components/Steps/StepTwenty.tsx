"use client";

import React, { useState, useEffect } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import { FoodAllergy } from "../../types/quiz.types";

interface AllergyOption {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
}

const allergyOptions: AllergyOption[] = [
  { id: "none", label: "None", emoji: "❌", selected: false },
  { id: "dairy", label: "Dairy", emoji: "🧀", selected: false },
  { id: "gluten", label: "Gluten", emoji: "🥐", selected: false },
  { id: "eggs", label: "Eggs", emoji: "🥚", selected: false },
  { id: "nuts", label: "Nuts", emoji: "🥜", selected: false },
  { id: "fish", label: "Fish", emoji: "🐟", selected: false },
  { id: "shellfish", label: "Shellfish", emoji: "🦐", selected: false },
  { id: "soy", label: "Soy", emoji: "🌱", selected: false },
  { id: "other", label: "Other", emoji: "🙄", selected: false },
];

export default function StepTwenty() {
  const { setCurrentStep, currentStep, answers } = useQuizContext();
  const [options, setOptions] = useState<AllergyOption[]>(allergyOptions);
  const [isNoneSelected, setIsNoneSelected] = useState(false);

  useEffect(() => {
    if (answers && answers[20]) {
      const savedAnswers = answers[20] as string[];
      setOptions(prev => prev.map(option => ({
        ...option,
        selected: savedAnswers.includes(option.id)
      })));
      setIsNoneSelected(savedAnswers.includes("none"));
    }
  }, [answers]);

  const handleSelect = (id: string) => {
    if (id === "none") {
      setIsNoneSelected(!isNoneSelected);
      setOptions(prev => prev.map(option => ({
        ...option,
        selected: option.id === "none" ? !isNoneSelected : false
      })));
    } else if (!isNoneSelected) {
      setOptions(prev => prev.map(option => ({
        ...option,
        selected: option.id === id ? !option.selected : option.selected
      })));
    }
  };

  const handleContinue = () => {
    setCurrentStep(21);
  };

  const hasSelectedOptions = options.some(option => option.selected);

  return (
    <div className="space-y-8 pb-24">
      <div className="text-center">
        <h1 className="text-black text-3xl font-bold mb-2">
          What food allergies
          <br />
          do you have?
        </h1>
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
            } ${isNoneSelected && option.id !== "none" ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isNoneSelected && option.id !== "none"}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  option.selected ? "border-black bg-black" : "border-gray-300"
                }`}>
                  {option.selected && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-lg text-gray-700">{option.label}</span>
              </div>
              <span className="text-2xl">{option.emoji}</span>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentStep(currentStep + 1)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
      >
        Continue
      </button>
    </div>
  );
} 