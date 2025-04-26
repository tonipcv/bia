"use client";

import React, { useState } from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const goals = [
  { id: "sculpt", text: "Sculpt the face" },
  { id: "fresh", text: "Fresher skin" },
  { id: "habits", text: "Healthy habits" },
  { id: "collagen", text: "Collagen stimulation" },
  { id: "routine", text: "Consistent routine" },
  { id: "tone", text: "Even skin tone" },
  { id: "spots", text: "Reduce spots" },
  { id: "mental", text: "Mental health" },
  { id: "doublechin", text: "Reduce double chin" },
  { id: "stress", text: "Stress relief" },
  { id: "lifting", text: "Facial lifting" },
  { id: "detox", text: "Detox" }
];

export default function StepFive() {
  const { setCurrentStep } = useQuizContext();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            What are your main goals?
          </h2>
          <p className="text-gray-500">
            Select all that apply
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-3 rounded-xl text-sm transition-all duration-200
                ${selectedGoals.includes(goal.id)
                  ? "bg-black text-white"
                  : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                }`}
            >
              {goal.text}
            </button>
          ))}
        </div>

        <div className="pt-6">
          <button
            onClick={() => setCurrentStep(6)}
            disabled={selectedGoals.length === 0}
            className={`w-full py-4 rounded-full font-medium transition-all duration-200
              ${selectedGoals.length > 0
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(4)}
          className="mx-auto text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
} 