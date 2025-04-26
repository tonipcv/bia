"use client";

import React from "react";
import { useQuizContext } from "../Quiz/QuizProvider";

const mealOptions = [
  {
    id: "less_than_3",
    text: "Less than 3",
    description: "1-2 meals per day"
  },
  {
    id: "at_least_3",
    text: "At least 3",
    description: "3 or more meals per day"
  },
  {
    id: "varies",
    text: "Varies",
    description: "Irregular number of meals"
  }
];

export default function StepTen() {
  const { setCurrentStep } = useQuizContext();

  return (
    <div className="pb-24">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            How many meals do you have per day?
          </h2>
          <p className="text-gray-600">
            Choose the option that best describes your eating habits
          </p>
        </div>

        <div className="space-y-3">
          {mealOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setCurrentStep(11)}
              className="w-full p-5 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 group text-left"
            >
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-lg">
                  {option.text}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600">
                  {option.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <button
          onClick={() => setCurrentStep(9)}
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