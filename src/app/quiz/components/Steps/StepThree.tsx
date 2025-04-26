"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

interface Experience {
  id: string;
  label: string;
  emoji: string;
}

const experiences: Experience[] = [
  { id: "regular", label: "Yes, I do it regularly", emoji: "😊" },
  { id: "before", label: "I've done it before", emoji: "💪🏼" },
  { id: "never", label: "I've never done it before", emoji: "🙅🏻‍♀️" },
];

export default function StepThree() {
  const { setCurrentStep } = useQuizContext();

  const handleSelect = () => {
    setCurrentStep(4);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Have you done Wall Pilates before?
        </h2>
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <button
            key={experience.id}
            onClick={handleSelect}
            className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-black/50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">{experience.emoji}</span>
              <span className="text-lg text-gray-700">{experience.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 