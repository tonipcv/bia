// /components/Quiz/Steps/Step2.tsx
"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";
import Image from "next/image";

interface Goal {
  id: string;
  label: string;
  image: string;
  selected: boolean;
}

const goals: Goal[] = [
  { id: "lose_weight", label: "Lose weight", image: "/P2-E1-lose-weight.avif", selected: false },
  { id: "strength_flexibility", label: "More strength & flexibility", image: "/P2-E2-more-strength.avif", selected: false },
  { id: "slim_toned", label: "Get slim & toned body", image: "/P2-E3-get-slim.avif", selected: false },
  { id: "reduce_stress", label: "Reduce stress", image: "/P2-E4-reduce-stress.avif", selected: false },
];

export default function StepTwo() {
  const { setCurrentStep } = useQuizContext();
  const [selectedGoals, setSelectedGoals] = useState<Goal[]>(goals);

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.map(goal =>
        goal.id === id ? { ...goal, selected: !goal.selected } : goal
      )
    );
  };

  const hasSelectedGoals = selectedGoals.some(goal => goal.selected);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-black text-3xl font-bold mb-2">
          What is your goal?
        </h1>
        <p className="text-gray-600">
          You can select multiple options
        </p>
      </div>

      <div className="space-y-4">
        {selectedGoals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
              goal.selected
                ? "border-black bg-black/5"
                : "border-gray-200 hover:border-black/50"
            }`}
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex-1 flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                    goal.selected
                      ? "border-black bg-black"
                      : "border-gray-300"
                  }`}
                >
                  {goal.selected && (
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
                <span className={`text-lg ${goal.selected ? "text-black" : "text-gray-700"}`}>
                  {goal.label}
                </span>
              </div>
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
                <Image
                  src={goal.image}
                  alt={goal.label}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => setCurrentStep(3)}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 py-2.5 w-72 rounded-full text-white text-base font-medium bg-black hover:bg-gray-800 transition-all duration-200 sm:py-3 sm:w-96 sm:text-lg"
      >
        Continue
      </button>
    </div>
  );
}
